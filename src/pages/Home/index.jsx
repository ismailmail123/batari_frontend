import React, { useState } from "react";
import useDataStore from "../../store/useDataStore"; // Import store Zustand
import toast from "react-hot-toast";

const UploadExcel = () => {
    const [file, setFile] = useState(null); // State untuk menyimpan file
    const [loading, setLoading] = useState(false); // State untuk menangani loading
    const [error, setError] = useState(""); // State untuk menangani error
    const [success, setSuccess] = useState(""); // State untuk menangani pesan sukses
    const [fileName, setFileName] = useState(""); 

    // Ambil fungsi createWargabinaan dari store Zustand
    const { createWargabinaan } = useDataStore();

      // Fungsi untuk menangani perubahan file
      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name); // Simpan nama file
        }
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!file) {
            setError("Silakan pilih file Excel terlebih dahulu.");
            return;
        }
    
        setLoading(true);
        setError("");
        setSuccess("");
    
        const formData = new FormData();
        formData.append("list", file); // Field "list" digunakan di frontend
    
        try {
            await createWargabinaan(formData, setError);
            setSuccess("File berhasil diupload dan diproses!");
        } catch (err) {
            setError("Terjadi kesalahan saat mengupload file. Silakan coba lagi.");
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
                {/* Form untuk upload file */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* File Input */}
                    <div>
                        <div className="min-h-2 flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload File Excel</h2>
                <p className="text-gray-600 mb-6">
                    Silakan upload file Excel untuk menambahkan data WBP.
                </p>

                {/* Form untuk upload file */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                    {/* File Input */}
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                            Pilih File Excel (.xls, .xlsx)
                        </label>
                        <div className="mt-1 flex items-center justify-center w-full">
                            <label
                                htmlFor="file"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all"
                            >
                                {fileName ? (
                                    // Tampilkan nama file jika file sudah dipilih
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-10 h-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                            ></path>
                                        </svg>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {fileName}
                                        </p>
                                    </div>
                                ) : (
                                    // Tampilkan instruksi upload jika belum ada file
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-10 h-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                            ></path>
                                        </svg>
                                        <p className="text-sm text-gray-500 mt-2">
                                            <span className="font-semibold">Klik untuk upload</span> atau drag and drop file
                                        </p>
                                        <p className="text-xs text-gray-400">Format .xls atau .xlsx</p>
                                    </div>
                                )}
                                <input
                                    id="file"
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                    required
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
                    </div>

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center items-center px-4 py-3 border-b-violet-950 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Mengupload...
                            </>
                        ) : (
                            "Upload"
                        )}
                    </button>
                </form>

                {/* Tampilkan pesan sukses atau error */}
                {/* {success && (
                    <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        {success}
                    </div>
                )}
                {error && (
                    <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default UploadExcel;