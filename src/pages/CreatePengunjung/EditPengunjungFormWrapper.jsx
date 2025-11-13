import { FaInfoCircle, FaKeyboard, FaSpinner, FaTimes } from "react-icons/fa";
import VirtualKeyboard from "./VirtualKeyboard";
import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";
import useDataStore from "../../store/useDataStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose, isKeyboardEnabled: parentKeyboardEnabled, toggleKeyboard: parentToggleKeyboard }) => {
  const { updatePengunjung } = useDataStore();
  const [formData, setFormData] = useState({
    nama: newPengunjung.nama || "",
    jenis_kelamin: newPengunjung.jenis_kelamin || "",
    nik: newPengunjung.nik || "",
    alamat: newPengunjung.alamat || "",
    hp: newPengunjung.hp || "",
    hubungan_keluarga: newPengunjung.hubungan_keluarga || "",
    tujuan: newPengunjung.tujuan || "Berkunjung",
    kode: newPengunjung.kode || "",
    pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
    pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
    pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
    pengikut_bayi: newPengunjung.pengikut_bayi || 0,
    total_pengikut: newPengunjung.total_pengikut || 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');
  
  const [ambilAntrian, setAmbilAntrian] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [isDataSaved, setIsDataSaved] = useState(false);

  const [showModalKtp, setShowModalKtp] = useState(false);
  const [showModalPengunjung, setShowModalPengunjung] = useState(false);
  const [showModalBarcode, setShowModalBarcode] = useState(false);

  const [isPc, setIsPc] = useState(false);

  const navigate = useNavigate();

  // State untuk keyboard enabled di EditPengunjungFormWrapper
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(parentKeyboardEnabled !== undefined ? parentKeyboardEnabled : true);

  // Sync dengan parent component jika prop berubah
  useEffect(() => {
    if (parentKeyboardEnabled !== undefined) {
      setIsKeyboardEnabled(parentKeyboardEnabled);
    }
  }, [parentKeyboardEnabled]);

  const toggleKeyboard = () => {
    const newState = !isKeyboardEnabled;
    setIsKeyboardEnabled(newState);
    localStorage.setItem('virtualKeyboardEnabled', JSON.stringify(newState));
    
    // Jika ada parentToggleKeyboard, panggil juga
    if (parentToggleKeyboard) {
      parentToggleKeyboard();
    } else {
      toast.success(`Keyboard virtual ${newState ? 'diaktifkan' : 'dinonaktifkan'}`);
    }
  };

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isTablet = /tablet|ipad/i.test(userAgent);
      const isPcDevice = !isMobile && !isTablet;
      
      setIsPc(isPcDevice);
    };

    checkDevice();
  }, []);

  const authUser = JSON.parse(localStorage.getItem('authUser'));

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    if (authUser && authUser.user && authUser.user.role === 'admin') {
      setIsAdmin(true);
    }
    
    const initialTotal = calculateTotalPengikut(formData);
    setFormData(prev => ({
      ...prev,
      total_pengikut: initialTotal
    }));
  }, []);

  const hasPengikutChanges = () => {
    return (
      formData.pengikut_laki_laki !== newPengunjung.pengikut_laki_laki ||
      formData.pengikut_perempuan !== newPengunjung.pengikut_perempuan ||
      formData.pengikut_anak_anak !== newPengunjung.pengikut_anak_anak ||
      formData.pengikut_bayi !== newPengunjung.pengikut_bayi ||
      formData.total_pengikut !== newPengunjung.total_pengikut
    );
  };

  const savePengunjungData = async () => {
    setLoading(true);
    setError("");

    try {
      await updatePengunjung(newPengunjung.id, formData);
      toast.success("Data pengunjung berhasil diperbarui!");
      setIsDataSaved(true);
      return true;
    } catch (error) {
      console.error("Error: ", error);
      setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
      toast.error("Gagal memperbarui data pengunjung.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const finish = async () => {
    if (hasPengikutChanges() && !isDataSaved) {
      const shouldSave = window.confirm(
        "Data jumlah pengikut telah berubah. Apakah Anda ingin menyimpan perubahan sebelum melanjutkan?"
      );
      
      if (shouldSave) {
        const success = await savePengunjungData();
        if (!success) {
          const continueAnyway = window.confirm(
            "Gagal menyimpan data. Apakah Anda ingin melanjutkan tanpa menyimpan perubahan?"
          );
          if (!continueAnyway) {
            return;
          }
        }
      }
    }

    if (!ambilAntrian && formData.tujuan === "Menitip barang") {
      navigate(`/label/${newPengunjung.id}`);
    } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
      navigate(`/pengunjung/${newPengunjung.id}`);
    } else {
      navigate('/');
    }
  };

  const handleVirtualKeyPress = (key) => {
    if (key === 'backspace') {
      setKeyboardValue(prev => prev.slice(0, -1));
      handleInputUpdate('backspace');
    } else if (key === 'enter') {
      setShowVirtualKeyboard(false);
    } else if (key === 'space') {
      setKeyboardValue(prev => prev + ' ');
      handleInputUpdate(' ');
    } else if (key === 'clear') {
      setKeyboardValue('');
      handleInputUpdate('clear');
    } else if (key === 'tab') {
      // Switch between inputs
    } else {
      setKeyboardValue(prev => prev + key);
      handleInputUpdate(key);
    }
  };

  const handleInputUpdate = (key) => {
    let newValue = '';
    
    if (key === 'backspace') {
      newValue = keyboardValue.slice(0, -1);
    } else if (key === 'clear') {
      newValue = '';
    } else if (key === ' ') {
      newValue = keyboardValue + ' ';
    } else {
      newValue = keyboardValue + key;
    }

    switch (activeInput) {
      case 'nama':
        setFormData(prev => ({ ...prev, nama: newValue }));
        break;
      case 'nik':
        setFormData(prev => ({ ...prev, nik: newValue }));
        break;
      case 'hp':
        setFormData(prev => ({ ...prev, hp: newValue }));
        break;
      case 'alamat':
        setFormData(prev => ({ ...prev, alamat: newValue }));
        break;
      case 'hubungan_keluarga':
        setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
        break;
      case 'kode':
        setFormData(prev => ({ ...prev, kode: newValue }));
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (inputType, currentValue = '') => {
    if (!isPc || !isKeyboardEnabled) return; // Cek apakah keyboard diaktifkan
    
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    setShowVirtualKeyboard(true);
  };

  const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="p-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        </div>
      </div>
    );
  };

  const calculateTotalPengikut = (data) => {
    const total = 
      parseInt(data.pengikut_laki_laki || 0) +
      parseInt(data.pengikut_perempuan || 0) +
      parseInt(data.pengikut_anak_anak || 0) +
      parseInt(data.pengikut_bayi || 0);
    return total;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    
    if (name.includes('pengikut_') && name !== 'total_pengikut') {
      updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
      setIsDataSaved(false);
    }
    
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await savePengunjungData();
    
    if (success) {
      setTimeout(() => {
        if (onClose) onClose();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            ✏️ Edit Data Pengunjung Baru
          </h1>
          <div className="space-x-2">
            <button
              onClick={onBack}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              ← Tambah Lagi
            </button>
            <button
              onClick={finish}
              className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
            >
              Selesai
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            {error}
          </div>
        )}

        {hasPengikutChanges() && !isDataSaved && (
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 rounded">
            <p className="flex items-center">
              <FaInfoCircle className="mr-2" />
              <strong>Perhatian:</strong> Data jumlah pengikut telah berubah. Pastikan untuk menyimpan perubahan sebelum menekan tombol "Selesai".
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1">
          <div className="space-y-4">
            <div className="space-y-4">            
               <div className="flex items-center justify-between">
                 <label className="block text-sm font-medium text-gray-700 flex items-center">
                   <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                   Jumlah Pengikut
                 </label>
                 <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                   Total: <span className="font-bold text-purple-600">{formData.total_pengikut}</span>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 {/* Laki-laki */}
                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                   <div className="flex items-center justify-between mb-3">
                     <div className="flex items-center space-x-2">
                       <span className="text-2xl">👨</span>
                       <span className="font-semibold text-gray-800">Laki-laki</span>
                     </div>
                     <div className="px-3 py-1 bg-white rounded-lg border border-blue-200 shadow-sm">
                       <span className="text-sm font-bold text-blue-600">
                         {formData.pengikut_laki_laki}
                       </span>
                     </div>
                   </div>

                   <div className="flex items-center justify-between space-x-2">
                     <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
                        if (currentValue > 0) {
                          const updatedFormData = {
                            ...formData,
                            pengikut_laki_laki: currentValue - 1
                          };
                          updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                          setFormData(updatedFormData);
                        }
                      }}
                      className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                        parseInt(formData.pengikut_laki_laki) > 0 
                          ? 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300' 
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95`}
                      disabled={parseInt(formData.pengikut_laki_laki) <= 0}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        <span>Kurang</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_laki_laki: currentValue + 1
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah</span>
                      </div>
                    </button>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        const updatedFormData = {
                          ...formData,
                          pengikut_laki_laki: 0
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_laki_laki: currentValue + 5
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      +5
                    </button>
                  </div>
                </div>

                {/* Perempuan */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">👩</span>
                      <span className="font-semibold text-gray-800">Perempuan</span>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-lg border border-pink-200 shadow-sm">
                      <span className="text-sm font-bold text-pink-600">
                        {formData.pengikut_perempuan}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_perempuan) || 0;
                        if (currentValue > 0) {
                          const updatedFormData = {
                            ...formData,
                            pengikut_perempuan: currentValue - 1
                          };
                          updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                          setFormData(updatedFormData);
                        }
                      }}
                      className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                        parseInt(formData.pengikut_perempuan) > 0 
                          ? 'bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300' 
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                      } focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95`}
                      disabled={parseInt(formData.pengikut_perempuan) <= 0}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        <span>Kurang</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_perempuan) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_perempuan: currentValue + 1
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah</span>
                      </div>
                    </button>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        const updatedFormData = {
                          ...formData,
                          pengikut_perempuan: 0
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_perempuan) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_perempuan: currentValue + 5
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      +5
                    </button>
                  </div>
                </div>

                {/* Anak-anak */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🧒</span>
                      <span className="font-semibold text-gray-800">Anak-anak</span>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-lg border border-green-200 shadow-sm">
                      <span className="text-sm font-bold text-green-600">
                        {formData.pengikut_anak_anak}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
                        if (currentValue > 0) {
                          const updatedFormData = {
                            ...formData,
                            pengikut_anak_anak: currentValue - 1
                          };
                          updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                          setFormData(updatedFormData);
                        }
                      }}
                      className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                        parseInt(formData.pengikut_anak_anak) > 0 
                          ? 'bg-white text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-300' 
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                      } focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95`}
                      disabled={parseInt(formData.pengikut_anak_anak) <= 0}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        <span>Kurang</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_anak_anak: currentValue + 1
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah</span>
                      </div>
                    </button>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        const updatedFormData = {
                          ...formData,
                          pengikut_anak_anak: 0
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_anak_anak: currentValue + 5
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      +5
                    </button>
                  </div>
                </div>

                {/* Bayi */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">👶</span>
                      <span className="font-semibold text-gray-800">Bayi</span>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-lg border border-purple-200 shadow-sm">
                      <span className="text-sm font-bold text-purple-600">
                        {formData.pengikut_bayi}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_bayi) || 0;
                        if (currentValue > 0) {
                          const updatedFormData = {
                            ...formData,
                            pengikut_bayi: currentValue - 1
                          };
                          updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                          setFormData(updatedFormData);
                        }
                      }}
                      className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                        parseInt(formData.pengikut_bayi) > 0 
                          ? 'bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300' 
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95`}
                      disabled={parseInt(formData.pengikut_bayi) <= 0}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        <span>Kurang</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_bayi) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_bayi: currentValue + 1
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah</span>
                      </div>
                    </button>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        const updatedFormData = {
                          ...formData,
                          pengikut_bayi: 0
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const currentValue = parseInt(formData.pengikut_bayi) || 0;
                        const updatedFormData = {
                          ...formData,
                          pengikut_bayi: currentValue + 5
                        };
                        updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                        setFormData(updatedFormData);
                      }}
                      className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      +5
                    </button>
                  </div>
                </div>
              </div>              
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <FaSpinner className="animate-spin mr-2" />
                  Memproses...
                </span>
              ) : (
                "💾 Simpan Perubahan"
              )}
            </button>
          </div>
        </form>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
        >
          + Tambah Barang Titipan
        </button>

        <CreateBarangTitipanModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pengunjungs={newPengunjung}
        />

        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-blue-700 text-sm">
            <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
          </p>
        </div>
      </div>

      {/* Floating Action Button untuk Keyboard di EditPengunjungFormWrapper */}
      <button
        onClick={toggleKeyboard}
        className={`fixed right-6 bottom-6 z-40 group relative p-4 rounded-full shadow-2xl focus:outline-none focus:ring-4 transition-all duration-300 transform hover:scale-110 ${
          isKeyboardEnabled 
            ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300' 
            : 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300'
        }`}
        title={`${isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual`}
      >
        <FaKeyboard className="w-6 h-6" />
        
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
        </div>
      </button>

      <ImageModal
        isOpen={showModalKtp}
        onClose={() => setShowModalKtp(false)}
        imageUrl={newPengunjung.photo_ktp}
        title="Foto KTP"
      />
      
      <ImageModal
        isOpen={showModalPengunjung}
        onClose={() => setShowModalPengunjung(false)}
        imageUrl={newPengunjung.photo_pengunjung}
        title="Foto Pengunjung"
      />

      <ImageModal
        isOpen={showModalBarcode}
        onClose={() => setShowModalBarcode(false)}
        imageUrl={newPengunjung.barcode}
        title="Barcode/QR Code"
      />

      {/* Virtual Keyboard - hanya muncul jika diaktifkan */}
      {showVirtualKeyboard && isKeyboardEnabled && (
        <VirtualKeyboard 
          onKeyPress={handleVirtualKeyPress}
          onClose={() => setShowVirtualKeyboard(false)}
          value={keyboardValue}
          activeInput={activeInput}
          onInputChange={handleInputUpdate}
        />
      )}
      
    </div>
  );
};

export default EditPengunjungFormWrapper;