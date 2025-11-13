import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft, FaCamera, FaCheck, FaInfoCircle, FaTimes, FaUser } from "react-icons/fa";

// Komponen Detail Modal yang Diperbarui - FIXED
// Komponen Detail Modal yang Diperbarui - FIXED
const DetailModal = ({ pengunjung, onClose, onUse }) => {
  const [editData, setEditData] = useState({
    id: pengunjung.id,
    nama: pengunjung.nama || "",
    nik: pengunjung.nik || "",
    hp: pengunjung.hp || "",
    alamat: pengunjung.alamat || "",
    hubungan_keluarga: pengunjung.hubungan_keluarga || "",
    tujuan: pengunjung.tujuan || "Berkunjung",
    kode: pengunjung.kode || "",
    pengikut_laki_laki: pengunjung.pengikut_laki_laki || 0,
    pengikut_perempuan: pengunjung.pengikut_perempuan || 0,
    pengikut_anak_anak: pengunjung.pengikut_anak_anak || 0,
    pengikut_bayi: pengunjung.pengikut_bayi || 0,
    total_pengikut: pengunjung.total_pengikut || 0,
    warga_binaan: pengunjung.warga_binaan || null,
    wbp_id: pengunjung.wbp_id || "",
    photo_ktp: pengunjung.photo_ktp || null,
    photo_pengunjung: pengunjung.photo_pengunjung || null,
    barcode: pengunjung.barcode || null,
  });

  console.log("Data awal pengunjung:", pengunjung);
  console.log("Edit data state:", editData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // PERBAIKAN: Fungsi untuk handle penggunaan data
  const handleUseData = () => {
    console.log("Data yang akan dikirim:", editData);
    onUse(editData); // Kirim data yang sudah diedit
  };

  // Hitung total pengikut
  const calculateTotalPengikut = (data) => {
    return (
      parseInt(data.pengikut_laki_laki || 0) +
      parseInt(data.pengikut_perempuan || 0) +
      parseInt(data.pengikut_anak_anak || 0) +
      parseInt(data.pengikut_bayi || 0)
    );
  };

  const handlePengikutChange = (field, operation) => {
    setEditData(prev => {
      const currentValue = parseInt(prev[field] || 0);
      const newValue = operation === 'increment' ? currentValue + 1 : Math.max(0, currentValue - 1);
      
      const updatedData = {
        ...prev,
        [field]: newValue
      };
      
      // Update total pengikut
      updatedData.total_pengikut = calculateTotalPengikut(updatedData);
      
      return updatedData;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaUser className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Detail Pengunjung</h2>
                <p className="text-blue-100">Edit data sebelum digunakan</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Foto Section */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <FaCamera className="mr-2 text-blue-500" />
                  Foto Pengunjung
                </h3>
                {editData.photo_pengunjung ? (
                  <div className="text-center">
                    <img
                      src={editData.photo_pengunjung}
                      alt={editData.nama}
                      className="w-32 h-32 rounded-lg object-cover mx-auto border-2 border-gray-300"
                    />
                    <p className="text-sm text-gray-600 mt-2">Foto tersedia</p>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-32 h-32 rounded-lg bg-gray-200 flex items-center justify-center mx-auto border-2 border-dashed border-gray-300">
                      <FaUser className="text-gray-400 text-3xl" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Tidak ada foto</p>
                  </div>
                )}
              </div>

              {/* Info WBP */}
              {editData.warga_binaan && (
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200 mt-4">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    <FaUser className="mr-2 text-green-600" />
                    Warga Binaan
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Nama:</span>
                      <p className="text-gray-800">{editData.warga_binaan.nama}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">ID:</span>
                      <p className="text-gray-800">{editData.warga_binaan.id}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Form Edit Section */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Pengunjung *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={editData.nama}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NIK *
                    </label>
                    <input
                      type="text"
                      name="nik"
                      value={editData.nik}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor HP *
                    </label>
                    <input
                      type="tel"
                      name="hp"
                      value={editData.hp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hubungan Keluarga *
                    </label>
                    <input
                      type="text"
                      name="hubungan_keluarga"
                      value={editData.hubungan_keluarga}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat *
                    </label>
                    <textarea
                      name="alamat"
                      value={editData.alamat}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tujuan Kunjungan *
                    </label>
                    <select
                      name="tujuan"
                      value={editData.tujuan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="Berkunjung">Berkunjung</option>
                      <option value="Menitip barang">Menitip Barang</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kode Pengunjung
                    </label>
                    <input
                      type="text"
                      name="kode"
                      value={editData.kode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Section Jumlah Pengikut */}
                <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center justify-between">
                    <span className="flex items-center">
                      <FaUser className="mr-2 text-blue-500" />
                      Jumlah Pengikut
                    </span>
                    <span className="text-sm font-normal bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      Total: {editData.total_pengikut}
                    </span>
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Laki-laki */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                        Laki-laki
                      </label>
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_laki_laki', 'decrement')}
                          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold min-w-8 text-center">
                          {editData.pengikut_laki_laki}
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_laki_laki', 'increment')}
                          className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Perempuan */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                        Perempuan
                      </label>
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_perempuan', 'decrement')}
                          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold min-w-8 text-center">
                          {editData.pengikut_perempuan}
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_perempuan', 'increment')}
                          className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Anak-anak */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                        Anak-anak
                      </label>
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_anak_anak', 'decrement')}
                          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold min-w-8 text-center">
                          {editData.pengikut_anak_anak}
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_anak_anak', 'increment')}
                          className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Bayi */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                        Bayi
                      </label>
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_bayi', 'decrement')}
                          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold min-w-8 text-center">
                          {editData.pengikut_bayi}
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePengikutChange('pengikut_bayi', 'increment')}
                          className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Tambahan */}
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <FaInfoCircle className="mr-2" />
                    Informasi
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Tanggal Dibuat:</span>
                      <p className="text-gray-600">
                        {new Date(pengunjung.createdAt).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Status:</span>
                      <p className={`font-medium ${
                        pengunjung.status === 'Valid, Divalidasi Oleh P2U' 
                          ? 'text-green-600' 
                          : 'text-yellow-600'
                      }`}>
                        {pengunjung.status || 'Tidak Valid'}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Antrian:</span>
                      <p className="text-gray-600">{pengunjung.antrian || '-'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Total Pengikut:</span>
                      <p className="text-gray-600">{editData.total_pengikut}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center"
            >
              <FaTimes className="mr-2" />
              Batal
            </button>
            
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => {
                  setEditData({
                    id: pengunjung.id,
                    nama: pengunjung.nama || "",
                    nik: pengunjung.nik || "",
                    hp: pengunjung.hp || "",
                    alamat: pengunjung.alamat || "",
                    hubungan_keluarga: pengunjung.hubungan_keluarga || "",
                    tujuan: pengunjung.tujuan || "Berkunjung",
                    kode: pengunjung.kode || "",
                    pengikut_laki_laki: pengunjung.pengikut_laki_laki || 0,
                    pengikut_perempuan: pengunjung.pengikut_perempuan || 0,
                    pengikut_anak_anak: pengunjung.pengikut_anak_anak || 0,
                    pengikut_bayi: pengunjung.pengikut_bayi || 0,
                    total_pengikut: pengunjung.total_pengikut || 0,
                    warga_binaan: pengunjung.warga_binaan || null,
                    wbp_id: pengunjung.wbp_id || "",
                    photo_ktp: pengunjung.photo_ktp || null,
                    photo_pengunjung: pengunjung.photo_pengunjung || null,
                    barcode: pengunjung.barcode || null,
                  });
                  toast.success("Data direset ke nilai awal");
                }}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center"
              >
                <FaArrowLeft className="mr-2" />
                Reset
              </button>
              
              {/* PERBAIKAN: Pastikan memanggil handleUseData */}
              <button
                type="button"
                onClick={handleUseData}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
              >
                <FaCheck className="mr-2" />
                Gunakan Data yang Diedit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;