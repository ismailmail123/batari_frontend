// // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // import { toast } from "react-hot-toast";
// // // // // // import useDataStore from "../../store/useDataStore";
// // // // // // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner } from "react-icons/fa";
// // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // import { User } from "lucide-react";

// // // // // // const AddPengunjungForm = ({ onClose }) => {
// // // // // //   const { createPengunjung, fetchWbpList, wbpList } = useDataStore();
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     wbp_id: "",
// // // // // //     nama: "",
// // // // // //     jenis_kelamin: "",
// // // // // //     nik: "",
// // // // // //     alamat: "",
// // // // // //     hp: "",
// // // // // //     hubungan_keluarga: "",
// // // // // //     pengikut_laki_laki: 0,
// // // // // //     pengikut_perempuan: 0,
// // // // // //     pengikut_anak_anak: 0,
// // // // // //     pengikut_bayi: 0,
// // // // // //     total_pengikut: 0,
// // // // // //     keterangan: "",
// // // // // //     photo_ktp: null,
// // // // // //     photo_pengunjung: null,
// // // // // //   });
// // // // // //   const [error, setError] = useState("");
// // // // // //   const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading button
// // // // // //     const [searchWbp, setSearchWbp] = useState("");
// // // // // //     const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// // // // // //     const dropdownRef = useRef(null);
// // // // // //     const navigate = useNavigate();


// // // // // //   // Fetch data WBP saat komponen dimuat
// // // // // //   useEffect(() => {
// // // // // //     fetchWbpList();
// // // // // //   }, [fetchWbpList]);

// // // // // //   // Handle perubahan input
// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData({
// // // // // //       ...formData,
// // // // // //       [name]: value,
// // // // // //     });
// // // // // //   };

// // // // // //     // Filter WBP berdasarkan pencarian
// // // // // //   const filteredWbp = wbpList.filter(
// // // // // //     (wbp) =>
// // // // // //       wbp.nama.toLowerCase().includes(searchWbp.toLowerCase()) ||
// // // // // //       wbp.id.toString().includes(searchWbp)
// // // // // //   );

// // // // // //   // Handle pemilihan WBP
// // // // // //   const selectWbp = (wbp) => {
// // // // // //     setFormData({ ...formData, wbp_id: wbp.id });
// // // // // //     setSearchWbp(wbp.nama);
// // // // // //     setIsWbpDropdownOpen(false);
// // // // // //   };

// // // // // //   // Handle perubahan file upload
// // // // // //   const handleFileChange = (e) => {
// // // // // //     const { name, files } = e.target;
// // // // // //     setFormData({
// // // // // //       ...formData,
// // // // // //       [name]: files[0],
// // // // // //     });
// // // // // //   };

// // // // // //   // Handle submit form
// // // // // //   // const handleSubmit = async (e) => {
// // // // // //   //   e.preventDefault();

// // // // // //   //   // Validasi form
// // // // // //   //   if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// // // // // //   //     setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// // // // // //   //     return;
// // // // // //   //   }

// // // // // //   //   // Reset error
// // // // // //   //   setError("");

// // // // // //   //   // Set loading state ke true
// // // // // //   //   setIsSubmitting(true);

// // // // // //   //   // Buat FormData untuk mengirim file
// // // // // //   //   const formDataToSend = new FormData();
// // // // // //   //   for (const key in formData) {
// // // // // //   //     if (formData[key] !== null) {
// // // // // //   //       formDataToSend.append(key, formData[key]);
// // // // // //   //     }
// // // // // //   //   }

// // // // // //   //   // Panggil fungsi createPengunjung dari Zustand
// // // // // //   //   try {
// // // // // //   //     await createPengunjung(formDataToSend, setError);
// // // // // //   //     toast.success("Pengunjung berhasil ditambahkan!");

// // // // // //   //     // Reset form setelah berhasil
// // // // // //   //     setFormData({
// // // // // //   //       wbp_id: "",
// // // // // //   //       nama: "",
// // // // // //   //       jenis_kelamin: "",
// // // // // //   //       nik: "",
// // // // // //   //       alamat: "",
// // // // // //   //       hp: "",
// // // // // //   //       hubungan_keluarga: "",
// // // // // //   //       pengikut_laki_laki: 0,
// // // // // //   //       pengikut_perempuan: 0,
// // // // // //   //       pengikut_anak_anak: 0,
// // // // // //   //       pengikut_bayi: 0,
// // // // // //   //       total_pengikut: 0,
// // // // // //   //       keterangan: "",
// // // // // //   //       photo_ktp: null,
// // // // // //   //       photo_pengunjung: null,
// // // // // //   //     });

// // // // // //   //     // Tutup modal atau navigasi
// // // // // //   //     if (onClose) onClose();
// // // // // //   //     navigate("/pengunjung")
// // // // // //   //   } catch (err) {
// // // // // //   //     console.error("Error saat menambahkan pengunjung:", err);
// // // // // //   //   } finally {
// // // // // //   //     // Set loading state ke false setelah selesai
// // // // // //   //     setIsSubmitting(false);
// // // // // //   //   }
// // // // // //   // };


// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
  
// // // // // //     // Validasi form
// // // // // //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// // // // // //       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// // // // // //       return;
// // // // // //     }
  
// // // // // //     // Reset error
// // // // // //     setError("");
  
// // // // // //     // Set loading state ke true
// // // // // //     setIsSubmitting(true);
  
// // // // // //     // Buat FormData untuk mengirim file
// // // // // //     const formDataToSend = new FormData();
// // // // // //     for (const key in formData) {
// // // // // //       if (formData[key] !== null) {
// // // // // //         formDataToSend.append(key, formData[key]);
// // // // // //       }
// // // // // //     }
  
// // // // // //     // // Debug: Periksa isi formDataToSend
// // // // // //     // for (let [key, value] of formDataToSend.entries()) {
// // // // // //     //   console.log(key, value);
// // // // // //     // }
  
// // // // // //     // Panggil fungsi createPengunjung dari Zustand
// // // // // //     try {
// // // // // //       const newPengunjung = await createPengunjung(formDataToSend, setError);
// // // // // //       toast.success("Pengunjung berhasil ditambahkan!");
  
// // // // // //       // Reset form setelah berhasil
// // // // // //       setFormData({
// // // // // //         wbp_id: "",
// // // // // //         nama: "",
// // // // // //         jenis_kelamin: "",
// // // // // //         nik: "",
// // // // // //         alamat: "",
// // // // // //         hp: "",
// // // // // //         hubungan_keluarga: "",
// // // // // //         tujuan: "",
// // // // // //         pengikut_laki_laki: 0,
// // // // // //         pengikut_perempuan: 0,
// // // // // //         pengikut_anak_anak: 0,
// // // // // //         pengikut_bayi: 0,
// // // // // //         total_pengikut: 0,
// // // // // //         keterangan: "",
// // // // // //         photo_ktp: null,
// // // // // //         photo_pengunjung: null,
// // // // // //       });

      
  
// // // // // //       // Tutup modal atau navigasi
// // // // // //       if (onClose) onClose();
// // // // // //       // Navigasi ke halaman edit dengan kode pengunjung yang baru dibuat

// // // // // //       console.log("Navigating to update page for kode:", newPengunjung);
// // // // // //     if (newPengunjung && newPengunjung.kode) {
// // // // // //       navigate(`/update-pengunjung/${newPengunjung.kode}`);
// // // // // //     } 
// // // // // //     // else {
// // // // // //     //   // Fallback jika tidak ada kode, navigasi ke halaman pengunjung
// // // // // //     //   navigate("/pengunjung");
// // // // // //     // }
// // // // // //     } catch (err) {
// // // // // //       console.error("Error saat menambahkan pengunjung:", err);
// // // // // //     } finally {
// // // // // //       // Set loading state ke false setelah selesai
// // // // // //       setIsSubmitting(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// // // // // //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// // // // // //         {/* Header */}
// // // // // //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// // // // // //           <div className="w-full">
// // // // // //       <Link to="/" className="flex justify-end top-4 left-4 text-black font-bold hover:text-green-500 text-2xl" style={{textDecoration: 'none', color: 'white'}}>
// // // // // //       <FaHome />
// // // // // //       </Link>
// // // // // //       </div>
// // // // // //           <div className="flex items-center space-x-4">
// // // // // //             <FaUser className="w-10 h-10" />
// // // // // //             <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
// // // // // //           </div>
// // // // // //           <p className="mt-2 text-sm opacity-90">
// // // // // //             Isi formulir di bawah ini untuk menambahkan pengunjung baru.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Form */}
// // // // // //         <div className="p-8">
// // // // // //           {error && (
// // // // // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
// // // // // //               {error}
// // // // // //             </div>
// // // // // //           )}
// // // // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //             {/* Pilih Warga Binaan (WBP) */}
// // // // // //              {/* Input Pencarian WBP dengan Dropdown */}
// // // // // //              <div className="relative" ref={dropdownRef}>
// // // // // //                <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                  <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// // // // // //                </label>
// // // // // //                <input
// // // // // //                 type="text"
// // // // // //                 value={searchWbp}
// // // // // //                 onChange={(e) => {
// // // // // //                   setSearchWbp(e.target.value);
// // // // // //                   setIsWbpDropdownOpen(true);
// // // // // //                 }}
// // // // // //                 onFocus={() => setIsWbpDropdownOpen(true)}
// // // // // //                 placeholder="Ketikan nama atau ID WBP..."
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //                 required
// // // // // //               />
              
// // // // // //               {isWbpDropdownOpen && (
// // // // // //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // // // // //                   {filteredWbp.map((wbp) => (
// // // // // //                     <div
// // // // // //                       key={wbp.id}
// // // // // //                       onClick={() => selectWbp(wbp)}
// // // // // //                       className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
// // // // // //                     >
// // // // // //                       <div className="flex-1">
// // // // // //                         <div className="font-medium">{wbp.nama}</div>
// // // // // //                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
// // // // // //                       </div>
// // // // // //                       <FaUser className="ml-2 text-gray-400" />
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* Nama */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaUser className="inline-block mr-2" /> Nama
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="nama"
// // // // // //                 value={formData.nama}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* NIK */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaIdCard className="inline-block mr-2" /> NIK
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="nik"
// // // // // //                 value={formData.nik}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Nomor HP */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaPhone className="inline-block mr-2" /> Nomor HP
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="hp"
// // // // // //                 value={formData.hp}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Alamat */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaHome className="inline-block mr-2" /> Alamat
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="alamat"
// // // // // //                 value={formData.alamat}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Jenis Kelamin */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
// // // // // //               </label>
// // // // // //               <select
// // // // // //                 name="jenis_kelamin"
// // // // // //                 value={formData.jenis_kelamin}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //               >
// // // // // //                 <option value="">Pilih Jenis Kelamin</option>
// // // // // //                 <option value="laki-laki">Laki-laki</option>
// // // // // //                 <option value="perempuan">Perempuan</option>
// // // // // //               </select>
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <User className="inline-block mr-2" /> Tujuan
// // // // // //               </label>
// // // // // //               <select
// // // // // //                 name="tujuan"
// // // // // //                 value={formData.tujuan}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //               >
// // // // // //                 <option value="">Pilih Jenis Tujuan</option>
// // // // // //                 <option value="Berkunjung">Berkunjung</option>
// // // // // //                 <option value="Menitip barang">Menitip barang</option>
// // // // // //               </select>
// // // // // //             </div>

// // // // // //             {/* Upload Foto KTP */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaUpload className="inline-block mr-2" /> Foto KTP
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="file"
// // // // // //                 name="photo_ktp"
// // // // // //                 onChange={handleFileChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Upload Foto Pengunjung */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                 <FaUpload className="inline-block mr-2" /> Foto Pengunjung
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="file"
// // // // // //                 name="photo_pengunjung"
// // // // // //                 onChange={handleFileChange}
// // // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Tombol Submit dengan Loading Indicator */}
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               disabled={isSubmitting} // Nonaktifkan tombol saat loading
// // // // // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
// // // // // //             >
// // // // // //               {isSubmitting ? (
// // // // // //                 <>
// // // // // //                   <FaSpinner className="animate-spin inline-block mr-2" />
// // // // // //                   Mengirim...
// // // // // //                 </>
// // // // // //               ) : (
// // // // // //                 <>
// // // // // //                   <FaQrcode className="inline-block mr-2" />
// // // // // //                   Tambah Pengunjung
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AddPengunjungForm;




// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { toast } from "react-hot-toast";
// // // // // import useDataStore from "../../store/useDataStore";
// // // // // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon } from "react-icons/fa";
// // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // import { User } from "lucide-react";
// // // // // import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// // // // // const AddPengunjungForm = ({ onClose }) => {
// // // // //   const { createPengunjung, fetchWbpList, wbpList, updatePengunjung } = useDataStore();
// // // // //   const [formData, setFormData] = useState({
// // // // //     wbp_id: "",
// // // // //     nama: "",
// // // // //     jenis_kelamin: "",
// // // // //     nik: "",
// // // // //     alamat: "",
// // // // //     hp: "",
// // // // //     hubungan_keluarga: "",
// // // // //     tujuan: "",
// // // // //     pengikut_laki_laki: 0,
// // // // //     pengikut_perempuan: 0,
// // // // //     pengikut_anak_anak: 0,
// // // // //     pengikut_bayi: 0,
// // // // //     total_pengikut: 0,
// // // // //     keterangan: "",
// // // // //     photo_ktp: null,
// // // // //     photo_pengunjung: null,
// // // // //   });
// // // // //   const [error, setError] = useState("");
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [searchWbp, setSearchWbp] = useState("");
// // // // //   const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// // // // //   const dropdownRef = useRef(null);

// // // // //   // State baru untuk menampung data pengunjung yang baru dibuat
// // // // //   const [newPengunjung, setNewPengunjung] = useState(null);
// // // // //   const [showEditForm, setShowEditForm] = useState(false);
// // // // // ;

// // // // //   // Fetch data WBP saat komponen dimuat
// // // // //   useEffect(() => {
// // // // //     fetchWbpList();
// // // // //   }, [fetchWbpList]);

// // // // //   // Fungsi untuk menghitung total pengikut
// // // // // const calculateTotalPengikut = (data) => {
// // // // //   const total = 
// // // // //     parseInt(data.pengikut_laki_laki || 0) +
// // // // //     parseInt(data.pengikut_perempuan || 0) +
// // // // //     parseInt(data.pengikut_anak_anak || 0) +
// // // // //     parseInt(data.pengikut_bayi || 0);
// // // // //   return total;
// // // // // };


// // // // //   // const handleInputChange = (e) => {
// // // // //   //   const { name, value } = e.target;
// // // // //   //   setFormData({
// // // // //   //     ...formData,
// // // // //   //     [name]: value,
// // // // //   //   });
// // // // //   // };

// // // // //   const handleInputChange = (e) => {
// // // // //   const { name, value } = e.target;
// // // // //   const updatedFormData = {
// // // // //     ...formData,
// // // // //     [name]: value,
// // // // //   };
  
// // // // //   // Jika field pengikut diubah, hitung total otomatis
// // // // //   if (name.includes('pengikut_') && name !== 'total_pengikut') {
// // // // //     updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// // // // //   }
  
// // // // //   setFormData(updatedFormData);
// // // // // };

// // // // //   const filteredWbp = wbpList.filter(
// // // // //     (wbp) =>
// // // // //       wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
// // // // //       wbp.id.toString().includes(searchWbp)
// // // // //   );

// // // // //   const selectWbp = (wbp) => {
// // // // //     setFormData({ ...formData, wbp_id: wbp.id });
// // // // //     setSearchWbp(wbp.nama);
// // // // //     setIsWbpDropdownOpen(false);
// // // // //   };

// // // // //   const handleFileChange = (e) => {
// // // // //     const { name, files } = e.target;
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [name]: files[0],
// // // // //     });
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// // // // //       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// // // // //       return;
// // // // //     }

// // // // //     setError("");
// // // // //     setIsSubmitting(true);

// // // // //     const formDataToSend = new FormData();
// // // // //     for (const key in formData) {
// // // // //       if (formData[key] !== null) {
// // // // //         formDataToSend.append(key, formData[key]);
// // // // //       }
// // // // //     }

// // // // //     try {
// // // // //       // Simpan response dari createPengunjung ke state
// // // // //       const createdPengunjung = await createPengunjung(formDataToSend, setError);
// // // // //       toast.success("Pengunjung berhasil ditambahkan!");

// // // // //       // Simpan data pengunjung baru ke state
// // // // //       setNewPengunjung(createdPengunjung);
      
// // // // //       // Tampilkan form edit
// // // // //       setShowEditForm(true);

// // // // //       // Reset form
// // // // //       setFormData({
// // // // //         wbp_id: "",
// // // // //         nama: "",
// // // // //         jenis_kelamin: "",
// // // // //         nik: "",
// // // // //         alamat: "",
// // // // //         hp: "",
// // // // //         hubungan_keluarga: "",
// // // // //         tujuan: "",
// // // // //         pengikut_laki_laki: 0,
// // // // //         pengikut_perempuan: 0,
// // // // //         pengikut_anak_anak: 0,
// // // // //         pengikut_bayi: 0,
// // // // //         total_pengikut: 0,
// // // // //         keterangan: "",
// // // // //         photo_ktp: null,
// // // // //         photo_pengunjung: null,
// // // // //       });

// // // // //     } catch (err) {
// // // // //       console.error("Error saat menambahkan pengunjung:", err);
// // // // //       toast.error("Gagal menambahkan pengunjung. Silakan coba lagi.");
// // // // //     } finally {
// // // // //       setIsSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   // Fungsi untuk kembali ke form tambah
// // // // //   const handleBackToAddForm = () => {
// // // // //     setShowEditForm(false);
// // // // //     setNewPengunjung(null);
// // // // //     setSearchWbp("");
// // // // //   };

  

// // // // //   // Jika showEditForm true dan newPengunjung ada, tampilkan EditPengunjungForm
// // // // //   if (showEditForm && newPengunjung) {
// // // // //     return (
// // // // //       <EditPengunjungFormWrapper 
// // // // //         newPengunjung={newPengunjung}
// // // // //         onBack={handleBackToAddForm}
// // // // //         onClose={onClose}
// // // // //       />
// // // // //     );
// // // // //   }

// // // // //   // Tampilkan form tambah pengunjung
// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// // // // //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// // // // //         {/* Header */}
// // // // //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// // // // //           <div className="w-full">
// // // // //             <Link to="/" className="flex justify-end text-white font-bold hover:text-green-300 text-2xl" style={{textDecoration: 'none'}}>
// // // // //               <FaHomeIcon />
// // // // //             </Link>
// // // // //           </div>
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <FaUser className="w-10 h-10" />
// // // // //             <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
// // // // //           </div>
// // // // //           <p className="mt-2 text-sm opacity-90">
// // // // //             Isi formulir di bawah ini untuk menambahkan pengunjung baru.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Form */}
// // // // //         <div className="p-8">
// // // // //           {error && (
// // // // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
// // // // //               {error}
// // // // //             </div>
// // // // //           )}
// // // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // // //             {/* Pilih WBP */}
// // // // //             <div className="relative" ref={dropdownRef}>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 value={searchWbp}
// // // // //                 onChange={(e) => {
// // // // //                   setSearchWbp(e.target.value);
// // // // //                   setIsWbpDropdownOpen(true);
// // // // //                 }}
// // // // //                 onFocus={() => setIsWbpDropdownOpen(true)}
// // // // //                 placeholder="Ketikan nama atau ID WBP..."
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //                 required
// // // // //               />
              
// // // // //               {isWbpDropdownOpen && filteredWbp.length > 0 && (
// // // // //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // // // //                   {filteredWbp.map((wbp) => (
// // // // //                     <div
// // // // //                       key={wbp.id}
// // // // //                       onClick={() => selectWbp(wbp)}
// // // // //                       className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
// // // // //                     >
// // // // //                       <div className="flex-1">
// // // // //                         <div className="font-medium">{wbp.nama}</div>
// // // // //                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
// // // // //                       </div>
// // // // //                       <FaUser className="ml-2 text-gray-400" />
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>

// // // // //             {/* Nama */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaUser className="inline-block mr-2" /> Nama
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="nama"
// // // // //                 value={formData.nama}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* NIK */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaIdCard className="inline-block mr-2" /> NIK
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="nik"
// // // // //                 value={formData.nik}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Nomor HP */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaPhone className="inline-block mr-2" /> Nomor HP
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="hp"
// // // // //                 value={formData.hp}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Alamat */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaHome className="inline-block mr-2" /> Alamat
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="alamat"
// // // // //                 value={formData.alamat}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Jenis Kelamin */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
// // // // //               </label>
// // // // //               <select
// // // // //                 name="jenis_kelamin"
// // // // //                 value={formData.jenis_kelamin}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //               >
// // // // //                 <option value="">Pilih Jenis Kelamin</option>
// // // // //                 <option value="laki-laki">Laki-laki</option>
// // // // //                 <option value="perempuan">Perempuan</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             {/* Tujuan */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <User className="inline-block mr-2" /> Tujuan
// // // // //               </label>
// // // // //               <select
// // // // //                 name="tujuan"
// // // // //                 value={formData.tujuan}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //               >
// // // // //                 <option value="">Pilih Jenis Tujuan</option>
// // // // //                 <option value="Berkunjung">Berkunjung</option>
// // // // //                 <option value="Menitip barang">Menitip barang</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             {/* Upload Foto KTP */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaUpload className="inline-block mr-2" /> Foto KTP
// // // // //               </label>
// // // // //               <input
// // // // //                 type="file"
// // // // //                 name="photo_ktp"
// // // // //                 onChange={handleFileChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //                 accept="image/*"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Upload Foto Pengunjung */}
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                 <FaUpload className="inline-block mr-2" /> Foto Pengunjung
// // // // //               </label>
// // // // //               <input
// // // // //                 type="file"
// // // // //                 name="photo_pengunjung"
// // // // //                 onChange={handleFileChange}
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // //                 accept="image/*"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Tombol Submit */}
// // // // //             <button
// // // // //               type="submit"
// // // // //               disabled={isSubmitting}
// // // // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
// // // // //             >
// // // // //               {isSubmitting ? (
// // // // //                 <>
// // // // //                   <FaSpinner className="animate-spin inline-block mr-2" />
// // // // //                   Mengirim...
// // // // //                 </>
// // // // //               ) : (
// // // // //                 <>
// // // // //                   <FaQrcode className="inline-block mr-2" />
// // // // //                   Tambah Pengunjung
// // // // //                 </>
// // // // //               )}
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Komponen wrapper untuk EditPengunjungForm
// // // // // const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose }) => {
// // // // //   const { updatePengunjung } = useDataStore();
// // // // //   const [formData, setFormData] = useState({
// // // // //     nama: newPengunjung.nama || "",
// // // // //     jenis_kelamin: newPengunjung.jenis_kelamin || "",
// // // // //     nik: newPengunjung.nik || "",
// // // // //     alamat: newPengunjung.alamat || "",
// // // // //     hp: newPengunjung.hp || "",
// // // // //     hubungan_keluarga: newPengunjung.hubungan_keluarga || "",
// // // // //     tujuan: newPengunjung.tujuan || "",
// // // // //     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
// // // // //     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
// // // // //     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
// // // // //     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
// // // // //     total_pengikut: newPengunjung.total_pengikut || 0,
// // // // //   });
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState("");
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // // //   const navigate = useNavigate();

// // // // //   // Di EditPengunjungFormWrapper, tambahkan useEffect
// // // // // useEffect(() => {
// // // // //   // Hitung total pengikut saat pertama kali komponen dimuat
// // // // //   const initialTotal = calculateTotalPengikut(formData);
// // // // //   setFormData(prev => ({
// // // // //     ...prev,
// // // // //     total_pengikut: initialTotal
// // // // //   }));
// // // // // }, []);

// // // // //   // Fungsi menghitung total pengikut
// // // // // const calculateTotalPengikut = (data) => {
// // // // //   const total = 
// // // // //     parseInt(data.pengikut_laki_laki || 0) +
// // // // //     parseInt(data.pengikut_perempuan || 0) +
// // // // //     parseInt(data.pengikut_anak_anak || 0) +
// // // // //     parseInt(data.pengikut_bayi || 0);
// // // // //   return total;
// // // // // };

// // // // // const handleInputChange = (e) => {
// // // // //   const { name, value } = e.target;
// // // // //   const updatedFormData = {
// // // // //     ...formData,
// // // // //     [name]: value,
// // // // //   };
  
// // // // //   // Jika field pengikut diubah, hitung total otomatis
// // // // //   if (name.includes('pengikut_') && name !== 'total_pengikut') {
// // // // //     updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// // // // //   }
  
// // // // //   setFormData(updatedFormData);
// // // // // };

// // // // //   // const handleInputChange = (e) => {
// // // // //   //   const { name, value } = e.target;
// // // // //   //   setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //   // };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     setError("");

// // // // //     try {
// // // // //       await updatePengunjung(newPengunjung.kode, formData);
// // // // //       toast.success("Data pengunjung berhasil diperbarui!");
      
// // // // //       // Tunggu sebentar sebelum menutup atau navigasi
// // // // //       setTimeout(() => {
// // // // //         if (onClose) onClose();
// // // // //       }, 1000);
      
// // // // //     } catch (error) {
// // // // //       console.error("Error: ", error);
// // // // //       setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
// // // // //       toast.error("Gagal memperbarui data pengunjung.");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const finish = () => {
// // // // //     if(formData.tujuan === "Menitip barang") {
// // // // //       navigate(`/`);
// // // // //     } else {
// // // // //       navigate(`/pengunjung/${newPengunjung.kode}`);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
// // // // //       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
// // // // //         <div className="flex items-center justify-between mb-8">
// // // // //           <h1 className="text-3xl font-bold text-gray-800">
// // // // //             ✏️ Edit Data Pengunjung Baru
// // // // //           </h1>
// // // // //           <div className="space-x-2">
// // // // //             <button
// // // // //               onClick={onBack}
// // // // //               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
// // // // //             >
// // // // //               ← Tambah Lagi
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={finish}
// // // // //               className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
// // // // //             >
// // // // //               Selesai
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// // // // //           <p className="text-green-700 font-medium">
// // // // //             ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
// // // // //           </p>
// // // // //           <div className="mt-2 text-sm text-green-600">
// // // // //             <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// // // // //             <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {error && (
// // // // //           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
// // // // //             {error}
// // // // //           </div>
// // // // //         )}

// // // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //           {/* Kolom Kiri */}
// // // // //           <div className="space-y-4">
// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Nama</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="nama"
// // // // //                 value={formData.nama}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
// // // // //               <select
// // // // //                 name="jenis_kelamin"
// // // // //                 value={formData.jenis_kelamin}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               >
// // // // //                 <option value="">Pilih Jenis Kelamin</option>
// // // // //                 <option value="laki-laki">Laki-laki</option>
// // // // //                 <option value="perempuan">Perempuan</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">NIK</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="nik"
// // // // //                 value={formData.nik}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Alamat</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="alamat"
// // // // //                 value={formData.alamat}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="hp"
// // // // //                 value={formData.hp}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="hubungan_keluarga"
// // // // //                 value={formData.hubungan_keluarga}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Tujuan</label>
// // // // //               <select
// // // // //                 name="tujuan"
// // // // //                 value={formData.tujuan}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //               >
// // // // //                 <option value="">Pilih Jenis Tujuan</option>
// // // // //                 <option value="Berkunjung">Berkunjung</option>
// // // // //                 <option value="Menitip barang">Menitip barang</option>
// // // // //               </select>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Kolom Kanan */}
// // // // //           {/* Field-field pengikut dalam grid */}
// // // // // <div className="space-y-4">
// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="pengikut_laki_laki"
// // // // //                 value={formData.pengikut_laki_laki}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //                 min="0"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="pengikut_perempuan"
// // // // //                 value={formData.pengikut_perempuan}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //                 min="0"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="pengikut_anak_anak"
// // // // //                 value={formData.pengikut_anak_anak}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //                 min="0"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="pengikut_bayi"
// // // // //                 value={formData.pengikut_bayi}
// // // // //                 onChange={handleInputChange}
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //                 min="0"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-sm font-medium text-gray-700">Total Pengikut</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="total_pengikut"
// // // // //                 value={formData.total_pengikut}
// // // // //                 onChange={handleInputChange}
// // // // //                 disabled
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // // //                 min="0"
// // // // //               />
// // // // //             </div>

// // // // //             <button
// // // // //               type="submit"
// // // // //               disabled={loading}
// // // // //               className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 mt-4"
// // // // //             >
// // // // //               {loading ? (
// // // // //                 <span className="flex items-center justify-center">
// // // // //                   <FaSpinner className="animate-spin mr-2" />
// // // // //                   Memproses...
// // // // //                 </span>
// // // // //               ) : (
// // // // //                 "💾 Simpan Perubahan"
// // // // //               )}
// // // // //             </button>
// // // // //           </div>

// // // // // {/* Total Pengikut (Read-only) */}
// // // // // <div className="bg-green-50 p-4 rounded-lg border border-green-200">
// // // // //   <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
// // // // //   <div className="text-2xl font-bold text-green-600 text-center">
// // // // //     {formData.total_pengikut} Orang
// // // // //   </div>
// // // // //   <div className="text-sm text-gray-600 text-center mt-1">
// // // // //     (Laki-laki: {formData.pengikut_laki_laki} | 
// // // // //      Perempuan: {formData.pengikut_perempuan} | 
// // // // //      Anak: {formData.pengikut_anak_anak} | 
// // // // //      Bayi: {formData.pengikut_bayi})
// // // // //   </div>
// // // // // </div>

// // // // // {/* Hapus input total_pengikut yang lama */}
// // // // // {/* 
// // // // //   <div className="space-y-1">
// // // // //     <label className="block text-sm font-medium text-gray-700">Total Pengikut</label>
// // // // //     <input
// // // // //       type="number"
// // // // //       name="total_pengikut"
// // // // //       value={formData.total_pengikut}
// // // // //       onChange={handleInputChange}
// // // // //       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
// // // // //       min="0"
// // // // //     />
// // // // //   </div>
// // // // // */}
// // // // //         </form>
// // // // //               <button
// // // // //                       onClick={() => setIsModalOpen(true)}
// // // // //                        className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
// // // // //                     >
// // // // //                       + Tambah Barang Titipan
// // // // //                     </button>
              
// // // // //                     {/* Modal CreateBarangTitipan */}
// // // // //                     <CreateBarangTitipanModal
// // // // //                       isOpen={isModalOpen}
// // // // //                       onClose={() => setIsModalOpen(false)}
// // // // //                       pengunjungs={newPengunjung} // Kirim data pengunjung ke modal
// // // // //                     />
// // // // //         <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
// // // // //           <p className="text-blue-700 text-sm">
// // // // //             <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AddPengunjungForm;

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { toast } from "react-hot-toast";
// // // // import useDataStore from "../../store/useDataStore";
// // // // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon } from "react-icons/fa";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { User } from "lucide-react";
// // // // import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// // // // const AddPengunjungForm = ({ onClose }) => {
// // // //   const { createPengunjung, createDataPengunjung, fetchWbpList, wbpList, updatePengunjung, fetchPengunjungData, pengunjungData } = useDataStore();
// // // //   const [formData, setFormData] = useState({
// // // //     wbp_id: "",
// // // //     nama: "",
// // // //     jenis_kelamin: "",
// // // //     nik: "",
// // // //     alamat: "",
// // // //     hp: "",
// // // //     hubungan_keluarga: "",
// // // //     tujuan: "",
// // // //     pengikut_laki_laki: 0,
// // // //     pengikut_perempuan: 0,
// // // //     pengikut_anak_anak: 0,
// // // //     pengikut_bayi: 0,
// // // //     total_pengikut: 0,
// // // //     keterangan: "",
// // // //     photo_ktp: null,
// // // //     photo_pengunjung: null,
// // // //   });
// // // //   const [error, setError] = useState("");
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [searchWbp, setSearchWbp] = useState("");
// // // //   const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// // // //   const dropdownRef = useRef(null);

// // // //   // State baru untuk menampung data pengunjung yang baru dibuat
// // // //   const [newPengunjung, setNewPengunjung] = useState(null);
// // // //   const [showEditForm, setShowEditForm] = useState(false);

// // // //   // Fetch data WBP saat komponen dimuat
// // // //   useEffect(() => {
// // // //     fetchWbpList();
// // // //     fetchPengunjungData();
// // // //   }, [fetchWbpList, fetchPengunjungData]);

// // // //   console.log("Pengunjung data", pengunjungData)

// // // //   // Fungsi untuk menghitung total pengikut
// // // //   const calculateTotalPengikut = (data) => {
// // // //     const total = 
// // // //       parseInt(data.pengikut_laki_laki || 0) +
// // // //       parseInt(data.pengikut_perempuan || 0) +
// // // //       parseInt(data.pengikut_anak_anak || 0) +
// // // //       parseInt(data.pengikut_bayi || 0);
// // // //     return total;
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     const updatedFormData = {
// // // //       ...formData,
// // // //       [name]: value,
// // // //     };
    
// // // //     // Jika field pengikut diubah, hitung total otomatis
// // // //     if (name.includes('pengikut_') && name !== 'total_pengikut') {
// // // //       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// // // //     }
    
// // // //     setFormData(updatedFormData);
// // // //   };

// // // //   const filteredWbp = wbpList.filter(
// // // //     (wbp) =>
// // // //       wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
// // // //       wbp.id.toString().includes(searchWbp)
// // // //   );

// // // //   const selectWbp = (wbp) => {
// // // //     setFormData({ ...formData, wbp_id: wbp.id });
// // // //     setSearchWbp(wbp.nama);
// // // //     setIsWbpDropdownOpen(false);
// // // //   };

// // // //   const handleFileChange = (e) => {
// // // //     const { name, files } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: files[0],
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id) {
// // // //       setError("Pastikan nama, NIK, nomor HP, dan WBP diisi.");
// // // //       return;
// // // //     }

// // // //     setError("");
// // // //     setIsSubmitting(true);

// // // //     const formDataToSend = new FormData();
// // // //     for (const key in formData) {
// // // //       if (formData[key] !== null) {
// // // //         formDataToSend.append(key, formData[key]);
// // // //       }
// // // //     }

// // // //     try {
// // // //       // Simpan response dari createPengunjung ke state
// // // //       const createdPengunjung = await createPengunjung(formDataToSend, setError);
// // // //       toast.success("Pengunjung berhasil ditambahkan!");

// // // //       // Simpan data pengunjung baru ke state
// // // //       setNewPengunjung(createdPengunjung);
      
// // // //       // Tampilkan form edit
// // // //       setShowEditForm(true);

// // // //       // Reset form
// // // //       setFormData({
// // // //         wbp_id: "",
// // // //         nama: "",
// // // //         jenis_kelamin: "",
// // // //         nik: "",
// // // //         alamat: "",
// // // //         hp: "",
// // // //         hubungan_keluarga: "",
// // // //         tujuan: "",
// // // //         pengikut_laki_laki: 0,
// // // //         pengikut_perempuan: 0,
// // // //         pengikut_anak_anak: 0,
// // // //         pengikut_bayi: 0,
// // // //         total_pengikut: 0,
// // // //         keterangan: "",
// // // //         photo_ktp: null,
// // // //         photo_pengunjung: null,
// // // //       });

// // // //     } catch (err) {
// // // //       console.error("Error saat menambahkan pengunjung:", err);
// // // //       toast.error("Gagal menambahkan pengunjung. Silakan coba lagi.");
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   // Fungsi untuk kembali ke form tambah
// // // //   const handleBackToAddForm = () => {
// // // //     setShowEditForm(false);
// // // //     setNewPengunjung(null);
// // // //     setSearchWbp("");
// // // //   };

// // // //   // Jika showEditForm true dan newPengunjung ada, tampilkan EditPengunjungForm
// // // //   if (showEditForm && newPengunjung) {
// // // //     return (
// // // //       <EditPengunjungFormWrapper 
// // // //         newPengunjung={newPengunjung}
// // // //         onBack={handleBackToAddForm}
// // // //         onClose={onClose}
// // // //       />
// // // //     );
// // // //   }

// // // //   // Tampilkan form tambah pengunjung
// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// // // //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// // // //         {/* Header */}
// // // //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// // // //           <div className="w-full">
// // // //             <Link to="/" className="flex justify-end text-white font-bold hover:text-green-300 text-2xl" style={{textDecoration: 'none'}}>
// // // //               <FaHomeIcon />
// // // //             </Link>
// // // //           </div>
// // // //           <div className="flex items-center space-x-4">
// // // //             <FaUser className="w-10 h-10" />
// // // //             <h2 className="text-3xl font-bold">Tambah Pengunjung Baru</h2>
// // // //           </div>
// // // //           <p className="mt-2 text-sm opacity-90">
// // // //             Isi formulir di bawah ini untuk menambahkan pengunjung baru.
// // // //           </p>
// // // //         </div>

// // // //         {/* Form */}
// // // //         <div className="p-8">
// // // //           {error && (
// // // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
// // // //               {error}
// // // //             </div>
// // // //           )}
// // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // //             {/* Pilih WBP */}
// // // //             <div className="relative" ref={dropdownRef}>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={searchWbp}
// // // //                 onChange={(e) => {
// // // //                   setSearchWbp(e.target.value);
// // // //                   setIsWbpDropdownOpen(true);
// // // //                 }}
// // // //                 onFocus={() => setIsWbpDropdownOpen(true)}
// // // //                 placeholder="Ketikan nama atau ID WBP..."
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //                 required
// // // //               />
              
// // // //               {isWbpDropdownOpen && filteredWbp.length > 0 && (
// // // //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // // //                   {filteredWbp.map((wbp) => (
// // // //                     <div
// // // //                       key={wbp.id}
// // // //                       onClick={() => selectWbp(wbp)}
// // // //                       className="p-3 hover:bg-blue-50 cursor-pointer flex items-center"
// // // //                     >
// // // //                       <div className="flex-1">
// // // //                         <div className="font-medium">{wbp.nama}</div>
// // // //                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
// // // //                       </div>
// // // //                       <FaUser className="ml-2 text-gray-400" />
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>

// // // //             {/* Nama */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaUser className="inline-block mr-2" /> Nama
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="nama"
// // // //                 value={formData.nama}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* NIK */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaIdCard className="inline-block mr-2" /> NIK
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="nik"
// // // //                 value={formData.nik}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Nomor HP */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaPhone className="inline-block mr-2" /> Nomor HP
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="hp"
// // // //                 value={formData.hp}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Alamat */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaHome className="inline-block mr-2" /> Alamat
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="alamat"
// // // //                 value={formData.alamat}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //               />
// // // //             </div>

// // // //             {/* Jenis Kelamin */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
// // // //               </label>
// // // //               <select
// // // //                 name="jenis_kelamin"
// // // //                 value={formData.jenis_kelamin}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //               >
// // // //                 <option value="">Pilih Jenis Kelamin</option>
// // // //                 <option value="laki-laki">Laki-laki</option>
// // // //                 <option value="perempuan">Perempuan</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Tujuan */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <User className="inline-block mr-2" /> Tujuan
// // // //               </label>
// // // //               <select
// // // //                 name="tujuan"
// // // //                 value={formData.tujuan}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //               >
// // // //                 <option value="">Pilih Jenis Tujuan</option>
// // // //                 <option value="Berkunjung">Berkunjung</option>
// // // //                 <option value="Menitip barang">Menitip barang</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Upload Foto KTP */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaUpload className="inline-block mr-2" /> Foto KTP
// // // //               </label>
// // // //               <input
// // // //                 type="file"
// // // //                 name="photo_ktp"
// // // //                 onChange={handleFileChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //                 accept="image/*"
// // // //               />
// // // //             </div>

// // // //             {/* Upload Foto Pengunjung */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 <FaUpload className="inline-block mr-2" /> Foto Pengunjung
// // // //               </label>
// // // //               <input
// // // //                 type="file"
// // // //                 name="photo_pengunjung"
// // // //                 onChange={handleFileChange}
// // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //                 accept="image/*"
// // // //               />
// // // //             </div>

// // // //             {/* Tombol Submit */}
// // // //             <button
// // // //               type="submit"
// // // //               disabled={isSubmitting}
// // // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
// // // //             >
// // // //               {isSubmitting ? (
// // // //                 <>
// // // //                   <FaSpinner className="animate-spin inline-block mr-2" />
// // // //                   Mengirim...
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <FaQrcode className="inline-block mr-2" />
// // // //                   Tambah Pengunjung
// // // //                 </>
// // // //               )}
// // // //             </button>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Komponen wrapper untuk EditPengunjungForm
// // // // const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose }) => {
// // // //   const { updatePengunjung } = useDataStore();
// // // //   const [formData, setFormData] = useState({
// // // //     nama: newPengunjung.nama || "",
// // // //     jenis_kelamin: newPengunjung.jenis_kelamin || "",
// // // //     nik: newPengunjung.nik || "",
// // // //     alamat: newPengunjung.alamat || "",
// // // //     hp: newPengunjung.hp || "",
// // // //     hubungan_keluarga: newPengunjung.hubungan_keluarga || "",
// // // //     tujuan: newPengunjung.tujuan || "",
// // // //     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
// // // //     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
// // // //     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
// // // //     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
// // // //     total_pengikut: newPengunjung.total_pengikut || 0,
// // // //   });
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
  
// // // //   // State untuk checkbox ambil antrian
// // // //   const [ambilAntrian, setAmbilAntrian] = useState(false);
// // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // //   const navigate = useNavigate();

// // // //   console.log("ambilAntrian:", ambilAntrian);

// // // //   // Cek role user saat komponen dimuat
// // // //   useEffect(() => {
// // // //     const authUser = JSON.parse(localStorage.getItem('authUser'));
// // // //     if (authUser && authUser.user && authUser.user.role === 'admin') {
// // // //       setIsAdmin(true);
// // // //     }
    
// // // //     // Hitung total pengikut saat pertama kali komponen dimuat
// // // //     const initialTotal = calculateTotalPengikut(formData);
// // // //     setFormData(prev => ({
// // // //       ...prev,
// // // //       total_pengikut: initialTotal
// // // //     }));
// // // //   }, []);

// // // //   // Fungsi menghitung total pengikut
// // // //   const calculateTotalPengikut = (data) => {
// // // //     const total = 
// // // //       parseInt(data.pengikut_laki_laki || 0) +
// // // //       parseInt(data.pengikut_perempuan || 0) +
// // // //       parseInt(data.pengikut_anak_anak || 0) +
// // // //       parseInt(data.pengikut_bayi || 0);
// // // //     return total;
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     const updatedFormData = {
// // // //       ...formData,
// // // //       [name]: value,
// // // //     };
    
// // // //     // Jika field pengikut diubah, hitung total otomatis
// // // //     if (name.includes('pengikut_') && name !== 'total_pengikut') {
// // // //       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// // // //     }
    
// // // //     setFormData(updatedFormData);
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setError("");

// // // //     try {
// // // //       await updatePengunjung(newPengunjung.kode, formData);
// // // //       toast.success("Data pengunjung berhasil diperbarui!");
      
// // // //       // Tunggu sebentar sebelum menutup atau navigasi
// // // //       setTimeout(() => {
// // // //         if (onClose) onClose();
// // // //       }, 1000);
      
// // // //     } catch (error) {
// // // //       console.error("Error: ", error);
// // // //       setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
// // // //       toast.error("Gagal memperbarui data pengunjung.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const finish = () => {
// // // //     // Validasi berdasarkan checkbox dan tujuan
// // // //     if (!ambilAntrian && formData.tujuan === "Menitip barang") {
// // // //       // Jika checkbox tercentang dan tujuan menitip barang, arahkan ke label
// // // //       navigate(`/label/${newPengunjung.kode}`);
// // // //     } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
// // // //       // Selain itu, arahkan ke root utama
// // // //       navigate(`/pengunjung/${newPengunjung.kode}`);
// // // //     }else{
// // // //       navigate('/');
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
// // // //       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
// // // //         <div className="flex items-center justify-between mb-8">
// // // //           <h1 className="text-3xl font-bold text-gray-800">
// // // //             ✏️ Edit Data Pengunjung Baru
// // // //           </h1>
// // // //           <div className="space-x-2">
// // // //             <button
// // // //               onClick={onBack}
// // // //               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
// // // //             >
// // // //               ← Tambah Lagi
// // // //             </button>
// // // //             <button
// // // //               onClick={finish}
// // // //               className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
// // // //             >
// // // //               Selesai
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Checkbox Ambil Antrian - hanya tampil untuk admin */}
// // // //         {isAdmin && (
// // // //           <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded animate-pulse">
// // // //   <div className="flex justify-between items-center">
// // // //     <label htmlFor="ambilAntrian" className="ml-2 text-xl font-bold text-yellow-700">
// // // //       Ambil Antrian QR Code di Loket
// // // //     </label>
// // // //     <input
// // // //       type="checkbox"
// // // //       id="ambilAntrian"
// // // //       checked={ambilAntrian}
// // // //       onChange={(e) => setAmbilAntrian(e.target.checked)}
// // // //       className="w-8 h-8 text-black font-bold border-4 border-gray-300 rounded focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // // //     /> 
// // // //   </div>
// // // //   <div className="mt-2 text-sm text-yellow-600">
// // // //     <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// // // //     <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// // // //   </div>
// // // // </div>
// // // //         )}

// // // //         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// // // //           <p className="text-green-700 font-medium">
// // // //             ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
// // // //           </p>
// // // //           <div className="mt-2 text-sm text-green-600">
// // // //             <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// // // //             <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// // // //           </div>
// // // //         </div>

// // // //         {error && (
// // // //           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
// // // //             {error}
// // // //           </div>
// // // //         )}

// // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {/* Kolom Kiri */}
// // // //           <div className="space-y-4">
// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Nama</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="nama"
// // // //                 value={formData.nama}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
// // // //               <select
// // // //                 name="jenis_kelamin"
// // // //                 value={formData.jenis_kelamin}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Pilih Jenis Kelamin</option>
// // // //                 <option value="laki-laki">Laki-laki</option>
// // // //                 <option value="perempuan">Perempuan</option>
// // // //               </select>
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">NIK</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="nik"
// // // //                 value={formData.nik}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Alamat</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="alamat"
// // // //                 value={formData.alamat}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="hp"
// // // //                 value={formData.hp}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="hubungan_keluarga"
// // // //                 value={formData.hubungan_keluarga}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Tujuan</label>
// // // //               <select
// // // //                 name="tujuan"
// // // //                 value={formData.tujuan}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Pilih Jenis Tujuan</option>
// // // //                 <option value="Berkunjung">Berkunjung</option>
// // // //                 <option value="Menitip barang">Menitip barang</option>
// // // //               </select>
// // // //             </div>
// // // //           </div>

// // // //           {/* Kolom Kanan - Field Pengikut */}
// // // //           <div className="space-y-4">
// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
// // // //               <input
// // // //                 type="number"
// // // //                 name="pengikut_laki_laki"
// // // //                 value={formData.pengikut_laki_laki}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //                 min="0"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
// // // //               <input
// // // //                 type="number"
// // // //                 name="pengikut_perempuan"
// // // //                 value={formData.pengikut_perempuan}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //                 min="0"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
// // // //               <input
// // // //                 type="number"
// // // //                 name="pengikut_anak_anak"
// // // //                 value={formData.pengikut_anak_anak}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //                 min="0"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
// // // //               <input
// // // //                 type="number"
// // // //                 name="pengikut_bayi"
// // // //                 value={formData.pengikut_bayi}
// // // //                 onChange={handleInputChange}
// // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //                 min="0"
// // // //               />
// // // //             </div>

// // // //             {/* Total Pengikut (Read-only) */}
// // // //             <div className="bg-green-50 p-4 rounded-lg border border-green-200">
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
// // // //               <div className="text-2xl font-bold text-green-600 text-center">
// // // //                 {formData.total_pengikut} Orang
// // // //               </div>
// // // //               <div className="text-sm text-gray-600 text-center mt-1">
// // // //                 (Laki-laki: {formData.pengikut_laki_laki} | 
// // // //                 Perempuan: {formData.pengikut_perempuan} | 
// // // //                 Anak: {formData.pengikut_anak_anak} | 
// // // //                 Bayi: {formData.pengikut_bayi})
// // // //               </div>
// // // //             </div>

// // // //             <button
// // // //               type="submit"
// // // //               disabled={loading}
// // // //               className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 mt-4"
// // // //             >
// // // //               {loading ? (
// // // //                 <span className="flex items-center justify-center">
// // // //                   <FaSpinner className="animate-spin mr-2" />
// // // //                   Memproses...
// // // //                 </span>
// // // //               ) : (
// // // //                 "💾 Simpan Perubahan"
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </form>

// // // //         <button
// // // //           onClick={() => setIsModalOpen(true)}
// // // //           className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
// // // //         >
// // // //           + Tambah Barang Titipan
// // // //         </button>

// // // //         {/* Modal CreateBarangTitipan */}
// // // //         <CreateBarangTitipanModal
// // // //           isOpen={isModalOpen}
// // // //           onClose={() => setIsModalOpen(false)}
// // // //           pengunjungs={newPengunjung}
// // // //         />

// // // //         <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
// // // //           <p className="text-blue-700 text-sm">
// // // //             <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddPengunjungForm;


// // // import React, { useState, useEffect, useRef } from "react";
// // // import { toast } from "react-hot-toast";
// // // import useDataStore from "../../store/useDataStore";
// // // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon, FaTimes, FaEye, FaCamera, FaBarcode, FaSearch } from "react-icons/fa";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { User } from "lucide-react";
// // // import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// // // // Komponen BarcodeScanner untuk AddPengunjungForm
// // // const BarcodeScanner = ({ onScan, onClose }) => {
// // //   useEffect(() => {
// // //     // Dynamically import html5-qrcode
// // //     import('html5-qrcode').then(({ Html5QrcodeScanner }) => {
// // //       const scanner = new Html5QrcodeScanner('qr-reader', {
// // //         qrbox: {
// // //           width: 250,
// // //           height: 250,
// // //         },
// // //         fps: 10,
// // //         rememberLastUsedCamera: true,
// // //         supportedScanTypes: null,
// // //       });

// // //       let isScanning = true;

// // //       const onScanSuccess = (decodedText) => {
// // //         if (isScanning) {
// // //           onScan(decodedText);
// // //           scanner.clear().then(() => {
// // //             console.log("Scanner cleared successfully");
// // //           }).catch((err) => {
// // //             console.warn("Error clearing scanner:", err);
// // //           });
// // //           onClose();
// // //           isScanning = false;
// // //         }
// // //       };

// // //       const onScanError = (error) => {
// // //         if (error && !error.message?.includes('NotFoundException')) {
// // //           console.warn("Scan error:", error);
// // //         }
// // //       };

// // //       setTimeout(() => {
// // //         if (isScanning) {
// // //           scanner.render(onScanSuccess, onScanError);
// // //         }
// // //       }, 100);

// // //       return () => {
// // //         isScanning = false;
// // //         setTimeout(() => {
// // //           scanner.clear().catch((err) => {
// // //             console.warn("Error in cleanup:", err);
// // //           });
// // //         }, 100);
// // //       };
// // //     }).catch((error) => {
// // //       console.error("Failed to load html5-qrcode:", error);
// // //       onClose();
// // //     });

// // //   }, [onScan, onClose]);

// // //   return (
// // //     <div className="text-center">
// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Arahkan kamera ke barcode</p>
// // //       </div>
// // //       <div id="qr-reader" className="mx-auto" style={{ width: '100%', maxWidth: '300px' }}></div>
// // //       <button 
// // //         onClick={onClose}
// // //         className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
// // //       >
// // //         Tutup Scanner
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // // Komponen ScannerModal untuk AddPengunjungForm
// // // const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     if (isOpen) {
// // //       const timer = setTimeout(() => {
// // //         setIsVisible(true);
// // //       }, 100);
// // //       return () => clearTimeout(timer);
// // //     } else {
// // //       setIsVisible(false);
// // //     }
// // //   }, [isOpen]);

// // //   const handleScan = (decodedText) => {
// // //     onScan(decodedText);
// // //   };

// // //   const handleClose = () => {
// // //     setIsVisible(false);
// // //     setTimeout(() => {
// // //       onClose();
// // //     }, 200);
// // //   };

// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
// // //       <div className="bg-white rounded-lg p-6 w-full max-w-md">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="text-xl font-bold text-gray-800">{title}</h2>
// // //           <button
// // //             onClick={handleClose}
// // //             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
// // //           >
// // //             <FaTimes className="w-6 h-6" />
// // //           </button>
// // //         </div>
        
// // //         {isVisible && (
// // //           <BarcodeScanner onScan={handleScan} onClose={handleClose} />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const AddPengunjungForm = ({ onClose }) => {
// // //   const { createPengunjung, createDataPengunjung, fetchWbpList, wbpList, updatePengunjung, fetchPengunjungData, pengunjungData } = useDataStore();
// // //   const [formData, setFormData] = useState({
// // //     wbp_id: "",
// // //     nama: "",
// // //     jenis_kelamin: "",
// // //     nik: "",
// // //     alamat: "",
// // //     hp: "",
// // //     hubungan_keluarga: "",
// // //     tujuan: "",
// // //     kode: "",
// // //     barcode: null,
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
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [searchWbp, setSearchWbp] = useState("");
// // //   const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
// // //   const dropdownRef = useRef(null);

// // //   // State baru untuk dropdown pengunjung
// // //   const [searchPengunjung, setSearchPengunjung] = useState("");
// // //   const [isPengunjungDropdownOpen, setIsPengunjungDropdownOpen] = useState(false);
// // //   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
// // //   const dropdownPengunjungRef = useRef(null);

// // //   // State baru untuk preview gambar
// // //   const [previewKtp, setPreviewKtp] = useState(null);
// // //   const [previewPengunjung, setPreviewPengunjung] = useState(null);
// // //   const [previewBarcode, setPreviewBarcode] = useState(null);
// // //   const [showModalKtp, setShowModalKtp] = useState(false);
// // //   const [showModalPengunjung, setShowModalPengunjung] = useState(false);
// // //   const [showModalBarcode, setShowModalBarcode] = useState(false);

// // //   // State untuk file objects
// // //   const [photoKtpFile, setPhotoKtpFile] = useState(null);
// // //   const [photoPengunjungFile, setPhotoPengunjungFile] = useState(null);
// // //   const [barcodeFile, setBarcodeFile] = useState(null);

// // //   // State baru untuk menampung data pengunjung yang baru dibuat
// // //   const [newPengunjung, setNewPengunjung] = useState(null);
// // //   const [showEditForm, setShowEditForm] = useState(false);

// // //   // State untuk scanner
// // //   const [showScannerPengunjung, setShowScannerPengunjung] = useState(false);
// // //   const [showScannerWbp, setShowScannerWbp] = useState(false);

// // //   // Fetch data WBP dan Pengunjung saat komponen dimuat
// // //   useEffect(() => {
// // //     fetchWbpList();
// // //     fetchPengunjungData();
// // //   }, [fetchWbpList, fetchPengunjungData]);

// // //   console.log("Pengunjung data", pengunjungData);

// // //   // Handle click outside untuk dropdown pengunjung
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownPengunjungRef.current && !dropdownPengunjungRef.current.contains(event.target)) {
// // //         setIsPengunjungDropdownOpen(false);
// // //       }
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsWbpDropdownOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     };
// // //   }, []);

// // //   // Filter data pengunjung untuk dropdown - Handle case ketika pengunjungData bukan array
// // //   const filteredPengunjung = (() => {
// // //     const dataArray = Array.isArray(pengunjungData) 
// // //       ? pengunjungData 
// // //       : (pengunjungData && typeof pengunjungData === 'object' ? [pengunjungData] : []);
    
// // //     console.log("Data array untuk filter:", dataArray);
    
// // //     const authUser = JSON.parse(localStorage.getItem('authUser'));
// // //     const isAdmin = authUser && authUser.user && authUser.user.role === 'admin';
    
// // //     return dataArray.filter((pengunjung) => {
// // //       if (isAdmin) {
// // //         // Admin bisa melihat semua data dengan filter
// // //         return (
// // //           pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
// // //           pengunjung.nik?.includes(searchPengunjung) ||
// // //           pengunjung.hp?.includes(searchPengunjung) ||
// // //           pengunjung.kode?.includes(searchPengunjung)
// // //         );
// // //       } else {
// // //         // User biasa hanya bisa melihat data miliknya sendiri
// // //         const userNik = authUser?.user?.nik;
// // //         const userNama = authUser?.user?.nama;
// // //         const userHp = authUser?.user?.hp;
        
// // //         // Cek apakah data ini milik user yang login
// // //         const isUserData = 
// // //           pengunjung.nik === userNik || 
// // //           pengunjung.nama === userNama ||
// // //           pengunjung.hp === userHp;
        
// // //         if (!isUserData) return false;
        
// // //         // Jika ada pencarian, filter juga berdasarkan pencarian
// // //         if (searchPengunjung) {
// // //           return (
// // //             pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
// // //             pengunjung.nik?.includes(searchPengunjung) ||
// // //             pengunjung.hp?.includes(searchPengunjung) ||
// // //             pengunjung.kode?.includes(searchPengunjung)
// // //           );
// // //         }
        
// // //         return true;
// // //       }
// // //     });
// // //   })();

// // //   // Filter WBP list dengan handling data tunggal juga
// // //   const filteredWbp = (() => {
// // //     const dataArray = Array.isArray(wbpList) 
// // //       ? wbpList 
// // //       : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
// // //     return dataArray.filter(
// // //       (wbp) =>
// // //         wbp.nama?.toLowerCase().includes(searchWbp?.toLowerCase()) ||
// // //         wbp.id.toString().includes(searchWbp)
// // //     );
// // //   })();

// // //   // Fungsi untuk memilih pengunjung dari dropdown
// // //   const selectPengunjung = (pengunjung) => {
// // //     setSelectedPengunjung(pengunjung);
// // //     setFormData({
// // //       ...formData,
// // //       nama: pengunjung.nama || "",
// // //       nik: pengunjung.nik || "",
// // //       alamat: pengunjung.alamat || "",
// // //       hp: pengunjung.hp || "",
// // //       jenis_kelamin: pengunjung.jenis_kelamin || "",
// // //       hubungan_keluarga: pengunjung.hubungan_keluarga || "",
// // //       kode: pengunjung.kode || "",
// // //       tujuan: pengunjung.tujuan || "Berkunjung", // Default jika tidak ada data
// // //     });
    
// // //     // Set preview gambar dari data yang sudah ada
// // //     if (pengunjung.photo_ktp) {
// // //       setPreviewKtp(pengunjung.photo_ktp);
// // //       setFormData(prev => ({ ...prev, photo_ktp: pengunjung.photo_ktp }));
// // //     }
// // //     if (pengunjung.photo_pengunjung) {
// // //       setPreviewPengunjung(pengunjung.photo_pengunjung);
// // //       setFormData(prev => ({ ...prev, photo_pengunjung: pengunjung.photo_pengunjung }));
// // //     }
// // //     if (pengunjung.barcode) {
// // //       setPreviewBarcode(pengunjung.barcode);
// // //       setFormData(prev => ({ ...prev, barcode: pengunjung.barcode }));
// // //     }
    
// // //     setSearchPengunjung(pengunjung.nama);
// // //     setIsPengunjungDropdownOpen(false);
// // //   };

// // //   // Fungsi untuk menghitung total pengikut
// // //   const calculateTotalPengikut = (data) => {
// // //     const total = 
// // //       parseInt(data.pengikut_laki_laki || 0) +
// // //       parseInt(data.pengikut_perempuan || 0) +
// // //       parseInt(data.pengikut_anak_anak || 0) +
// // //       parseInt(data.pengikut_bayi || 0);
// // //     return total;
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     const updatedFormData = {
// // //       ...formData,
// // //       [name]: value,
// // //     };
    
// // //     // Jika field pengikut diubah, hitung total otomatis
// // //     if (name.includes('pengikut_') && name !== 'total_pengikut') {
// // //       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// // //     }
    
// // //     setFormData(updatedFormData);
// // //   };

// // //   const selectWbp = (wbp) => {
// // //     setFormData({ ...formData, wbp_id: wbp.id });
// // //     setSearchWbp(wbp.nama);
// // //     setIsWbpDropdownOpen(false);
// // //   };

// // //   // Fungsi untuk handle scan barcode pengunjung
// // //   const handleScanPengunjung = (data) => {
// // //     setSearchPengunjung(data);
// // //     setShowScannerPengunjung(false);
    
// // //     // Cari pengunjung berdasarkan kode yang di-scan
// // //     const pengunjungDitemukan = filteredPengunjung.find(p => p.kode === data);
// // //     if (pengunjungDitemukan) {
// // //       selectPengunjung(pengunjungDitemukan);
// // //       toast.success("Pengunjung ditemukan melalui scan");
// // //     } else {
// // //       toast.error("Pengunjung tidak ditemukan");
// // //     }
// // //   };

// // //   // Fungsi untuk handle scan barcode WBP
// // //   const handleScanWbp = (data) => {
// // //     setSearchWbp(data);
// // //     setShowScannerWbp(false);
    
// // //     // Cari WBP berdasarkan ID atau nama yang di-scan
// // //     const wbpDitemukan = filteredWbp.find(wbp => 
// // //       wbp.id.toString() === data || wbp.nama?.toLowerCase().includes(data.toLowerCase())
// // //     );
// // //     if (wbpDitemukan) {
// // //       selectWbp(wbpDitemukan);
// // //       toast.success("WBP ditemukan melalui scan");
// // //     } else {
// // //       toast.error("WBP tidak ditemukan");
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     const file = files[0];
    
// // //     if (file) {
// // //       // Validasi tipe file
// // //       if (!file.type.startsWith('image/')) {
// // //         toast.error("File harus berupa gambar");
// // //         return;
// // //       }

// // //       // Validasi ukuran file (max 5MB)
// // //       if (file.size > 5 * 1024 * 1024) {
// // //         toast.error("Ukuran file maksimal 5MB");
// // //         return;
// // //       }

// // //       // Simpan file object ke state terpisah
// // //       if (name === 'photo_ktp') {
// // //         setPhotoKtpFile(file);
// // //         setFormData(prev => ({ ...prev, photo_ktp: file }));
// // //       } else if (name === 'photo_pengunjung') {
// // //         setPhotoPengunjungFile(file);
// // //         setFormData(prev => ({ ...prev, photo_pengunjung: file }));
// // //       } else if (name === 'barcode') {
// // //         setBarcodeFile(file);
// // //         setFormData(prev => ({ ...prev, barcode: file }));
// // //       }

// // //       // Create preview
// // //       const reader = new FileReader();
// // //       reader.onload = (e) => {
// // //         if (name === 'photo_ktp') {
// // //           setPreviewKtp(e.target.result);
// // //         } else if (name === 'photo_pengunjung') {
// // //           setPreviewPengunjung(e.target.result);
// // //         } else if (name === 'barcode') {
// // //           setPreviewBarcode(e.target.result);
// // //         }
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   // Fungsi untuk menghapus foto
// // //   const removePhoto = (type) => {
// // //     if (type === 'ktp') {
// // //       setFormData({ ...formData, photo_ktp: null });
// // //       setPreviewKtp(null);
// // //       setPhotoKtpFile(null);
// // //     } else if (type === 'pengunjung') {
// // //       setFormData({ ...formData, photo_pengunjung: null });
// // //       setPreviewPengunjung(null);
// // //       setPhotoPengunjungFile(null);
// // //     } else if (type === 'barcode') {
// // //       setFormData({ ...formData, barcode: null });
// // //       setPreviewBarcode(null);
// // //       setBarcodeFile(null);
// // //     }
// // //   };

// // //   // Fungsi untuk menggunakan foto dari data existing
// // //   const handleExistingPhoto = (type) => {
// // //     if (!selectedPengunjung) return;
    
// // //     if (type === 'ktp' && selectedPengunjung.photo_ktp) {
// // //       setFormData({ ...formData, photo_ktp: selectedPengunjung.photo_ktp });
// // //       setPreviewKtp(selectedPengunjung.photo_ktp);
// // //       setPhotoKtpFile(null); // Reset file object
// // //       toast.success("Menggunakan foto KTP dari data existing");
// // //     } else if (type === 'pengunjung' && selectedPengunjung.photo_pengunjung) {
// // //       setFormData({ ...formData, photo_pengunjung: selectedPengunjung.photo_pengunjung });
// // //       setPreviewPengunjung(selectedPengunjung.photo_pengunjung);
// // //       setPhotoPengunjungFile(null); // Reset file object
// // //       toast.success("Menggunakan foto pengunjung dari data existing");
// // //     } else if (type === 'barcode' && selectedPengunjung.barcode) {
// // //       setFormData({ ...formData, barcode: selectedPengunjung.barcode });
// // //       setPreviewBarcode(selectedPengunjung.barcode);
// // //       setBarcodeFile(null); // Reset file object
// // //       toast.success("Menggunakan barcode dari data existing");
// // //     } else {
// // //       toast.error("File tidak tersedia di data existing");
// // //     }
// // //   };

// // //   // Fungsi untuk generate kode otomatis
// // //   const generateKode = () => {
// // //     const randomKode = Math.random().toString(36).substring(2, 8).toUpperCase();
// // //     setFormData({
// // //       ...formData,
// // //       kode: randomKode
// // //     });
// // //     toast.success("Kode berhasil digenerate: " + randomKode);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id || !formData.kode) {
// // //       setError("Pastikan nama, NIK, nomor HP, WBP, dan kode diisi.");
// // //       return;
// // //     }

// // //     setError("");
// // //     setIsSubmitting(true);

// // //     const formDataToSend = new FormData();
    
// // //     // Tambahkan semua field formData ke FormData
// // //     for (const key in formData) {
// // //       if (formData[key] !== null && formData[key] !== "") {
// // //         // Handle file uploads - jika file object, append sebagai file
// // //         if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && formData[key] instanceof File) {
// // //           formDataToSend.append(key, formData[key]);
// // //         } 
// // //         // Handle URL strings dari data existing
// // //         else if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && typeof formData[key] === 'string') {
// // //           formDataToSend.append(key, formData[key]);
// // //         }
// // //         // Handle field lainnya
// // //         else if (key !== 'photo_ktp' && key !== 'photo_pengunjung' && key !== 'barcode') {
// // //           formDataToSend.append(key, formData[key]);
// // //         }
// // //       }
// // //     }

// // //     // Debug: Log formData sebelum dikirim
// // //     console.log("FormData sebelum submit:", formData);
// // //     console.log("Photo KTP:", formData.photo_ktp);
// // //     console.log("Photo Pengunjung:", formData.photo_pengunjung);
// // //     console.log("Barcode:", formData.barcode);

// // //     // Debug: Log FormData entries
// // //     for (let pair of formDataToSend.entries()) {
// // //       console.log(pair[0] + ': ', pair[1]);
// // //     }

// // //     try {
// // //       // Simpan response dari createPengunjung ke state
// // //       const createdPengunjung = await createPengunjung(formDataToSend, setError);
      
// // //       if (createdPengunjung) {
// // //         toast.success("Pengunjung berhasil ditambahkan!");

// // //         // Simpan data pengunjung baru ke state
// // //         setNewPengunjung(createdPengunjung);
        
// // //         // Tampilkan form edit
// // //         setShowEditForm(true);

// // //         // Reset form
// // //         setFormData({
// // //           wbp_id: "",
// // //           nama: "",
// // //           jenis_kelamin: "",
// // //           nik: "",
// // //           alamat: "",
// // //           hp: "",
// // //           hubungan_keluarga: "",
// // //           tujuan: "Berkunjung",
// // //           kode: "",
// // //           barcode: null,
// // //           pengikut_laki_laki: 0,
// // //           pengikut_perempuan: 0,
// // //           pengikut_anak_anak: 0,
// // //           pengikut_bayi: 0,
// // //           total_pengikut: 0,
// // //           keterangan: "",
// // //           photo_ktp: null,
// // //           photo_pengunjung: null,
// // //         });
// // //         setSelectedPengunjung(null);
// // //         setSearchPengunjung("");
// // //         setPreviewKtp(null);
// // //         setPreviewPengunjung(null);
// // //         setPreviewBarcode(null);
// // //         setPhotoKtpFile(null);
// // //         setPhotoPengunjungFile(null);
// // //         setBarcodeFile(null);
// // //       } else {
// // //         throw new Error("Gagal mendapatkan response dari server");
// // //       }

// // //     } catch (err) {
// // //       console.error("Error saat menambahkan pengunjung:", err);
// // //       toast.error("Gagal menambahkan pengunjung. Silakan coba lagi.");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   // Fungsi untuk kembali ke form tambah
// // //   const handleBackToAddForm = () => {
// // //     setShowEditForm(false);
// // //     setNewPengunjung(null);
// // //     setSearchWbp("");
// // //     setSearchPengunjung("");
// // //     setSelectedPengunjung(null);
// // //   };

// // //   // Jika showEditForm true dan newPengunjung ada, tampilkan EditPengunjungForm
// // //   if (showEditForm && newPengunjung) {
// // //     return (
// // //       <EditPengunjungFormWrapper 
// // //         newPengunjung={newPengunjung}
// // //         onBack={handleBackToAddForm}
// // //         onClose={onClose}
// // //       />
// // //     );
// // //   }

// // //   // Modal untuk preview gambar besar
// // //   const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
// // //     if (!isOpen) return null;

// // //     return (
// // //       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
// // //         <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
// // //           <div className="flex justify-between items-center p-4 border-b">
// // //             <h3 className="text-lg font-semibold">{title}</h3>
// // //             <button
// // //               onClick={onClose}
// // //               className="text-gray-500 hover:text-gray-700"
// // //             >
// // //               <FaTimes size={24} />
// // //             </button>
// // //           </div>
// // //           <div className="p-4">
// // //             <img
// // //               src={imageUrl}
// // //               alt={title}
// // //               className="w-full h-auto max-h-96 object-contain"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   // Tampilkan form tambah pengunjung
// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// // //       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
// // //         {/* Header */}
// // //         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
// // //           <div className="w-full">
// // //             <Link to="/" className="flex justify-end text-white font-bold hover:text-green-300 text-2xl" style={{textDecoration: 'none'}}>
// // //               <FaHomeIcon />
// // //             </Link>
// // //           </div>
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
// // //             {/* Pilih WBP dengan scan barcode */}
// // //             <div className="relative" ref={dropdownRef}>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// // //               </label>
// // //               <div className="flex items-center space-x-2">
// // //                 <input
// // //                   type="text"
// // //                   value={searchWbp}
// // //                   onChange={(e) => {
// // //                     setSearchWbp(e.target.value);
// // //                     setIsWbpDropdownOpen(true);
// // //                   }}
// // //                   onFocus={() => setIsWbpDropdownOpen(true)}
// // //                   placeholder="Ketikan nama atau ID WBP..."
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                   required
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowScannerWbp(true)}
// // //                   className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                   title="Scan Barcode WBP"
// // //                 >
// // //                   <FaQrcode className="w-5 h-5" />
// // //                 </button>
// // //               </div>
              
// // //               {isWbpDropdownOpen && filteredWbp.length > 0 && (
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

// // //             {/* Cari Pengunjung yang Sudah Ada dengan scan barcode */}
// // //             <div className="relative" ref={dropdownPengunjungRef}>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaUser className="inline-block mr-2" /> Cari Pengunjung (Data Existing)
// // //               </label>
// // //               <div className="flex items-center space-x-2">
// // //                 <input
// // //                   type="text"
// // //                   value={searchPengunjung}
// // //                   onChange={(e) => {
// // //                     setSearchPengunjung(e.target.value);
// // //                     setIsPengunjungDropdownOpen(true);
// // //                   }}
// // //                   onFocus={() => setIsPengunjungDropdownOpen(true)}
// // //                   placeholder="Ketikan nama atau NIK pengunjung yang sudah ada..."
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowScannerPengunjung(true)}
// // //                   className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                   title="Scan Barcode Pengunjung"
// // //                 >
// // //                   <FaQrcode className="w-5 h-5" />
// // //                 </button>
// // //               </div>
              
// // //               {isPengunjungDropdownOpen && filteredPengunjung.length > 0 && (
// // //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // //                   {filteredPengunjung.map((pengunjung, index) => (
// // //                     <div
// // //                       key={pengunjung.id || index}
// // //                       onClick={() => selectPengunjung(pengunjung)}
// // //                       className="p-3 hover:bg-green-50 cursor-pointer flex items-center border-b border-gray-100"
// // //                     >
// // //                       <div className="flex-1">
// // //                         <div className="font-medium text-gray-800">{pengunjung.nama}</div>
// // //                         <div className="text-sm text-gray-600">NIK: {pengunjung.nik}</div>
// // //                         <div className="text-sm text-gray-600">HP: {pengunjung.hp}</div>
// // //                         <div className="text-sm text-gray-500">Alamat: {pengunjung.alamat}</div>
// // //                         <div className="text-sm text-gray-500">Kode: {pengunjung.kode}</div>
// // //                       </div>
// // //                       <FaUser className="ml-2 text-green-500" />
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* Debug info */}
// // //               <div className="mt-1 text-xs text-gray-500">
// // //                 Menampilkan {filteredPengunjung.length} data pengunjung
// // //               </div>
// // //             </div>

// // //             {/* Informasi Pengunjung Terpilih */}
// // //             {selectedPengunjung && (
// // //               <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
// // //                 <p className="text-green-700 font-medium mb-2">
// // //                   ✓ Data pengunjung terpilih:
// // //                 </p>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   <div className="space-y-2">
// // //                     <div className="grid grid-cols-2 gap-2 text-sm text-green-600">
// // //                       <div><strong>Nama:</strong> {selectedPengunjung.nama}</div>
// // //                       <div><strong>NIK:</strong> {selectedPengunjung.nik}</div>
// // //                       <div><strong>HP:</strong> {selectedPengunjung.hp}</div>
// // //                       <div><strong>Alamat:</strong> {selectedPengunjung.alamat}</div>
// // //                       <div><strong>Jenis Kelamin:</strong> {selectedPengunjung.jenis_kelamin}</div>
// // //                       <div><strong>Kode:</strong> {selectedPengunjung.kode}</div>
// // //                       {selectedPengunjung.hubungan_keluarga && (
// // //                         <div><strong>Hubungan:</strong> {selectedPengunjung.hubungan_keluarga}</div>
// // //                       )}
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Foto dari Data Existing */}
// // //                   <div className="space-y-3">
// // //                     <div className="grid grid-cols-3 gap-2">
// // //                       {/* Foto KTP Existing */}
// // //                       {selectedPengunjung.photo_ktp && (
// // //                         <div className="flex-1">
// // //                           <div className="flex justify-between items-center mb-1">
// // //                             <span className="text-xs font-medium text-green-700">KTP</span>
// // //                             <button
// // //                               type="button"
// // //                               onClick={() => handleExistingPhoto('ktp')}
// // //                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
// // //                             >
// // //                               Gunakan
// // //                             </button>
// // //                           </div>
// // //                           <div 
// // //                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
// // //                             onClick={() => setShowModalKtp(true)}
// // //                           >
// // //                             <img
// // //                               src={selectedPengunjung.photo_ktp}
// // //                               alt="KTP Existing"
// // //                               className="w-full h-16 object-cover rounded"
// // //                             />
// // //                           </div>
// // //                         </div>
// // //                       )}
                      
// // //                       {/* Foto Pengunjung Existing */}
// // //                       {selectedPengunjung.photo_pengunjung && (
// // //                         <div className="flex-1">
// // //                           <div className="flex justify-between items-center mb-1">
// // //                             <span className="text-xs font-medium text-green-700">Foto</span>
// // //                             <button
// // //                               type="button"
// // //                               onClick={() => handleExistingPhoto('pengunjung')}
// // //                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
// // //                             >
// // //                               Gunakan
// // //                             </button>
// // //                           </div>
// // //                           <div 
// // //                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
// // //                             onClick={() => setShowModalPengunjung(true)}
// // //                           >
// // //                             <img
// // //                               src={selectedPengunjung.photo_pengunjung}
// // //                               alt="Pengunjung Existing"
// // //                               className="w-full h-16 object-cover rounded"
// // //                             />
// // //                           </div>
// // //                         </div>
// // //                       )}

// // //                       {/* Barcode Existing */}
// // //                       {selectedPengunjung.barcode && (
// // //                         <div className="flex-1">
// // //                           <div className="flex justify-between items-center mb-1">
// // //                             <span className="text-xs font-medium text-green-700">Barcode</span>
// // //                             <button
// // //                               type="button"
// // //                               onClick={() => handleExistingPhoto('barcode')}
// // //                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
// // //                             >
// // //                               Gunakan
// // //                             </button>
// // //                           </div>
// // //                           <div 
// // //                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
// // //                             onClick={() => setShowModalBarcode(true)}
// // //                           >
// // //                             <img
// // //                               src={selectedPengunjung.barcode}
// // //                               alt="Barcode Existing"
// // //                               className="w-full h-16 object-cover rounded"
// // //                             />
// // //                           </div>
// // //                         </div>
// // //                       )}
// // //                     </div>
                    
// // //                     {(!selectedPengunjung.photo_ktp || !selectedPengunjung.photo_pengunjung || !selectedPengunjung.barcode) && (
// // //                       <div className="text-xs text-green-600 bg-green-100 p-2 rounded">
// // //                         <FaCamera className="inline mr-1" />
// // //                         File yang tidak tersedia: 
// // //                         {!selectedPengunjung.photo_ktp && " KTP"}
// // //                         {!selectedPengunjung.photo_pengunjung && " Foto"}
// // //                         {!selectedPengunjung.barcode && " Barcode"}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

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

// // //             {/* Kode */}
// // //             <div className="flex space-x-2">
// // //               <input
// // //                 type="text"
// // //                 name="kode"
// // //                 value={formData.kode}
// // //                 onChange={handleInputChange}
// // //                 placeholder="Masukkan kode atau generate otomatis"
// // //                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 required
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={generateKode}
// // //                 disabled={!!formData.kode}
// // //                 className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
// // //                   formData.kode 
// // //                     ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
// // //                     : 'bg-green-600 text-white hover:bg-green-700'
// // //                 }`}
// // //               >
// // //                 Generate
// // //               </button>
// // //             </div>
// // //             <p className="text-xs text-gray-500 mt-1">
// // //               Kode unik untuk identifikasi pengunjung
// // //             </p>

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

// // //             {/* Hubungan Keluarga */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <User className="inline-block mr-2" /> Hubungan Keluarga
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="hubungan_keluarga"
// // //                 value={formData.hubungan_keluarga}
// // //                 onChange={handleInputChange}
// // //                 placeholder="Contoh: Saudara, Ibu, Ayah, dll."
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //               />
// // //             </div>

// // //             {/* Tujuan */}
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
// // //                 accept="image/*"
// // //               />
              
// // //               {/* Preview Foto KTP */}
// // //               {previewKtp && (
// // //                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
// // //                   <div className="flex justify-between items-center mb-2">
// // //                     <span className="text-sm font-medium text-gray-700">Preview Foto KTP:</span>
// // //                     <div className="flex space-x-2">
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => setShowModalKtp(true)}
// // //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // //                       >
// // //                         <FaEye className="mr-1" /> Lihat Besar
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => removePhoto('ktp')}
// // //                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
// // //                       >
// // //                         <FaTimes className="mr-1" /> Hapus
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex justify-center">
// // //                     <img
// // //                       src={previewKtp}
// // //                       alt="Preview KTP"
// // //                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
// // //                       onClick={() => setShowModalKtp(true)}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               )}
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
// // //                 accept="image/*"
// // //               />
              
// // //               {/* Preview Foto Pengunjung */}
// // //               {previewPengunjung && (
// // //                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
// // //                   <div className="flex justify-between items-center mb-2">
// // //                     <span className="text-sm font-medium text-gray-700">Preview Foto Pengunjung:</span>
// // //                     <div className="flex space-x-2">
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => setShowModalPengunjung(true)}
// // //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // //                       >
// // //                         <FaEye className="mr-1" /> Lihat Besar
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => removePhoto('pengunjung')}
// // //                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
// // //                       >
// // //                         <FaTimes className="mr-1" /> Hapus
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex justify-center">
// // //                     <img
// // //                       src={previewPengunjung}
// // //                       alt="Preview Pengunjung"
// // //                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
// // //                       onClick={() => setShowModalPengunjung(true)}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Upload Barcode */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 <FaBarcode className="inline-block mr-2" /> Barcode/QR Code
// // //               </label>
// // //               <input
// // //                 type="file"
// // //                 name="barcode"
// // //                 onChange={handleFileChange}
// // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                 accept="image/*"
// // //               />
              
// // //               {/* Preview Barcode */}
// // //               {previewBarcode && (
// // //                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
// // //                   <div className="flex justify-between items-center mb-2">
// // //                     <span className="text-sm font-medium text-gray-700">Preview Barcode:</span>
// // //                     <div className="flex space-x-2">
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => setShowModalBarcode(true)}
// // //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // //                       >
// // //                         <FaEye className="mr-1" /> Lihat Besar
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => removePhoto('barcode')}
// // //                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
// // //                       >
// // //                         <FaTimes className="mr-1" /> Hapus
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex justify-center">
// // //                     <img
// // //                       src={previewBarcode}
// // //                       alt="Preview Barcode"
// // //                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
// // //                       onClick={() => setShowModalBarcode(true)}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Tombol Submit */}
// // //             <button
// // //               type="submit"
// // //               disabled={isSubmitting}
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

// // //       {/* Modal untuk preview gambar besar */}
// // //       <ImageModal
// // //         isOpen={showModalKtp}
// // //         onClose={() => setShowModalKtp(false)}
// // //         imageUrl={previewKtp || (selectedPengunjung?.photo_ktp)}
// // //         title="Foto KTP"
// // //       />
      
// // //       <ImageModal
// // //         isOpen={showModalPengunjung}
// // //         onClose={() => setShowModalPengunjung(false)}
// // //         imageUrl={previewPengunjung || (selectedPengunjung?.photo_pengunjung)}
// // //         title="Foto Pengunjung"
// // //       />

// // //       <ImageModal
// // //         isOpen={showModalBarcode}
// // //         onClose={() => setShowModalBarcode(false)}
// // //         imageUrl={previewBarcode || (selectedPengunjung?.barcode)}
// // //         title="Barcode/QR Code"
// // //       />

// // //       {/* Scanner Modal untuk Pengunjung */}
// // //       <ScannerModal 
// // //         isOpen={showScannerPengunjung}
// // //         onClose={() => setShowScannerPengunjung(false)}
// // //         onScan={handleScanPengunjung}
// // //         title="Scan Barcode Pengunjung"
// // //       />

// // //       {/* Scanner Modal untuk WBP */}
// // //       <ScannerModal 
// // //         isOpen={showScannerWbp}
// // //         onClose={() => setShowScannerWbp(false)}
// // //         onScan={handleScanWbp}
// // //         title="Scan Barcode WBP"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // // Komponen wrapper untuk EditPengunjungForm
// // // const EditPengunjungFormWrapper = ({ newPengunjung, onBack, onClose }) => {
// // //   const { updatePengunjung } = useDataStore();
// // //   const [formData, setFormData] = useState({
// // //     nama: newPengunjung.nama || "",
// // //     jenis_kelamin: newPengunjung.jenis_kelamin || "",
// // //     nik: newPengunjung.nik || "",
// // //     alamat: newPengunjung.alamat || "",
// // //     hp: newPengunjung.hp || "",
// // //     hubungan_keluarga: newPengunjung.hubungan_keluarga || "",
// // //     tujuan: newPengunjung.tujuan || "Berkunjung",
// // //     kode: newPengunjung.kode || "",
// // //     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
// // //     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
// // //     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
// // //     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
// // //     total_pengikut: newPengunjung.total_pengikut || 0,
// // //   });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
  
// // //   // State untuk checkbox ambil antrian
// // //   const [ambilAntrian, setAmbilAntrian] = useState(false);
// // //   const [isAdmin, setIsAdmin] = useState(false);

// // //   // State untuk preview gambar yang sudah diupload
// // //   const [showModalKtp, setShowModalKtp] = useState(false);
// // //   const [showModalPengunjung, setShowModalPengunjung] = useState(false);
// // //   const [showModalBarcode, setShowModalBarcode] = useState(false);

// // //   const navigate = useNavigate();

// // //   // Cek role user saat komponen dimuat
// // //   useEffect(() => {
// // //     const authUser = JSON.parse(localStorage.getItem('authUser'));
// // //     if (authUser && authUser.user && authUser.user.role === 'admin') {
// // //       setIsAdmin(true);
// // //     }
    
// // //     // Hitung total pengikut saat pertama kali komponen dimuat
// // //     const initialTotal = calculateTotalPengikut(formData);
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       total_pengikut: initialTotal
// // //     }));
// // //   }, []);

// // //   // Modal untuk preview gambar besar
// // //   const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
// // //     if (!isOpen) return null;

// // //     return (
// // //       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
// // //         <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
// // //           <div className="flex justify-between items-center p-4 border-b">
// // //             <h3 className="text-lg font-semibold">{title}</h3>
// // //             <button
// // //               onClick={onClose}
// // //               className="text-gray-500 hover:text-gray-700"
// // //             >
// // //               <FaTimes size={24} />
// // //             </button>
// // //           </div>
// // //           <div className="p-4">
// // //             <img
// // //               src={imageUrl}
// // //               alt={title}
// // //               className="w-full h-auto max-h-96 object-contain"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   // Fungsi menghitung total pengikut
// // //   const calculateTotalPengikut = (data) => {
// // //     const total = 
// // //       parseInt(data.pengikut_laki_laki || 0) +
// // //       parseInt(data.pengikut_perempuan || 0) +
// // //       parseInt(data.pengikut_anak_anak || 0) +
// // //       parseInt(data.pengikut_bayi || 0);
// // //     return total;
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     const updatedFormData = {
// // //       ...formData,
// // //       [name]: value,
// // //     };
    
// // //     // Jika field pengikut diubah, hitung total otomatis
// // //     if (name.includes('pengikut_') && name !== 'total_pengikut') {
// // //       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// // //     }
    
// // //     setFormData(updatedFormData);
// // //   };

// // //   console.log("new pengunjung", newPengunjung)

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError("");

// // //     try {
// // //       await updatePengunjung(newPengunjung.kode, formData);
// // //       toast.success("Data pengunjung berhasil diperbarui!");
      
// // //       setTimeout(() => {
// // //         if (onClose) onClose();
// // //       }, 1000);
      
// // //     } catch (error) {
// // //       console.error("Error: ", error);
// // //       setError("Gagal memperbarui data pengunjung. Silakan coba lagi.");
// // //       toast.error("Gagal memperbarui data pengunjung.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const finish = () => {
// // //     if (!ambilAntrian && formData.tujuan === "Menitip barang") {
// // //       navigate(`/label/${newPengunjung.kode}`);
// // //     } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
// // //       navigate(`/pengunjung/${newPengunjung.kode}`);
// // //     } else {
// // //       navigate('/');
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
// // //       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
// // //         <div className="flex items-center justify-between mb-8">
// // //           <h1 className="text-3xl font-bold text-gray-800">
// // //             ✏️ Edit Data Pengunjung Baru
// // //           </h1>
// // //           <div className="space-x-2">
// // //             <button
// // //               onClick={onBack}
// // //               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
// // //             >
// // //               ← Tambah Lagi
// // //             </button>
// // //             <button
// // //               onClick={finish}
// // //               className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
// // //             >
// // //               Selesai
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Checkbox Ambil Antrian - hanya tampil untuk admin */}
// // //         {isAdmin && (
// // //           <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded animate-pulse">
// // //             <div className="flex justify-between items-center">
// // //               <label htmlFor="ambilAntrian" className="ml-2 text-xl font-bold text-yellow-700">
// // //                 Ambil Antrian QR Code di Loket
// // //               </label>
// // //               <input
// // //                 type="checkbox"
// // //                 id="ambilAntrian"
// // //                 checked={ambilAntrian}
// // //                 onChange={(e) => setAmbilAntrian(e.target.checked)}
// // //                 className="w-8 h-8 text-black font-bold border-4 border-gray-300 rounded focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// // //               /> 
// // //             </div>
// // //             <div className="mt-2 text-sm text-yellow-600">
// // //               <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// // //               <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// // //           <p className="text-green-700 font-medium">
// // //             ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
// // //           </p>
// // //           <div className="mt-2 text-sm text-green-600">
// // //             <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// // //             <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// // //           </div>
// // //         </div>

// // //         {/* Tampilkan Foto yang Sudah Diupload */}
// // //         <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
// // //           {/* Foto KTP */}
// // //           {newPengunjung.photo_ktp && (
// // //             <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
// // //               <div className="flex justify-between items-center mb-3">
// // //                 <h3 className="text-lg font-semibold text-blue-800">Foto KTP</h3>
// // //                 <button
// // //                   onClick={() => setShowModalKtp(true)}
// // //                   className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // //                 >
// // //                   <FaEye className="mr-1" /> Lihat Besar
// // //                 </button>
// // //               </div>
// // //               <div className="flex justify-center">
// // //                 <img
// // //                   src={newPengunjung.photo_ktp}
// // //                   alt="Foto KTP"
// // //                   className="max-h-40 rounded border border-blue-300 cursor-pointer"
// // //                   onClick={() => setShowModalKtp(true)}
// // //                 />
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Foto Pengunjung */}
// // //           {newPengunjung.photo_pengunjung && (
// // //             <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
// // //               <div className="flex justify-between items-center mb-3">
// // //                 <h3 className="text-lg font-semibold text-purple-800">Foto Pengunjung</h3>
// // //                 <button
// // //                   onClick={() => setShowModalPengunjung(true)}
// // //                   className="text-purple-600 hover:text-purple-800 text-sm flex items-center"
// // //                 >
// // //                   <FaEye className="mr-1" /> Lihat Besar
// // //                 </button>
// // //               </div>
// // //               <div className="flex justify-center">
// // //                 <img
// // //                   src={newPengunjung.photo_pengunjung}
// // //                   alt="Foto Pengunjung"
// // //                   className="max-h-40 rounded border border-purple-300 cursor-pointer"
// // //                   onClick={() => setShowModalPengunjung(true)}
// // //                 />
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Barcode */}
// // //           {newPengunjung.barcode && (
// // //             <div className="p-4 bg-green-50 rounded-lg border border-green-200">
// // //               <div className="flex justify-between items-center mb-3">
// // //                 <h3 className="text-lg font-semibold text-green-800">Barcode/QR Code</h3>
// // //                 <button
// // //                   onClick={() => setShowModalBarcode(true)}
// // //                   className="text-green-600 hover:text-green-800 text-sm flex items-center"
// // //                 >
// // //                   <FaEye className="mr-1" /> Lihat Besar
// // //                 </button>
// // //               </div>
// // //               <div className="flex justify-center">
// // //                 <img
// // //                   src={newPengunjung.barcode}
// // //                   alt="Barcode"
// // //                   className="max-h-40 rounded border border-green-300 cursor-pointer"
// // //                   onClick={() => setShowModalBarcode(true)}
// // //                 />
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {error && (
// // //           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
// // //             {error}
// // //           </div>
// // //         )}

// // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           {/* Kolom Kiri */}
// // //           <div className="space-y-4">
// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Nama</label>
// // //               <input
// // //                 type="text"
// // //                 name="nama"
// // //                 value={formData.nama}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Kode Pengunjung</label>
// // //               <input
// // //                 type="text"
// // //                 name="kode"
// // //                 value={formData.kode}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                 readOnly
// // //               />
// // //               <p className="text-xs text-gray-500 mt-1">
// // //                 Kode tidak dapat diubah setelah dibuat
// // //               </p>
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
// // //               <select
// // //                 name="jenis_kelamin"
// // //                 value={formData.jenis_kelamin}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               >
// // //                 <option value="">Pilih Jenis Kelamin</option>
// // //                 <option value="laki-laki">Laki-laki</option>
// // //                 <option value="perempuan">Perempuan</option>
// // //               </select>
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">NIK</label>
// // //               <input
// // //                 type="text"
// // //                 name="nik"
// // //                 value={formData.nik}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Alamat</label>
// // //               <input
// // //                 type="text"
// // //                 name="alamat"
// // //                 value={formData.alamat}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
// // //               <input
// // //                 type="text"
// // //                 name="hp"
// // //                 value={formData.hp}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Kolom Kanan */}
// // //           <div className="space-y-4">
// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
// // //               <input
// // //                 type="text"
// // //                 name="hubungan_keluarga"
// // //                 value={formData.hubungan_keluarga}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Tujuan</label>
// // //               <select
// // //                 name="tujuan"
// // //                 value={formData.tujuan}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               >
// // //                 <option value="">Pilih Jenis Tujuan</option>
// // //                 <option value="Berkunjung">Berkunjung</option>
// // //                 <option value="Menitip barang">Menitip barang</option>
// // //               </select>
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
// // //               <input
// // //                 type="number"
// // //                 name="pengikut_laki_laki"
// // //                 value={formData.pengikut_laki_laki}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                 min="0"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
// // //               <input
// // //                 type="number"
// // //                 name="pengikut_perempuan"
// // //                 value={formData.pengikut_perempuan}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                 min="0"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
// // //               <input
// // //                 type="number"
// // //                 name="pengikut_anak_anak"
// // //                 value={formData.pengikut_anak_anak}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                 min="0"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
// // //               <input
// // //                 type="number"
// // //                 name="pengikut_bayi"
// // //                 value={formData.pengikut_bayi}
// // //                 onChange={handleInputChange}
// // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                 min="0"
// // //               />
// // //             </div>

// // //             {/* Total Pengikut (Read-only) */}
// // //             <div className="bg-green-50 p-4 rounded-lg border border-green-200">
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
// // //               <div className="text-2xl font-bold text-green-600 text-center">
// // //                 {formData.total_pengikut} Orang
// // //               </div>
// // //               <div className="text-sm text-gray-600 text-center mt-1">
// // //                 (Laki-laki: {formData.pengikut_laki_laki} | 
// // //                 Perempuan: {formData.pengikut_perempuan} | 
// // //                 Anak: {formData.pengikut_anak_anak} | 
// // //                 Bayi: {formData.pengikut_bayi})
// // //               </div>
// // //             </div>

// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 mt-4"
// // //             >
// // //               {loading ? (
// // //                 <span className="flex items-center justify-center">
// // //                   <FaSpinner className="animate-spin mr-2" />
// // //                   Memproses...
// // //                 </span>
// // //               ) : (
// // //                 "💾 Simpan Perubahan"
// // //               )}
// // //             </button>
// // //           </div>
// // //         </form>

// // //         <button
// // //           onClick={() => setIsModalOpen(true)}
// // //           className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
// // //         >
// // //           + Tambah Barang Titipan
// // //         </button>

// // //         {/* Modal CreateBarangTitipan */}
// // //         <CreateBarangTitipanModal
// // //           isOpen={isModalOpen}
// // //           onClose={() => setIsModalOpen(false)}
// // //           pengunjungs={newPengunjung}
// // //         />

// // //         <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
// // //           <p className="text-blue-700 text-sm">
// // //             <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* Modal untuk preview gambar besar */}
// // //       <ImageModal
// // //         isOpen={showModalKtp}
// // //         onClose={() => setShowModalKtp(false)}
// // //         imageUrl={newPengunjung.photo_ktp}
// // //         title="Foto KTP"
// // //       />
      
// // //       <ImageModal
// // //         isOpen={showModalPengunjung}
// // //         onClose={() => setShowModalPengunjung(false)}
// // //         imageUrl={newPengunjung.photo_pengunjung}
// // //         title="Foto Pengunjung"
// // //       />

// // //       <ImageModal
// // //         isOpen={showModalBarcode}
// // //         onClose={() => setShowModalBarcode(false)}
// // //         imageUrl={newPengunjung.barcode}
// // //         title="Barcode/QR Code"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default AddPengunjungForm;


// // import React, { useState, useEffect, useRef } from "react";
// // import { toast } from "react-hot-toast";
// // import useDataStore from "../../store/useDataStore";
// // import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon, FaTimes, FaEye, FaCamera, FaBarcode, FaSearch, FaKeyboard } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import { User } from "lucide-react";
// // import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// // // Komponen BarcodeScanner untuk AddPengunjungForm
// // const BarcodeScanner = ({ onScan, onClose }) => {
// //   useEffect(() => {
// //     // Dynamically import html5-qrcode
// //     import('html5-qrcode').then(({ Html5QrcodeScanner }) => {
// //       const scanner = new Html5QrcodeScanner('qr-reader', {
// //         qrbox: {
// //           width: 250,
// //           height: 250,
// //         },
// //         fps: 10,
// //         rememberLastUsedCamera: true,
// //         supportedScanTypes: null,
// //       });

// //       let isScanning = true;

// //       const onScanSuccess = (decodedText) => {
// //         if (isScanning) {
// //           onScan(decodedText);
// //           scanner.clear().then(() => {
// //             console.log("Scanner cleared successfully");
// //           }).catch((err) => {
// //             console.warn("Error clearing scanner:", err);
// //           });
// //           onClose();
// //           isScanning = false;
// //         }
// //       };

// //       const onScanError = (error) => {
// //         if (error && !error.message?.includes('NotFoundException')) {
// //           console.warn("Scan error:", error);
// //         }
// //       };

// //       setTimeout(() => {
// //         if (isScanning) {
// //           scanner.render(onScanSuccess, onScanError);
// //         }
// //       }, 100);

// //       return () => {
// //         isScanning = false;
// //         setTimeout(() => {
// //           scanner.clear().catch((err) => {
// //             console.warn("Error in cleanup:", err);
// //           });
// //         }, 100);
// //       };
// //     }).catch((error) => {
// //       console.error("Failed to load html5-qrcode:", error);
// //       onClose();
// //     });

// //   }, [onScan, onClose]);

// //   return (
// //     <div className="text-center">
// //       <div className="mb-4">
// //         <p className="text-gray-600">Arahkan kamera ke barcode</p>
// //       </div>
// //       <div id="qr-reader" className="mx-auto" style={{ width: '100%', maxWidth: '300px' }}></div>
// //       <button 
// //         onClick={onClose}
// //         className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
// //       >
// //         Tutup Scanner
// //       </button>
// //     </div>
// //   );
// // };

// // // Komponen ScannerModal untuk AddPengunjungForm
// // const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     if (isOpen) {
// //       const timer = setTimeout(() => {
// //         setIsVisible(true);
// //       }, 100);
// //       return () => clearTimeout(timer);
// //     } else {
// //       setIsVisible(false);
// //     }
// //   }, [isOpen]);

// //   const handleScan = (decodedText) => {
// //     onScan(decodedText);
// //   };

// //   const handleClose = () => {
// //     setIsVisible(false);
// //     setTimeout(() => {
// //       onClose();
// //     }, 200);
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
// //       <div className="bg-white rounded-lg p-6 w-full max-w-md">
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-bold text-gray-800">{title}</h2>
// //           <button
// //             onClick={handleClose}
// //             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
// //           >
// //             <FaTimes className="w-6 h-6" />
// //           </button>
// //         </div>
        
// //         {isVisible && (
// //           <BarcodeScanner onScan={handleScan} onClose={handleClose} />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // Komponen Virtual Keyboard yang Dapat Digeser dengan Responsif
// // const VirtualKeyboard = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
// //   const [isShift, setIsShift] = useState(false);
// //   const [isSymbol, setIsSymbol] = useState(false);
// //   const [position, setPosition] = useState({ x: 0, y: 0 });
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
// //   const keyboardRef = useRef(null);
// //   const containerRef = useRef(null);

// //   const alphaRows = [
// //     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
// //     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
// //     ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
// //   ];

// //   const symbolRows = [
// //     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
// //     ['-', '_', '@', '#', '$', '%', '&', '*', '(', ')'],
// //     ['.', ',', '!', '?', ':', ';', '"', "'"],
// //   ];

// //   const currentRows = isSymbol ? symbolRows : alphaRows;

// //   // Handle drag start - untuk mouse dan touch
// //   const handleDragStart = (clientX, clientY) => {
// //     if (!keyboardRef.current) return;
    
// //     setIsDragging(true);
// //     const rect = keyboardRef.current.getBoundingClientRect();
    
// //     setDragOffset({
// //       x: clientX - rect.left,
// //       y: clientY - rect.top
// //     });
// //   };

// //   const handleMouseDown = (e) => {
// //     e.preventDefault();
// //     handleDragStart(e.clientX, e.clientY);
// //   };

// //   const handleTouchStart = (e) => {
// //     const touch = e.touches[0];
// //     handleDragStart(touch.clientX, touch.clientY);
// //   };

// //   // Handle drag movement - untuk mouse dan touch
// //   const handleDragMove = (clientX, clientY) => {
// //     if (!isDragging || !keyboardRef.current) return;
    
// //     const newX = clientX - dragOffset.x;
// //     const newY = clientY - dragOffset.y;
    
// //     // Boundary checks untuk menjaga keyboard tetap dalam viewport
// //     const keyboardWidth = keyboardRef.current.offsetWidth;
// //     const keyboardHeight = keyboardRef.current.offsetHeight;
// //     const maxX = window.innerWidth - keyboardWidth;
// //     const maxY = window.innerHeight - keyboardHeight;
    
// //     setPosition({
// //       x: Math.max(10, Math.min(newX, maxX - 10)), // Beri margin 10px
// //       y: Math.max(10, Math.min(newY, maxY - 10))
// //     });
// //   };

// //   const handleMouseMove = (e) => {
// //     handleDragMove(e.clientX, e.clientY);
// //   };

// //   const handleTouchMove = (e) => {
// //     const touch = e.touches[0];
// //     handleDragMove(touch.clientX, touch.clientY);
// //     e.preventDefault(); // Mencegah scroll saat drag
// //   };

// //   // Handle drag end
// //   const handleDragEnd = () => {
// //     setIsDragging(false);
// //   };

// //   // Event listeners untuk drag
// //   useEffect(() => {
// //     if (isDragging) {
// //       document.addEventListener('mousemove', handleMouseMove);
// //       document.addEventListener('mouseup', handleDragEnd);
// //       document.addEventListener('touchmove', handleTouchMove, { passive: false });
// //       document.addEventListener('touchend', handleDragEnd);
// //       document.addEventListener('touchcancel', handleDragEnd);
      
// //       // Tambahkan styles untuk mencegah scroll dan selection
// //       document.body.style.overflow = 'hidden';
// //       document.body.style.userSelect = 'none';
// //       document.body.style.webkitUserSelect = 'none';
// //     }

// //     return () => {
// //       document.removeEventListener('mousemove', handleMouseMove);
// //       document.removeEventListener('mouseup', handleDragEnd);
// //       document.removeEventListener('touchmove', handleTouchMove);
// //       document.removeEventListener('touchend', handleDragEnd);
// //       document.removeEventListener('touchcancel', handleDragEnd);
      
// //       // Kembalikan styles
// //       document.body.style.overflow = '';
// //       document.body.style.userSelect = '';
// //       document.body.style.webkitUserSelect = '';
// //     };
// //   }, [isDragging, dragOffset]);

// //   // Efek untuk mengatur posisi awal keyboard di tengah bawah
// //   useEffect(() => {
// //     const updateInitialPosition = () => {
// //       if (keyboardRef.current) {
// //         const keyboardWidth = keyboardRef.current.offsetWidth;
// //         const keyboardHeight = keyboardRef.current.offsetHeight;
        
// //         setPosition({
// //           x: (window.innerWidth - keyboardWidth) / 2,
// //           y: window.innerHeight - keyboardHeight - 20 // 20px dari bawah
// //         });
// //       }
// //     };

// //     // Tunggu sampai DOM siap
// //     setTimeout(updateInitialPosition, 100);
    
// //     // Update posisi saat window resize
// //     window.addEventListener('resize', updateInitialPosition);
// //     return () => window.removeEventListener('resize', updateInitialPosition);
// //   }, []);

// //   const handleKeyClick = (key) => {
// //     const finalKey = isShift ? key.toUpperCase() : key;
// //     onKeyPress(finalKey);
// //     if (onInputChange) {
// //       onInputChange(finalKey);
// //     }
// //   };

// //   const handleSpecialKey = (action) => {
// //     switch (action) {
// //       case 'shift':
// //         setIsShift(!isShift);
// //         break;
// //       case 'symbol':
// //         setIsSymbol(!isSymbol);
// //         setIsShift(false);
// //         break;
// //       case 'space':
// //         onKeyPress(' ');
// //         if (onInputChange) onInputChange(' ');
// //         break;
// //       case 'backspace':
// //         onKeyPress('backspace');
// //         if (onInputChange) onInputChange('backspace');
// //         break;
// //       case 'enter':
// //         onKeyPress('enter');
// //         break;
// //       case 'clear':
// //         onKeyPress('clear');
// //         if (onInputChange) onInputChange('clear');
// //         break;
// //       case 'tab':
// //         onKeyPress('tab');
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   const getInputLabel = () => {
// //     switch (activeInput) {
// //       case 'wbp':
// //         return 'Cari Warga Binaan';
// //       case 'pengunjung':
// //         return 'Cari Pengunjung';
// //       case 'nama':
// //         return 'Input Nama';
// //       case 'nik':
// //         return 'Input NIK';
// //       case 'hp':
// //         return 'Input Nomor HP';
// //       case 'alamat':
// //         return 'Input Alamat';
// //       case 'hubungan_keluarga':
// //         return 'Input Hubungan Keluarga';
// //       case 'kode':
// //         return 'Input Kode';
// //       case 'tujuan':
// //         return 'Pilih Tujuan';
// //       default:
// //         return 'Virtual Keyboard';
// //     }
// //   };

// //   return (
// //     <div 
// //       ref={containerRef}
// //       className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none"
// //       style={{ touchAction: 'none' }}
// //     >
// //       <div 
// //         ref={keyboardRef}
// //         className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-4xl transform transition-all duration-300 pointer-events-auto border border-white border-opacity-20"
// //         style={{
// //           position: 'fixed',
// //           left: `${position.x}px`,
// //           top: `${position.y}px`,
// //           cursor: isDragging ? 'grabbing' : 'grab',
// //           touchAction: 'none',
// //           zIndex: 1000
// //         }}
// //       >
// //         {/* Draggable Header dengan indikator yang jelas */}
// //         <div 
// //           className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl p-4 text-white cursor-grab active:cursor-grabbing touch-none"
// //           onMouseDown={handleMouseDown}
// //           onTouchStart={handleTouchStart}
// //           style={{ touchAction: 'none' }}
// //         >
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center space-x-3">
// //               <FaKeyboard className="w-6 h-6" />
// //               <div>
// //                 <h3 className="font-bold text-lg">{getInputLabel()}</h3>
// //                 <p className="text-blue-100 text-sm flex items-center">
// //                   <span className="inline-block w-3 h-3 bg-white bg-opacity-50 rounded-full mr-1 animate-pulse"></span>
// //                   Drag untuk memindahkan • Gunakan keyboard virtual
// //                 </p>
// //               </div>
// //             </div>
// //             <button
// //               onClick={onClose}
// //               className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
// //               style={{ touchAction: 'manipulation' }}
// //             >
// //               <FaTimes className="w-5 h-5" />
// //             </button>
// //           </div>
          
// //           {/* Indikator drag area */}
// //           <div className="mt-2 flex justify-center">
// //             <div className="w-20 h-1 bg-white bg-opacity-50 rounded-full"></div>
// //           </div>
// //         </div>

// //         {/* Preview Area */}
// //         <div className="p-4 bg-gray-50 bg-opacity-50 border-b">
// //           <div className="bg-white bg-opacity-70 rounded-xl p-4 shadow-inner border">
// //             <div className="text-sm text-gray-500 mb-2 flex justify-between">
// //               <span>Input Preview:</span>
// //               <span className="text-blue-500 font-medium">{value.length} karakter</span>
// //             </div>
// //             <div className="text-lg font-mono min-h-[28px] p-2 bg-gray-50 bg-opacity-50 rounded-lg border-2 border-blue-200">
// //               {value || <span className="text-gray-400">Ketik menggunakan keyboard virtual...</span>}
// //               <span className="ml-1 animate-pulse text-blue-500">|</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Keyboard Layout */}
// //         <div className="p-4" style={{ touchAction: 'manipulation' }}>
// //           {/* Main Keyboard */}
// //           {currentRows.map((row, rowIndex) => (
// //             <div key={rowIndex} className="flex justify-center mb-2 space-x-1">
// //               {row.map((key) => (
// //                 <button
// //                   key={key}
// //                   onClick={() => handleKeyClick(key)}
// //                   className="flex-1 max-w-[60px] h-14 bg-white bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 active:scale-95 transition-all duration-150 font-medium text-gray-700 touch-friendly shadow-sm"
// //                   style={{ 
// //                     minWidth: '44px',
// //                     minHeight: '44px',
// //                     touchAction: 'manipulation'
// //                   }}
// //                 >
// //                   {isShift && !isSymbol ? key.toUpperCase() : key}
// //                 </button>
// //               ))}
// //             </div>
// //           ))}

// //           {/* Bottom Control Row */}
// //           <div className="flex justify-center space-x-1 mt-4">
// //             {/* Shift Button */}
// //             <button
// //               onClick={() => handleSpecialKey('shift')}
// //               className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
// //                 isShift 
// //                   ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
// //                   : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
// //               }`}
// //               style={{ 
// //                 minHeight: '44px',
// //                 touchAction: 'manipulation'
// //               }}
// //             >
// //               ⇧ SHIFT
// //             </button>

// //             {/* Symbol Toggle */}
// //             <button
// //               onClick={() => handleSpecialKey('symbol')}
// //               className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
// //                 isSymbol 
// //                   ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
// //                   : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
// //               }`}
// //               style={{ 
// //                 minHeight: '44px',
// //                 touchAction: 'manipulation'
// //               }}
// //             >
// //               {isSymbol ? 'ABC' : '123'}
// //             </button>

// //             {/* Space Button */}
// //             <button
// //               onClick={() => handleSpecialKey('space')}
// //               className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
// //               style={{ 
// //                 minHeight: '44px',
// //                 touchAction: 'manipulation'
// //               }}
// //             >
// //               SPACE
// //             </button>

// //             {/* Backspace Button */}
// //             <button
// //               onClick={() => handleSpecialKey('backspace')}
// //               className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
// //               style={{ 
// //                 minHeight: '44px',
// //                 touchAction: 'manipulation'
// //               }}
// //             >
// //               ⌫ DELETE
// //             </button>
// //           </div>

// //           {/* Action Buttons Row */}
// //           <div className="flex justify-center space-x-2 mt-3">
// //             <button
// //               onClick={() => handleSpecialKey('clear')}
// //               className="flex-1 max-w-[140px] h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all touch-friendly font-medium border-2 border-orange-600"
// //               style={{ 
// //                 minHeight: '44px',
// //                 touchAction: 'manipulation'
// //               }}
// //             >
// //               🗑️ CLEAR
// //             </button>
            
// //             <button
// //               onClick={() => handleSpecialKey('enter')}
// //               className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
// //               style={{ 
// //                 minHeight: '44px',
// //                 touchAction: 'manipulation'
// //               }}
// //             >
// //               ↵ ENTER
// //             </button>
// //           </div>
// //         </div>

// //         {/* Footer dengan tips */}
// //         <div className="bg-gray-50 bg-opacity-50 rounded-b-2xl p-3 border-t">
// //           <div className="text-center text-sm text-gray-500">
// //             💡 Tips: Drag header untuk memindahkan ke segala arah • SHIFT untuk huruf kapital • 123 untuk simbol
// //           </div>
// //           <div className="text-center text-xs text-gray-400 mt-1">
// //             Posisi: {Math.round(position.x)}px, {Math.round(position.y)}px
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const AddPengunjungForm = ({ onClose }) => {
// //   const { createPengunjung, createDataPengunjung, fetchWbpList, wbpList, updatePengunjung, fetchPengunjungData, pengunjungData } = useDataStore();
// //   const [formData, setFormData] = useState({
// //     wbp_id: "",
// //     nama: "",
// //     jenis_kelamin: "",
// //     nik: "",
// //     alamat: "",
// //     hp: "",
// //     hubungan_keluarga: "",
// //     tujuan: "",
// //     kode: "",
// //     barcode: null,
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

// //   // State baru untuk dropdown pengunjung
// //   const [searchPengunjung, setSearchPengunjung] = useState("");
// //   const [isPengunjungDropdownOpen, setIsPengunjungDropdownOpen] = useState(false);
// //   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
// //   const dropdownPengunjungRef = useRef(null);

// //   // State baru untuk preview gambar
// //   const [previewKtp, setPreviewKtp] = useState(null);
// //   const [previewPengunjung, setPreviewPengunjung] = useState(null);
// //   const [previewBarcode, setPreviewBarcode] = useState(null);
// //   const [showModalKtp, setShowModalKtp] = useState(false);
// //   const [showModalPengunjung, setShowModalPengunjung] = useState(false);
// //   const [showModalBarcode, setShowModalBarcode] = useState(false);

// //   // State untuk file objects
// //   const [photoKtpFile, setPhotoKtpFile] = useState(null);
// //   const [photoPengunjungFile, setPhotoPengunjungFile] = useState(null);
// //   const [barcodeFile, setBarcodeFile] = useState(null);

// //   // State baru untuk menampung data pengunjung yang baru dibuat
// //   const [newPengunjung, setNewPengunjung] = useState(null);
// //   const [showEditForm, setShowEditForm] = useState(false);

// //   // State untuk scanner
// //   const [showScannerPengunjung, setShowScannerPengunjung] = useState(false);
// //   const [showScannerWbp, setShowScannerWbp] = useState(false);

// //   // State untuk virtual keyboard
// //   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
// //   const [activeInput, setActiveInput] = useState(null);
// //   const [keyboardValue, setKeyboardValue] = useState('');
// //   const [currentInputValue, setCurrentInputValue] = useState('');

// //   // State untuk loading WBP
// //   const [loadingWbp, setLoadingWbp] = useState(false);

// //   // Fetch data WBP dan Pengunjung saat komponen dimuat
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoadingWbp(true);
// //       try {
// //         await fetchWbpList();
// //         await fetchPengunjungData();
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //         toast.error("Gagal memuat data");
// //       } finally {
// //         setLoadingWbp(false);
// //       }
// //     };
    
// //     fetchData();
// //   }, [fetchWbpList, fetchPengunjungData]);

// //   // Debug data WBP
// //   useEffect(() => {
// //     console.log("WBP List dari API:", wbpList);
// //     console.log("WBP List length:", wbpList?.length);
// //   }, [wbpList]);

// //   // Debug formData WBP
// //   useEffect(() => {
// //     console.log("FormData WBP ID:", formData.wbp_id);
// //     console.log("Search WBP:", searchWbp);
// //   }, [formData.wbp_id, searchWbp]);

// //   // Handle click outside untuk dropdown pengunjung
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownPengunjungRef.current && !dropdownPengunjungRef.current.contains(event.target)) {
// //         setIsPengunjungDropdownOpen(false);
// //       }
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsWbpDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // Filter data pengunjung untuk dropdown - Handle case ketika pengunjungData bukan array
// //   const filteredPengunjung = (() => {
// //     const dataArray = Array.isArray(pengunjungData) 
// //       ? pengunjungData 
// //       : (pengunjungData && typeof pengunjungData === 'object' ? [pengunjungData] : []);
    
// //     console.log("Data array untuk filter:", dataArray);
    
// //     const authUser = JSON.parse(localStorage.getItem('authUser'));
// //     const isAdmin = authUser && authUser.user && authUser.user.role === 'admin';
    
// //     return dataArray.filter((pengunjung) => {
// //       if (isAdmin) {
// //         // Admin bisa melihat semua data dengan filter
// //         return (
// //           pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
// //           pengunjung.nik?.includes(searchPengunjung) ||
// //           pengunjung.hp?.includes(searchPengunjung) ||
// //           pengunjung.kode?.includes(searchPengunjung)
// //         );
// //       } else {
// //         // User biasa hanya bisa melihat data miliknya sendiri
// //         const userNik = authUser?.user?.nik;
// //         const userNama = authUser?.user?.nama;
// //         const userHp = authUser?.user?.hp;
        
// //         // Cek apakah data ini milik user yang login
// //         const isUserData = 
// //           pengunjung.nik === userNik || 
// //           pengunjung.nama === userNama ||
// //           pengunjung.hp === userHp;
        
// //         if (!isUserData) return false;
        
// //         // Jika ada pencarian, filter juga berdasarkan pencarian
// //         if (searchPengunjung) {
// //           return (
// //             pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
// //             pengunjung.nik?.includes(searchPengunjung) ||
// //             pengunjung.hp?.includes(searchPengunjung) ||
// //             pengunjung.kode?.includes(searchPengunjung)
// //           );
// //         }
        
// //         return true;
// //       }
// //     });
// //   })();

// //   // Filter WBP list dengan handling data tunggal juga
// //   const filteredWbp = (() => {
// //     if (!wbpList) return [];
    
// //     const dataArray = Array.isArray(wbpList) 
// //       ? wbpList 
// //       : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
// //     console.log("Data WBP untuk filter:", dataArray);
    
// //     return dataArray.filter((wbp) => {
// //       const searchTerm = searchWbp?.toLowerCase() || '';
// //       const namaMatch = wbp.nama?.toLowerCase().includes(searchTerm);
// //       const idMatch = wbp.id?.toString().includes(searchTerm);
      
// //       return namaMatch || idMatch;
// //     });
// //   })();

// //   // Fungsi untuk menghitung total pengikut
// //   const calculateTotalPengikut = (data) => {
// //     const total = 
// //       parseInt(data.pengikut_laki_laki || 0) +
// //       parseInt(data.pengikut_perempuan || 0) +
// //       parseInt(data.pengikut_anak_anak || 0) +
// //       parseInt(data.pengikut_bayi || 0);
// //     return total;
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     const updatedFormData = {
// //       ...formData,
// //       [name]: value,
// //     };
    
// //     // Jika field pengikut diubah, hitung total otomatis
// //     if (name.includes('pengikut_') && name !== 'total_pengikut') {
// //       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //     }
    
// //     setFormData(updatedFormData);
// //   };

// //   // Handler untuk virtual keyboard
// //   const handleVirtualKeyPress = (key) => {
// //     if (key === 'backspace') {
// //       setKeyboardValue(prev => prev.slice(0, -1));
// //       handleInputUpdate('backspace');
// //     } else if (key === 'enter') {
// //       setShowVirtualKeyboard(false);
// //     } else if (key === 'space') {
// //       setKeyboardValue(prev => prev + ' ');
// //       handleInputUpdate(' ');
// //     } else if (key === 'clear') {
// //       setKeyboardValue('');
// //       handleInputUpdate('clear');
// //     } else if (key === 'tab') {
// //       // Switch between inputs - bisa diimplementasikan nanti
// //     } else {
// //       setKeyboardValue(prev => prev + key);
// //       handleInputUpdate(key);
// //     }
// //   };

// //   // Fungsi untuk langsung update input field dari keyboard
// //   const handleInputUpdate = (key) => {
// //     let newValue = '';
    
// //     if (key === 'backspace') {
// //       newValue = keyboardValue.slice(0, -1);
// //     } else if (key === 'clear') {
// //       newValue = '';
// //     } else if (key === ' ') {
// //       newValue = keyboardValue + ' ';
// //     } else {
// //       newValue = keyboardValue + key;
// //     }

// //     // Update sesuai dengan input yang aktif
// //     switch (activeInput) {
// //       case 'wbp':
// //         setSearchWbp(newValue);
// //         if (newValue.length > 0) {
// //           setIsWbpDropdownOpen(true);
// //         }
// //         break;
// //       case 'pengunjung':
// //         setSearchPengunjung(newValue);
// //         if (newValue.length > 0) {
// //           setIsPengunjungDropdownOpen(true);
// //         }
// //         break;
// //       case 'nama':
// //         setFormData(prev => ({ ...prev, nama: newValue }));
// //         break;
// //       case 'nik':
// //         setFormData(prev => ({ ...prev, nik: newValue }));
// //         break;
// //       case 'hp':
// //         setFormData(prev => ({ ...prev, hp: newValue }));
// //         break;
// //       case 'alamat':
// //         setFormData(prev => ({ ...prev, alamat: newValue }));
// //         break;
// //       case 'hubungan_keluarga':
// //         setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
// //         break;
// //       case 'kode':
// //         setFormData(prev => ({ ...prev, kode: newValue }));
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   // Handler untuk membuka virtual keyboard dengan input tertentu
// //   const handleInputFocus = (inputType, currentValue = '') => {
// //     setActiveInput(inputType);
// //     setKeyboardValue(currentValue);
    
// //     // Set nilai awal berdasarkan input type
// //     switch (inputType) {
// //       case 'wbp':
// //         setCurrentInputValue(searchWbp);
// //         break;
// //       case 'pengunjung':
// //         setCurrentInputValue(searchPengunjung);
// //         break;
// //       case 'nama':
// //         setCurrentInputValue(formData.nama);
// //         break;
// //       case 'nik':
// //         setCurrentInputValue(formData.nik);
// //         break;
// //       case 'hp':
// //         setCurrentInputValue(formData.hp);
// //         break;
// //       case 'alamat':
// //         setCurrentInputValue(formData.alamat);
// //         break;
// //       case 'hubungan_keluarga':
// //         setCurrentInputValue(formData.hubungan_keluarga);
// //         break;
// //       case 'kode':
// //         setCurrentInputValue(formData.kode);
// //         break;
// //       default:
// //         setCurrentInputValue('');
// //     }
    
// //     setShowVirtualKeyboard(true);
// //   };

// //   // Fungsi untuk memilih pengunjung dari dropdown
// //   const selectPengunjung = (pengunjung) => {
// //     setSelectedPengunjung(pengunjung);
// //     setFormData({
// //       ...formData,
// //       nama: pengunjung.nama || "",
// //       nik: pengunjung.nik || "",
// //       alamat: pengunjung.alamat || "",
// //       hp: pengunjung.hp || "",
// //       jenis_kelamin: pengunjung.jenis_kelamin || "",
// //       hubungan_keluarga: pengunjung.hubungan_keluarga || "",
// //       kode: pengunjung.kode || "",
// //       tujuan: pengunjung.tujuan || "Berkunjung",
// //     });
    
// //     // Set preview gambar dari data yang sudah ada
// //     if (pengunjung.photo_ktp) {
// //       setPreviewKtp(pengunjung.photo_ktp);
// //       setFormData(prev => ({ ...prev, photo_ktp: pengunjung.photo_ktp }));
// //     }
// //     if (pengunjung.photo_pengunjung) {
// //       setPreviewPengunjung(pengunjung.photo_pengunjung);
// //       setFormData(prev => ({ ...prev, photo_pengunjung: pengunjung.photo_pengunjung }));
// //     }
// //     if (pengunjung.barcode) {
// //       setPreviewBarcode(pengunjung.barcode);
// //       setFormData(prev => ({ ...prev, barcode: pengunjung.barcode }));
// //     }
    
// //     setSearchPengunjung(pengunjung.nama);
// //     setIsPengunjungDropdownOpen(false);
// //     setShowVirtualKeyboard(false);
// //   };

// //   // PERBAIKAN: Fungsi untuk memilih WBP dengan validasi
// //   const selectWbp = (wbp) => {
// //     console.log("WBP dipilih:", wbp); // Debug log
    
// //     // Pastikan wbp_id disimpan dengan benar
// //     setFormData({ 
// //       ...formData, 
// //       wbp_id: wbp.id,
// //       wbp_nama: wbp.nama // Simpan juga nama WBP untuk referensi
// //     });
    
// //     setSearchWbp(wbp.nama);
// //     setIsWbpDropdownOpen(false);
// //     setShowVirtualKeyboard(false);
    
// //     toast.success(`WBP dipilih: ${wbp.nama} (ID: ${wbp.id})`);
// //   };

// //   // Fungsi untuk handle scan barcode pengunjung
// //   const handleScanPengunjung = (data) => {
// //     setSearchPengunjung(data);
// //     setShowScannerPengunjung(false);
    
// //     // Cari pengunjung berdasarkan kode yang di-scan
// //     const pengunjungDitemukan = filteredPengunjung.find(p => p.kode === data);
// //     if (pengunjungDitemukan) {
// //       selectPengunjung(pengunjungDitemukan);
// //       toast.success("Pengunjung ditemukan melalui scan");
// //     } else {
// //       toast.error("Pengunjung tidak ditemukan");
// //     }
// //   };

// //   // PERBAIKAN: Fungsi untuk handle scan barcode WBP
// //   const handleScanWbp = (data) => {
// //     console.log("Data scan WBP:", data);
// //     setShowScannerWbp(false);
    
// //     // Cari WBP berdasarkan ID atau nama yang di-scan
// //     const wbpDitemukan = filteredWbp.find(wbp => {
// //       const matchById = wbp.id.toString() === data;
// //       const matchByNama = wbp.nama?.toLowerCase().includes(data.toLowerCase());
// //       return matchById || matchByNama;
// //     });
    
// //     if (wbpDitemukan) {
// //       selectWbp(wbpDitemukan);
// //       toast.success(`WBP ditemukan: ${wbpDitemukan.nama}`);
// //     } else {
// //       toast.error(`WBP tidak ditemukan dengan data: ${data}`);
// //       // Tetap set search untuk memudahkan pencarian manual
// //       setSearchWbp(data);
// //       setIsWbpDropdownOpen(true);
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target;
// //     const file = files[0];
    
// //     if (file) {
// //       // Validasi tipe file
// //       if (!file.type.startsWith('image/')) {
// //         toast.error("File harus berupa gambar");
// //         return;
// //       }

// //       // Validasi ukuran file (max 5MB)
// //       if (file.size > 5 * 1024 * 1024) {
// //         toast.error("Ukuran file maksimal 5MB");
// //         return;
// //       }

// //       // Simpan file object ke state terpisah
// //       if (name === 'photo_ktp') {
// //         setPhotoKtpFile(file);
// //         setFormData(prev => ({ ...prev, photo_ktp: file }));
// //       } else if (name === 'photo_pengunjung') {
// //         setPhotoPengunjungFile(file);
// //         setFormData(prev => ({ ...prev, photo_pengunjung: file }));
// //       } else if (name === 'barcode') {
// //         setBarcodeFile(file);
// //         setFormData(prev => ({ ...prev, barcode: file }));
// //       }

// //       // Create preview
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         if (name === 'photo_ktp') {
// //           setPreviewKtp(e.target.result);
// //         } else if (name === 'photo_pengunjung') {
// //           setPreviewPengunjung(e.target.result);
// //         } else if (name === 'barcode') {
// //           setPreviewBarcode(e.target.result);
// //         }
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   // Fungsi untuk menghapus foto
// //   const removePhoto = (type) => {
// //     if (type === 'ktp') {
// //       setFormData({ ...formData, photo_ktp: null });
// //       setPreviewKtp(null);
// //       setPhotoKtpFile(null);
// //     } else if (type === 'pengunjung') {
// //       setFormData({ ...formData, photo_pengunjung: null });
// //       setPreviewPengunjung(null);
// //       setPhotoPengunjungFile(null);
// //     } else if (type === 'barcode') {
// //       setFormData({ ...formData, barcode: null });
// //       setPreviewBarcode(null);
// //       setBarcodeFile(null);
// //     }
// //   };

// //   // Fungsi untuk menggunakan foto dari data existing
// //   const handleExistingPhoto = (type) => {
// //     if (!selectedPengunjung) return;
    
// //     if (type === 'ktp' && selectedPengunjung.photo_ktp) {
// //       setFormData({ ...formData, photo_ktp: selectedPengunjung.photo_ktp });
// //       setPreviewKtp(selectedPengunjung.photo_ktp);
// //       setPhotoKtpFile(null);
// //       toast.success("Menggunakan foto KTP dari data existing");
// //     } else if (type === 'pengunjung' && selectedPengunjung.photo_pengunjung) {
// //       setFormData({ ...formData, photo_pengunjung: selectedPengunjung.photo_pengunjung });
// //       setPreviewPengunjung(selectedPengunjung.photo_pengunjung);
// //       setPhotoPengunjungFile(null);
// //       toast.success("Menggunakan foto pengunjung dari data existing");
// //     } else if (type === 'barcode' && selectedPengunjung.barcode) {
// //       setFormData({ ...formData, barcode: selectedPengunjung.barcode });
// //       setPreviewBarcode(selectedPengunjung.barcode);
// //       setBarcodeFile(null);
// //       toast.success("Menggunakan barcode dari data existing");
// //     } else {
// //       toast.error("File tidak tersedia di data existing");
// //     }
// //   };

// //   // Fungsi untuk generate kode otomatis
// //   const generateKode = () => {
// //     const randomKode = Math.random().toString(36).substring(2, 8).toUpperCase();
// //     setFormData({
// //       ...formData,
// //       kode: randomKode
// //     });
// //     toast.success("Kode berhasil digenerate: " + randomKode);
// //   };

// //   // PERBAIKAN: Handle submit dengan validasi WBP
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Validasi WBP
// //     if (!formData.wbp_id) {
// //       setError("Silakan pilih Warga Binaan terlebih dahulu.");
// //       toast.error("WBP belum dipilih!");
// //       return;
// //     }

// //     // Debug info WBP
// //     console.log("WBP ID yang akan dikirim:", formData.wbp_id);
// //     console.log("WBP Nama yang dipilih:", searchWbp);

// //     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id || !formData.kode) {
// //       setError("Pastikan nama, NIK, nomor HP, WBP, dan kode diisi.");
// //       return;
// //     }

// //     setError("");
// //     setIsSubmitting(true);

// //     const formDataToSend = new FormData();
    
// //     // Tambahkan semua field formData ke FormData
// //     for (const key in formData) {
// //       if (formData[key] !== null && formData[key] !== "") {
// //         // Handle file uploads - jika file object, append sebagai file
// //         if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && formData[key] instanceof File) {
// //           formDataToSend.append(key, formData[key]);
// //         } 
// //         // Handle URL strings dari data existing
// //         else if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && typeof formData[key] === 'string') {
// //           formDataToSend.append(key, formData[key]);
// //         }
// //         // Handle field lainnya
// //         else if (key !== 'photo_ktp' && key !== 'photo_pengunjung' && key !== 'barcode') {
// //           formDataToSend.append(key, formData[key]);
// //         }
// //       }
// //     }

// //     // Debug: Log formData sebelum dikirim
// //     console.log("FormData sebelum submit:", formData);
// //     console.log("Photo KTP:", formData.photo_ktp);
// //     console.log("Photo Pengunjung:", formData.photo_pengunjung);
// //     console.log("Barcode:", formData.barcode);

// //     // Debug: Log FormData entries
// //     for (let pair of formDataToSend.entries()) {
// //       console.log(pair[0] + ': ', pair[1]);
// //     }

// //     try {
// //       // Simpan response dari createPengunjung ke state
// //       const createdPengunjung = await createPengunjung(formDataToSend, setError);
      
// //       if (createdPengunjung) {
// //         toast.success("Pengunjung berhasil ditambahkan!");

// //         // Simpan data pengunjung baru ke state
// //         setNewPengunjung(createdPengunjung);
        
// //         // Tampilkan form edit
// //         setShowEditForm(true);

// //         // Reset form
// //         setFormData({
// //           wbp_id: "",
// //           nama: "",
// //           jenis_kelamin: "",
// //           nik: "",
// //           alamat: "",
// //           hp: "",
// //           hubungan_keluarga: "",
// //           tujuan: "Berkunjung",
// //           kode: "",
// //           barcode: null,
// //           pengikut_laki_laki: 0,
// //           pengikut_perempuan: 0,
// //           pengikut_anak_anak: 0,
// //           pengikut_bayi: 0,
// //           total_pengikut: 0,
// //           keterangan: "",
// //           photo_ktp: null,
// //           photo_pengunjung: null,
// //         });
// //         setSelectedPengunjung(null);
// //         setSearchPengunjung("");
// //         setPreviewKtp(null);
// //         setPreviewPengunjung(null);
// //         setPreviewBarcode(null);
// //         setPhotoKtpFile(null);
// //         setPhotoPengunjungFile(null);
// //         setBarcodeFile(null);
// //         setShowVirtualKeyboard(false);
// //       } else {
// //         throw new Error("Gagal mendapatkan response dari server");
// //       }

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
// //     setSearchPengunjung("");
// //     setSelectedPengunjung(null);
// //     setShowVirtualKeyboard(false);
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

// //   // Modal untuk preview gambar besar
// //   const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
// //     if (!isOpen) return null;

// //     return (
// //       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
// //         <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
// //           <div className="flex justify-between items-center p-4 border-b">
// //             <h3 className="text-lg font-semibold">{title}</h3>
// //             <button
// //               onClick={onClose}
// //               className="text-gray-500 hover:text-gray-700"
// //             >
// //               <FaTimes size={24} />
// //             </button>
// //           </div>
// //           <div className="p-4">
// //             <img
// //               src={imageUrl}
// //               alt={title}
// //               className="w-full h-auto max-h-96 object-contain"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Tampilkan form tambah pengunjung
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
// //       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
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
// //             {/* PERBAIKAN: Informasi WBP Terpilih */}
// //             {formData.wbp_id && (
// //               <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg mb-4">
// //                 <p className="text-blue-700 font-medium">
// //                   ✓ WBP Terpilih: <strong>{searchWbp}</strong> (ID: {formData.wbp_id})
// //                 </p>
// //                 <button
// //                   type="button"
// //                   onClick={() => {
// //                     setFormData({ ...formData, wbp_id: "" });
// //                     setSearchWbp("");
// //                   }}
// //                   className="mt-2 text-sm text-red-600 hover:text-red-800"
// //                 >
// //                   ✗ Hapus Pilihan
// //                 </button>
// //               </div>
// //             )}

// //             {/* Pilih WBP dengan scan barcode */}
// //             <div className="relative" ref={dropdownRef}>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
// //               </label>
// //               <div className="flex items-center space-x-2">
// //                 <input
// //                   type="text"
// //                   value={searchWbp}
// //                   onChange={(e) => {
// //                     setSearchWbp(e.target.value);
// //                     setIsWbpDropdownOpen(true);
// //                   }}
// //                   onFocus={() => handleInputFocus('wbp', searchWbp)}
// //                   onTouchStart={() => handleInputFocus('wbp', searchWbp)}
// //                   placeholder="Ketik nama atau ID WBP..."
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                   required
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowScannerWbp(true)}
// //                   className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
// //                   title="Scan Barcode WBP"
// //                 >
// //                   <FaQrcode className="w-5 h-5" />
// //                 </button>
// //               </div>
              
// //               {loadingWbp && (
// //                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
// //                   <div className="flex items-center justify-center">
// //                     <FaSpinner className="animate-spin mr-2" />
// //                     Memuat data WBP...
// //                   </div>
// //                 </div>
// //               )}
              
// //               {isWbpDropdownOpen && filteredWbp.length > 0 && (
// //                 <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto touch-friendly">
// //                   {filteredWbp.map((wbp) => (
// //                     <div
// //                       key={wbp.id}
// //                       onClick={() => selectWbp(wbp)}
// //                       className="p-4 hover:bg-blue-50 cursor-pointer flex items-center border-b border-gray-100 touch-friendly"
// //                     >
// //                       <div className="flex-1">
// //                         <div className="font-medium text-gray-800">{wbp.nama}</div>
// //                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
// //                       </div>
// //                       <FaUser className="ml-2 text-gray-400" />
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Cari Pengunjung yang Sudah Ada dengan scan barcode */}
// //             <div className="relative" ref={dropdownPengunjungRef}>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaUser className="inline-block mr-2" /> Cari Pengunjung (Data Existing)
// //               </label>
// //               <div className="flex items-center space-x-2">
// //                 <input
// //                   type="text"
// //                   value={searchPengunjung}
// //                   onChange={(e) => {
// //                     setSearchPengunjung(e.target.value);
// //                     setIsPengunjungDropdownOpen(true);
// //                   }}
// //                   onFocus={() => handleInputFocus('pengunjung', searchPengunjung)}
// //                   onTouchStart={() => handleInputFocus('pengunjung', searchPengunjung)}
// //                   placeholder="Ketik nama atau NIK pengunjung yang sudah ada..."
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowScannerPengunjung(true)}
// //                   className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
// //                   title="Scan Barcode Pengunjung"
// //                 >
// //                   <FaQrcode className="w-5 h-5" />
// //                 </button>
// //               </div>
              
// //               {isPengunjungDropdownOpen && filteredPengunjung.length > 0 && (
// //                 <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto touch-friendly">
// //                   {filteredPengunjung.map((pengunjung, index) => (
// //                     <div
// //                       key={pengunjung.id || index}
// //                       onClick={() => selectPengunjung(pengunjung)}
// //                       className="p-4 hover:bg-green-50 cursor-pointer flex items-center border-b border-gray-100 touch-friendly"
// //                     >
// //                       <div className="flex-1">
// //                         <div className="font-medium text-gray-800">{pengunjung.nama}</div>
// //                         <div className="text-sm text-gray-600">NIK: {pengunjung.nik}</div>
// //                         <div className="text-sm text-gray-600">HP: {pengunjung.hp}</div>
// //                         <div className="text-sm text-gray-500">Alamat: {pengunjung.alamat}</div>
// //                         <div className="text-sm text-gray-500">Kode: {pengunjung.kode}</div>
// //                       </div>
// //                       <FaUser className="ml-2 text-green-500" />
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Debug info */}
// //               <div className="mt-1 text-xs text-gray-500">
// //                 Menampilkan {filteredPengunjung.length} data pengunjung
// //               </div>
// //             </div>

// //             {/* Informasi Pengunjung Terpilih */}
// //             {selectedPengunjung && (
// //               <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
// //                 <p className="text-green-700 font-medium mb-2">
// //                   ✓ Data pengunjung terpilih:
// //                 </p>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div className="space-y-2">
// //                     <div className="grid grid-cols-2 gap-2 text-sm text-green-600">
// //                       <div><strong>Nama:</strong> {selectedPengunjung.nama}</div>
// //                       <div><strong>NIK:</strong> {selectedPengunjung.nik}</div>
// //                       <div><strong>HP:</strong> {selectedPengunjung.hp}</div>
// //                       <div><strong>Alamat:</strong> {selectedPengunjung.alamat}</div>
// //                       <div><strong>Jenis Kelamin:</strong> {selectedPengunjung.jenis_kelamin}</div>
// //                       <div><strong>Kode:</strong> {selectedPengunjung.kode}</div>
// //                       {selectedPengunjung.hubungan_keluarga && (
// //                         <div><strong>Hubungan:</strong> {selectedPengunjung.hubungan_keluarga}</div>
// //                       )}
// //                     </div>
// //                   </div>
                  
// //                   {/* Foto dari Data Existing */}
// //                   <div className="space-y-3">
// //                     <div className="grid grid-cols-3 gap-2">
// //                       {/* Foto KTP Existing */}
// //                       {selectedPengunjung.photo_ktp && (
// //                         <div className="flex-1">
// //                           <div className="flex justify-between items-center mb-1">
// //                             <span className="text-xs font-medium text-green-700">KTP</span>
// //                             <button
// //                               type="button"
// //                               onClick={() => handleExistingPhoto('ktp')}
// //                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
// //                             >
// //                               Gunakan
// //                             </button>
// //                           </div>
// //                           <div 
// //                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
// //                             onClick={() => setShowModalKtp(true)}
// //                           >
// //                             <img
// //                               src={selectedPengunjung.photo_ktp}
// //                               alt="KTP Existing"
// //                               className="w-full h-16 object-cover rounded"
// //                             />
// //                           </div>
// //                         </div>
// //                       )}
                      
// //                       {/* Foto Pengunjung Existing */}
// //                       {selectedPengunjung.photo_pengunjung && (
// //                         <div className="flex-1">
// //                           <div className="flex justify-between items-center mb-1">
// //                             <span className="text-xs font-medium text-green-700">Foto</span>
// //                             <button
// //                               type="button"
// //                               onClick={() => handleExistingPhoto('pengunjung')}
// //                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
// //                             >
// //                               Gunakan
// //                             </button>
// //                           </div>
// //                           <div 
// //                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
// //                             onClick={() => setShowModalPengunjung(true)}
// //                           >
// //                             <img
// //                               src={selectedPengunjung.photo_pengunjung}
// //                               alt="Pengunjung Existing"
// //                               className="w-full h-16 object-cover rounded"
// //                             />
// //                           </div>
// //                         </div>
// //                       )}

// //                       {/* Barcode Existing */}
// //                       {selectedPengunjung.barcode && (
// //                         <div className="flex-1">
// //                           <div className="flex justify-between items-center mb-1">
// //                             <span className="text-xs font-medium text-green-700">Barcode</span>
// //                             <button
// //                               type="button"
// //                               onClick={() => handleExistingPhoto('barcode')}
// //                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
// //                             >
// //                               Gunakan
// //                             </button>
// //                           </div>
// //                           <div 
// //                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
// //                             onClick={() => setShowModalBarcode(true)}
// //                           >
// //                             <img
// //                               src={selectedPengunjung.barcode}
// //                               alt="Barcode Existing"
// //                               className="w-full h-16 object-cover rounded"
// //                             />
// //                           </div>
// //                         </div>
// //                       )}
// //                     </div>
                    
// //                     {(!selectedPengunjung.photo_ktp || !selectedPengunjung.photo_pengunjung || !selectedPengunjung.barcode) && (
// //                       <div className="text-xs text-green-600 bg-green-100 p-2 rounded">
// //                         <FaCamera className="inline mr-1" />
// //                         File yang tidak tersedia: 
// //                         {!selectedPengunjung.photo_ktp && " KTP"}
// //                         {!selectedPengunjung.photo_pengunjung && " Foto"}
// //                         {!selectedPengunjung.barcode && " Barcode"}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

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
// //                 onFocus={() => handleInputFocus('nama', formData.nama)}
// //                 onTouchStart={() => handleInputFocus('nama', formData.nama)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 required
// //                 inputMode="text"
// //                 autoComplete="name"
// //                 autoCapitalize="words"
// //               />
// //             </div>

// //             {/* Kode */}
// //             <div className="flex space-x-2">
// //               <input
// //                 type="text"
// //                 name="kode"
// //                 value={formData.kode}
// //                 onChange={handleInputChange}
// //                 onFocus={() => handleInputFocus('kode', formData.kode)}
// //                 onTouchStart={() => handleInputFocus('kode', formData.kode)}
// //                 placeholder="Masukkan kode atau generate otomatis"
// //                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 required
// //                 inputMode="text"
// //                 autoComplete="off"
// //                 autoCapitalize="characters"
// //               />
// //               <button
// //                 type="button"
// //                 onClick={generateKode}
// //                 disabled={!!formData.kode}
// //                 className={`px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all touch-friendly ${
// //                   formData.kode 
// //                     ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
// //                     : 'bg-green-600 text-white hover:bg-green-700'
// //                 }`}
// //               >
// //                 Generate
// //               </button>
// //             </div>
// //             <p className="text-xs text-gray-500 mt-1">
// //               Kode unik untuk identifikasi pengunjung
// //             </p>

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
// //                 onFocus={() => handleInputFocus('nik', formData.nik)}
// //                 onTouchStart={() => handleInputFocus('nik', formData.nik)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 required
// //                 inputMode="numeric"
// //                 pattern="[0-9]*"
// //                 autoComplete="on"
// //               />
// //             </div>

// //             {/* Nomor HP */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaPhone className="inline-block mr-2" /> Nomor HP
// //               </label>
// //               <input
// //                 type="tel"
// //                 name="hp"
// //                 value={formData.hp}
// //                 onChange={handleInputChange}
// //                 onFocus={() => handleInputFocus('hp', formData.hp)}
// //                 onTouchStart={() => handleInputFocus('hp', formData.hp)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 required
// //                 inputMode="tel"
// //                 autoComplete="tel"
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
// //                 onFocus={() => handleInputFocus('alamat', formData.alamat)}
// //                 onTouchStart={() => handleInputFocus('alamat', formData.alamat)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 inputMode="text"
// //                 autoComplete="street-address"
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
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //               >
// //                 <option value="">Pilih Jenis Kelamin</option>
// //                 <option value="laki-laki">Laki-laki</option>
// //                 <option value="perempuan">Perempuan</option>
// //               </select>
// //             </div>

// //             {/* Hubungan Keluarga */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <User className="inline-block mr-2" /> Hubungan Keluarga
// //               </label>
// //               <input
// //                 type="text"
// //                 name="hubungan_keluarga"
// //                 value={formData.hubungan_keluarga}
// //                 onChange={handleInputChange}
// //                 onFocus={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
// //                 onTouchStart={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
// //                 placeholder="Contoh: Saudara, Ibu, Ayah, dll."
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 inputMode="text"
// //                 autoComplete="on"
// //               />
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
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 accept="image/*"
// //               />
              
// //               {/* Preview Foto KTP */}
// //               {previewKtp && (
// //                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-sm font-medium text-gray-700">Preview Foto KTP:</span>
// //                     <div className="flex space-x-2">
// //                       <button
// //                         type="button"
// //                         onClick={() => setShowModalKtp(true)}
// //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// //                       >
// //                         <FaEye className="mr-1" /> Lihat Besar
// //                       </button>
// //                       <button
// //                         type="button"
// //                         onClick={() => removePhoto('ktp')}
// //                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
// //                       >
// //                         <FaTimes className="mr-1" /> Hapus
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="flex justify-center">
// //                     <img
// //                       src={previewKtp}
// //                       alt="Preview KTP"
// //                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
// //                       onClick={() => setShowModalKtp(true)}
// //                     />
// //                   </div>
// //                 </div>
// //               )}
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
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 accept="image/*"
// //               />
              
// //               {/* Preview Foto Pengunjung */}
// //               {previewPengunjung && (
// //                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-sm font-medium text-gray-700">Preview Foto Pengunjung:</span>
// //                     <div className="flex space-x-2">
// //                       <button
// //                         type="button"
// //                         onClick={() => setShowModalPengunjung(true)}
// //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// //                       >
// //                         <FaEye className="mr-1" /> Lihat Besar
// //                       </button>
// //                       <button
// //                         type="button"
// //                         onClick={() => removePhoto('pengunjung')}
// //                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
// //                       >
// //                         <FaTimes className="mr-1" /> Hapus
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="flex justify-center">
// //                     <img
// //                       src={previewPengunjung}
// //                       alt="Preview Pengunjung"
// //                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
// //                       onClick={() => setShowModalPengunjung(true)}
// //                     />
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Upload Barcode */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 <FaBarcode className="inline-block mr-2" /> Barcode/QR Code
// //               </label>
// //               <input
// //                 type="file"
// //                 name="barcode"
// //                 onChange={handleFileChange}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 accept="image/*"
// //               />
              
// //               {/* Preview Barcode */}
// //               {previewBarcode && (
// //                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-sm font-medium text-gray-700">Preview Barcode:</span>
// //                     <div className="flex space-x-2">
// //                       <button
// //                         type="button"
// //                         onClick={() => setShowModalBarcode(true)}
// //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// //                       >
// //                         <FaEye className="mr-1" /> Lihat Besar
// //                       </button>
// //                       <button
// //                         type="button"
// //                         onClick={() => removePhoto('barcode')}
// //                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
// //                       >
// //                         <FaTimes className="mr-1" /> Hapus
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="flex justify-center">
// //                     <img
// //                       src={previewBarcode}
// //                       alt="Preview Barcode"
// //                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
// //                       onClick={() => setShowModalBarcode(true)}
// //                     />
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Tombol Submit */}
// //             <button
// //               type="submit"
// //               disabled={isSubmitting}
// //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center touch-friendly text-lg font-semibold shadow-lg"
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

// //       {/* Modal untuk preview gambar besar */}
// //       <ImageModal
// //         isOpen={showModalKtp}
// //         onClose={() => setShowModalKtp(false)}
// //         imageUrl={previewKtp || (selectedPengunjung?.photo_ktp)}
// //         title="Foto KTP"
// //       />
      
// //       <ImageModal
// //         isOpen={showModalPengunjung}
// //         onClose={() => setShowModalPengunjung(false)}
// //         imageUrl={previewPengunjung || (selectedPengunjung?.photo_pengunjung)}
// //         title="Foto Pengunjung"
// //       />

// //       <ImageModal
// //         isOpen={showModalBarcode}
// //         onClose={() => setShowModalBarcode(false)}
// //         imageUrl={previewBarcode || (selectedPengunjung?.barcode)}
// //         title="Barcode/QR Code"
// //       />

// //       {/* Scanner Modal untuk Pengunjung */}
// //       <ScannerModal 
// //         isOpen={showScannerPengunjung}
// //         onClose={() => setShowScannerPengunjung(false)}
// //         onScan={handleScanPengunjung}
// //         title="Scan Barcode Pengunjung"
// //       />

// //       {/* Scanner Modal untuk WBP */}
// //       <ScannerModal 
// //         isOpen={showScannerWbp}
// //         onClose={() => setShowScannerWbp(false)}
// //         onScan={handleScanWbp}
// //         title="Scan Barcode WBP"
// //       />

// //       {/* Virtual Keyboard */}
// //       {showVirtualKeyboard && (
// //         <VirtualKeyboard 
// //           onKeyPress={handleVirtualKeyPress}
// //           onClose={() => setShowVirtualKeyboard(false)}
// //           value={keyboardValue}
// //           activeInput={activeInput}
// //           onInputChange={handleInputUpdate}
// //         />
// //       )}
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
// //     tujuan: newPengunjung.tujuan || "Berkunjung",
// //     kode: newPengunjung.kode || "",
// //     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
// //     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
// //     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
// //     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
// //     total_pengikut: newPengunjung.total_pengikut || 0,
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
  
// //   // State untuk virtual keyboard di form edit
// //   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
// //   const [activeInput, setActiveInput] = useState(null);
// //   const [keyboardValue, setKeyboardValue] = useState('');
  
// //   // State untuk checkbox ambil antrian
// //   const [ambilAntrian, setAmbilAntrian] = useState(false);
// //   const [isAdmin, setIsAdmin] = useState(false);

// //   // State untuk preview gambar yang sudah diupload
// //   const [showModalKtp, setShowModalKtp] = useState(false);
// //   const [showModalPengunjung, setShowModalPengunjung] = useState(false);
// //   const [showModalBarcode, setShowModalBarcode] = useState(false);

// //   const navigate = useNavigate();

// //   // Cek role user saat komponen dimuat
// //   useEffect(() => {
// //     const authUser = JSON.parse(localStorage.getItem('authUser'));
// //     if (authUser && authUser.user && authUser.user.role === 'admin') {
// //       setIsAdmin(true);
// //     }
    
// //     // Hitung total pengikut saat pertama kali komponen dimuat
// //     const initialTotal = calculateTotalPengikut(formData);
// //     setFormData(prev => ({
// //       ...prev,
// //       total_pengikut: initialTotal
// //     }));
// //   }, []);

// //   // Handler untuk virtual keyboard di form edit
// //   const handleVirtualKeyPress = (key) => {
// //     if (key === 'backspace') {
// //       setKeyboardValue(prev => prev.slice(0, -1));
// //       handleInputUpdate('backspace');
// //     } else if (key === 'enter') {
// //       setShowVirtualKeyboard(false);
// //     } else if (key === 'space') {
// //       setKeyboardValue(prev => prev + ' ');
// //       handleInputUpdate(' ');
// //     } else if (key === 'clear') {
// //       setKeyboardValue('');
// //       handleInputUpdate('clear');
// //     } else if (key === 'tab') {
// //       // Switch between inputs
// //     } else {
// //       setKeyboardValue(prev => prev + key);
// //       handleInputUpdate(key);
// //     }
// //   };

// //   // Fungsi untuk langsung update input field dari keyboard di form edit
// //   const handleInputUpdate = (key) => {
// //     let newValue = '';
    
// //     if (key === 'backspace') {
// //       newValue = keyboardValue.slice(0, -1);
// //     } else if (key === 'clear') {
// //       newValue = '';
// //     } else if (key === ' ') {
// //       newValue = keyboardValue + ' ';
// //     } else {
// //       newValue = keyboardValue + key;
// //     }

// //     // Update sesuai dengan input yang aktif
// //     switch (activeInput) {
// //       case 'nama':
// //         setFormData(prev => ({ ...prev, nama: newValue }));
// //         break;
// //       case 'nik':
// //         setFormData(prev => ({ ...prev, nik: newValue }));
// //         break;
// //       case 'hp':
// //         setFormData(prev => ({ ...prev, hp: newValue }));
// //         break;
// //       case 'alamat':
// //         setFormData(prev => ({ ...prev, alamat: newValue }));
// //         break;
// //       case 'hubungan_keluarga':
// //         setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
// //         break;
// //       case 'kode':
// //         setFormData(prev => ({ ...prev, kode: newValue }));
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   // Handler untuk membuka virtual keyboard dengan input tertentu di form edit
// //   const handleInputFocus = (inputType, currentValue = '') => {
// //     setActiveInput(inputType);
// //     setKeyboardValue(currentValue);
// //     setShowVirtualKeyboard(true);
// //   };

// //   // Modal untuk preview gambar besar
// //   const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
// //     if (!isOpen) return null;

// //     return (
// //       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
// //         <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
// //           <div className="flex justify-between items-center p-4 border-b">
// //             <h3 className="text-lg font-semibold">{title}</h3>
// //             <button
// //               onClick={onClose}
// //               className="text-gray-500 hover:text-gray-700"
// //             >
// //               <FaTimes size={24} />
// //             </button>
// //           </div>
// //           <div className="p-4">
// //             <img
// //               src={imageUrl}
// //               alt={title}
// //               className="w-full h-auto max-h-96 object-contain"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Fungsi menghitung total pengikut
// //   const calculateTotalPengikut = (data) => {
// //     const total = 
// //       parseInt(data.pengikut_laki_laki || 0) +
// //       parseInt(data.pengikut_perempuan || 0) +
// //       parseInt(data.pengikut_anak_anak || 0) +
// //       parseInt(data.pengikut_bayi || 0);
// //     return total;
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     const updatedFormData = {
// //       ...formData,
// //       [name]: value,
// //     };
    
// //     // Jika field pengikut diubah, hitung total otomatis
// //     if (name.includes('pengikut_') && name !== 'total_pengikut') {
// //       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //     }
    
// //     setFormData(updatedFormData);
// //   };

// //   console.log("new pengunjung", newPengunjung)

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       await updatePengunjung(newPengunjung.id, formData);
// //       toast.success("Data pengunjung berhasil diperbarui!");
      
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
// //     if (!ambilAntrian && formData.tujuan === "Menitip barang") {
// //       navigate(`/label/${newPengunjung.id}`);
// //     } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
// //       navigate(`/pengunjung/${newPengunjung.id}`);
// //     } else {
// //       navigate('/');
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

// //         {/* Checkbox Ambil Antrian - hanya tampil untuk admin */}
// //         {isAdmin && (
// //           <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded animate-pulse">
// //             <div className="flex justify-between items-center">
// //               <label htmlFor="ambilAntrian" className="ml-2 text-xl font-bold text-yellow-700">
// //                 Ambil Antrian QR Code di Loket
// //               </label>
// //               <input
// //                 type="checkbox"
// //                 id="ambilAntrian"
// //                 checked={ambilAntrian}
// //                 onChange={(e) => setAmbilAntrian(e.target.checked)}
// //                 className="w-8 h-8 text-black font-bold border-4 border-gray-300 rounded focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
// //               /> 
// //             </div>
// //             <div className="mt-2 text-sm text-yellow-600">
// //               <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// //               <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// //             </div>
// //           </div>
// //         )}

// //         {/* <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// //           <p className="text-green-700 font-medium">
// //             ✅ Pengunjung berhasil ditambahkan! Anda dapat mengedit data di bawah ini:
// //           </p>
// //           <div className="mt-2 text-sm text-green-600">
// //             <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
// //             <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
// //           </div>
// //         </div> */}

        
// //         {error && (
// //           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
// //             {error}
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1">
// //           {/* Kolom Kiri */}
// //           {/* <div className="space-y-4">
// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Nama</label>
// //               <input
// //                 type="text"
// //                 name="nama"
// //                 value={formData.nama}
// //                 onChange={handleInputChange}
// //                 onFocus={() => handleInputFocus('nama', formData.nama)}
// //                 onTouchStart={() => handleInputFocus('nama', formData.nama)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-sm font-medium text-gray-700">Kode Pengunjung</label>
// //               <input
// //                 type="text"
// //                 name="kode"
// //                 value={formData.kode}
// //                 onChange={handleInputChange}
// //                 onFocus={() => handleInputFocus('kode', formData.kode)}
// //                 onTouchStart={() => handleInputFocus('kode', formData.kode)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
// //                 readOnly
// //               />
// //               <p className="text-xs text-gray-500 mt-1">
// //                 Kode tidak dapat diubah setelah dibuat
// //               </p>
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
// //                 onFocus={() => handleInputFocus('nik', formData.nik)}
// //                 onTouchStart={() => handleInputFocus('nik', formData.nik)}
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
// //                 onFocus={() => handleInputFocus('alamat', formData.alamat)}
// //                 onTouchStart={() => handleInputFocus('alamat', formData.alamat)}
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
// //                 onFocus={() => handleInputFocus('hp', formData.hp)}
// //                 onTouchStart={() => handleInputFocus('hp', formData.hp)}
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>
// //           </div> */}

// //           {/* Kolom Kanan */}
// //           <div className="space-y-4">
            

// // {/* Pengikut dengan Counter yang Dipercantik */}
// // <div className="space-y-4">
// //   <div className="flex items-center justify-between">
// //     <label className="block text-sm font-medium text-gray-700 flex items-center">
// //       <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// //       </svg>
// //       Jumlah Pengikut
// //     </label>
// //     <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
// //       Total: <span className="font-bold text-purple-600">{formData.total_pengikut}</span>
// //     </div>
// //   </div>

// //   <div className="grid grid-cols-2 gap-4">
// //     {/* Laki-laki */}
// //     <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
// //       <div className="flex items-center justify-between mb-3">
// //         <div className="flex items-center space-x-2">
// //           <span className="text-2xl">👨</span>
// //           <span className="font-semibold text-gray-800">Laki-laki</span>
// //         </div>
// //         <div className="px-3 py-1 bg-white rounded-lg border border-blue-200 shadow-sm">
// //           <span className="text-sm font-bold text-blue-600">
// //             {formData.pengikut_laki_laki}
// //           </span>
// //         </div>
// //       </div>

// //       <div className="flex items-center justify-between space-x-2">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
// //             if (currentValue > 0) {
// //               const updatedFormData = {
// //                 ...formData,
// //                 pengikut_laki_laki: currentValue - 1
// //               };
// //               updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //               setFormData(updatedFormData);
// //             }
// //           }}
// //           className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
// //             parseInt(formData.pengikut_laki_laki) > 0 
// //               ? 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300' 
// //               : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
// //           } focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95`}
// //           disabled={parseInt(formData.pengikut_laki_laki) <= 0}
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
// //             </svg>
// //             <span>Kurang</span>
// //           </div>
// //         </button>

// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_laki_laki: currentValue + 1
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //             </svg>
// //             <span>Tambah</span>
// //           </div>
// //         </button>
// //       </div>

// //       <div className="flex space-x-2 mt-3">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_laki_laki: 0
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           Reset
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_laki_laki: currentValue + 5
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           +5
// //         </button>
// //       </div>
// //     </div>

// //     {/* Perempuan */}
// //     <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
// //       <div className="flex items-center justify-between mb-3">
// //         <div className="flex items-center space-x-2">
// //           <span className="text-2xl">👩</span>
// //           <span className="font-semibold text-gray-800">Perempuan</span>
// //         </div>
// //         <div className="px-3 py-1 bg-white rounded-lg border border-pink-200 shadow-sm">
// //           <span className="text-sm font-bold text-pink-600">
// //             {formData.pengikut_perempuan}
// //           </span>
// //         </div>
// //       </div>

// //       <div className="flex items-center justify-between space-x-2">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_perempuan) || 0;
// //             if (currentValue > 0) {
// //               const updatedFormData = {
// //                 ...formData,
// //                 pengikut_perempuan: currentValue - 1
// //               };
// //               updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //               setFormData(updatedFormData);
// //             }
// //           }}
// //           className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
// //             parseInt(formData.pengikut_perempuan) > 0 
// //               ? 'bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300' 
// //               : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
// //           } focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95`}
// //           disabled={parseInt(formData.pengikut_perempuan) <= 0}
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
// //             </svg>
// //             <span>Kurang</span>
// //           </div>
// //         </button>

// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_perempuan) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_perempuan: currentValue + 1
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95"
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //             </svg>
// //             <span>Tambah</span>
// //           </div>
// //         </button>
// //       </div>

// //       <div className="flex space-x-2 mt-3">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_perempuan: 0
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           Reset
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_perempuan) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_perempuan: currentValue + 5
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           +5
// //         </button>
// //       </div>
// //     </div>

// //     {/* Anak-anak */}
// //     <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
// //       <div className="flex items-center justify-between mb-3">
// //         <div className="flex items-center space-x-2">
// //           <span className="text-2xl">🧒</span>
// //           <span className="font-semibold text-gray-800">Anak-anak</span>
// //         </div>
// //         <div className="px-3 py-1 bg-white rounded-lg border border-green-200 shadow-sm">
// //           <span className="text-sm font-bold text-green-600">
// //             {formData.pengikut_anak_anak}
// //           </span>
// //         </div>
// //       </div>

// //       <div className="flex items-center justify-between space-x-2">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
// //             if (currentValue > 0) {
// //               const updatedFormData = {
// //                 ...formData,
// //                 pengikut_anak_anak: currentValue - 1
// //               };
// //               updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //               setFormData(updatedFormData);
// //             }
// //           }}
// //           className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
// //             parseInt(formData.pengikut_anak_anak) > 0 
// //               ? 'bg-white text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-300' 
// //               : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
// //           } focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95`}
// //           disabled={parseInt(formData.pengikut_anak_anak) <= 0}
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
// //             </svg>
// //             <span>Kurang</span>
// //           </div>
// //         </button>

// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_anak_anak: currentValue + 1
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95"
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //             </svg>
// //             <span>Tambah</span>
// //           </div>
// //         </button>
// //       </div>

// //       <div className="flex space-x-2 mt-3">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_anak_anak: 0
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           Reset
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_anak_anak: currentValue + 5
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           +5
// //         </button>
// //       </div>
// //     </div>

// //     {/* Bayi */}
// //     <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
// //       <div className="flex items-center justify-between mb-3">
// //         <div className="flex items-center space-x-2">
// //           <span className="text-2xl">👶</span>
// //           <span className="font-semibold text-gray-800">Bayi</span>
// //         </div>
// //         <div className="px-3 py-1 bg-white rounded-lg border border-purple-200 shadow-sm">
// //           <span className="text-sm font-bold text-purple-600">
// //             {formData.pengikut_bayi}
// //           </span>
// //         </div>
// //       </div>

// //       <div className="flex items-center justify-between space-x-2">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_bayi) || 0;
// //             if (currentValue > 0) {
// //               const updatedFormData = {
// //                 ...formData,
// //                 pengikut_bayi: currentValue - 1
// //               };
// //               updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //               setFormData(updatedFormData);
// //             }
// //           }}
// //           className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
// //             parseInt(formData.pengikut_bayi) > 0 
// //               ? 'bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300' 
// //               : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
// //           } focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95`}
// //           disabled={parseInt(formData.pengikut_bayi) <= 0}
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
// //             </svg>
// //             <span>Kurang</span>
// //           </div>
// //         </button>

// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_bayi) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_bayi: currentValue + 1
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
// //         >
// //           <div className="flex items-center justify-center space-x-1">
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //             </svg>
// //             <span>Tambah</span>
// //           </div>
// //         </button>
// //       </div>

// //       <div className="flex space-x-2 mt-3">
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_bayi: 0
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           Reset
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => {
// //             const currentValue = parseInt(formData.pengikut_bayi) || 0;
// //             const updatedFormData = {
// //               ...formData,
// //               pengikut_bayi: currentValue + 5
// //             };
// //             updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
// //             setFormData(updatedFormData);
// //           }}
// //           className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //         >
// //           +5
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // </div>

// // {/* Total Pengikut yang Dipercantik */}
// // <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-2 shadow-lg">
// //   <div className="text-center">
// //     <div className="flex items-center justify-center space-x-2 mb-1">
// //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// //       </svg>
// //       <h3 className="text-lg font-semibold">Total Pengikut</h3>
// //     </div>
// //     <div className="text-4xl font-bold mb-2">
// //       {formData.total_pengikut} <span className="text-2xl">Orang</span>
// //     </div>
// //     {/* <div className="text-emerald-100 text-sm bg-white bg-opacity-20 rounded-lg p-2">
// //       <div className="grid grid-cols-2 gap-1">
// //         <div>👨 Laki-laki: <span className="font-bold">{formData.pengikut_laki_laki}</span></div>
// //         <div>👩 Perempuan: <span className="font-bold">{formData.pengikut_perempuan}</span></div>
// //         <div>🧒 Anak-anak: <span className="font-bold">{formData.pengikut_anak_anak}</span></div>
// //         <div>👶 Bayi: <span className="font-bold">{formData.pengikut_bayi}</span></div>
// //       </div>
// //     </div> */}
// //   </div>
// // </div>

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
// //         </form>

// //         <button
// //           onClick={() => setIsModalOpen(true)}
// //           className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
// //         >
// //           + Tambah Barang Titipan
// //         </button>

// //         {/* Modal CreateBarangTitipan */}
// //         <CreateBarangTitipanModal
// //           isOpen={isModalOpen}
// //           onClose={() => setIsModalOpen(false)}
// //           pengunjungs={newPengunjung}
// //         />

// //         <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
// //           <p className="text-blue-700 text-sm">
// //             <strong>Catatan:</strong> Data pengunjung telah berhasil disimpan. Anda dapat mengedit data di atas jika diperlukan, atau klik "Selesai" untuk menutup form.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Modal untuk preview gambar besar */}
// //       <ImageModal
// //         isOpen={showModalKtp}
// //         onClose={() => setShowModalKtp(false)}
// //         imageUrl={newPengunjung.photo_ktp}
// //         title="Foto KTP"
// //       />
      
// //       <ImageModal
// //         isOpen={showModalPengunjung}
// //         onClose={() => setShowModalPengunjung(false)}
// //         imageUrl={newPengunjung.photo_pengunjung}
// //         title="Foto Pengunjung"
// //       />

// //       <ImageModal
// //         isOpen={showModalBarcode}
// //         onClose={() => setShowModalBarcode(false)}
// //         imageUrl={newPengunjung.barcode}
// //         title="Barcode/QR Code"
// //       />

// //       {/* Virtual Keyboard untuk form edit */}
// //       {showVirtualKeyboard && (
// //         <VirtualKeyboard 
// //           onKeyPress={handleVirtualKeyPress}
// //           onClose={() => setShowVirtualKeyboard(false)}
// //           value={keyboardValue}
// //           activeInput={activeInput}
// //           onInputChange={handleInputUpdate}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default AddPengunjungForm;


// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-hot-toast";
// import useDataStore from "../../store/useDataStore";
// import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon, FaTimes, FaEye, FaCamera, FaBarcode, FaSearch, FaKeyboard } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { User } from "lucide-react";
// import CreateBarangTitipanModal from "../UpdatePengunjung/CreateBarangTitipanModal";

// // Komponen BarcodeScanner untuk AddPengunjungForm
// const BarcodeScanner = ({ onScan, onClose }) => {
//   useEffect(() => {
//     // Dynamically import html5-qrcode
//     import('html5-qrcode').then(({ Html5QrcodeScanner }) => {
//       const scanner = new Html5QrcodeScanner('qr-reader', {
//         qrbox: {
//           width: 250,
//           height: 250,
//         },
//         fps: 10,
//         rememberLastUsedCamera: true,
//         supportedScanTypes: null,
//       });

//       let isScanning = true;

//       const onScanSuccess = (decodedText) => {
//         if (isScanning) {
//           onScan(decodedText);
//           scanner.clear().then(() => {
//             console.log("Scanner cleared successfully");
//           }).catch((err) => {
//             console.warn("Error clearing scanner:", err);
//           });
//           onClose();
//           isScanning = false;
//         }
//       };

//       const onScanError = (error) => {
//         if (error && !error.message?.includes('NotFoundException')) {
//           console.warn("Scan error:", error);
//         }
//       };

//       setTimeout(() => {
//         if (isScanning) {
//           scanner.render(onScanSuccess, onScanError);
//         }
//       }, 100);

//       return () => {
//         isScanning = false;
//         setTimeout(() => {
//           scanner.clear().catch((err) => {
//             console.warn("Error in cleanup:", err);
//           });
//         }, 100);
//       };
//     }).catch((error) => {
//       console.error("Failed to load html5-qrcode:", error);
//       onClose();
//     });

//   }, [onScan, onClose]);

//   return (
//     <div className="text-center">
//       <div className="mb-4">
//         <p className="text-gray-600">Arahkan kamera ke barcode</p>
//       </div>
//       <div id="qr-reader" className="mx-auto" style={{ width: '100%', maxWidth: '300px' }}></div>
//       <button 
//         onClick={onClose}
//         className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
//       >
//         Tutup Scanner
//       </button>
//     </div>
//   );
// };

// // Komponen ScannerModal untuk AddPengunjungForm
// const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//       }, 100);
//       return () => clearTimeout(timer);
//     } else {
//       setIsVisible(false);
//     }
//   }, [isOpen]);

//   const handleScan = (decodedText) => {
//     onScan(decodedText);
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(() => {
//       onClose();
//     }, 200);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-gray-800">{title}</h2>
//           <button
//             onClick={handleClose}
//             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//           >
//             <FaTimes className="w-6 h-6" />
//           </button>
//         </div>
        
//         {isVisible && (
//           <BarcodeScanner onScan={handleScan} onClose={handleClose} />
//         )}
//       </div>
//     </div>
//   );
// };

// // Komponen Virtual Keyboard yang Dapat Digeser - Hanya untuk PC
// const VirtualKeyboard = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
//   const [isShift, setIsShift] = useState(false);
//   const [isSymbol, setIsSymbol] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
//   const [isPc, setIsPc] = useState(false);
//   const keyboardRef = useRef(null);
//   const containerRef = useRef(null);

//   const alphaRows = [
//     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
//     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
//     ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
//   ];

//   const symbolRows = [
//     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//     ['-', '_', '@', '#', '$', '%', '&', '*', '(', ')'],
//     ['.', ',', '!', '?', ':', ';', '"', "'"],
//   ];

//   const currentRows = isSymbol ? symbolRows : alphaRows;

//   // Deteksi perangkat saat komponen dimuat
//   useEffect(() => {
//     const checkDevice = () => {
//       const userAgent = navigator.userAgent.toLowerCase();
//       const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
//       const isTablet = /tablet|ipad/i.test(userAgent);
//       const isPcDevice = !isMobile && !isTablet;
      
//       setIsPc(isPcDevice);
//     };

//     checkDevice();
//   }, []);

//   // Handle drag start - untuk mouse dan touch
//   const handleDragStart = (clientX, clientY) => {
//     if (!keyboardRef.current) return;
    
//     setIsDragging(true);
//     const rect = keyboardRef.current.getBoundingClientRect();
    
//     setDragOffset({
//       x: clientX - rect.left,
//       y: clientY - rect.top
//     });
//   };

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     handleDragStart(e.clientX, e.clientY);
//   };

//   const handleTouchStart = (e) => {
//     const touch = e.touches[0];
//     handleDragStart(touch.clientX, touch.clientY);
//   };

//   // Handle drag movement - untuk mouse dan touch
//   const handleDragMove = (clientX, clientY) => {
//     if (!isDragging || !keyboardRef.current) return;
    
//     const newX = clientX - dragOffset.x;
//     const newY = clientY - dragOffset.y;
    
//     // Boundary checks untuk menjaga keyboard tetap dalam viewport
//     const keyboardWidth = keyboardRef.current.offsetWidth;
//     const keyboardHeight = keyboardRef.current.offsetHeight;
//     const maxX = window.innerWidth - keyboardWidth;
//     const maxY = window.innerHeight - keyboardHeight;
    
//     setPosition({
//       x: Math.max(10, Math.min(newX, maxX - 10)), // Beri margin 10px
//       y: Math.max(10, Math.min(newY, maxY - 10))
//     });
//   };

//   const handleMouseMove = (e) => {
//     handleDragMove(e.clientX, e.clientY);
//   };

//   const handleTouchMove = (e) => {
//     const touch = e.touches[0];
//     handleDragMove(touch.clientX, touch.clientY);
//     e.preventDefault(); // Mencegah scroll saat drag
//   };

//   // Handle drag end
//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   // Event listeners untuk drag
//   useEffect(() => {
//     if (isDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleDragEnd);
//       document.addEventListener('touchmove', handleTouchMove, { passive: false });
//       document.addEventListener('touchend', handleDragEnd);
//       document.addEventListener('touchcancel', handleDragEnd);
      
//       // Tambahkan styles untuk mencegah scroll dan selection
//       document.body.style.overflow = 'hidden';
//       document.body.style.userSelect = 'none';
//       document.body.style.webkitUserSelect = 'none';
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleDragEnd);
//       document.removeEventListener('touchmove', handleTouchMove);
//       document.removeEventListener('touchend', handleDragEnd);
//       document.removeEventListener('touchcancel', handleDragEnd);
      
//       // Kembalikan styles
//       document.body.style.overflow = '';
//       document.body.style.userSelect = '';
//       document.body.style.webkitUserSelect = '';
//     };
//   }, [isDragging, dragOffset]);

//   // Efek untuk mengatur posisi awal keyboard di tengah bawah
//   useEffect(() => {
//     if (!isPc) return;

//     const updateInitialPosition = () => {
//       if (keyboardRef.current) {
//         const keyboardWidth = keyboardRef.current.offsetWidth;
//         const keyboardHeight = keyboardRef.current.offsetHeight;
        
//         setPosition({
//           x: (window.innerWidth - keyboardWidth) / 2,
//           y: window.innerHeight - keyboardHeight - 20 // 20px dari bawah
//         });
//       }
//     };

//     // Tunggu sampai DOM siap
//     setTimeout(updateInitialPosition, 100);
    
//     // Update posisi saat window resize
//     window.addEventListener('resize', updateInitialPosition);
//     return () => window.removeEventListener('resize', updateInitialPosition);
//   }, [isPc]);

//   const handleKeyClick = (key) => {
//     const finalKey = isShift ? key.toUpperCase() : key;
//     onKeyPress(finalKey);
//     if (onInputChange) {
//       onInputChange(finalKey);
//     }
//   };

//   const handleSpecialKey = (action) => {
//     switch (action) {
//       case 'shift':
//         setIsShift(!isShift);
//         break;
//       case 'symbol':
//         setIsSymbol(!isSymbol);
//         setIsShift(false);
//         break;
//       case 'space':
//         onKeyPress(' ');
//         if (onInputChange) onInputChange(' ');
//         break;
//       case 'backspace':
//         onKeyPress('backspace');
//         if (onInputChange) onInputChange('backspace');
//         break;
//       case 'enter':
//         onKeyPress('enter');
//         break;
//       case 'clear':
//         onKeyPress('clear');
//         if (onInputChange) onInputChange('clear');
//         break;
//       case 'tab':
//         onKeyPress('tab');
//         break;
//       default:
//         break;
//     }
//   };

//   const getInputLabel = () => {
//     switch (activeInput) {
//       case 'wbp':
//         return 'Cari Warga Binaan';
//       case 'pengunjung':
//         return 'Cari Pengunjung';
//       case 'nama':
//         return 'Input Nama';
//       case 'nik':
//         return 'Input NIK';
//       case 'hp':
//         return 'Input Nomor HP';
//       case 'alamat':
//         return 'Input Alamat';
//       case 'hubungan_keluarga':
//         return 'Input Hubungan Keluarga';
//       case 'kode':
//         return 'Input Kode';
//       case 'tujuan':
//         return 'Pilih Tujuan';
//       default:
//         return 'Virtual Keyboard';
//     }
//   };

//   // Jika bukan PC, jangan render keyboard virtual
//   if (!isPc) {
//     return null;
//   }

//   return (
//     <div 
//       ref={containerRef}
//       className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none"
//       style={{ touchAction: 'none' }}
//     >
//       <div 
//         ref={keyboardRef}
//         className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl transform transition-all duration-300 pointer-events-auto border border-white border-opacity-20"
//         style={{
//           position: 'fixed',
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           cursor: isDragging ? 'grabbing' : 'grab',
//           touchAction: 'none',
//           zIndex: 1000,
//           width: '35vw', // 25% dari lebar viewport
//           minWidth: '500px', // Minimum width
//           maxWidth: '600px', // Maximum width
//         }}
//       >
//         {/* Draggable Header dengan indikator yang jelas */}
//         <div 
//           className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl p-4 text-white cursor-grab active:cursor-grabbing touch-none"
//           onMouseDown={handleMouseDown}
//           onTouchStart={handleTouchStart}
//           style={{ touchAction: 'none' }}
//         >
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <FaKeyboard className="w-6 h-6" />
//               <div>
//                 <h3 className="font-bold text-lg">{getInputLabel()}</h3>
//                 <p className="text-blue-100 text-sm flex items-center">
//                   <span className="inline-block w-3 h-3 bg-white bg-opacity-50 rounded-full mr-1 animate-pulse"></span>
//                   Drag untuk memindahkan • Gunakan keyboard virtual
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
//               style={{ touchAction: 'manipulation' }}
//             >
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>
          
//           {/* Indikator drag area */}
//           <div className="mt-2 flex justify-center">
//             <div className="w-20 h-1 bg-white bg-opacity-50 rounded-full"></div>
//           </div>
//         </div>

//         {/* Preview Area */}
//         <div className="p-4 bg-gray-50 bg-opacity-50 border-b">
//           <div className="bg-white bg-opacity-70 rounded-xl p-4 shadow-inner border">
//             <div className="text-sm text-gray-500 mb-2 flex justify-between">
//               <span>Input Preview:</span>
//               <span className="text-blue-500 font-medium">{value.length} karakter</span>
//             </div>
//             <div className="text-lg font-mono min-h-[28px] p-2 bg-gray-50 bg-opacity-50 rounded-lg border-2 border-blue-200">
//               {value || <span className="text-gray-400">Ketik menggunakan keyboard virtual...</span>}
//               <span className="ml-1 animate-pulse text-blue-500">|</span>
//             </div>
//           </div>
//         </div>

//         {/* Keyboard Layout */}
//         <div className="p-4" style={{ touchAction: 'manipulation' }}>
//           {/* Main Keyboard */}
//           {currentRows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex justify-center mb-2 space-x-1">
//               {row.map((key) => (
//                 <button
//                   key={key}
//                   onClick={() => handleKeyClick(key)}
//                   className="flex-1 max-w-[60px] h-14 bg-white bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 active:scale-95 transition-all duration-150 font-medium text-gray-700 touch-friendly shadow-sm"
//                   style={{ 
//                     minWidth: '44px',
//                     minHeight: '44px',
//                     touchAction: 'manipulation'
//                   }}
//                 >
//                   {isShift && !isSymbol ? key.toUpperCase() : key}
//                 </button>
//               ))}
//             </div>
//           ))}

//           {/* Bottom Control Row */}
//           <div className="flex justify-center space-x-1 mt-4">
//             {/* Shift Button */}
//             <button
//               onClick={() => handleSpecialKey('shift')}
//               className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
//                 isShift 
//                   ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
//                   : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
//               }`}
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               ⇧ SHIFT
//             </button>

//             {/* Symbol Toggle */}
//             <button
//               onClick={() => handleSpecialKey('symbol')}
//               className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
//                 isSymbol 
//                   ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
//                   : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
//               }`}
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               {isSymbol ? 'ABC' : '123'}
//             </button>

//             {/* Space Button */}
//             <button
//               onClick={() => handleSpecialKey('space')}
//               className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               SPACE
//             </button>

//             {/* Backspace Button */}
//             <button
//               onClick={() => handleSpecialKey('backspace')}
//               className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               ⌫ DELETE
//             </button>
//           </div>

//           {/* Action Buttons Row */}
//           <div className="flex justify-center space-x-2 mt-3">
//             <button
//               onClick={() => handleSpecialKey('clear')}
//               className="flex-1 max-w-[140px] h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all touch-friendly font-medium border-2 border-orange-600"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               🗑️ CLEAR
//             </button>
            
//             <button
//               onClick={() => handleSpecialKey('enter')}
//               className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               ↵ ENTER
//             </button>
//           </div>
//         </div>

//         {/* Footer dengan tips */}
//         <div className="bg-gray-50 bg-opacity-50 rounded-b-2xl p-3 border-t">
//           <div className="text-center text-sm text-gray-500">
//             💡 Tips: Drag header untuk memindahkan • SHIFT untuk huruf kapital • 123 untuk simbol
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
//     kode: "",
//     barcode: null,
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

//   // State baru untuk dropdown pengunjung
//   const [searchPengunjung, setSearchPengunjung] = useState("");
//   const [isPengunjungDropdownOpen, setIsPengunjungDropdownOpen] = useState(false);
//   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
//   const dropdownPengunjungRef = useRef(null);

//   // State baru untuk preview gambar
//   const [previewKtp, setPreviewKtp] = useState(null);
//   const [previewPengunjung, setPreviewPengunjung] = useState(null);
//   const [previewBarcode, setPreviewBarcode] = useState(null);
//   const [showModalKtp, setShowModalKtp] = useState(false);
//   const [showModalPengunjung, setShowModalPengunjung] = useState(false);
//   const [showModalBarcode, setShowModalBarcode] = useState(false);

//   // State untuk file objects
//   const [photoKtpFile, setPhotoKtpFile] = useState(null);
//   const [photoPengunjungFile, setPhotoPengunjungFile] = useState(null);
//   const [barcodeFile, setBarcodeFile] = useState(null);

//   // State baru untuk menampung data pengunjung yang baru dibuat
//   const [newPengunjung, setNewPengunjung] = useState(null);
//   const [showEditForm, setShowEditForm] = useState(false);

//   // State untuk scanner
//   const [showScannerPengunjung, setShowScannerPengunjung] = useState(false);
//   const [showScannerWbp, setShowScannerWbp] = useState(false);

//   // State untuk virtual keyboard
//   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [keyboardValue, setKeyboardValue] = useState('');
//   const [currentInputValue, setCurrentInputValue] = useState('');

//   // State untuk loading WBP
//   const [loadingWbp, setLoadingWbp] = useState(false);

//   // State untuk deteksi perangkat
//   const [isPc, setIsPc] = useState(false);

//   // Deteksi perangkat saat komponen dimuat
//   useEffect(() => {
//     const checkDevice = () => {
//       const userAgent = navigator.userAgent.toLowerCase();
//       const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
//       const isTablet = /tablet|ipad/i.test(userAgent);
//       const isPcDevice = !isMobile && !isTablet;
      
//       setIsPc(isPcDevice);
//     };

//     checkDevice();
//   }, []);

//   // Fetch data WBP dan Pengunjung saat komponen dimuat
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoadingWbp(true);
//       try {
//         await fetchWbpList();
//         await fetchPengunjungData();
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         toast.error("Gagal memuat data");
//       } finally {
//         setLoadingWbp(false);
//       }
//     };
    
//     fetchData();
//   }, [fetchWbpList, fetchPengunjungData]);

//   // Debug data WBP
//   useEffect(() => {
//     console.log("WBP List dari API:", wbpList);
//     console.log("WBP List length:", wbpList?.length);
//   }, [wbpList]);

//   // Debug formData WBP
//   useEffect(() => {
//     console.log("FormData WBP ID:", formData.wbp_id);
//     console.log("Search WBP:", searchWbp);
//   }, [formData.wbp_id, searchWbp]);

//   // Handle click outside untuk dropdown pengunjung
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownPengunjungRef.current && !dropdownPengunjungRef.current.contains(event.target)) {
//         setIsPengunjungDropdownOpen(false);
//       }
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsWbpDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Filter data pengunjung untuk dropdown - Handle case ketika pengunjungData bukan array
//   const filteredPengunjung = (() => {
//     const dataArray = Array.isArray(pengunjungData) 
//       ? pengunjungData 
//       : (pengunjungData && typeof pengunjungData === 'object' ? [pengunjungData] : []);
    
//     console.log("Data array untuk filter:", dataArray);
    
//     const authUser = JSON.parse(localStorage.getItem('authUser'));
//     const isAdmin = authUser && authUser.user && authUser.user.role === 'admin';
    
//     return dataArray.filter((pengunjung) => {
//       if (isAdmin) {
//         // Admin bisa melihat semua data dengan filter
//         return (
//           pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
//           pengunjung.nik?.includes(searchPengunjung) ||
//           pengunjung.hp?.includes(searchPengunjung) ||
//           pengunjung.kode?.includes(searchPengunjung)
//         );
//       } else {
//         // User biasa hanya bisa melihat data miliknya sendiri
//         const userNik = authUser?.user?.nik;
//         const userNama = authUser?.user?.nama;
//         const userHp = authUser?.user?.hp;
        
//         // Cek apakah data ini milik user yang login
//         const isUserData = 
//           pengunjung.nik === userNik || 
//           pengunjung.nama === userNama ||
//           pengunjung.hp === userHp;
        
//         if (!isUserData) return false;
        
//         // Jika ada pencarian, filter juga berdasarkan pencarian
//         if (searchPengunjung) {
//           return (
//             pengunjung.nama?.toLowerCase().includes(searchPengunjung?.toLowerCase()) ||
//             pengunjung.nik?.includes(searchPengunjung) ||
//             pengunjung.hp?.includes(searchPengunjung) ||
//             pengunjung.kode?.includes(searchPengunjung)
//           );
//         }
        
//         return true;
//       }
//     });
//   })();

//   // Filter WBP list dengan handling data tunggal juga
//   const filteredWbp = (() => {
//     if (!wbpList) return [];
    
//     const dataArray = Array.isArray(wbpList) 
//       ? wbpList 
//       : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
//     console.log("Data WBP untuk filter:", dataArray);
    
//     return dataArray.filter((wbp) => {
//       const searchTerm = searchWbp?.toLowerCase() || '';
//       const namaMatch = wbp.nama?.toLowerCase().includes(searchTerm);
//       const idMatch = wbp.id?.toString().includes(searchTerm);
      
//       return namaMatch || idMatch;
//     });
//   })();

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

//   // Handler untuk virtual keyboard - hanya untuk PC
//   const handleVirtualKeyPress = (key) => {
//     if (key === 'backspace') {
//       setKeyboardValue(prev => prev.slice(0, -1));
//       handleInputUpdate('backspace');
//     } else if (key === 'enter') {
//       setShowVirtualKeyboard(false);
//     } else if (key === 'space') {
//       setKeyboardValue(prev => prev + ' ');
//       handleInputUpdate(' ');
//     } else if (key === 'clear') {
//       setKeyboardValue('');
//       handleInputUpdate('clear');
//     } else if (key === 'tab') {
//       // Switch between inputs - bisa diimplementasikan nanti
//     } else {
//       setKeyboardValue(prev => prev + key);
//       handleInputUpdate(key);
//     }
//   };

//   // Fungsi untuk langsung update input field dari keyboard
//   const handleInputUpdate = (key) => {
//     let newValue = '';
    
//     if (key === 'backspace') {
//       newValue = keyboardValue.slice(0, -1);
//     } else if (key === 'clear') {
//       newValue = '';
//     } else if (key === ' ') {
//       newValue = keyboardValue + ' ';
//     } else {
//       newValue = keyboardValue + key;
//     }

//     // Update sesuai dengan input yang aktif
//     switch (activeInput) {
//       case 'wbp':
//         setSearchWbp(newValue);
//         if (newValue.length > 0) {
//           setIsWbpDropdownOpen(true);
//         }
//         break;
//       case 'pengunjung':
//         setSearchPengunjung(newValue);
//         if (newValue.length > 0) {
//           setIsPengunjungDropdownOpen(true);
//         }
//         break;
//       case 'nama':
//         setFormData(prev => ({ ...prev, nama: newValue }));
//         break;
//       case 'nik':
//         setFormData(prev => ({ ...prev, nik: newValue }));
//         break;
//       case 'hp':
//         setFormData(prev => ({ ...prev, hp: newValue }));
//         break;
//       case 'alamat':
//         setFormData(prev => ({ ...prev, alamat: newValue }));
//         break;
//       case 'hubungan_keluarga':
//         setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
//         break;
//       case 'kode':
//         setFormData(prev => ({ ...prev, kode: newValue }));
//         break;
//       default:
//         break;
//     }
//   };

//   // Handler untuk membuka virtual keyboard dengan input tertentu - hanya untuk PC
//   const handleInputFocus = (inputType, currentValue = '') => {
//     // Hanya tampilkan virtual keyboard jika perangkat adalah PC
//     if (!isPc) return;
    
//     setActiveInput(inputType);
//     setKeyboardValue(currentValue);
    
//     // Set nilai awal berdasarkan input type
//     switch (inputType) {
//       case 'wbp':
//         setCurrentInputValue(searchWbp);
//         break;
//       case 'pengunjung':
//         setCurrentInputValue(searchPengunjung);
//         break;
//       case 'nama':
//         setCurrentInputValue(formData.nama);
//         break;
//       case 'nik':
//         setCurrentInputValue(formData.nik);
//         break;
//       case 'hp':
//         setCurrentInputValue(formData.hp);
//         break;
//       case 'alamat':
//         setCurrentInputValue(formData.alamat);
//         break;
//       case 'hubungan_keluarga':
//         setCurrentInputValue(formData.hubungan_keluarga);
//         break;
//       case 'kode':
//         setCurrentInputValue(formData.kode);
//         break;
//       default:
//         setCurrentInputValue('');
//     }
    
//     setShowVirtualKeyboard(true);
//   };

//   // Fungsi untuk memilih pengunjung dari dropdown
//   const selectPengunjung = (pengunjung) => {
//     setSelectedPengunjung(pengunjung);
//     setFormData({
//       ...formData,
//       nama: pengunjung.nama || "",
//       nik: pengunjung.nik || "",
//       alamat: pengunjung.alamat || "",
//       hp: pengunjung.hp || "",
//       jenis_kelamin: pengunjung.jenis_kelamin || "",
//       hubungan_keluarga: pengunjung.hubungan_keluarga || "",
//       kode: pengunjung.kode || "",
//       tujuan: pengunjung.tujuan || "Berkunjung",
//     });
    
//     // Set preview gambar dari data yang sudah ada
//     if (pengunjung.photo_ktp) {
//       setPreviewKtp(pengunjung.photo_ktp);
//       setFormData(prev => ({ ...prev, photo_ktp: pengunjung.photo_ktp }));
//     }
//     if (pengunjung.photo_pengunjung) {
//       setPreviewPengunjung(pengunjung.photo_pengunjung);
//       setFormData(prev => ({ ...prev, photo_pengunjung: pengunjung.photo_pengunjung }));
//     }
//     if (pengunjung.barcode) {
//       setPreviewBarcode(pengunjung.barcode);
//       setFormData(prev => ({ ...prev, barcode: pengunjung.barcode }));
//     }
    
//     setSearchPengunjung(pengunjung.nama);
//     setIsPengunjungDropdownOpen(false);
//     setShowVirtualKeyboard(false);
//   };

//   // PERBAIKAN: Fungsi untuk memilih WBP dengan validasi
//   const selectWbp = (wbp) => {
//     console.log("WBP dipilih:", wbp); // Debug log
    
//     // Pastikan wbp_id disimpan dengan benar
//     setFormData({ 
//       ...formData, 
//       wbp_id: wbp.id,
//       wbp_nama: wbp.nama // Simpan juga nama WBP untuk referensi
//     });
    
//     setSearchWbp(wbp.nama);
//     setIsWbpDropdownOpen(false);
//     setShowVirtualKeyboard(false);
    
//     toast.success(`WBP dipilih: ${wbp.nama} (ID: ${wbp.id})`);
//   };

//   // Fungsi untuk handle scan barcode pengunjung
//   const handleScanPengunjung = (data) => {
//     setSearchPengunjung(data);
//     setShowScannerPengunjung(false);
    
//     // Cari pengunjung berdasarkan kode yang di-scan
//     const pengunjungDitemukan = filteredPengunjung.find(p => p.kode === data);
//     if (pengunjungDitemukan) {
//       selectPengunjung(pengunjungDitemukan);
//       toast.success("Pengunjung ditemukan melalui scan");
//     } else {
//       toast.error("Pengunjung tidak ditemukan");
//     }
//   };

//   // PERBAIKAN: Fungsi untuk handle scan barcode WBP
//   const handleScanWbp = (data) => {
//     console.log("Data scan WBP:", data);
//     setShowScannerWbp(false);
    
//     // Cari WBP berdasarkan ID atau nama yang di-scan
//     const wbpDitemukan = filteredWbp.find(wbp => {
//       const matchById = wbp.id.toString() === data;
//       const matchByNama = wbp.nama?.toLowerCase().includes(data.toLowerCase());
//       return matchById || matchByNama;
//     });
    
//     if (wbpDitemukan) {
//       selectWbp(wbpDitemukan);
//       toast.success(`WBP ditemukan: ${wbpDitemukan.nama}`);
//     } else {
//       toast.error(`WBP tidak ditemukan dengan data: ${data}`);
//       // Tetap set search untuk memudahkan pencarian manual
//       setSearchWbp(data);
//       setIsWbpDropdownOpen(true);
//     }
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
    
//     if (file) {
//       // Validasi tipe file
//       if (!file.type.startsWith('image/')) {
//         toast.error("File harus berupa gambar");
//         return;
//       }

//       // Validasi ukuran file (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error("Ukuran file maksimal 5MB");
//         return;
//       }

//       // Simpan file object ke state terpisah
//       if (name === 'photo_ktp') {
//         setPhotoKtpFile(file);
//         setFormData(prev => ({ ...prev, photo_ktp: file }));
//       } else if (name === 'photo_pengunjung') {
//         setPhotoPengunjungFile(file);
//         setFormData(prev => ({ ...prev, photo_pengunjung: file }));
//       } else if (name === 'barcode') {
//         setBarcodeFile(file);
//         setFormData(prev => ({ ...prev, barcode: file }));
//       }

//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (name === 'photo_ktp') {
//           setPreviewKtp(e.target.result);
//         } else if (name === 'photo_pengunjung') {
//           setPreviewPengunjung(e.target.result);
//         } else if (name === 'barcode') {
//           setPreviewBarcode(e.target.result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Fungsi untuk menghapus foto
//   const removePhoto = (type) => {
//     if (type === 'ktp') {
//       setFormData({ ...formData, photo_ktp: null });
//       setPreviewKtp(null);
//       setPhotoKtpFile(null);
//     } else if (type === 'pengunjung') {
//       setFormData({ ...formData, photo_pengunjung: null });
//       setPreviewPengunjung(null);
//       setPhotoPengunjungFile(null);
//     } else if (type === 'barcode') {
//       setFormData({ ...formData, barcode: null });
//       setPreviewBarcode(null);
//       setBarcodeFile(null);
//     }
//   };

//   // Fungsi untuk menggunakan foto dari data existing
//   const handleExistingPhoto = (type) => {
//     if (!selectedPengunjung) return;
    
//     if (type === 'ktp' && selectedPengunjung.photo_ktp) {
//       setFormData({ ...formData, photo_ktp: selectedPengunjung.photo_ktp });
//       setPreviewKtp(selectedPengunjung.photo_ktp);
//       setPhotoKtpFile(null);
//       toast.success("Menggunakan foto KTP dari data existing");
//     } else if (type === 'pengunjung' && selectedPengunjung.photo_pengunjung) {
//       setFormData({ ...formData, photo_pengunjung: selectedPengunjung.photo_pengunjung });
//       setPreviewPengunjung(selectedPengunjung.photo_pengunjung);
//       setPhotoPengunjungFile(null);
//       toast.success("Menggunakan foto pengunjung dari data existing");
//     } else if (type === 'barcode' && selectedPengunjung.barcode) {
//       setFormData({ ...formData, barcode: selectedPengunjung.barcode });
//       setPreviewBarcode(selectedPengunjung.barcode);
//       setBarcodeFile(null);
//       toast.success("Menggunakan barcode dari data existing");
//     } else {
//       toast.error("File tidak tersedia di data existing");
//     }
//   };

//   // Fungsi untuk generate kode otomatis
//   const generateKode = () => {
//     const randomKode = Math.random().toString(36).substring(2, 8).toUpperCase();
//     setFormData({
//       ...formData,
//       kode: randomKode
//     });
//     toast.success("Kode berhasil digenerate: " + randomKode);
//   };

//   // PERBAIKAN: Handle submit dengan validasi WBP
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validasi WBP
//     if (!formData.wbp_id) {
//       setError("Silakan pilih Warga Binaan terlebih dahulu.");
//       toast.error("WBP belum dipilih!");
//       return;
//     }

//     // Debug info WBP
//     console.log("WBP ID yang akan dikirim:", formData.wbp_id);
//     console.log("WBP Nama yang dipilih:", searchWbp);

//     if (!formData.nama || !formData.nik || !formData.hp || !formData.wbp_id || !formData.kode) {
//       setError("Pastikan nama, NIK, nomor HP, WBP, dan kode diisi.");
//       return;
//     }

//     setError("");
//     setIsSubmitting(true);

//     const formDataToSend = new FormData();
    
//     // Tambahkan semua field formData ke FormData
//     for (const key in formData) {
//       if (formData[key] !== null && formData[key] !== "") {
//         // Handle file uploads - jika file object, append sebagai file
//         if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && formData[key] instanceof File) {
//           formDataToSend.append(key, formData[key]);
//         } 
//         // Handle URL strings dari data existing
//         else if ((key === 'photo_ktp' || key === 'photo_pengunjung' || key === 'barcode') && typeof formData[key] === 'string') {
//           formDataToSend.append(key, formData[key]);
//         }
//         // Handle field lainnya
//         else if (key !== 'photo_ktp' && key !== 'photo_pengunjung' && key !== 'barcode') {
//           formDataToSend.append(key, formData[key]);
//         }
//       }
//     }

//     // Debug: Log formData sebelum dikirim
//     console.log("FormData sebelum submit:", formData);
//     console.log("Photo KTP:", formData.photo_ktp);
//     console.log("Photo Pengunjung:", formData.photo_pengunjung);
//     console.log("Barcode:", formData.barcode);

//     // Debug: Log FormData entries
//     for (let pair of formDataToSend.entries()) {
//       console.log(pair[0] + ': ', pair[1]);
//     }

//     try {
//       // Simpan response dari createPengunjung ke state
//       const createdPengunjung = await createPengunjung(formDataToSend, setError);
      
//       if (createdPengunjung) {
//         toast.success("Pengunjung berhasil ditambahkan!");

//         // Simpan data pengunjung baru ke state
//         setNewPengunjung(createdPengunjung);
        
//         // Tampilkan form edit
//         setShowEditForm(true);

//         // Reset form
//         setFormData({
//           wbp_id: "",
//           nama: "",
//           jenis_kelamin: "",
//           nik: "",
//           alamat: "",
//           hp: "",
//           hubungan_keluarga: "",
//           tujuan: "Berkunjung",
//           kode: "",
//           barcode: null,
//           pengikut_laki_laki: 0,
//           pengikut_perempuan: 0,
//           pengikut_anak_anak: 0,
//           pengikut_bayi: 0,
//           total_pengikut: 0,
//           keterangan: "",
//           photo_ktp: null,
//           photo_pengunjung: null,
//         });
//         setSelectedPengunjung(null);
//         setSearchPengunjung("");
//         setPreviewKtp(null);
//         setPreviewPengunjung(null);
//         setPreviewBarcode(null);
//         setPhotoKtpFile(null);
//         setPhotoPengunjungFile(null);
//         setBarcodeFile(null);
//         setShowVirtualKeyboard(false);
//       } else {
//         throw new Error("Gagal mendapatkan response dari server");
//       }

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
//     setSearchPengunjung("");
//     setSelectedPengunjung(null);
//     setShowVirtualKeyboard(false);
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

//   // Modal untuk preview gambar besar
//   const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
//     if (!isOpen) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//         <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <FaTimes size={24} />
//             </button>
//           </div>
//           <div className="p-4">
//             <img
//               src={imageUrl}
//               alt={title}
//               className="w-full h-auto max-h-96 object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Tampilkan form tambah pengunjung
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
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
//             {/* PERBAIKAN: Informasi WBP Terpilih */}
//             {formData.wbp_id && (
//               <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg mb-4">
//                 <p className="text-blue-700 font-medium">
//                   ✓ WBP Terpilih: <strong>{searchWbp}</strong> (ID: {formData.wbp_id})
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFormData({ ...formData, wbp_id: "" });
//                     setSearchWbp("");
//                   }}
//                   className="mt-2 text-sm text-red-600 hover:text-red-800"
//                 >
//                   ✗ Hapus Pilihan
//                 </button>
//               </div>
//             )}

//             {/* Pilih WBP dengan scan barcode */}
//             <div className="relative" ref={dropdownRef}>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUser className="inline-block mr-2" /> Cari Warga Binaan
//               </label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={searchWbp}
//                   onChange={(e) => {
//                     setSearchWbp(e.target.value);
//                     setIsWbpDropdownOpen(true);
//                   }}
//                   onFocus={() => handleInputFocus('wbp', searchWbp)}
//                   placeholder="Ketik nama atau ID WBP..."
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowScannerWbp(true)}
//                   className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
//                   title="Scan Barcode WBP"
//                 >
//                   <FaQrcode className="w-5 h-5" />
//                 </button>
//               </div>
              
//               {loadingWbp && (
//                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
//                   <div className="flex items-center justify-center">
//                     <FaSpinner className="animate-spin mr-2" />
//                     Memuat data WBP...
//                   </div>
//                 </div>
//               )}
              
//               {isWbpDropdownOpen && filteredWbp.length > 0 && (
//                 <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto touch-friendly">
//                   {filteredWbp.map((wbp) => (
//                     <div
//                       key={wbp.id}
//                       onClick={() => selectWbp(wbp)}
//                       className="p-4 hover:bg-blue-50 cursor-pointer flex items-center border-b border-gray-100 touch-friendly"
//                     >
//                       <div className="flex-1">
//                         <div className="font-medium text-gray-800">{wbp.nama}</div>
//                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
//                       </div>
//                       <FaUser className="ml-2 text-gray-400" />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Cari Pengunjung yang Sudah Ada dengan scan barcode */}
//             <div className="relative" ref={dropdownPengunjungRef}>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUser className="inline-block mr-2" /> Cari Pengunjung (Data Existing)
//               </label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={searchPengunjung}
//                   onChange={(e) => {
//                     setSearchPengunjung(e.target.value);
//                     setIsPengunjungDropdownOpen(true);
//                   }}
//                   onFocus={() => handleInputFocus('pengunjung', searchPengunjung)}
//                   placeholder="Ketik nama atau NIK pengunjung yang sudah ada..."
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowScannerPengunjung(true)}
//                   className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
//                   title="Scan Barcode Pengunjung"
//                 >
//                   <FaQrcode className="w-5 h-5" />
//                 </button>
//               </div>
              
//               {isPengunjungDropdownOpen && filteredPengunjung.length > 0 && (
//                 <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto touch-friendly">
//                   {filteredPengunjung.map((pengunjung, index) => (
//                     <div
//                       key={pengunjung.id || index}
//                       onClick={() => selectPengunjung(pengunjung)}
//                       className="p-4 hover:bg-green-50 cursor-pointer flex items-center border-b border-gray-100 touch-friendly"
//                     >
//                       <div className="flex-1">
//                         <div className="font-medium text-gray-800">{pengunjung.nama}</div>
//                         <div className="text-sm text-gray-600">NIK: {pengunjung.nik}</div>
//                         <div className="text-sm text-gray-600">HP: {pengunjung.hp}</div>
//                         <div className="text-sm text-gray-500">Alamat: {pengunjung.alamat}</div>
//                         <div className="text-sm text-gray-500">Kode: {pengunjung.kode}</div>
//                       </div>
//                       <FaUser className="ml-2 text-green-500" />
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Debug info */}
//               <div className="mt-1 text-xs text-gray-500">
//                 Menampilkan {filteredPengunjung.length} data pengunjung
//               </div>
//             </div>

//             {/* Informasi Pengunjung Terpilih */}
//             {selectedPengunjung && (
//               <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
//                 <p className="text-green-700 font-medium mb-2">
//                   ✓ Data pengunjung terpilih:
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <div className="grid grid-cols-2 gap-2 text-sm text-green-600">
//                       <div><strong>Nama:</strong> {selectedPengunjung.nama}</div>
//                       <div><strong>NIK:</strong> {selectedPengunjung.nik}</div>
//                       <div><strong>HP:</strong> {selectedPengunjung.hp}</div>
//                       <div><strong>Alamat:</strong> {selectedPengunjung.alamat}</div>
//                       <div><strong>Jenis Kelamin:</strong> {selectedPengunjung.jenis_kelamin}</div>
//                       <div><strong>Kode:</strong> {selectedPengunjung.kode}</div>
//                       {selectedPengunjung.hubungan_keluarga && (
//                         <div><strong>Hubungan:</strong> {selectedPengunjung.hubungan_keluarga}</div>
//                       )}
//                     </div>
//                   </div>
                  
//                   {/* Foto dari Data Existing */}
//                   <div className="space-y-3">
//                     <div className="grid grid-cols-3 gap-2">
//                       {/* Foto KTP Existing */}
//                       {selectedPengunjung.photo_ktp && (
//                         <div className="flex-1">
//                           <div className="flex justify-between items-center mb-1">
//                             <span className="text-xs font-medium text-green-700">KTP</span>
//                             <button
//                               type="button"
//                               onClick={() => handleExistingPhoto('ktp')}
//                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
//                             >
//                               Gunakan
//                             </button>
//                           </div>
//                           <div 
//                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
//                             onClick={() => setShowModalKtp(true)}
//                           >
//                             <img
//                               src={selectedPengunjung.photo_ktp}
//                               alt="KTP Existing"
//                               className="w-full h-16 object-cover rounded"
//                             />
//                           </div>
//                         </div>
//                       )}
                      
//                       {/* Foto Pengunjung Existing */}
//                       {selectedPengunjung.photo_pengunjung && (
//                         <div className="flex-1">
//                           <div className="flex justify-between items-center mb-1">
//                             <span className="text-xs font-medium text-green-700">Foto</span>
//                             <button
//                               type="button"
//                               onClick={() => handleExistingPhoto('pengunjung')}
//                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
//                             >
//                               Gunakan
//                             </button>
//                           </div>
//                           <div 
//                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
//                             onClick={() => setShowModalPengunjung(true)}
//                           >
//                             <img
//                               src={selectedPengunjung.photo_pengunjung}
//                               alt="Pengunjung Existing"
//                               className="w-full h-16 object-cover rounded"
//                             />
//                           </div>
//                         </div>
//                       )}

//                       {/* Barcode Existing */}
//                       {selectedPengunjung.barcode && (
//                         <div className="flex-1">
//                           <div className="flex justify-between items-center mb-1">
//                             <span className="text-xs font-medium text-green-700">Barcode</span>
//                             <button
//                               type="button"
//                               onClick={() => handleExistingPhoto('barcode')}
//                               className="text-xs bg-green-600 text-white px-1 py-0.5 rounded hover:bg-green-700 transition-colors"
//                             >
//                               Gunakan
//                             </button>
//                           </div>
//                           <div 
//                             className="border-2 border-green-300 rounded-lg p-1 cursor-pointer hover:border-green-500 transition-colors"
//                             onClick={() => setShowModalBarcode(true)}
//                           >
//                             <img
//                               src={selectedPengunjung.barcode}
//                               alt="Barcode Existing"
//                               className="w-full h-16 object-cover rounded"
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>
                    
//                     {(!selectedPengunjung.photo_ktp || !selectedPengunjung.photo_pengunjung || !selectedPengunjung.barcode) && (
//                       <div className="text-xs text-green-600 bg-green-100 p-2 rounded">
//                         <FaCamera className="inline mr-1" />
//                         File yang tidak tersedia: 
//                         {!selectedPengunjung.photo_ktp && " KTP"}
//                         {!selectedPengunjung.photo_pengunjung && " Foto"}
//                         {!selectedPengunjung.barcode && " Barcode"}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

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
//                 onFocus={() => handleInputFocus('nama', formData.nama)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 required
//                 inputMode="text"
//                 autoComplete="name"
//                 autoCapitalize="words"
//               />
//             </div>

//             {/* Kode */}
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 name="kode"
//                 value={formData.kode}
//                 onChange={handleInputChange}
//                 onFocus={() => handleInputFocus('kode', formData.kode)}
//                 placeholder="Masukkan kode atau generate otomatis"
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 required
//                 inputMode="text"
//                 autoComplete="off"
//                 autoCapitalize="characters"
//               />
//               <button
//                 type="button"
//                 onClick={generateKode}
//                 disabled={!!formData.kode}
//                 className={`px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all touch-friendly ${
//                   formData.kode 
//                     ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
//                     : 'bg-green-600 text-white hover:bg-green-700'
//                 }`}
//               >
//                 Generate
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-1">
//               Kode unik untuk identifikasi pengunjung
//             </p>

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
//                 onFocus={() => handleInputFocus('nik', formData.nik)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 required
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 autoComplete="on"
//               />
//             </div>

//             {/* Nomor HP */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaPhone className="inline-block mr-2" /> Nomor HP
//               </label>
//               <input
//                 type="tel"
//                 name="hp"
//                 value={formData.hp}
//                 onChange={handleInputChange}
//                 onFocus={() => handleInputFocus('hp', formData.hp)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 required
//                 inputMode="tel"
//                 autoComplete="tel"
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
//                 onFocus={() => handleInputFocus('alamat', formData.alamat)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 inputMode="text"
//                 autoComplete="street-address"
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
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//               >
//                 <option value="">Pilih Jenis Kelamin</option>
//                 <option value="laki-laki">Laki-laki</option>
//                 <option value="perempuan">Perempuan</option>
//               </select>
//             </div>

//             {/* Hubungan Keluarga */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <User className="inline-block mr-2" /> Hubungan Keluarga
//               </label>
//               <input
//                 type="text"
//                 name="hubungan_keluarga"
//                 value={formData.hubungan_keluarga}
//                 onChange={handleInputChange}
//                 onFocus={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
//                 placeholder="Contoh: Saudara, Ibu, Ayah, dll."
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 inputMode="text"
//                 autoComplete="on"
//               />
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
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 accept="image/*"
//               />
              
//               {/* Preview Foto KTP */}
//               {previewKtp && (
//                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm font-medium text-gray-700">Preview Foto KTP:</span>
//                     <div className="flex space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => setShowModalKtp(true)}
//                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
//                       >
//                         <FaEye className="mr-1" /> Lihat Besar
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => removePhoto('ktp')}
//                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
//                       >
//                         <FaTimes className="mr-1" /> Hapus
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex justify-center">
//                     <img
//                       src={previewKtp}
//                       alt="Preview KTP"
//                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
//                       onClick={() => setShowModalKtp(true)}
//                     />
//                   </div>
//                 </div>
//               )}
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
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 accept="image/*"
//               />
              
//               {/* Preview Foto Pengunjung */}
//               {previewPengunjung && (
//                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm font-medium text-gray-700">Preview Foto Pengunjung:</span>
//                     <div className="flex space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => setShowModalPengunjung(true)}
//                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
//                       >
//                         <FaEye className="mr-1" /> Lihat Besar
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => removePhoto('pengunjung')}
//                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
//                       >
//                         <FaTimes className="mr-1" /> Hapus
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex justify-center">
//                     <img
//                       src={previewPengunjung}
//                       alt="Preview Pengunjung"
//                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
//                       onClick={() => setShowModalPengunjung(true)}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Upload Barcode */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaBarcode className="inline-block mr-2" /> Barcode/QR Code
//               </label>
//               <input
//                 type="file"
//                 name="barcode"
//                 onChange={handleFileChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
//                 accept="image/*"
//               />
              
//               {/* Preview Barcode */}
//               {previewBarcode && (
//                 <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm font-medium text-gray-700">Preview Barcode:</span>
//                     <div className="flex space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => setShowModalBarcode(true)}
//                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
//                       >
//                         <FaEye className="mr-1" /> Lihat Besar
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => removePhoto('barcode')}
//                         className="text-red-600 hover:text-red-800 text-sm flex items-center"
//                       >
//                         <FaTimes className="mr-1" /> Hapus
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex justify-center">
//                     <img
//                       src={previewBarcode}
//                       alt="Preview Barcode"
//                       className="max-h-40 rounded border border-gray-300 cursor-pointer"
//                       onClick={() => setShowModalBarcode(true)}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Tombol Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center touch-friendly text-lg font-semibold shadow-lg"
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

//       {/* Modal untuk preview gambar besar */}
//       <ImageModal
//         isOpen={showModalKtp}
//         onClose={() => setShowModalKtp(false)}
//         imageUrl={previewKtp || (selectedPengunjung?.photo_ktp)}
//         title="Foto KTP"
//       />
      
//       <ImageModal
//         isOpen={showModalPengunjung}
//         onClose={() => setShowModalPengunjung(false)}
//         imageUrl={previewPengunjung || (selectedPengunjung?.photo_pengunjung)}
//         title="Foto Pengunjung"
//       />

//       <ImageModal
//         isOpen={showModalBarcode}
//         onClose={() => setShowModalBarcode(false)}
//         imageUrl={previewBarcode || (selectedPengunjung?.barcode)}
//         title="Barcode/QR Code"
//       />

//       {/* Scanner Modal untuk Pengunjung */}
//       <ScannerModal 
//         isOpen={showScannerPengunjung}
//         onClose={() => setShowScannerPengunjung(false)}
//         onScan={handleScanPengunjung}
//         title="Scan Barcode Pengunjung"
//       />

//       {/* Scanner Modal untuk WBP */}
//       <ScannerModal 
//         isOpen={showScannerWbp}
//         onClose={() => setShowScannerWbp(false)}
//         onScan={handleScanWbp}
//         title="Scan Barcode WBP"
//       />

//       {/* Virtual Keyboard - Hanya muncul di PC */}
//       {showVirtualKeyboard && (
//         <VirtualKeyboard 
//           onKeyPress={handleVirtualKeyPress}
//           onClose={() => setShowVirtualKeyboard(false)}
//           value={keyboardValue}
//           activeInput={activeInput}
//           onInputChange={handleInputUpdate}
//         />
//       )}
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
//     tujuan: newPengunjung.tujuan || "Berkunjung",
//     kode: newPengunjung.kode || "",
//     pengikut_laki_laki: newPengunjung.pengikut_laki_laki || 0,
//     pengikut_perempuan: newPengunjung.pengikut_perempuan || 0,
//     pengikut_anak_anak: newPengunjung.pengikut_anak_anak || 0,
//     pengikut_bayi: newPengunjung.pengikut_bayi || 0,
//     total_pengikut: newPengunjung.total_pengikut || 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // State untuk virtual keyboard di form edit
//   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [keyboardValue, setKeyboardValue] = useState('');
  
//   // State untuk checkbox ambil antrian
//   const [ambilAntrian, setAmbilAntrian] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   // State untuk preview gambar yang sudah diupload
//   const [showModalKtp, setShowModalKtp] = useState(false);
//   const [showModalPengunjung, setShowModalPengunjung] = useState(false);
//   const [showModalBarcode, setShowModalBarcode] = useState(false);

//   // State untuk deteksi perangkat
//   const [isPc, setIsPc] = useState(false);

//   const navigate = useNavigate();

//   // Deteksi perangkat saat komponen dimuat
//   useEffect(() => {
//     const checkDevice = () => {
//       const userAgent = navigator.userAgent.toLowerCase();
//       const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
//       const isTablet = /tablet|ipad/i.test(userAgent);
//       const isPcDevice = !isMobile && !isTablet;
      
//       setIsPc(isPcDevice);
//     };

//     checkDevice();
//   }, []);

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

//   // Handler untuk virtual keyboard di form edit - hanya untuk PC
//   const handleVirtualKeyPress = (key) => {
//     if (key === 'backspace') {
//       setKeyboardValue(prev => prev.slice(0, -1));
//       handleInputUpdate('backspace');
//     } else if (key === 'enter') {
//       setShowVirtualKeyboard(false);
//     } else if (key === 'space') {
//       setKeyboardValue(prev => prev + ' ');
//       handleInputUpdate(' ');
//     } else if (key === 'clear') {
//       setKeyboardValue('');
//       handleInputUpdate('clear');
//     } else if (key === 'tab') {
//       // Switch between inputs
//     } else {
//       setKeyboardValue(prev => prev + key);
//       handleInputUpdate(key);
//     }
//   };

//   // Fungsi untuk langsung update input field dari keyboard di form edit
//   const handleInputUpdate = (key) => {
//     let newValue = '';
    
//     if (key === 'backspace') {
//       newValue = keyboardValue.slice(0, -1);
//     } else if (key === 'clear') {
//       newValue = '';
//     } else if (key === ' ') {
//       newValue = keyboardValue + ' ';
//     } else {
//       newValue = keyboardValue + key;
//     }

//     // Update sesuai dengan input yang aktif
//     switch (activeInput) {
//       case 'nama':
//         setFormData(prev => ({ ...prev, nama: newValue }));
//         break;
//       case 'nik':
//         setFormData(prev => ({ ...prev, nik: newValue }));
//         break;
//       case 'hp':
//         setFormData(prev => ({ ...prev, hp: newValue }));
//         break;
//       case 'alamat':
//         setFormData(prev => ({ ...prev, alamat: newValue }));
//         break;
//       case 'hubungan_keluarga':
//         setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
//         break;
//       case 'kode':
//         setFormData(prev => ({ ...prev, kode: newValue }));
//         break;
//       default:
//         break;
//     }
//   };

//   // Handler untuk membuka virtual keyboard dengan input tertentu di form edit - hanya untuk PC
//   const handleInputFocus = (inputType, currentValue = '') => {
//     // Hanya tampilkan virtual keyboard jika perangkat adalah PC
//     if (!isPc) return;
    
//     setActiveInput(inputType);
//     setKeyboardValue(currentValue);
//     setShowVirtualKeyboard(true);
//   };

//   // Modal untuk preview gambar besar
//   const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
//     if (!isOpen) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//         <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <FaTimes size={24} />
//             </button>
//           </div>
//           <div className="p-4">
//             <img
//               src={imageUrl}
//               alt={title}
//               className="w-full h-auto max-h-96 object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

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

//   console.log("new pengunjung", newPengunjung)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await updatePengunjung(newPengunjung.id, formData);
//       toast.success("Data pengunjung berhasil diperbarui!");
      
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
//     if (!ambilAntrian && formData.tujuan === "Menitip barang") {
//       navigate(`/label/${newPengunjung.id}`);
//     } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
//       navigate(`/pengunjung/${newPengunjung.id}`);
//     } else {
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
//             <div className="flex justify-between items-center">
//               <label htmlFor="ambilAntrian" className="ml-2 text-xl font-bold text-yellow-700">
//                 Ambil Antrian QR Code di Loket
//               </label>
//               <input
//                 type="checkbox"
//                 id="ambilAntrian"
//                 checked={ambilAntrian}
//                 onChange={(e) => setAmbilAntrian(e.target.checked)}
//                 className="w-8 h-8 text-black font-bold border-4 border-gray-300 rounded focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
//               /> 
//             </div>
//             <div className="mt-2 text-sm text-yellow-600">
//               <p><strong>Kode Pengunjung:</strong> {newPengunjung.kode}</p>
//               <p><strong>WBP:</strong> {newPengunjung.wbp_nama || "Data WBP"}</p>
//             </div>
//           </div>
//         )}

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1">
//           {/* Kolom Kanan */}
//           <div className="space-y-4">
            
//             {/* Pengikut dengan Counter yang Dipercantik */}
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <label className="block text-sm font-medium text-gray-700 flex items-center">
//                   <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   Jumlah Pengikut
//                 </label>
//                 <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
//                   Total: <span className="font-bold text-purple-600">{formData.total_pengikut}</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 {/* Laki-laki */}
//                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-2xl">👨</span>
//                       <span className="font-semibold text-gray-800">Laki-laki</span>
//                     </div>
//                     <div className="px-3 py-1 bg-white rounded-lg border border-blue-200 shadow-sm">
//                       <span className="text-sm font-bold text-blue-600">
//                         {formData.pengikut_laki_laki}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between space-x-2">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
//                         if (currentValue > 0) {
//                           const updatedFormData = {
//                             ...formData,
//                             pengikut_laki_laki: currentValue - 1
//                           };
//                           updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                           setFormData(updatedFormData);
//                         }
//                       }}
//                       className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
//                         parseInt(formData.pengikut_laki_laki) > 0 
//                           ? 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300' 
//                           : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
//                       } focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95`}
//                       disabled={parseInt(formData.pengikut_laki_laki) <= 0}
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                         </svg>
//                         <span>Kurang</span>
//                       </div>
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_laki_laki: currentValue + 1
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                         <span>Tambah</span>
//                       </div>
//                     </button>
//                   </div>

//                   <div className="flex space-x-2 mt-3">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_laki_laki: 0
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       Reset
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_laki_laki) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_laki_laki: currentValue + 5
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       +5
//                     </button>
//                   </div>
//                 </div>

//                 {/* Perempuan */}
//                 <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-2xl">👩</span>
//                       <span className="font-semibold text-gray-800">Perempuan</span>
//                     </div>
//                     <div className="px-3 py-1 bg-white rounded-lg border border-pink-200 shadow-sm">
//                       <span className="text-sm font-bold text-pink-600">
//                         {formData.pengikut_perempuan}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between space-x-2">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_perempuan) || 0;
//                         if (currentValue > 0) {
//                           const updatedFormData = {
//                             ...formData,
//                             pengikut_perempuan: currentValue - 1
//                           };
//                           updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                           setFormData(updatedFormData);
//                         }
//                       }}
//                       className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
//                         parseInt(formData.pengikut_perempuan) > 0 
//                           ? 'bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300' 
//                           : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
//                       } focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95`}
//                       disabled={parseInt(formData.pengikut_perempuan) <= 0}
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                         </svg>
//                         <span>Kurang</span>
//                       </div>
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_perempuan) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_perempuan: currentValue + 1
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 active:scale-95"
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                         <span>Tambah</span>
//                       </div>
//                     </button>
//                   </div>

//                   <div className="flex space-x-2 mt-3">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_perempuan: 0
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       Reset
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_perempuan) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_perempuan: currentValue + 5
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       +5
//                     </button>
//                   </div>
//                 </div>

//                 {/* Anak-anak */}
//                 <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-2xl">🧒</span>
//                       <span className="font-semibold text-gray-800">Anak-anak</span>
//                     </div>
//                     <div className="px-3 py-1 bg-white rounded-lg border border-green-200 shadow-sm">
//                       <span className="text-sm font-bold text-green-600">
//                         {formData.pengikut_anak_anak}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between space-x-2">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
//                         if (currentValue > 0) {
//                           const updatedFormData = {
//                             ...formData,
//                             pengikut_anak_anak: currentValue - 1
//                           };
//                           updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                           setFormData(updatedFormData);
//                         }
//                       }}
//                       className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
//                         parseInt(formData.pengikut_anak_anak) > 0 
//                           ? 'bg-white text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-300' 
//                           : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
//                       } focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95`}
//                       disabled={parseInt(formData.pengikut_anak_anak) <= 0}
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                         </svg>
//                         <span>Kurang</span>
//                       </div>
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_anak_anak: currentValue + 1
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95"
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                         <span>Tambah</span>
//                       </div>
//                     </button>
//                   </div>

//                   <div className="flex space-x-2 mt-3">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_anak_anak: 0
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       Reset
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_anak_anak) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_anak_anak: currentValue + 5
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       +5
//                     </button>
//                   </div>
//                 </div>

//                 {/* Bayi */}
//                 <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-2xl">👶</span>
//                       <span className="font-semibold text-gray-800">Bayi</span>
//                     </div>
//                     <div className="px-3 py-1 bg-white rounded-lg border border-purple-200 shadow-sm">
//                       <span className="text-sm font-bold text-purple-600">
//                         {formData.pengikut_bayi}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between space-x-2">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_bayi) || 0;
//                         if (currentValue > 0) {
//                           const updatedFormData = {
//                             ...formData,
//                             pengikut_bayi: currentValue - 1
//                           };
//                           updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                           setFormData(updatedFormData);
//                         }
//                       }}
//                       className={`flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
//                         parseInt(formData.pengikut_bayi) > 0 
//                           ? 'bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300' 
//                           : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
//                       } focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95`}
//                       disabled={parseInt(formData.pengikut_bayi) <= 0}
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                         </svg>
//                         <span>Kurang</span>
//                       </div>
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_bayi) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_bayi: currentValue + 1
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-3 rounded-xl transition-all duration-200 font-semibold text-sm bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
//                     >
//                       <div className="flex items-center justify-center space-x-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                         <span>Tambah</span>
//                       </div>
//                     </button>
//                   </div>

//                   <div className="flex space-x-2 mt-3">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_bayi: 0
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       Reset
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const currentValue = parseInt(formData.pengikut_bayi) || 0;
//                         const updatedFormData = {
//                           ...formData,
//                           pengikut_bayi: currentValue + 5
//                         };
//                         updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                         setFormData(updatedFormData);
//                       }}
//                       className="flex-1 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                       +5
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Total Pengikut yang Dipercantik */}
//             <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-2 shadow-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center space-x-2 mb-1">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   <h3 className="text-lg font-semibold">Total Pengikut</h3>
//                 </div>
//                 <div className="text-4xl font-bold mb-2">
//                   {formData.total_pengikut} <span className="text-2xl">Orang</span>
//                 </div>
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

//       {/* Modal untuk preview gambar besar */}
//       <ImageModal
//         isOpen={showModalKtp}
//         onClose={() => setShowModalKtp(false)}
//         imageUrl={newPengunjung.photo_ktp}
//         title="Foto KTP"
//       />
      
//       <ImageModal
//         isOpen={showModalPengunjung}
//         onClose={() => setShowModalPengunjung(false)}
//         imageUrl={newPengunjung.photo_pengunjung}
//         title="Foto Pengunjung"
//       />

//       <ImageModal
//         isOpen={showModalBarcode}
//         onClose={() => setShowModalBarcode(false)}
//         imageUrl={newPengunjung.barcode}
//         title="Barcode/QR Code"
//       />

//       {/* Virtual Keyboard untuk form edit - hanya untuk PC */}
//       {showVirtualKeyboard && (
//         <VirtualKeyboard 
//           onKeyPress={handleVirtualKeyPress}
//           onClose={() => setShowVirtualKeyboard(false)}
//           value={keyboardValue}
//           activeInput={activeInput}
//           onInputChange={handleInputUpdate}
//         />
//       )}
//     </div>
//   );
// };

// export default AddPengunjungForm;





import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import useDataStore from "../../store/useDataStore";
import { FaUser, FaIdCard, FaPhone, FaHome, FaVenusMars, FaQrcode, FaUpload, FaSpinner, FaHome as FaHomeIcon, FaTimes, FaEye, FaCamera, FaBarcode, FaSearch, FaKeyboard } from "react-icons/fa";
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

// Komponen Virtual Keyboard yang Dapat Digeser - Hanya untuk PC
const VirtualKeyboard = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
  const [isShift, setIsShift] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isPc, setIsPc] = useState(false);
  const keyboardRef = useRef(null);
  const containerRef = useRef(null);

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

  const currentRows = isSymbol ? symbolRows : alphaRows;

  // Deteksi perangkat saat komponen dimuat
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

  // Handle drag start - untuk mouse dan touch
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

  // Handle drag movement - untuk mouse dan touch
  const handleDragMove = (clientX, clientY) => {
    if (!isDragging || !keyboardRef.current) return;
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    // Boundary checks untuk menjaga keyboard tetap dalam viewport
    const keyboardWidth = keyboardRef.current.offsetWidth;
    const keyboardHeight = keyboardRef.current.offsetHeight;
    const maxX = window.innerWidth - keyboardWidth;
    const maxY = window.innerHeight - keyboardHeight;
    
    setPosition({
      x: Math.max(10, Math.min(newX, maxX - 10)), // Beri margin 10px
      y: Math.max(10, Math.min(newY, maxY - 10))
    });
  };

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
    e.preventDefault(); // Mencegah scroll saat drag
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
      document.addEventListener('touchcancel', handleDragEnd);
      
      // Tambahkan styles untuk mencegah scroll dan selection
      document.body.style.overflow = 'hidden';
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      document.removeEventListener('touchcancel', handleDragEnd);
      
      // Kembalikan styles
      document.body.style.overflow = '';
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, [isDragging, dragOffset]);

  // Efek untuk mengatur posisi awal keyboard di tengah bawah
  useEffect(() => {
    if (!isPc) return;

    const updateInitialPosition = () => {
      if (keyboardRef.current) {
        const keyboardWidth = keyboardRef.current.offsetWidth;
        const keyboardHeight = keyboardRef.current.offsetHeight;
        
        setPosition({
          x: (window.innerWidth - keyboardWidth) / 2,
          y: window.innerHeight - keyboardHeight - 20 // 20px dari bawah
        });
      }
    };

    // Tunggu sampai DOM siap
    setTimeout(updateInitialPosition, 100);
    
    // Update posisi saat window resize
    window.addEventListener('resize', updateInitialPosition);
    return () => window.removeEventListener('resize', updateInitialPosition);
  }, [isPc]);

  const handleKeyClick = (key) => {
    const finalKey = isShift ? key.toUpperCase() : key;
    onKeyPress(finalKey);
    if (onInputChange) {
      onInputChange(finalKey);
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
      case 'tab':
        onKeyPress('tab');
        break;
      default:
        break;
    }
  };

  const getInputLabel = () => {
    switch (activeInput) {
      case 'wbp':
        return 'Cari Warga Binaan';
      case 'pengunjung':
        return 'Cari Pengunjung';
      case 'nama':
        return 'Input Nama';
      case 'nik':
        return 'Input NIK';
      case 'hp':
        return 'Input Nomor HP';
      case 'alamat':
        return 'Input Alamat';
      case 'hubungan_keluarga':
        return 'Input Hubungan Keluarga';
      case 'kode':
        return 'Input Kode';
      case 'tujuan':
        return 'Pilih Tujuan';
      default:
        return 'Virtual Keyboard';
    }
  };

  // Jika bukan PC, jangan render keyboard virtual
  if (!isPc) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none"
      style={{ touchAction: 'none' }}
    >
      <div 
        ref={keyboardRef}
        className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl transform transition-all duration-300 pointer-events-auto border border-white border-opacity-20"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none',
          zIndex: 1000,
          width: '35vw', // 25% dari lebar viewport
          minWidth: '500px', // Minimum width
          maxWidth: '600px', // Maximum width
        }}
      >
        {/* Draggable Header dengan indikator yang jelas */}
        <div 
          className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl p-4 text-white cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ touchAction: 'none' }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaKeyboard className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">{getInputLabel()}</h3>
                <p className="text-blue-100 text-sm flex items-center">
                  <span className="inline-block w-3 h-3 bg-white bg-opacity-50 rounded-full mr-1 animate-pulse"></span>
                  Drag untuk memindahkan • Gunakan keyboard virtual
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
              style={{ touchAction: 'manipulation' }}
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          
          {/* Indikator drag area */}
          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-white bg-opacity-50 rounded-full"></div>
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
        <div className="p-4" style={{ touchAction: 'manipulation' }}>
          {/* Main Keyboard */}
          {currentRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-2 space-x-1">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="flex-1 max-w-[60px] h-14 bg-white bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 active:scale-95 transition-all duration-150 font-medium text-gray-700 touch-friendly shadow-sm"
                  style={{ 
                    minWidth: '44px',
                    minHeight: '44px',
                    touchAction: 'manipulation'
                  }}
                >
                  {isShift && !isSymbol ? key.toUpperCase() : key}
                </button>
              ))}
            </div>
          ))}

          {/* Bottom Control Row */}
          <div className="flex justify-center space-x-1 mt-4">
            {/* Shift Button */}
            <button
              onClick={() => handleSpecialKey('shift')}
              className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
                isShift 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
                  : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
              }`}
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              ⇧ SHIFT
            </button>

            {/* Symbol Toggle */}
            <button
              onClick={() => handleSpecialKey('symbol')}
              className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
                isSymbol 
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
                  : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
              }`}
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              {isSymbol ? 'ABC' : '123'}
            </button>

            {/* Space Button */}
            <button
              onClick={() => handleSpecialKey('space')}
              className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              SPACE
            </button>

            {/* Backspace Button */}
            <button
              onClick={() => handleSpecialKey('backspace')}
              className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              ⌫ DELETE
            </button>
          </div>

          {/* Action Buttons Row */}
          <div className="flex justify-center space-x-2 mt-3">
            <button
              onClick={() => handleSpecialKey('clear')}
              className="flex-1 max-w-[140px] h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all touch-friendly font-medium border-2 border-orange-600"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              🗑️ CLEAR
            </button>
            
            <button
              onClick={() => handleSpecialKey('enter')}
              className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              ↵ ENTER
            </button>
          </div>
        </div>

        {/* Footer dengan tips */}
        <div className="bg-gray-50 bg-opacity-50 rounded-b-2xl p-3 border-t">
          <div className="text-center text-sm text-gray-500">
            💡 Tips: Drag header untuk memindahkan • SHIFT untuk huruf kapital • 123 untuk simbol
          </div>
        </div>
      </div>
    </div>
  );
};

const AddPengunjungForm = ({ onClose }) => {
  const { createPengunjung, createDataPengunjung, fetchWbpList, wbpList, updatePengunjung, fetchPengunjungData, pengunjungData, updateAntrian } = useDataStore();
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

  // State untuk virtual keyboard
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');
  const [currentInputValue, setCurrentInputValue] = useState('');

  // State untuk loading WBP
  const [loadingWbp, setLoadingWbp] = useState(false);

  // State untuk deteksi perangkat
  const [isPc, setIsPc] = useState(false);

  // State untuk antrian
  const [antrian, setAntrian] = useState(null);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [printData, setPrintData] = useState(null);

  const navigate = useNavigate();

  // Deteksi perangkat saat komponen dimuat
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

  // Fetch data WBP dan Pengunjung saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      setLoadingWbp(true);
      try {
        await fetchWbpList();
        await fetchPengunjungData();
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Gagal memuat data");
      } finally {
        setLoadingWbp(false);
      }
    };
    
    fetchData();
  }, [fetchWbpList, fetchPengunjungData]);

  // Debug data WBP
  useEffect(() => {
    console.log("WBP List dari API:", wbpList);
    console.log("WBP List length:", wbpList?.length);
  }, [wbpList]);

  // Debug formData WBP
  useEffect(() => {
    console.log("FormData WBP ID:", formData.wbp_id);
    console.log("Search WBP:", searchWbp);
  }, [formData.wbp_id, searchWbp]);

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
    if (!wbpList) return [];
    
    const dataArray = Array.isArray(wbpList) 
      ? wbpList 
      : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
    console.log("Data WBP untuk filter:", dataArray);
    
    return dataArray.filter((wbp) => {
      const searchTerm = searchWbp?.toLowerCase() || '';
      const namaMatch = wbp.nama?.toLowerCase().includes(searchTerm);
      const idMatch = wbp.id?.toString().includes(searchTerm);
      
      return namaMatch || idMatch;
    });
  })();

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

  // Handler untuk virtual keyboard - hanya untuk PC
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
      // Switch between inputs - bisa diimplementasikan nanti
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

    // Update sesuai dengan input yang aktif
    switch (activeInput) {
      case 'wbp':
        setSearchWbp(newValue);
        if (newValue.length > 0) {
          setIsWbpDropdownOpen(true);
        }
        break;
      case 'pengunjung':
        setSearchPengunjung(newValue);
        if (newValue.length > 0) {
          setIsPengunjungDropdownOpen(true);
        }
        break;
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

  // Handler untuk membuka virtual keyboard dengan input tertentu - hanya untuk PC
  const handleInputFocus = (inputType, currentValue = '') => {
    // Hanya tampilkan virtual keyboard jika perangkat adalah PC
    if (!isPc) return;
    
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    
    // Set nilai awal berdasarkan input type
    switch (inputType) {
      case 'wbp':
        setCurrentInputValue(searchWbp);
        break;
      case 'pengunjung':
        setCurrentInputValue(searchPengunjung);
        break;
      case 'nama':
        setCurrentInputValue(formData.nama);
        break;
      case 'nik':
        setCurrentInputValue(formData.nik);
        break;
      case 'hp':
        setCurrentInputValue(formData.hp);
        break;
      case 'alamat':
        setCurrentInputValue(formData.alamat);
        break;
      case 'hubungan_keluarga':
        setCurrentInputValue(formData.hubungan_keluarga);
        break;
      case 'kode':
        setCurrentInputValue(formData.kode);
        break;
      default:
        setCurrentInputValue('');
    }
    
    setShowVirtualKeyboard(true);
  };

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
      tujuan: pengunjung.tujuan || "Berkunjung",
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
    setShowVirtualKeyboard(false);
  };

  // PERBAIKAN: Fungsi untuk memilih WBP dengan validasi
  const selectWbp = (wbp) => {
    console.log("WBP dipilih:", wbp); // Debug log
    
    // Pastikan wbp_id disimpan dengan benar
    setFormData({ 
      ...formData, 
      wbp_id: wbp.id,
      wbp_nama: wbp.nama // Simpan juga nama WBP untuk referensi
    });
    
    setSearchWbp(wbp.nama);
    setIsWbpDropdownOpen(false);
    setShowVirtualKeyboard(false);
    
    toast.success(`WBP dipilih: ${wbp.nama} (ID: ${wbp.id})`);
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

  // PERBAIKAN: Fungsi untuk handle scan barcode WBP
  const handleScanWbp = (data) => {
    console.log("Data scan WBP:", data);
    setShowScannerWbp(false);
    
    // Cari WBP berdasarkan ID atau nama yang di-scan
    const wbpDitemukan = filteredWbp.find(wbp => {
      const matchById = wbp.id.toString() === data;
      const matchByNama = wbp.nama?.toLowerCase().includes(data.toLowerCase());
      return matchById || matchByNama;
    });
    
    if (wbpDitemukan) {
      selectWbp(wbpDitemukan);
      toast.success(`WBP ditemukan: ${wbpDitemukan.nama}`);
    } else {
      toast.error(`WBP tidak ditemukan dengan data: ${data}`);
      // Tetap set search untuk memudahkan pencarian manual
      setSearchWbp(data);
      setIsWbpDropdownOpen(true);
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
      setPhotoKtpFile(null);
      toast.success("Menggunakan foto KTP dari data existing");
    } else if (type === 'pengunjung' && selectedPengunjung.photo_pengunjung) {
      setFormData({ ...formData, photo_pengunjung: selectedPengunjung.photo_pengunjung });
      setPreviewPengunjung(selectedPengunjung.photo_pengunjung);
      setPhotoPengunjungFile(null);
      toast.success("Menggunakan foto pengunjung dari data existing");
    } else if (type === 'barcode' && selectedPengunjung.barcode) {
      setFormData({ ...formData, barcode: selectedPengunjung.barcode });
      setPreviewBarcode(selectedPengunjung.barcode);
      setBarcodeFile(null);
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

  // Fungsi untuk generate nomor antrian
  const handleGenerateAntrian = async (pengunjungId) => {
    try {
      const updatedPengunjung = await updateAntrian(pengunjungId);
      if (updatedPengunjung) {
        const newAntrian = updatedPengunjung.antrian;
        const lastThreeDigits = newAntrian.slice(-3);
        
        setAntrian(lastThreeDigits);
        
        // Set data untuk print preview
        setPrintData({
          pengunjung: updatedPengunjung,
          antrian: lastThreeDigits
        });
        
        // Tampilkan print preview
        setShowPrintPreview(true);

        toast.success("Nomor antrian berhasil digenerate: " + lastThreeDigits);
        
        return lastThreeDigits;
      }
    } catch (error) {
      console.error("Gagal generate antrian:", error);
      toast.error("Gagal generate nomor antrian");
      return null;
    }
  };

  // Komponen PDF untuk Antrian
  const PDFAntrian = ({ pengunjung, antrian }) => {
    const mmToPt = (mm) => mm * 2.83465;

    const styles = {
      page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 5,
        width: mmToPt(80),
        height: mmToPt(80),
        justifyContent: "space-between",
      },
      header: {
        textAlign: "center",
        marginBottom: 5,
      },
      title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
      },
      subtitle: {
        fontSize: 8,
        marginBottom: 2,
      },
      antrianSection: {
        alignItems: "center",
      },
      antrianNumber: {
        fontSize: 32,
        fontWeight: "bold",
      },
      barcodeSection: {
        alignItems: "center",
      },
      barcode: {
        width: 50,
        height: 50,
      },
      kode: {
        fontSize: 8,
        marginTop: 3,
      },
      infoSection: {
        marginVertical: 0,
      },
      info: {
        fontSize: 9,
        marginBottom: 3,
        textAlign: "center",
      },
      footer: {
        textAlign: "center",
      },
      footerText: {
        fontSize: 7,
      },
    };

    return (
      <div>
        {/* Ini adalah placeholder untuk komponen PDF yang sebenarnya */}
        <div style={styles.page}>
          <div style={styles.header}>
            <div style={styles.title}>NOMOR ANTRIAN</div>
            <div style={styles.subtitle}>Sistem Kunjungan Digital BATARI</div>
            <div style={styles.subtitle}>Rutan Kelas II B Bantaeng</div>
          </div>
          
          <div style={styles.antrianSection}>
            <div style={styles.antrianNumber}>{antrian}</div>
          </div>
          
          <div style={styles.barcodeSection}>
            <img src={pengunjung.barcode} alt="Barcode" style={styles.barcode} />
            <div style={styles.kode}>Kode: {pengunjung.kode}</div>
          </div>
          
          <div style={styles.infoSection}>
            <div style={styles.info}>
              Tanggal: {new Date().toLocaleDateString('id-ID')}
            </div>
          </div>
          
          <div style={styles.footer}>
            <div style={styles.footerText}>** Harap simpan tiket ini **</div>
            <div style={styles.footerText}>Tunggu hingga nomor antrian dipanggil</div>
          </div>
        </div>
      </div>
    );
  };

  // Komponen Modal Print Preview
  const PrintPreviewModal = ({ isOpen, onClose, printData }) => {
    if (!isOpen || !printData) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Print Preview Antrian</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          
          <div className="h-full p-4">
            <div className="w-full h-full border rounded-lg p-4">
              <PDFAntrian 
                pengunjung={printData.pengunjung}
                antrian={printData.antrian}
              />
            </div>
          </div>
          
          <div className="flex justify-end p-4 border-t gap-2">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Tutup
            </button>
            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    );
  };

  // PERBAIKAN: Handle submit dengan validasi WBP dan langsung generate antrian
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi WBP
    if (!formData.wbp_id) {
      setError("Silakan pilih Warga Binaan terlebih dahulu.");
      toast.error("WBP belum dipilih!");
      return;
    }

    // Debug info WBP
    console.log("WBP ID yang akan dikirim:", formData.wbp_id);
    console.log("WBP Nama yang dipilih:", searchWbp);

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

        // LANGSUNG GENERATE NOMOR ANTRIAN SETELAH PENGUNJUNG DIBUAT
        const nomorAntrian = await handleGenerateAntrian(createdPengunjung.id);
        
        if (nomorAntrian) {
          // Simpan data pengunjung baru ke state dengan nomor antrian
          setNewPengunjung({
            ...createdPengunjung,
            antrian: nomorAntrian
          });
          
          // Tampilkan form edit
          setShowEditForm(true);
        } else {
          // Jika gagal generate antrian, tetap simpan data pengunjung
          setNewPengunjung(createdPengunjung);
          setShowEditForm(true);
        }

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
        setShowVirtualKeyboard(false);
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
    setShowVirtualKeyboard(false);
    setAntrian(null);
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
            {/* PERBAIKAN: Informasi WBP Terpilih */}
            {formData.wbp_id && (
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg mb-4">
                <p className="text-blue-700 font-medium">
                  ✓ WBP Terpilih: <strong>{searchWbp}</strong> (ID: {formData.wbp_id})
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, wbp_id: "" });
                    setSearchWbp("");
                  }}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  ✗ Hapus Pilihan
                </button>
              </div>
            )}

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
                  onFocus={() => handleInputFocus('wbp', searchWbp)}
                  placeholder="Ketik nama atau ID WBP..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowScannerWbp(true)}
                  className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Scan Barcode WBP"
                >
                  <FaQrcode className="w-5 h-5" />
                </button>
              </div>
              
              {loadingWbp && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Memuat data WBP...
                  </div>
                </div>
              )}
              
              {isWbpDropdownOpen && filteredWbp.length > 0 && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto touch-friendly">
                  {filteredWbp.map((wbp) => (
                    <div
                      key={wbp.id}
                      onClick={() => selectWbp(wbp)}
                      className="p-4 hover:bg-blue-50 cursor-pointer flex items-center border-b border-gray-100 touch-friendly"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{wbp.nama}</div>
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
                  onFocus={() => handleInputFocus('pengunjung', searchPengunjung)}
                  placeholder="Ketik nama atau NIK pengunjung yang sudah ada..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                />
                <button
                  type="button"
                  onClick={() => setShowScannerPengunjung(true)}
                  className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Scan Barcode Pengunjung"
                >
                  <FaQrcode className="w-5 h-5" />
                </button>
              </div>
              
              {isPengunjungDropdownOpen && filteredPengunjung.length > 0 && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto touch-friendly">
                  {filteredPengunjung.map((pengunjung, index) => (
                    <div
                      key={pengunjung.id || index}
                      onClick={() => selectPengunjung(pengunjung)}
                      className="p-4 hover:bg-green-50 cursor-pointer flex items-center border-b border-gray-100 touch-friendly"
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
                onFocus={() => handleInputFocus('nama', formData.nama)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                required
                inputMode="text"
                autoComplete="name"
                autoCapitalize="words"
              />
            </div>

            {/* Kode */}
            <div className="flex space-x-2">
              <input
                type="text"
                name="kode"
                value={formData.kode}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus('kode', formData.kode)}
                placeholder="Masukkan kode atau generate otomatis"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                required
                inputMode="text"
                autoComplete="off"
                autoCapitalize="characters"
              />
              <button
                type="button"
                onClick={generateKode}
                disabled={!!formData.kode}
                className={`px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all touch-friendly ${
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
                onFocus={() => handleInputFocus('nik', formData.nik)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                required
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="on"
              />
            </div>

            {/* Nomor HP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline-block mr-2" /> Nomor HP
              </label>
              <input
                type="tel"
                name="hp"
                value={formData.hp}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus('hp', formData.hp)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                required
                inputMode="tel"
                autoComplete="tel"
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
                onFocus={() => handleInputFocus('alamat', formData.alamat)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                inputMode="text"
                autoComplete="street-address"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
                onFocus={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
                placeholder="Contoh: Saudara, Ibu, Ayah, dll."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
                inputMode="text"
                autoComplete="on"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all touch-friendly"
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
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center touch-friendly text-lg font-semibold shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin inline-block mr-2" />
                  Mengirim...
                </>
              ) : (
                <>
                  <FaQrcode className="inline-block mr-2" />
                  Tambah Pengunjung & Generate Antrian
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

      {/* Virtual Keyboard - Hanya muncul di PC */}
      {showVirtualKeyboard && (
        <VirtualKeyboard 
          onKeyPress={handleVirtualKeyPress}
          onClose={() => setShowVirtualKeyboard(false)}
          value={keyboardValue}
          activeInput={activeInput}
          onInputChange={handleInputUpdate}
        />
      )}

      {/* Print Preview Modal untuk Antrian */}
      <PrintPreviewModal 
        isOpen={showPrintPreview}
        onClose={() => setShowPrintPreview(false)}
        printData={printData}
      />
    </div>
  );
};

// Komponen wrapper untuk EditPengunjungForm (TIDAK BERUBAH)
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
  
  // State untuk virtual keyboard di form edit
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');
  
  // State untuk checkbox ambil antrian
  const [ambilAntrian, setAmbilAntrian] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // State untuk preview gambar yang sudah diupload
  const [showModalKtp, setShowModalKtp] = useState(false);
  const [showModalPengunjung, setShowModalPengunjung] = useState(false);
  const [showModalBarcode, setShowModalBarcode] = useState(false);

  // State untuk deteksi perangkat
  const [isPc, setIsPc] = useState(false);

  const navigate = useNavigate();

  // Deteksi perangkat saat komponen dimuat
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

  // Handler untuk virtual keyboard di form edit - hanya untuk PC
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

  // Fungsi untuk langsung update input field dari keyboard di form edit
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

    // Update sesuai dengan input yang aktif
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

  // Handler untuk membuka virtual keyboard dengan input tertentu di form edit - hanya untuk PC
  const handleInputFocus = (inputType, currentValue = '') => {
    // Hanya tampilkan virtual keyboard jika perangkat adalah PC
    if (!isPc) return;
    
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    setShowVirtualKeyboard(true);
  };

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
      await updatePengunjung(newPengunjung.id, formData);
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
      navigate(`/label/${newPengunjung.id}`);
    } else if (!ambilAntrian && formData.tujuan === "Berkunjung") {
      navigate(`/pengunjung/${newPengunjung.id}`);
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
              <p><strong>Nomor Antrian:</strong> {newPengunjung.antrian || "Belum ada"}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1">
          {/* Kolom Kanan */}
          <div className="space-y-4">
            
            {/* Pengikut dengan Counter yang Dipercantik */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

            {/* Total Pengikut yang Dipercantik */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-2 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Total Pengikut</h3>
                </div>
                <div className="text-4xl font-bold mb-2">
                  {formData.total_pengikut} <span className="text-2xl">Orang</span>
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

      {/* Virtual Keyboard untuk form edit - hanya untuk PC */}
      {showVirtualKeyboard && (
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

export default AddPengunjungForm;