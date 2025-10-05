// // import React, { useState, useEffect, useRef } from "react";
// // import { toast } from "react-hot-toast";
// // import useDataStore from "../../store/useDataStore";
// // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import { User } from "lucide-react";

// // const AddPengunjungForm = ({ onClose }) => {
// //   const { createPengunjung, fetchWbpList, wbpList } = useDataStore();
// //   const [formData, setFormData] = useState({
// //     wbp_id: "",
// //     nama: "",
// //     jenis_kelamin: "",
// //     nik: "",
// //     alamat: "",
// //     hp: "",
// //     hubungan_keluarga: "",
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
// //   const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading button
// //     const [searchWbp, setSearchWbp] = useState("");
// //     const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// //     const dropdownRef = useRef(null);
// //     const navigate = useNavigate();


// //   // Fetch data WBP saat komponen dimuat
// //   useEffect(() => {
// //     fetchWbpList();
// //   }, [fetchWbpList]);

// //   // Handle perubahan input
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //     // Filter WBP berdasarkan pencarian
// //   const filteredWbp = wbpList.filter(
// //     (wbp) =>
// //       wbp.nama.toLowerCase().includes(searchWbp.toLowerCase()) ||
// //       wbp.id.toString().includes(searchWbp)
// //   );

// //   // Handle pemilihan WBP
// //   const selectWbp = (wbp) => {
// //     setFormData({ ...formData, wbp_id: wbp.id });
// //     setSearchWbp(wbp.nama);
// //     setIsWbpDropdownOpen(false);
// //   };

// //   // Handle perubahan file upload
// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: files[0],
// //     });
// //   };

// //   // Handle submit form
// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();

// //   //   // Validasi form
// //   //   if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// //   //     setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// //   //     return;
// //   //   }

// //   //   // Reset error
// //   //   setError("");

// //   //   // Set loading state ke true
// //   //   setIsSubmitting(true);

// //   //   // Buat FormData untuk mengirim file
// //   //   const formDataToSend = new FormData();
// //   //   for (const key in formData) {
// //   //     if (formData[key] !== null) {
// //   //       formDataToSend.append(key, formData[key]);
// //   //     }
// //   //   }

// //   //   // Panggil fungsi createPengunjung dari Zustand
// //   //   try {
// //   //     await createPengunjung(formDataToSend, setError);
// //   //     toast.success("Pengunjung berhasil ditambahkan!");

// //   //     // Reset form setelah berhasil
// //   //     setFormData({
// //   //       wbp_id: "",
// //   //       nama: "",
// //   //       jenis_kelamin: "",
// //   //       nik: "",
// //   //       alamat: "",
// //   //       hp: "",
// //   //       hubungan_keluarga: "",
// //   //       pengikut_laki_laki: 0,
// //   //       pengikut_perempuan: 0,
// //   //       pengikut_anak_anak: 0,
// //   //       pengikut_bayi: 0,
// //   //       total_pengikut: 0,
// //   //       keterangan: "",
// //   //       photo_ktp: null,
// //   //       photo_pengunjung: null,
// //   //     });

// //   //     // Tutup modal atau navigasi
// //   //     if (onClose) onClose();
// //   //     navigate("/pengunjung")
// //   //   } catch (err) {
// //   //     console.error("Error saat menambahkan pengunjung:", err);
// //   //   } finally {
// //   //     // Set loading state ke false setelah selesai
// //   //     setIsSubmitting(false);
// //   //   }
// //   // };


// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     // Validasi form
// //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// //       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// //       return;
// //     }
  
// //     // Reset error
// //     setError("");
  
// //     // Set loading state ke true
// //     setIsSubmitting(true);
  
// //     // Buat FormData untuk mengirim file
// //     const formDataToSend = new FormData();
// //     for (const key in formData) {
// //       if (formData[key] !== null) {
// //         formDataToSend.append(key, formData[key]);
// //       }
// //     }
  
// //     // // Debug: Periksa isi formDataToSend
// //     // for (let [key, value] of formDataToSend.entries()) {
// //     //   console.log(key, value);
// //     // }
  
// //     // Panggil fungsi createPengunjung dari Zustand
// //     try {
// //       const newPengunjung = await createPengunjung(formDataToSend, setError);
// //       toast.success("Pengunjung berhasil ditambahkan!");
  
// //       // Reset form setelah berhasil
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

      
  
// //       // Tutup modal atau navigasi
// //       if (onClose) onClose();
// //       // Navigasi ke halaman edit dengan kode pengunjung yang baru dibuat

// //       console.log("Navigating to update page for kode:", newPengunjung);
// //     if (newPengunjung && newPengunjung.kode) {
// //       navigate(`/update-pengunjung/${newPengunjung.kode}`);
// //     } 
// //     // else {
// //     //   // Fallback jika tidak ada kode, navigasi ke halaman pengunjung
// //     //   navigate("/pengunjung");
// //     // }
// //     } catch (err) {
// //       console.error("Error saat menambahkan pengunjung:", err);
// //     } finally {
// //       // Set loading state ke false setelah selesai
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// //         {/* Header */}
// //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// //           <div className="w-full">
// //       <Link to="/" className="flex justify-end top-4 left-4 text-black font-bold hover:text-green-500 text-2xl" style={{textDecoration: 'none', color: 'white'}}>
// //       <FaHome />
// //       </Link>
// //       </div>
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
// //             {/* Pilih Warga Binaan (WBP) */}
// //              {/* Input Pencarian WBP dengan Dropdown */}
// //              <div className="relative" ref={dropdownRef}>
// //                <label className="block text-sm font-medium text-gray-700 mb-2">
// //                  <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// //                </label>
// //                <input
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
              
// //               {isWbpDropdownOpen && (
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
// //               />
// //             </div>

// //             {/* Tombol Submit dengan Loading Indicator */}
// //             <button
// //               type="submit"
// //               disabled={isSubmitting} // Nonaktifkan tombol saat loading
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

// // export default AddPengunjungForm;




// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-hot-toast";
// import useDataStore from "../../store/useDataStore";
// import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { User } from "lucide-react";
// import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// const AddPengunjungForm = ({ onClose }) => {
//   const { createPengunjung, fetchWbpList, wbpList, updatePengunjung } = useDataStore();
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
// ;

//   // Fetch data WBP saat komponen dimuat
//   useEffect(() => {
//     fetchWbpList();
//   }, [fetchWbpList]);

//   // Fungsi untuk menghitung total pengikut
// const calculateTotalPengikut = (data) => {
//   const total = 
//     parseInt(data.pengikut_laki_laki || 0) +
//     parseInt(data.pengikut_perempuan || 0) +
//     parseInt(data.pengikut_anak_anak || 0) +
//     parseInt(data.pengikut_bayi || 0);
//   return total;
// };


//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };

//   const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   const updatedFormData = {
//     ...formData,
//     [name]: value,
//   };
  
//   // Jika field pengikut diubah, hitung total otomatis
//   if (name.includes('pengikut_') && name !== 'total_pengikut') {
//     updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//   }
  
//   setFormData(updatedFormData);
// };

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

//   const navigate = useNavigate();

//   // Di EditPengunjungFormWrapper, tambahkan useEffect
// useEffect(() => {
//   // Hitung total pengikut saat pertama kali komponen dimuat
//   const initialTotal = calculateTotalPengikut(formData);
//   setFormData(prev => ({
//     ...prev,
//     total_pengikut: initialTotal
//   }));
// }, []);

//   // Fungsi menghitung total pengikut
// const calculateTotalPengikut = (data) => {
//   const total = 
//     parseInt(data.pengikut_laki_laki || 0) +
//     parseInt(data.pengikut_perempuan || 0) +
//     parseInt(data.pengikut_anak_anak || 0) +
//     parseInt(data.pengikut_bayi || 0);
//   return total;
// };

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   const updatedFormData = {
//     ...formData,
//     [name]: value,
//   };
  
//   // Jika field pengikut diubah, hitung total otomatis
//   if (name.includes('pengikut_') && name !== 'total_pengikut') {
//     updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//   }
  
//   setFormData(updatedFormData);
// };

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({ ...prev, [name]: value }));
//   // };

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
//     if(formData.tujuan === "Menitip barang") {
//       navigate(`/`);
//     } else {
//       navigate(`/pengunjung/${newPengunjung.kode}`);
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

//           {/* Kolom Kanan */}
//           {/* Field-field pengikut dalam grid */}
// <div className="space-y-4">
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

//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-700">Total Pengikut</label>
//               <input
//                 type="number"
//                 name="total_pengikut"
//                 value={formData.total_pengikut}
//                 onChange={handleInputChange}
//                 disabled
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min="0"
//               />
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

// {/* Total Pengikut (Read-only) */}
// <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//   <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
//   <div className="text-2xl font-bold text-green-600 text-center">
//     {formData.total_pengikut} Orang
//   </div>
//   <div className="text-sm text-gray-600 text-center mt-1">
//     (Laki-laki: {formData.pengikut_laki_laki} | 
//      Perempuan: {formData.pengikut_perempuan} | 
//      Anak: {formData.pengikut_anak_anak} | 
//      Bayi: {formData.pengikut_bayi})
//   </div>
// </div>

// {/* Hapus input total_pengikut yang lama */}
// {/* 
//   <div className="space-y-1">
//     <label className="block text-sm font-medium text-gray-700">Total Pengikut</label>
//     <input
//       type="number"
//       name="total_pengikut"
//       value={formData.total_pengikut}
//       onChange={handleInputChange}
//       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//       min="0"
//     />
//   </div>
// */}
//         </form>
//               <button
//                       onClick={() => setIsModalOpen(true)}
//                        className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
//                     >
//                       + Tambah Barang Titipan
//                     </button>
              
//                     {/* Modal CreateBarangTitipan */}
//                     <CreateBarangTitipanModal
//                       isOpen={isModalOpen}
//                       onClose={() => setIsModalOpen(false)}
//                       pengunjungs={newPengunjung} // Kirim data pengunjung ke modal
//                     />
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
import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

const AddPengunjungForm = ({ onClose }) => {
  const { createPengunjung, fetchWbpList, wbpList, updatePengunjung } = useDataStore();
  const [formData, setFormData] = useState({
    wbp_id: "",
    nama: "",
    jenis_kelamin: "",
    nik: "",
    alamat: "",
    hp: "",
    hubungan_keluarga: "",
    tujuan: "",
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

  // State baru untuk menampung data pengunjung yang baru dibuat
  const [newPengunjung, setNewPengunjung] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  // Fetch data WBP saat komponen dimuat
  useEffect(() => {
    fetchWbpList();
  }, [fetchWbpList]);

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

  const filteredWbp = wbpList.filter(
    (wbp) =>
      wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
      wbp.id.toString().includes(searchWbp)
  );

  const selectWbp = (wbp) => {
    setFormData({ ...formData, wbp_id: wbp.id });
    setSearchWbp(wbp.nama);
    setIsWbpDropdownOpen(false);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
      setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      // Simpan response dari createPengunjung ke state
      const createdPengunjung = await createPengunjung(formDataToSend, setError);
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
        tujuan: "",
        pengikut_laki_laki: 0,
        pengikut_perempuan: 0,
        pengikut_anak_anak: 0,
        pengikut_bayi: 0,
        total_pengikut: 0,
        keterangan: "",
        photo_ktp: null,
        photo_pengunjung: null,
      });

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

  // Tampilkan form tambah pengunjung
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
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
            {/* Pilih WBP */}
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
    tujuan: newPengunjung.tujuan || "",
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

  const navigate = useNavigate();

  console.log("ambilAntrian:", ambilAntrian);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await updatePengunjung(newPengunjung.kode, formData);
      toast.success("Data pengunjung berhasil diperbarui!");
      
      // Tunggu sebentar sebelum menutup atau navigasi
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
    // Validasi berdasarkan checkbox dan tujuan
    if (!ambilAntrian && formData.tujuan === "Menitip barang") {
      // Jika checkbox tercentang dan tujuan menitip barang, arahkan ke label
      navigate(`/label/${newPengunjung.kode}`);
    } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
      // Selain itu, arahkan ke root utama
      navigate(`/pengunjung/${newPengunjung.kode}`);
    }else{
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
          </div>

          {/* Kolom Kanan - Field Pengikut */}
          <div className="space-y-4">
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
    </div>
  );
};

export default AddPengunjungForm;