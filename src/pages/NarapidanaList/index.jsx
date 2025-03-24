import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
import { toast } from "react-hot-toast";
import "./style.css"

const WargabinaanList = () => {
  const {
    fetchWargabinaan,
    wargabinaans,
    loading,
    error,
    pagination,
    deleteWargabinaan,
  } = useDataStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian
  const [searchBy, setSearchBy] = useState("nama"); // State untuk kriteria pencarian
  const navigate = useNavigate();

  useEffect(() => {
    fetchWargabinaan(currentPage, 10); // Fetch data untuk halaman saat ini
  }, [currentPage, fetchWargabinaan]);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fungsi untuk memfilter data berdasarkan pencarian
  const filteredWargabinaans = wargabinaans.filter((warga) => {
    const value = warga[searchBy]?.toLowerCase() || ""; // Ambil nilai berdasarkan kriteria pencarian
    return value.includes(searchQuery.toLowerCase()); // Filter berdasarkan kata kunci
  });

  // Fungsi untuk menghapus Warga Binaan
  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await deleteWargabinaan(id);
        toast.success("Data Warga Binaan berhasil dihapus!");
        fetchWargabinaan(currentPage, 10); // Refresh data setelah menghapus
      } catch (error) {
        toast.error("Gagal menghapus data Warga Binaan.");
        console.error("Error:", error);
      }
    }
  };

  // Fungsi untuk mengarahkan ke halaman update
  const handleUpdate = (id) => {
    navigate(`/update-wargabinaan/${id}`);
  };

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
          Daftar Warga Binaan
        </h1>

        {/* Form Pencarian */}
        <div className="flex justify-between">
        <div className="mb-8 flex">
          <div className="flex flex-wrap items-center space-x-4">
            {/* Input Pencarian */}
            <input
              type="text"
              placeholder="Cari warga binaan..."
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
              <option value="tempat_lahir">Tempat Lahir</option>
              <option value="tanggal_lahir">Tanggal Lahir</option>
              <option value="jenis_kelamin">Jenis Kelamin</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
        <div>
          <button onClick={() => navigate("/wargabinaan-form")}>+ Add</button>
        </div>
        </div>

        {/* Tabel Warga Binaan */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alamat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tempat Lahir
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Lahir
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis Kelamin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Warga Negara
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agama
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status Perkawinan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tingkat Pendidikan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NIK
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis Kejahatan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  1/3 Masa Pidana
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  1/2 Masa Pidana
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  2/3 Masa Pidana
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pekerjaan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi Blok
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Ayah
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Ibu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredWargabinaans.map((warga, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-200 transition-colors duration-200 cursor-pointer"
                  onClick={() => navigate(`/detail-wargabinaan/${warga.id}`)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.nama}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.alamat}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.tempat_lahir}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.tanggal_lahir}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.jenis_kelamin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.warga_negara}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.agama}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.status_perkawinan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.tingkat_pendidikan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.nik}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.jenis_kejahatah}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.sepertiga_masa_pidana}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.seperdua_masa_pidana}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.duapertiga_masa_pidana}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.pekerjaan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.lokasi_blok}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.nama_ayah}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.nama_ibu}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {warga.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 sticky-action-column">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Mencegah navigasi ke detail
                        handleUpdate(warga.id);
                      }}
                      className="px-3 py-1 bg-blue-500 text-black rounded-md hover:bg-blue-600 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Mencegah navigasi ke detail
                        handleDelete(warga.id);
                      }}
                      className="px-3 py-1 bg-red-500 text-black rounded-md hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Navigasi Pagination */}
{/* Navigasi Pagination */}
{pagination && (
  <div className="flex justify-center mt-8">
    <nav className="inline-flex rounded-md shadow-sm">
      {/* Tombol Previous */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* Tombol-tombol angka halaman */}
      {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, index) => {
        let pageNumber;
        if (pagination.totalPages <= 5) {
          // Jika total halaman kurang dari atau sama dengan 5, tampilkan semua halaman
          pageNumber = index + 1;
        } else {
          // Jika total halaman lebih dari 5, tampilkan 5 halaman sekitar currentPage
          if (currentPage <= 3) {
            pageNumber = index + 1;
          } else if (currentPage >= pagination.totalPages - 2) {
            pageNumber = pagination.totalPages - 4 + index;
          } else {
            pageNumber = currentPage - 2 + index;
          }
        }

        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
            className={`px-4 py-2 text-sm font-medium ${
              currentPage === pageNumber
                ? 'text-blue-500 bg-blue-50'
                : 'text-gray-500 bg-white'
            } border border-gray-300 hover:bg-gray-50`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Informasi Halaman Saat Ini dan Total Halaman */}
      <div className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300">
        {currentPage} dari {pagination.totalPages}
      </div>

      {/* Tombol Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pagination.totalPages}
        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </nav>
  </div>
)}
      </div>
    </>
  );
};

export default WargabinaanList;