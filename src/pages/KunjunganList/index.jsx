// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useDataStore from "../../store/useDataStore";
// import NavbarWbp from "../Navbar";
// // import { toast } from "react-hot-toast";
// import "./style.css";
// import useAuthStore from "../../store/useAuthStore";

// const PengunjungList = () => {
//   const {authUser} = useAuthStore();
//   const { fetchPengunjung, fetchPengunjungUser, pengunjungs, pengunjungUser, loading, error } = useDataStore();
//   const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian
//   const [searchBy, setSearchBy] = useState("nama"); // State untuk kriteria pencarian
//   const [filterDate, setFilterDate] = useState(""); // State untuk filter berdasarkan tanggal
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPengunjung(); // Ambil semua data pengunjung tanpa paging
//     fetchPengunjungUser();
//   }, [fetchPengunjung, fetchPengunjungUser]);

//   console.log("pengunjungs", pengunjungs)

//   // Fungsi untuk memfilter data berdasarkan pencarian dan tanggal
//   const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
//     const value = pengunjung[searchBy]?.toLowerCase() || ""; // Ambil nilai berdasarkan kriteria pencarian
//     const isMatch = value.includes(searchQuery.toLowerCase()); // Filter berdasarkan kata kunci
    
//     // Jika filter tanggal diisi, lakukan filter berdasarkan updated_at (hanya tahun, bulan, dan tanggal)
//     const isDateMatch = filterDate
//     ? new Date(pengunjung.createdAt).toISOString().split('T')[0] === new Date(filterDate).toISOString().split('T')[0]
//     : true;
  
//   return isMatch && isDateMatch;
//   });  
//   const filteredPengunjungUser = pengunjungUser.filter((pengunjung) => {
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
//             <button onClick={() => navigate("/create-pengunjung")}>+ Add</button>
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
//         onClick={() => navigate(`/pengunjung/${pengunjung.id}`)} 
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
//         onClick={() => navigate(`/pengunjung/${pengunjung.id}`)} 
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

// export default PengunjungList;




// // import React, { useEffect, useState, useRef, useCallback } from "react";
// // import { useNavigate } from "react-router-dom";
// // import useDataStore from "../../store/useDataStore";
// // import NavbarWbp from "../Navbar";
// // import "./style.css";
// // import useAuthStore from "../../store/useAuthStore";

// // const PengunjungList = () => {
// //   const { authUser } = useAuthStore();
// //   const {
// //     fetchPengunjung,
// //     fetchPengunjungUser,
// //     pengunjungs,
// //     pengunjungUser,
// //     loading,
// //     error,
// //   } = useDataStore();

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [searchBy, setSearchBy] = useState("nama");
// //   const [filterDate, setFilterDate] = useState("");

// //   // ✅ lazy state
// //   const [page, setPage] = useState(1);
// //   const limit = 10;

// //   const observer = useRef();
// //   const navigate = useNavigate();

// //   // ================= FETCH =================
// //   useEffect(() => {
// //     fetchPengunjung({ page: 1, limit });
// //     fetchPengunjungUser({ page: 1, limit });
// //   }, []);

// //   useEffect(() => {
// //     if (page === 1) return;

// //     fetchPengunjung({ page, limit, append: true });
// //     fetchPengunjungUser({ page, limit, append: true });
// //   }, [page]);

// //   // ================= OBSERVER =================
// //   const lastElementRef = useCallback(
// //     (node) => {
// //       if (loading) return;

// //       if (observer.current) observer.current.disconnect();

// //       observer.current = new IntersectionObserver((entries) => {
// //         if (entries[0].isIntersecting) {
// //           setPage((prev) => prev + 1);
// //         }
// //       });

// //       if (node) observer.current.observe(node);
// //     },
// //     [loading]
// //   );

// //   // ================= FILTER =================
// //   const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
// //     const value = pengunjung[searchBy]?.toLowerCase() || "";
// //     const isMatch = value.includes(searchQuery.toLowerCase());

// //     const isDateMatch = filterDate
// //       ? new Date(pengunjung.createdAt).toISOString().split("T")[0] ===
// //         new Date(filterDate).toISOString().split("T")[0]
// //       : true;

// //     return isMatch && isDateMatch;
// //   });

// //   const filteredPengunjungUser = pengunjungUser.filter((pengunjung) => {
// //     const value = pengunjung[searchBy]?.toLowerCase() || "";
// //     const isMatch = value.includes(searchQuery.toLowerCase());

// //     const isDateMatch = filterDate
// //       ? new Date(pengunjung.createdAt).toISOString().split("T")[0] ===
// //         new Date(filterDate).toISOString().split("T")[0]
// //       : true;

// //     return isMatch && isDateMatch;
// //   });

// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <>
// //       <NavbarWbp />
// //       <div className="p-8 mt-10">
// //         <h1 className="text-2xl font-bold text-center mb-6">
// //           Daftar Pengunjung
// //         </h1>

// //         {/* SEARCH */}
// //         <div className="flex space-x-4 mb-6">
// //           <input
// //             type="text"
// //             placeholder="Cari..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="border px-3 py-2"
// //           />

// //           <select
// //             value={searchBy}
// //             onChange={(e) => setSearchBy(e.target.value)}
// //             className="border px-3 py-2"
// //           >
// //             <option value="nama">Nama</option>
// //             <option value="alamat">Alamat</option>
// //             <option value="nik">NIK</option>
// //             <option value="hp">No. Hp</option>
// //           </select>

// //           <input
// //             type="date"
// //             value={filterDate}
// //             onChange={(e) => setFilterDate(e.target.value)}
// //             className="border px-3 py-2"
// //           />
// //         </div>

// //         {/* ADMIN */}
// //         {(authUser.user?.role === "admin" ||
// //           authUser.user?.role === "p2u") && (
// //             <table className="w-full border">
// //   <thead className="bg-gray-100">
// //     <tr>
// //       <th>Nama</th>
// //       <th>Alamat</th>
// //       <th>NIK</th>
// //       <th>No. Hp</th>
// //       <th>Jenis Kelamin</th>
// //       <th>Status</th>
// //     </tr>
// //   </thead>

// //   <tbody>
// //     {filteredPengunjungs.map((item, index) => {
// //       if (index === filteredPengunjungs.length - 1) {
// //         return (
// //           <tr ref={lastElementRef} key={item.id}>
// //             <td>{item.nama}</td>
// //             <td>{item.alamat}</td>
// //             <td>{item.nik}</td>
// //             <td>{item.hp}</td>
// //             <td>{item.jenis_kelamin}</td>
// //             <td>{item.status}</td>
// //           </tr>
// //         );
// //       }

// //       return (
// //         <tr key={item.id}>
// //           <td>{item.nama}</td>
// //           <td>{item.alamat}</td>
// //           <td>{item.nik}</td>
// //           <td>{item.hp}</td>
// //           <td>{item.jenis_kelamin}</td>
// //           <td>{item.status}</td>
// //         </tr>
// //       );
// //     })}
// //   </tbody>
// // </table>
// //           // <table className="w-full border">
// //           //   <tbody>
// //           //     {filteredPengunjungs.map((item, index) => {
// //           //       if (index === filteredPengunjungs.length - 1) {
// //           //         return (
// //           //           <tr
// //           //             ref={lastElementRef}
// //           //             key={item.id}
// //           //             onClick={() =>
// //           //               navigate(`/pengunjung/${item.id}`)
// //           //             }
// //           //           >
// //           //             <td>{item.nama}</td>
// //           //             <td>{item.alamat}</td>
// //           //           </tr>
// //           //         );
// //           //       }

// //           //       return (
// //           //         <tr
// //           //           key={item.id}
// //           //           onClick={() =>
// //           //             navigate(`/pengunjung/${item.id}`)
// //           //           }
// //           //         >
// //           //           <td>{item.nama}</td>
// //           //           <td>{item.alamat}</td>
// //           //         </tr>
// //           //       );
// //           //     })}
// //           //   </tbody>
// //           // </table>
// //         )}

// //         {/* LOADING */}
// //         {loading && <p className="text-center mt-4">Loading more...</p>}
// //       </div>
// //     </>
// //   );
// // };

// // export default PengunjungList;



import React, { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";

const PengunjungList = () => {
  const { authUser } = useAuthStore();
  const { 
    fetchPengunjung, 
    fetchPengunjungUser, 
    pengunjungs, 
    pengunjungUser,
    loading, 
    loadingUser,
    error,
    currentPage,
    totalPage,
    userCurrentPage,
    userTotalPage,
    totalData,
    userTotalData,
    resetPengunjungPagination,
    resetPengunjungUserPagination
  } = useDataStore();
  
  // State untuk pencarian dan filter
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("nama");
  const [filterDate, setFilterDate] = useState("");
  
  // State untuk pagination dan limit
  const [page, setPage] = useState(1);
  const [userPage, setUserPage] = useState(1);
  const [limit, setLimit] = useState(20); // Default limit 20
  const [userLimit, setUserLimit] = useState(20); // Limit untuk user
  
  // State untuk menyimpan pilihan limit yang tersedia
  const limitOptions = [10, 20, 50, 100, 200, 500];
  
  const navigate = useNavigate();
  const observer = useRef();
  const userObserver = useRef();

  // Debugging
  useEffect(() => {
    console.log("Role user:", authUser.user?.role);
    console.log("Data pengunjungs (admin):", pengunjungs?.length);
    console.log("Data pengunjungUser (user):", pengunjungUser?.length);
    console.log("Current limit:", limit);
  }, [authUser, pengunjungs, pengunjungUser, limit]);

  // Inisialisasi data berdasarkan role
  useEffect(() => {
    if (!authUser.user) return;

    const loadInitialData = async () => {
      if (authUser.user?.role === 'admin' || authUser.user?.role === 'p2u') {
        console.log(`Loading admin data with limit ${limit}...`);
        resetPengunjungPagination();
        setPage(1);
        await fetchPengunjung({ page: 1, limit, append: false });
      } else if (authUser.user?.role === 'user') {
        console.log(`Loading user data with limit ${userLimit}...`);
        resetPengunjungUserPagination();
        setUserPage(1);
        await fetchPengunjungUser({ page: 1, limit: userLimit, append: false });
      }
    };

    loadInitialData();
  }, [authUser.user?.role, limit, userLimit]);

  // Load more data untuk admin saat page berubah
  useEffect(() => {
    if (page === 1) return;
    if (authUser.user?.role === 'admin' || authUser.user?.role === 'p2u') {
      console.log("Loading more admin data, page:", page, "limit:", limit);
      fetchPengunjung({ page, limit, append: true });
    }
  }, [page, limit]);

  // Load more data untuk user saat userPage berubah
  useEffect(() => {
    if (userPage === 1) return;
    if (authUser.user?.role === 'user') {
      console.log("Loading more user data, page:", userPage, "limit:", userLimit);
      fetchPengunjungUser({ page: userPage, limit: userLimit, append: true });
    }
  }, [userPage, userLimit]);

  // Handler untuk mengubah limit admin
  const handleLimitChange = (newLimit) => {
    if (newLimit === limit) return;
    
    setLimit(newLimit);
    resetPengunjungPagination();
    setPage(1);
    fetchPengunjung({ page: 1, limit: newLimit, append: false });
  };

  // Handler untuk mengubah limit user
  const handleUserLimitChange = (newLimit) => {
    if (newLimit === userLimit) return;
    
    setUserLimit(newLimit);
    resetPengunjungUserPagination();
    setUserPage(1);
    fetchPengunjungUser({ page: 1, limit: newLimit, append: false });
  };

  // Filter data dengan useMemo untuk optimasi
  const filteredData = useMemo(() => {
    const dataToFilter = authUser.user?.role === 'user' ? pengunjungUser : pengunjungs;
    
    if (!dataToFilter || dataToFilter.length === 0) return [];

    return dataToFilter.filter((item) => {
      if (!item) return false;

      const value = item[searchBy]?.toString().toLowerCase() || "";
      const isMatch = value.includes(searchQuery.toLowerCase());
      
      let isDateMatch = true;
      if (filterDate && item.createdAt) {
        try {
          isDateMatch = new Date(item.createdAt).toISOString().split('T')[0] === 
            new Date(filterDate).toISOString().split('T')[0];
        } catch (e) {
          isDateMatch = true;
        }
      }

      return isMatch && isDateMatch;
    });
  }, [searchQuery, searchBy, filterDate, pengunjungs, pengunjungUser, authUser.user?.role]);

  // Intersection Observer untuk admin
  const lastElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && page < totalPage) {
        console.log("Intersection detected, loading more admin data...");
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, page, totalPage]);

  // Intersection Observer untuk user
  const lastUserElementRef = useCallback((node) => {
    if (loadingUser) return;
    if (userObserver.current) userObserver.current.disconnect();

    userObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && userPage < userTotalPage) {
        console.log("Intersection detected, loading more user data...");
        setUserPage(prevPage => prevPage + 1);
      }
    });

    if (node) userObserver.current.observe(node);
  }, [loadingUser, userPage, userTotalPage]);

  // Tentukan loading state berdasarkan role
  const isLoading = authUser.user?.role === 'user' ? loadingUser : loading;

  if (error) {
    return (
      <>
        <NavbarWbp />
        <div className="min-h-screen bg-gray-100 p-8 mt-10">
          <div className="text-center py-8 text-red-500">
            Error: {error}
            <button 
              onClick={() => window.location.reload()}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Reload
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarWbp />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Daftar Pengunjung
        </h1>

        {/* Search Form dan Pengaturan Limit */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Search Inputs */}
            <div className="flex flex-wrap items-center gap-4">
              <input
                type="text"
                placeholder="Cari pengunjung..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="nama">Nama</option>
                <option value="alamat">Alamat</option>
                <option value="nik">NIK</option>
                <option value="hp">No. Hp</option>
                <option value="jenis_kelamin">Jenis Kelamin</option>
                <option value="status">Status</option>
              </select>

              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Add Button */}
            <button 
              onClick={() => navigate("/create-pengunjung")}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              + Add
            </button>
          </div>

          {/* Pengaturan Limit */}
          <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Tampilkan:</span>
              <select
                value={authUser.user?.role === 'user' ? userLimit : limit}
                onChange={(e) => {
                  const newLimit = parseInt(e.target.value);
                  if (authUser.user?.role === 'user') {
                    handleUserLimitChange(newLimit);
                  } else {
                    handleLimitChange(newLimit);
                  }
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {limitOptions.map(opt => (
                  <option key={opt} value={opt}>{opt} data per halaman</option>
                ))}
              </select>
            </div>

            {/* Info Total Data */}
            <div className="text-sm text-gray-600">
              Total data: {authUser.user?.role === 'user' ? userTotalData : totalData} 
              | Halaman {authUser.user?.role === 'user' ? userCurrentPage : currentPage} dari {authUser.user?.role === 'user' ? userTotalPage : totalPage}
            </div>
          </div>
        </div>

        {/* Tampilkan pesan jika tidak ada data */}
        {!isLoading && filteredData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Tidak ada data pengunjung
          </div>
        )}

        {/* Tabel untuk Admin/P2U */}
        {(authUser.user?.role === 'admin' || authUser.user?.role === 'p2u') && filteredData.length > 0 && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Hp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((pengunjung, index) => {
                  const row = (
                    <tr
                      key={pengunjung.id || index}
                      className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
                      onClick={() => navigate(`/pengunjung/${pengunjung.id}`)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.nama || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.alamat || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.nik || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.hp || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.jenis_kelamin || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.status || '-'}</td>
                    </tr>
                  );

                  // Tambahkan ref ke elemen terakhir untuk infinite scroll
                  if (index === filteredData.length - 1) {
                    return React.cloneElement(row, { ref: lastElementRef });
                  }
                  return row;
                })}
              </tbody>
            </table>
            
            {/* Loading indicator */}
            {loading && (
              <div className="text-center py-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p className="mt-2 text-gray-600">Memuat data tambahan...</p>
              </div>
            )}
            
            {/* No more data message */}
            {!loading && page >= totalPage && filteredData.length > 0 && (
              <div className="text-center py-4 text-gray-500">
                Tidak ada data lagi
              </div>
            )}
          </div>
        )}

        {/* Tabel untuk User */}
        {authUser.user?.role === "user" && filteredData.length > 0 && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Hp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((pengunjung, index) => {
                  const row = (
                    <tr
                      key={pengunjung.id || index}
                      className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
                      onClick={() => navigate(`/pengunjung/${pengunjung.id}`)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.nama || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.alamat || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.nik || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.hp || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.jenis_kelamin || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pengunjung.status || '-'}</td>
                    </tr>
                  );

                  if (index === filteredData.length - 1) {
                    return React.cloneElement(row, { ref: lastUserElementRef });
                  }
                  return row;
                })}
              </tbody>
            </table>
            
            {/* Loading indicator untuk user */}
            {loadingUser && (
              <div className="text-center py-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p className="mt-2 text-gray-600">Memuat data tambahan...</p>
              </div>
            )}
            
            {/* No more data message */}
            {!loadingUser && userPage >= userTotalPage && filteredData.length > 0 && (
              <div className="text-center py-4 text-gray-500">
                Tidak ada data lagi
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PengunjungList;
