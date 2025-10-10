// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useDataStore from "../../store/useDataStore";
// import { FaBoxOpen, FaUser, FaPlus, FaInfoCircle } from "react-icons/fa";

// const CreateBarangTitipanModal = ({ isOpen, onClose, pengunjungs }) => {
//   const { createTitipan } = useDataStore();
//   const [formData, setFormData] = useState({
//     pengunjung_id: "",
//     jenis_barang: "",
//     jumlah: "",
//     keterangan: "",
//   });
//   const [error, setError] = useState("");

//   // Handle perubahan input
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validasi form
//     if (!formData.pengunjung_id || !formData.jenis_barang || !formData.jumlah) {
//       setError("Pastikan pengunjung_id, jenis_barang, dan jumlah diisi.");
//       return;
//     }

//     // Reset error
//     setError("");

//     // Panggil fungsi createTitipan dari Zustand
//     try {
//       await createTitipan(formData, setError);
//       toast.success("Barang titipan berhasil dibuat!"); // Notifikasi sukses

//       // Reset form setelah berhasil
//       setFormData({
//         pengunjung_id: "",
//         jenis_barang: "",
//         jumlah: "",
//         keterangan: "",
//       });

//       // Tutup modal
//       onClose();
//     } catch (err) {
//       console.error("Error saat membuat barang titipan:", err);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
//         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//           <div className="flex items-center space-x-4">
//             <FaBoxOpen className="w-10 h-10" />
//             <h2 className="text-3xl font-bold">Tambah Barang Titipan</h2>
//           </div>
//           <p className="mt-2 text-sm opacity-90">
//             Isi formulir di bawah ini untuk menambahkan barang titipan baru.
//           </p>
//         </div>
//         <div className="p-8">
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
//               <FaInfoCircle className="inline-block mr-2" />
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUser className="inline-block mr-2" />
//                 Pilih Pengunjung
//               </label>
//               <select
//                 name="pengunjung_id"
//                 value={formData.pengunjung_id}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 required
//               >
//                 <option value="">Pilih Pengunjung</option>
                
//                   <option key={pengunjungs.id} value={pengunjungs.id}>
//                     {pengunjungs.nama} (NIK: {pengunjungs.nik})
//                   </option>
//               </select>
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaBoxOpen className="inline-block mr-2" />
//                 Jenis Barang
//               </label>
//               <select
//                 name="jenis_barang"
//                 value={formData.jenis_barang}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 required
//               >
//                 <option value="">Pilih Jenis Barang</option>
                
//                   <option  value="Makanan">
//                     Makanan
//                   </option>
//                   <option  value="Pakaian">
//                     Pakaian
//                   </option>
//                   <option  value="Obat">
//                     Obat
//                   </option>
//                   <option  value="Alat mandi">
//                     Alat mandi
//                   </option>
//                   <option  value="Uang">
//                     Uang
//                   </option>
//               </select>
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaBoxOpen className="inline-block mr-2" />
//                 Jumlah
//               </label>
//               <input
//                 type="number"
//                 name="jumlah"
//                 value={formData.jumlah}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 placeholder="Masukkan Jumlah Barang"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaInfoCircle className="inline-block mr-2" />
//                 Keterangan (Opsional)
//               </label>
//               <textarea
//                 name="keterangan"
//                 value={formData.keterangan}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 placeholder="Masukkan Keterangan"
//                 rows="3"
//               />
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
//               >
//                 Batal
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
//               >
//                 <FaPlus className="inline-block mr-2" />
//                 Tambah Barang Titipan
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateBarangTitipanModal;

import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDataStore from "../../store/useDataStore";
import { FaBoxOpen, FaUser, FaPlus, FaInfoCircle, FaTimes, FaKeyboard } from "react-icons/fa";

// Komponen Virtual Keyboard untuk CreateBarangTitipanModal
const VirtualKeyboardBarang = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
  const [isShift, setIsShift] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const keyboardRef = useRef(null);

  const alphaRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  const symbolRows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '_', '@', '#', '$', '%', '&', '*', '(', ')'],
    ['.', ',', '!', '?', ':', ';', '"', "'"],
  ];

  const numberRows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '.', 'backspace'],
  ];

  const currentRows = activeInput === 'jumlah' ? numberRows : (isSymbol ? symbolRows : alphaRows);

  // Handle drag start
  const handleDragStart = (clientX, clientY) => {
    if (!keyboardRef.current) return;
    
    setIsDragging(true);
    const rect = keyboardRef.current.getBoundingClientRect();
    
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  // Handle drag movement
  const handleDragMove = (clientX, clientY) => {
    if (!isDragging || !keyboardRef.current) return;
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    const keyboardWidth = keyboardRef.current.offsetWidth;
    const keyboardHeight = keyboardRef.current.offsetHeight;
    const maxX = window.innerWidth - keyboardWidth;
    const maxY = window.innerHeight - keyboardHeight;
    
    setPosition({
      x: Math.max(10, Math.min(newX, maxX - 10)),
      y: Math.max(10, Math.min(newY, maxY - 10))
    });
  };

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
    e.preventDefault();
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Event listeners untuk drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleDragEnd);
      
      document.body.style.overflow = 'hidden';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      
      document.body.style.overflow = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, dragOffset]);

  // Set posisi awal
  useEffect(() => {
    const updateInitialPosition = () => {
      if (keyboardRef.current) {
        const keyboardWidth = keyboardRef.current.offsetWidth;
        const keyboardHeight = keyboardRef.current.offsetHeight;
        
        setPosition({
          x: (window.innerWidth - keyboardWidth) / 2,
          y: window.innerHeight - keyboardHeight - 20
        });
      }
    };

    setTimeout(updateInitialPosition, 100);
    window.addEventListener('resize', updateInitialPosition);
    return () => window.removeEventListener('resize', updateInitialPosition);
  }, []);

  const handleKeyClick = (key) => {
    if (key === 'backspace') {
      onKeyPress('backspace');
      if (onInputChange) onInputChange('backspace');
    } else {
      const finalKey = isShift ? key.toUpperCase() : key;
      onKeyPress(finalKey);
      if (onInputChange) onInputChange(finalKey);
    }
  };

  const handleSpecialKey = (action) => {
    switch (action) {
      case 'shift':
        setIsShift(!isShift);
        break;
      case 'symbol':
        setIsSymbol(!isSymbol);
        setIsShift(false);
        break;
      case 'space':
        onKeyPress(' ');
        if (onInputChange) onInputChange(' ');
        break;
      case 'backspace':
        onKeyPress('backspace');
        if (onInputChange) onInputChange('backspace');
        break;
      case 'enter':
        onKeyPress('enter');
        break;
      case 'clear':
        onKeyPress('clear');
        if (onInputChange) onInputChange('clear');
        break;
      default:
        break;
    }
  };

  const getInputLabel = () => {
    switch (activeInput) {
      case 'keterangan':
        return 'Input Keterangan';
      case 'jumlah':
        return 'Input Jumlah';
      default:
        return 'Virtual Keyboard';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none">
      <div 
        ref={keyboardRef}
        className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-2xl pointer-events-auto border border-white border-opacity-20"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none',
          zIndex: 1000
        }}
      >
        {/* Draggable Header */}
        <div 
          className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl p-4 text-white cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaKeyboard className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">{getInputLabel()}</h3>
                <p className="text-blue-100 text-sm">
                  Drag untuk memindahkan
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="p-4 bg-gray-50 bg-opacity-50 border-b">
          <div className="bg-white bg-opacity-70 rounded-xl p-4 shadow-inner border">
            <div className="text-sm text-gray-500 mb-2 flex justify-between">
              <span>Input Preview:</span>
              <span className="text-blue-500 font-medium">{value.length} karakter</span>
            </div>
            <div className="text-lg font-mono min-h-[28px] p-2 bg-gray-50 bg-opacity-50 rounded-lg border-2 border-blue-200">
              {value || <span className="text-gray-400">Ketik menggunakan keyboard virtual...</span>}
              <span className="ml-1 animate-pulse text-blue-500">|</span>
            </div>
          </div>
        </div>

        {/* Keyboard Layout */}
        <div className="p-4">
          {/* Main Keyboard */}
          {currentRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-2 space-x-1">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`flex-1 h-14 bg-white bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 active:scale-95 transition-all duration-150 font-medium text-gray-700 touch-friendly shadow-sm ${
                    activeInput === 'jumlah' ? 'max-w-[80px]' : 'max-w-[60px]'
                  } ${key === 'backspace' ? 'bg-red-100 border-red-300 text-red-700' : ''}`}
                  style={{ 
                    minHeight: '44px',
                    touchAction: 'manipulation'
                  }}
                >
                  {key === 'backspace' ? '⌫' : (isShift && !isSymbol && activeInput !== 'jumlah' ? key.toUpperCase() : key)}
                </button>
              ))}
            </div>
          ))}

          {/* Control Row untuk non-number input */}
          {activeInput !== 'jumlah' && (
            <div className="flex justify-center space-x-1 mt-4">
              <button
                onClick={() => handleSpecialKey('shift')}
                className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
                  isShift 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
                    : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                }`}
              >
                ⇧ SHIFT
              </button>

              <button
                onClick={() => handleSpecialKey('symbol')}
                className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
                  isSymbol 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
                    : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                }`}
              >
                {isSymbol ? 'ABC' : '123'}
              </button>

              <button
                onClick={() => handleSpecialKey('space')}
                className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
              >
                SPACE
              </button>

              <button
                onClick={() => handleSpecialKey('backspace')}
                className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
              >
                ⌫ DELETE
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-2 mt-3">
            <button
              onClick={() => handleSpecialKey('clear')}
              className="flex-1 max-w-[140px] h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all touch-friendly font-medium border-2 border-orange-600"
            >
              🗑️ CLEAR
            </button>
            
            <button
              onClick={() => handleSpecialKey('enter')}
              className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
            >
              ↵ ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CreateBarangTitipanModal = ({ isOpen, onClose, pengunjungs }) => {
  const { createTitipan } = useDataStore();
  const [formData, setFormData] = useState({
    pengunjung_id: "",
    jenis_barang: "",
    jumlah: "",
    keterangan: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk virtual keyboard
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');

  // Reset form ketika modal dibuka/ditutup
  useEffect(() => {
    if (isOpen && pengunjungs) {
      setFormData({
        pengunjung_id: pengunjungs.id || "",
        jenis_barang: "",
        jumlah: "",
        keterangan: "",
      });
      setError("");
      setShowVirtualKeyboard(false);
    }
  }, [isOpen, pengunjungs]);

  // Handler untuk virtual keyboard
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
    } else {
      setKeyboardValue(prev => prev + key);
      handleInputUpdate(key);
    }
  };

  // Fungsi untuk langsung update input field dari keyboard
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

    // Update form data sesuai dengan input yang aktif
    switch (activeInput) {
      case 'keterangan':
        setFormData(prev => ({ ...prev, keterangan: newValue }));
        break;
      case 'jumlah':
        // Untuk jumlah, hanya terima angka
        if (key === 'backspace') {
          setFormData(prev => ({ ...prev, jumlah: newValue }));
        } else if (key === 'clear') {
          setFormData(prev => ({ ...prev, jumlah: '' }));
        } else if (/[\d.]/.test(key)) {
          setFormData(prev => ({ ...prev, jumlah: newValue }));
        }
        break;
      default:
        break;
    }
  };

  // Handler untuk membuka virtual keyboard dengan input tertentu
  const handleInputFocus = (inputType, currentValue = '') => {
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    setShowVirtualKeyboard(true);
  };

  // Handle perubahan input manual (tanpa virtual keyboard)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validasi form
    if (!formData.pengunjung_id || !formData.jenis_barang || !formData.jumlah) {
      setError("Pastikan pengunjung, jenis barang, dan jumlah diisi.");
      setIsSubmitting(false);
      return;
    }

    // Validasi jumlah harus lebih dari 0
    if (parseInt(formData.jumlah) <= 0) {
      setError("Jumlah harus lebih dari 0.");
      setIsSubmitting(false);
      return;
    }

    // Reset error
    setError("");

    // Panggil fungsi createTitipan dari Zustand
    try {
      await createTitipan(formData, setError);
      toast.success("Barang titipan berhasil dibuat!");

      // Reset form setelah berhasil
      setFormData({
        pengunjung_id: pengunjungs?.id || "",
        jenis_barang: "",
        jumlah: "",
        keterangan: "",
      });

      // Tutup modal dan keyboard
      setShowVirtualKeyboard(false);
      onClose();
    } catch (err) {
      console.error("Error saat membuat barang titipan:", err);
      toast.error("Gagal membuat barang titipan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle close modal
  const handleClose = () => {
    setFormData({
      pengunjung_id: "",
      jenis_barang: "",
      jumlah: "",
      keterangan: "",
    });
    setError("");
    setShowVirtualKeyboard(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaBoxOpen className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Tambah Barang Titipan</h2>
                <p className="text-sm opacity-90 mt-1">
                  Isi formulir di bawah ini untuk menambahkan barang titipan baru.
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg">
              <div className="flex items-center">
                <FaInfoCircle className="inline-block mr-2 flex-shrink-0" />
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Informasi Pengunjung */}
          {pengunjungs && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-700 mb-2">
                <FaUser className="w-4 h-4" />
                <span className="font-semibold">Informasi Pengunjung:</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div><strong>Nama:</strong> {pengunjungs.nama}</div>
                <div><strong>NIK:</strong> {pengunjungs.nik}</div>
                <div><strong>Kode:</strong> {pengunjungs.kode}</div>
                <div><strong>HP:</strong> {pengunjungs.hp}</div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pengunjung (Hidden jika sudah ada data pengunjungs) */}
            {!pengunjungs && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaUser className="inline-block mr-2" />
                  Pilih Pengunjung
                </label>
                <select
                  name="pengunjung_id"
                  value={formData.pengunjung_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
                  <option value="">Pilih Pengunjung</option>
                  <option value={pengunjungs?.id}>
                    {pengunjungs?.nama} (NIK: {pengunjungs?.nik})
                  </option>
                </select>
              </div>
            )}

            {/* Jenis Barang */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBoxOpen className="inline-block mr-2" />
                Jenis Barang *
              </label>
              <select
                name="jenis_barang"
                value={formData.jenis_barang}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                <option value="">Pilih Jenis Barang</option>
                <option value="Makanan">Makanan</option>
                <option value="Pakaian">Pakaian</option>
                <option value="Obat">Obat</option>
                <option value="Alat mandi">Alat mandi</option>
                <option value="Uang">Uang</option>
                <option value="Dokumen">Dokumen</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            {/* Jumlah dengan tombol keyboard virtual */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBoxOpen className="inline-block mr-2" />
                Jumlah *
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="jumlah"
                  value={formData.jumlah}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('jumlah', formData.jumlah)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Masukkan Jumlah Barang"
                  min="1"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleInputFocus('jumlah', formData.jumlah)}
                  className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                >
                  <FaKeyboard className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Jumlah harus lebih dari 0</p>
            </div>

            {/* Keterangan dengan tombol keyboard virtual */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaInfoCircle className="inline-block mr-2" />
                Keterangan (Opsional)
              </label>
              <div className="flex space-x-2">
                <textarea
                  name="keterangan"
                  value={formData.keterangan}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('keterangan', formData.keterangan)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Masukkan keterangan tambahan tentang barang titipan..."
                  rows="3"
                />
                <button
                  type="button"
                  onClick={() => handleInputFocus('keterangan', formData.keterangan)}
                  className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center self-start"
                >
                  <FaKeyboard className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </>
                ) : (
                  <>
                    <FaPlus className="inline-block mr-2" />
                    Tambah Barang Titipan
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Virtual Keyboard */}
      {showVirtualKeyboard && (
        <VirtualKeyboardBarang 
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

export default CreateBarangTitipanModal;