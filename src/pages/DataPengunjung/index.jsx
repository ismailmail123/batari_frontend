import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
// import { toast } from "react-hot-toast";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";

const PengunjungData = () => {
  const {authUser} = useAuthStore();
  const { fetchPengunjungData, pengunjungData, loading, error } = useDataStore();
  const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian
  const [searchBy, setSearchBy] = useState("nama"); // State untuk kriteria pencarian
  const [filterDate, setFilterDate] = useState(""); // State untuk filter berdasarkan tanggal
  const navigate = useNavigate();

  useEffect(() => {
    fetchPengunjungData(); // Ambil semua data pengunjung tanpa paging
  }, [fetchPengunjungData]);

  console.log("pengunjungs", pengunjungData)

  // Fungsi untuk memfilter data berdasarkan pencarian dan tanggal
  const filteredPengunjungs = pengunjungData.filter((pengunjung) => {
    const value = pengunjung[searchBy]?.toLowerCase() || ""; // Ambil nilai berdasarkan kriteria pencarian
    const isMatch = value.includes(searchQuery.toLowerCase()); // Filter berdasarkan kata kunci
    
    // Jika filter tanggal diisi, lakukan filter berdasarkan updated_at (hanya tahun, bulan, dan tanggal)
    const isDateMatch = filterDate
    ? new Date(pengunjung.createdAt).toISOString().split('T')[0] === new Date(filterDate).toISOString().split('T')[0]
    : true;
  
  return isMatch && isDateMatch;
  });  
  const filteredPengunjungUser = pengunjungData.filter((pengunjung) => {
    const value = pengunjung[searchBy]?.toLowerCase() || ""; // Ambil nilai berdasarkan kriteria pencarian
    const isMatch = value.includes(searchQuery.toLowerCase()); // Filter berdasarkan kata kunci
    
    // Jika filter tanggal diisi, lakukan filter berdasarkan created_at (hanya tahun, bulan, dan tanggal)
    const isDateMatch = filterDate
    ? new Date(pengunjung.createdAt).toISOString().split('T')[0] === new Date(filterDate).toISOString().split('T')[0]
    : true;
  
  return isMatch && isDateMatch;
  });  

  // Fungsi untuk menghapus Pengunjung
  // const handleDelete = async (id) => {
  //   if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
  //     try {
  //       await deletePengunjung(id);
  //       toast.success("Data Pengunjung berhasil dihapus!");
  //       fetchPengunjung(); // Refresh data setelah menghapus
  //     } catch (error) {
  //       toast.error("Gagal menghapus data Pengunjung.");
  //       console.error("Error:", error);
  //     }
  //   }
  // };


  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <NavbarWbp />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Daftar Pengunjung
        </h1>

        {/* Form Pencarian */}
        <div className="flex justify-between">
          <div className="mb-8 flex">
            <div className="flex flex-wrap items-center space-x-4">
              {/* Input Pencarian */}
              <input
                type="text"
                placeholder="Cari pengunjung..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Dropdown Kriteria Pencarian */}
              <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="nama">Nama</option>
                <option value="alamat">Alamat</option>
                <option value="tempat_lahir">NIK</option>
                <option value="tanggal_lahir">No. Hp</option>
                <option value="jenis_kelamin">Jenis Kelamin</option>
                <option value="status">Status</option>
              </select>

              {/* Filter Berdasarkan Tanggal */}
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <button onClick={() => navigate("/pengunjung/data/create")}>+ Add</button>
          </div>
        </div>
        {authUser.user?.role == 'admin' || authUser.user?.role == 'p2u' ? (
          <>
          {/* Tabel Pengunjung */}
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
    {filteredPengunjungs.map((pengunjung) => (
      <tr
        key={pengunjung.id}
        className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
        onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)} 
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.nama}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.alamat}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.nik}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.hp}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.jenis_kelamin}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.status}
        </td>
        
      </tr>
    ))}
  </tbody>
            </table>
          </div>
          </>
        ): (<p className="text-center font-bold">Data tidak ditemukan</p>)}
        {authUser.user?.role === "user" && (
          <>
          {/* Tabel Pengunjung */}
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
    {filteredPengunjungUser.map((pengunjung) => (
      <tr
        key={pengunjung.id}
        className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
        onClick={() => navigate(`/pengunjung/data/${pengunjung.kode}/update`)} 
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.nama}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.alamat}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.nik}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.hp}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.jenis_kelamin}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pengunjung.status}
        </td>
        
      </tr>
    ))}
  </tbody>
            </table>
          </div>
          </>
        )}
        
      </div>
    </>
  );
};

export default PengunjungData;
