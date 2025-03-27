import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import toast from "react-hot-toast";

const EditWargabinaanForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchWbpById, wbpById, updateWbp } = useDataStore();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    // ...initial state sama dengan form create
  });

  // Ambil data yang sudah ada
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchWbpById(id);
        setLoading(false);
      } catch (error) {
        toast.error("Gagal memuat data warga binaan");
      }
    };
    loadData();
  }, [id, fetchWbpById, navigate]);

  // Isi form dengan data yang ada
  useEffect(() => {
    if (wbpById) {
      setFormData({
        nama: wbpById.nama || "",
        alamat: wbpById.alamat || "",
        tempat_lahir: wbpById.tempat_lahir || "",
        tanggal_lahir: wbpById.tanggal_lahir || "",
        jenis_kelamin: wbpById.jenis_kelamin || "",
        warga_negara: wbpById.warga_negara || "",
        agama: wbpById.agama || "",
        status_perkawinan: wbpById.status_perkawinan || "",
        tingkat_pendidikan: wbpById.tingkat_pendidikan || "",
        nik: wbpById.nik || "",
        jenis_kejahatan: wbpById.jenis_kejahatan || "",
        sepertiga_masa_pidana: wbpById.sepertiga_masa_pidana || "",
        seperdua_masa_pidana: wbpById.seperdua_masa_pidana || "",
        duapertiga_masa_pidana: wbpById.duapertiga_masa_pidana || "",
        pekerjaan: wbpById.pekerjaan || "",
        lokasi_blok: wbpById.lokasi_blok || "",
        status: wbpById.status || "",
        nama_ayah: wbpById.nama_ayah || "",
        nama_ibu: wbpById.nama_ibu || "",
        keterangan: wbpById.keterangan || "",
        photo: null,
      });
    }
  }, [wbpById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData(prev => ({ ...prev, photo: file }));
    }
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	setLoading(true);
  
	const data = new FormData();
	for (const key in formData) {
	  if (formData[key] !== null) {
		data.append(key, formData[key]);
	  }
	}
  
	try {
	  // Panggil fungsi updateWbp dan tunggu hasilnya
	  await updateWbp(id, data);
	  
	  // Jika berhasil, tampilkan pesan sukses
	  toast.success("Data berhasil diperbarui!");
	  
	  // Navigasi ke halaman detail (opsional)
	  navigate(`/detail-wargabinaan/${id}`);
	} catch (error) {
	  // Jika terjadi error, tampilkan pesan error
	  console.error("Error: ", error);
	  toast.error("Gagal memperbarui data. Silakan coba lagi.");
	} finally {
	  // Set loading ke false setelah proses selesai
	  setLoading(false);
	}
  };

  if (loading) return <div className="text-center p-8">Memuat data...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            ✏️ Edit Data Warga Binaan
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
            {/* Input Foto */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Profil
              </label>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {wbpById?.photo ? (
                    <img
                      src={wbpById.photo}
                      alt="Foto Profil"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-xs">No Photo</span>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>

            {/* Input Data Dasar */}
            {[
              'nama', 'alamat', 'tempat_lahir', 'tanggal_lahir',
              'jenis_kelamin', 'warga_negara', 'agama', 'keterangan'
            ].map((field) => (
              <div key={field} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/_/g, ' ')}
                </label>
                {field === 'jenis_kelamin' ? (
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
                ) : field === 'tanggal_lahir' ? (
                  <input
                    type="date"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : field === 'keterangan' ? (
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Status Penahanan</option>
                    <option value="Narapidana">Narapidana</option>
                    <option value="Tahanan">Tahanan</option>
                  </select>
                  ) : (
                  <input
                    type="text"
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
            {/* Input Data Lainnya */}
            {[
              'status_perkawinan', 'tingkat_pendidikan', 'nik', 
              'jenis_kejahatan', 'pekerjaan', 'lokasi_blok', 'status',
              'nama_ayah', 'nama_ibu', 'sepertiga_masa_pidana',
              'seperdua_masa_pidana', 'duapertiga_masa_pidana'
            ].map((field) => (
              <div key={field} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/_/g, ' ')}
                </label>
                {field.includes('masa_pidana') ? (
                  <input
                    type="date"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : field === 'status_perkawinan' || field === 'status' ? (
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {field === 'status' ? (
                      <>
                        <option value="">Pilih Status</option>
                        <option value="Aktif">Aktif</option>
                        <option value="Tidak aktif">Non-Aktif</option>
                      </>
                    ) : (
                      <>
                        <option value="">Pilih Status</option>
                        <option value="belum menikah">Belum menikah</option>
                        <option value="menikah">Menikah</option>
                      </>
                    )}
                  </select>
                ) : (
                  <input
                    type={field === 'nik' ? 'number' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                )}
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
      </div>
    </div>
  );
};

export default EditWargabinaanForm;