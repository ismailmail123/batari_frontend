// components/PDFDataForm.jsx
import React, { useState, useEffect } from 'react';

const PDFDataForm = ({ isOpen, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    petugasLayanan: '10',
    petugasPiket: '4',
    petugasKanwil: '3',
    polri: '0',
    tni: '0',
    kejadianMenonjol: 'Tidak ada kejadian yang menonjol selama kegiatan kunjungan berlangsung.',
    hariKunjungan: '2',
    jamKunjungan: '09.00-14.00 WITA',
    nomorSurat: 'W24.PAS.PAS17-PK.08.01.503'
  });

  // Load data dari localStorage saat komponen mount
  useEffect(() => {
    const savedData = localStorage.getItem('pdfReportData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    
    // Jika ada initialData, gunakan itu
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan ke localStorage
    localStorage.setItem('pdfReportData', JSON.stringify(formData));
    
    // Panggil callback onSubmit dengan data form
    onSubmit(formData);
    
    // Tutup modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Data Laporan Kunjungan</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Data Pengamanan Internal */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Data Pengamanan Internal</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Petugas Layanan Kunjungan
                  </label>
                  <input
                    type="number"
                    name="petugasLayanan"
                    value={formData.petugasLayanan}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Petugas Piket Pengamanan
                  </label>
                  <input
                    type="number"
                    name="petugasPiket"
                    value={formData.petugasPiket}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Petugas KANWIL
                  </label>
                  <input
                    type="number"
                    name="petugasKanwil"
                    value={formData.petugasKanwil}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Data Pengamanan Eksternal */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Data Pengamanan Eksternal</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Petugas POLRI
                  </label>
                  <input
                    type="number"
                    name="polri"
                    value={formData.polri}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Petugas TNI
                  </label>
                  <input
                    type="number"
                    name="tni"
                    value={formData.tni}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Data Lainnya */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Data Lainnya</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kejadian yang Menonjol
                  </label>
                  <textarea
                    name="kejadianMenonjol"
                    value={formData.kejadianMenonjol}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hari Kunjungan Ke-
                    </label>
                    <input
                      type="text"
                      name="hariKunjungan"
                      value={formData.hariKunjungan}
                      onChange={handleChange}
                      placeholder="Contoh: 2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Jam Kunjungan
                    </label>
                    <input
                      type="text"
                      name="jamKunjungan"
                      value={formData.jamKunjungan}
                      onChange={handleChange}
                      placeholder="Contoh: 09.00-14.00 WITA"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Surat
                  </label>
                  <input
                    type="text"
                    name="nomorSurat"
                    value={formData.nomorSurat}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Simpan & Lanjutkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PDFDataForm;