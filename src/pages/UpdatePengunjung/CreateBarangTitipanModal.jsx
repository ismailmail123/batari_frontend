import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDataStore from "../../store/useDataStore";
import { FaBoxOpen, FaUser, FaPlus, FaInfoCircle } from "react-icons/fa";

const CreateBarangTitipanModal = ({ isOpen, onClose, pengunjungs }) => {
  const { createTitipan } = useDataStore();
  const [formData, setFormData] = useState({
    pengunjung_id: "",
    jenis_barang: "",
    jumlah: "",
    keterangan: "",
  });
  const [error, setError] = useState("");

  console.log("pengunjungs ini", pengunjungs);

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!formData.pengunjung_id || !formData.jenis_barang || !formData.jumlah) {
      setError("Pastikan pengunjung_id, jenis_barang, dan jumlah diisi.");
      return;
    }

    // Reset error
    setError("");

    // Panggil fungsi createTitipan dari Zustand
    try {
      await createTitipan(formData, setError);
      toast.success("Barang titipan berhasil dibuat!"); // Notifikasi sukses

      // Reset form setelah berhasil
      setFormData({
        pengunjung_id: "",
        jenis_barang: "",
        jumlah: "",
        keterangan: "",
      });

      // Tutup modal
      onClose();
    } catch (err) {
      console.error("Error saat membuat barang titipan:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
        <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center space-x-4">
            <FaBoxOpen className="w-10 h-10" />
            <h2 className="text-3xl font-bold">Tambah Barang Titipan</h2>
          </div>
          <p className="mt-2 text-sm opacity-90">
            Isi formulir di bawah ini untuk menambahkan barang titipan baru.
          </p>
        </div>
        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <FaInfoCircle className="inline-block mr-2" />
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" />
                Pilih Pengunjung
              </label>
              <select
                name="pengunjung_id"
                value={formData.pengunjung_id}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                <option value="">Pilih Pengunjung</option>
                
                  <option key={pengunjungs.id} value={pengunjungs.id}>
                    {pengunjungs.nama} (NIK: {pengunjungs.nik})
                  </option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBoxOpen className="inline-block mr-2" />
                Jenis Barang
              </label>
              <input
                type="text"
                name="jenis_barang"
                value={formData.jenis_barang}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Masukkan Jenis Barang"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBoxOpen className="inline-block mr-2" />
                Jumlah
              </label>
              <input
                type="number"
                name="jumlah"
                value={formData.jumlah}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Masukkan Jumlah Barang"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaInfoCircle className="inline-block mr-2" />
                Keterangan (Opsional)
              </label>
              <textarea
                name="keterangan"
                value={formData.keterangan}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Masukkan Keterangan"
                rows="3"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                <FaPlus className="inline-block mr-2" />
                Tambah Barang Titipan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBarangTitipanModal;