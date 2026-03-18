// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import useDataStore from "../../store/useDataStore";
// // // import NavbarWbp from "../Navbar";
// // // import "./style.css";
// // // import useAuthStore from "../../store/useAuthStore";
// // // import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// // // import PDFReport from './PdfReport';
// // // import PDFDataForm from './PdfDataForm';
// // // import { saveAs } from 'file-saver';
// // // import { pdf } from '@react-pdf/renderer';

// // // const Report = () => {
// // //   const { authUser } = useAuthStore();
// // //   const { fetchPengunjung, fetchPengunjungUser, pengunjungs, pengunjungUser, loading, error } = useDataStore();
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [searchBy, setSearchBy] = useState("nama");
// // //   const [startDate, setStartDate] = useState("");
// // //   const [endDate, setEndDate] = useState("");
// // //   const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
// // //   const [showPdfPreview, setShowPdfPreview] = useState(false);
// // //   const [showPdfForm, setShowPdfForm] = useState(false);
// // //   const [pdfFormData, setPdfFormData] = useState(null);
// // //   const [actionType, setActionType] = useState(''); // 'preview' atau 'export'
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     fetchPengunjung();
// // //     fetchPengunjungUser();
// // //   }, [fetchPengunjung, fetchPengunjungUser]);

// // //   const handleExportPdf = async (formData) => {
// // //     setIsGeneratingPdf(true);
    
// // //     try {
// // //       const pdfData = {
// // //         filteredPengunjungs,
// // //         totals,
// // //         barangTitipan,
// // //         rekapPengunjung,
// // //         rekapPenitipan,
// // //         rekapUang,
// // //         rekapPenitipanPerJenis,
// // //         statistikPenitipan,
// // //         verifikasiData,
// // //         startDate,
// // //         endDate,
// // //         pdfFormData: formData
// // //       };
      
// // //       const blob = await pdf(<PDFReport data={pdfData} />).toBlob();
// // //       saveAs(blob, `Laporan_Kunjungan_${new Date().toISOString().split('T')[0]}.pdf`);
// // //     } catch (error) {
// // //       console.error('Error generating PDF:', error);
// // //     } finally {
// // //       setIsGeneratingPdf(false);
// // //       setPdfFormData(null);
// // //     }
// // //   };

// // //   const handlePreviewPdf = (formData) => {
// // //     setPdfFormData(formData);
// // //     setShowPdfPreview(true);
// // //   };

// // //   const onPreviewClick = () => {
// // //     setActionType('preview');
// // //     setShowPdfForm(true);
// // //   };

// // //   const onExportClick = () => {
// // //     setActionType('export');
// // //     setShowPdfForm(true);
// // //   };

// // //   const handleFormSubmit = (formData) => {
// // //     if (actionType === 'preview') {
// // //       handlePreviewPdf(formData);
// // //     } else if (actionType === 'export') {
// // //       handleExportPdf(formData);
// // //     }
// // //   };

// // //   // Fungsi untuk menghitung total pengunjung
// // //   const calculateTotals = (data) => {
// // //     return data.reduce(
// // //       (acc, curr) => ({
// // //         laki: acc.laki + (curr.pengikut_laki || 0) + (curr.tujuan === "Berkunjung" ? 1 : 0),
// // //         perempuan: acc.perempuan + (curr.pengikut_perempuan || 0),
// // //         anakLaki: acc.anakLaki + (curr.pengikut_anak_laki || 0),
// // //         anakPerempuan: acc.anakPerempuan + (curr.pengikut_anak_perempuan || 0),
// // //         bayi: acc.bayi + (curr.pengikut_bayi || 0),
// // //       }),
// // //       { laki: 0, perempuan: 0, anakLaki: 0, anakPerempuan: 0, bayi: 0 }
// // //     );
// // //   };

// // //   // Fungsi untuk menghitung rekap barang titipan
// // //   const calculateBarangTitipan = (data) => {
// // //     return data.reduce(
// // //       (acc, curr) => {
// // //         if (curr.tujuan === "Menitip barang") {
// // //           curr.barang_titipan?.forEach((barang) => {
// // //             switch (barang.jenis_barang) {
// // //               case "Makanan":
// // //                 acc.makan += barang.jumlah || 0;
// // //                 break;
// // //               case "Alat mandi":
// // //                 acc.alatMandi += barang.jumlah || 0;
// // //                 break;
// // //               case "Obat":
// // //                 acc.obat += barang.jumlah || 0;
// // //                 break;
// // //               case "Pakaian":
// // //                 acc.pakaian += barang.jumlah || 0;
// // //                 break;
// // //               case "Dokumen":
// // //                 acc.dokumen += barang.jumlah || 0;
// // //                 break;
// // //               case "Elektronik":
// // //                 acc.elektronik += barang.jumlah || 0;
// // //                 break;
// // //               case "Uang":
// // //                 acc.uang += barang.jumlah || 0;
// // //                 break;
// // //             }
// // //             acc.total += barang.jumlah || 0;
// // //           });
// // //         }
// // //         return acc;
// // //       },
// // //       { makan: 0, alatMandi: 0, obat: 0, pakaian: 0, dokumen: 0, elektronik: 0, uang: 0, total: 0 }
// // //     );
// // //   };

// // //   // Fungsi untuk menghitung jumlah penitip per jenis barang
// // //   const calculatePenitipPerJenis = (data) => {
// // //     const result = {
// // //       makanan: new Set(),
// // //       alatMandi: new Set(),
// // //       obat: new Set(),
// // //       pakaian: new Set(),
// // //       dokumen: new Set(),
// // //       elektronik: new Set(),
// // //       uang: new Set(),
// // //       semuaPenitip: new Set()
// // //     };

// // //     data.forEach((pengunjung) => {
// // //       if (pengunjung.tujuan === "Menitip barang" && pengunjung.barang_titipan?.length > 0) {
// // //         result.semuaPenitip.add(pengunjung.id);
        
// // //         pengunjung.barang_titipan.forEach((barang) => {
// // //           switch (barang.jenis_barang) {
// // //             case "Makanan":
// // //               result.makanan.add(pengunjung.id);
// // //               break;
// // //             case "Alat mandi":
// // //               result.alatMandi.add(pengunjung.id);
// // //               break;
// // //             case "Obat":
// // //               result.obat.add(pengunjung.id);
// // //               break;
// // //             case "Pakaian":
// // //               result.pakaian.add(pengunjung.id);
// // //               break;
// // //             case "Dokumen":
// // //               result.dokumen.add(pengunjung.id);
// // //               break;
// // //             case "Elektronik":
// // //               result.elektronik.add(pengunjung.id);
// // //               break;
// // //             case "Uang":
// // //               result.uang.add(pengunjung.id);
// // //               break;
// // //           }
// // //         });
// // //       }
// // //     });

// // //     return {
// // //       makanan: result.makanan.size,
// // //       alatMandi: result.alatMandi.size,
// // //       obat: result.obat.size,
// // //       pakaian: result.pakaian.size,
// // //       dokumen: result.dokumen.size,
// // //       elektronik: result.elektronik.size,
// // //       uang: result.uang.size,
// // //       totalPenitip: result.semuaPenitip.size,
// // //       penitipLebihDariSatu: Array.from(result.semuaPenitip).filter(id => {
// // //         let count = 0;
// // //         if (result.makanan.has(id)) count++;
// // //         if (result.alatMandi.has(id)) count++;
// // //         if (result.obat.has(id)) count++;
// // //         if (result.pakaian.has(id)) count++;
// // //         if (result.dokumen.has(id)) count++;
// // //         if (result.elektronik.has(id)) count++;
// // //         if (result.uang.has(id)) count++;
// // //         return count > 1;
// // //       }).length
// // //     };
// // //   };

// // //   // Fungsi untuk menghitung rekap uang
// // //   const calculateRekapUang = (data) => {
// // //     let totalUang = 0;
// // //     const penitipUang = new Set();

// // //     data.forEach((pengunjung) => {
// // //       if (pengunjung.tujuan === "Menitip barang") {
// // //         pengunjung.barang_titipan?.forEach((barang) => {
// // //           if (barang.jenis_barang === "Uang") {
// // //             penitipUang.add(pengunjung.id);
// // //             totalUang += barang.jumlah || 0;
// // //           }
// // //         });
// // //       }
// // //     });

// // //     return {
// // //       jumlahOrang: penitipUang.size,
// // //       totalUang: totalUang
// // //     };
// // //   };

// // //   // FUNGSI REKAP PENGUNJUNG YANG DIPERBAIKI
// // //   const calculateRekapPengunjung = (data) => {
// // //     // Gunakan Set untuk melacak ID pengunjung yang sudah dihitung
// // //     const processedIds = new Set();
    
// // //     const result = data.reduce(
// // //       (acc, curr) => {
// // //         if (curr.tujuan === "Berkunjung") {
// // //           // Hitung total orang per kunjungan
// // //           const totalOrang = 1 + // Pengunjung utama
// // //             (curr.pengikut_laki || 0) +
// // //             (curr.pengikut_perempuan || 0) +
// // //             (curr.pengikut_anak_laki || 0) +
// // //             (curr.pengikut_anak_perempuan || 0) +
// // //             (curr.pengikut_bayi || 0);
          
// // //           // Cek apakah ID ini sudah diproses (untuk mendeteksi duplikasi)
// // //           if (processedIds.has(curr.id)) {
// // //             acc.duplikasi += totalOrang;
// // //             console.warn(`Duplikasi data ditemukan untuk ID: ${curr.id}, Nama: ${curr.nama}`);
// // //           } else {
// // //             processedIds.add(curr.id);
// // //           }
          
// // //           // Tambahkan ke total keseluruhan
// // //           acc.totalPengunjung += totalOrang;
          
// // //           // Kategorisasi berdasarkan status warga binaan dengan pengecekan yang lebih ketat
// // //           const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
          
// // //           if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
// // //             acc.narapidanaAktif += totalOrang;
// // //           } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
// // //             acc.tahanan += totalOrang;
// // //           } else {
// // //             // Status tidak dikenal
// // //             acc.tidakDikenal += totalOrang;
// // //             console.warn(`Status tidak dikenal untuk ID: ${curr.id}, Status: ${curr.warga_binaan?.keterangan}`);
// // //           }
// // //         }
// // //         return acc;
// // //       },
// // //       { 
// // //         narapidanaAktif: 0, 
// // //         tahanan: 0, 
// // //         tidakDikenal: 0,
// // //         duplikasi: 0,
// // //         totalPengunjung: 0 
// // //       }
// // //     );

// // //     return result;
// // //   };

// // //   // Fungsi untuk menghitung rekap penitipan barang
// // //   const calculateRekapPenitipan = (data) => {
// // //     const processedIds = new Set();
    
// // //     return data.reduce(
// // //       (acc, curr) => {
// // //         if (curr.tujuan === "Menitip barang") {
// // //           const totalOrang = 1 + // Pengunjung utama
// // //             (curr.pengikut_laki || 0) +
// // //             (curr.pengikut_perempuan || 0) +
// // //             (curr.pengikut_anak_laki || 0) +
// // //             (curr.pengikut_anak_perempuan || 0) +
// // //             (curr.pengikut_bayi || 0);
          
// // //           if (processedIds.has(curr.id)) {
// // //             acc.duplikasi += totalOrang;
// // //           } else {
// // //             processedIds.add(curr.id);
// // //           }
          
// // //           acc.totalPenitip += totalOrang;
          
// // //           const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
          
// // //           if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
// // //             acc.narapidanaAktif += totalOrang;
// // //           } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
// // //             acc.tahanan += totalOrang;
// // //           } else {
// // //             acc.tidakDikenal += totalOrang;
// // //           }
// // //         }
// // //         return acc;
// // //       },
// // //       { 
// // //         narapidanaAktif: 0, 
// // //         tahanan: 0, 
// // //         tidakDikenal: 0,
// // //         duplikasi: 0,
// // //         totalPenitip: 0 
// // //       }
// // //     );
// // //   };

// // //   // Fungsi untuk verifikasi data
// // //   const verifikasiData = (data) => {
// // //     const semuaId = new Set();
// // //     const duplikasiId = [];
// // //     const statusTidakDikenal = [];
// // //     const tujuanSelainBerkunjung = [];

// // //     data.forEach((item) => {
// // //       // Cek duplikasi ID
// // //       if (semuaId.has(item.id)) {
// // //         duplikasiId.push(item);
// // //       } else {
// // //         semuaId.add(item.id);
// // //       }

// // //       // Cek status tidak dikenal untuk tujuan Berkunjung
// // //       if (item.tujuan === "Berkunjung") {
// // //         const keterangan = item.warga_binaan?.keterangan?.toLowerCase() || "";
// // //         if (!keterangan.includes("tahanan") && !keterangan.includes("narapidana")) {
// // //           statusTidakDikenal.push(item);
// // //         }
// // //       }

// // //       // Catat tujuan selain Berkunjung
// // //       if (item.tujuan !== "Berkunjung") {
// // //         tujuanSelainBerkunjung.push(item);
// // //       }
// // //     });

// // //     return {
// // //       totalData: data.length,
// // //       totalUnik: semuaId.size,
// // //       duplikasi: duplikasiId.length,
// // //       statusTidakDikenal: statusTidakDikenal.length,
// // //       tujuanSelainBerkunjung: tujuanSelainBerkunjung.length,
// // //       daftarDuplikasi: duplikasiId,
// // //       daftarStatusTidakDikenal: statusTidakDikenal
// // //     };
// // //   };

// // //   // Filter data
// // //   const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
// // //     const value = pengunjung[searchBy]?.toLowerCase() || "";
// // //     const isMatch = value.includes(searchQuery.toLowerCase());

// // //     let isDateMatch = true;
// // //     const pengunjungDate = new Date(pengunjung.createdAt).setHours(0, 0, 0, 0);

// // //     if (startDate && endDate) {
// // //       const start = new Date(startDate).setHours(0, 0, 0, 0);
// // //       const end = new Date(endDate).setHours(0, 0, 0, 0);
// // //       isDateMatch = pengunjungDate >= start && pengunjungDate <= end;
// // //     } else if (startDate) {
// // //       const start = new Date(startDate).setHours(0, 0, 0, 0);
// // //       isDateMatch = pengunjungDate >= start;
// // //     } else if (endDate) {
// // //       const end = new Date(endDate).setHours(0, 0, 0, 0);
// // //       isDateMatch = pengunjungDate <= end;
// // //     }

// // //     const hasAntrian = pengunjung.antrian !== null;
// // //     return isMatch && isDateMatch && hasAntrian;
// // //   });

// // //   // Hitung semua total
// // //   const totals = calculateTotals(filteredPengunjungs);
// // //   const barangTitipan = calculateBarangTitipan(filteredPengunjungs);
// // //   const rekapPengunjung = calculateRekapPengunjung(filteredPengunjungs);
// // //   const rekapPenitipan = calculateRekapPenitipan(filteredPengunjungs);
// // //   const rekapUang = calculateRekapUang(filteredPengunjungs);
// // //   const rekapPenitipanPerJenis = calculatePenitipPerJenis(filteredPengunjungs);
// // //   const verifikasi = verifikasiData(filteredPengunjungs);

// // //   // Statistik tambahan
// // //   const statistikPenitipan = {
// // //     totalPenitipUnik: rekapPenitipanPerJenis.totalPenitip,
// // //     totalJumlahJenis: rekapPenitipanPerJenis.makanan + 
// // //                       rekapPenitipanPerJenis.alatMandi + 
// // //                       rekapPenitipanPerJenis.obat + 
// // //                       rekapPenitipanPerJenis.pakaian + 
// // //                       rekapPenitipanPerJenis.dokumen + 
// // //                       rekapPenitipanPerJenis.elektronik + 
// // //                       rekapPenitipanPerJenis.uang,
// // //     penitipGanda: rekapPenitipanPerJenis.penitipLebihDariSatu
// // //   };

// // //   // Log untuk debugging
// // //   console.log("VERIFIKASI DATA:");
// // //   console.log("Total data:", verifikasi.totalData);
// // //   console.log("Data unik:", verifikasi.totalUnik);
// // //   console.log("Duplikasi:", verifikasi.duplikasi);
// // //   console.log("Status tidak dikenal:", verifikasi.statusTidakDikenal);
// // //   console.log("Tujuan selain Berkunjung:", verifikasi.tujuanSelainBerkunjung);
  
// // //   console.log("\nREKAP PENGUNJUNG:");
// // //   console.log("Narapidana Aktif:", rekapPengunjung.narapidanaAktif);
// // //   console.log("Tahanan:", rekapPengunjung.tahanan);
// // //   console.log("Tidak Dikenal:", rekapPengunjung.tidakDikenal);
// // //   console.log("Duplikasi:", rekapPengunjung.duplikasi);
// // //   console.log("Total:", rekapPengunjung.totalPengunjung);
// // //   console.log("Verifikasi:", rekapPengunjung.narapidanaAktif + rekapPengunjung.tahanan + rekapPengunjung.tidakDikenal, "=", rekapPengunjung.totalPengunjung);

// // //   // Fungsi untuk memformat rentang tanggal
// // //   const formatDateRange = () => {
// // //     if (startDate && endDate) {
// // //       const start = new Date(startDate).toLocaleDateString("id-ID", {
// // //         weekday: "long",
// // //         year: "numeric",
// // //         month: "long",
// // //         day: "numeric",
// // //       });
// // //       const end = new Date(endDate).toLocaleDateString("id-ID", {
// // //         weekday: "long",
// // //         year: "numeric",
// // //         month: "long",
// // //         day: "numeric",
// // //       });
// // //       return `${start} s.d. ${end}`;
// // //     } else if (startDate) {
// // //       return new Date(startDate).toLocaleDateString("id-ID", {
// // //         weekday: "long",
// // //         year: "numeric",
// // //         month: "long",
// // //         day: "numeric",
// // //       });
// // //     } else if (endDate) {
// // //       return new Date(endDate).toLocaleDateString("id-ID", {
// // //         weekday: "long",
// // //         year: "numeric",
// // //         month: "long",
// // //         day: "numeric",
// // //       });
// // //     } else {
// // //       return "Tanggal tidak tersedia";
// // //     }
// // //   };

// // //   const formatRupiah = (angka) => {
// // //     return new Intl.NumberFormat('id-ID', {
// // //       style: 'currency',
// // //       currency: 'IDR',
// // //       minimumFractionDigits: 0,
// // //       maximumFractionDigits: 0
// // //     }).format(angka);
// // //   };

// // //   if (loading) {
// // //     return <div className="text-center py-8">Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div className="text-center py-8 text-red-500">Error: {error}</div>;
// // //   }

// // //   return (
// // //     <>
// // //       <NavbarWbp />
// // //       <div className="min-h-screen bg-gray-100 p-8 mt-10">
// // //         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
// // //           Laporan Kunjungan
// // //         </h1>

// // //         {/* Form Pencarian dan Tombol Export */}
// // //         <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
// // //           <div className="flex flex-wrap gap-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Cari pengunjung..."
// // //               value={searchQuery}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //               className="px-4 py-2 border rounded-md"
// // //             />
// // //             <select
// // //               value={searchBy}
// // //               onChange={(e) => setSearchBy(e.target.value)}
// // //               className="px-4 py-2 border rounded-md"
// // //             >
// // //               <option value="nama">Nama</option>
// // //               <option value="warga_binaan.nama">Nama Warga Binaan</option>
// // //             </select>
// // //             <input
// // //               type="date"
// // //               value={startDate}
// // //               onChange={(e) => setStartDate(e.target.value)}
// // //               className="px-4 py-2 border rounded-md"
// // //             />
// // //             <input
// // //               type="date"
// // //               value={endDate}
// // //               onChange={(e) => setEndDate(e.target.value)}
// // //               className="px-4 py-2 border rounded-md"
// // //             />
// // //           </div>
// // //           <div className="flex gap-2">
// // //             <button
// // //               onClick={onPreviewClick}
// // //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// // //               disabled={isGeneratingPdf}
// // //             >
// // //               {isGeneratingPdf ? 'Membuat PDF...' : 'Preview Laporan'}
// // //             </button>
// // //             <button
// // //               onClick={onExportClick}
// // //               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
// // //               disabled={isGeneratingPdf}
// // //             >
// // //               {isGeneratingPdf ? 'Mengekspor...' : 'Buat Laporan'}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Panel Verifikasi Data */}
// // //         {verifikasi.duplikasi > 0 || verifikasi.statusTidakDikenal > 0 ? (
// // //           <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded-lg">
// // //             <h3 className="font-bold text-lg mb-2">⚠️ Peringatan Verifikasi Data</h3>
// // //             <p>Ditemukan ketidaksesuaian dalam data:</p>
// // //             <ul className="list-disc ml-6 mt-2">
// // //               {verifikasi.duplikasi > 0 && (
// // //                 <li>Duplikasi data: <span className="font-semibold">{verifikasi.duplikasi}</span> data terduplikasi</li>
// // //               )}
// // //               {verifikasi.statusTidakDikenal > 0 && (
// // //                 <li>Status tidak dikenal: <span className="font-semibold">{verifikasi.statusTidakDikenal}</span> data dengan status warga binaan tidak terdeteksi</li>
// // //               )}
// // //             </ul>
// // //             <p className="mt-2 text-sm">
// // //               Total data: {verifikasi.totalData} | Data unik: {verifikasi.totalUnik} | Selisih: {verifikasi.totalData - verifikasi.totalUnik}
// // //             </p>
// // //           </div>
// // //         ) : (
// // //           <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded-lg">
// // //             <h3 className="font-bold">✓ Data Terverifikasi</h3>
// // //             <p>Semua data valid dan tidak ditemukan duplikasi atau status tidak dikenal.</p>
// // //           </div>
// // //         )}

// // //         {/* Form Input Data PDF */}
// // //         <PDFDataForm 
// // //           isOpen={showPdfForm}
// // //           onClose={() => {
// // //             setShowPdfForm(false);
// // //             setActionType('');
// // //           }}
// // //           onSubmit={handleFormSubmit}
// // //           initialData={pdfFormData}
// // //         />

// // //         {/* Modal Preview PDF */}
// // //         {showPdfPreview && pdfFormData && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-lg shadow-xl w-full h-full max-w-6xl flex flex-col">
// // //               <div className="flex justify-between items-center p-4 border-b">
// // //                 <h2 className="text-xl font-bold">Preview Laporan PDF</h2>
// // //                 <button
// // //                   onClick={() => {
// // //                     setShowPdfPreview(false);
// // //                     setPdfFormData(null);
// // //                   }}
// // //                   className="text-gray-500 hover:text-gray-700 text-2xl"
// // //                 >
// // //                   &times;
// // //                 </button>
// // //               </div>
// // //               <div className="flex-1">
// // //                 <PDFViewer width="100%" height="100%">
// // //                   <PDFReport data={{
// // //                     filteredPengunjungs,
// // //                     totals,
// // //                     barangTitipan,
// // //                     rekapPengunjung,
// // //                     rekapPenitipan,
// // //                     rekapUang,
// // //                     rekapPenitipanPerJenis,
// // //                     statistikPenitipan,
// // //                     verifikasi,
// // //                     startDate,
// // //                     endDate,
// // //                     pdfFormData
// // //                   }} />
// // //                 </PDFViewer>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Tabel Utama */}
// // //         <div className="bg-white rounded-lg shadow-lg overflow-x-auto mb-8">
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-gray-50">
// // //               <tr>
// // //                 <th className="px-6 py-3 text-left">Warga Binaan</th>
// // //                 <th className="px-6 py-3 text-left">Pengunjung</th>
// // //                 <th className="px-6 py-3 text-center">Tujuan</th>
// // //                 <th className="px-6 py-3 text-center">Status WB</th>
// // //                 <th className="px-6 py-3 text-center">Laki</th>
// // //                 <th className="px-6 py-3 text-center">Perempuan</th>
// // //                 <th className="px-6 py-3 text-center">Anak Laki</th>
// // //                 <th className="px-6 py-3 text-center">Anak Perempuan</th>
// // //                 <th className="px-6 py-3 text-center">Bayi</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filteredPengunjungs.map((pengunjung) => {
// // //                 const isDuplikat = verifikasi.daftarDuplikasi?.some(d => d.id === pengunjung.id);
// // //                 const statusTidakDikenal = verifikasi.daftarStatusTidakDikenal?.some(d => d.id === pengunjung.id);
                
// // //                 return (
// // //                   <tr 
// // //                     key={pengunjung.id} 
// // //                     className={`hover:bg-gray-50 ${
// // //                       isDuplikat ? 'bg-yellow-50' : 
// // //                       statusTidakDikenal ? 'bg-red-50' : ''
// // //                     }`}
// // //                   >
// // //                     <td className="px-6 py-4">{pengunjung.warga_binaan?.nama || "-"}</td>
// // //                     <td className="px-6 py-4">{pengunjung.nama}</td>
// // //                     <td className="px-6 py-4 text-center">{pengunjung.tujuan || "-"}</td>
// // //                     <td className="px-6 py-4 text-center">
// // //                       {pengunjung.warga_binaan?.keterangan || "-"}
// // //                       {statusTidakDikenal && pengunjung.tujuan === "Berkunjung" && (
// // //                         <span className="ml-2 text-red-500 text-xs">(❌ tidak dikenal)</span>
// // //                       )}
// // //                     </td>
// // //                     <td className="px-6 py-4 text-center">
// // //                       {pengunjung.tujuan === "Berkunjung" ? (pengunjung.pengikut_laki || 0) + 1 : (pengunjung.pengikut_laki || 0)}
// // //                     </td>
// // //                     <td className="px-6 py-4 text-center">{pengunjung.pengikut_perempuan || 0}</td>
// // //                     <td className="px-6 py-4 text-center">{pengunjung.pengikut_anak_laki || 0}</td>
// // //                     <td className="px-6 py-4 text-center">{pengunjung.pengikut_anak_perempuan || 0}</td>
// // //                     <td className="px-6 py-4 text-center">{pengunjung.pengikut_bayi || 0}</td>
// // //                   </tr>
// // //                 );
// // //               })}
// // //             </tbody>
// // //             <tfoot className="bg-gray-100 font-semibold">
// // //               <tr>
// // //                 <td className="px-6 py-4" colSpan="4">Total</td>
// // //                 <td className="px-6 py-4 text-center">{totals.laki}</td>
// // //                 <td className="px-6 py-4 text-center">{totals.perempuan}</td>
// // //                 <td className="px-6 py-4 text-center">{totals.anakLaki}</td>
// // //                 <td className="px-6 py-4 text-center">{totals.anakPerempuan}</td>
// // //                 <td className="px-6 py-4 text-center">{totals.bayi}</td>
// // //               </tr>
// // //             </tfoot>
// // //           </table>
// // //         </div>

// // //         {/* Rekapan Data dengan Verifikasi */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
// // //           <div className="space-y-8">
// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-xl font-semibold mb-4">Rekap Pengunjung</h2>
// // //               <div className="space-y-2">
// // //                 <p>Total Pengunjung: {rekapPengunjung.totalPengunjung} orang</p>
// // //                 <p className="ml-4 text-green-600">✓ Narapidana Aktif: {rekapPengunjung.narapidanaAktif} orang</p>
// // //                 <p className="ml-4 text-blue-600">✓ Tahanan: {rekapPengunjung.tahanan} orang</p>
// // //                 {rekapPengunjung.tidakDikenal > 0 && (
// // //                   <p className="ml-4 text-red-600 font-semibold">❌ Status Tidak Dikenal: {rekapPengunjung.tidakDikenal} orang</p>
// // //                 )}
// // //                 {rekapPengunjung.duplikasi > 0 && (
// // //                   <p className="ml-4 text-yellow-600 font-semibold">⚠️ Data Duplikasi: {rekapPengunjung.duplikasi} orang</p>
// // //                 )}
// // //                 <div className="border-t pt-2 mt-2">
// // //                   <p className="font-semibold">Verifikasi: {rekapPengunjung.narapidanaAktif + rekapPengunjung.tahanan + rekapPengunjung.tidakDikenal} = {rekapPengunjung.totalPengunjung}</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-xl font-semibold mb-4">Rekap Penitipan Barang</h2>
// // //               <div className="space-y-2">
// // //                 <p>Total Penitip (dengan pengikut): {rekapPenitipan.totalPenitip} orang</p>
// // //                 <p className="ml-4">- Narapidana Aktif: {rekapPenitipan.narapidanaAktif} orang</p>
// // //                 <p className="ml-4">- Tahanan: {rekapPenitipan.tahanan} orang</p>
// // //                 {rekapPenitipan.tidakDikenal > 0 && (
// // //                   <p className="ml-4 text-red-600">- Tidak Dikenal: {rekapPenitipan.tidakDikenal} orang</p>
// // //                 )}
// // //                 <div className="border-t pt-2 mt-2">
// // //                   <p className="font-medium text-green-600">Jumlah Penitip Unik: {rekapPenitipanPerJenis.totalPenitip} orang</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-xl font-semibold mb-4">Rekap Uang</h2>
// // //               <div className="space-y-2">
// // //                 <p>Jumlah Penitip Uang: {rekapUang.jumlahOrang} orang</p>
// // //                 <p>Total Uang: {formatRupiah(rekapUang.totalUang)}</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="space-y-8">
// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-xl font-semibold mb-4">Jumlah Penitip per Jenis Barang</h2>
// // //               <div className="space-y-2">
// // //                 <p>Makanan: {rekapPenitipanPerJenis.makanan} orang</p>
// // //                 <p>Alat Mandi: {rekapPenitipanPerJenis.alatMandi} orang</p>
// // //                 <p>Obat: {rekapPenitipanPerJenis.obat} orang</p>
// // //                 <p>Pakaian: {rekapPenitipanPerJenis.pakaian} orang</p>
// // //                 <p>Dokumen: {rekapPenitipanPerJenis.dokumen} orang</p>
// // //                 <p>Elektronik: {rekapPenitipanPerJenis.elektronik} orang</p>
// // //                 <p>Uang: {rekapPenitipanPerJenis.uang} orang</p>
// // //                 <div className="border-t pt-2 mt-2">
// // //                   <p className="font-semibold">Total Transaksi: {statistikPenitipan.totalJumlahJenis}</p>
// // //                   <p className="text-sm text-orange-600">Penitip dengan >1 jenis: {statistikPenitipan.penitipGanda} orang</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-xl font-semibold mb-4">Barang Titipan (Jumlah Item)</h2>
// // //               <div className="space-y-2">
// // //                 <p>Makanan: {barangTitipan.makan}</p>
// // //                 <p>Alat Mandi: {barangTitipan.alatMandi}</p>
// // //                 <p>Obat: {barangTitipan.obat}</p>
// // //                 <p>Uang: {formatRupiah(barangTitipan.uang)}</p>
// // //                 <p>Pakaian: {barangTitipan.pakaian}</p>
// // //                 <p>Dokumen: {barangTitipan.dokumen}</p>
// // //                 <p>Elektronik: {barangTitipan.elektronik}</p>
// // //                 <p className="pt-2 border-t font-semibold">Total Item: {barangTitipan.total}</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Tanda Tangan */}
// // //         <div className="flex justify-end gap-4 mt-8">
// // //           <div className="text-start leading-1.5">
// // //             <p>Dikeluarkan di Bantaeng</p>
// // //             <p>Pada Tanggal {formatDateRange()}</p>
// // //             <p className="mb-8">Kepala Rutan</p>
// // //             <p className="border-t pt-8">(.......................................)</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Report;


import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";
import { PDFViewer } from '@react-pdf/renderer';
import PDFReport from './PdfReport';
import PDFDataForm from './PdfDataForm';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

const Report = () => {
  const { authUser } = useAuthStore();
  const { 
    fetchPengunjung, 
    pengunjungs, 
    loading, 
    error,
    currentPage,
    totalPage,
    totalData 
  } = useDataStore();
  
  // State untuk pencarian dan filter
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("nama");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  // State untuk pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);
  const [loadedPages, setLoadedPages] = useState({});
  
  // State untuk PDF
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [showPdfForm, setShowPdfForm] = useState(false);
  const [pdfFormData, setPdfFormData] = useState(null);
  const [actionType, setActionType] = useState('');
  
  // Limit options
  const limitOptions = [50, 100, 200, 500, 1000, 5000];
  
  const navigate = useNavigate();

  // Load data dengan pagination
  useEffect(() => {
    loadPage(1);
  }, [limit]);

  const loadPage = useCallback(async (pageNum, append = false) => {
    if (loadedPages[pageNum]) return;
    
    await fetchPengunjung({ page: pageNum, limit, append });
    setLoadedPages(prev => ({ ...prev, [pageNum]: true }));
  }, [limit, fetchPengunjung]);

  // Load more data saat scroll
  const loadMore = useCallback(() => {
    if (page < totalPage && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadPage(nextPage, true);
    }
  }, [page, totalPage, loading, loadPage]);

  // Handle scroll untuk infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  // Filter data dengan useMemo
  const filteredPengunjungs = useMemo(() => {
    return pengunjungs.filter((pengunjung) => {
      let value = "";
      if (searchBy === "nama") {
        value = pengunjung.nama?.toLowerCase() || "";
      } else if (searchBy === "warga_binaan.nama") {
        value = pengunjung.warga_binaan?.nama?.toLowerCase() || "";
      } else {
        value = pengunjung[searchBy]?.toLowerCase() || "";
      }
      
      const isMatch = value.includes(searchQuery.toLowerCase());

      let isDateMatch = true;
      const pengunjungDate = new Date(pengunjung.createdAt).setHours(0, 0, 0, 0);

      if (startDate && endDate) {
        const start = new Date(startDate).setHours(0, 0, 0, 0);
        const end = new Date(endDate).setHours(0, 0, 0, 0);
        isDateMatch = pengunjungDate >= start && pengunjungDate <= end;
      } else if (startDate) {
        const start = new Date(startDate).setHours(0, 0, 0, 0);
        isDateMatch = pengunjungDate >= start;
      } else if (endDate) {
        const end = new Date(endDate).setHours(0, 0, 0, 0);
        isDateMatch = pengunjungDate <= end;
      }

      const hasAntrian = pengunjung.antrian !== null;
      return isMatch && isDateMatch && hasAntrian;
    });
  }, [pengunjungs, searchQuery, searchBy, startDate, endDate]);

  // Handle export PDF
  const handleExportPdf = async (formData) => {
    setIsGeneratingPdf(true);
    
    try {
      const pdfData = {
        filteredPengunjungs,
        totals: calculateTotals(filteredPengunjungs),
        barangTitipan: calculateBarangTitipan(filteredPengunjungs),
        rekapPengunjung: calculateRekapPengunjung(),
        rekapPenitipan: calculateRekapPenitipan(filteredPengunjungs),
        jumlahPenitipUtama: calculateJumlahPenitipUtama(filteredPengunjungs),
        rekapUang: calculateRekapUang(filteredPengunjungs),
        rekapPenitipanPerJenis: calculatePenitipPerJenis(filteredPengunjungs),
        statistikPenitipan: calculateStatistikPenitipan(filteredPengunjungs),
        verifikasi: verifikasiData(filteredPengunjungs),
        startDate,
        endDate,
        pdfFormData: formData,
        totalData: filteredPengunjungs.length,
        limit,
        page
      };
      
      const blob = await pdf(<PDFReport data={pdfData} />).toBlob();
      saveAs(blob, `Laporan_Kunjungan_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
      setPdfFormData(null);
    }
  };

  const handlePreviewPdf = (formData) => {
    setPdfFormData(formData);
    setShowPdfPreview(true);
  };

  const onPreviewClick = () => {
    setActionType('preview');
    setShowPdfForm(true);
  };

  const onExportClick = () => {
    setActionType('export');
    setShowPdfForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (actionType === 'preview') {
      handlePreviewPdf(formData);
    } else if (actionType === 'export') {
      handleExportPdf(formData);
    }
  };

  // Fungsi untuk mendapatkan nilai pengikut dengan benar
  const getPengikutLaki = (pengunjung) => {
    return pengunjung.pengikut_laki_laki || pengunjung.pengikut_laki || 0;
  };

  const getPengikutPerempuan = (pengunjung) => {
    return pengunjung.pengikut_perempuan || 0;
  };

  const getPengikutAnakLaki = (pengunjung) => {
    return pengunjung.pengikut_anak_laki || pengunjung.pengikut_anak_anak || 0;
  };

  const getPengikutAnakPerempuan = (pengunjung) => {
    return pengunjung.pengikut_anak_perempuan || 0;
  };

  const getPengikutBayi = (pengunjung) => {
    return pengunjung.pengikut_bayi || 0;
  };

  // Fungsi untuk mendapatkan total orang dalam satu kunjungan (pengunjung utama + semua pengikut)
  const getTotalOrangDalamKunjungan = (pengunjung) => {
    return 1 + 
      getPengikutLaki(pengunjung) +
      getPengikutPerempuan(pengunjung) +
      getPengikutAnakLaki(pengunjung) +
      getPengikutAnakPerempuan(pengunjung) +
      getPengikutBayi(pengunjung);
  };

  // Fungsi perhitungan total untuk tabel (menampilkan per baris)
  const calculateTotals = (data) => {
    return data.reduce(
      (acc, curr) => {
        const pengikutLaki = getPengikutLaki(curr);
        const pengikutPerempuan = getPengikutPerempuan(curr);
        const pengikutAnakLaki = getPengikutAnakLaki(curr);
        const pengikutAnakPerempuan = getPengikutAnakPerempuan(curr);
        const pengikutBayi = getPengikutBayi(curr);
        
        let tambahLaki = 0;
        let tambahPerempuan = 0;
        
        if (curr.tujuan?.toLowerCase().includes("berkunjung")) {
          const jenisKelamin = curr.jenis_kelamin?.toLowerCase() || "";
          
          if (jenisKelamin === "laki-laki" || jenisKelamin === "laki") {
            tambahLaki = 1;
          } else if (jenisKelamin === "perempuan") {
            tambahPerempuan = 1;
          }
        }
        
        return {
          laki: acc.laki + pengikutLaki + tambahLaki,
          perempuan: acc.perempuan + pengikutPerempuan + tambahPerempuan,
          anakLaki: acc.anakLaki + pengikutAnakLaki,
          anakPerempuan: acc.anakPerempuan + pengikutAnakPerempuan,
          bayi: acc.bayi + pengikutBayi,
        };
      },
      { laki: 0, perempuan: 0, anakLaki: 0, anakPerempuan: 0, bayi: 0 }
    );
  };

  const calculateBarangTitipan = (data) => {
    return data.reduce(
      (acc, curr) => {
        if (curr.barang_titipan && curr.barang_titipan.length > 0) {
          curr.barang_titipan.forEach((barang) => {
            switch (barang.jenis_barang) {
              case "Makanan":
                acc.makan += barang.jumlah || 0;
                break;
              case "Alat mandi":
                acc.alatMandi += barang.jumlah || 0;
                break;
              case "Obat":
                acc.obat += barang.jumlah || 0;
                break;
              case "Pakaian":
                acc.pakaian += barang.jumlah || 0;
                break;
              case "Dokumen":
                acc.dokumen += barang.jumlah || 0;
                break;
              case "Elektronik":
                acc.elektronik += barang.jumlah || 0;
                break;
              case "Uang":
                acc.uang += barang.jumlah || 0;
                break;
            }
            acc.total += barang.jumlah || 0;
          });
        }
        return acc;
      },
      { makan: 0, alatMandi: 0, obat: 0, pakaian: 0, dokumen: 0, elektronik: 0, uang: 0, total: 0 }
    );
  };

  // Fungsi untuk menghitung penitip per jenis barang (jumlah KUNJUNGAN per jenis)
  const calculatePenitipPerJenis = (data) => {
    const result = {
      makanan: 0,
      alatMandi: 0,
      obat: 0,
      pakaian: 0,
      dokumen: 0,
      elektronik: 0,
      uang: 0,
      semuaPenitip: new Set()
    };

    data.forEach((pengunjung) => {
      if (pengunjung.barang_titipan && pengunjung.barang_titipan.length > 0) {
        result.semuaPenitip.add(pengunjung.id);
        
        pengunjung.barang_titipan.forEach((barang) => {
          switch (barang.jenis_barang) {
            case "Makanan":
              result.makanan += 1;
              break;
            case "Alat mandi":
              result.alatMandi += 1;
              break;
            case "Obat":
              result.obat += 1;
              break;
            case "Pakaian":
              result.pakaian += 1;
              break;
            case "Dokumen":
              result.dokumen += 1;
              break;
            case "Elektronik":
              result.elektronik += 1;
              break;
            case "Uang":
              result.uang += 1;
              break;
          }
        });
      }
    });

    return {
      makanan: result.makanan,
      alatMandi: result.alatMandi,
      obat: result.obat,
      pakaian: result.pakaian,
      dokumen: result.dokumen,
      elektronik: result.elektronik,
      uang: result.uang,
      totalPenitipUnik: result.semuaPenitip.size,
      penitipLebihDariSatu: Array.from(result.semuaPenitip).filter(id => {
        let count = 0;
        data.forEach(item => {
          if (item.id === id && item.barang_titipan && item.barang_titipan.length > 0) {
            count++;
          }
        });
        return count > 1;
      }).length
    };
  };

  const calculateRekapUang = (data) => {
    let totalUang = 0;
    const penitipUang = new Set();

    data.forEach((pengunjung) => {
      if (pengunjung.barang_titipan && pengunjung.barang_titipan.length > 0) {
        pengunjung.barang_titipan.forEach((barang) => {
          if (barang.jenis_barang === "Uang") {
            penitipUang.add(pengunjung.id);
            totalUang += barang.jumlah || 0;
          }
        });
      }
    });

    return {
      jumlahOrang: penitipUang.size,
      totalUang: totalUang
    };
  };

  // FUNGSI REKAP PENGUNJUNG - Menggunakan total dari tabel (sudah termasuk pengunjung utama + pengikut)
  // untuk semua data dengan tujuan mengandung "berkunjung"
  // const calculateRekapPengunjung = () => {
  //   // Ambil total dari tabel yang sudah dihitung di calculateTotals
  //   const totalOrang = totals.laki + totals.perempuan + totals.anakLaki + totals.anakPerempuan + totals.bayi;
    
  //   // Hitung distribusi berdasarkan status warga binaan
  //   let narapidanaAktif = 0;
  //   let tahanan = 0;
  //   let tidakDikenal = 0;
    
  //   filteredPengunjungs.forEach((curr) => {
  //     const tujuan = curr.tujuan?.toLowerCase() || "";
  //     if (tujuan.includes("berkunjung")) {
  //       const totalOrangKunjungan = getTotalOrangDalamKunjungan(curr);
  //       const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
        
  //       if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
  //         narapidanaAktif += totalOrangKunjungan;
  //       } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
  //         tahanan += totalOrangKunjungan;
  //       } else {
  //         tidakDikenal += totalOrangKunjungan;
  //       }
  //     }
  //   });
    
  //   return {
  //     narapidanaAktif,
  //     tahanan,
  //     tidakDikenal,
  //     duplikasi: 0,
  //     totalPengunjung: totalOrang
  //   };
  // };

  // FUNGSI: Menghitung JUMLAH PENITIP UTAMA (pengunjung utama yang menitip, tanpa pengikut)
  const calculateJumlahPenitipUtama = (data) => {
    let totalPenitip = 0;
    let narapidanaAktif = 0;
    let tahanan = 0;
    let tidakDikenal = 0;
    
    data.forEach((curr) => {
      const tujuan = curr.tujuan?.toLowerCase() || "";
      // Jika tujuan mengandung "menitip" (baik "Menitip barang" maupun "Berkunjung dan menitip")
      if (tujuan.includes("menitip") && curr.barang_titipan && curr.barang_titipan.length > 0) {
        totalPenitip += 1;
        
        const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
        
        if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
          narapidanaAktif += 1;
        } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
          tahanan += 1;
        } else {
          tidakDikenal += 1;
        }
      }
    });
    
    return {
      narapidanaAktif,
      tahanan,
      tidakDikenal,
      totalPenitip
    };
  };

  // FUNGSI BARU: Menghitung JUMLAH WARGA BINAAN yang dikunjungi (bukan total orang)
const calculateJumlahWargaBinaanDikunjungi = (data) => {
  const wargaBinaanSet = new Set();
  let narapidanaAktif = 0;
  let tahanan = 0;
  let tidakDikenal = 0;
  
  data.forEach((curr) => {
    const tujuan = curr.tujuan?.toLowerCase() || "";
    if (tujuan.includes("berkunjung") && curr.warga_binaan?.id) {
      // Gunakan Set untuk memastikan unik per warga binaan
      if (!wargaBinaanSet.has(curr.warga_binaan.id)) {
        wargaBinaanSet.add(curr.warga_binaan.id);
        
        const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
        
        if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
          narapidanaAktif += 1;
        } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
          tahanan += 1;
        } else {
          tidakDikenal += 1;
        }
      }
    }
  });
  
  return {
    narapidanaAktif,
    tahanan,
    tidakDikenal,
    totalWargaBinaan: wargaBinaanSet.size
  };
};

// FUNGSI REKAP PENGUNJUNG (total orang - seperti yang sudah Anda buat)
const calculateRekapPengunjung = () => {
  const totalOrang = totals.laki + totals.perempuan + totals.anakLaki + totals.anakPerempuan + totals.bayi;
  
  let narapidanaAktif = 0;
  let tahanan = 0;
  let tidakDikenal = 0;
  
  filteredPengunjungs.forEach((curr) => {
    const tujuan = curr.tujuan?.toLowerCase() || "";
    if (tujuan.includes("berkunjung")) {
      const totalOrangKunjungan = getTotalOrangDalamKunjungan(curr);
      const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
      
      if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
        narapidanaAktif += totalOrangKunjungan;
      } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
        tahanan += totalOrangKunjungan;
      } else {
        tidakDikenal += totalOrangKunjungan;
      }
    }
  });
  
  return {
    narapidanaAktif,
    tahanan,
    tidakDikenal,
    duplikasi: 0,
    totalPengunjung: totalOrang
  };
};

  // FUNGSI: Menghitung TOTAL ORANG (pengunjung utama + semua pengikut) untuk data yang menitip
  const calculateRekapPenitipan = (data) => {
    let totalOrang = 0;
    let narapidanaAktif = 0;
    let tahanan = 0;
    let tidakDikenal = 0;
    
    data.forEach((curr) => {
      if (curr.barang_titipan && curr.barang_titipan.length > 0) {
        const totalOrangKunjungan = getTotalOrangDalamKunjungan(curr);
        totalOrang += totalOrangKunjungan;
        
        const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
        
        if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
          narapidanaAktif += totalOrangKunjungan;
        } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
          tahanan += totalOrangKunjungan;
        } else {
          tidakDikenal += totalOrangKunjungan;
        }
      }
    });
    
    return {
      narapidanaAktif,
      tahanan,
      tidakDikenal,
      duplikasi: 0,
      totalPenitip: totalOrang
    };
  };

  const calculateStatistikPenitipan = (data) => {
    const penitipPerJenis = calculatePenitipPerJenis(data);
    return {
      totalPenitipUnik: penitipPerJenis.totalPenitipUnik,
      totalJumlahJenis: penitipPerJenis.makanan + 
                        penitipPerJenis.alatMandi + 
                        penitipPerJenis.obat + 
                        penitipPerJenis.pakaian + 
                        penitipPerJenis.dokumen + 
                        penitipPerJenis.elektronik + 
                        penitipPerJenis.uang,
      penitipGanda: penitipPerJenis.penitipLebihDariSatu
    };
  };

  const verifikasiData = (data) => {
    const semuaId = new Set();
    const duplikasiId = [];
    const statusTidakDikenal = [];
    const tujuanSelainBerkunjung = [];

    data.forEach((item) => {
      if (semuaId.has(item.id)) {
        duplikasiId.push(item);
      } else {
        semuaId.add(item.id);
      }

      const tujuan = item.tujuan?.toLowerCase() || "";
      if (tujuan.includes("berkunjung")) {
        const keterangan = item.warga_binaan?.keterangan?.toLowerCase() || "";
        if (!keterangan.includes("tahanan") && !keterangan.includes("narapidana")) {
          statusTidakDikenal.push(item);
        }
      }

      if (!tujuan.includes("berkunjung")) {
        tujuanSelainBerkunjung.push(item);
      }
    });

    return {
      totalData: data.length,
      totalUnik: semuaId.size,
      duplikasi: duplikasiId.length,
      statusTidakDikenal: statusTidakDikenal.length,
      tujuanSelainBerkunjung: tujuanSelainBerkunjung.length,
      daftarDuplikasi: duplikasiId,
      daftarStatusTidakDikenal: statusTidakDikenal
    };
  };

  // Hitung semua total
  // Hitung semua total
const totals = useMemo(() => calculateTotals(filteredPengunjungs), [filteredPengunjungs]);
const wargaBinaanDikunjungi = useMemo(() => calculateJumlahWargaBinaanDikunjungi(filteredPengunjungs), [filteredPengunjungs]); // TAMBAHKAN INI
const rekapPengunjung = useMemo(() => calculateRekapPengunjung(), [filteredPengunjungs, totals]);

// Log untuk debugging
console.log("JUMLAH WARGA BINAAN YANG DIKUNJUNGI:", wargaBinaanDikunjungi);
console.log("  - Narapidana Aktif:", wargaBinaanDikunjungi.narapidanaAktif);
console.log("  - Tahanan:", wargaBinaanDikunjungi.tahanan);
console.log("  - Total:", wargaBinaanDikunjungi.totalWargaBinaan);
console.log("REKAP PENGUNJUNG (Total orang):", rekapPengunjung)
  // const totals = useMemo(() => calculateTotals(filteredPengunjungs), [filteredPengunjungs]);
  const barangTitipan = useMemo(() => calculateBarangTitipan(filteredPengunjungs), [filteredPengunjungs]);
  // const rekapPengunjung = useMemo(() => calculateRekapPengunjung(), [filteredPengunjungs, totals]);
  const rekapPenitipan = useMemo(() => calculateRekapPenitipan(filteredPengunjungs), [filteredPengunjungs]);
  const jumlahPenitipUtama = useMemo(() => calculateJumlahPenitipUtama(filteredPengunjungs), [filteredPengunjungs]);
  const rekapUang = useMemo(() => calculateRekapUang(filteredPengunjungs), [filteredPengunjungs]);
  const rekapPenitipanPerJenis = useMemo(() => calculatePenitipPerJenis(filteredPengunjungs), [filteredPengunjungs]);
  const statistikPenitipan = useMemo(() => calculateStatistikPenitipan(filteredPengunjungs), [filteredPengunjungs]);
  const verifikasi = useMemo(() => verifikasiData(filteredPengunjungs), [filteredPengunjungs]);

  // Log untuk debugging
  console.log("Total data kunjungan:", filteredPengunjungs.length);
  console.log("Total dari tabel - Laki:", totals.laki, "Perempuan:", totals.perempuan, "Anak Laki:", totals.anakLaki, "Anak Perempuan:", totals.anakPerempuan, "Bayi:", totals.bayi);
  console.log("Total orang (dari tabel):", totals.laki + totals.perempuan + totals.anakLaki + totals.anakPerempuan + totals.bayi);
  console.log("REKAP PENGUNJUNG (Total orang berkunjung):", rekapPengunjung);

  const formatDateRange = () => {
    if (startDate && endDate) {
      const start = new Date(startDate).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const end = new Date(endDate).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return `${start} s.d. ${end}`;
    } else if (startDate) {
      return new Date(startDate).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else if (endDate) {
      return new Date(endDate).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else {
      return "Semua Data";
    }
  };

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(angka);
  };

  if (loading && pengunjungs.length === 0) {
    return (
      <>
        <NavbarWbp />
        <div className="min-h-screen bg-gray-100 p-8 mt-10">
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-2 text-gray-600">Memuat data...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavbarWbp />
        <div className="min-h-screen bg-gray-100 p-8 mt-10">
          <div className="text-center py-8 text-red-500">
            Error: {error}
            <button 
              onClick={() => window.location.reload()}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Reload
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarWbp />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Laporan Kunjungan
        </h1>

        {/* Panel Kontrol */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            {/* Search dan Filter */}
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Cari pengunjung..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border rounded-md"
              />
              <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="nama">Nama Pengunjung</option>
                <option value="warga_binaan.nama">Nama Warga Binaan</option>
                <option value="nik">NIK</option>
                <option value="hp">No. HP</option>
              </select>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-4 py-2 border rounded-md"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-4 py-2 border rounded-md"
              />
            </div>

            {/* Tombol Actions */}
            <div className="flex gap-2">
              <button
                onClick={onPreviewClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={isGeneratingPdf}
              >
                {isGeneratingPdf ? 'Membuat PDF...' : 'Preview Laporan'}
              </button>
              <button
                onClick={onExportClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                disabled={isGeneratingPdf}
              >
                {isGeneratingPdf ? 'Mengekspor...' : 'Buat Laporan'}
              </button>
            </div>
          </div>

          {/* Pengaturan Limit dan Info Pagination */}
          <div className="flex flex-wrap items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Tampilkan:</span>
                <select
                  value={limit}
                  onChange={(e) => {
                    setLimit(parseInt(e.target.value));
                    setPage(1);
                    setLoadedPages({});
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {limitOptions.map(opt => (
                    <option key={opt} value={opt}>{opt} data per halaman</option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-600">
                Total data: {totalData} | 
                Ditampilkan: {filteredPengunjungs.length} | 
                Halaman {currentPage} dari {totalPage}
              </div>
            </div>
            {loading && (
              <div className="text-sm text-blue-600">
                Memuat data...
              </div>
            )}
          </div>
        </div>

        {/* Panel Verifikasi Data */}
        {verifikasi.duplikasi > 0 || verifikasi.statusTidakDikenal > 0 ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded-lg">
            <h3 className="font-bold text-lg mb-2">⚠️ Peringatan Verifikasi Data</h3>
            <p>Ditemukan ketidaksesuaian dalam data:</p>
            <ul className="list-disc ml-6 mt-2">
              {verifikasi.duplikasi > 0 && (
                <li>Duplikasi data: <span className="font-semibold">{verifikasi.duplikasi}</span> data terduplikasi</li>
              )}
              {verifikasi.statusTidakDikenal > 0 && (
                <li>Status tidak dikenal: <span className="font-semibold">{verifikasi.statusTidakDikenal}</span> data dengan status warga binaan tidak terdeteksi</li>
              )}
            </ul>
            <p className="mt-2 text-sm">
              Total data: {verifikasi.totalData} | Data unik: {verifikasi.totalUnik} | Selisih: {verifikasi.totalData - verifikasi.totalUnik}
            </p>
          </div>
        ) : filteredPengunjungs.length > 0 && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded-lg">
            <h3 className="font-bold">✓ Data Terverifikasi</h3>
            <p>Semua data valid dan tidak ditemukan duplikasi atau status tidak dikenal.</p>
          </div>
        )}

        {/* Form Input Data PDF */}
        <PDFDataForm 
          isOpen={showPdfForm}
          onClose={() => {
            setShowPdfForm(false);
            setActionType('');
          }}
          onSubmit={handleFormSubmit}
          initialData={pdfFormData}
        />

        {/* Modal Preview PDF */}
        {showPdfPreview && pdfFormData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full h-full max-w-6xl flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Preview Laporan PDF</h2>
                <button
                  onClick={() => {
                    setShowPdfPreview(false);
                    setPdfFormData(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="flex-1">
                <PDFViewer width="100%" height="100%">
                  <PDFReport data={{
                    filteredPengunjungs,
                    totals,
                    barangTitipan,
                    rekapPengunjung,
                    rekapPenitipan,
                    jumlahPenitipUtama,
                    rekapUang,
                    rekapPenitipanPerJenis,
                    statistikPenitipan,
                    verifikasi,
                    startDate,
                    endDate,
                    pdfFormData,
                    totalData: filteredPengunjungs.length
                  }} />
                </PDFViewer>
              </div>
            </div>
          </div>
        )}

        {/* Tabel Data */}
        {filteredPengunjungs.length > 0 ? (
          <>
            <div className="bg-white rounded-lg shadow-lg overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">No.</th>
                    <th className="px-6 py-3 text-left">Warga Binaan</th>
                    <th className="px-6 py-3 text-left">Pengunjung</th>
                    <th className="px-6 py-3 text-center">Tujuan</th>
                    <th className="px-6 py-3 text-center">Status WB</th>
                    <th className="px-6 py-3 text-center">Laki</th>
                    <th className="px-6 py-3 text-center">Perempuan</th>
                    <th className="px-6 py-3 text-center">Anak Laki</th>
                    <th className="px-6 py-3 text-center">Anak Perempuan</th>
                    <th className="px-6 py-3 text-center">Bayi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPengunjungs.map((pengunjung, index) => {
                    const isDuplikat = verifikasi.daftarDuplikasi?.some(d => d.id === pengunjung.id);
                    const statusTidakDikenal = verifikasi.daftarStatusTidakDikenal?.some(d => d.id === pengunjung.id);
                    
                    const pengikutLaki = getPengikutLaki(pengunjung);
                    const pengikutPerempuan = getPengikutPerempuan(pengunjung);
                    
                    let jumlahLaki = pengikutLaki;
                    let jumlahPerempuan = pengikutPerempuan;
                    
                    if (pengunjung.tujuan?.toLowerCase().includes("berkunjung")) {
                      const jenisKelamin = pengunjung.jenis_kelamin?.toLowerCase() || "";
                      
                      if (jenisKelamin === "laki-laki" || jenisKelamin === "laki") {
                        jumlahLaki += 1;
                      } else if (jenisKelamin === "perempuan") {
                        jumlahPerempuan += 1;
                      }
                    }
                    
                    return (
                      <tr 
                        key={pengunjung.id} 
                        className={`hover:bg-gray-50 ${
                          isDuplikat ? 'bg-yellow-50' : 
                          statusTidakDikenal ? 'bg-red-50' : ''
                        }`}
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{pengunjung.warga_binaan?.nama || "-"}</td>
                        <td className="px-6 py-4">{pengunjung.nama}</td>
                        <td className="px-6 py-4 text-center">{pengunjung.tujuan || "-"}</td>
                        <td className="px-6 py-4 text-center">
                          {pengunjung.warga_binaan?.keterangan || "-"}
                          {statusTidakDikenal && pengunjung.tujuan?.toLowerCase().includes("berkunjung") && (
                            <span className="ml-2 text-red-500 text-xs">(❌ tidak dikenal)</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">{jumlahLaki}</td>
                        <td className="px-6 py-4 text-center">{jumlahPerempuan}</td>
                        <td className="px-6 py-4 text-center">{getPengikutAnakLaki(pengunjung)}</td>
                        <td className="px-6 py-4 text-center">{getPengikutAnakPerempuan(pengunjung)}</td>
                        <td className="px-6 py-4 text-center">{getPengikutBayi(pengunjung)}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-gray-100 font-semibold">
                  <tr>
                    <td className="px-6 py-4" colSpan="5">Total</td>
                    <td className="px-6 py-4 text-center">{totals.laki}</td>
                    <td className="px-6 py-4 text-center">{totals.perempuan}</td>
                    <td className="px-6 py-4 text-center">{totals.anakLaki}</td>
                    <td className="px-6 py-4 text-center">{totals.anakPerempuan}</td>
                    <td className="px-6 py-4 text-center">{totals.bayi}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Loading More Indicator */}
            {loading && pengunjungs.length < totalData && (
              <div className="text-center py-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p className="mt-2 text-gray-600">Memuat data tambahan...</p>
              </div>
            )}
            

            {/* Rekapan Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Rekap Pengunjung</h2>
                  <div className="space-y-2">
                    <p className="font-bold text-lg">Total Pengunjung: {rekapPengunjung.totalPengunjung} orang</p>
  <div className="space-y-2">
    <p className="font-bold text-lg">Total Warga Binaan Yang Dibesuk: {wargaBinaanDikunjungi.totalWargaBinaan} orang</p>
    <p className="ml-4 text-green-600">✓ Narapidana Aktif: {wargaBinaanDikunjungi.narapidanaAktif} orang</p>
    <p className="ml-4 text-blue-600">✓ Tahanan: {wargaBinaanDikunjungi.tahanan} orang</p>
    {wargaBinaanDikunjungi.tidakDikenal > 0 && (
      <p className="ml-4 text-red-600">❌ Status Tidak Dikenal: {wargaBinaanDikunjungi.tidakDikenal} orang</p>
    )}

                      
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Rekap Penitipan Barang</h2>
                  <div className="space-y-2">
                    <p className="font-bold text-lg">Jumlah Penitip (Pengunjung Utama): {jumlahPenitipUtama.totalPenitip} orang</p>
                    <p className="ml-4 text-green-600">✓ Narapidana Aktif: {jumlahPenitipUtama.narapidanaAktif} orang</p>
                    <p className="ml-4 text-blue-600">✓ Tahanan: {jumlahPenitipUtama.tahanan} orang</p>
                    {jumlahPenitipUtama.tidakDikenal > 0 && (
                      <p className="ml-4 text-red-600">❌ Tidak Dikenal: {jumlahPenitipUtama.tidakDikenal} orang</p>
                    )}
                    
                  </div>
                </div>

                
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Jumlah Penitip per Jenis Barang</h2>
                  <div className="space-y-2">
                    <p>Makanan: {rekapPenitipanPerJenis.makanan} Paket</p>
                    <p>Alat Mandi: {rekapPenitipanPerJenis.alatMandi} Paket</p>
                    <p>Obat: {rekapPenitipanPerJenis.obat} Paket</p>
                    <p>Pakaian: {rekapPenitipanPerJenis.pakaian} Paket</p>
                    <p>Dokumen: {rekapPenitipanPerJenis.dokumen} Paket</p>
                    <p>Elektronik: {rekapPenitipanPerJenis.elektronik} Paket</p>
                    <p>Uang: {rekapPenitipanPerJenis.uang} Paket</p>
                    <div className="border-t pt-2 mt-2">
                      <p className="font-semibold">Total Transaksi: {statistikPenitipan.totalJumlahJenis} Paket</p>
                      <p className="text-sm text-orange-600">Penitip dengan >1 jenis: {statistikPenitipan.penitipGanda} orang</p>
                    </div>
                  </div>

                </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Rekap Uang</h2>
                  <div className="space-y-2">
                    <p>Jumlah Penitip Uang: {rekapUang.jumlahOrang} orang</p>
                    <p>Total Uang: {formatRupiah(rekapUang.totalUang)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tanda Tangan */}
            <div className="flex justify-end gap-4 mt-8">
              <div className="text-start leading-1.5">
                <p>Dikeluarkan di Bantaeng</p>
                <p>Pada Tanggal {formatDateRange()}</p>
                <p className="mb-8">Kepala Rutan</p>
                <p className="border-t pt-8">(.......................................)</p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Tidak ada data untuk ditampilkan
          </div>
        )}
      </div>
    </>
  );
};

export default Report;