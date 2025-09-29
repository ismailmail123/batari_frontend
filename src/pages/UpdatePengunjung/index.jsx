// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useDataStore from "../../store/useDataStore";
// import toast from "react-hot-toast";
// import CreateBarangTitipanModal from "./CreateBarangTitipanModal";
// import { User } from "lucide-react";

// const EditPengunjungForm = () => {
//   const { kode } = useParams(); // Ambil ID pengunjung dari URL
//   const navigate = useNavigate();
//   const { fetchPengunjungByCode, pengunjungByCode, updatePengunjung } = useDataStore();
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     nama: "",
//     jenis_kelamin: "",
//     nik: "",
//     alamat: "",
//     hp: "",
//     hubungan_keluarga: "",
//     tujuan: "",
//     pengikut_laki_laki: 0,
//     pengikut_perempuan: 0,
//     pengikut_anak_anak: 0,
//     pengikut_bayi: 0,
//     total_pengikut: 0,
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Ambil data pengunjung yang sudah ada
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         await fetchPengunjungByCode(kode); // Ambil data pengunjung berdasarkan ID
//         setLoading(false);
//       } catch (error) {
//         toast.error("Gagal memuat data pengunjung");
//       }
//     };
//     loadData();
//   }, [kode, fetchPengunjungByCode]);

//   // Isi form dengan data yang ada
//   useEffect(() => {
//     if (pengunjungByCode) {
//       setFormData({
//         nama: pengunjungByCode.nama || "",
//         jenis_kelamin: pengunjungByCode.jenis_kelamin || "",
//         nik: pengunjungByCode.nik || "",
//         alamat: pengunjungByCode.alamat || "",
//         hp: pengunjungByCode.hp || "",
//         hubungan_keluarga: pengunjungByCode.hubungan_keluarga || "",
//         tujuan: pengunjungByCode.tujuan || "",
//         pengikut_laki_laki: pengunjungByCode.pengikut_laki_laki || 0,
//         pengikut_perempuan: pengunjungByCode.pengikut_perempuan || 0,
//         pengikut_anak_anak: pengunjungByCode.pengikut_anak_anak || 0,
//         pengikut_bayi: pengunjungByCode.pengikut_bayi || 0,
//         total_pengikut: pengunjungByCode.total_pengikut || 0,
//       });
//     }
//   }, [pengunjungByCode]);

//   // Handle perubahan input
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await updatePengunjung(kode, formData); // Panggil fungsi updatePengunjung dari zustand
//       toast.success("Data pengunjung berhasil diperbarui!");
//       navigate(-1); // Navigasi ke halaman detail
//     } catch (error) {
//       console.error("Error: ", error);
//       toast.error("Gagal memperbarui data pengunjung. Silakan coba lagi.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div className="text-center p-8">Memuat data...</div>;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
//       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all hover:shadow-3xl">
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">
//             ✏️ Edit Data Pengunjung
//           </h1>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//           >
//             ← Kembali
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Kolom Kiri */}
//           <div className="space-y-4">
//             {[
//               "nama",
//               "jenis_kelamin",
//               "nik",
//               "alamat",
//               "hp",
//               "hubungan_keluarga",
//               "tujuan",
//             ].map((field) => (
//               <div key={field} className="space-y-1">
//                 <label className="block text-sm font-medium text-gray-700 capitalize">
//                   {field.replace(/_/g, " ")}
//                 </label>
//                 {field === "jenis_kelamin" ? (
//                   <select
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">Pilih Jenis Kelamin</option>
//                     <option value="laki-laki">Laki-laki</option>
//                     <option value="perempuan">Perempuan</option>
//                   </select>
//                 ) : field === "tujuan" ?(
//                   <select
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">Pilih Jenis Tujuan</option>
//                 <option value="Berkunjung">Berkunjung</option>
//                 <option value="Menitip barang">Menitip barang</option>
//                   </select>
//                 ): (
//                   <input
//                     type={field === "nik" || field === "hp" ? "number" : "text"}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Kolom Kanan */}
//           <div className="space-y-4">
//             {[
//               "pengikut_laki_laki",
//               "pengikut_perempuan",
//               "pengikut_anak_anak",
//               "pengikut_bayi",
//               // "total_pengikut",
//             ].map((field) => (
//               <div key={field} className="space-y-1">
//                 <label className="block text-sm font-medium text-gray-700 capitalize">
//                   {field.replace(/_/g, " ")}
//                 </label>
//                 <input
//                   type="number"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             ))}

//             {/* Tombol Submit */}
            
            
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin h-5 w-5 mr-3 ..." /> Memproses...
//                 </span>
//               ) : (
//                 "💾 Simpan Perubahan"
//               )}
//             </button>
//           </div>
//         </form>
//         <button
//         onClick={() => setIsModalOpen(true)}
//          className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
//       >
//         + Tambah Barang Titipan
//       </button>

//       {/* Modal CreateBarangTitipan */}
//       <CreateBarangTitipanModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         pengunjungs={pengunjungByCode} // Kirim data pengunjung ke modal
//       />
//       </div>
//     </div>
//   );
// };

// export default EditPengunjungForm;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import toast from "react-hot-toast";
import CreateBarangTitipanModal from "./CreateBarangTitipanModal";
import { User } from "lucide-react";

const EditPengunjungForm = () => {
  const { kode } = useParams();
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
    tujuan: "",
    pengikut_laki_laki: 0,
    pengikut_perempuan: 0,
    pengikut_anak_anak: 0,
    pengikut_bayi: 0,
    total_pengikut: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk menghitung total pengikut
  const calculateTotalPengikut = (data) => {
    const total = 
      parseInt(data.pengikut_laki_laki || 0) +
      parseInt(data.pengikut_perempuan || 0) +
      parseInt(data.pengikut_anak_anak || 0) +
      parseInt(data.pengikut_bayi || 0);
    return total;
  };

  // Ambil data pengunjung yang sudah ada
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchPengunjungByCode(kode);
        setLoading(false);
      } catch (error) {
        toast.error("Gagal memuat data pengunjung");
      }
    };
    loadData();
  }, [kode, fetchPengunjungByCode]);

  // Isi form dengan data yang ada dan hitung total
  useEffect(() => {
    if (pengunjungByCode) {
      const initialData = {
        nama: pengunjungByCode.nama || "",
        jenis_kelamin: pengunjungByCode.jenis_kelamin || "",
        nik: pengunjungByCode.nik || "",
        alamat: pengunjungByCode.alamat || "",
        hp: pengunjungByCode.hp || "",
        hubungan_keluarga: pengunjungByCode.hubungan_keluarga || "",
        tujuan: pengunjungByCode.tujuan || "",
        pengikut_laki_laki: pengunjungByCode.pengikut_laki_laki || 0,
        pengikut_perempuan: pengunjungByCode.pengikut_perempuan || 0,
        pengikut_anak_anak: pengunjungByCode.pengikut_anak_anak || 0,
        pengikut_bayi: pengunjungByCode.pengikut_bayi || 0,
        total_pengikut: pengunjungByCode.total_pengikut || 0,
      };
      
      // Hitung ulang total pengikut
      initialData.total_pengikut = calculateTotalPengikut(initialData);
      
      setFormData(initialData);
    }
  }, [pengunjungByCode]);

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    
    // Jika field pengikut diubah, hitung total otomatis
    if (name.includes('pengikut_') && name !== 'total_pengikut') {
      updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
    }
    
    setFormData(updatedFormData);
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updatePengunjung(kode, formData);
      toast.success("Data pengunjung berhasil diperbarui!");
      navigate(-1);
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
              "tujuan",
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
                ) : field === "tujuan" ? (
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Jenis Tujuan</option>
                    <option value="Berkunjung">Berkunjung</option>
                    <option value="Menitip barang">Menitip barang</option>
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
            {/* Field-field pengikut dalam grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Pengikut Laki-laki</label>
                <input
                  type="number"
                  name="pengikut_laki_laki"
                  value={formData.pengikut_laki_laki}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Pengikut Perempuan</label>
                <input
                  type="number"
                  name="pengikut_perempuan"
                  value={formData.pengikut_perempuan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Pengikut Anak-anak</label>
                <input
                  type="number"
                  name="pengikut_anak_anak"
                  value={formData.pengikut_anak_anak}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Pengikut Bayi</label>
                <input
                  type="number"
                  name="pengikut_bayi"
                  value={formData.pengikut_bayi}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>
            </div>

            {/* Total Pengikut (Read-only) */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Pengikut</label>
              <div className="text-2xl font-bold text-blue-600 text-center">
                {formData.total_pengikut} Orang
              </div>
              <div className="text-sm text-gray-600 text-center mt-1">
                (Laki-laki: {formData.pengikut_laki_laki} | 
                 Perempuan: {formData.pengikut_perempuan} | 
                 Anak: {formData.pengikut_anak_anak} | 
                 Bayi: {formData.pengikut_bayi})
              </div>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Memproses...
                </span>
              ) : (
                "💾 Simpan Perubahan"
              )}
            </button>
          </div>
        </form>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 mt-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
        >
          + Tambah Barang Titipan
        </button>

        {/* Modal CreateBarangTitipan */}
        <CreateBarangTitipanModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pengunjungs={pengunjungByCode}
        />
      </div>
    </div>
  );
};

export default EditPengunjungForm;