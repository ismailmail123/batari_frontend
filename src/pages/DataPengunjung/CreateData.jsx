// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import useDataStore from '../../store/useDataStore';
// import toast from 'react-hot-toast';
// import useAuthStore from '../../store/useAuthStore';

// const CreatePengunjung = () => {
//   const navigate = useNavigate();
//   const { createDataPengunjung } = useDataStore();
//   const {authUser} = useAuthStore();
//   const { register, handleSubmit, formState: { errors } } = useForm();
  
//   const [photoKtp, setPhotoKtp] = useState(null);
//   const [photoPengunjung, setPhotoPengunjung] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
      
//       const formData = new FormData();
      
//       // Append semua data form
//       Object.keys(data).forEach(key => {
//         if (data[key]) formData.append(key, data[key]);
//       });

//       // Append file jika ada
//       if (photoKtp) formData.append('photo_ktp', photoKtp);
//       if (photoPengunjung) formData.append('photo_pengunjung', photoPengunjung);

//       await createDataPengunjung(formData);
      
//       toast.success('Data pengunjung berhasil dibuat!');
// 	  if(authUser.user.role === "admin"){
// 		navigate('/pengunjung/data')
// 	}else{
// 		navigate("/")
// 	}
      
      
//     } catch (error) {
//       console.error('Error creating pengunjung:', error);
//       toast.error('Gagal membuat data pengunjung');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e, setFileFunction) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validasi tipe file
//       if (!file.type.startsWith('image/')) {
//         toast.error('File harus berupa gambar');
//         return;
//       }
//       // Validasi ukuran file (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error('Ukuran file maksimal 5MB');
//         return;
//       }
//       setFileFunction(file);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">Tambah Data Pengunjung</h1>
//             <button
//               onClick={() => navigate(-1)}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               Kembali
//             </button>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Informasi Pribadi */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Nama Lengkap *
//                 </label>
//                 <input
//                   type="text"
//                   {...register('nama', { required: 'Nama harus diisi' })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Masukkan nama lengkap"
//                 />
//                 {errors.nama && (
//                   <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Jenis Kelamin *
//                 </label>
//                 <select
//                   {...register('jenis_kelamin', { required: 'Jenis kelamin harus dipilih' })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Pilih Jenis Kelamin</option>
//                   <option value="Laki-laki">Laki-laki</option>
//                   <option value="Perempuan">Perempuan</option>
//                 </select>
//                 {errors.jenis_kelamin && (
//                   <p className="text-red-500 text-sm mt-1">{errors.jenis_kelamin.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   NIK *
//                 </label>
//                 <input
//                   type="text"
//                   {...register('nik', 
//                   //   { 
//                   //   required: 'NIK harus diisi',
//                   //   pattern: {
//                   //     value: /^[0-9]{16}$/,
//                   //     message: 'NIK harus 16 digit angka'
//                   //   }
//                   // }
//                 )}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Masukkan NIK (16 digit)"
//                 />
//                 {/* {errors.nik && (
//                   <p className="text-red-500 text-sm mt-1">{errors.nik.message}</p>
//                 )} */}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   No. HP *
//                 </label>
//                 <input
//                   type="text"
//                   {...register('hp', 
//                   //   { 
//                   //   required: 'No. HP harus diisi',
//                   //   pattern: {
//                   //     value: /^[0-9+]{10,15}$/,
//                   //     message: 'Format nomor HP tidak valid'
//                   //   }
//                   // }
//                 )}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Masukkan nomor HP"
//                 />
//                 {errors.hp && (
//                   <p className="text-red-500 text-sm mt-1">{errors.hp.message}</p>
//                 )}
//               </div>
//             </div>

//             {/* Alamat */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Alamat Lengkap *
//               </label>
//               <textarea
//                 {...register('alamat', { required: 'Alamat harus diisi' })}
//                 rows={3}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Masukkan alamat lengkap"
//               />
//               {errors.alamat && (
//                 <p className="text-red-500 text-sm mt-1">{errors.alamat.message}</p>
//               )}
//             </div>

//             {/* Hubungan Keluarga */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Hubungan Keluarga *
//               </label>
//               <input
//                 type="text"
//                 {...register('hubungan_keluarga', { required: 'Hubungan keluarga harus diisi' })}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Contoh: Istri, Anak, Saudara, dll."
//               />
//               {errors.hubungan_keluarga && (
//                 <p className="text-red-500 text-sm mt-1">{errors.hubungan_keluarga.message}</p>
//               )}
//             </div>

//             {/* Upload Foto */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Foto KTP
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleFileChange(e, setPhotoKtp)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {photoKtp && (
//                   <p className="text-green-600 text-sm mt-1">File dipilih: {photoKtp.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Foto Pengunjung
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleFileChange(e, setPhotoPengunjung)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {photoPengunjung && (
//                   <p className="text-green-600 text-sm mt-1">File dipilih: {photoPengunjung.name}</p>
//                 )}
//               </div>
//             </div>

//             {/* Tombol Submit */}
//             <div className="flex justify-end space-x-4 pt-6 border-t">
//               <button
//                 type="button"
//                 onClick={() => navigate(-1)}
//                 className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Batal
//               </button>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? 'Menyimpan...' : 'Simpan Data'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePengunjung;



import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useDataStore from '../../store/useDataStore';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/useAuthStore';
import { FaUser, FaSearch, FaTimes } from 'react-icons/fa';

const CreatePengunjung = () => {
  const navigate = useNavigate();
  const { createDataPengunjung, fetchWbpList, wbpList } = useDataStore();
  const { authUser } = useAuthStore();
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  
  const [photoKtp, setPhotoKtp] = useState(null);
  const [photoPengunjung, setPhotoPengunjung] = useState(null);
  const [loading, setLoading] = useState(false);

  // State untuk pencarian WBP
  const [searchWbp, setSearchWbp] = useState('');
  const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
  const [loadingWbp, setLoadingWbp] = useState(false);
  const [selectedWbp, setSelectedWbp] = useState(null);
  const dropdownRef = useRef(null);

  const wbp_id = watch('wbp_id');

  // Fetch data WBP saat komponen dimuat
  useEffect(() => {
    const loadWbpData = async () => {
      setLoadingWbp(true);
      try {
        await fetchWbpList();
      } catch (error) {
        console.error('Error fetching WBP data:', error);
        toast.error('Gagal memuat data WBP');
      } finally {
        setLoadingWbp(false);
      }
    };
    
    loadWbpData();
  }, [fetchWbpList]);

  // Handle click outside untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsWbpDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter WBP berdasarkan pencarian
  const filteredWbp = (() => {
    if (!wbpList) return [];
    
    const dataArray = Array.isArray(wbpList) 
      ? wbpList 
      : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
    return dataArray.filter((wbp) => {
      const searchTerm = searchWbp?.toLowerCase() || '';
      const namaMatch = wbp.nama?.toLowerCase().includes(searchTerm);
      const idMatch = wbp.id?.toString().includes(searchTerm);
      
      return namaMatch || idMatch;
    });
  })();

  // Fungsi untuk memilih WBP
  const selectWbp = (wbp) => {
    setSelectedWbp(wbp);
    setValue('wbp_id', wbp.id);
    setSearchWbp(wbp.nama);
    setIsWbpDropdownOpen(false);
    toast.success(`WBP dipilih: ${wbp.nama}`);
  };

  // Fungsi untuk menghapus pilihan WBP
  const clearWbpSelection = () => {
    setSelectedWbp(null);
    setValue('wbp_id', '');
    setSearchWbp('');
  };

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
      } else {
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
            {/* Pencarian WBP */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" /> Cari Warga Binaan *
              </label>
              
              {selectedWbp && (
                <div className="mb-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-blue-700 font-medium">
                        ✓ WBP Terpilih: <strong>{selectedWbp.nama}</strong>
                      </p>
                      <p className="text-blue-600 text-sm">ID: {selectedWbp.id}</p>
                    </div>
                    <button
                      type="button"
                      onClick={clearWbpSelection}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={searchWbp}
                  onChange={(e) => {
                    setSearchWbp(e.target.value);
                    setIsWbpDropdownOpen(true);
                  }}
                  onFocus={() => setIsWbpDropdownOpen(true)}
                  placeholder="Ketik nama atau ID WBP..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Hidden input untuk menyimpan wbp_id */}
              <input
                type="hidden"
                {...register('wbp_id', { required: 'WBP harus dipilih' })}
              />
              
              {errors.wbp_id && (
                <p className="text-red-500 text-sm mt-1">{errors.wbp_id.message}</p>
              )}

              {loadingWbp && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
                    Memuat data WBP...
                  </div>
                </div>
              )}
              
              {isWbpDropdownOpen && filteredWbp.length > 0 && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredWbp.map((wbp) => (
                    <div
                      key={wbp.id}
                      onClick={() => selectWbp(wbp)}
                      className="p-4 hover:bg-blue-50 cursor-pointer flex items-center border-b border-gray-100"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{wbp.nama}</div>
                        <div className="text-sm text-gray-500">ID: {wbp.id}</div>
                        {wbp.nomor_register && (
                          <div className="text-sm text-gray-500">Register: {wbp.nomor_register}</div>
                        )}
                      </div>
                      <FaUser className="ml-2 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}

              {isWbpDropdownOpen && searchWbp && filteredWbp.length === 0 && !loadingWbp && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                  <div className="text-center text-gray-500">
                    Tidak ditemukan WBP dengan nama "{searchWbp}"
                  </div>
                </div>
              )}
            </div>

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
                  {...register('nik')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan NIK (16 digit)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. HP *
                </label>
                <input
                  type="text"
                  {...register('hp')}
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