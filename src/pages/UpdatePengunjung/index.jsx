import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import toast from "react-hot-toast";
import CreateBarangTitipanModal from "./CreateBarangTitipanModal";

const EditPengunjungForm = () => {
  const { kode } = useParams(); // Ambil ID pengunjung dari URL
  const navigate = useNavigate();
  const { fetchPengunjungByCode, pengunjungByCode, updatePengunjung } = useDataStore();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nama: "",
    jenis_kelamin: "",
    nik: "",
    alamat: "",
    hp: "",
    hubungan_keluarga: "",
    pengikut_laki_laki: 0,
    pengikut_perempuan: 0,
    pengikut_anak_anak: 0,
    pengikut_bayi: 0,
    total_pengikut: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("pengunjungByCode", pengunjungByCode);

  // Ambil data pengunjung yang sudah ada
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchPengunjungByCode(kode); // Ambil data pengunjung berdasarkan ID
        setLoading(false);
      } catch (error) {
        toast.error("Gagal memuat data pengunjung");
      }
    };
    loadData();
  }, [kode, fetchPengunjungByCode]);

  // Isi form dengan data yang ada
  useEffect(() => {
    if (pengunjungByCode) {
      setFormData({
        nama: pengunjungByCode.nama || "",
        jenis_kelamin: pengunjungByCode.jenis_kelamin || "",
        nik: pengunjungByCode.nik || "",
        alamat: pengunjungByCode.alamat || "",
        hp: pengunjungByCode.hp || "",
        hubungan_keluarga: pengunjungByCode.hubungan_keluarga || "",
        pengikut_laki_laki: pengunjungByCode.pengikut_laki_laki || 0,
        pengikut_perempuan: pengunjungByCode.pengikut_perempuan || 0,
        pengikut_anak_anak: pengunjungByCode.pengikut_anak_anak || 0,
        pengikut_bayi: pengunjungByCode.pengikut_bayi || 0,
        total_pengikut: pengunjungByCode.total_pengikut || 0,
      });
    }
  }, [pengunjungByCode]);

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updatePengunjung(kode, formData); // Panggil fungsi updatePengunjung dari zustand
      toast.success("Data pengunjung berhasil diperbarui!");
      navigate(`/pengunjung/${kode}`); // Navigasi ke halaman detail
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Gagal memperbarui data pengunjung. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center p-8">Memuat data...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            ✏️ Edit Data Pengunjung
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            ← Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kolom Kiri */}
          <div className="space-y-4">
            {[
              "nama",
              "jenis_kelamin",
              "nik",
              "alamat",
              "hp",
              "hubungan_keluarga",
            ].map((field) => (
              <div key={field} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/_/g, " ")}
                </label>
                {field === "jenis_kelamin" ? (
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                ) : (
                  <input
                    type={field === "nik" || field === "hp" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-4">
            {[
              "pengikut_laki_laki",
              "pengikut_perempuan",
              "pengikut_anak_anak",
              "pengikut_bayi",
              "total_pengikut",
            ].map((field) => (
              <div key={field} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/_/g, " ")}
                </label>
                <input
                  type="number"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}

            {/* Tombol Submit */}
            
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 ..." /> Memproses...
                </span>
              ) : (
                "💾 Simpan Perubahan"
              )}
            </button>
          </div>
        </form>
        <button
        onClick={() => setIsModalOpen(true)}
         className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
      >
        + Tambah Barang Titipan
      </button>

      {/* Modal CreateBarangTitipan */}
      <CreateBarangTitipanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pengunjungs={pengunjungByCode} // Kirim data pengunjung ke modal
      />
      </div>
    </div>
  );
};

export default EditPengunjungForm;