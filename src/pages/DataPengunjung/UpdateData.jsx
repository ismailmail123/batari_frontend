// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import useDataStore from '../../store/useDataStore';
// import toast from 'react-hot-toast';

// const EditPengunjung = () => {
//   const navigate = useNavigate();
//   const { kode } = useParams();
//   const { updateDataPengunjung, fetchPengunjungByKode } = useDataStore();
//   const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  
//   const [photoKtp, setPhotoKtp] = useState(null);
//   const [photoPengunjung, setPhotoPengunjung] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [pengunjung, setPengunjung] = useState(null);
//   const [error, setError] = useState(null);

//   // Load data pengunjung saat komponen mount
//   useEffect(() => {
//     const loadPengunjungData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         if (!kode) {
//           setError('Kode pengunjung tidak valid');
//           return;
//         }

//         console.log('Loading data for kode:', kode);
        
//         const data = await fetchPengunjungByKode(kode);
//         console.log('Data received:', data);
        
//         if (!data) {
//           setError('Data pengunjung tidak ditemukan');
//           return;
//         }

//         setPengunjung(data);
        
//         // Reset form dengan data yang ada
//         reset({
//           nama: data.nama || '',
//           jenis_kelamin: data.jenis_kelamin || '',
//           nik: data.nik || '',
//           alamat: data.alamat || '',
//           hp: data.hp || '',
//           hubungan_keluarga: data.hubungan_keluarga || '',
//         });

//       } catch (error) {
//         console.error('Error loading pengunjung data:', error);
//         setError(error.message || 'Gagal memuat data pengunjung');
//         toast.error('Gagal memuat data pengunjung');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPengunjungData();
//   }, [kode, reset, fetchPengunjungByKode]);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
      
//       const formData = new FormData();
      
//       // Append semua data form
//       Object.keys(data).forEach(key => {
//         if (data[key] !== null && data[key] !== undefined) {
//           formData.append(key, data[key]);
//         }
//       });

//       // Append file jika ada
//       if (photoKtp) formData.append('photo_ktp', photoKtp);
//       if (photoPengunjung) formData.append('photo_pengunjung', photoPengunjung);

//       await updateDataPengunjung(kode, formData);
      
//       toast.success('Data pengunjung berhasil diupdate!');
//       navigate('/pengunjung/data');
      
//     } catch (error) {
//       console.error('Error updating pengunjung:', error);
//       toast.error(error.message || 'Gagal mengupdate data pengunjung');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e, setFileFunction) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (!file.type.startsWith('image/')) {
//         toast.error('File harus berupa gambar');
//         return;
//       }
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error('Ukuran file maksimal 5MB');
//         return;
//       }
//       setFileFunction(file);
//     }
//   };

//   // Tampilkan loading hanya saat pertama kali load
//   if (loading && !pengunjung && !error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Memuat data pengunjung...</p>
//         </div>
//       </div>
//     );
//   }

//   // Tampilkan error
//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">{error}</p>
//           <button
//             onClick={() => navigate('/pengunjung/data')}
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Kembali ke Daftar Pengunjung
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Pastikan pengunjung ada sebelum render form
//   if (!pengunjung) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600">Data pengunjung tidak ditemukan</p>
//           <button
//             onClick={() => navigate('/pengunjung/data')}
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Kembali ke Daftar Pengunjung
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">Edit Data Pengunjung</h1>
//             <button
//               onClick={() => navigate('/pengunjung/data')}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               Kembali
//             </button>
//           </div>

//           {/* Informasi Kode Pengunjung */}
//           <div className="mb-6 p-4 bg-blue-50 rounded-lg">
//             <p className="text-sm text-blue-700">
//               <strong>Kode Pengunjung:</strong> {pengunjung.kode}
//             </p>
//             {pengunjung.barcode && (
//               <p className="text-sm text-blue-700 mt-1">
//                 <strong>Status:</strong> Barcode telah dikirim ke email
//               </p>
//             )}
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
//                   //    { 
//                   //   required: 'No. HP harus diisi',
//                   //   pattern: {
//                   //     value: /^[0-9+]{10,15}$/,
//                   //     message: 'Format nomor HP tidak valid'
//                   //   }
//                   // }
//                 )}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//               />
//               {errors.hubungan_keluarga && (
//                 <p className="text-red-500 text-sm mt-1">{errors.hubungan_keluarga.message}</p>
//               )}
//             </div>

//             {/* Upload Foto */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Foto KTP {pengunjung.photo_ktp && '(Sudah ada)'}
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleFileChange(e, setPhotoKtp)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {pengunjung.photo_ktp && !photoKtp && (
//                   <p className="text-green-600 text-sm mt-1">
//                     Foto KTP saat ini: <a href={pengunjung.photo_ktp} target="_blank" rel="noopener noreferrer" className="underline">Lihat</a>
//                   </p>
//                 )}
//                 {photoKtp && (
//                   <p className="text-green-600 text-sm mt-1">File baru dipilih: {photoKtp.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Foto Pengunjung {pengunjung.photo_pengunjung && '(Sudah ada)'}
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleFileChange(e, setPhotoPengunjung)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {pengunjung.photo_pengunjung && !photoPengunjung && (
//                   <p className="text-green-600 text-sm mt-1">
//                     Foto saat ini: <a href={pengunjung.photo_pengunjung} target="_blank" rel="noopener noreferrer" className="underline">Lihat</a>
//                   </p>
//                 )}
//                 {photoPengunjung && (
//                   <p className="text-green-600 text-sm mt-1">File baru dipilih: {photoPengunjung.name}</p>
//                 )}
//               </div>
//             </div>

//             {/* Tombol Submit */}
//             <div className="flex justify-end space-x-4 pt-6 border-t">
//               <button
//                 type="button"
//                 onClick={() => navigate('/pengunjung/data')}
//                 className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Batal
//               </button>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? 'Menyimpan...' : 'Update Data'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditPengunjung;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useDataStore from '../../store/useDataStore';
import toast from 'react-hot-toast';
import { FaUser, FaSearch, FaTimes } from 'react-icons/fa';

const EditPengunjung = () => {
  const navigate = useNavigate();
  const { kode } = useParams();
  const { updateDataPengunjung, fetchPengunjungByKode, fetchWbpList, wbpList } = useDataStore();
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm();
  
  const [photoKtp, setPhotoKtp] = useState(null);
  const [photoPengunjung, setPhotoPengunjung] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pengunjung, setPengunjung] = useState(null);
  const [error, setError] = useState(null);

  // State untuk pencarian WBP
  const [searchWbp, setSearchWbp] = useState('');
  const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
  const [loadingWbp, setLoadingWbp] = useState(false);
  const [selectedWbp, setSelectedWbp] = useState(null);
  const dropdownRef = useRef(null);

  const wbp_id = watch('wbp_id');

  // Load data pengunjung dan WBP saat komponen mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!kode) {
          setError('Kode pengunjung tidak valid');
          return;
        }

        console.log('Loading data for kode:', kode);
        
        // Load data WBP terlebih dahulu
        setLoadingWbp(true);
        await fetchWbpList();
        setLoadingWbp(false);

        // Load data pengunjung
        const data = await fetchPengunjungByKode(kode);
        console.log('Data received:', data);
        
        if (!data) {
          setError('Data pengunjung tidak ditemukan');
          return;
        }

        setPengunjung(data);
        
        // Reset form dengan data yang ada
        const formData = {
          nama: data.nama || '',
          jenis_kelamin: data.jenis_kelamin || '',
          nik: data.nik || '',
          alamat: data.alamat || '',
          hp: data.hp || '',
          hubungan_keluarga: data.hubungan_keluarga || '',
          wbp_id: data.wbp_id || '',
        };

        reset(formData);

        // Set selected WBP jika ada wbp_id
        if (data.wbp_id && wbpList) {
          const wbpData = Array.isArray(wbpList) 
            ? wbpList.find(wbp => wbp.id === data.wbp_id)
            : (wbpList && wbpList.id === data.wbp_id ? wbpList : null);
          
          if (wbpData) {
            setSelectedWbp(wbpData);
            setSearchWbp(wbpData.nama || '');
          }
        }

      } catch (error) {
        console.error('Error loading data:', error);
        setError(error.message || 'Gagal memuat data pengunjung');
        toast.error('Gagal memuat data pengunjung');
      } finally {
        setLoading(false);
        setLoadingWbp(false);
      }
    };

    loadData();
  }, [kode, reset, fetchPengunjungByKode, fetchWbpList]);

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
    toast.info('Pilihan WBP dihapus');
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      
      const formData = new FormData();
      
      // Append semua data form
      Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key]);
        }
      });

      // Append file jika ada
      if (photoKtp) formData.append('photo_ktp', photoKtp);
      if (photoPengunjung) formData.append('photo_pengunjung', photoPengunjung);

      await updateDataPengunjung(kode, formData);
      
      toast.success('Data pengunjung berhasil diupdate!');
      navigate('/pengunjung/data');
      
    } catch (error) {
      console.error('Error updating pengunjung:', error);
      toast.error(error.message || 'Gagal mengupdate data pengunjung');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e, setFileFunction) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('File harus berupa gambar');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Ukuran file maksimal 5MB');
        return;
      }
      setFileFunction(file);
    }
  };

  // Tampilkan loading hanya saat pertama kali load
  if (loading && !pengunjung && !error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat data pengunjung...</p>
        </div>
      </div>
    );
  }

  // Tampilkan error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/pengunjung/data')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Kembali ke Daftar Pengunjung
          </button>
        </div>
      </div>
    );
  }

  // Pastikan pengunjung ada sebelum render form
  if (!pengunjung) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Data pengunjung tidak ditemukan</p>
          <button
            onClick={() => navigate('/pengunjung/data')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Kembali ke Daftar Pengunjung
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Edit Data Pengunjung</h1>
            <button
              onClick={() => navigate('/pengunjung/data')}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Kembali
            </button>
          </div>

          {/* Informasi Kode Pengunjung */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Kode Pengunjung:</strong> {pengunjung.kode}
            </p>
            {pengunjung.barcode && (
              <p className="text-sm text-blue-700 mt-1">
                <strong>Status:</strong> Barcode telah dikirim ke email
              </p>
            )}
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
                      {selectedWbp.nomor_register && (
                        <p className="text-blue-600 text-sm">Register: {selectedWbp.nomor_register}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={clearWbpSelection}
                      className="text-red-600 hover:text-red-800 text-sm p-1"
                      title="Hapus pilihan WBP"
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
              />
              {errors.hubungan_keluarga && (
                <p className="text-red-500 text-sm mt-1">{errors.hubungan_keluarga.message}</p>
              )}
            </div>

            {/* Upload Foto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto KTP {pengunjung.photo_ktp && '(Sudah ada)'}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setPhotoKtp)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {pengunjung.photo_ktp && !photoKtp && (
                  <p className="text-green-600 text-sm mt-1">
                    Foto KTP saat ini: <a href={pengunjung.photo_ktp} target="_blank" rel="noopener noreferrer" className="underline">Lihat</a>
                  </p>
                )}
                {photoKtp && (
                  <p className="text-green-600 text-sm mt-1">File baru dipilih: {photoKtp.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto Pengunjung {pengunjung.photo_pengunjung && '(Sudah ada)'}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setPhotoPengunjung)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {pengunjung.photo_pengunjung && !photoPengunjung && (
                  <p className="text-green-600 text-sm mt-1">
                    Foto saat ini: <a href={pengunjung.photo_pengunjung} target="_blank" rel="noopener noreferrer" className="underline">Lihat</a>
                  </p>
                )}
                {photoPengunjung && (
                  <p className="text-green-600 text-sm mt-1">File baru dipilih: {photoPengunjung.name}</p>
                )}
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => navigate('/pengunjung/data')}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Menyimpan...' : 'Update Data'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPengunjung;