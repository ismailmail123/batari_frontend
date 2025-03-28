import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";

const Report = () => {
  const { authUser } = useAuthStore();
  const { fetchPengunjung, fetchPengunjungUser, pengunjungs, pengunjungUser, loading, error } = useDataStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("nama");
  const [filterDate, setFilterDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPengunjung();
    fetchPengunjungUser();
  }, [fetchPengunjung, fetchPengunjungUser]);

  // Fungsi untuk menghitung total
  const calculateTotals = (data) => {
    return data.reduce(
      (acc, curr) => ({
        laki: acc.laki + (curr.pengikut_laki || 0),
        perempuan: acc.perempuan + (curr.pengikut_perempuan || 0),
        anak: acc.anak + (curr.pengikut_anak || 0),
        bayi: acc.bayi + (curr.pengikut_bayi || 0),
      }),
      { laki: 0, perempuan: 0, anak: 0, bayi: 0 }
    );
  };

  // Fungsi untuk menghitung rekap barang titipan
  const calculateBarangTitipan = (data) => {
    return data.reduce(
      (acc, curr) => {
        curr.barang_titipan?.forEach((barang) => {
          switch (barang.jenis_barang) {
            case "Makanan":
              acc.makan += barang.jumlah || 0;
              break;
            case "Alat mandi":
              acc.alatMandi += barang.jumlah || 0;
              break;
            case "Obat":
              acc.obat += barang.jumlah || 0;
              break;
            case "Uang":
              acc.uang += barang.jumlah || 0;
              break;
          }
          acc.total += barang.jumlah || 0;
        });
        return acc;
      },
      { makan: 0, alatMandi: 0, obat: 0, uang: 0, total: 0 }
    );
  };

  // Filter data
  const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
    const value = pengunjung[searchBy]?.toLowerCase() || "";
    const isMatch = value.includes(searchQuery.toLowerCase());
    const isDateMatch = filterDate
      ? new Date(pengunjung.createdAt).toISOString().split("T")[0] ===
        new Date(filterDate).toISOString().split("T")[0]
      : true;
    return isMatch && isDateMatch;
  });

  const totals = calculateTotals(filteredPengunjungs);
  const barangTitipan = calculateBarangTitipan(filteredPengunjungs);

  // Hitung jumlah narapidana dan tahanan
  const jumlahNarapidana = filteredPengunjungs.filter(
    (p) => p.warga_binaan?.keterangan === "Tahanan Aktif"
  ).length;

  const jumlahTahanan = filteredPengunjungs.filter(
    (p) => p.warga_binaan?.keterangan === "Tahanan"
  ).length;

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
          Laporan Kunjungan
        </h1>

        {/* Form Pencarian */}
        <div className="flex justify-between mb-8">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Cari pengunjung..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="nama">Nama</option>
              <option value="warga_binaan.nama">Nama Warga Binaan</option>
            </select>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Tabel Utama */}
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Warga Binaan</th>
                <th className="px-6 py-3 text-left">Pengunjung</th>
                <th className="px-6 py-3 text-center">Laki-laki</th>
                <th className="px-6 py-3 text-center">Perempuan</th>
                <th className="px-6 py-3 text-center">Anak-anak</th>
                <th className="px-6 py-3 text-center">Bayi</th>
              </tr>
            </thead>
            <tbody>
              {filteredPengunjungs.map((pengunjung) => (
                <tr key={pengunjung.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{pengunjung.warga_binaan?.nama || "-"}</td>
                  <td className="px-6 py-4">{pengunjung.nama}</td>
                  <td className="px-6 py-4 text-center">{pengunjung.pengikut_laki || 0}</td>
                  <td className="px-6 py-4 text-center">{pengunjung.pengikut_perempuan || 0}</td>
                  <td className="px-6 py-4 text-center">{pengunjung.pengikut_anak || 0}</td>
                  <td className="px-6 py-4 text-center">{pengunjung.pengikut_bayi || 0}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-100 font-semibold">
              <tr>
                <td className="px-6 py-4" colSpan="2">Total</td>
                <td className="px-6 py-4 text-center">{totals.laki}</td>
                <td className="px-6 py-4 text-center">{totals.perempuan}</td>
                <td className="px-6 py-4 text-center">{totals.anak}</td>
                <td className="px-6 py-4 text-center">{totals.bayi}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Rekapan Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Rekap Pengunjung</h2>
            <div className="space-y-2">
              <p>Narapidana Aktif: {jumlahNarapidana}</p>
              <p>Tahanan: {jumlahTahanan}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Barang Titipan</h2>
            <div className="space-y-2">
              <p>Makanan: {barangTitipan.makan}</p>
              <p>Alat Mandi: {barangTitipan.alatMandi}</p>
              <p>Obat: {barangTitipan.obat}</p>
              <p>Uang: {barangTitipan.uang}</p>
              {/* <p className="pt-2 border-t font-semibold">Total Barang: {barangTitipan.total}</p> */}
            </div>
          </div>
        </div>

        {/* Tanda Tangan */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="text-center">
            <p className="mb-8">Kepala Rutan</p>
            <p className="border-t pt-8">(.......................................)</p>
          </div>
          <div className="text-center">
            <p className="mb-8">Kepala Pelayanan Tahanan</p>
            <p className="border-t pt-8">(.......................................)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;