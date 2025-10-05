// // // // import { useEffect, useState, useRef, use } from "react";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import {
// // // //   UserIcon,
// // // //   PlusIcon,
// // // //   ShieldCheckIcon,
// // // //   UsersIcon,
// // // //   TicketIcon,
// // // // } from "@heroicons/react/24/outline";
// // // // import logo from "../../assets/logokemenimipas.png";
// // // // import useAuthStore from "../../store/useAuthStore";
// // // // import useDataStore from "../../store/useDataStore";
// // // // import axios from "axios";
// // // // import toast from "react-hot-toast";
// // // // import { FaHome } from "react-icons/fa";
// // // // import { BaggageClaim, LogOut, ScrollText, Settings, Wallet } from "lucide-react";

// // // // export default function HomePage() {
// // // //   const { authUser, logout } = useAuthStore();
// // // //   const {
// // // //     pengunjungs,
// // // //     fetchPengunjung,
// // // //     updatePengunjung,
// // // //     getNomorAntrianTerakhir,
// // // //   } = useDataStore(); // Tambahkan getNomorAntrianTerakhir
// // // //   const [searchKode, setSearchKode] = useState("");
// // // //   const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
// // // //   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
// // // //   const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
// // // //   const [antrian, setAntrian] = useState(null);
// // // //   const [antrianTitipan, setAntrianTitipan] = useState(null);
// // // //   const [error, setError] = useState("");
// // // //   const [success, setSuccess] = useState("");
// // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // //   const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
// // // //   const dropdownRef = useRef(null);
// // // //   const updateAntrian = useDataStore((state) => state.updateAntrian);
// // // //   const [lastAntrian, setLastAntrian] = useState("000");
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // // //   const dropdownTitipanRef = useRef(null);
// // // //   const navigate = useNavigate();
// // // //   // Redirect ke halaman login jika authUser null
// // // //   useEffect(() => {
// // // //     if (!authUser) {
// // // //       navigate("/login");
// // // //     }
// // // //   }, [authUser, navigate]);


// // // //   useEffect(() => {
// // // //     const fetchLastAntrian = async () => {
// // // //       const antrian = await getNomorAntrianTerakhir();
// // // //       if (antrian) {
// // // //         setLastAntrian(antrian); // Format "001"
// // // //       }
// // // //     };

// // // //     fetchLastAntrian();
// // // //   }, [getNomorAntrianTerakhir]);

// // // //   // Fetch data pengunjung saat komponen dimuat
// // // //   useEffect(() => {
// // // //     fetchPengunjung();
// // // //   }, [fetchPengunjung]);

// // // //   // Handle klik di luar dropdown
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // // //         setIsDropdownOpen(false);
// // // //       }
// // // //     };
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, []);

// // // // // Filter pengunjung berdasarkan kode dan yang belum memiliki nomor antrian
// // // // const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
// // // //   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKode.toLowerCase());
// // // //   const hasNoAntrian = !pengunjung.antrian; // Hanya tampilkan pengunjung yang belum memiliki antrian
// // // //   return isKodeMatch && hasNoAntrian;
// // // // });

// // // //   // Handle pemilihan pengunjung
// // // //   const handleSelectPengunjung = async (pengunjung) => {
// // // //     setSearchKode(pengunjung.kode);
// // // //     setSelectedPengunjung(pengunjung);
// // // //     setIsDropdownOpen(false);
// // // //   };

// // // // // Handle klik di luar dropdown
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
// // // //         setIsDropdownTitipanOpen(false);
// // // //       }
// // // //     };
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, []);

// // // // // Fungsi untuk memformat tanggal ke YYYY-MM-DD
// // // // const formatDate = (dateString) => {
// // // //   const date = new Date(dateString);
// // // //   const year = date.getFullYear();
// // // //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
// // // //   const day = String(date.getDate()).padStart(2, '0');
// // // //   return `${year}-${month}-${day}`;
// // // // };

// // // // // Ambil tanggal hari ini
// // // // const today = formatDate(new Date());

// // // // // Filter pengunjung berdasarkan tanggal updatedAt yang sama dengan hari ini DAN pencarian kode
// // // // const filteredPengunjungTitipan = pengunjungs.filter((pengunjung) => {
// // // //   const updatedAtFormatted = formatDate(pengunjung.updatedAt);
// // // //   const isToday = updatedAtFormatted === today;
// // // //   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKodeTitipan.toLowerCase());
  
// // // //   return isToday && (searchKodeTitipan === '' || isKodeMatch);
// // // // });


// // // //   // Handle pemilihan pengunjung untuk label titipan
// // // //   const handleSelectPengunjungTitipan = (pengunjung) => {
// // // //     setSearchKodeTitipan(pengunjung.kode);
// // // //     setSelectedPengunjungTitipan(pengunjung);
// // // //     setIsDropdownTitipanOpen(false);
// // // //   };
  

// // // //   // Submit nomor antrian
// // // //   const handleSubmitAntrian = async () => {
// // // //     try {
// // // //       if (!selectedPengunjung?.kode) {
// // // //         setError("Pilih pengunjung terlebih dahulu");
// // // //         return;
// // // //       }

// // // //       const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

// // // //       if (updatedPengunjung) {
// // // //         setAntrian(updatedPengunjung.antrian);
// // // //         setSuccess("Nomor antrian berhasil disimpan");
// // // //         setError("");
// // // //         window.location.reload();
// // // //         setTimeout(() => {
// // // //           setSuccess("");
// // // //           setSearchKode("");
// // // //           setSelectedPengunjung(null);
// // // //           setAntrian(null);
// // // //         }, 3000);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Gagal menyimpan antrian:", error);
// // // //       setError("Gagal menyimpan nomor antrian");
// // // //     }
// // // //   };

// // // //   // Handle pengambilan label titipan
// // // //   const handleAmbilLabelTitipan = () => {
// // // //     if (selectedPengunjungTitipan) {
// // // //       navigate(`/label/${selectedPengunjungTitipan.kode}`);
// // // //     }
// // // //   };

// // // //   // Jika authUser null, jangan render apa pun
// // // //   if (!authUser) {
// // // //     return null;
// // // //   }

// // // //     // Jika authUser null, jangan render apa pun
// // // //     if (!authUser) {
// // // //       return null; // atau return <LoadingSpinner /> jika Anda ingin menampilkan loading
// // // //     }
  
// // // //     const toggleMenu = () => {
// // // //       setIsMenuOpen(!isMenuOpen);
// // // //     };

// // // //   const handleLogout = () => {
// // // //     logout();
// // // //     // window.location.reload();
// // // //     navigate("/login")
// // // //   }
// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       {/* Header */}
// // // //       <header className="bg-blue-600 text-white shadow-lg">
// // // //         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// // // //           <div className="flex items-center space-x-4">
// // // //             <img
// // // //               src={logo}
// // // //               alt="Logo Kemenimipas"
// // // //               className="h-12 w-12 rounded-full"
// // // //             />
// // // //             <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
// // // //           </div>

// // // //           <div className="flex-col items-center space-x-4" onClick={toggleMenu}>
// // // //             <div className="flex justify-center" > 
// // // //             <img className="w-10 rounded-full" src={authUser.user?.photo} ></img>
// // // //             </div>
// // // //             <div className="flex justify-center">
// // // //             <h3 className="text-xl text-end">{authUser.user?.role}</h3>
// // // //             </div>
// // // //             <span className="text-sm">
// // // //               Selamat Datang, {authUser.user?.nama}
// // // //             </span>
// // // //             </div>
// // // //         </div>
// // // //                 {isMenuOpen && (
// // // //                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
// // // //                     <div className="flex flex-col p-2">
// // // //                       <>
                          
// // // //                           <button
// // // //                           onClick={handleLogout}
// // // //                             className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
// // // //                           >
// // // //                             <LogOut className="size-5" />
// // // //                             <span>Logout</span>
// // // //                           </button>
// // // //                         </>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
// // // //       </header>
// // // //       {authUser.user?.role === "admin" && (
// // // //         <>
// // // //           {/* Main Content */}
// // // //           <main className="container mx-auto px-4 py-8">
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //               {/* Card Ambil Nomor Antrian */}
// // // //               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
// // // //                 <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Ambil Nomor Antrian
// // // //                 </h2>

// // // //                 <div className="relative" ref={dropdownRef}>
// // // //                   <input
// // // //                     type="text"
// // // //                     value={searchKode}
// // // //                     onChange={(e) => {
// // // //                       setSearchKode(e.target.value);
// // // //                       setIsDropdownOpen(true);
// // // //                     }}
// // // //                     onFocus={() => setIsDropdownOpen(true)}
// // // //                     placeholder="Masukkan kode pengunjung..."
// // // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
// // // //                   />

// // // //                   {isDropdownOpen && (
// // // //                     <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // // //                       {filteredPengunjungs.length > 0 ? filteredPengunjungs.map((pengunjung) => (
// // // //                         <div
// // // //                           key={pengunjung.id}
// // // //                           onClick={() => handleSelectPengunjung(pengunjung)}
// // // //                           className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
// // // //                         >
// // // //                           <div className="font-medium">{pengunjung.nama}</div>
// // // //                           <div className="text-sm text-gray-500">
// // // //                             Kode: {pengunjung.kode}
// // // //                           </div>
// // // //                         </div>
// // // //                       )):(<div className="p-3 text-gray-500">Tidak ada data</div>)}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
// // // //                   <h2 className="text-xl font-semibold mb-2">
// // // //                     Nomor Antrian Terakhir
// // // //                   </h2>
// // // //                   <p className="text-gray-600 mb-4">
// // // //                     Nomor antrian terakhir yang diambil:
// // // //                   </p>

// // // //                   {lastAntrian ? (
// // // //                     <div className="text-3xl font-bold text-blue-600">
// // // //                       {lastAntrian}
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="text-gray-500">Belum ada antrian</div>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* {selectedPengunjung && (
// // // //               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// // // //                 <div className="mb-2">
// // // //                   <span className="font-semibold">Nama:</span> {selectedPengunjung.nama}
// // // //                 </div>
// // // //                 <div className="mb-2">
// // // //                   <span className="font-semibold">Kode:</span> {selectedPengunjung.kode}
// // // //                 </div>
// // // //                 <div className="mb-4">
// // // //                   <span className="font-semibold">Nomor Antrian:</span>
// // // //                   <div className="text-2xl font-bold text-blue-600 mt-1">
// // // //                     {antrian}
// // // //                   </div>
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={handleSubmitAntrian}
// // // //                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
// // // //                 >
// // // //                   Konfirmasi Ambil Antrian
// // // //                 </button>
// // // //               </div>
// // // //             )} */}

// // // //                 {selectedPengunjung && (
// // // //                   <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// // // //                     <div className="mb-2">
// // // //                       <span className="font-semibold">Nama:</span>{" "}
// // // //                       {selectedPengunjung.nama}
// // // //                     </div>
// // // //                     <div className="mb-2">
// // // //                       <span className="font-semibold">Kode:</span>{" "}
// // // //                       {selectedPengunjung.kode}
// // // //                     </div>
// // // //                     <button
// // // //                       onClick={handleSubmitAntrian}
// // // //                       className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors"
// // // //                     >
// // // //                       Generate Nomor Antrian
// // // //                     </button>

// // // //                     {antrian && (
// // // //                       <div className="mt-4">
// // // //                         <span className="font-semibold">Nomor Antrian:</span>
// // // //                         <div className="text-2xl font-bold text-blue-600 mt-1">
// // // //                           {antrian}
// // // //                         </div>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 )}

// // // //                 {error && <div className="text-red-500 mt-2">{error}</div>}
// // // //                 {success && (
// // // //                   <div className="text-green-500 mt-2">{success}</div>
// // // //                 )}
// // // //               </div>
// // // //           {/* Card Ambil Label Titipan */}
// // // //           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
// // // //             <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
// // // //             <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>

// // // //             <div className="relative" ref={dropdownTitipanRef}>
// // // //   <input
// // // //     type="text"
// // // //     value={searchKodeTitipan}
// // // //     onChange={(e) => {
// // // //       setSearchKodeTitipan(e.target.value);
// // // //       setIsDropdownTitipanOpen(true);
// // // //     }}
// // // //     onFocus={() => setIsDropdownTitipanOpen(true)}
// // // //     placeholder="Masukkan kode pengunjung..."
// // // //     className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
// // // //   />

// // // //   {isDropdownTitipanOpen && (
// // // //     <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// // // //       {filteredPengunjungTitipan.length > 0 ? (
// // // //         filteredPengunjungTitipan.map((pengunjung) => (
// // // //           <div
// // // //             key={pengunjung.id}
// // // //             onClick={() => handleSelectPengunjungTitipan(pengunjung)}
// // // //             className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
// // // //           >
// // // //             <div className="font-medium">{pengunjung.nama}</div>
// // // //             <div className="text-sm text-gray-500">
// // // //               Kode: {pengunjung.kode} | Antrian: {pengunjung.antrian}
// // // //             </div>
// // // //           </div>
// // // //         ))
// // // //       ) : (
// // // //         <div className="p-3 text-gray-500">
// // // //           {searchKodeTitipan ? "Tidak ditemukan" : "Tidak ada data hari ini"}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   )}
// // // // </div>

// // // //             {selectedPengunjungTitipan && (
// // // //               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// // // //                 <div className="mb-2">
// // // //                   <span className="font-semibold">Nama:</span>{" "}
// // // //                   {selectedPengunjungTitipan.nama}
// // // //                 </div>
// // // //                 <div className="mb-2">
// // // //                   <span className="font-semibold">Kode:</span>{" "}
// // // //                   {selectedPengunjungTitipan.kode}
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={handleAmbilLabelTitipan}
// // // //                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
// // // //                 >
// // // //                   Ambil Label Titipan
// // // //                 </button>
// // // //               </div>
// // // //             )}
          

// // // //           {/* Komponen lainnya */}
// // // //         </div>
      
// // // //               {/* Daftar Warga Binaan */}
// // // //               <Link
// // // //                 to="/wbp-list"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Daftar Warga Binaan
// // // //                 </h2>
// // // //                 <p className="text-gray-600">
// // // //                   Lihat dan kelola data warga binaan
// // // //                 </p>
// // // //               </Link>

// // // //               {/* Daftar Pengunjung */}
// // // //               <Link
// // // //                 to="/pengunjung"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Daftar Pengunjung
// // // //                 </h2>
// // // //                 <p className="text-gray-600">
// // // //                   Kelola data pengunjung yang tercatat
// // // //                 </p>
// // // //               </Link>

// // // //               {/* Tambah Warga Binaan */}
// // // //               <Link
// // // //                 to="/wargabinaan-form"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Tambah Warga Binaan
// // // //                 </h2>
// // // //                 <p className="text-gray-600">
// // // //                   Tambahkan data warga binaan baru
// // // //                 </p>
// // // //               </Link>

// // // //               {/* Tambah Pengunjung */}
// // // //               <Link
// // // //                 to="/create-pengunjung"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Tambah Pengunjung
// // // //                 </h2>
// // // //                 <p className="text-gray-600">Registrasi pengunjung baru</p>
// // // //               </Link>

// // // //               {/* Admin Panel */}
// // // //               <Link
// // // //                 to="/admin-panel"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <ShieldCheckIcon className="h-12 w-12 text-red-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
// // // //                 <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
// // // //               </Link>
// // // //               {/* Tambah Pengunjung */}
// // // //               <Link
// // // //                 to="/report"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Laporan
// // // //                 </h2>
// // // //                 <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
// // // //               </Link>
// // // //             </div>
// // // //           </main>
// // // //                 {/* Footer */}
// // // //       <footer className="bg-blue-600 text-white mt-12 py-4">
// // // //         <div className="container mx-auto px-4 text-center">
// // // //           <p className="text-sm">
// // // //             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
// // // //             reserved
// // // //           </p>
// // // //         </div>
// // // //       </footer>
// // // //         </>
// // // //       )}
// // // //       {authUser.user?.role === "p2u" && (
// // // //         <>
// // // //           {/* Main Content */}
// // // //           <main className="container mx-auto px-4 py-8">
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //               {/* Tambah Pengunjung */}
// // // //               <Link
// // // //                 to="/create-pengunjung"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Tambah Pengunjung
// // // //                 </h2>
// // // //                 <p className="text-gray-600">Registrasi pengunjung baru</p>
// // // //               </Link>
// // // //               {/* Daftar Pengunjung */}
// // // //               <Link
// // // //                 to="/pengunjung"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Daftar Pengunjung
// // // //                 </h2>
// // // //                 <p className="text-gray-600">
// // // //                   Kelola data pengunjung yang tercatat
// // // //                 </p>
// // // //               </Link>
// // // //             </div>
// // // //           </main>
// // // //                 {/* Footer */}
// // // //       <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
// // // //         <div className="container mx-auto px-4 text-center">
// // // //           <p className="text-sm">
// // // //             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
// // // //             reserved
// // // //           </p>
// // // //         </div>
// // // //       </footer>
// // // //         </>
// // // //       )}
// // // //       {authUser.user?.role === "user" && (
// // // //         <>
// // // //           {/* Main Content */}
// // // //           <main className="container mx-auto px-4 py-8">
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //               {/* Tambah Pengunjung */}
// // // //               <Link
// // // //                 to="/create-pengunjung"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Tambah Pengunjung
// // // //                 </h2>
// // // //                 <p className="text-gray-600">Registrasi pengunjung baru</p>
// // // //               </Link>
// // // //               {/* Daftar Pengunjung */}
// // // //               <Link
// // // //                 to="/pengunjung"
// // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //               >
// // // //                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
// // // //                 <h2 className="text-xl font-semibold mb-2">
// // // //                   Daftar Pengunjung
// // // //                 </h2>
// // // //                 <p className="text-gray-600">
// // // //                   Kelola data pengunjung yang tercatat
// // // //                 </p>
// // // //               </Link>
// // // //             </div>
// // // //           </main>
// // // //                 {/* Footer */}
// // // //       <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
// // // //         <div className="container mx-auto px-4 text-center">
// // // //           <p className="text-sm">
// // // //             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
// // // //             reserved
// // // //           </p>
// // // //         </div>
// // // //       </footer>
// // // //         </>
// // // //       )}


// // // //     </div>
// // // //   );
// // // // }


// // import { useEffect, useState } from "react";
// // // import { useAuthStore } from "../../store/useAuthStore";
// // import {  useRef, use } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   UserIcon,
// //   PlusIcon,
// //   ShieldCheckIcon,
// //   UsersIcon,
// //   TicketIcon,
// // } from "@heroicons/react/24/outline";
// // import logo from "../../assets/logokemenimipas.png";
// // import useAuthStore from "../../store/useAuthStore";
// // import useDataStore from "../../store/useDataStore";
// // import axios from "axios";
// // import toast from "react-hot-toast";
// // import { FaHome } from "react-icons/fa";
// // import { BaggageClaim, Barcode, LogOut, ScrollText, Settings, Wallet } from "lucide-react";

// // // Komponen Screensaver Animasi
// // const VisitScreensaver = ({ onClose }) => {
// //   return (
// //     <div 
// //       className="fixed inset-0 bg-blue-900 z-50 flex items-center justify-center cursor-pointer"
// //       onClick={onClose}
// //     >
// //       <div className="relative w-full h-full overflow-hidden">
// //         {/* Animasi Latar Belakang */}
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           {/* Logo Berputar */}
// //           <div className="animate-spin-slow">
// //             <svg
// //               className="w-64 h-64 text-yellow-400 opacity-20"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
// //               />
// //             </svg>
// //           </div>
// //         </div>

// //         {/* Konten Utama */}
// //         <div className="relative z-10 text-center text-white">
// //           <div className="flex justify-center align-center animate-pulse ">
// //             <img className="rounded-full mt-2" src={logo} />
// //           </div>
// //           {/* Animasi Teks */}
// //           <h1 className="text-5xl font-bold mb-6 animate-pulse">
// //             SELAMAT DATANG
// //           </h1>
          
// //           {/* Kartu Animasi */}
// //           <div className="inline-block animate-float">
// //             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
// //               <div className="flex flex-col items-center">
// //                 <Barcode className="h-32 w-32 text-yellow-400 mb-4 animate-bounce" />
// //                 <h2 className="text-3xl font-semibold mb-2">
// //                   Sistem Kunjungan Digital
// //                 </h2>
// //                 <h2 className="text-3xl font-semibold mb-2">
// //                   BATARI (Barcode Tanpa Antrian)
// //                 </h2>
// //                 <p className="text-xl opacity-80">
// //                   Sentuh layar untuk melanjutkan
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Animasi Garis Bawah */}
// //           <div className="mt-12 flex justify-center">
// //             <div className="w-64 h-1 bg-yellow-400 rounded-full animate-scale-x" />
// //           </div>
// //         </div>

// //         {/* Partikel Animasi */}
// //         {[...Array(20)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute w-2 h-2 bg-yellow-400 rounded-full"
// //             style={{
// //               top: Math.random() * 100 + "%",
// //               left: Math.random() * 100 + "%",
// //               animation: `twinkle ${2 + i % 3}s infinite`
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <style jsx global>{`
// //         @keyframes spin-slow {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }

// //         @keyframes float {
// //           0%, 100% { transform: translateY(0); }
// //           50% { transform: translateY(-20px); }
// //         }

// //         @keyframes scale-x {
// //           0% { transform: scaleX(0); }
// //           100% { transform: scaleX(1); }
// //         }

// //         @keyframes twinkle {
// //           0% { opacity: 0.2; }
// //           50% { opacity: 1; }
// //           100% { opacity: 0.2; }
// //         }

// //         .animate-spin-slow {
// //           animation: spin-slow 30s linear infinite;
// //         }

// //         .animate-float {
// //           animation: float 6s ease-in-out infinite;
// //         }

// //         .animate-scale-x {
// //           animation: scale-x 2s ease-in-out infinite alternate;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // // Modifikasi HomePage (bagian yang relevan)
// // export default function HomePage() {
// //   // ... kode sebelumnya ...
// //   const [showScreensaver, setShowScreensaver] = useState(false);
// //   const [inactivityTimer, setInactivityTimer] = useState(null);
// //   const { authUser } = useAuthStore();
// //     const { logout } = useAuthStore();
// //   const {
// //     pengunjungs,
// //     fetchPengunjung,
// //     updatePengunjung,
// //     getNomorAntrianTerakhir,
// //   } = useDataStore(); // Tambahkan getNomorAntrianTerakhir
// //   const [searchKode, setSearchKode] = useState("");
// //   const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
// //   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
// //   const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
// //   const [antrian, setAntrian] = useState(null);
// //   const [antrianTitipan, setAntrianTitipan] = useState(null);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const updateAntrian = useDataStore((state) => state.updateAntrian);
// //   const [lastAntrian, setLastAntrian] = useState("000");
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const dropdownTitipanRef = useRef(null);
// //   const navigate = useNavigate();
// //   // Redirect ke halaman login jika authUser null
// //   useEffect(() => {
// //     if (!authUser) {
// //       navigate("/login");
// //     }
// //   }, [authUser, navigate]);


// //   useEffect(() => {
// //     const fetchLastAntrian = async () => {
// //       const antrian = await getNomorAntrianTerakhir();
// //       if (antrian) {
// //         setLastAntrian(antrian); // Format "001"
// //       }
// //     };

// //     fetchLastAntrian();
// //   }, [getNomorAntrianTerakhir]);

// //   // Fetch data pengunjung saat komponen dimuat
// //   useEffect(() => {
// //     fetchPengunjung();
// //   }, [fetchPengunjung]);

// //   // Handle klik di luar dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     if (authUser?.user?.role === "admin") {
// //       // Tambah event listeners
// //       const events = ["mousemove", "keydown", "click", "scroll"];
// //       events.forEach(event => 
// //         window.addEventListener(event, resetInactivityTimer)
// //       );

// //       resetInactivityTimer();

// //       return () => {
// //         events.forEach(event => 
// //           window.removeEventListener(event, resetInactivityTimer)
// //         );
// //         clearTimeout(inactivityTimer);
// //       };
// //     }
// //   }, [authUser]);

// // // Filter pengunjung berdasarkan kode dan yang belum memiliki nomor antrian
// // const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
// //   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKode.toLowerCase());
// //   const hasNoAntrian = !pengunjung.antrian; // Hanya tampilkan pengunjung yang belum memiliki antrian
// //   return isKodeMatch && hasNoAntrian;
// // });

// //   // Handle pemilihan pengunjung
// //   const handleSelectPengunjung = async (pengunjung) => {
// //     setSearchKode(pengunjung.kode);
// //     setSelectedPengunjung(pengunjung);
// //     setIsDropdownOpen(false);
// //   };

// // // Handle klik di luar dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
// //         setIsDropdownTitipanOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// // // Fungsi untuk memformat tanggal ke YYYY-MM-DD
// // const formatDate = (dateString) => {
// //   const date = new Date(dateString);
// //   const year = date.getFullYear();
// //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
// //   const day = String(date.getDate()).padStart(2, '0');
// //   return `${year}-${month}-${day}`;
// // };

// // // Ambil tanggal hari ini
// // const today = formatDate(new Date());

// // // Filter pengunjung berdasarkan tanggal updatedAt yang sama dengan hari ini DAN pencarian kode
// // const filteredPengunjungTitipan = pengunjungs.filter((pengunjung) => {
// //   const updatedAtFormatted = formatDate(pengunjung.updatedAt);
// //   const isToday = updatedAtFormatted === today;
// //   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKodeTitipan.toLowerCase());
  
// //   return isToday && (searchKodeTitipan === '' || isKodeMatch);
// // });


// //   // Handle pemilihan pengunjung untuk label titipan
// //   const handleSelectPengunjungTitipan = (pengunjung) => {
// //     setSearchKodeTitipan(pengunjung.kode);
// //     setSelectedPengunjungTitipan(pengunjung);
// //     setIsDropdownTitipanOpen(false);
// //   };
  

// //   // Submit nomor antrian
// //   const handleSubmitAntrian = async () => {
// //     try {
// //       if (!selectedPengunjung?.kode) {
// //         setError("Pilih pengunjung terlebih dahulu");
// //         return;
// //       }

// //       const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

// //       if (updatedPengunjung) {
// //         setAntrian(updatedPengunjung.antrian);
// //         setSuccess("Nomor antrian berhasil disimpan");
// //         setError("");
// //         window.location.reload();
// //         setTimeout(() => {
// //           setSuccess("");
// //           setSearchKode("");
// //           setSelectedPengunjung(null);
// //           setAntrian(null);
// //         }, 3000);
// //       }
// //     } catch (error) {
// //       console.error("Gagal menyimpan antrian:", error);
// //       setError("Gagal menyimpan nomor antrian");
// //     }
// //   };

// //   // Handle pengambilan label titipan
// //   const handleAmbilLabelTitipan = () => {
// //     if (selectedPengunjungTitipan) {
// //       navigate(`/label/${selectedPengunjungTitipan.kode}`);
// //     }
// //   };

// //   // Jika authUser null, jangan render apa pun
// //   if (!authUser) {
// //     return null;
// //   }

// //     // Jika authUser null, jangan render apa pun
// //     if (!authUser) {
// //       return null; // atau return <LoadingSpinner /> jika Anda ingin menampilkan loading
// //     }
  
// //     const toggleMenu = () => {
// //       setIsMenuOpen(!isMenuOpen);
// //     };

// //   const handleLogout = () => {
// //     logout();
// //     // window.location.reload();
// //     navigate("/login")
// //   }

// //   const resetInactivityTimer = () => {
// //     if (inactivityTimer) clearTimeout(inactivityTimer);
// //     setInactivityTimer(
// //       setTimeout(() => {
// //         if (authUser?.user?.role === "admin") {
// //           setShowScreensaver(true);
// //         }
// //       }, 30000) // 30 detik
// //     );
// //   };

 

// //   const handleCloseScreensaver = () => {
// //     setShowScreensaver(false);
// //     resetInactivityTimer();
// //   };

// //   // Di dalam return HomePage
// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {authUser?.user?.role === "admin" && showScreensaver ? (
// //         <VisitScreensaver onClose={handleCloseScreensaver} />
// //       ) : (
// //            <div className="min-h-screen bg-gray-50">
// //       {/* Header */}
// //       <header className="bg-blue-600 text-white shadow-lg">
// //         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// //           <div className="flex items-center space-x-4">
// //             <img
// //               src={logo}
// //               alt="Logo Kemenimipas"
// //               className="h-12 w-12 rounded-full"
// //             />
// //             <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
// //           </div>

// //           <div className="flex-col items-center space-x-4" onClick={toggleMenu}>
// //             <div className="flex justify-center" > 
// //             <img className="w-10 rounded-full" src={authUser.user?.photo} ></img>
// //             </div>
// //             <div className="flex justify-center">
// //             <h3 className="text-xl text-end">{authUser.user?.role}</h3>
// //             </div>
// //             <span className="text-sm">
// //               Selamat Datang, {authUser.user?.nama}
// //             </span>
// //             </div>
// //         </div>
// //                 {isMenuOpen && (
// //                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
// //                     <div className="flex flex-col p-2">
// //                       <>
                          
// //                           <button
// //                           onClick={handleLogout}
// //                             className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
// //                           >
// //                             <LogOut className="size-5" />
// //                             <span>Logout</span>
// //                           </button>
// //                         </>
// //                     </div>
// //                   </div>
// //                 )}
// //       </header>
// //       {authUser.user?.role === "admin" && (
// //         <>
// //           {/* Main Content */}
// //           <main className="container mx-auto px-4 py-8">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {/* Card Ambil Nomor Antrian */}
// //               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
// //                 <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Ambil Nomor Antrian
// //                 </h2>

// //                 <div className="relative" ref={dropdownRef}>
// //                   <input
// //                     type="text"
// //                     value={searchKode}
// //                     onChange={(e) => {
// //                       setSearchKode(e.target.value);
// //                       setIsDropdownOpen(true);
// //                     }}
// //                     onFocus={() => setIsDropdownOpen(true)}
// //                     placeholder="Masukkan kode pengunjung..."
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
// //                   />

// //                   {isDropdownOpen && (
// //                     <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// //                       {filteredPengunjungs.length > 0 ? filteredPengunjungs.map((pengunjung) => (
// //                         <div
// //                           key={pengunjung.id}
// //                           onClick={() => handleSelectPengunjung(pengunjung)}
// //                           className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
// //                         >
// //                           <div className="font-medium">{pengunjung.nama}</div>
// //                           <div className="text-sm text-gray-500">
// //                             Kode: {pengunjung.kode}
// //                           </div>
// //                         </div>
// //                       )):(<div className="p-3 text-gray-500">Tidak ada data</div>)}
// //                     </div>
// //                   )}
// //                 </div>
// //                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
// //                   <h2 className="text-xl font-semibold mb-2">
// //                     Nomor Antrian Terakhir
// //                   </h2>
// //                   <p className="text-gray-600 mb-4">
// //                     Nomor antrian terakhir yang diambil:
// //                   </p>

// //                   {lastAntrian ? (
// //                     <div className="text-3xl font-bold text-blue-600">
// //                       {lastAntrian}
// //                     </div>
// //                   ) : (
// //                     <div className="text-gray-500">Belum ada antrian</div>
// //                   )}
// //                 </div>

// //                 {/* {selectedPengunjung && (
// //               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// //                 <div className="mb-2">
// //                   <span className="font-semibold">Nama:</span> {selectedPengunjung.nama}
// //                 </div>
// //                 <div className="mb-2">
// //                   <span className="font-semibold">Kode:</span> {selectedPengunjung.kode}
// //                 </div>
// //                 <div className="mb-4">
// //                   <span className="font-semibold">Nomor Antrian:</span>
// //                   <div className="text-2xl font-bold text-blue-600 mt-1">
// //                     {antrian}
// //                   </div>
// //                 </div>
// //                 <button
// //                   onClick={handleSubmitAntrian}
// //                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
// //                 >
// //                   Konfirmasi Ambil Antrian
// //                 </button>
// //               </div>
// //             )} */}

// //                 {selectedPengunjung && (
// //                   <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// //                     <div className="mb-2">
// //                       <span className="font-semibold">Nama:</span>{" "}
// //                       {selectedPengunjung.nama}
// //                     </div>
// //                     <div className="mb-2">
// //                       <span className="font-semibold">Kode:</span>{" "}
// //                       {selectedPengunjung.kode}
// //                     </div>
// //                     <button
// //                       onClick={handleSubmitAntrian}
// //                       className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors"
// //                     >
// //                       Generate Nomor Antrian
// //                     </button>

// //                     {antrian && (
// //                       <div className="mt-4">
// //                         <span className="font-semibold">Nomor Antrian:</span>
// //                         <div className="text-2xl font-bold text-blue-600 mt-1">
// //                           {antrian}
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}

// //                 {error && <div className="text-red-500 mt-2">{error}</div>}
// //                 {success && (
// //                   <div className="text-green-500 mt-2">{success}</div>
// //                 )}
// //               </div>
// //           {/* Card Ambil Label Titipan */}
// //           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
// //             <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
// //             <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>

// //             <div className="relative" ref={dropdownTitipanRef}>
// //   <input
// //     type="text"
// //     value={searchKodeTitipan}
// //     onChange={(e) => {
// //       setSearchKodeTitipan(e.target.value);
// //       setIsDropdownTitipanOpen(true);
// //     }}
// //     onFocus={() => setIsDropdownTitipanOpen(true)}
// //     placeholder="Masukkan kode pengunjung..."
// //     className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
// //   />

// //   {isDropdownTitipanOpen && (
// //     <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
// //       {filteredPengunjungTitipan.length > 0 ? (
// //         filteredPengunjungTitipan.map((pengunjung) => (
// //           <div
// //             key={pengunjung.id}
// //             onClick={() => handleSelectPengunjungTitipan(pengunjung)}
// //             className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
// //           >
// //             <div className="font-medium">{pengunjung.nama}</div>
// //             <div className="text-sm text-gray-500">
// //               Kode: {pengunjung.kode} | Antrian: {pengunjung.antrian}
// //             </div>
// //           </div>
// //         ))
// //       ) : (
// //         <div className="p-3 text-gray-500">
// //           {searchKodeTitipan ? "Tidak ditemukan" : "Tidak ada data hari ini"}
// //         </div>
// //       )}
// //     </div>
// //   )}
// // </div>

// //             {selectedPengunjungTitipan && (
// //               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// //                 <div className="mb-2">
// //                   <span className="font-semibold">Nama:</span>{" "}
// //                   {selectedPengunjungTitipan.nama}
// //                 </div>
// //                 <div className="mb-2">
// //                   <span className="font-semibold">Kode:</span>{" "}
// //                   {selectedPengunjungTitipan.kode}
// //                 </div>
// //                 <button
// //                   onClick={handleAmbilLabelTitipan}
// //                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
// //                 >
// //                   Ambil Label Titipan
// //                 </button>
// //               </div>
// //             )}
          

// //           {/* Komponen lainnya */}
// //         </div>
      
// //               {/* Daftar Warga Binaan */}
// //               <Link
// //                 to="/wbp-list"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Daftar Warga Binaan
// //                 </h2>
// //                 <p className="text-gray-600">
// //                   Lihat dan kelola data warga binaan
// //                 </p>
// //               </Link>

// //               {/* Daftar Pengunjung */}
// //               <Link
// //                 to="/pengunjung"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Daftar Pengunjung
// //                 </h2>
// //                 <p className="text-gray-600">
// //                   Kelola data pengunjung yang tercatat
// //                 </p>
// //               </Link>

// //               {/* Tambah Warga Binaan */}
// //               <Link
// //                 to="/wargabinaan-form"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Tambah Warga Binaan
// //                 </h2>
// //                 <p className="text-gray-600">
// //                   Tambahkan data warga binaan baru
// //                 </p>
// //               </Link>

// //               {/* Tambah Pengunjung */}
// //               <Link
// //                 to="/create-pengunjung"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Tambah Pengunjung
// //                 </h2>
// //                 <p className="text-gray-600">Registrasi pengunjung baru</p>
// //               </Link>

// //               {/* Admin Panel */}
// //               <Link
// //                 to="/admin-panel"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <ShieldCheckIcon className="h-12 w-12 text-red-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
// //                 <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
// //               </Link>
// //               {/* Tambah Pengunjung */}
// //               <Link
// //                 to="/report"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Laporan
// //                 </h2>
// //                 <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
// //               </Link>
// //             </div>
// //           </main>
// //                 {/* Footer */}
// //       <footer className="bg-blue-600 text-white mt-12 py-4">
// //         <div className="container mx-auto px-4 text-center">
// //           <p className="text-sm">
// //             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
// //             reserved
// //           </p>
// //         </div>
// //       </footer>
// //         </>
// //       )}
// //       {authUser.user?.role === "p2u" && (
// //         <>
// //           {/* Main Content */}
// //           <main className="container mx-auto px-4 py-8">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {/* Tambah Pengunjung */}
// //               <Link
// //                 to="/create-pengunjung"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Tambah Pengunjung
// //                 </h2>
// //                 <p className="text-gray-600">Registrasi pengunjung baru</p>
// //               </Link>
// //               {/* Daftar Pengunjung */}
// //               <Link
// //                 to="/pengunjung"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Daftar Pengunjung
// //                 </h2>
// //                 <p className="text-gray-600">
// //                   Kelola data pengunjung yang tercatat
// //                 </p>
// //               </Link>
// //             </div>
// //           </main>
// //                 {/* Footer */}
// //       <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
// //         <div className="container mx-auto px-4 text-center">
// //           <p className="text-sm">
// //             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
// //             reserved
// //           </p>
// //         </div>
// //       </footer>
// //         </>
// //       )}
// //       {authUser.user?.role === "user" && (
// //         <>
// //           {/* Main Content */}
// //           <main className="container mx-auto px-4 py-8">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {/* Tambah Pengunjung */}
// //               <Link
// //                 to="/create-pengunjung"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Tambah Pengunjung
// //                 </h2>
// //                 <p className="text-gray-600">Registrasi pengunjung baru</p>
// //               </Link>
// //               {/* Daftar Pengunjung */}
// //               <Link
// //                 to="/pengunjung"
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
// //               >
// //                 <UserIcon className="h-12 w-12 text-green-600 mb-4" />
// //                 <h2 className="text-xl font-semibold mb-2">
// //                   Daftar Pengunjung
// //                 </h2>
// //                 <p className="text-gray-600">
// //                   Kelola data pengunjung yang tercatat
// //                 </p>
// //               </Link>
// //             </div>
// //           </main>
// //                 {/* Footer */}
// //       <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
// //         <div className="container mx-auto px-4 text-center">
// //           <p className="text-sm">
// //             © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
// //             reserved
// //           </p>
// //         </div>
// //       </footer>
// //         </>
// //       )}


// //     </div>
// //       )}
// //     </div>
// //   );
// // }


// import { useRef, useState, useEffect } from "react";
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
// import { BaggageClaim, Barcode, LogOut, ScrollText } from "lucide-react";

// // Komponen untuk Print Antrian
// // const PrintAntrian = ({ pengunjung, antrian, onClose, barcode }) => {
// //   const printRef = useRef();

// //   console.log("Render PrintAntrian with:", { pengunjung, antrian, barcode });

  
//   // useEffect(() => {
//     // const printAntrian = () => {
//     //   try {
//     //     const printContent = `
//     //       <!DOCTYPE html>
//     //       <html>
//     //       <head>
//     //         <title>Print Antrian - BATARI</title>
//     //         <style>
//     //           body { 
//     //             font-family: 'Arial', sans-serif; 
//     //             margin: 0; 
//     //             margin-top: -40px
//     //             padding: 0 20px; 
//     //             text-align: center;
//     //             background-color: #f3f4f6;
//     //           }
//     //           .ticket-container {
//     //             display: flex;
//     //             justify-content: center;
//     //             align-items: center;
//     //             min-height: 100%;
//     //           }
//     //           .ticket { 
//     //             border: 3px solid #1e40af; 
//     //             padding: 10px; 
//     //             width: 320px; 
//     //             margin: 0 auto 0 -10px;
//     //             border-radius: 15px;
//     //             background: white;
//     //             box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//     //           }
//     //           .header {
//     //             color: black;
//     //             padding: 0;
//     //             margin: -25px -25px 20px -25px;
//     //             border-radius: 12px 12px 0 0;
//     //           }
//     //           .header h2 {
//     //             margin-top: 20;
//     //             font-size: 22px;
//     //           }
//     //           .header p {
//     //             margin: 5px 0 0 0;
//     //             font-size: 14px;
//     //             opacity: 0.9;
//     //           }
//     //           .nomor-antrian { 
//     //             font-size: 100px; 
//     //             font-weight: bold; 
//     //             color: #1e40af;
//     //             margin: 5px 0;
//     //             text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
//     //           }
//     //           .info { 
//     //             text-align: center; 
//     //             margin-top: 5px;
//     //             padding: 15px;
//     //             background: #f8fafc;
//     //             border-radius: 10px;
//     //             border-left: 4px solid #1e40af;
//     //           }
//     //           .info p {
//     //             margin: 2px 0;
//     //             font-size: 14px;
//     //           }
//     //           .info strong {
//     //             color: #374151;
//     //           }
//     //           .footer {
//     //             margin-top: 20px;
//     //             font-size: 12px;
//     //             color: #6b7280;
//     //             border-top: 1px dashed #d1d5db;
//     //             padding-top: 15px;
//     //           }
//     //           .barcode {
//     //             margin: 5px 0;
//     //             padding: 5px;
//     //             background: white;
//     //             border: 1px dashed #d1d5db;
//     //           }
//     //           @media print {
//     //             body { 
//     //               margin: 0; 
//     //               padding: 0;
//     //               background: white;
//     //             }
//     //             .ticket-container {
//     //               min-height: auto;
//     //             }
//     //             .ticket {
//     //               box-shadow: none;
//     //               margin: 0;
//     //               border: 2px solid #000;
//     //             }
//     //             .no-print { 
//     //               display: none; 
//     //             }
//     //           }
//     //         </style>
//     //       </head>
//     //       <body>
//     //         <div class="ticket-container">
//     //           <div class="ticket">
//     //             <div class="header">
//     //               <h2>NOMOR ANTRIAN</h2>
//     //             </div>
                
//     //             <div class="nomor-antrian">${antrian}</div>
                
//     //             <div class="barcode">
//     //               <small>Kode: ${pengunjung.kode}</small>
//     //             </div>
                
//     //             <div class="info">
//     //               <img src="${pengunjung.barcode}" alt="Logo Kemenimipas" style="height: 100px; margin-top: -10px;" />
//     //               <p><strong>Waktu:</strong> ${new Date().toLocaleTimeString('id-ID')}</p>
//     //             </div>
//     //           </div>
//     //         </div>
            
//     //         <div class="no-print" style="margin-top: 20px; text-align: center;">
//     //           <button onclick="window.close()" style="padding: 10px 20px; background: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer; margin: 10px;">
//     //             Tutup Window
//     //           </button>
//     //           <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; cursor: pointer; margin: 10px;">
//     //             Print Ulang
//     //           </button>
//     //         </div>
            
//     //         <script>
//     //           window.onload = function() {
//     //             // Auto print setelah window terbuka
//     //             setTimeout(() => {
//     //               window.print();
//     //             }, 500);
//     //           }
//     //         </script>
//     //       </body>
//     //       </html>
//     //     `;
        
//     //     // Buka window print dengan error handling
//     //     const printWindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,resizable=no');
        
//     //     if (!printWindow) {
//     //       throw new Error('Popup window diblokir oleh browser. Silahkan izinkan popup untuk fitur print otomatis.');
//     //     }
        
//     //     printWindow.document.write(printContent);
//     //     printWindow.document.close();
        
//     //   } catch (error) {
//     //     console.error('Error saat printing:', error);
//     //     // Fallback: langsung print di window saat ini
//     //     // Tampilkan pesan error ke user menggunakan React state/modal
//     //     alert(
//     //       'Popup diblokir oleh browser. Silahkan izinkan popup untuk fitur print otomatis.\n\n' +
//     //       'Untuk pengalaman terbaik, izinkan popup untuk browser ini.'
//     //     );
//     //     // Jika ingin tetap print di window ini, bisa panggil window.print() langsung jika diperlukan
//     //     // window.print();
//     //   }
//     // };

//     // Komponen untuk Print Antrian dengan ukuran 80mm x 80mm
// // Komponen untuk Print Antrian dengan ukuran 80mm x 80mm - PERBAIKAN
// const PrintAntrian = ({ pengunjung, antrian, onClose, barcode }) => {
//   const printRef = useRef();

//   console.log("Nomor antrian yang akan dicetak:", antrian); // Debug log

//   useEffect(() => {
//     const printAntrian = () => {
//       try {
//         const printContent = `
//           <!DOCTYPE html>
//           <html>
//           <head>
//             <title>Print Antrian - BATARI</title>
//             <style>
//               @page {
//                 size: 80mm 80mm;
//                 margin: 0;
//                 padding: 0;
//               }
              
//               body { 
//                 font-family: 'Arial', sans-serif; 
//                 margin: 0; 
//                 padding: 2mm;
//                 text-align: center;
//                 background-color: white;
//                 width: 76mm;
//                 height: 76mm;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: space-between;
//               }
              
//               .ticket-container {
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: space-between;
//                 height: 100%;
//                 padding: 1mm;
//               }
              
//               .ticket { 
//                 border: 1px solid #000; 
//                 padding: 2mm;
//                 height: 72mm;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: space-between;
//               }
              
//               .header {
//                 text-align: center;
//                 margin-bottom: 1mm;
//               }
              
//               .header h2 {
//                 margin: 0;
//                 font-size: 10pt;
//                 font-weight: bold;
//               }
              
//               .header p {
//                 margin: 0;
//                 font-size: 6pt;
//               }
              
//               .nomor-antrian { 
//                 font-size: 28pt; 
//                 font-weight: bold; 
//                 color: #000;
//                 margin: 1mm 0;
//                 text-align: center;
//               }
              
//               .barcode-section {
//                 text-align: center;
//               }
              
//               .barcode-section small {
//                 font-size: 6pt;
//               }
              
//               .info { 
//                 text-align: center; 
//                 margin-top: 2px;
//               }
              
//               .info p {
//                 margin: 0.5mm 0;
//                 font-size: 6pt;
//               }
              
//               .info strong {
//                 color: #000;
//               }
              
//               .footer {
//                 margin-top: 1mm;
//                 font-size: 5pt;
//                 color: #666;
//                 text-align: center;
//               }
              
//               .logo {
//                 max-width: 25mm;
//                 height: auto;
//                 margin: 0 auto;
//               }
              
//               @media print {
//                 body { 
//                   margin: 0; 
//                   padding: 2mm;
//                   width: 76mm;
//                   height: 76mm;
//                 }
                
//                 .ticket {
//                   border: 1px solid #000;
//                   height: 72mm;
//                   page-break-inside: avoid;
//                 }
                
//                 .no-print { 
//                   display: none; 
//                 }
                
//                 * {
//                   -webkit-print-color-adjust: exact;
//                   print-color-adjust: exact;
//                 }
//               }
//             </style>
//           </head>
//           <body>
//             <div class="ticket-container">
//               <div class="ticket">
//                 <div class="header">
//                   <h2>NOMOR ANTRIAN</h2>
//                   <p>Sistem Kunjungan Digital BATARI</p>
//                   <p>Rutan Kelas II B Bantaeng</p>
//                 </div>
                
//                 <div class="nomor-antrian">${antrian}</div>

                
//                 <div class="info">
//                   <img src="${pengunjung.barcode}" alt="Logo Kemenimipas" style="height: 100px; margin-top: -10px;" />
//                   <p><strong>Waktu:</strong> ${new Date().toLocaleTimeString('id-ID')}</p>
//                 </div>
                
//                 <div class="barcode-section">
//                   <small>Kode: ${pengunjung.kode}</small>
//                 </div>

                
                
//                 <div class="info">
//                   <p><strong>Nama:</strong> ${pengunjung.nama}</p>
//                 </div>
                
//                 <div class="footer">
//                   <p>** Harap simpan tiket ini **</p>
//                   <p>Tunggu hingga nomor antrian dipanggil</p>
//                 </div>
//               </div>
//             </div>
            
//             <script>
//               window.onload = function() {
//                 console.log('Nomor antrian yang dicetak:', '${antrian}');
//                 setTimeout(() => {
//                   window.print();
//                 }, 500);
//               }
//             </script>
//           </body>
//           </html>
//         `;
        
//         const printWindow = window.open('', '_blank', 'width=300,height=400,scrollbars=no,resizable=no');
        
//         if (!printWindow) {
//           throw new Error('Popup window diblokir. Silahkan izinkan popup untuk fitur print otomatis.');
//         }
        
//         printWindow.document.write(printContent);
//         printWindow.document.close();
        
//       } catch (error) {
//         console.error('Error saat printing:', error);
//         alert('Popup diblokir oleh browser. Silahkan izinkan popup untuk fitur print otomatis.');
//       }
//     };

//     printAntrian();
//   }, [pengunjung, antrian]); // Pastikan dependency termasuk antrian

//   return null;
// };

// // Komponen Screensaver Animasi
// const VisitScreensaver = ({ onClose }) => {
//   return (
//     <div 
//       className="fixed inset-0 bg-blue-900 z-50 flex items-center justify-center cursor-pointer"
//       onClick={onClose}
//     >
//       <div className="relative w-full h-full overflow-hidden">
//         {/* Animasi Latar Belakang */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* Logo Berputar */}
//           <div className="animate-spin-slow">
//             <svg
//               className="w-64 h-64 text-yellow-400 opacity-20"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Konten Utama */}
//         <div className="relative z-10 text-center text-white">
//           <div className="flex justify-center align-center animate-pulse ">
//             <img className="rounded-full mt-2" src={logo} alt="Logo Kemenimipas" />
//           </div>
//           {/* Animasi Teks */}
//           <h1 className="text-5xl font-bold mb-6 animate-pulse">
//             SELAMAT DATANG
//           </h1>
          
//           {/* Kartu Animasi */}
//           <div className="inline-block animate-float">
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
//               <div className="flex flex-col items-center">
//                 <Barcode className="h-32 w-32 text-yellow-400 mb-4 animate-bounce" />
//                 <h2 className="text-3xl font-semibold mb-2">
//                   Sistem Kunjungan Digital
//                 </h2>
//                 <h2 className="text-3xl font-semibold mb-2">
//                   BATARI (Barcode Tanpa Antrian)
//                 </h2>
//                 <p className="text-xl opacity-80">
//                   Sentuh layar untuk melanjutkan
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Animasi Garis Bawah */}
//           <div className="mt-12 flex justify-center">
//             <div className="w-64 h-1 bg-yellow-400 rounded-full animate-scale-x" />
//           </div>
//         </div>

//         {/* Partikel Animasi */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-yellow-400 rounded-full"
//             style={{
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//               animation: `twinkle ${2 + i % 3}s infinite`
//             }}
//           />
//         ))}
//       </div>

//       <style jsx global>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes scale-x {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }

//         @keyframes twinkle {
//           0% { opacity: 0.2; }
//           50% { opacity: 1; }
//           100% { opacity: 0.2; }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 30s linear infinite;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-scale-x {
//           animation: scale-x 2s ease-in-out infinite alternate;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Main HomePage Component
// export default function HomePage() {
//   const [showScreensaver, setShowScreensaver] = useState(false);
//   const [inactivityTimer, setInactivityTimer] = useState(null);
//   const { authUser, logout } = useAuthStore();
//   const {
//     pengunjungs,
//     fetchPengunjung,
//     getNomorAntrianTerakhir,
//   } = useDataStore();
//   const [searchKode, setSearchKode] = useState("");
//   const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
//   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
//   const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
//   const [antrian, setAntrian] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
//   const [showPrint, setShowPrint] = useState(false);
//   const [printData, setPrintData] = useState(null);
//   const [lastAntrian, setLastAntrian] = useState("000");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const dropdownTitipanRef = useRef(null);
//   const navigate = useNavigate();
//   const updateAntrian = useDataStore((state) => state.updateAntrian);
//   const inactivityTimerRef = useRef(null);

//   // Redirect ke halaman login jika authUser null
//   useEffect(() => {
//     if (!authUser) {
//       navigate("/login");
//     }
//   }, [authUser, navigate]);

//   // Inactivity timer untuk screensaver
//   useEffect(() => {
//     if (authUser?.user?.role === "admin") {
//       const events = ["mousemove", "keydown", "click", "scroll"];
      
//       const resetTimer = () => {
//         if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
//         inactivityTimerRef.current = setTimeout(() => {
//           if (authUser?.user?.role === "admin") {
//             setShowScreensaver(true);
//           }
//         }, 30000);
//       };

//       events.forEach(event => 
//         window.addEventListener(event, resetTimer)
//       );

//       resetTimer();

//       return () => {
//         events.forEach(event => 
//           window.removeEventListener(event, resetTimer)
//         );
//         if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
//       };
//     }
//   }, [authUser]);


//   // Fetch last antrian
//   useEffect(() => {
//     const fetchLastAntrian = async () => {
//       try {
//         const antrian = await getNomorAntrianTerakhir();
//         if (antrian) {
//           setLastAntrian(antrian);
//         }
//       } catch (error) {
//         console.error("Error fetching last antrian:", error);
//       }
//     };

//     fetchLastAntrian();
//   }, [getNomorAntrianTerakhir]);

//   // Fetch data pengunjung
//   useEffect(() => {
//     fetchPengunjung();
//   }, [fetchPengunjung]);

//   // Handle klik di luar dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//       if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
//         setIsDropdownTitipanOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filter pengunjung untuk antrian (yang belum punya antrian)
//   const filteredPengunjungs = pengunjungs
//   // .filter((pengunjung) => {
//   //   const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKode.toLowerCase());
//   //   const hasNoAntrian = !pengunjung.antrian;
//   //   return isKodeMatch && hasNoAntrian;
//   // });


//   // Handle pemilihan pengunjung untuk antrian
//   const handleSelectPengunjung = (pengunjung) => {
//     setSearchKode(pengunjung.kode);
//     setSelectedPengunjung(pengunjung);
//     setIsDropdownOpen(false);
//   };

//   // Format date untuk filter
//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       const year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const day = String(date.getDate()).padStart(2, '0');
//       return `${year}-${month}-${day}`;
//     } catch (error) {
//       console.error("Error formatting date:", error);
//       return "";
//     }
//   };

//   // Filter pengunjung untuk titipan (hari ini saja)
//   const today = formatDate(new Date());
//   const filteredPengunjungTitipan = pengunjungs.filter((pengunjung) => {
//     try {
//       const updatedAtFormatted = formatDate(pengunjung.updatedAt);
//       const isToday = updatedAtFormatted === today;
//       const isKodeMatch = pengunjung.nama.toLowerCase().includes(searchKodeTitipan.toLowerCase());
//       return isToday && (searchKodeTitipan === '' || isKodeMatch);
//     } catch (error) {
//       return false;
//     }
//   });

//   // Handle pemilihan pengunjung untuk titipan
//   const handleSelectPengunjungTitipan = (pengunjung) => {
//     setSearchKodeTitipan(pengunjung.kode);
//     setSelectedPengunjungTitipan(pengunjung);
//     setIsDropdownTitipanOpen(false);
//   };

//   // // Submit nomor antrian dengan auto print
//   // const handleSubmitAntrian = async () => {
//   //   try {
//   //     if (!selectedPengunjung?.kode) {
//   //       setError("Pilih pengunjung terlebih dahulu");
//   //       return;
//   //     }

//   //     const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

//   //     if (updatedPengunjung) {
//   //       setAntrian(updatedPengunjung.antrian);
//   //       setSuccess("Nomor antrian berhasil disimpan dan sedang diprint");
//   //       setError("");
        
//   //       // Set data untuk print
//   //       setPrintData({
//   //         pengunjung: selectedPengunjung,
//   //         antrian: updatedPengunjung.antrian
//   //       });
//   //       setShowPrint(true);

//   //       // Reset form setelah beberapa detik
//   //       setTimeout(() => {
//   //         setSuccess("");
//   //         setSearchKode("");
//   //         setSelectedPengunjung(null);
//   //         setAntrian(null);
//   //         setShowPrint(false);
//   //         setPrintData(null);
//   //         fetchPengunjung(); // Refresh data
//   //       }, 5000);
//   //     }
//   //   } catch (error) {
//   //     console.error("Gagal menyimpan antrian:", error);
//   //     setError("Gagal menyimpan nomor antrian");
//   //   }
//   // };

//   // Submit nomor antrian dengan auto print - PERBAIKAN
// const handleSubmitAntrian = async () => {
//   try {
//     if (!selectedPengunjung?.kode) {
//       setError("Pilih pengunjung terlebih dahulu");
//       return;
//     }

//     const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

//     if (updatedPengunjung) {
//       const newAntrian = updatedPengunjung.antrian; // Nomor antrian BARU
//       const lastThreeDigits = newAntrian.slice(-3); // Ambil 3 digit terakhir
      
//       setAntrian(lastThreeDigits);
//       setSuccess("Nomor antrian berhasil disimpan dan sedang diprint");
//       setError("");
      
//       // Set data untuk print - GUNAKAN lastThreeDigits
//       setPrintData({
//         pengunjung: selectedPengunjung,
//         antrian: lastThreeDigits // ← Hanya 3 digit terakhir
//       });
//       setShowPrint(true);

//       // Update lastAntrian untuk ditampilkan di UI (juga hanya 3 digit)
//       setLastAntrian(lastThreeDigits);

//       // Reset form setelah beberapa detik
//       setTimeout(() => {
//         setSuccess("");
//         setSearchKode("");
//         setSelectedPengunjung(null);
//         setAntrian(null);
//         setShowPrint(false);
//         setPrintData(null);
//         fetchPengunjung(); // Refresh data
//       }, 5000);
//     }
//   } catch (error) {
//     console.error("Gagal menyimpan antrian:", error);
//     setError("Gagal menyimpan nomor antrian");
//   }
// };

//   // Fungsi untuk manual print dengan error handling
//   const handleManualPrint = () => {
//     if (!printData) return;
    
//     try {
//       const printContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <title>Print Antrian - BATARI</title>
//           <style>
//             body { 
//               font-family: 'Arial', sans-serif; 
//               margin: 0; 
//               padding: 20px; 
//               text-align: center;
//               background-color: #f3f4f6;
//             }
//             .ticket-container {
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               min-height: 100vh;
//             }
//             .ticket { 
//               border: 3px solid #1e40af; 
//               padding: 25px; 
//               width: 320px; 
//               margin: 0 auto;
//               border-radius: 15px;
//               background: white;
//               box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//             }
//             .header {
//               background: linear-gradient(135deg, #1e40af, #3b82f6);
//               color: white;
//               padding: 15px;
//               margin: -25px -25px 20px -25px;
//               border-radius: 12px 12px 0 0;
//             }
//             .header h2 {
//               margin: 0;
//               font-size: 35px;
//             }
//             .header p {
//               margin: 5px 0 0 0;
//               font-size: 14px;
//               opacity: 0.9;
//             }
//             .nomor-antrian { 
//               font-size: 150px; 
//               font-weight: bold; 
//               color: #1e40af;
//               margin: 25px 0;
//               text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
//             }
//             .info { 
//               text-align: left; 
//               margin-top: 25px;
//               padding: 15px;
//               background: #f8fafc;
//               border-radius: 10px;
//               border-left: 4px solid #1e40af;
//             }
//             .info p {
//               margin: 8px 0;
//               font-size: 30px;
//             }
//             .info strong {
//               color: #374151;
//             }
//             .footer {
//               margin-top: 20px;
//               font-size: 20px;
//               color: #6b7280;
//               border-top: 1px dashed #d1d5db;
//               padding-top: 15px;
//             }
//             .barcode {
//               margin: 15px 0;
//               padding: 10px;
//               background: white;
//               border: 1px dashed #d1d5db;
//             }
//             @media print {
//               body { 
//                 margin: 0; 
//                 padding: 0;
//                 background: white;
//               }
//               .ticket-container {
//                 min-height: auto;
//               }
//               .ticket {
//                 box-shadow: none;
//                 margin: 0;
//                 border: 2px solid #000;
//               }
//               .no-print { 
//                 display: none; 
//               }
//             }
//           </style>
//         </head>
//         <body>
//           <div class="ticket-container">
//             <div class="ticket">
//               <div class="header">
//                 <h2>NOMOR ANTRIAN</h2>
//                 <p>Sistem Kunjungan Digital BATARI</p>
//                 <p>Rutan Kelas II B Bantaeng</p>
//               </div>
              
//               <div class="nomor-antrian">${printData.antrian}</div>
              
//               <div class="barcode">
//                 <small>Kode: ${printData.pengunjung.kode}</small>
//               </div>
              
//               <div class="info">
//                 <p><strong>Nama Pengunjung:</strong><br>${printData.pengunjung.nama}</p>
//                 <p><strong>Kode:</strong> ${printData.pengunjung.kode}</p>
//                 <p><strong>Tanggal:</strong> ${new Date().toLocaleDateString('id-ID', { 
//                   weekday: 'long', 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}</p>
//                 <p><strong>Waktu:</strong> ${new Date().toLocaleTimeString('id-ID')}</p>
//               </div>
//             </div>
//           </div>
          
//           <div class="no-print" style="margin-top: 20px; text-align: center;">
//             <button onclick="window.close()" style="padding: 10px 20px; background: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer; margin: 10px;">
//               Tutup Window
//             </button>
//             <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; cursor: pointer; margin: 10px;">
//               Print Ulang
//             </button>
//           </div>
          
//           <script>
//             window.onload = function() {
//               setTimeout(() => {
//                 window.print();
//               }, 500);
//             }
//           </script>
//         </body>
//         </html>
//       `;
      
//       const printWindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,resizable=no');
      
//       if (!printWindow) {
//         throw new Error('Popup window diblokir');
//       }
      
//       printWindow.document.write(printContent);
//       printWindow.document.close();
      
//     } catch (error) {
//       console.error('Error saat manual printing:', error);
//       alert('Popup diblokir oleh browser. Silahkan izinkan popup untuk fitur print otomatis.');
//     }
//   };

//   // Handle ambil label titipan
//   const handleAmbilLabelTitipan = () => {
//     if (selectedPengunjungTitipan) {
//       navigate(`/label/${selectedPengunjungTitipan.kode}`);
//       window.location.reload();
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // Toggle menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Handle close screensaver
//   const handleCloseScreensaver = () => {
//     setShowScreensaver(false);
//     if (inactivityTimer) clearTimeout(inactivityTimer);
//   };

//   // Jika authUser null, jangan render apa pun
//   if (!authUser) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {authUser?.user?.role === "admin" && showScreensaver ? (
//         <VisitScreensaver onClose={handleCloseScreensaver} />
//       ) : (
//         <div className="min-h-screen bg-gray-50">
//           {/* Header */}
//           <header className="bg-blue-600 text-white shadow-lg relative">
//             <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={logo}
//                   alt="Logo Kemenimipas"
//                   className="h-12 w-12 rounded-full"
//                 />
//                 <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
//               </div>

//               <div className="flex-col items-center space-x-4 relative">
//                 <div className="flex justify-center cursor-pointer" onClick={toggleMenu}>
//                   <img 
//                     className="w-10 h-10 rounded-full border-2 border-white" 
//                     src={authUser.user?.photo} 
//                     alt="Profile"
//                   />
//                 </div>
//                 <div className="flex justify-center">
//                   <h3 className="text-sm text-end capitalize">{authUser.user?.role}</h3>
//                 </div>
//                 <span className="text-sm">
//                   Selamat Datang, {authUser.user?.nama}
//                 </span>
                
//                 {isMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                     <div className="flex flex-col p-2">
//                       <button
//                         onClick={handleLogout}
//                         className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
//                       >
//                         <LogOut className="size-5" />
//                         <span>Logout</span>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </header>

//           {authUser.user?.role === "admin" && (
//             <>
//               {/* Main Content */}
//               <main className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {/* Card Ambil Nomor Antrian */}
//                   <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                     <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Ambil Nomor Antrian
//                     </h2>

//                     <div className="relative" ref={dropdownRef}>
//                       <input
//                         type="text"
//                         value={searchKode}
//                         onChange={(e) => {
//                           setSearchKode(e.target.value);
//                           setIsDropdownOpen(true);
//                         }}
//                         onFocus={() => setIsDropdownOpen(true)}
//                         placeholder="Masukkan kode pengunjung..."
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
//                       />

//                       {isDropdownOpen && filteredPengunjungs.length > 0 && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                           {filteredPengunjungs.map((pengunjung) => (
//                             <div
//                               key={pengunjung.id}
//                               onClick={() => handleSelectPengunjung(pengunjung)}
//                               className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//                             >
//                               <div className="font-medium">{pengunjung.nama}</div>
//                               <div className="text-sm text-gray-500">
//                                 Kode: {pengunjung.kode}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                       <h2 className="text-xl font-semibold mb-2">
//                         Nomor Antrian Terakhir
//                       </h2>
//                       <p className="text-gray-600 mb-4">
//                         Nomor antrian terakhir yang diambil:
//                       </p>

//                       {lastAntrian ? (
//                         <div className="text-3xl font-bold text-blue-600">
//                           {lastAntrian}
//                         </div>
//                       ) : (
//                         <div className="text-gray-500">Belum ada antrian</div>
//                       )}
//                     </div>

//                     {selectedPengunjung && (
//                       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                         <div className="mb-2">
//                           <span className="font-semibold">Nama:</span>{" "}
//                           {selectedPengunjung.nama}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">Kode:</span>{" "}
//                           {selectedPengunjung.kode}
//                         </div>
//                         <button
//                           onClick={handleSubmitAntrian}
//                           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                         >
//                           Generate Nomor Antrian
//                         </button>

//                         {antrian && (
//                           <div className="mt-4 text-center">
//                             <span className="font-semibold">Nomor Antrian:</span>
//                             <div className="text-3xl font-bold text-blue-600 mt-1">
//                               {antrian}
//                             </div>
//                             <p className="text-sm text-green-600 mt-2">
//                               Sedang mencetak...
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {error && (
//                       <div className="text-red-500 mt-2 p-2 bg-red-50 rounded">{error}</div>
//                     )}
//                     {success && (
//                       <div className="text-green-500 mt-2 p-2 bg-green-50 rounded">{success}</div>
//                     )}

//                     {/* Tombol manual print jika diperlukan */}
//                     {printData && (
//                       <div className="mt-4">
//                         <button
//                           onClick={handleManualPrint}
//                           className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
//                         >
//                           Print Ulang Antrian
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Card Ambil Label Titipan */}
//                   <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                     <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>

//                     <div className="relative" ref={dropdownTitipanRef}>
//                       <input
//                         type="text"
//                         value={searchKodeTitipan}
//                         onChange={(e) => {
//                           setSearchKodeTitipan(e.target.value);
//                           setIsDropdownTitipanOpen(true);
//                         }}
//                         onFocus={() => setIsDropdownTitipanOpen(true)}
//                         placeholder="Masukkan kode pengunjung..."
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
//                       />

//                       {isDropdownTitipanOpen && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                           {filteredPengunjungTitipan.length > 0 ? (
//                             filteredPengunjungTitipan.map((pengunjung) => (
//                               <div
//                                 key={pengunjung.id}
//                                 onClick={() => handleSelectPengunjungTitipan(pengunjung)}
//                                 className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//                               >
//                                 <div className="font-medium">{pengunjung.nama}</div>
//                                 <div className="text-sm text-gray-500">
//                                   Kode: {pengunjung.kode} | Antrian: {pengunjung.antrian}
//                                 </div>
//                               </div>
//                             ))
//                           ) : (
//                             <div className="p-3 text-gray-500">
//                               {searchKodeTitipan ? "Tidak ditemukan" : "Tidak ada data hari ini"}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>

//                     {selectedPengunjungTitipan && (
//                       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                         <div className="mb-2">
//                           <span className="font-semibold">Nama:</span>{" "}
//                           {selectedPengunjungTitipan.nama}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">Kode:</span>{" "}
//                           {selectedPengunjungTitipan.kode}
//                         </div>
//                         <button
//                           onClick={handleAmbilLabelTitipan}
//                           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                         >
//                           Ambil Label Titipan
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                    <Link
//                     to="/admin-panel"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <ShieldCheckIcon className="h-12 w-12 text-red-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">Ambil Krtu Besukan</h2>
//                     <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
//                   </Link>

//                   <Link
//                     to="/create-pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Pengunjung
//                     </h2>
//                     <p className="text-gray-600">Registrasi pengunjung baru</p>
//                   </Link>

//                   <Link
//                     to="/wargabinaan-form"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Warga Binaan
//                     </h2>
//                     <p className="text-gray-600">
//                       Tambahkan data warga binaan baru
//                     </p>
//                   </Link>


//                   {/* Card lainnya */}
//                   <Link
//                     to="/wbp-list"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 block relative z-10"
//   style={{ position: 'relative', zIndex: 10 }}
//                   >
//                     <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Daftar Warga Binaan
//                     </h2>
//                     <p className="text-gray-600">
//                       Lihat dan kelola data warga binaan
//                     </p>
//                   </Link>

//                   <Link
//                     to="/pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Daftar Pengunjung
//                     </h2>
//                     <p className="text-gray-600">
//                       Kelola data pengunjung yang tercatat
//                     </p>
//                   </Link>

                  

                  
                 

//                   <Link
//                     to="/report"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Laporan
//                     </h2>
//                     <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
//                   </Link>
//                 </div>
//               </main>

//               {/* Footer */}
//               <footer className="bg-blue-600 text-white mt-12 py-4">
//                 <div className="container mx-auto px-4 text-center">
//                   <p className="text-sm">
//                     © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//                     reserved
//                   </p>
//                 </div>
//               </footer>
//             </>
//           )}

//           {/* Render untuk role p2u dan user */}
//           {(authUser.user?.role === "p2u" || authUser.user?.role === "user") && (
//             <>
//               <main className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   <Link
//                     to="/create-pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Pengunjung
//                     </h2>
//                     <p className="text-gray-600">Registrasi pengunjung baru</p>
//                   </Link>
//                   <Link
//                     to="/pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Daftar Pengunjung
//                     </h2>
//                     <p className="text-gray-600">
//                       Kelola data pengunjung yang tercatat
//                     </p>
//                   </Link>
//                 </div>
//               </main>
//               <footer className="bg-blue-600 text-white mt-12 py-4">
//                 <div className="container mx-auto px-4 text-center">
//                   <p className="text-sm">
//                     © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//                     reserved
//                   </p>
//                 </div>
//               </footer>
//             </>
//           )}

//           {/* Render komponen print - PERBAIKAN */}
// {showPrint && printData && (
//   <PrintAntrian 
//     pengunjung={printData.pengunjung}
//     antrian={printData.antrian}
//     barcode={printData.barcode}
//     onClose={() => setShowPrint(false)}
//   />
// )}
//         </div>
//       )}
//     </div>
//   );
// }




import { useRef, useState, useEffect } from "react";
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
import { BaggageClaim, Barcode, LogOut, QrCode, ScrollText } from "lucide-react";

// Import komponen PDF
import { Document, Page, Text, View, StyleSheet, Image, PDFViewer } from "@react-pdf/renderer";

// Komponen PDF untuk Antrian
const PDFAntrian = ({ pengunjung, antrian }) => {
  const mmToPt = (mm) => mm * 2.83465;

  const styles = StyleSheet.create({
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
      // marginVertical: 10,
    },
    antrianNumber: {
      fontSize: 32,
      fontWeight: "bold",
    },
    barcodeSection: {
      alignItems: "center",
      // marginVertical: 5,
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
  });

  return (
    <Document>
      <Page size={[mmToPt(80), mmToPt(80)]} style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>NOMOR ANTRIAN</Text>
          <Text style={styles.subtitle}>Sistem Kunjungan Digital BATARI</Text>
          <Text style={styles.subtitle}>Rutan Kelas II B Bantaeng</Text>
        </View>
        
        <View style={styles.antrianSection}>
          <Text style={styles.antrianNumber}>{antrian}</Text>
        </View>
        
        <View style={styles.barcodeSection}>
          <Image src={pengunjung.barcode} style={styles.barcode} />
          <Text style={styles.kode}>Kode: {pengunjung.kode}</Text>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.info}>
            Tanggal: {new Date().toLocaleDateString('id-ID')}
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>** Harap simpan tiket ini **</Text>
          <Text style={styles.footerText}>Tunggu hingga nomor antrian dipanggil</Text>
        </View>
      </Page>
    </Document>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="h-full p-4">
          <PDFViewer width="100%" height="100%">
            <PDFAntrian 
              pengunjung={printData.pengunjung}
              antrian={printData.antrian}
            />
          </PDFViewer>
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
            <img className="rounded-full mt-2" src={logo} alt="Logo Kemenimipas" />
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

// Main HomePage Component
export default function HomePage() {
  const [showScreensaver, setShowScreensaver] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  const { authUser, logout } = useAuthStore();
  const {
    pengunjungs,
    fetchPengunjung,
    getNomorAntrianTerakhir,
  } = useDataStore();
  const [searchKode, setSearchKode] = useState("");
  const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
  const [selectedPengunjung, setSelectedPengunjung] = useState(null);
  const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
  const [antrian, setAntrian] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [printData, setPrintData] = useState(null);
  const [lastAntrian, setLastAntrian] = useState("000");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTitipanRef = useRef(null);
  const navigate = useNavigate();
  const updateAntrian = useDataStore((state) => state.updateAntrian);
  const inactivityTimerRef = useRef(null);

  // Redirect ke halaman login jika authUser null
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  // Inactivity timer untuk screensaver
  useEffect(() => {
    if (authUser?.user?.role === "admin") {
      const events = ["mousemove", "keydown", "click", "scroll"];
      
      const resetTimer = () => {
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = setTimeout(() => {
          if (authUser?.user?.role === "admin") {
            setShowScreensaver(true);
          }
        }, 30000);
      };

      events.forEach(event => 
        window.addEventListener(event, resetTimer)
      );

      resetTimer();

      return () => {
        events.forEach(event => 
          window.removeEventListener(event, resetTimer)
        );
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      };
    }
  }, [authUser]);

  // Fetch last antrian
  useEffect(() => {
    const fetchLastAntrian = async () => {
      try {
        const antrian = await getNomorAntrianTerakhir();
        if (antrian) {
          setLastAntrian(antrian);
        }
      } catch (error) {
        console.error("Error fetching last antrian:", error);
      }
    };

    fetchLastAntrian();
  }, [getNomorAntrianTerakhir]);

  // Fetch data pengunjung
  useEffect(() => {
    fetchPengunjung();
  }, [fetchPengunjung]);

  // Handle klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
        setIsDropdownTitipanOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter pengunjung untuk antrian (yang belum punya antrian)
  const filteredPengunjungs = pengunjungs
  .filter((pengunjung) => {
    const isKodeMatch = pengunjung.nama?.toLowerCase().includes(searchKode?.toLowerCase());
    const hasNoAntrian = !pengunjung.antrian;
    return isKodeMatch && hasNoAntrian;
  });

  // Handle pemilihan pengunjung untuk antrian
  const handleSelectPengunjung = (pengunjung) => {
    setSearchKode(pengunjung.kode);
    setSelectedPengunjung(pengunjung);
    setIsDropdownOpen(false);
  };

  // Format date untuk filter
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

  // Filter pengunjung untuk titipan (hari ini saja)
  const today = formatDate(new Date());
  const filteredPengunjungTitipan = pengunjungs.filter((pengunjung) => {
    try {
      const updatedAtFormatted = formatDate(pengunjung.updatedAt);
      const isToday = updatedAtFormatted === today;
      const isKodeMatch = pengunjung.nama?.toLowerCase().includes(searchKodeTitipan?.toLowerCase());
      return isToday && (searchKodeTitipan === '' || isKodeMatch);
    } catch (error) {
      return false;
    }
  });

  // Handle pemilihan pengunjung untuk titipan
  const handleSelectPengunjungTitipan = (pengunjung) => {
    setSearchKodeTitipan(pengunjung.kode);
    setSelectedPengunjungTitipan(pengunjung);
    setIsDropdownTitipanOpen(false);
  };

  // Submit nomor antrian dengan print preview
  const handleSubmitAntrian = async () => {
    try {
      if (!selectedPengunjung?.kode) {
        setError("Pilih pengunjung terlebih dahulu");
        return;
      }

      const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

      if (updatedPengunjung) {
        const newAntrian = updatedPengunjung.antrian;
        const lastThreeDigits = newAntrian.slice(-3);
        
        setAntrian(lastThreeDigits);
        setSuccess("Nomor antrian berhasil disimpan");
        setError("");
        
        // Set data untuk print preview
        setPrintData({
          pengunjung: selectedPengunjung,
          antrian: lastThreeDigits
        });
        
        // Tampilkan print preview
        setShowPrintPreview(true);

        // Update lastAntrian untuk ditampilkan di UI
        setLastAntrian(lastThreeDigits);

        // Reset form setelah beberapa detik
        setTimeout(() => {
          setSuccess("");
          setSearchKode("");
          setSelectedPengunjung(null);
          setAntrian(null);
          fetchPengunjung(); // Refresh data
        }, 5000);
      }
    } catch (error) {
      console.error("Gagal menyimpan antrian:", error);
      setError("Gagal menyimpan nomor antrian");
    }
  };

  // Handle close print preview
  const handleClosePrintPreview = () => {
    setShowPrintPreview(false);
    setPrintData(null);
  };

  // Handle ambil label titipan
  const handleAmbilLabelTitipan = () => {
    if (selectedPengunjungTitipan) {
      navigate(`/label/${selectedPengunjungTitipan.kode}`);
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle close screensaver
  const handleCloseScreensaver = () => {
    setShowScreensaver(false);
    if (inactivityTimer) clearTimeout(inactivityTimer);
  };

  // Jika authUser null, jangan render apa pun
  if (!authUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {authUser?.user?.role === "admin" && showScreensaver ? (
        <VisitScreensaver onClose={handleCloseScreensaver} />
      ) : (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-blue-600 text-white shadow-lg relative">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={logo}
                  alt="Logo Kemenimipas"
                  className="h-12 w-12 rounded-full"
                />
                <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
              </div>

              <div className="flex-col items-center space-x-4 relative">
                <div className="flex justify-center cursor-pointer" onClick={toggleMenu}>
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src={authUser.user?.photo} 
                    alt="Profile"
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className="text-sm text-end capitalize">{authUser.user?.role}</h3>
                </div>
                <span className="text-sm">
                  Selamat Datang, {authUser.user?.nama}
                </span>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col p-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                      >
                        <LogOut className="size-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
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

                      {isDropdownOpen && filteredPengunjungs.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {filteredPengunjungs.map((pengunjung) => (
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
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
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
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Generate Nomor Antrian
                        </button>

                        {antrian && (
                          <div className="mt-4 text-center">
                            <span className="font-semibold">Nomor Antrian:</span>
                            <div className="text-3xl font-bold text-blue-600 mt-1">
                              {antrian}
                            </div>
                            <p className="text-sm text-green-600 mt-2">
                              Sedang menampilkan preview...
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {error && (
                      <div className="text-red-500 mt-2 p-2 bg-red-50 rounded">{error}</div>
                    )}
                    {success && (
                      <div className="text-green-500 mt-2 p-2 bg-green-50 rounded">{success}</div>
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
                  </div>

                  <Link
                    to="/admin-panel"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <QrCode className="h-12 w-12 text-red-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Ambil Kartu Kunjungan</h2>
                    <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
                  </Link>

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

                  <Link
                    to="/wbp-list"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 block relative z-10"
                    style={{ position: 'relative', zIndex: 10 }}
                  >
                    <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Daftar Warga Binaan
                    </h2>
                    <p className="text-gray-600">
                      Lihat dan kelola data warga binaan
                    </p>
                  </Link>

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

          {/* Render untuk role p2u dan user */}
          {(authUser.user?.role === "p2u" || authUser.user?.role === "user") && (
            <>
              <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Print Preview Modal */}
          <PrintPreviewModal 
            isOpen={showPrintPreview}
            onClose={handleClosePrintPreview}
            printData={printData}
          />
        </div>
      )}
    </div>
  );
}