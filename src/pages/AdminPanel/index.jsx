// import React, { useState } from 'react';
// import BarcodeScanner from './BarcodeScanner';
// import useDataStore from '../../store/useDataStore';
// import PengunjungDetail from './PengunjungDetail'; // Komponen untuk menampilkan detail pengunjung
// import { useNavigate } from 'react-router-dom';
// import { FaSearch, FaQrcode, FaTimes } from 'react-icons/fa'; // Ikon untuk tombol
// import Navbar from '../Navbar';
// import toast from 'react-hot-toast';

// const KodeInputForm = () => {
//   const { fetchPengunjungByCode, pengunjungByCode } = useDataStore();
//   const [kode, setKode] = useState('');
//   const [showScanner, setShowScanner] = useState(false);
//   const [showModal, setShowModal] = useState(false); // State untuk menampilkan modal

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Ambil data pengunjung berdasarkan kode
//       await fetchPengunjungByCode(kode);
//       setShowModal(true); // Tampilkan modal detail pengunjung
//     } catch (error) {
//       console.error("Gagal mengambil data pengunjung:", error);
//       alert("Data pengunjung tidak ditemukan.");
//     }
//   };

//   const handleScan = (data) => {
//     if (data) {
//       setKode(data); // Set kode dari hasil scan
//       setShowScanner(false); // Tutup scanner
//     }
//   };
//   const handlePengunjung = () => {
//     if(kode){
//       navigate(`/pengunjung/${kode}`)
//     }else{
//       toast.error("Coba masukkan kembali kode anda atau lakukan scan ulang")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       <Navbar />
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
//         {/* Header */}
//         <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//           <h2 className="text-3xl font-bold text-center">Cari Pengunjung</h2>
//           <p className="mt-2 text-sm text-center opacity-90">
//             Masukkan kode verifikasi atau scan barcode untuk mencari pengunjung.
//           </p>
//         </div>

//         {/* Form */}
//         <div className="p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Input Kode */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Kode Verifikasi
//               </label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Masukkan kode verifikasi"
//                   value={kode}
//                   onChange={(e) => setKode(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowScanner(true)}
//                   className="p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <FaQrcode className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Tombol Cari */}
//             <button
//             onClick={handlePengunjung}
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
//             >
//               <FaSearch className="mr-2" />
//               Cari Pengunjung
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modal untuk menampilkan barcode scanner */}
//       {showScanner && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl text-center font-bold">Scan Barcode</h2>
//               <button
//                 onClick={() => setShowScanner(false)}
//                 className="p-2 bg-red-500 text-black rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 <FaTimes className="w-6 h-6" />
//               </button>
//             </div>
//             <BarcodeScanner onScan={handleScan} onClose={() => setShowScanner(false)} />
//           </div>
//         </div>
//       )}
// {/* Modal untuk menampilkan data pengunjung */}
// {/* {showModal && (
//   <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//     <div className="bg-white p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Detail Pengunjung</h2>
//         <button
//           onClick={() => setShowModal(false)}
//           className="p-2 bg-red-500 text-black rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//         >
//           <FaTimes className="w-6 h-6" />
//         </button>
//       </div>
//       {pengunjungByCode ? (
//         <PengunjungDetail pengunjung={pengunjungByCode} />
//       ) : (
//         <p className="text-center text-gray-600">Data pengunjung tidak ditemukan.</p>
//       )}
//     </div>
//   </div>
// )} */}
//     </div>
//   );
// };

// export default KodeInputForm;


import React, { useState, useEffect, useRef } from 'react';
import BarcodeScanner from './BarcodeScanner';
import useDataStore from '../../store/useDataStore';
import PengunjungDetail from './PengunjungDetail';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaQrcode, FaTimes } from 'react-icons/fa';
import Navbar from '../Navbar';
import toast from 'react-hot-toast';

const KodeInputForm = () => {
  const { fetchPengunjungByCode, pengunjungByCode, pengunjungs, fetchPengunjung } = useDataStore();
  const [kode, setKode] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredPengunjungs, setFilteredPengunjungs] = useState([]);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Fetch data pengunjung saat komponen dimuat
  useEffect(() => {
    fetchPengunjung();
  }, [fetchPengunjung]);

  // Filter pengunjung berdasarkan input kode/nama
  useEffect(() => {
    if (kode.trim() === '') {
      setFilteredPengunjungs([]);
    } else {
      const filtered = pengunjungs.filter(pengunjung =>
        pengunjung.nama?.toLowerCase().includes(kode.toLowerCase()) ||
        pengunjung.kode?.toLowerCase().includes(kode.toLowerCase())
      );
      setFilteredPengunjungs(filtered);
    }
  }, [kode, pengunjungs]);

  // Handle klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchPengunjungByCode(kode);
      setShowModal(true);
    } catch (error) {
      console.error("Gagal mengambil data pengunjung:", error);
      toast.error("Data pengunjung tidak ditemukan.");
    }
  };

  const handleScan = (data) => {
    if (data) {
      setKode(data);
      setShowScanner(false);
    }
  };

  const handlePengunjung = () => {
    if (kode) {
      navigate(`/pengunjung/${kode}`);
    } else {
      toast.error("Coba masukkan kembali kode anda atau lakukan scan ulang");
    }
  };

  const handleSelectPengunjung = (pengunjung) => {
    setKode(pengunjung.kode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <Navbar />
      
      {/* Container utama dengan relative positioning */}
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
          {/* Header */}
          <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-3xl font-bold text-center">Cari Pengunjung</h2>
            <p className="mt-2 text-sm text-center opacity-90">
              Masukkan kode verifikasi atau scan barcode untuk mencari pengunjung.
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Kode dengan Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kode Verifikasi
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Masukkan kode verifikasi"
                    value={kode}
                    onChange={(e) => {
                      setKode(e.target.value);
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowScanner(true)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <FaQrcode className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Tombol Cari */}
              <button
                onClick={handlePengunjung}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
              >
                <FaSearch className="mr-2" />
                Cari Pengunjung
              </button>
            </form>
          </div>
        </div>

        {/* Dropdown List - POSISI ABSOLUTE DI LUAR CARD */}
        {isDropdownOpen && filteredPengunjungs.length > 0 && (
          <div 
            ref={dropdownRef}
            className="absolute top-40 left-0 right-0 mt-[-110px] bg-white border border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50"
            style={{ top: 'calc(100% + 10px)' }}
          >
            {filteredPengunjungs.map((pengunjung) => (
              <div
                key={pengunjung.id}
                onClick={() => handleSelectPengunjung(pengunjung)}
                className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
              >
                <div className="font-medium text-gray-900">{pengunjung.nama}</div>
                <div className="text-sm text-gray-500">Kode: {pengunjung.kode}</div>
                {pengunjung.antrian && (
                  <div className="text-sm text-green-600 font-medium">Antrian: {pengunjung.antrian}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal untuk menampilkan barcode scanner */}
      {showScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Scan Barcode</h2>
              <button
                onClick={() => setShowScanner(false)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <BarcodeScanner onScan={handleScan} onClose={() => setShowScanner(false)} />
          </div>
        </div>
      )}

      {/* Modal untuk menampilkan data pengunjung */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Detail Pengunjung</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            {pengunjungByCode ? (
              <PengunjungDetail pengunjung={pengunjungByCode} />
            ) : (
              <p className="text-center text-gray-600">Data pengunjung tidak ditemukan.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default KodeInputForm;