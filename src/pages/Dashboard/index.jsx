// import { useEffect, useState, useRef, use } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   UserIcon,
//   PlusIcon,
//   ShieldCheckIcon,
//   UsersIcon,
//   TicketIcon,
// } from "@heroicons/react/24/outline";
// import logo from "../../assets/logokemenimipas.png";
// import useAuthStore from "../../store/useAuthStore";
// import useDataStore from "../../store/useDataStore";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { FaHome } from "react-icons/fa";
// import { BaggageClaim, LogOut, ScrollText, Settings, Wallet } from "lucide-react";

// export default function HomePage() {
//   const { authUser, logout } = useAuthStore();
//   const {
//     pengunjungs,
//     fetchPengunjung,
//     updatePengunjung,
//     getNomorAntrianTerakhir,
//   } = useDataStore(); // Tambahkan getNomorAntrianTerakhir
//   const [searchKode, setSearchKode] = useState("");
//   const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
//   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
//   const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
//   const [antrian, setAntrian] = useState(null);
//   const [antrianTitipan, setAntrianTitipan] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const updateAntrian = useDataStore((state) => state.updateAntrian);
//   const [lastAntrian, setLastAntrian] = useState("000");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const dropdownTitipanRef = useRef(null);
//   const navigate = useNavigate();
//   // Redirect ke halaman login jika authUser null
//   useEffect(() => {
//     if (!authUser) {
//       navigate("/login");
//     }
//   }, [authUser, navigate]);


//   useEffect(() => {
//     const fetchLastAntrian = async () => {
//       const antrian = await getNomorAntrianTerakhir();
//       if (antrian) {
//         setLastAntrian(antrian); // Format "001"
//       }
//     };

//     fetchLastAntrian();
//   }, [getNomorAntrianTerakhir]);

//   // Fetch data pengunjung saat komponen dimuat
//   useEffect(() => {
//     fetchPengunjung();
//   }, [fetchPengunjung]);

//   // Handle klik di luar dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

// // Filter pengunjung berdasarkan kode dan yang belum memiliki nomor antrian
// const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
//   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKode.toLowerCase());
//   const hasNoAntrian = !pengunjung.antrian; // Hanya tampilkan pengunjung yang belum memiliki antrian
//   return isKodeMatch && hasNoAntrian;
// });

//   // Handle pemilihan pengunjung
//   const handleSelectPengunjung = async (pengunjung) => {
//     setSearchKode(pengunjung.kode);
//     setSelectedPengunjung(pengunjung);
//     setIsDropdownOpen(false);
//   };

// // Handle klik di luar dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
//         setIsDropdownTitipanOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

// // Fungsi untuk memformat tanggal ke YYYY-MM-DD
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

// // Ambil tanggal hari ini
// const today = formatDate(new Date());

// // Filter pengunjung berdasarkan tanggal updatedAt yang sama dengan hari ini DAN pencarian kode
// const filteredPengunjungTitipan = pengunjungs.filter((pengunjung) => {
//   const updatedAtFormatted = formatDate(pengunjung.updatedAt);
//   const isToday = updatedAtFormatted === today;
//   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKodeTitipan.toLowerCase());
  
//   return isToday && (searchKodeTitipan === '' || isKodeMatch);
// });


//   // Handle pemilihan pengunjung untuk label titipan
//   const handleSelectPengunjungTitipan = (pengunjung) => {
//     setSearchKodeTitipan(pengunjung.kode);
//     setSelectedPengunjungTitipan(pengunjung);
//     setIsDropdownTitipanOpen(false);
//   };
  

//   // Submit nomor antrian
//   const handleSubmitAntrian = async () => {
//     try {
//       if (!selectedPengunjung?.kode) {
//         setError("Pilih pengunjung terlebih dahulu");
//         return;
//       }

//       const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

//       if (updatedPengunjung) {
//         setAntrian(updatedPengunjung.antrian);
//         setSuccess("Nomor antrian berhasil disimpan");
//         setError("");
//         window.location.reload();
//         setTimeout(() => {
//           setSuccess("");
//           setSearchKode("");
//           setSelectedPengunjung(null);
//           setAntrian(null);
//         }, 3000);
//       }
//     } catch (error) {
//       console.error("Gagal menyimpan antrian:", error);
//       setError("Gagal menyimpan nomor antrian");
//     }
//   };

//   // Handle pengambilan label titipan
//   const handleAmbilLabelTitipan = () => {
//     if (selectedPengunjungTitipan) {
//       navigate(`/label/${selectedPengunjungTitipan.kode}`);
//     }
//   };

//   // Jika authUser null, jangan render apa pun
//   if (!authUser) {
//     return null;
//   }

//     // Jika authUser null, jangan render apa pun
//     if (!authUser) {
//       return null; // atau return <LoadingSpinner /> jika Anda ingin menampilkan loading
//     }
  
//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };

//   const handleLogout = () => {
//     logout();
//     // window.location.reload();
//     navigate("/login")
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-600 text-white shadow-lg">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <img
//               src={logo}
//               alt="Logo Kemenimipas"
//               className="h-12 w-12 rounded-full"
//             />
//             <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
//           </div>

//           <div className="flex-col items-center space-x-4" onClick={toggleMenu}>
//             <div className="flex justify-center" > 
//             <img className="w-10 rounded-full" src={authUser.user?.photo} ></img>
//             </div>
//             <div className="flex justify-center">
//             <h3 className="text-xl text-end">{authUser.user?.role}</h3>
//             </div>
//             <span className="text-sm">
//               Selamat Datang, {authUser.user?.nama}
//             </span>
//             </div>
//         </div>
//                 {isMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                     <div className="flex flex-col p-2">
//                       <>
                          
//                           <button
//                           onClick={handleLogout}
//                             className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
//                           >
//                             <LogOut className="size-5" />
//                             <span>Logout</span>
//                           </button>
//                         </>
//                     </div>
//                   </div>
//                 )}
//       </header>
//       {authUser.user?.role === "admin" && (
//         <>
//           {/* Main Content */}
//           <main className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Card Ambil Nomor Antrian */}
//               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                 <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Ambil Nomor Antrian
//                 </h2>

//                 <div className="relative" ref={dropdownRef}>
//                   <input
//                     type="text"
//                     value={searchKode}
//                     onChange={(e) => {
//                       setSearchKode(e.target.value);
//                       setIsDropdownOpen(true);
//                     }}
//                     onFocus={() => setIsDropdownOpen(true)}
//                     placeholder="Masukkan kode pengunjung..."
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
//                   />

//                   {isDropdownOpen && (
//                     <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                       {filteredPengunjungs.length > 0 ? filteredPengunjungs.map((pengunjung) => (
//                         <div
//                           key={pengunjung.id}
//                           onClick={() => handleSelectPengunjung(pengunjung)}
//                           className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//                         >
//                           <div className="font-medium">{pengunjung.nama}</div>
//                           <div className="text-sm text-gray-500">
//                             Kode: {pengunjung.kode}
//                           </div>
//                         </div>
//                       )):(<div className="p-3 text-gray-500">Tidak ada data</div>)}
//                     </div>
//                   )}
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                   <h2 className="text-xl font-semibold mb-2">
//                     Nomor Antrian Terakhir
//                   </h2>
//                   <p className="text-gray-600 mb-4">
//                     Nomor antrian terakhir yang diambil:
//                   </p>

//                   {lastAntrian ? (
//                     <div className="text-3xl font-bold text-blue-600">
//                       {lastAntrian}
//                     </div>
//                   ) : (
//                     <div className="text-gray-500">Belum ada antrian</div>
//                   )}
//                 </div>

//                 {/* {selectedPengunjung && (
//               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                 <div className="mb-2">
//                   <span className="font-semibold">Nama:</span> {selectedPengunjung.nama}
//                 </div>
//                 <div className="mb-2">
//                   <span className="font-semibold">Kode:</span> {selectedPengunjung.kode}
//                 </div>
//                 <div className="mb-4">
//                   <span className="font-semibold">Nomor Antrian:</span>
//                   <div className="text-2xl font-bold text-blue-600 mt-1">
//                     {antrian}
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleSubmitAntrian}
//                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Konfirmasi Ambil Antrian
//                 </button>
//               </div>
//             )} */}

//                 {selectedPengunjung && (
//                   <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                     <div className="mb-2">
//                       <span className="font-semibold">Nama:</span>{" "}
//                       {selectedPengunjung.nama}
//                     </div>
//                     <div className="mb-2">
//                       <span className="font-semibold">Kode:</span>{" "}
//                       {selectedPengunjung.kode}
//                     </div>
//                     <button
//                       onClick={handleSubmitAntrian}
//                       className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Generate Nomor Antrian
//                     </button>

//                     {antrian && (
//                       <div className="mt-4">
//                         <span className="font-semibold">Nomor Antrian:</span>
//                         <div className="text-2xl font-bold text-blue-600 mt-1">
//                           {antrian}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {error && <div className="text-red-500 mt-2">{error}</div>}
//                 {success && (
//                   <div className="text-green-500 mt-2">{success}</div>
//                 )}
//               </div>
//           {/* Card Ambil Label Titipan */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//             <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
//             <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>

//             <div className="relative" ref={dropdownTitipanRef}>
//   <input
//     type="text"
//     value={searchKodeTitipan}
//     onChange={(e) => {
//       setSearchKodeTitipan(e.target.value);
//       setIsDropdownTitipanOpen(true);
//     }}
//     onFocus={() => setIsDropdownTitipanOpen(true)}
//     placeholder="Masukkan kode pengunjung..."
//     className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
//   />

//   {isDropdownTitipanOpen && (
//     <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//       {filteredPengunjungTitipan.length > 0 ? (
//         filteredPengunjungTitipan.map((pengunjung) => (
//           <div
//             key={pengunjung.id}
//             onClick={() => handleSelectPengunjungTitipan(pengunjung)}
//             className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//           >
//             <div className="font-medium">{pengunjung.nama}</div>
//             <div className="text-sm text-gray-500">
//               Kode: {pengunjung.kode} | Antrian: {pengunjung.antrian}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="p-3 text-gray-500">
//           {searchKodeTitipan ? "Tidak ditemukan" : "Tidak ada data hari ini"}
//         </div>
//       )}
//     </div>
//   )}
// </div>

//             {selectedPengunjungTitipan && (
//               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                 <div className="mb-2">
//                   <span className="font-semibold">Nama:</span>{" "}
//                   {selectedPengunjungTitipan.nama}
//                 </div>
//                 <div className="mb-2">
//                   <span className="font-semibold">Kode:</span>{" "}
//                   {selectedPengunjungTitipan.kode}
//                 </div>
//                 <button
//                   onClick={handleAmbilLabelTitipan}
//                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Ambil Label Titipan
//                 </button>
//               </div>
//             )}
          

//           {/* Komponen lainnya */}
//         </div>
      
//               {/* Daftar Warga Binaan */}
//               <Link
//                 to="/wbp-list"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Daftar Warga Binaan
//                 </h2>
//                 <p className="text-gray-600">
//                   Lihat dan kelola data warga binaan
//                 </p>
//               </Link>

//               {/* Daftar Pengunjung */}
//               <Link
//                 to="/pengunjung"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Daftar Pengunjung
//                 </h2>
//                 <p className="text-gray-600">
//                   Kelola data pengunjung yang tercatat
//                 </p>
//               </Link>

//               {/* Tambah Warga Binaan */}
//               <Link
//                 to="/wargabinaan-form"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Tambah Warga Binaan
//                 </h2>
//                 <p className="text-gray-600">
//                   Tambahkan data warga binaan baru
//                 </p>
//               </Link>

//               {/* Tambah Pengunjung */}
//               <Link
//                 to="/create-pengunjung"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Tambah Pengunjung
//                 </h2>
//                 <p className="text-gray-600">Registrasi pengunjung baru</p>
//               </Link>

//               {/* Admin Panel */}
//               <Link
//                 to="/admin-panel"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <ShieldCheckIcon className="h-12 w-12 text-red-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
//                 <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
//               </Link>
//               {/* Tambah Pengunjung */}
//               <Link
//                 to="/report"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Laporan
//                 </h2>
//                 <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
//               </Link>
//             </div>
//           </main>
//                 {/* Footer */}
//       <footer className="bg-blue-600 text-white mt-12 py-4">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm">
//             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//             reserved
//           </p>
//         </div>
//       </footer>
//         </>
//       )}
//       {authUser.user?.role === "p2u" && (
//         <>
//           {/* Main Content */}
//           <main className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Tambah Pengunjung */}
//               <Link
//                 to="/create-pengunjung"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Tambah Pengunjung
//                 </h2>
//                 <p className="text-gray-600">Registrasi pengunjung baru</p>
//               </Link>
//               {/* Daftar Pengunjung */}
//               <Link
//                 to="/pengunjung"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Daftar Pengunjung
//                 </h2>
//                 <p className="text-gray-600">
//                   Kelola data pengunjung yang tercatat
//                 </p>
//               </Link>
//             </div>
//           </main>
//                 {/* Footer */}
//       <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm">
//             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//             reserved
//           </p>
//         </div>
//       </footer>
//         </>
//       )}
//       {authUser.user?.role === "user" && (
//         <>
//           {/* Main Content */}
//           <main className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Tambah Pengunjung */}
//               <Link
//                 to="/create-pengunjung"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Tambah Pengunjung
//                 </h2>
//                 <p className="text-gray-600">Registrasi pengunjung baru</p>
//               </Link>
//               {/* Daftar Pengunjung */}
//               <Link
//                 to="/pengunjung"
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                 <h2 className="text-xl font-semibold mb-2">
//                   Daftar Pengunjung
//                 </h2>
//                 <p className="text-gray-600">
//                   Kelola data pengunjung yang tercatat
//                 </p>
//               </Link>
//             </div>
//           </main>
//                 {/* Footer */}
//       <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm">
//             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//             reserved
//           </p>
//         </div>
//       </footer>
//         </>
//       )}


//     </div>
//   );
// }


import { useEffect, useState } from "react";
// import { useAuthStore } from "../../store/useAuthStore";
import {  useRef, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserIcon,
  PlusIcon,
  ShieldCheckIcon,
  UsersIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logokemenimipas.png";
import useAuthStore from "../../store/useAuthStore";
import useDataStore from "../../store/useDataStore";
import axios from "axios";
import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { BaggageClaim, Barcode, LogOut, ScrollText, Settings, Wallet } from "lucide-react";

// Komponen Screensaver Animasi
const VisitScreensaver = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-blue-900 z-50 flex items-center justify-center cursor-pointer"
      onClick={onClose}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Animasi Latar Belakang */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Logo Berputar */}
          <div className="animate-spin-slow">
            <svg
              className="w-64 h-64 text-yellow-400 opacity-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center align-center animate-pulse ">
            <img className="rounded-full mt-2" src={logo} />
          </div>
          {/* Animasi Teks */}
          <h1 className="text-5xl font-bold mb-6 animate-pulse">
            SELAMAT DATANG
          </h1>
          
          {/* Kartu Animasi */}
          <div className="inline-block animate-float">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="flex flex-col items-center">
                <Barcode className="h-32 w-32 text-yellow-400 mb-4 animate-bounce" />
                <h2 className="text-3xl font-semibold mb-2">
                  Sistem Kunjungan Digital
                </h2>
                <h2 className="text-3xl font-semibold mb-2">
                  BATARI (Barcode Tanpa Antrian)
                </h2>
                <p className="text-xl opacity-80">
                  Sentuh layar untuk melanjutkan
                </p>
              </div>
            </div>
          </div>

          {/* Animasi Garis Bawah */}
          <div className="mt-12 flex justify-center">
            <div className="w-64 h-1 bg-yellow-400 rounded-full animate-scale-x" />
          </div>
        </div>

        {/* Partikel Animasi */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${2 + i % 3}s infinite`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scale-x {
          animation: scale-x 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

// Modifikasi HomePage (bagian yang relevan)
export default function HomePage() {
  // ... kode sebelumnya ...
  const [showScreensaver, setShowScreensaver] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  const { authUser } = useAuthStore();
    const { logout } = useAuthStore();
  const {
    pengunjungs,
    fetchPengunjung,
    updatePengunjung,
    getNomorAntrianTerakhir,
  } = useDataStore(); // Tambahkan getNomorAntrianTerakhir
  const [searchKode, setSearchKode] = useState("");
  const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
  const [selectedPengunjung, setSelectedPengunjung] = useState(null);
  const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
  const [antrian, setAntrian] = useState(null);
  const [antrianTitipan, setAntrianTitipan] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
  const dropdownRef = useRef(null);
  const updateAntrian = useDataStore((state) => state.updateAntrian);
  const [lastAntrian, setLastAntrian] = useState("000");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownTitipanRef = useRef(null);
  const navigate = useNavigate();
  // Redirect ke halaman login jika authUser null
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);


  useEffect(() => {
    const fetchLastAntrian = async () => {
      const antrian = await getNomorAntrianTerakhir();
      if (antrian) {
        setLastAntrian(antrian); // Format "001"
      }
    };

    fetchLastAntrian();
  }, [getNomorAntrianTerakhir]);

  // Fetch data pengunjung saat komponen dimuat
  useEffect(() => {
    fetchPengunjung();
  }, [fetchPengunjung]);

  // Handle klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (authUser?.user?.role === "admin") {
      // Tambah event listeners
      const events = ["mousemove", "keydown", "click", "scroll"];
      events.forEach(event => 
        window.addEventListener(event, resetInactivityTimer)
      );

      resetInactivityTimer();

      return () => {
        events.forEach(event => 
          window.removeEventListener(event, resetInactivityTimer)
        );
        clearTimeout(inactivityTimer);
      };
    }
  }, [authUser]);

// Filter pengunjung berdasarkan kode dan yang belum memiliki nomor antrian
const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
  const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKode.toLowerCase());
  const hasNoAntrian = !pengunjung.antrian; // Hanya tampilkan pengunjung yang belum memiliki antrian
  return isKodeMatch && hasNoAntrian;
});

  // Handle pemilihan pengunjung
  const handleSelectPengunjung = async (pengunjung) => {
    setSearchKode(pengunjung.kode);
    setSelectedPengunjung(pengunjung);
    setIsDropdownOpen(false);
  };

// Handle klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
        setIsDropdownTitipanOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

// Fungsi untuk memformat tanggal ke YYYY-MM-DD
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Ambil tanggal hari ini
const today = formatDate(new Date());

// Filter pengunjung berdasarkan tanggal updatedAt yang sama dengan hari ini DAN pencarian kode
const filteredPengunjungTitipan = pengunjungs.filter((pengunjung) => {
  const updatedAtFormatted = formatDate(pengunjung.updatedAt);
  const isToday = updatedAtFormatted === today;
  const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKodeTitipan.toLowerCase());
  
  return isToday && (searchKodeTitipan === '' || isKodeMatch);
});


  // Handle pemilihan pengunjung untuk label titipan
  const handleSelectPengunjungTitipan = (pengunjung) => {
    setSearchKodeTitipan(pengunjung.kode);
    setSelectedPengunjungTitipan(pengunjung);
    setIsDropdownTitipanOpen(false);
  };
  

  // Submit nomor antrian
  const handleSubmitAntrian = async () => {
    try {
      if (!selectedPengunjung?.kode) {
        setError("Pilih pengunjung terlebih dahulu");
        return;
      }

      const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

      if (updatedPengunjung) {
        setAntrian(updatedPengunjung.antrian);
        setSuccess("Nomor antrian berhasil disimpan");
        setError("");
        window.location.reload();
        setTimeout(() => {
          setSuccess("");
          setSearchKode("");
          setSelectedPengunjung(null);
          setAntrian(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Gagal menyimpan antrian:", error);
      setError("Gagal menyimpan nomor antrian");
    }
  };

  // Handle pengambilan label titipan
  const handleAmbilLabelTitipan = () => {
    if (selectedPengunjungTitipan) {
      navigate(`/label/${selectedPengunjungTitipan.kode}`);
    }
  };

  // Jika authUser null, jangan render apa pun
  if (!authUser) {
    return null;
  }

    // Jika authUser null, jangan render apa pun
    if (!authUser) {
      return null; // atau return <LoadingSpinner /> jika Anda ingin menampilkan loading
    }
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  const handleLogout = () => {
    logout();
    // window.location.reload();
    navigate("/login")
  }

  const resetInactivityTimer = () => {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    setInactivityTimer(
      setTimeout(() => {
        if (authUser?.user?.role === "admin") {
          setShowScreensaver(true);
        }
      }, 15000) // 30 detik
    );
  };

 

  const handleCloseScreensaver = () => {
    setShowScreensaver(false);
    resetInactivityTimer();
  };

  // Di dalam return HomePage
  return (
    <div className="min-h-screen bg-gray-50">
      {authUser?.user?.role === "admin" && showScreensaver ? (
        <VisitScreensaver onClose={handleCloseScreensaver} />
      ) : (
           <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo Kemenimipas"
              className="h-12 w-12 rounded-full"
            />
            <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
          </div>

          <div className="flex-col items-center space-x-4" onClick={toggleMenu}>
            <div className="flex justify-center" > 
            <img className="w-10 rounded-full" src={authUser.user?.photo} ></img>
            </div>
            <div className="flex justify-center">
            <h3 className="text-xl text-end">{authUser.user?.role}</h3>
            </div>
            <span className="text-sm">
              Selamat Datang, {authUser.user?.nama}
            </span>
            </div>
        </div>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col p-2">
                      <>
                          
                          <button
                          onClick={handleLogout}
                            className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                          >
                            <LogOut className="size-5" />
                            <span>Logout</span>
                          </button>
                        </>
                    </div>
                  </div>
                )}
      </header>
      {authUser.user?.role === "admin" && (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Ambil Nomor Antrian */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Ambil Nomor Antrian
                </h2>

                <div className="relative" ref={dropdownRef}>
                  <input
                    type="text"
                    value={searchKode}
                    onChange={(e) => {
                      setSearchKode(e.target.value);
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    placeholder="Masukkan kode pengunjung..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
                  />

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredPengunjungs.length > 0 ? filteredPengunjungs.map((pengunjung) => (
                        <div
                          key={pengunjung.id}
                          onClick={() => handleSelectPengunjung(pengunjung)}
                          className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
                        >
                          <div className="font-medium">{pengunjung.nama}</div>
                          <div className="text-sm text-gray-500">
                            Kode: {pengunjung.kode}
                          </div>
                        </div>
                      )):(<div className="p-3 text-gray-500">Tidak ada data</div>)}
                    </div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                  <h2 className="text-xl font-semibold mb-2">
                    Nomor Antrian Terakhir
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Nomor antrian terakhir yang diambil:
                  </p>

                  {lastAntrian ? (
                    <div className="text-3xl font-bold text-blue-600">
                      {lastAntrian}
                    </div>
                  ) : (
                    <div className="text-gray-500">Belum ada antrian</div>
                  )}
                </div>

                {/* {selectedPengunjung && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="mb-2">
                  <span className="font-semibold">Nama:</span> {selectedPengunjung.nama}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Kode:</span> {selectedPengunjung.kode}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Nomor Antrian:</span>
                  <div className="text-2xl font-bold text-blue-600 mt-1">
                    {antrian}
                  </div>
                </div>
                <button
                  onClick={handleSubmitAntrian}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Konfirmasi Ambil Antrian
                </button>
              </div>
            )} */}

                {selectedPengunjung && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="mb-2">
                      <span className="font-semibold">Nama:</span>{" "}
                      {selectedPengunjung.nama}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Kode:</span>{" "}
                      {selectedPengunjung.kode}
                    </div>
                    <button
                      onClick={handleSubmitAntrian}
                      className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Generate Nomor Antrian
                    </button>

                    {antrian && (
                      <div className="mt-4">
                        <span className="font-semibold">Nomor Antrian:</span>
                        <div className="text-2xl font-bold text-blue-600 mt-1">
                          {antrian}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && (
                  <div className="text-green-500 mt-2">{success}</div>
                )}
              </div>
          {/* Card Ambil Label Titipan */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>

            <div className="relative" ref={dropdownTitipanRef}>
  <input
    type="text"
    value={searchKodeTitipan}
    onChange={(e) => {
      setSearchKodeTitipan(e.target.value);
      setIsDropdownTitipanOpen(true);
    }}
    onFocus={() => setIsDropdownTitipanOpen(true)}
    placeholder="Masukkan kode pengunjung..."
    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
  />

  {isDropdownTitipanOpen && (
    <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {filteredPengunjungTitipan.length > 0 ? (
        filteredPengunjungTitipan.map((pengunjung) => (
          <div
            key={pengunjung.id}
            onClick={() => handleSelectPengunjungTitipan(pengunjung)}
            className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
          >
            <div className="font-medium">{pengunjung.nama}</div>
            <div className="text-sm text-gray-500">
              Kode: {pengunjung.kode} | Antrian: {pengunjung.antrian}
            </div>
          </div>
        ))
      ) : (
        <div className="p-3 text-gray-500">
          {searchKodeTitipan ? "Tidak ditemukan" : "Tidak ada data hari ini"}
        </div>
      )}
    </div>
  )}
</div>

            {selectedPengunjungTitipan && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="mb-2">
                  <span className="font-semibold">Nama:</span>{" "}
                  {selectedPengunjungTitipan.nama}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Kode:</span>{" "}
                  {selectedPengunjungTitipan.kode}
                </div>
                <button
                  onClick={handleAmbilLabelTitipan}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ambil Label Titipan
                </button>
              </div>
            )}
          

          {/* Komponen lainnya */}
        </div>
      
              {/* Daftar Warga Binaan */}
              <Link
                to="/wbp-list"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Daftar Warga Binaan
                </h2>
                <p className="text-gray-600">
                  Lihat dan kelola data warga binaan
                </p>
              </Link>

              {/* Daftar Pengunjung */}
              <Link
                to="/pengunjung"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <UserIcon className="h-12 w-12 text-green-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Daftar Pengunjung
                </h2>
                <p className="text-gray-600">
                  Kelola data pengunjung yang tercatat
                </p>
              </Link>

              {/* Tambah Warga Binaan */}
              <Link
                to="/wargabinaan-form"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Tambah Warga Binaan
                </h2>
                <p className="text-gray-600">
                  Tambahkan data warga binaan baru
                </p>
              </Link>

              {/* Tambah Pengunjung */}
              <Link
                to="/create-pengunjung"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Tambah Pengunjung
                </h2>
                <p className="text-gray-600">Registrasi pengunjung baru</p>
              </Link>

              {/* Admin Panel */}
              <Link
                to="/admin-panel"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ShieldCheckIcon className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
                <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
              </Link>
              {/* Tambah Pengunjung */}
              <Link
                to="/report"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Laporan
                </h2>
                <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
              </Link>
            </div>
          </main>
                {/* Footer */}
      <footer className="bg-blue-600 text-white mt-12 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
            reserved
          </p>
        </div>
      </footer>
        </>
      )}
      {authUser.user?.role === "p2u" && (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tambah Pengunjung */}
              <Link
                to="/create-pengunjung"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Tambah Pengunjung
                </h2>
                <p className="text-gray-600">Registrasi pengunjung baru</p>
              </Link>
              {/* Daftar Pengunjung */}
              <Link
                to="/pengunjung"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <UserIcon className="h-12 w-12 text-green-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Daftar Pengunjung
                </h2>
                <p className="text-gray-600">
                  Kelola data pengunjung yang tercatat
                </p>
              </Link>
            </div>
          </main>
                {/* Footer */}
      <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
            reserved
          </p>
        </div>
      </footer>
        </>
      )}
      {authUser.user?.role === "user" && (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tambah Pengunjung */}
              <Link
                to="/create-pengunjung"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Tambah Pengunjung
                </h2>
                <p className="text-gray-600">Registrasi pengunjung baru</p>
              </Link>
              {/* Daftar Pengunjung */}
              <Link
                to="/pengunjung"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <UserIcon className="h-12 w-12 text-green-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Daftar Pengunjung
                </h2>
                <p className="text-gray-600">
                  Kelola data pengunjung yang tercatat
                </p>
              </Link>
            </div>
          </main>
                {/* Footer */}
      <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
            reserved
          </p>
        </div>
      </footer>
        </>
      )}


    </div>
      )}
    </div>
  );
}