// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useDataStore from "../../store/useDataStore";
// import NavbarWbp from "../Navbar";
// // import { toast } from "react-hot-toast";
// import "./style.css";
// import useAuthStore from "../../store/useAuthStore";

// const PengunjungData = () => {
//   const {authUser} = useAuthStore();
//   const { fetchPengunjungData, pengunjungData, loading, error } = useDataStore();
//   const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian
//   const [searchBy, setSearchBy] = useState("nama"); // State untuk kriteria pencarian
//   const [filterDate, setFilterDate] = useState(""); // State untuk filter berdasarkan tanggal
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPengunjungData(); // Ambil semua data pengunjung tanpa paging
//   }, [fetchPengunjungData]);

//   console.log("pengunjungs", pengunjungData)

//   // Fungsi untuk memfilter data berdasarkan pencarian dan tanggal
//   const filteredPengunjungs = pengunjungData.filter((pengunjung) => {
//     const value = pengunjung[searchBy]?.toLowerCase() || ""; // Ambil nilai berdasarkan kriteria pencarian
//     const isMatch = value.includes(searchQuery.toLowerCase()); // Filter berdasarkan kata kunci
    
//     // Jika filter tanggal diisi, lakukan filter berdasarkan updated_at (hanya tahun, bulan, dan tanggal)
//     const isDateMatch = filterDate
//     ? new Date(pengunjung.createdAt).toISOString().split('T')[0] === new Date(filterDate).toISOString().split('T')[0]
//     : true;
  
//   return isMatch && isDateMatch;
//   });  
//   const filteredPengunjungUser = pengunjungData.filter((pengunjung) => {
//     const value = pengunjung[searchBy]?.toLowerCase() || ""; // Ambil nilai berdasarkan kriteria pencarian
//     const isMatch = value.includes(searchQuery.toLowerCase()); // Filter berdasarkan kata kunci
    
//     // Jika filter tanggal diisi, lakukan filter berdasarkan created_at (hanya tahun, bulan, dan tanggal)
//     const isDateMatch = filterDate
//     ? new Date(pengunjung.createdAt).toISOString().split('T')[0] === new Date(filterDate).toISOString().split('T')[0]
//     : true;
  
//   return isMatch && isDateMatch;
//   });  

//   // Fungsi untuk menghapus Pengunjung
//   // const handleDelete = async (id) => {
//   //   if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
//   //     try {
//   //       await deletePengunjung(id);
//   //       toast.success("Data Pengunjung berhasil dihapus!");
//   //       fetchPengunjung(); // Refresh data setelah menghapus
//   //     } catch (error) {
//   //       toast.error("Gagal menghapus data Pengunjung.");
//   //       console.error("Error:", error);
//   //     }
//   //   }
//   // };


//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">Error: {error}</div>;
//   }

//   return (
//     <>
//       <NavbarWbp />
//       <div className="min-h-screen bg-gray-100 p-8 mt-10">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Daftar Pengunjung
//         </h1>

//         {/* Form Pencarian */}
//         <div className="flex justify-between">
//           <div className="mb-8 flex">
//             <div className="flex flex-wrap items-center space-x-4">
//               {/* Input Pencarian */}
//               <input
//                 type="text"
//                 placeholder="Cari pengunjung..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               {/* Dropdown Kriteria Pencarian */}
//               <select
//                 value={searchBy}
//                 onChange={(e) => setSearchBy(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="nama">Nama</option>
//                 <option value="alamat">Alamat</option>
//                 <option value="tempat_lahir">NIK</option>
//                 <option value="tanggal_lahir">No. Hp</option>
//                 <option value="jenis_kelamin">Jenis Kelamin</option>
//                 <option value="status">Status</option>
//               </select>

//               {/* Filter Berdasarkan Tanggal */}
//               <input
//                 type="date"
//                 value={filterDate}
//                 onChange={(e) => setFilterDate(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => navigate("/pengunjung/data/create")}>+ Add</button>
//           </div>
//         </div>
//         {authUser.user?.role == 'admin' || authUser.user?.role == 'p2u' ? (
//           <>
//           {/* Tabel Pengunjung */}
//           <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Hp</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//     {filteredPengunjungs.map((pengunjung) => (
//       <tr
//         key={pengunjung.id}
//         className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
//         onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)} 
//       >
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.nama}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.alamat}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.nik}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.hp}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.jenis_kelamin}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.status}
//         </td>
        
//       </tr>
//     ))}
//   </tbody>
//             </table>
//           </div>
//           </>
//         ): (<p className="text-center font-bold">Data tidak ditemukan</p>)}
//         {authUser.user?.role === "user" && (
//           <>
//           {/* Tabel Pengunjung */}
//           <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Hp</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//     {filteredPengunjungUser.map((pengunjung) => (
//       <tr
//         key={pengunjung.id}
//         className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
//         onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)} 
//       >
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.nama}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.alamat}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.nik}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.hp}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.jenis_kelamin}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//           {pengunjung.status}
//         </td>
        
//       </tr>
//     ))}
//   </tbody>
//             </table>
//           </div>
//           </>
//         )}
        
//       </div>
//     </>
//   );
// };

// export default PengunjungData;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";

const PengunjungData = () => {
  const {authUser} = useAuthStore();
  const { fetchPengunjungData, pengunjungData, loading, error } = useDataStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("nama");
  const [filterDate, setFilterDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPengunjungData();
  }, [fetchPengunjungData]);

  // Fungsi untuk print identitas yang lebih menarik
  const handlePrint = (pengunjung) => {
    const printWindow = window.open('', '_blank', 'width=600,height=800');
    
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Identitas Pengunjung - ${pengunjung.nama}</title>
        <style>
          @media print {
            @page {
              size: A6 landscape;
              margin: 5mm;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          
          body {
            margin: 0;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            display: flex;
            align-items: start;
            justify-content: start;
          }
          
          .identitas-container {
            width: 148mm;
            height: 105mm;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            position: relative;
            overflow: hidden;
            display: flex;
          }
          
          .gradient-side {
            width: 40%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
          }
          
          .info-side {
            width: 60%;
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          .logo {
            text-align: center;
            margin-bottom: 20px;
          }
          
          .logo h1 {
            font-size: 16px;
            margin: 0;
            font-weight: bold;
          }
          
          .logo p {
            font-size: 10px;
            margin: 5px 0 0 0;
            opacity: 0.9;
          }
          
          .barcode-section {
            text-align: center;
          }
          
          .barcode {
            width: 100%;
            max-width: 120px;
            height: auto;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
          }
          
          .kode-display {
            background: rgba(255,255,255,0.2);
            padding: 8px 15px;
            border-radius: 25px;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
            backdrop-filter: blur(10px);
          }
          
          .data-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            margin-bottom: 20px;
          }
          
          .data-row {
            display: flex;
            align-items: flex-start;
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .data-label {
            font-weight: bold;
            color: #667eea;
            font-size: 11px;
            width: 80px;
            flex-shrink: 0;
          }
          
          .data-value {
            color: #333;
            font-size: 12px;
            flex: 1;
          }
          
          .header-main {
            text-align: center;
            margin-bottom: 25px;
          }
          
          .header-main h2 {
            color: #667eea;
            margin: 0;
            font-size: 18px;
            font-weight: bold;
          }
          
          .header-main p {
            color: #666;
            margin: 5px 0 0 0;
            font-size: 11px;
          }
          
          .photo-placeholder {
            width: 60px;
            height: 80px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 10px;
            text-align: center;
            margin-left: auto;
          }
          
          .footer {
            text-align: center;
            font-size: 9px;
            color: #666;
            border-top: 1px solid #eee;
            padding-top: 10px;
          }
          
          .decoration {
            position: absolute;
            bottom: -20px;
            right: -20px;
            width: 100px;
            height: 100px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
          }
          
          .decoration-2 {
            position: absolute;
            top: -30px;
            left: -30px;
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.05);
            border-radius: 50%;
          }
          
          .status-badge {
            background: #48bb78;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 10px;
            font-weight: bold;
            display: inline-block;
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="identitas-container">
          <!-- Side kiri dengan gradient -->
          <div class="gradient-side">
            <div class="decoration"></div>
            <div class="decoration-2"></div>
            
            <div class="logo">
              <h1>WBP SYSTEM</h1>
              <p>Visitor Identity</p>
            </div>
            
            <div class="barcode-section">
              <img src="${pengunjung.barcode}" alt="Barcode" class="barcode" />
              <div class="kode-display">${pengunjung.kode}</div>
            </div>
            
            <div style="text-align: center;">
              <div style="font-size: 10px; opacity: 0.9;">Valid Until</div>
              <div style="font-size: 12px; font-weight: bold;">${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID')}</div>
            </div>
          </div>
          
          <!-- Side kanan dengan informasi -->
          <div class="info-side">
            <div class="header-main">
              <h2>IDENTITAS PENGGUNA</h2>
              <p>WBP Management System - Official Visitor Pass</p>
            </div>
            
            <div class="data-grid">
              <div class="data-row">
                <div class="data-label">NAMA</div>
                <div class="data-value">${pengunjung.nama}</div>
              </div>
              
              <div class="data-row">
                <div class="data-label">ALAMAT</div>
                <div class="data-value">${pengunjung.alamat}</div>
              </div>
              
              <div class="data-row">
                <div class="data-label">NIK</div>
                <div class="data-value">${pengunjung.nik}</div>
              </div>
              
              <div class="data-row">
                <div class="data-label">NO. HP</div>
                <div class="data-value">${pengunjung.hp}</div>
              </div>
              
              <div class="data-row">
                <div class="data-label">JENIS KELAMIN</div>
                <div class="data-value">
                  ${pengunjung.jenis_kelamin === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}
                  <div class="status-badge">ACTIVE</div>
                </div>
              </div>
            </div>
            
            <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: auto;">
              <div class="footer">
                <div>Dicetak secara elektronik • ${new Date().toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</div>
              </div>
              
            </div>
          </div>
        </div>
        
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
              setTimeout(function() {
                window.close();
              }, 500);
            }, 500);
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  const filteredPengunjungs = pengunjungData.filter((pengunjung) => {
    const value = pengunjung[searchBy]?.toLowerCase() || "";
    const isMatch = value.includes(searchQuery.toLowerCase());
    const isDateMatch = filterDate
      ? new Date(pengunjung.createdAt).toISOString().split('T')[0] === new Date(filterDate).toISOString().split('T')[0]
      : true;
    return isMatch && isDateMatch;
  });

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const dataToShow = authUser.user?.role === 'user' 
    ? pengunjungData.filter(pengunjung => pengunjung.user_id === authUser.user?.id)
    : filteredPengunjungs;

  return (
    <>
      <NavbarWbp />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Daftar Pengunjung
        </h1>

        {/* Form Pencarian */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-wrap items-center space-x-4">
            <input
              type="text"
              placeholder="Cari pengunjung..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="nama">Nama</option>
              <option value="alamat">Alamat</option>
              <option value="nik">NIK</option>
              <option value="hp">No. Hp</option>
              <option value="jenis_kelamin">Jenis Kelamin</option>
              <option value="kode">Kode</option>
            </select>

            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {(authUser.user?.role === 'admin' || authUser.user?.role === 'p2u') && (
            <button 
              onClick={() => navigate("/pengunjung/data/create")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>+</span>
              <span>Tambah Pengunjung</span>
            </button>
          )}
        </div>

        {/* Tabel Pengunjung */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Alamat</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">NIK</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">No. Hp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Jenis Kelamin</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataToShow.length > 0 ? (
                dataToShow.map((pengunjung) => (
                  <tr
                    key={pengunjung.id}
                    className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group"
                  >
                    <td 
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer group-hover:text-blue-600"
                      onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {pengunjung.nama.charAt(0)}
                        </div>
                        <span>{pengunjung.nama}</span>
                      </div>
                    </td>
                    <td 
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 cursor-pointer"
                      onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)}
                    >
                      {pengunjung.alamat}
                    </td>
                    <td 
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 cursor-pointer font-mono"
                      onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)}
                    >
                      {pengunjung.nik}
                    </td>
                    <td 
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 cursor-pointer"
                      onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)}
                    >
                      {pengunjung.hp}
                    </td>
                    <td 
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 cursor-pointer"
                      onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)}
                    >
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        pengunjung.jenis_kelamin === 'laki-laki' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-pink-100 text-pink-800'
                      }`}>
                        {pengunjung.jenis_kelamin === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrint(pengunjung);
                        }}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 transform hover:scale-105 shadow-md flex items-center space-x-2"
                      >
                        <span>🖨️</span>
                        <span>Print ID</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center">
                    <div className="text-gray-500 text-lg">Tidak ada data pengunjung</div>
                    <div className="text-gray-400 text-sm mt-2">Silakan tambah pengunjung baru</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PengunjungData;