import React, { useState } from "react";
import useDataStore from "../../store/useDataStore"; // Import store Zustand
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaIdCard, FaHome, FaVenusMars, FaUpload, FaSpinner, FaSave } from "react-icons/fa";

const WargabinaanForm = () => {
    // State untuk menyimpan input form
    const [formData, setFormData] = useState({
        nama: "",
        alamat: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        warga_negara: "",
        agama: "",
        status_perkawinan: "",
        tingkat_pendidikan: "",
        nik: "",
        jenis_kejahatan: "",
        sepertiga_masa_pidana: "",
        seperdua_masa_pidana: "",
        duapertiga_masa_pidana: "",
        pekerjaan: "",
        lokasi_blok: "",
        status: "",
        nama_ayah: "",
        nama_ibu: "",
        photo: null, // State untuk menyimpan file gambar
        keterangan: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // State untuk menangani loading tombol
    const [error, setError] = useState(""); // State untuk menangani error
    const [success, setSuccess] = useState(""); // State untuk menangani pesan sukses

    // Ambil fungsi createWargabinaan dari store Zustand
    const { formCreateWargabinaan } = useDataStore();

    const navigate = useNavigate();

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Fungsi untuk menangani perubahan file gambar
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validasi tipe file (hanya menerima gambar)
            if (file.type.startsWith("image/")) {
                setFormData({
                    ...formData,
                    photo: file,
                });
                setError(""); // Reset pesan error jika ada
            } else {
                setError("File yang diunggah harus berupa gambar (JPEG, PNG, dll).");
            }
        }
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setError("");
        setSuccess("");

        // Buat objek FormData untuk mengirim file dan data lainnya
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            // Kirim data ke backend menggunakan fungsi dari store Zustand
            await formCreateWargabinaan(data, setError);
            setSuccess("Data Warga Binaan berhasil ditambahkan!");
            toast.success("Data Warga Binaan berhasil ditambahkan!");

            // Reset form setelah berhasil
            setFormData({
                // user_id: currentUser.id,
                nama: "",
                alamat: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                jenis_kelamin: "",
                warga_negara: "",
                agama: "",
                status_perkawinan: "",
                tingkat_pendidikan: "",
                nik: "",
                jenis_kejahatan: "",
                sepertiga_masa_pidana: "",
                seperdua_masa_pidana: "",
                duapertiga_masa_pidana: "",
                pekerjaan: "",
                lokasi_blok: "",
                status: "",
                nama_ayah: "",
                nama_ibu: "",
                photo: null,
                keterangan: "",
            });
            window.location.reload();
        } catch (err) {
            setError("Terjadi kesalahan saat menambahkan data. Silakan coba lagi.");
            console.log("error dari komponen", error)
            console.error("Error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
                {/* Header */}
                <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="w-full">
                          <Link to="/" className="flex justify-end top-6 left-4 text-black font-bold hover:text-green-500 text-2xl" style={{textDecoration: 'none', color: 'white'}}>
                          <FaHome />
                          </Link>
                          </div>
                    <div className="flex items-center space-x-4">
                        <FaUser className="w-10 h-10" />
                        <h2 className="text-3xl font-bold">Tambah Data Warga Binaan</h2>
                    </div>
                    <p className="mt-2 text-sm opacity-90">
                        Isi formulir di bawah ini untuk menambahkan data warga binaan baru.
                    </p>
                </div>

                {/* Form */}
                <div className="p-8">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Input Nama */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaUser className="inline-block mr-2" /> Nama
                            </label>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Alamat */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaHome className="inline-block mr-2" /> Alamat
                            </label>
                            <input
                                type="text"
                                name="alamat"
                                value={formData.alamat}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Tempat Lahir */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tempat Lahir
                            </label>
                            <input
                                type="text"
                                name="tempat_lahir"
                                value={formData.tempat_lahir}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Tanggal Lahir */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tanggal Lahir
                            </label>
                            <input
                                type="date"
                                name="tanggal_lahir"
                                value={formData.tanggal_lahir}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Jenis Kelamin */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaVenusMars className="inline-block mr-2" /> Jenis Kelamin
                            </label>
                            <select
                                name="jenis_kelamin"
                                value={formData.jenis_kelamin}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="laki-laki">Laki-laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                        </div>

                        {/* Input Warga Negara */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Warga Negara
                            </label>
                            <select
                                name="warga_negara"
                                value={formData.warga_negara}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option value="">Pilih Warga Negara</option>
                                <option value="WNI">WNI</option>
                                <option value="WNA">WNA</option>
                            </select>
                        </div>

                        {/* Input Agama */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Agama
                            </label>
                            <input
                                type="text"
                                name="agama"
                                value={formData.agama}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Status Perkawinan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status Perkawinan
                            </label>
                            <select
                                name="status_perkawinan"
                                value={formData.status_perkawinan}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option value="">Pilih Status Perkawinan</option>
                                <option value="belum menikah">Belum menikah</option>
                                <option value="menikah">Menikah</option>
                                <option value="Cerai Hidup">Cerai Hidup</option>
                                <option value="Cerai Mati">Cerai Mati</option>
                            </select>
                        </div>

                        {/* Input Tingkat Pendidikan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tingkat Pendidikan
                            </label>
                            <input
                                type="text"
                                name="tingkat_pendidikan"
                                value={formData.tingkat_pendidikan}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input NIK */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaIdCard className="inline-block mr-2" /> NIK
                            </label>
                            <input
                                type="text"
                                name="nik"
                                value={formData.nik}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Jenis Kejahatan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Jenis Kejahatan
                            </label>
                            <input
                                type="text"
                                name="jenis_kejahatan"
                                value={formData.jenis_kejahatan}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Sepertiga Masa Pidana */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Sepertiga Masa Pidana
                            </label>
                            <input
                                type="date"
                                name="sepertiga_masa_pidana"
                                value={formData.sepertiga_masa_pidana}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Seperdua Masa Pidana */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Seperdua Masa Pidana
                            </label>
                            <input
                                type="date"
                                name="seperdua_masa_pidana"
                                value={formData.seperdua_masa_pidana}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Duapertiga Masa Pidana */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Duapertiga Masa Pidana
                            </label>
                            <input
                                type="date"
                                name="duapertiga_masa_pidana"
                                value={formData.duapertiga_masa_pidana}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Pekerjaan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Pekerjaan
                            </label>
                            <input
                                type="text"
                                name="pekerjaan"
                                value={formData.pekerjaan}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Lokasi Blok */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Lokasi Blok
                            </label>
                            <input
                                type="text"
                                name="lokasi_blok"
                                value={formData.lokasi_blok}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option value="">Pilih Status</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Non-Aktif">Non-Aktif</option>
                            </select>
                        </div>

                        {/* Input Nama Ayah */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Ayah
                            </label>
                            <input
                                type="text"
                                name="nama_ayah"
                                value={formData.nama_ayah}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Nama Ibu */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Ibu
                            </label>
                            <input
                                type="text"
                                name="nama_ibu"
                                value={formData.nama_ibu}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input Keterangan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Keterangan
                            </label>
                            <select
                                name="keterangan"
                                value={formData.keterangan}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option value="">Pilih Status Penahanan</option>
                                <option value="Narapidana">Narapidana</option>
                                <option value="Tahanan">Tahanan</option>
                            </select>
                        </div>

                        {/* Input Foto */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaUpload className="inline-block mr-2" /> Foto
                            </label>
                            <input
                                type="file"
                                name="photo"
                                onChange={handleFileChange}
                                accept="image/*"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Tombol Submit dengan Loading Indicator */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin inline-block mr-2" />
                                    Menyimpan...
                                </>
                            ) : (
                                <>
                                    <FaSave className="inline-block mr-2" />
                                    Simpan
                                </>
                            )}
                        </button>
                        <button
                            type="submit"
                            onClick={()=> navigate("/wargabinaan-form-excel")}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
                        >
                            + tambahkan dengan file
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WargabinaanForm;