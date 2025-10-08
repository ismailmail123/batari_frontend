import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useDataStore from '../../store/useDataStore';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/useAuthStore';

const CreatePengunjung = () => {
  const navigate = useNavigate();
  const { createDataPengunjung } = useDataStore();
  const {authUser} = useAuthStore();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [photoKtp, setPhotoKtp] = useState(null);
  const [photoPengunjung, setPhotoPengunjung] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      
      const formData = new FormData();
      
      // Append semua data form
      Object.keys(data).forEach(key => {
        if (data[key]) formData.append(key, data[key]);
      });

      // Append file jika ada
      if (photoKtp) formData.append('photo_ktp', photoKtp);
      if (photoPengunjung) formData.append('photo_pengunjung', photoPengunjung);

      await createDataPengunjung(formData);
      
      toast.success('Data pengunjung berhasil dibuat!');
	  if(authUser.user.role === "admin"){
		navigate('/pengunjung/data')
	}else{
		navigate("/")
	}
      
      
    } catch (error) {
      console.error('Error creating pengunjung:', error);
      toast.error('Gagal membuat data pengunjung');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e, setFileFunction) => {
    const file = e.target.files[0];
    if (file) {
      // Validasi tipe file
      if (!file.type.startsWith('image/')) {
        toast.error('File harus berupa gambar');
        return;
      }
      // Validasi ukuran file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Ukuran file maksimal 5MB');
        return;
      }
      setFileFunction(file);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Tambah Data Pengunjung</h1>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Kembali
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Informasi Pribadi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  {...register('nama', { required: 'Nama harus diisi' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama lengkap"
                />
                {errors.nama && (
                  <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Kelamin *
                </label>
                <select
                  {...register('jenis_kelamin', { required: 'Jenis kelamin harus dipilih' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                {errors.jenis_kelamin && (
                  <p className="text-red-500 text-sm mt-1">{errors.jenis_kelamin.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NIK *
                </label>
                <input
                  type="text"
                  {...register('nik', { 
                    required: 'NIK harus diisi',
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: 'NIK harus 16 digit angka'
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan NIK (16 digit)"
                />
                {errors.nik && (
                  <p className="text-red-500 text-sm mt-1">{errors.nik.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. HP *
                </label>
                <input
                  type="text"
                  {...register('hp', { 
                    required: 'No. HP harus diisi',
                    pattern: {
                      value: /^[0-9+]{10,15}$/,
                      message: 'Format nomor HP tidak valid'
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nomor HP"
                />
                {errors.hp && (
                  <p className="text-red-500 text-sm mt-1">{errors.hp.message}</p>
                )}
              </div>
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Lengkap *
              </label>
              <textarea
                {...register('alamat', { required: 'Alamat harus diisi' })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan alamat lengkap"
              />
              {errors.alamat && (
                <p className="text-red-500 text-sm mt-1">{errors.alamat.message}</p>
              )}
            </div>

            {/* Hubungan Keluarga */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hubungan Keluarga *
              </label>
              <input
                type="text"
                {...register('hubungan_keluarga', { required: 'Hubungan keluarga harus diisi' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Istri, Anak, Saudara, dll."
              />
              {errors.hubungan_keluarga && (
                <p className="text-red-500 text-sm mt-1">{errors.hubungan_keluarga.message}</p>
              )}
            </div>

            {/* Upload Foto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto KTP
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setPhotoKtp)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {photoKtp && (
                  <p className="text-green-600 text-sm mt-1">File dipilih: {photoKtp.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto Pengunjung
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setPhotoPengunjung)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {photoPengunjung && (
                  <p className="text-green-600 text-sm mt-1">File dipilih: {photoPengunjung.name}</p>
                )}
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Menyimpan...' : 'Simpan Data'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePengunjung;