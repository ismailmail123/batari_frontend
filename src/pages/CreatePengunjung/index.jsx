import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import useDataStore from "../../store/useDataStore";
import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AddPengunjungForm = ({ onClose }) => {
  const { createPengunjung, fetchWbpList, wbpList } = useDataStore();
  const [formData, setFormData] = useState({
    wbp_id: "",
    nama: "",
    jenis_kelamin: "",
    nik: "",
    alamat: "",
    hp: "",
    hubungan_keluarga: "",
    pengikut_laki_laki: 0,
    pengikut_perempuan: 0,
    pengikut_anak_anak: 0,
    pengikut_bayi: 0,
    total_pengikut: 0,
    keterangan: "",
    photo_ktp: null,
    photo_pengunjung: null,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading button
    const [searchWbp, setSearchWbp] = useState("");
    const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

  console.log("wargabinaan", wbpList);

  // Fetch data WBP saat komponen dimuat
  useEffect(() => {
    fetchWbpList();
  }, [fetchWbpList]);

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    // Filter WBP berdasarkan pencarian
  const filteredWbp = wbpList.filter(
    (wbp) =>
      wbp.nama.toLowerCase().includes(searchWbp.toLowerCase()) ||
      wbp.id.toString().includes(searchWbp)
  );

  // Handle pemilihan WBP
  const selectWbp = (wbp) => {
    setFormData({ ...formData, wbp_id: wbp.id });
    setSearchWbp(wbp.nama);
    setIsWbpDropdownOpen(false);
  };

  // Handle perubahan file upload
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  // Handle submit form
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validasi form
  //   if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
  //     setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
  //     return;
  //   }

  //   // Reset error
  //   setError("");

  //   // Set loading state ke true
  //   setIsSubmitting(true);

  //   // Buat FormData untuk mengirim file
  //   const formDataToSend = new FormData();
  //   for (const key in formData) {
  //     if (formData[key] !== null) {
  //       formDataToSend.append(key, formData[key]);
  //     }
  //   }

  //   // Panggil fungsi createPengunjung dari Zustand
  //   try {
  //     await createPengunjung(formDataToSend, setError);
  //     toast.success("Pengunjung berhasil ditambahkan!");

  //     // Reset form setelah berhasil
  //     setFormData({
  //       wbp_id: "",
  //       nama: "",
  //       jenis_kelamin: "",
  //       nik: "",
  //       alamat: "",
  //       hp: "",
  //       hubungan_keluarga: "",
  //       pengikut_laki_laki: 0,
  //       pengikut_perempuan: 0,
  //       pengikut_anak_anak: 0,
  //       pengikut_bayi: 0,
  //       total_pengikut: 0,
  //       keterangan: "",
  //       photo_ktp: null,
  //       photo_pengunjung: null,
  //     });

  //     // Tutup modal atau navigasi
  //     if (onClose) onClose();
  //     navigate("/pengunjung")
  //   } catch (err) {
  //     console.error("Error saat menambahkan pengunjung:", err);
  //   } finally {
  //     // Set loading state ke false setelah selesai
  //     setIsSubmitting(false);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validasi form
    if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
      setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
      return;
    }
  
    // Reset error
    setError("");
  
    // Set loading state ke true
    setIsSubmitting(true);
  
    // Buat FormData untuk mengirim file
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    // Debug: Periksa isi formDataToSend
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }
  
    // Panggil fungsi createPengunjung dari Zustand
    try {
      await createPengunjung(formDataToSend, setError);
      toast.success("Pengunjung berhasil ditambahkan!");
  
      // Reset form setelah berhasil
      setFormData({
        wbp_id: "",
        nama: "",
        jenis_kelamin: "",
        nik: "",
        alamat: "",
        hp: "",
        hubungan_keluarga: "",
        pengikut_laki_laki: 0,
        pengikut_perempuan: 0,
        pengikut_anak_anak: 0,
        pengikut_bayi: 0,
        total_pengikut: 0,
        keterangan: "",
        photo_ktp: null,
        photo_pengunjung: null,
      });
  
      // Tutup modal atau navigasi
      if (onClose) onClose();
      navigate("/pengunjung");
    } catch (err) {
      console.error("Error saat menambahkan pengunjung:", err);
    } finally {
      // Set loading state ke false setelah selesai
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="w-full">
      <Link to="/" className="flex justify-end top-4 left-4 text-black font-bold hover:text-green-500 text-2xl" style={{textDecoration: 'none', color: 'white'}}>
      <FaHome />
      </Link>
      </div>
          <div className="flex items-center space-x-4">
            <FaUser className="w-10 h-10" />
            <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
          </div>
          <p className="mt-2 text-sm opacity-90">
            Isi formulir di bawah ini untuk menambahkan pengunjung baru.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pilih Warga Binaan (WBP) */}
             {/* Input Pencarian WBP dengan Dropdown */}
             <div className="relative" ref={dropdownRef}>
               <label className="block text-sm font-medium text-gray-700 mb-2">
                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
               </label>
               <input
                type="text"
                value={searchWbp}
                onChange={(e) => {
                  setSearchWbp(e.target.value);
                  setIsWbpDropdownOpen(true);
                }}
                onFocus={() => setIsWbpDropdownOpen(true)}
                placeholder="Ketikan nama atau ID WBP..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              
              {isWbpDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredWbp.map((wbp) => (
                    <div
                      key={wbp.id}
                      onClick={() => selectWbp(wbp)}
                      className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{wbp.nama}</div>
                        <div className="text-sm text-gray-500">ID: {wbp.id}</div>
                      </div>
                      <FaUser className="ml-2 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" /> Nama
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* NIK */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaIdCard className="inline-block mr-2" /> NIK
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* Nomor HP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline-block mr-2" /> Nomor HP
              </label>
              <input
                type="text"
                name="hp"
                value={formData.hp}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaHome className="inline-block mr-2" /> Alamat
              </label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
              </label>
              <select
                name="jenis_kelamin"
                value={formData.jenis_kelamin}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>

            {/* Upload Foto KTP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUpload className="inline-block mr-2" /> Foto KTP
              </label>
              <input
                type="file"
                name="photo_ktp"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Upload Foto Pengunjung */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUpload className="inline-block mr-2" /> Foto Pengunjung
              </label>
              <input
                type="file"
                name="photo_pengunjung"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Tombol Submit dengan Loading Indicator */}
            <button
              type="submit"
              disabled={isSubmitting} // Nonaktifkan tombol saat loading
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin inline-block mr-2" />
                  Mengirim...
                </>
              ) : (
                <>
                  <FaQrcode className="inline-block mr-2" />
                  Tambah Pengunjung
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPengunjungForm;