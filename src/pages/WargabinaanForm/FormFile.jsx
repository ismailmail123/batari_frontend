// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useDataStore from "../../store/useDataStore";

// const FormExcel = () => {
//     const [file, setFile] = useState(null);
//     const [error, setError] = useState("");
//     const { createWargabinaan } = useDataStore();

//     const handleFileChange = (e) => {
//         const selectedFile = e.target.files[0];
//         if (selectedFile) {
//             setFile(selectedFile);
//             setError("");
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!file) {
//             setError("Silakan pilih file Excel terlebih dahulu.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("list", file);

//         try {
//             await createWargabinaan(formData, setError);
//             setFile(null);
//         } catch (error) {
//             console.error("Error uploading file:", error);
//             toast.error("Terjadi kesalahan saat mengupload file. Silakan coba lagi.");
//         }
//     };

//     return (
//         <div className="form-excel-container">
//             <h2>Form Input Excel</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="file">Pilih File Excel</label>
//                     <input
//                         type="file"
//                         id="file"
//                         accept=".xlsx, .xls"
//                         onChange={handleFileChange}
//                     />
//                     {error && <p className="error-message">{error}</p>}
//                 </div>
//                 <button type="submit" className="submit-button">
//                     Upload
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default FormExcel;

import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDataStore from "../../store/useDataStore";
import { Navigate } from "react-router-dom";
import NavbarWbp from "../Navbar";

const FormExcel = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const { createWargabinaan } = useDataStore();

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError("");
        }
    };

    // Handle drag-and-drop
    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && (droppedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || droppedFile.type === "application/vnd.ms-excel")) {
            setFile(droppedFile);
            setError("");
        } else {
            setError("File harus berformat Excel (.xlsx atau .xls)");
        }
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setError("Silakan pilih file Excel terlebih dahulu.");
            return;
        }

        const formData = new FormData();
        formData.append("list", file);

        try {
            await createWargabinaan(formData, setError);
            setFile(null);
			Navigate(-1)
            toast.success("File berhasil diupload!");
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error("Terjadi kesalahan saat mengupload file. Silakan coba lagi.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
			<NavbarWbp />
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    📁 Upload Data Warga Binaan
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div
                        className={`flex items-center justify-between p-4 border-2 border-dashed rounded-lg ${
                            isDragging ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
                        } transition-all duration-200`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className="flex items-center space-x-4">
                            <input
                                type="file"
                                id="file"
                                accept=".xlsx, .xls"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <label
                                htmlFor="file"
                                className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                            >
                                Pilih File
                            </label>
                            <p className="text-gray-600">
                                {file ? file.name : "Drag & drop file Excel di sini"}
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                            disabled={!file}
                        >
                            Upload
                        </button>
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm mt-2 flex items-center">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default FormExcel;