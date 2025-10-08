// // // import React, { useState, useEffect, useRef } from "react";
// // // import { toast } from "react-hot-toast";
// // // import useDataStore from "../../store/useDataStore";
// // // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner } from "react-icons/fa";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { User } from "lucide-react";

// // // const AddPengunjungForm = ({ onClose }) => {
// // //   const { createPengunjung, fetchWbpList, wbpList } = useDataStore();
// // //   const [formData, setFormData] = useState({
// // //     wbp_id: "",
// // //     nama: "",
// // //     jenis_kelamin: "",
// // //     nik: "",
// // //     alamat: "",
// // //     hp: "",
// // //     hubungan_keluarga: "",
// // //     pengikut_laki_laki: 0,
// // //     pengikut_perempuan: 0,
// // //     pengikut_anak_anak: 0,
// // //     pengikut_bayi: 0,
// // //     total_pengikut: 0,
// // //     keterangan: "",
// // //     photo_ktp: null,
// // //     photo_pengunjung: null,
// // //   });
// // //   const [error, setError] = useState("");
// // //   const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading button
// // //     const [searchWbp, setSearchWbp] = useState("");
// // //     const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// // //     const dropdownRef = useRef(null);
// // //     const navigate = useNavigate();


// // //   // Fetch data WBP saat komponen dimuat
// // //   useEffect(() => {
// // //     fetchWbpList();
// // //   }, [fetchWbpList]);

// // //   // Handle perubahan input
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value,
// // //     });
// // //   };

// // //     // Filter WBP berdasarkan pencarian
// // //   const filteredWbp = wbpList.filter(
// // //     (wbp) =>
// // //       wbp.nama.toLowerCase().includes(searchWbp.toLowerCase()) ||
// // //       wbp.id.toString().includes(searchWbp)
// // //   );

// // //   // Handle pemilihan WBP
// // //   const selectWbp = (wbp) => {
// // //     setFormData({ ...formData, wbp_id: wbp.id });
// // //     setSearchWbp(wbp.nama);
// // //     setIsWbpDropdownOpen(false);
// // //   };

// // //   // Handle perubahan file upload
// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: files[0],
// // //     });
// // //   };

// // //   // Handle submit form
// // //   // const handleSubmit = async (e) => {
// // //   //   e.preventDefault();

// // //   //   // Validasi form
// // //   //   if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// // //   //     setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// // //   //     return;
// // //   //   }

// // //   //   // Reset error
// // //   //   setError("");

// // //   //   // Set loading state ke true
// // //   //   setIsSubmitting(true);

// // //   //   // Buat FormData untuk mengirim file
// // //   //   const formDataToSend = new FormData();
// // //   //   for (const key in formData) {
// // //   //     if (formData[key] !== null) {
// // //   //       formDataToSend.append(key, formData[key]);
// // //   //     }
// // //   //   }

// // //   //   // Panggil fungsi createPengunjung dari Zustand
// // //   //   try {
// // //   //     await createPengunjung(formDataToSend, setError);
// // //   //     toast.success("Pengunjung berhasil ditambahkan!");

// // //   //     // Reset form setelah berhasil
// // //   //     setFormData({
// // //   //       wbp_id: "",
// // //   //       nama: "",
// // //   //       jenis_kelamin: "",
// // //   //       nik: "",
// // //   //       alamat: "",
// // //   //       hp: "",
// // //   //       hubungan_keluarga: "",
// // //   //       pengikut_laki_laki: 0,
// // //   //       pengikut_perempuan: 0,
// // //   //       pengikut_anak_anak: 0,
// // //   //       pengikut_bayi: 0,
// // //   //       total_pengikut: 0,
// // //   //       keterangan: "",
// // //   //       photo_ktp: null,
// // //   //       photo_pengunjung: null,
// // //   //     });

// // //   //     // Tutup modal atau navigasi
// // //   //     if (onClose) onClose();
// // //   //     navigate("/pengunjung")
// // //   //   } catch (err) {
// // //   //     console.error("Error saat menambahkan pengunjung:", err);
// // //   //   } finally {
// // //   //     // Set loading state ke false setelah selesai
// // //   //     setIsSubmitting(false);
// // //   //   }
// // //   // };


// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
  
// // //     // Validasi form
// // //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// // //       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// // //       return;
// // //     }
  
// // //     // Reset error
// // //     setError("");
  
// // //     // Set loading state ke true
// // //     setIsSubmitting(true);
  
// // //     // Buat FormData untuk mengirim file
// // //     const formDataToSend = new FormData();
// // //     for (const key in formData) {
// // //       if (formData[key] !== null) {
// // //         formDataToSend.append(key, formData[key]);
// // //       }
// // //     }
  
// // //     // // Debug: Periksa isi formDataToSend
// // //     // for (let [key, value] of formDataToSend.entries()) {
// // //     //   console.log(key, value);
// // //     // }
  
// // //     // Panggil fungsi createPengunjung dari Zustand
// // //     try {
// // //       const newPengunjung = await createPengunjung(formDataToSend, setError);
// // //       toast.success("Pengunjung berhasil ditambahkan!");
  
// // //       // Reset form setelah berhasil
// // //       setFormData({
// // //         wbp_id: "",
// // //         nama: "",
// // //         jenis_kelamin: "",
// // //         nik: "",
// // //         alamat: "",
// // //         hp: "",
// // //         hubungan_keluarga: "",
// // //         tujuan: "",
// // //         pengikut_laki_laki: 0,
// // //         pengikut_perempuan: 0,
// // //         pengikut_anak_anak: 0,
// // //         pengikut_bayi: 0,
// // //         total_pengikut: 0,
// // //         keterangan: "",
// // //         photo_ktp: null,
// // //         photo_pengunjung: null,
// // //       });

      
  
// // //       // Tutup modal atau navigasi
// // //       if (onClose) onClose();
// // //       // Navigasi ke halaman edit dengan kode pengunjung yang baru dibuat

// // //       console.log("Navigating to update page for kode:", newPengunjung);
// // //     if (newPengunjung && newPengunjung.kode) {
// // //       navigate(`/update-pengunjung/${newPengunjung.kode}`);
// // //     } 
// // //     // else {
// // //     //   // Fallback jika tidak ada kode, navigasi ke halaman pengunjung
// // //     //   navigate("/pengunjung");
// // //     // }
// // //     } catch (err) {
// // //       console.error("Error saat menambahkan pengunjung:", err);
// // //     } finally {
// // //       // Set loading state ke false setelah selesai
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// // //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// // //         {/* Header */}
// // //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// // //           <div className="w-full">
// // //       <Link to="/" className="flex justify-end top-4 left-4 text-black font-bold hover:text-green-500 text-2xl" style={{textDecoration: 'none', color: 'white'}}>
// // //       <FaHome />
// // //       </Link>
// // //       </div>
// // //           <div className="flex items-center space-x-4">
// // //             <FaUser className="w-10 h-10" />
// // //             <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
// // //           </div>
// // //           <p className="mt-2 text-sm opacity-90">
// // //             Isi formulir di bawah ini untuk menambahkan pengunjung baru.
// // //           </p>
// // //         </div>

// // //         {/* Form */}
// // //         <div className="p-8">
// // //           {error && (
// // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
// // //               {error}
// // //             </div>
// // //           )}
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             {/* Pilih Warga Binaan (WBP) */}
// // //              {/* Input Pencarian WBP dengan Dropdown */}
// // //              <div className="relative" ref={dropdownRef}>
// // //                <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                  <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// // //                </label>
// // //                <input
// // //                 type="text"
// // //                 value={searchWbp}
// // //                 onChange={(e) => {
// // //                   setSearchWbp(e.target.value);
// // //                   setIsWbpDropdownOpen(true);
// // //                 }}
// // //                 onFocus={() => setIsWbpDropdownOpen(true)}
// // //                 placeholder="Ketikan nama atau ID WBP..."
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 required
// // //               />
              
// // //               {isWbpDropdownOpen && (
// // //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // //                   {filteredWbp.map((wbp) => (
// // //                     <div
// // //                       key={wbp.id}
// // //                       onClick={() => selectWbp(wbp)}
// // //                       className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
// // //                     >
// // //                       <div className="flex-1">
// // //                         <div className="font-medium">{wbp.nama}</div>
// // //                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
// // //                       </div>
// // //                       <FaUser className="ml-2 text-gray-400" />
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Nama */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaUser className="inline-block mr-2" /> Nama
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="nama"
// // //                 value={formData.nama}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* NIK */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaIdCard className="inline-block mr-2" /> NIK
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="nik"
// // //                 value={formData.nik}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Nomor HP */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaPhone className="inline-block mr-2" /> Nomor HP
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="hp"
// // //                 value={formData.hp}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Alamat */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaHome className="inline-block mr-2" /> Alamat
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="alamat"
// // //                 value={formData.alamat}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //               />
// // //             </div>

// // //             {/* Jenis Kelamin */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
// // //               </label>
// // //               <select
// // //                 name="jenis_kelamin"
// // //                 value={formData.jenis_kelamin}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //               >
// // //                 <option value="">Pilih Jenis Kelamin</option>
// // //                 <option value="laki-laki">Laki-laki</option>
// // //                 <option value="perempuan">Perempuan</option>
// // //               </select>
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <User className="inline-block mr-2" /> Tujuan
// // //               </label>
// // //               <select
// // //                 name="tujuan"
// // //                 value={formData.tujuan}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //               >
// // //                 <option value="">Pilih Jenis Tujuan</option>
// // //                 <option value="Berkunjung">Berkunjung</option>
// // //                 <option value="Menitip barang">Menitip barang</option>
// // //               </select>
// // //             </div>

// // //             {/* Upload Foto KTP */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaUpload className="inline-block mr-2" /> Foto KTP
// // //               </label>
// // //               <input
// // //                 type="file"
// // //                 name="photo_ktp"
// // //                 onChange={handleFileChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //               />
// // //             </div>

// // //             {/* Upload Foto Pengunjung */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaUpload className="inline-block mr-2" /> Foto Pengunjung
// // //               </label>
// // //               <input
// // //                 type="file"
// // //                 name="photo_pengunjung"
// // //                 onChange={handleFileChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //               />
// // //             </div>

// // //             {/* Tombol Submit dengan Loading Indicator */}
// // //             <button
// // //               type="submit"
// // //               disabled={isSubmitting} // Nonaktifkan tombol saat loading
// // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
// // //             >
// // //               {isSubmitting ? (
// // //                 <>
// // //                   <FaSpinner className="animate-spin inline-block mr-2" />
// // //                   Mengirim...
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <FaQrcode className="inline-block mr-2" />
// // //                   Tambah Pengunjung
// // //                 </>
// // //               )}
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddPengunjungForm;




// // import React, { useState, useEffect, useRef } from "react";
// // import { toast } from "react-hot-toast";
// // import useDataStore from "../../store/useDataStore";
// // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import { User } from "lucide-react";
// // import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// // const AddPengunjungForm = ({ onClose }) => {
// //   const { createPengunjung, fetchWbpList, wbpList, updatePengunjung } = useDataStore();
// //   const [formData, setFormData] = useState({
// //     wbp_id: "",
// //     nama: "",
// //     jenis_kelamin: "",
// //     nik: "",
// //     alamat: "",
// //     hp: "",
// //     hubungan_keluarga: "",
// //     tujuan: "",
// //     pengikut_laki_laki: 0,
// //     pengikut_perempuan: 0,
// //     pengikut_anak_anak: 0,
// //     pengikut_bayi: 0,
// //     total_pengikut: 0,
// //     keterangan: "",
// //     photo_ktp: null,
// //     photo_pengunjung: null,
// //   });
// //   const [error, setError] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [searchWbp, setSearchWbp] = useState("");
// //   const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   // State baru untuk menampung data pengunjung yang baru dibuat
// //   const [newPengunjung, setNewPengunjung] = useState(null);
// //   const [showEditForm, setShowEditForm] = useState(false);
// // ;

// //   // Fetch data WBP saat komponen dimuat
// //   useEffect(() => {
// //     fetchWbpList();
// //   }, [fetchWbpList]);

// //   // Fungsi untuk menghitung total pengikut
// // const calculateTotalPengikut = (data) => {
// //   const total = 
// //     parseInt(data.pengikut_laki_laki || 0) +
// //     parseInt(data.pengikut_perempuan || 0) +
// //     parseInt(data.pengikut_anak_anak || 0) +
// //     parseInt(data.pengikut_bayi || 0);
// //   return total;
// // };


// //   // const handleInputChange = (e) => {
// //   //   const { name, value } = e.target;
// //   //   setFormData({
// //   //     ...formData,
// //   //     [name]: value,
// //   //   });
// //   // };

// //   const handleInputChange = (e) => {
// //   const { name, value } = e.target;
// //   const updatedFormData = {
// //     ...formData,
// //     [name]: value,
// //   };
  
// //   // Jika field pengikut diubah, hitung total otomatis
// //   if (name.includes('pengikut_') && name !== 'total_pengikut') {
// //     updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //   }
  
// //   setFormData(updatedFormData);
// // };

// //   const filteredWbp = wbpList.filter(
// //     (wbp) =>
// //       wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
// //       wbp.id.toString().includes(searchWbp)
// //   );

// //   const selectWbp = (wbp) => {
// //     setFormData({ ...formData, wbp_id: wbp.id });
// //     setSearchWbp(wbp.nama);
// //     setIsWbpDropdownOpen(false);
// //   };

// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: files[0],
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// //       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// //       return;
// //     }

// //     setError("");
// //     setIsSubmitting(true);

// //     const formDataToSend = new FormData();
// //     for (const key in formData) {
// //       if (formData[key] !== null) {
// //         formDataToSend.append(key, formData[key]);
// //       }
// //     }

// //     try {
// //       // Simpan response dari createPengunjung ke state
// //       const createdPengunjung = await createPengunjung(formDataToSend, setError);
// //       toast.success("Pengunjung berhasil ditambahkan!");

// //       // Simpan data pengunjung baru ke state
// //       setNewPengunjung(createdPengunjung);
      
// //       // Tampilkan form edit
// //       setShowEditForm(true);

// //       // Reset form
// //       setFormData({
// //         wbp_id: "",
// //         nama: "",
// //         jenis_kelamin: "",
// //         nik: "",
// //         alamat: "",
// //         hp: "",
// //         hubungan_keluarga: "",
// //         tujuan: "",
// //         pengikut_laki_laki: 0,
// //         pengikut_perempuan: 0,
// //         pengikut_anak_anak: 0,
// //         pengikut_bayi: 0,
// //         total_pengikut: 0,
// //         keterangan: "",
// //         photo_ktp: null,
// //         photo_pengunjung: null,
// //       });

// //     } catch (err) {
// //       console.error("Error saat menambahkan pengunjung:", err);
// //       toast.error("Gagal menambahkan pengunjung. Silakan coba lagi.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   // Fungsi untuk kembali ke form tambah
// //   const handleBackToAddForm = () => {
// //     setShowEditForm(false);
// //     setNewPengunjung(null);
// //     setSearchWbp("");
// //   };

  

// //   // Jika showEditForm true dan newPengunjung ada, tampilkan EditPengunjungForm
// //   if (showEditForm && newPengunjung) {
// //     return (
// //       <EditPengunjungFormWrapper 
// //         newPengunjung={newPengunjung}
// //         onBack={handleBackToAddForm}
// //         onClose={onClose}
// //       />
// //     );
// //   }

// //   // Tampilkan form tambah pengunjung
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// //         {/* Header */}
// //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// //           <div className="w-full">
// //             <Link to="/" className="flex justify-end text-white font-bold hover:text-green-300 text-2xl" style={{textDecoration: 'none'}}>
// //               <FaHomeIcon />
// //             </Link>
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <FaUser className="w-10 h-10" />
// //             <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
// //           </div>
// //           <p className="mt-2 text-sm opacity-90">
// //             Isi formulir di bawah ini untuk menambahkan pengunjung baru.
// //           </p>
// //         </div>

// //         {/* Form */}
// //         <div className="p-8">
// //           {error && (
// //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
// //               {error}
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* Pilih WBP */}
// //             <div className="relative" ref={dropdownRef}>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// //               </label>
// //               <input
// //                 type="text"
// //                 value={searchWbp}
// //                 onChange={(e) => {
// //                   setSearchWbp(e.target.value);
// //                   setIsWbpDropdownOpen(true);
// //                 }}
// //                 onFocus={() => setIsWbpDropdownOpen(true)}
// //                 placeholder="Ketikan nama atau ID WBP..."
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                 required
// //               />
              
// //               {isWbpDropdownOpen && filteredWbp.length > 0 && (
// //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// //                   {filteredWbp.map((wbp) => (
// //                     <div
// //                       key={wbp.id}
// //                       onClick={() => selectWbp(wbp)}
// //                       className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
// //                     >
// //                       <div className="flex-1">
// //                         <div className="font-medium">{wbp.nama}</div>
// //                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
// //                       </div>
// //                       <FaUser className="ml-2 text-gray-400" />
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Nama */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaUser className="inline-block mr-2" /> Nama
// //               </label>
// //               <input
// //                 type="text"
// //                 name="nama"
// //                 value={formData.nama}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                 required
// //               />
// //             </div>

// //             {/* NIK */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaIdCard className="inline-block mr-2" /> NIK
// //               </label>
// //               <input
// //                 type="text"
// //                 name="nik"
// //                 value={formData.nik}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                 required
// //               />
// //             </div>

// //             {/* Nomor HP */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaPhone className="inline-block mr-2" /> Nomor HP
// //               </label>
// //               <input
// //                 type="text"
// //                 name="hp"
// //                 value={formData.hp}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                 required
// //               />
// //             </div>

// //             {/* Alamat */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaHome className="inline-block mr-2" /> Alamat
// //               </label>
// //               <input
// //                 type="text"
// //                 name="alamat"
// //                 value={formData.alamat}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //               />
// //             </div>

// //             {/* Jenis Kelamin */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
// //               </label>
// //               <select
// //                 name="jenis_kelamin"
// //                 value={formData.jenis_kelamin}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //               >
// //                 <option value="">Pilih Jenis Kelamin</option>
// //                 <option value="laki-laki">Laki-laki</option>
// //                 <option value="perempuan">Perempuan</option>
// //               </select>
// //             </div>

// //             {/* Tujuan */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <User className="inline-block mr-2" /> Tujuan
// //               </label>
// //               <select
// //                 name="tujuan"
// //                 value={formData.tujuan}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //               >
// //                 <option value="">Pilih Jenis Tujuan</option>
// //                 <option value="Berkunjung">Berkunjung</option>
// //                 <option value="Menitip barang">Menitip barang</option>
// //               </select>
// //             </div>

// //             {/* Upload Foto KTP */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaUpload className="inline-block mr-2" /> Foto KTP
// //               </label>
// //               <input
// //                 type="file"
// //                 name="photo_ktp"
// //                 onChange={handleFileChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                 accept="image/*"
// //               />
// //             </div>

// //             {/* Upload Foto Pengunjung */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaUpload className="inline-block mr-2" /> Foto Pengunjung
// //               </label>
// //               <input
// //                 type="file"
// //                 name="photo_pengunjung"
// //                 onChange={handleFileChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                 accept="image/*"
// //               />
// //             </div>

// //             {/* Tombol Submit */}
// //             <button
// //               type="submit"
// //               disabled={isSubmitting}
// //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
// //             >
// //               {isSubmitting ? (
// //                 <>
// //                   <FaSpinner className="animate-spin inline-block mr-2" />
// //                   Mengirim...
// //                 </>
// //               ) : (
// //                 <>
// //                   <FaQrcode className="inline-block mr-2" />
// //                   Tambah Pengunjung
// //                 </>
// //               )}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Komponen wrapper untuk EditPengunjungForm
// // const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose }) => {
// //   const { updatePengunjung } = useDataStore();
// //   const [formData, setFormData] = useState({
// //     nama: newPengunjung.nama || "",
// //     jenis_kelamin: newPengunjung.jenis_kelamin || "",
// //     nik: newPengunjung.nik || "",
// //     alamat: newPengunjung.alamat || "",
// //     hp: newPengunjung.hp || "",
// //     hubungan_keluarga: newPengunjung.hubungan_keluarga || "",
// //     tujuan: newPengunjung.tujuan || "",
// //     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
// //     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
// //     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
// //     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
// //     total_pengikut: newPengunjung.total_pengikut || 0,
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const navigate = useNavigate();

// //   // Di EditPengunjungFormWrapper, tambahkan useEffect
// // useEffect(() => {
// //   // Hitung total pengikut saat pertama kali komponen dimuat
// //   const initialTotal = calculateTotalPengikut(formData);
// //   setFormData(prev => ({
// //     ...prev,
// //     total_pengikut: initialTotal
// //   }));
// // }, []);

// //   // Fungsi menghitung total pengikut
// // const calculateTotalPengikut = (data) => {
// //   const total = 
// //     parseInt(data.pengikut_laki_laki || 0) +
// //     parseInt(data.pengikut_perempuan || 0) +
// //     parseInt(data.pengikut_anak_anak || 0) +
// //     parseInt(data.pengikut_bayi || 0);
// //   return total;
// // };

// // const handleInputChange = (e) => {
// //   const { name, value } = e.target;
// //   const updatedFormData = {
// //     ...formData,
// //     [name]: value,
// //   };
  
// //   // Jika field pengikut diubah, hitung total otomatis
// //   if (name.includes('pengikut_') && name !== 'total_pengikut') {
// //     updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //   }
  
// //   setFormData(updatedFormData);
// // };

// //   // const handleInputChange = (e) => {
// //   //   const { name, value } = e.target;
// //   //   setFormData((prev) => ({ ...prev, [name]: value }));
// //   // };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       await updatePengunjung(newPengunjung.kode, formData);
// //       toast.success("Data pengunjung berhasil diperbarui!");
      
// //       // Tunggu sebentar sebelum menutup atau navigasi
// //       setTimeout(() => {
// //         if (onClose) onClose();
// //       }, 1000);
      
// //     } catch (error) {
// //       console.error("Error: ", error);
// //       setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
// //       toast.error("Gagal memperbarui data pengunjung.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const finish = () => {
// //     if(formData.tujuan === "Menitip barang") {
// //       navigate(`/`);
// //     } else {
// //       navigate(`/pengunjung/${newPengunjung.kode}`);
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
// //       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
// //         <div className="flex items-center justify-between mb-8">
// //           <h1 className="text-3xl font-bold text-gray-800">
// //             ✏️ Edit Data Pengunjung Baru
// //           </h1>
// //           <div className="space-x-2">
// //             <button
// //               onClick={onBack}
// //               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
// //             >
// //               ← Tambah Lagi
// //             </button>
// //             <button
// //               onClick={finish}
// //               className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
// //             >
// //               Selesai
// //             </button>
// //           </div>
// //         </div>

// //         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// //           <p className="text-green-700 font-medium">
// //             ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
// //           </p>
// //           <div className="mt-2 text-sm text-green-600">
// //             <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// //             <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// //           </div>
// //         </div>

// //         {error && (
// //           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
// //             {error}
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Kolom Kiri */}
// //           <div className="space-y-4">
// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Nama</label>
// //               <input
// //                 type="text"
// //                 name="nama"
// //                 value={formData.nama}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
// //               <select
// //                 name="jenis_kelamin"
// //                 value={formData.jenis_kelamin}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               >
// //                 <option value="">Pilih Jenis Kelamin</option>
// //                 <option value="laki-laki">Laki-laki</option>
// //                 <option value="perempuan">Perempuan</option>
// //               </select>
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">NIK</label>
// //               <input
// //                 type="text"
// //                 name="nik"
// //                 value={formData.nik}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Alamat</label>
// //               <input
// //                 type="text"
// //                 name="alamat"
// //                 value={formData.alamat}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
// //               <input
// //                 type="text"
// //                 name="hp"
// //                 value={formData.hp}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
// //               <input
// //                 type="text"
// //                 name="hubungan_keluarga"
// //                 value={formData.hubungan_keluarga}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Tujuan</label>
// //               <select
// //                 name="tujuan"
// //                 value={formData.tujuan}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               >
// //                 <option value="">Pilih Jenis Tujuan</option>
// //                 <option value="Berkunjung">Berkunjung</option>
// //                 <option value="Menitip barang">Menitip barang</option>
// //               </select>
// //             </div>
// //           </div>

// //           {/* Kolom Kanan */}
// //           {/* Field-field pengikut dalam grid */}
// // <div className="space-y-4">
// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
// //               <input
// //                 type="number"
// //                 name="pengikut_laki_laki"
// //                 value={formData.pengikut_laki_laki}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 min="0"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
// //               <input
// //                 type="number"
// //                 name="pengikut_perempuan"
// //                 value={formData.pengikut_perempuan}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 min="0"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
// //               <input
// //                 type="number"
// //                 name="pengikut_anak_anak"
// //                 value={formData.pengikut_anak_anak}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 min="0"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
// //               <input
// //                 type="number"
// //                 name="pengikut_bayi"
// //                 value={formData.pengikut_bayi}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 min="0"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Total Pengikut</label>
// //               <input
// //                 type="number"
// //                 name="total_pengikut"
// //                 value={formData.total_pengikut}
// //                 onChange={handleInputChange}
// //                 disabled
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 min="0"
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 mt-4"
// //             >
// //               {loading ? (
// //                 <span className="flex items-center justify-center">
// //                   <FaSpinner className="animate-spin mr-2" />
// //                   Memproses...
// //                 </span>
// //               ) : (
// //                 "💾 Simpan Perubahan"
// //               )}
// //             </button>
// //           </div>

// // {/* Total Pengikut (Read-only) */}
// // <div className="bg-green-50 p-4 rounded-lg border border-green-200">
// //   <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
// //   <div className="text-2xl font-bold text-green-600 text-center">
// //     {formData.total_pengikut} Orang
// //   </div>
// //   <div className="text-sm text-gray-600 text-center mt-1">
// //     (Laki-laki: {formData.pengikut_laki_laki} | 
// //      Perempuan: {formData.pengikut_perempuan} | 
// //      Anak: {formData.pengikut_anak_anak} | 
// //      Bayi: {formData.pengikut_bayi})
// //   </div>
// // </div>

// // {/* Hapus input total_pengikut yang lama */}
// // {/* 
// //   <div className="space-y-1">
// //     <label className="block text-sm font-medium text-gray-700">Total Pengikut</label>
// //     <input
// //       type="number"
// //       name="total_pengikut"
// //       value={formData.total_pengikut}
// //       onChange={handleInputChange}
// //       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
// //       min="0"
// //     />
// //   </div>
// // */}
// //         </form>
// //               <button
// //                       onClick={() => setIsModalOpen(true)}
// //                        className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
// //                     >
// //                       + Tambah Barang Titipan
// //                     </button>
              
// //                     {/* Modal CreateBarangTitipan */}
// //                     <CreateBarangTitipanModal
// //                       isOpen={isModalOpen}
// //                       onClose={() => setIsModalOpen(false)}
// //                       pengunjungs={newPengunjung} // Kirim data pengunjung ke modal
// //                     />
// //         <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
// //           <p className="text-blue-700 text-sm">
// //             <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddPengunjungForm;

// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-hot-toast";
// import useDataStore from "../../store/useDataStore";
// import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { User } from "lucide-react";
// import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// const AddPengunjungForm = ({ onClose }) => {
//   const { createPengunjung, createDataPengunjung, fetchWbpList, wbpList, updatePengunjung, fetchPengunjungData, pengunjungData } = useDataStore();
//   const [formData, setFormData] = useState({
//     wbp_id: "",
//     nama: "",
//     jenis_kelamin: "",
//     nik: "",
//     alamat: "",
//     hp: "",
//     hubungan_keluarga: "",
//     tujuan: "",
//     pengikut_laki_laki: 0,
//     pengikut_perempuan: 0,
//     pengikut_anak_anak: 0,
//     pengikut_bayi: 0,
//     total_pengikut: 0,
//     keterangan: "",
//     photo_ktp: null,
//     photo_pengunjung: null,
//   });
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [searchWbp, setSearchWbp] = useState("");
//   const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // State baru untuk menampung data pengunjung yang baru dibuat
//   const [newPengunjung, setNewPengunjung] = useState(null);
//   const [showEditForm, setShowEditForm] = useState(false);

//   // Fetch data WBP saat komponen dimuat
//   useEffect(() => {
//     fetchWbpList();
//     fetchPengunjungData();
//   }, [fetchWbpList, fetchPengunjungData]);

//   console.log("Pengunjung data", pengunjungData)

//   // Fungsi untuk menghitung total pengikut
//   const calculateTotalPengikut = (data) => {
//     const total = 
//       parseInt(data.pengikut_laki_laki || 0) +
//       parseInt(data.pengikut_perempuan || 0) +
//       parseInt(data.pengikut_anak_anak || 0) +
//       parseInt(data.pengikut_bayi || 0);
//     return total;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const updatedFormData = {
//       ...formData,
//       [name]: value,
//     };
    
//     // Jika field pengikut diubah, hitung total otomatis
//     if (name.includes('pengikut_') && name !== 'total_pengikut') {
//       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//     }
    
//     setFormData(updatedFormData);
//   };

//   const filteredWbp = wbpList.filter(
//     (wbp) =>
//       wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
//       wbp.id.toString().includes(searchWbp)
//   );

//   const selectWbp = (wbp) => {
//     setFormData({ ...formData, wbp_id: wbp.id });
//     setSearchWbp(wbp.nama);
//     setIsWbpDropdownOpen(false);
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
//       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
//       return;
//     }

//     setError("");
//     setIsSubmitting(true);

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       if (formData[key] !== null) {
//         formDataToSend.append(key, formData[key]);
//       }
//     }

//     try {
//       // Simpan response dari createPengunjung ke state
//       const createdPengunjung = await createPengunjung(formDataToSend, setError);
//       toast.success("Pengunjung berhasil ditambahkan!");

//       // Simpan data pengunjung baru ke state
//       setNewPengunjung(createdPengunjung);
      
//       // Tampilkan form edit
//       setShowEditForm(true);

//       // Reset form
//       setFormData({
//         wbp_id: "",
//         nama: "",
//         jenis_kelamin: "",
//         nik: "",
//         alamat: "",
//         hp: "",
//         hubungan_keluarga: "",
//         tujuan: "",
//         pengikut_laki_laki: 0,
//         pengikut_perempuan: 0,
//         pengikut_anak_anak: 0,
//         pengikut_bayi: 0,
//         total_pengikut: 0,
//         keterangan: "",
//         photo_ktp: null,
//         photo_pengunjung: null,
//       });

//     } catch (err) {
//       console.error("Error saat menambahkan pengunjung:", err);
//       toast.error("Gagal menambahkan pengunjung. Silakan coba lagi.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Fungsi untuk kembali ke form tambah
//   const handleBackToAddForm = () => {
//     setShowEditForm(false);
//     setNewPengunjung(null);
//     setSearchWbp("");
//   };

//   // Jika showEditForm true dan newPengunjung ada, tampilkan EditPengunjungForm
//   if (showEditForm && newPengunjung) {
//     return (
//       <EditPengunjungFormWrapper 
//         newPengunjung={newPengunjung}
//         onBack={handleBackToAddForm}
//         onClose={onClose}
//       />
//     );
//   }

//   // Tampilkan form tambah pengunjung
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
//         {/* Header */}
//         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//           <div className="w-full">
//             <Link to="/" className="flex justify-end text-white font-bold hover:text-green-300 text-2xl" style={{textDecoration: 'none'}}>
//               <FaHomeIcon />
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaUser className="w-10 h-10" />
//             <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
//           </div>
//           <p className="mt-2 text-sm opacity-90">
//             Isi formulir di bawah ini untuk menambahkan pengunjung baru.
//           </p>
//         </div>

//         {/* Form */}
//         <div className="p-8">
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Pilih WBP */}
//             <div className="relative" ref={dropdownRef}>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
//               </label>
//               <input
//                 type="text"
//                 value={searchWbp}
//                 onChange={(e) => {
//                   setSearchWbp(e.target.value);
//                   setIsWbpDropdownOpen(true);
//                 }}
//                 onFocus={() => setIsWbpDropdownOpen(true)}
//                 placeholder="Ketikan nama atau ID WBP..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 required
//               />
              
//               {isWbpDropdownOpen && filteredWbp.length > 0 && (
//                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                   {filteredWbp.map((wbp) => (
//                     <div
//                       key={wbp.id}
//                       onClick={() => selectWbp(wbp)}
//                       className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
//                     >
//                       <div className="flex-1">
//                         <div className="font-medium">{wbp.nama}</div>
//                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
//                       </div>
//                       <FaUser className="ml-2 text-gray-400" />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Nama */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUser className="inline-block mr-2" /> Nama
//               </label>
//               <input
//                 type="text"
//                 name="nama"
//                 value={formData.nama}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 required
//               />
//             </div>

//             {/* NIK */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaIdCard className="inline-block mr-2" /> NIK
//               </label>
//               <input
//                 type="text"
//                 name="nik"
//                 value={formData.nik}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 required
//               />
//             </div>

//             {/* Nomor HP */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaPhone className="inline-block mr-2" /> Nomor HP
//               </label>
//               <input
//                 type="text"
//                 name="hp"
//                 value={formData.hp}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 required
//               />
//             </div>

//             {/* Alamat */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaHome className="inline-block mr-2" /> Alamat
//               </label>
//               <input
//                 type="text"
//                 name="alamat"
//                 value={formData.alamat}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               />
//             </div>

//             {/* Jenis Kelamin */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
//               </label>
//               <select
//                 name="jenis_kelamin"
//                 value={formData.jenis_kelamin}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               >
//                 <option value="">Pilih Jenis Kelamin</option>
//                 <option value="laki-laki">Laki-laki</option>
//                 <option value="perempuan">Perempuan</option>
//               </select>
//             </div>

//             {/* Tujuan */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <User className="inline-block mr-2" /> Tujuan
//               </label>
//               <select
//                 name="tujuan"
//                 value={formData.tujuan}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               >
//                 <option value="">Pilih Jenis Tujuan</option>
//                 <option value="Berkunjung">Berkunjung</option>
//                 <option value="Menitip barang">Menitip barang</option>
//               </select>
//             </div>

//             {/* Upload Foto KTP */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUpload className="inline-block mr-2" /> Foto KTP
//               </label>
//               <input
//                 type="file"
//                 name="photo_ktp"
//                 onChange={handleFileChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 accept="image/*"
//               />
//             </div>

//             {/* Upload Foto Pengunjung */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUpload className="inline-block mr-2" /> Foto Pengunjung
//               </label>
//               <input
//                 type="file"
//                 name="photo_pengunjung"
//                 onChange={handleFileChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 accept="image/*"
//               />
//             </div>

//             {/* Tombol Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <FaSpinner className="animate-spin inline-block mr-2" />
//                   Mengirim...
//                 </>
//               ) : (
//                 <>
//                   <FaQrcode className="inline-block mr-2" />
//                   Tambah Pengunjung
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Komponen wrapper untuk EditPengunjungForm
// const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose }) => {
//   const { updatePengunjung } = useDataStore();
//   const [formData, setFormData] = useState({
//     nama: newPengunjung.nama || "",
//     jenis_kelamin: newPengunjung.jenis_kelamin || "",
//     nik: newPengunjung.nik || "",
//     alamat: newPengunjung.alamat || "",
//     hp: newPengunjung.hp || "",
//     hubungan_keluarga: newPengunjung.hubungan_keluarga || "",
//     tujuan: newPengunjung.tujuan || "",
//     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
//     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
//     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
//     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
//     total_pengikut: newPengunjung.total_pengikut || 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // State untuk checkbox ambil antrian
//   const [ambilAntrian, setAmbilAntrian] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const navigate = useNavigate();

//   console.log("ambilAntrian:", ambilAntrian);

//   // Cek role user saat komponen dimuat
//   useEffect(() => {
//     const authUser = JSON.parse(localStorage.getItem('authUser'));
//     if (authUser && authUser.user && authUser.user.role === 'admin') {
//       setIsAdmin(true);
//     }
    
//     // Hitung total pengikut saat pertama kali komponen dimuat
//     const initialTotal = calculateTotalPengikut(formData);
//     setFormData(prev => ({
//       ...prev,
//       total_pengikut: initialTotal
//     }));
//   }, []);

//   // Fungsi menghitung total pengikut
//   const calculateTotalPengikut = (data) => {
//     const total = 
//       parseInt(data.pengikut_laki_laki || 0) +
//       parseInt(data.pengikut_perempuan || 0) +
//       parseInt(data.pengikut_anak_anak || 0) +
//       parseInt(data.pengikut_bayi || 0);
//     return total;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const updatedFormData = {
//       ...formData,
//       [name]: value,
//     };
    
//     // Jika field pengikut diubah, hitung total otomatis
//     if (name.includes('pengikut_') && name !== 'total_pengikut') {
//       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//     }
    
//     setFormData(updatedFormData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await updatePengunjung(newPengunjung.kode, formData);
//       toast.success("Data pengunjung berhasil diperbarui!");
      
//       // Tunggu sebentar sebelum menutup atau navigasi
//       setTimeout(() => {
//         if (onClose) onClose();
//       }, 1000);
      
//     } catch (error) {
//       console.error("Error: ", error);
//       setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
//       toast.error("Gagal memperbarui data pengunjung.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const finish = () => {
//     // Validasi berdasarkan checkbox dan tujuan
//     if (!ambilAntrian && formData.tujuan === "Menitip barang") {
//       // Jika checkbox tercentang dan tujuan menitip barang, arahkan ke label
//       navigate(`/label/${newPengunjung.kode}`);
//     } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
//       // Selain itu, arahkan ke root utama
//       navigate(`/pengunjung/${newPengunjung.kode}`);
//     }else{
//       navigate('/');
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
//       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">
//             ✏️ Edit Data Pengunjung Baru
//           </h1>
//           <div className="space-x-2">
//             <button
//               onClick={onBack}
//               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//             >
//               ← Tambah Lagi
//             </button>
//             <button
//               onClick={finish}
//               className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
//             >
//               Selesai
//             </button>
//           </div>
//         </div>

//         {/* Checkbox Ambil Antrian - hanya tampil untuk admin */}
//         {isAdmin && (
//           <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded animate-pulse">
//   <div className="flex justify-between items-center">
//     <label htmlFor="ambilAntrian" className="ml-2 text-xl font-bold text-yellow-700">
//       Ambil Antrian QR Code di Loket
//     </label>
//     <input
//       type="checkbox"
//       id="ambilAntrian"
//       checked={ambilAntrian}
//       onChange={(e) => setAmbilAntrian(e.target.checked)}
//       className="w-8 h-8 text-black font-bold border-4 border-gray-300 rounded focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
//     /> 
//   </div>
//   <div className="mt-2 text-sm text-yellow-600">
//     <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
//     <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
//   </div>
// </div>
//         )}

//         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//           <p className="text-green-700 font-medium">
//             ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
//           </p>
//           <div className="mt-2 text-sm text-green-600">
//             <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
//             <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
//           </div>
//         </div>

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Kolom Kiri */}
//           <div className="space-y-4">
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Nama</label>
//               <input
//                 type="text"
//                 name="nama"
//                 value={formData.nama}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
//               <select
//                 name="jenis_kelamin"
//                 value={formData.jenis_kelamin}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">Pilih Jenis Kelamin</option>
//                 <option value="laki-laki">Laki-laki</option>
//                 <option value="perempuan">Perempuan</option>
//               </select>
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">NIK</label>
//               <input
//                 type="text"
//                 name="nik"
//                 value={formData.nik}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Alamat</label>
//               <input
//                 type="text"
//                 name="alamat"
//                 value={formData.alamat}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
//               <input
//                 type="text"
//                 name="hp"
//                 value={formData.hp}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
//               <input
//                 type="text"
//                 name="hubungan_keluarga"
//                 value={formData.hubungan_keluarga}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Tujuan</label>
//               <select
//                 name="tujuan"
//                 value={formData.tujuan}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">Pilih Jenis Tujuan</option>
//                 <option value="Berkunjung">Berkunjung</option>
//                 <option value="Menitip barang">Menitip barang</option>
//               </select>
//             </div>
//           </div>

//           {/* Kolom Kanan - Field Pengikut */}
//           <div className="space-y-4">
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
//               <input
//                 type="number"
//                 name="pengikut_laki_laki"
//                 value={formData.pengikut_laki_laki}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min="0"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
//               <input
//                 type="number"
//                 name="pengikut_perempuan"
//                 value={formData.pengikut_perempuan}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min="0"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
//               <input
//                 type="number"
//                 name="pengikut_anak_anak"
//                 value={formData.pengikut_anak_anak}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min="0"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
//               <input
//                 type="number"
//                 name="pengikut_bayi"
//                 value={formData.pengikut_bayi}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min="0"
//               />
//             </div>

//             {/* Total Pengikut (Read-only) */}
//             <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
//               <div className="text-2xl font-bold text-green-600 text-center">
//                 {formData.total_pengikut} Orang
//               </div>
//               <div className="text-sm text-gray-600 text-center mt-1">
//                 (Laki-laki: {formData.pengikut_laki_laki} | 
//                 Perempuan: {formData.pengikut_perempuan} | 
//                 Anak: {formData.pengikut_anak_anak} | 
//                 Bayi: {formData.pengikut_bayi})
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 mt-4"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center">
//                   <FaSpinner className="animate-spin mr-2" />
//                   Memproses...
//                 </span>
//               ) : (
//                 "💾 Simpan Perubahan"
//               )}
//             </button>
//           </div>
//         </form>

//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
//         >
//           + Tambah Barang Titipan
//         </button>

//         {/* Modal CreateBarangTitipan */}
//         <CreateBarangTitipanModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           pengunjungs={newPengunjung}
//         />

//         <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
//           <p className="text-blue-700 text-sm">
//             <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPengunjungForm;


import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import useDataStore from "../../store/useDataStore";
import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon, FaTimes, FaEye, FaCamera, FaBarcode, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// Komponen BarcodeScanner untuk AddPengunjungForm
const BarcodeScanner = ({ onScan, onClose }) => {
  useEffect(() => {
    // Dynamically import html5-qrcode
    import('html5-qrcode').then(({ Html5QrcodeScanner }) => {
      const scanner = new Html5QrcodeScanner('qr-reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 10,
        rememberLastUsedCamera: true,
        supportedScanTypes: null,
      });

      let isScanning = true;

      const onScanSuccess = (decodedText) => {
        if (isScanning) {
          onScan(decodedText);
          scanner.clear().then(() => {
            console.log("Scanner cleared successfully");
          }).catch((err) => {
            console.warn("Error clearing scanner:", err);
          });
          onClose();
          isScanning = false;
        }
      };

      const onScanError = (error) => {
        if (error && !error.message?.includes('NotFoundException')) {
          console.warn("Scan error:", error);
        }
      };

      setTimeout(() => {
        if (isScanning) {
          scanner.render(onScanSuccess, onScanError);
        }
      }, 100);

      return () => {
        isScanning = false;
        setTimeout(() => {
          scanner.clear().catch((err) => {
            console.warn("Error in cleanup:", err);
          });
        }, 100);
      };
    }).catch((error) => {
      console.error("Failed to load html5-qrcode:", error);
      onClose();
    });

  }, [onScan, onClose]);

  return (
    <div className="text-center">
      <div className="mb-4">
        <p className="text-gray-600">Arahkan kamera ke barcode</p>
      </div>
      <div id="qr-reader" className="mx-auto" style={{ width: '100%', maxWidth: '300px' }}></div>
      <button 
        onClick={onClose}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
      >
        Tutup Scanner
      </button>
    </div>
  );
};

// Komponen ScannerModal untuk AddPengunjungForm
const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleScan = (decodedText) => {
    onScan(decodedText);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={handleClose}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        
        {isVisible && (
          <BarcodeScanner onScan={handleScan} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

const AddPengunjungForm = ({ onClose }) => {
  const { createPengunjung, createDataPengunjung, fetchWbpList, wbpList, updatePengunjung, fetchPengunjungData, pengunjungData } = useDataStore();
  const [formData, setFormData] = useState({
    wbp_id: "",
    nama: "",
    jenis_kelamin: "",
    nik: "",
    alamat: "",
    hp: "",
    hubungan_keluarga: "",
    tujuan: "",
    kode: "",
    barcode: null,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchWbp, setSearchWbp] = useState("");
  const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // State baru untuk dropdown pengunjung
  const [searchPengunjung, setSearchPengunjung] = useState("");
  const [isPengunjungDropdownOpen, setIsPengunjungDropdownOpen] = useState(false);
  const [selectedPengunjung, setSelectedPengunjung] = useState(null);
  const dropdownPengunjungRef = useRef(null);

  // State baru untuk preview gambar
  const [previewKtp, setPreviewKtp] = useState(null);
  const [previewPengunjung, setPreviewPengunjung] = useState(null);
  const [previewBarcode, setPreviewBarcode] = useState(null);
  const [showModalKtp, setShowModalKtp] = useState(false);
  const [showModalPengunjung, setShowModalPengunjung] = useState(false);
  const [showModalBarcode, setShowModalBarcode] = useState(false);

  // State untuk file objects
  const [photoKtpFile, setPhotoKtpFile] = useState(null);
  const [photoPengunjungFile, setPhotoPengunjungFile] = useState(null);
  const [barcodeFile, setBarcodeFile] = useState(null);

  // State baru untuk menampung data pengunjung yang baru dibuat
  const [newPengunjung, setNewPengunjung] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  // State untuk scanner
  const [showScannerPengunjung, setShowScannerPengunjung] = useState(false);
  const [showScannerWbp, setShowScannerWbp] = useState(false);

  // Fetch data WBP dan Pengunjung saat komponen dimuat
  useEffect(() => {
    fetchWbpList();
    fetchPengunjungData();
  }, [fetchWbpList, fetchPengunjungData]);

  console.log("Pengunjung data", pengunjungData);

  // Handle click outside untuk dropdown pengunjung
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownPengunjungRef.current && !dropdownPengunjungRef.current.contains(event.target)) {
        setIsPengunjungDropdownOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsWbpDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter data pengunjung untuk dropdown - Handle case ketika pengunjungData bukan array
  const filteredPengunjung = (() => {
    const dataArray = Array.isArray(pengunjungData) 
      ? pengunjungData 
      : (pengunjungData && typeof pengunjungData === 'object' ? [pengunjungData] : []);
    
    console.log("Data array untuk filter:", dataArray);
    
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const isAdmin = authUser && authUser.user && authUser.user.role === 'admin';
    
    return dataArray.filter((pengunjung) => {
      if (isAdmin) {
        // Admin bisa melihat semua data dengan filter
        return (
          pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
          pengunjung.nik?.includes(searchPengunjung) ||
          pengunjung.hp?.includes(searchPengunjung) ||
          pengunjung.kode?.includes(searchPengunjung)
        );
      } else {
        // User biasa hanya bisa melihat data miliknya sendiri
        const userNik = authUser?.user?.nik;
        const userNama = authUser?.user?.nama;
        const userHp = authUser?.user?.hp;
        
        // Cek apakah data ini milik user yang login
        const isUserData = 
          pengunjung.nik === userNik || 
          pengunjung.nama === userNama ||
          pengunjung.hp === userHp;
        
        if (!isUserData) return false;
        
        // Jika ada pencarian, filter juga berdasarkan pencarian
        if (searchPengunjung) {
          return (
            pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
            pengunjung.nik?.includes(searchPengunjung) ||
            pengunjung.hp?.includes(searchPengunjung) ||
            pengunjung.kode?.includes(searchPengunjung)
          );
        }
        
        return true;
      }
    });
  })();

  // Filter WBP list dengan handling data tunggal juga
  const filteredWbp = (() => {
    const dataArray = Array.isArray(wbpList) 
      ? wbpList 
      : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
    return dataArray.filter(
      (wbp) =>
        wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
        wbp.id.toString().includes(searchWbp)
    );
  })();

  // Fungsi untuk memilih pengunjung dari dropdown
  const selectPengunjung = (pengunjung) => {
    setSelectedPengunjung(pengunjung);
    setFormData({
      ...formData,
      nama: pengunjung.nama || "",
      nik: pengunjung.nik || "",
      alamat: pengunjung.alamat || "",
      hp: pengunjung.hp || "",
      jenis_kelamin: pengunjung.jenis_kelamin || "",
      hubungan_keluarga: pengunjung.hubungan_keluarga || "",
      kode: pengunjung.kode || "",
      tujuan: pengunjung.tujuan || "Berkunjung", // Default jika tidak ada data
    });
    
    // Set preview gambar dari data yang sudah ada
    if (pengunjung.photo_ktp) {
      setPreviewKtp(pengunjung.photo_ktp);
      setFormData(prev => ({ ...prev, photo_ktp: pengunjung.photo_ktp }));
    }
    if (pengunjung.photo_pengunjung) {
      setPreviewPengunjung(pengunjung.photo_pengunjung);
      setFormData(prev => ({ ...prev, photo_pengunjung: pengunjung.photo_pengunjung }));
    }
    if (pengunjung.barcode) {
      setPreviewBarcode(pengunjung.barcode);
      setFormData(prev => ({ ...prev, barcode: pengunjung.barcode }));
    }
    
    setSearchPengunjung(pengunjung.nama);
    setIsPengunjungDropdownOpen(false);
  };

  // Fungsi untuk menghitung total pengikut
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
    
    // Jika field pengikut diubah, hitung total otomatis
    if (name.includes('pengikut_') && name !== 'total_pengikut') {
      updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
    }
    
    setFormData(updatedFormData);
  };

  const selectWbp = (wbp) => {
    setFormData({ ...formData, wbp_id: wbp.id });
    setSearchWbp(wbp.nama);
    setIsWbpDropdownOpen(false);
  };

  // Fungsi untuk handle scan barcode pengunjung
  const handleScanPengunjung = (data) => {
    setSearchPengunjung(data);
    setShowScannerPengunjung(false);
    
    // Cari pengunjung berdasarkan kode yang di-scan
    const pengunjungDitemukan = filteredPengunjung.find(p => p.kode === data);
    if (pengunjungDitemukan) {
      selectPengunjung(pengunjungDitemukan);
      toast.success("Pengunjung ditemukan melalui scan");
    } else {
      toast.error("Pengunjung tidak ditemukan");
    }
  };

  // Fungsi untuk handle scan barcode WBP
  const handleScanWbp = (data) => {
    setSearchWbp(data);
    setShowScannerWbp(false);
    
    // Cari WBP berdasarkan ID atau nama yang di-scan
    const wbpDitemukan = filteredWbp.find(wbp => 
      wbp.id.toString() === data || wbp.nama?.toLowerCase().includes(data.toLowerCase())
    );
    if (wbpDitemukan) {
      selectWbp(wbpDitemukan);
      toast.success("WBP ditemukan melalui scan");
    } else {
      toast.error("WBP tidak ditemukan");
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file) {
      // Validasi tipe file
      if (!file.type.startsWith('image/')) {
        toast.error("File harus berupa gambar");
        return;
      }

      // Validasi ukuran file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Ukuran file maksimal 5MB");
        return;
      }

      // Simpan file object ke state terpisah
      if (name === 'photo_ktp') {
        setPhotoKtpFile(file);
        setFormData(prev => ({ ...prev, photo_ktp: file }));
      } else if (name === 'photo_pengunjung') {
        setPhotoPengunjungFile(file);
        setFormData(prev => ({ ...prev, photo_pengunjung: file }));
      } else if (name === 'barcode') {
        setBarcodeFile(file);
        setFormData(prev => ({ ...prev, barcode: file }));
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (name === 'photo_ktp') {
          setPreviewKtp(e.target.result);
        } else if (name === 'photo_pengunjung') {
          setPreviewPengunjung(e.target.result);
        } else if (name === 'barcode') {
          setPreviewBarcode(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk menghapus foto
  const removePhoto = (type) => {
    if (type === 'ktp') {
      setFormData({ ...formData, photo_ktp: null });
      setPreviewKtp(null);
      setPhotoKtpFile(null);
    } else if (type === 'pengunjung') {
      setFormData({ ...formData, photo_pengunjung: null });
      setPreviewPengunjung(null);
      setPhotoPengunjungFile(null);
    } else if (type === 'barcode') {
      setFormData({ ...formData, barcode: null });
      setPreviewBarcode(null);
      setBarcodeFile(null);
    }
  };

  // Fungsi untuk menggunakan foto dari data existing
  const handleExistingPhoto = (type) => {
    if (!selectedPengunjung) return;
    
    if (type === 'ktp' && selectedPengunjung.photo_ktp) {
      setFormData({ ...formData, photo_ktp: selectedPengunjung.photo_ktp });
      setPreviewKtp(selectedPengunjung.photo_ktp);
      setPhotoKtpFile(null); // Reset file object
      toast.success("Menggunakan foto KTP dari data existing");
    } else if (type === 'pengunjung' && selectedPengunjung.photo_pengunjung) {
      setFormData({ ...formData, photo_pengunjung: selectedPengunjung.photo_pengunjung });
      setPreviewPengunjung(selectedPengunjung.photo_pengunjung);
      setPhotoPengunjungFile(null); // Reset file object
      toast.success("Menggunakan foto pengunjung dari data existing");
    } else if (type === 'barcode' && selectedPengunjung.barcode) {
      setFormData({ ...formData, barcode: selectedPengunjung.barcode });
      setPreviewBarcode(selectedPengunjung.barcode);
      setBarcodeFile(null); // Reset file object
      toast.success("Menggunakan barcode dari data existing");
    } else {
      toast.error("File tidak tersedia di data existing");
    }
  };

  // Fungsi untuk generate kode otomatis
  const generateKode = () => {
    const randomKode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setFormData({
      ...formData,
      kode: randomKode
    });
    toast.success("Kode berhasil digenerate: " + randomKode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id || !formData.kode) {
      setError("Pastikan nama, NIK, nomor HP, WBP, dan kode diisi.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    
    // Tambahkan semua field formData ke FormData
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        // Handle file uploads - jika file object, append sebagai file
        if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } 
        // Handle URL strings dari data existing
        else if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && typeof formData[key] === 'string') {
          formDataToSend.append(key, formData[key]);
        }
        // Handle field lainnya
        else if (key !== 'photo_ktp' && key !== 'photo_pengunjung' && key !== 'barcode') {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    // Debug: Log formData sebelum dikirim
    console.log("FormData sebelum submit:", formData);
    console.log("Photo KTP:", formData.photo_ktp);
    console.log("Photo Pengunjung:", formData.photo_pengunjung);
    console.log("Barcode:", formData.barcode);

    // Debug: Log FormData entries
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ': ', pair[1]);
    }

    try {
      // Simpan response dari createPengunjung ke state
      const createdPengunjung = await createPengunjung(formDataToSend, setError);
      
      if (createdPengunjung) {
        toast.success("Pengunjung berhasil ditambahkan!");

        // Simpan data pengunjung baru ke state
        setNewPengunjung(createdPengunjung);
        
        // Tampilkan form edit
        setShowEditForm(true);

        // Reset form
        setFormData({
          wbp_id: "",
          nama: "",
          jenis_kelamin: "",
          nik: "",
          alamat: "",
          hp: "",
          hubungan_keluarga: "",
          tujuan: "Berkunjung",
          kode: "",
          barcode: null,
          pengikut_laki_laki: 0,
          pengikut_perempuan: 0,
          pengikut_anak_anak: 0,
          pengikut_bayi: 0,
          total_pengikut: 0,
          keterangan: "",
          photo_ktp: null,
          photo_pengunjung: null,
        });
        setSelectedPengunjung(null);
        setSearchPengunjung("");
        setPreviewKtp(null);
        setPreviewPengunjung(null);
        setPreviewBarcode(null);
        setPhotoKtpFile(null);
        setPhotoPengunjungFile(null);
        setBarcodeFile(null);
      } else {
        throw new Error("Gagal mendapatkan response dari server");
      }

    } catch (err) {
      console.error("Error saat menambahkan pengunjung:", err);
      toast.error("Gagal menambahkan pengunjung. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fungsi untuk kembali ke form tambah
  const handleBackToAddForm = () => {
    setShowEditForm(false);
    setNewPengunjung(null);
    setSearchWbp("");
    setSearchPengunjung("");
    setSelectedPengunjung(null);
  };

  // Jika showEditForm true dan newPengunjung ada, tampilkan EditPengunjungForm
  if (showEditForm && newPengunjung) {
    return (
      <EditPengunjungFormWrapper 
        newPengunjung={newPengunjung}
        onBack={handleBackToAddForm}
        onClose={onClose}
      />
    );
  }

  // Modal untuk preview gambar besar
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

  // Tampilkan form tambah pengunjung
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="w-full">
            <Link to="/" className="flex justify-end text-white font-bold hover:text-green-300 text-2xl" style={{textDecoration: 'none'}}>
              <FaHomeIcon />
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
            {/* Pilih WBP dengan scan barcode */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" /> Cari Warga Binaan
              </label>
              <div className="flex items-center space-x-2">
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
                <button
                  type="button"
                  onClick={() => setShowScannerWbp(true)}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title="Scan Barcode WBP"
                >
                  <FaQrcode className="w-5 h-5" />
                </button>
              </div>
              
              {isWbpDropdownOpen && filteredWbp.length > 0 && (
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

            {/* Cari Pengunjung yang Sudah Ada dengan scan barcode */}
            <div className="relative" ref={dropdownPengunjungRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" /> Cari Pengunjung (Data Existing)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={searchPengunjung}
                  onChange={(e) => {
                    setSearchPengunjung(e.target.value);
                    setIsPengunjungDropdownOpen(true);
                  }}
                  onFocus={() => setIsPengunjungDropdownOpen(true)}
                  placeholder="Ketikan nama atau NIK pengunjung yang sudah ada..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowScannerPengunjung(true)}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title="Scan Barcode Pengunjung"
                >
                  <FaQrcode className="w-5 h-5" />
                </button>
              </div>
              
              {isPengunjungDropdownOpen && filteredPengunjung.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredPengunjung.map((pengunjung, index) => (
                    <div
                      key={pengunjung.id || index}
                      onClick={() => selectPengunjung(pengunjung)}
                      className="p-3 hover:bg-green-50 cursor-pointer flex items-center border-b border-gray-100"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{pengunjung.nama}</div>
                        <div className="text-sm text-gray-600">NIK: {pengunjung.nik}</div>
                        <div className="text-sm text-gray-600">HP: {pengunjung.hp}</div>
                        <div className="text-sm text-gray-500">Alamat: {pengunjung.alamat}</div>
                        <div className="text-sm text-gray-500">Kode: {pengunjung.kode}</div>
                      </div>
                      <FaUser className="ml-2 text-green-500" />
                    </div>
                  ))}
                </div>
              )}

              {/* Debug info */}
              <div className="mt-1 text-xs text-gray-500">
                Menampilkan {filteredPengunjung.length} data pengunjung
              </div>
            </div>

            {/* Informasi Pengunjung Terpilih */}
            {selectedPengunjung && (
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                <p className="text-green-700 font-medium mb-2">
                  ✓ Data pengunjung terpilih:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-sm text-green-600">
                      <div><strong>Nama:</strong> {selectedPengunjung.nama}</div>
                      <div><strong>NIK:</strong> {selectedPengunjung.nik}</div>
                      <div><strong>HP:</strong> {selectedPengunjung.hp}</div>
                      <div><strong>Alamat:</strong> {selectedPengunjung.alamat}</div>
                      <div><strong>Jenis Kelamin:</strong> {selectedPengunjung.jenis_kelamin}</div>
                      <div><strong>Kode:</strong> {selectedPengunjung.kode}</div>
                      {selectedPengunjung.hubungan_keluarga && (
                        <div><strong>Hubungan:</strong> {selectedPengunjung.hubungan_keluarga}</div>
                      )}
                    </div>
                  </div>
                  
                  {/* Foto dari Data Existing */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      {/* Foto KTP Existing */}
                      {selectedPengunjung.photo_ktp && (
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-green-700">KTP</span>
                            <button
                              type="button"
                              onClick={() => handleExistingPhoto('ktp')}
                              className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
                            >
                              Gunakan
                            </button>
                          </div>
                          <div 
                            className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
                            onClick={() => setShowModalKtp(true)}
                          >
                            <img
                              src={selectedPengunjung.photo_ktp}
                              alt="KTP Existing"
                              className="w-full h-16 object-cover rounded"
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Foto Pengunjung Existing */}
                      {selectedPengunjung.photo_pengunjung && (
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-green-700">Foto</span>
                            <button
                              type="button"
                              onClick={() => handleExistingPhoto('pengunjung')}
                              className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
                            >
                              Gunakan
                            </button>
                          </div>
                          <div 
                            className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
                            onClick={() => setShowModalPengunjung(true)}
                          >
                            <img
                              src={selectedPengunjung.photo_pengunjung}
                              alt="Pengunjung Existing"
                              className="w-full h-16 object-cover rounded"
                            />
                          </div>
                        </div>
                      )}

                      {/* Barcode Existing */}
                      {selectedPengunjung.barcode && (
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-green-700">Barcode</span>
                            <button
                              type="button"
                              onClick={() => handleExistingPhoto('barcode')}
                              className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
                            >
                              Gunakan
                            </button>
                          </div>
                          <div 
                            className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
                            onClick={() => setShowModalBarcode(true)}
                          >
                            <img
                              src={selectedPengunjung.barcode}
                              alt="Barcode Existing"
                              className="w-full h-16 object-cover rounded"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {(!selectedPengunjung.photo_ktp || !selectedPengunjung.photo_pengunjung || !selectedPengunjung.barcode) && (
                      <div className="text-xs text-green-600 bg-green-100 p-2 rounded">
                        <FaCamera className="inline mr-1" />
                        File yang tidak tersedia: 
                        {!selectedPengunjung.photo_ktp && " KTP"}
                        {!selectedPengunjung.photo_pengunjung && " Foto"}
                        {!selectedPengunjung.barcode && " Barcode"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

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

            {/* Kode */}
            <div className="flex space-x-2">
              <input
                type="text"
                name="kode"
                value={formData.kode}
                onChange={handleInputChange}
                placeholder="Masukkan kode atau generate otomatis"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={generateKode}
                disabled={!!formData.kode}
                className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  formData.kode 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Generate
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Kode unik untuk identifikasi pengunjung
            </p>

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

            {/* Hubungan Keluarga */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline-block mr-2" /> Hubungan Keluarga
              </label>
              <input
                type="text"
                name="hubungan_keluarga"
                value={formData.hubungan_keluarga}
                onChange={handleInputChange}
                placeholder="Contoh: Saudara, Ibu, Ayah, dll."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Tujuan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline-block mr-2" /> Tujuan
              </label>
              <select
                name="tujuan"
                value={formData.tujuan}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">Pilih Jenis Tujuan</option>
                <option value="Berkunjung">Berkunjung</option>
                <option value="Menitip barang">Menitip barang</option>
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
                accept="image/*"
              />
              
              {/* Preview Foto KTP */}
              {previewKtp && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Preview Foto KTP:</span>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setShowModalKtp(true)}
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <FaEye className="mr-1" /> Lihat Besar
                      </button>
                      <button
                        type="button"
                        onClick={() => removePhoto('ktp')}
                        className="text-red-600 hover:text-red-800 text-sm flex items-center"
                      >
                        <FaTimes className="mr-1" /> Hapus
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={previewKtp}
                      alt="Preview KTP"
                      className="max-h-40 rounded border border-gray-300 cursor-pointer"
                      onClick={() => setShowModalKtp(true)}
                    />
                  </div>
                </div>
              )}
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
                accept="image/*"
              />
              
              {/* Preview Foto Pengunjung */}
              {previewPengunjung && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Preview Foto Pengunjung:</span>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setShowModalPengunjung(true)}
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <FaEye className="mr-1" /> Lihat Besar
                      </button>
                      <button
                        type="button"
                        onClick={() => removePhoto('pengunjung')}
                        className="text-red-600 hover:text-red-800 text-sm flex items-center"
                      >
                        <FaTimes className="mr-1" /> Hapus
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={previewPengunjung}
                      alt="Preview Pengunjung"
                      className="max-h-40 rounded border border-gray-300 cursor-pointer"
                      onClick={() => setShowModalPengunjung(true)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Upload Barcode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBarcode className="inline-block mr-2" /> Barcode/QR Code
              </label>
              <input
                type="file"
                name="barcode"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                accept="image/*"
              />
              
              {/* Preview Barcode */}
              {previewBarcode && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Preview Barcode:</span>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setShowModalBarcode(true)}
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <FaEye className="mr-1" /> Lihat Besar
                      </button>
                      <button
                        type="button"
                        onClick={() => removePhoto('barcode')}
                        className="text-red-600 hover:text-red-800 text-sm flex items-center"
                      >
                        <FaTimes className="mr-1" /> Hapus
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={previewBarcode}
                      alt="Preview Barcode"
                      className="max-h-40 rounded border border-gray-300 cursor-pointer"
                      onClick={() => setShowModalBarcode(true)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
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

      {/* Modal untuk preview gambar besar */}
      <ImageModal
        isOpen={showModalKtp}
        onClose={() => setShowModalKtp(false)}
        imageUrl={previewKtp || (selectedPengunjung?.photo_ktp)}
        title="Foto KTP"
      />
      
      <ImageModal
        isOpen={showModalPengunjung}
        onClose={() => setShowModalPengunjung(false)}
        imageUrl={previewPengunjung || (selectedPengunjung?.photo_pengunjung)}
        title="Foto Pengunjung"
      />

      <ImageModal
        isOpen={showModalBarcode}
        onClose={() => setShowModalBarcode(false)}
        imageUrl={previewBarcode || (selectedPengunjung?.barcode)}
        title="Barcode/QR Code"
      />

      {/* Scanner Modal untuk Pengunjung */}
      <ScannerModal 
        isOpen={showScannerPengunjung}
        onClose={() => setShowScannerPengunjung(false)}
        onScan={handleScanPengunjung}
        title="Scan Barcode Pengunjung"
      />

      {/* Scanner Modal untuk WBP */}
      <ScannerModal 
        isOpen={showScannerWbp}
        onClose={() => setShowScannerWbp(false)}
        onScan={handleScanWbp}
        title="Scan Barcode WBP"
      />
    </div>
  );
};

// Komponen wrapper untuk EditPengunjungForm
const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose }) => {
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
  
  // State untuk checkbox ambil antrian
  const [ambilAntrian, setAmbilAntrian] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // State untuk preview gambar yang sudah diupload
  const [showModalKtp, setShowModalKtp] = useState(false);
  const [showModalPengunjung, setShowModalPengunjung] = useState(false);
  const [showModalBarcode, setShowModalBarcode] = useState(false);

  const navigate = useNavigate();

  // Cek role user saat komponen dimuat
  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    if (authUser && authUser.user && authUser.user.role === 'admin') {
      setIsAdmin(true);
    }
    
    // Hitung total pengikut saat pertama kali komponen dimuat
    const initialTotal = calculateTotalPengikut(formData);
    setFormData(prev => ({
      ...prev,
      total_pengikut: initialTotal
    }));
  }, []);

  // Modal untuk preview gambar besar
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

  // Fungsi menghitung total pengikut
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
    
    // Jika field pengikut diubah, hitung total otomatis
    if (name.includes('pengikut_') && name !== 'total_pengikut') {
      updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
    }
    
    setFormData(updatedFormData);
  };

  console.log("new pengunjung", newPengunjung)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await updatePengunjung(newPengunjung.kode, formData);
      toast.success("Data pengunjung berhasil diperbarui!");
      
      setTimeout(() => {
        if (onClose) onClose();
      }, 1000);
      
    } catch (error) {
      console.error("Error: ", error);
      setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
      toast.error("Gagal memperbarui data pengunjung.");
    } finally {
      setLoading(false);
    }
  };

  const finish = () => {
    if (!ambilAntrian && formData.tujuan === "Menitip barang") {
      navigate(`/label/${newPengunjung.kode}`);
    } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
      navigate(`/pengunjung/${newPengunjung.kode}`);
    } else {
      navigate('/');
    }
  }

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

        {/* Checkbox Ambil Antrian - hanya tampil untuk admin */}
        {isAdmin && (
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded animate-pulse">
            <div className="flex justify-between items-center">
              <label htmlFor="ambilAntrian" className="ml-2 text-xl font-bold text-yellow-700">
                Ambil Antrian QR Code di Loket
              </label>
              <input
                type="checkbox"
                id="ambilAntrian"
                checked={ambilAntrian}
                onChange={(e) => setAmbilAntrian(e.target.checked)}
                className="w-8 h-8 text-black font-bold border-4 border-gray-300 rounded focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
              /> 
            </div>
            <div className="mt-2 text-sm text-yellow-600">
              <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
              <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
            </div>
          </div>
        )}

        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <p className="text-green-700 font-medium">
            ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
          </p>
          <div className="mt-2 text-sm text-green-600">
            <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
            <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
          </div>
        </div>

        {/* Tampilkan Foto yang Sudah Diupload */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Foto KTP */}
          {newPengunjung.photo_ktp && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-blue-800">Foto KTP</h3>
                <button
                  onClick={() => setShowModalKtp(true)}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <FaEye className="mr-1" /> Lihat Besar
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={newPengunjung.photo_ktp}
                  alt="Foto KTP"
                  className="max-h-40 rounded border border-blue-300 cursor-pointer"
                  onClick={() => setShowModalKtp(true)}
                />
              </div>
            </div>
          )}

          {/* Foto Pengunjung */}
          {newPengunjung.photo_pengunjung && (
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-purple-800">Foto Pengunjung</h3>
                <button
                  onClick={() => setShowModalPengunjung(true)}
                  className="text-purple-600 hover:text-purple-800 text-sm flex items-center"
                >
                  <FaEye className="mr-1" /> Lihat Besar
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={newPengunjung.photo_pengunjung}
                  alt="Foto Pengunjung"
                  className="max-h-40 rounded border border-purple-300 cursor-pointer"
                  onClick={() => setShowModalPengunjung(true)}
                />
              </div>
            </div>
          )}

          {/* Barcode */}
          {newPengunjung.barcode && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-green-800">Barcode/QR Code</h3>
                <button
                  onClick={() => setShowModalBarcode(true)}
                  className="text-green-600 hover:text-green-800 text-sm flex items-center"
                >
                  <FaEye className="mr-1" /> Lihat Besar
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={newPengunjung.barcode}
                  alt="Barcode"
                  className="max-h-40 rounded border border-green-300 cursor-pointer"
                  onClick={() => setShowModalBarcode(true)}
                />
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kolom Kiri */}
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Kode Pengunjung</label>
              <input
                type="text"
                name="kode"
                value={formData.kode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                readOnly
              />
              <p className="text-xs text-gray-500 mt-1">
                Kode tidak dapat diubah setelah dibuat
              </p>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
              <select
                name="jenis_kelamin"
                value={formData.jenis_kelamin}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">NIK</label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Alamat</label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
              <input
                type="text"
                name="hp"
                value={formData.hp}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
              <input
                type="text"
                name="hubungan_keluarga"
                value={formData.hubungan_keluarga}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Tujuan</label>
              <select
                name="tujuan"
                value={formData.tujuan}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih Jenis Tujuan</option>
                <option value="Berkunjung">Berkunjung</option>
                <option value="Menitip barang">Menitip barang</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
              <input
                type="number"
                name="pengikut_laki_laki"
                value={formData.pengikut_laki_laki}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
              <input
                type="number"
                name="pengikut_perempuan"
                value={formData.pengikut_perempuan}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
              <input
                type="number"
                name="pengikut_anak_anak"
                value={formData.pengikut_anak_anak}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
              <input
                type="number"
                name="pengikut_bayi"
                value={formData.pengikut_bayi}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
              />
            </div>

            {/* Total Pengikut (Read-only) */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
              <div className="text-2xl font-bold text-green-600 text-center">
                {formData.total_pengikut} Orang
              </div>
              <div className="text-sm text-gray-600 text-center mt-1">
                (Laki-laki: {formData.pengikut_laki_laki} | 
                Perempuan: {formData.pengikut_perempuan} | 
                Anak: {formData.pengikut_anak_anak} | 
                Bayi: {formData.pengikut_bayi})
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

        {/* Modal CreateBarangTitipan */}
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

      {/* Modal untuk preview gambar besar */}
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
    </div>
  );
};

export default AddPengunjungForm;