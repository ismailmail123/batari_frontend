import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import NavbarWbp from "../Navbar";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFReport from './PdfReport';
import PDFDataForm from './PdfDataForm';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

const Report = () => {
  const { authUser } = useAuthStore();
  const { fetchPengunjung, fetchPengunjungUser, pengunjungs, pengunjungUser, loading, error } = useDataStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("nama");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [showPdfForm, setShowPdfForm] = useState(false);
  const [pdfFormData, setPdfFormData] = useState(null);
  const [actionType, setActionType] = useState(''); // 'preview' atau 'export'
  const navigate = useNavigate();

  useEffect(() => {
    fetchPengunjung();
    fetchPengunjungUser();
  }, [fetchPengunjung, fetchPengunjungUser]);

  const handleExportPdf = async (formData) => {
    setIsGeneratingPdf(true);
    
    try {
      const pdfData = {
        filteredPengunjungs,
        totals,
        barangTitipan,
        rekapPengunjung,
        rekapPenitipan,
        rekapUang,
        rekapPenitipanPerJenis,
        statistikPenitipan,
        verifikasiData,
        startDate,
        endDate,
        pdfFormData: formData
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

  // Fungsi untuk menghitung total pengunjung
  const calculateTotals = (data) => {
    return data.reduce(
      (acc, curr) => ({
        laki: acc.laki + (curr.pengikut_laki || 0) + (curr.tujuan === "Berkunjung" ? 1 : 0),
        perempuan: acc.perempuan + (curr.pengikut_perempuan || 0),
        anakLaki: acc.anakLaki + (curr.pengikut_anak_laki || 0),
        anakPerempuan: acc.anakPerempuan + (curr.pengikut_anak_perempuan || 0),
        bayi: acc.bayi + (curr.pengikut_bayi || 0),
      }),
      { laki: 0, perempuan: 0, anakLaki: 0, anakPerempuan: 0, bayi: 0 }
    );
  };

  // Fungsi untuk menghitung rekap barang titipan
  const calculateBarangTitipan = (data) => {
    return data.reduce(
      (acc, curr) => {
        if (curr.tujuan === "Menitip barang") {
          curr.barang_titipan?.forEach((barang) => {
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

  // Fungsi untuk menghitung jumlah penitip per jenis barang
  const calculatePenitipPerJenis = (data) => {
    const result = {
      makanan: new Set(),
      alatMandi: new Set(),
      obat: new Set(),
      pakaian: new Set(),
      dokumen: new Set(),
      elektronik: new Set(),
      uang: new Set(),
      semuaPenitip: new Set()
    };

    data.forEach((pengunjung) => {
      if (pengunjung.tujuan === "Menitip barang" && pengunjung.barang_titipan?.length > 0) {
        result.semuaPenitip.add(pengunjung.id);
        
        pengunjung.barang_titipan.forEach((barang) => {
          switch (barang.jenis_barang) {
            case "Makanan":
              result.makanan.add(pengunjung.id);
              break;
            case "Alat mandi":
              result.alatMandi.add(pengunjung.id);
              break;
            case "Obat":
              result.obat.add(pengunjung.id);
              break;
            case "Pakaian":
              result.pakaian.add(pengunjung.id);
              break;
            case "Dokumen":
              result.dokumen.add(pengunjung.id);
              break;
            case "Elektronik":
              result.elektronik.add(pengunjung.id);
              break;
            case "Uang":
              result.uang.add(pengunjung.id);
              break;
          }
        });
      }
    });

    return {
      makanan: result.makanan.size,
      alatMandi: result.alatMandi.size,
      obat: result.obat.size,
      pakaian: result.pakaian.size,
      dokumen: result.dokumen.size,
      elektronik: result.elektronik.size,
      uang: result.uang.size,
      totalPenitip: result.semuaPenitip.size,
      penitipLebihDariSatu: Array.from(result.semuaPenitip).filter(id => {
        let count = 0;
        if (result.makanan.has(id)) count++;
        if (result.alatMandi.has(id)) count++;
        if (result.obat.has(id)) count++;
        if (result.pakaian.has(id)) count++;
        if (result.dokumen.has(id)) count++;
        if (result.elektronik.has(id)) count++;
        if (result.uang.has(id)) count++;
        return count > 1;
      }).length
    };
  };

  // Fungsi untuk menghitung rekap uang
  const calculateRekapUang = (data) => {
    let totalUang = 0;
    const penitipUang = new Set();

    data.forEach((pengunjung) => {
      if (pengunjung.tujuan === "Menitip barang") {
        pengunjung.barang_titipan?.forEach((barang) => {
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

  // FUNGSI REKAP PENGUNJUNG YANG DIPERBAIKI
  const calculateRekapPengunjung = (data) => {
    // Gunakan Set untuk melacak ID pengunjung yang sudah dihitung
    const processedIds = new Set();
    
    const result = data.reduce(
      (acc, curr) => {
        if (curr.tujuan === "Berkunjung") {
          // Hitung total orang per kunjungan
          const totalOrang = 1 + // Pengunjung utama
            (curr.pengikut_laki || 0) +
            (curr.pengikut_perempuan || 0) +
            (curr.pengikut_anak_laki || 0) +
            (curr.pengikut_anak_perempuan || 0) +
            (curr.pengikut_bayi || 0);
          
          // Cek apakah ID ini sudah diproses (untuk mendeteksi duplikasi)
          if (processedIds.has(curr.id)) {
            acc.duplikasi += totalOrang;
            console.warn(`Duplikasi data ditemukan untuk ID: ${curr.id}, Nama: ${curr.nama}`);
          } else {
            processedIds.add(curr.id);
          }
          
          // Tambahkan ke total keseluruhan
          acc.totalPengunjung += totalOrang;
          
          // Kategorisasi berdasarkan status warga binaan dengan pengecekan yang lebih ketat
          const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
          
          if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
            acc.narapidanaAktif += totalOrang;
          } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
            acc.tahanan += totalOrang;
          } else {
            // Status tidak dikenal
            acc.tidakDikenal += totalOrang;
            console.warn(`Status tidak dikenal untuk ID: ${curr.id}, Status: ${curr.warga_binaan?.keterangan}`);
          }
        }
        return acc;
      },
      { 
        narapidanaAktif: 0, 
        tahanan: 0, 
        tidakDikenal: 0,
        duplikasi: 0,
        totalPengunjung: 0 
      }
    );

    return result;
  };

  // Fungsi untuk menghitung rekap penitipan barang
  const calculateRekapPenitipan = (data) => {
    const processedIds = new Set();
    
    return data.reduce(
      (acc, curr) => {
        if (curr.tujuan === "Menitip barang") {
          const totalOrang = 1 + // Pengunjung utama
            (curr.pengikut_laki || 0) +
            (curr.pengikut_perempuan || 0) +
            (curr.pengikut_anak_laki || 0) +
            (curr.pengikut_anak_perempuan || 0) +
            (curr.pengikut_bayi || 0);
          
          if (processedIds.has(curr.id)) {
            acc.duplikasi += totalOrang;
          } else {
            processedIds.add(curr.id);
          }
          
          acc.totalPenitip += totalOrang;
          
          const keterangan = curr.warga_binaan?.keterangan?.toLowerCase() || "";
          
          if (keterangan.includes("tahanan aktif") || keterangan.includes("narapidana")) {
            acc.narapidanaAktif += totalOrang;
          } else if (keterangan.includes("tahanan") && !keterangan.includes("aktif")) {
            acc.tahanan += totalOrang;
          } else {
            acc.tidakDikenal += totalOrang;
          }
        }
        return acc;
      },
      { 
        narapidanaAktif: 0, 
        tahanan: 0, 
        tidakDikenal: 0,
        duplikasi: 0,
        totalPenitip: 0 
      }
    );
  };

  // Fungsi untuk verifikasi data
  const verifikasiData = (data) => {
    const semuaId = new Set();
    const duplikasiId = [];
    const statusTidakDikenal = [];
    const tujuanSelainBerkunjung = [];

    data.forEach((item) => {
      // Cek duplikasi ID
      if (semuaId.has(item.id)) {
        duplikasiId.push(item);
      } else {
        semuaId.add(item.id);
      }

      // Cek status tidak dikenal untuk tujuan Berkunjung
      if (item.tujuan === "Berkunjung") {
        const keterangan = item.warga_binaan?.keterangan?.toLowerCase() || "";
        if (!keterangan.includes("tahanan") && !keterangan.includes("narapidana")) {
          statusTidakDikenal.push(item);
        }
      }

      // Catat tujuan selain Berkunjung
      if (item.tujuan !== "Berkunjung") {
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

  // Filter data
  const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
    const value = pengunjung[searchBy]?.toLowerCase() || "";
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

  // Hitung semua total
  const totals = calculateTotals(filteredPengunjungs);
  const barangTitipan = calculateBarangTitipan(filteredPengunjungs);
  const rekapPengunjung = calculateRekapPengunjung(filteredPengunjungs);
  const rekapPenitipan = calculateRekapPenitipan(filteredPengunjungs);
  const rekapUang = calculateRekapUang(filteredPengunjungs);
  const rekapPenitipanPerJenis = calculatePenitipPerJenis(filteredPengunjungs);
  const verifikasi = verifikasiData(filteredPengunjungs);

  // Statistik tambahan
  const statistikPenitipan = {
    totalPenitipUnik: rekapPenitipanPerJenis.totalPenitip,
    totalJumlahJenis: rekapPenitipanPerJenis.makanan + 
                      rekapPenitipanPerJenis.alatMandi + 
                      rekapPenitipanPerJenis.obat + 
                      rekapPenitipanPerJenis.pakaian + 
                      rekapPenitipanPerJenis.dokumen + 
                      rekapPenitipanPerJenis.elektronik + 
                      rekapPenitipanPerJenis.uang,
    penitipGanda: rekapPenitipanPerJenis.penitipLebihDariSatu
  };

  // Log untuk debugging
  console.log("VERIFIKASI DATA:");
  console.log("Total data:", verifikasi.totalData);
  console.log("Data unik:", verifikasi.totalUnik);
  console.log("Duplikasi:", verifikasi.duplikasi);
  console.log("Status tidak dikenal:", verifikasi.statusTidakDikenal);
  console.log("Tujuan selain Berkunjung:", verifikasi.tujuanSelainBerkunjung);
  
  console.log("\nREKAP PENGUNJUNG:");
  console.log("Narapidana Aktif:", rekapPengunjung.narapidanaAktif);
  console.log("Tahanan:", rekapPengunjung.tahanan);
  console.log("Tidak Dikenal:", rekapPengunjung.tidakDikenal);
  console.log("Duplikasi:", rekapPengunjung.duplikasi);
  console.log("Total:", rekapPengunjung.totalPengunjung);
  console.log("Verifikasi:", rekapPengunjung.narapidanaAktif + rekapPengunjung.tahanan + rekapPengunjung.tidakDikenal, "=", rekapPengunjung.totalPengunjung);

  // Fungsi untuk memformat rentang tanggal
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
      return "Tanggal tidak tersedia";
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

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <NavbarWbp />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Laporan Kunjungan
        </h1>

        {/* Form Pencarian dan Tombol Export */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
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
              <option value="nama">Nama</option>
              <option value="warga_binaan.nama">Nama Warga Binaan</option>
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
        ) : (
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
                    rekapUang,
                    rekapPenitipanPerJenis,
                    statistikPenitipan,
                    verifikasi,
                    startDate,
                    endDate,
                    pdfFormData
                  }} />
                </PDFViewer>
              </div>
            </div>
          </div>
        )}

        {/* Tabel Utama */}
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
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
              {filteredPengunjungs.map((pengunjung) => {
                const isDuplikat = verifikasi.daftarDuplikasi?.some(d => d.id === pengunjung.id);
                const statusTidakDikenal = verifikasi.daftarStatusTidakDikenal?.some(d => d.id === pengunjung.id);
                
                return (
                  <tr 
                    key={pengunjung.id} 
                    className={`hover:bg-gray-50 ${
                      isDuplikat ? 'bg-yellow-50' : 
                      statusTidakDikenal ? 'bg-red-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">{pengunjung.warga_binaan?.nama || "-"}</td>
                    <td className="px-6 py-4">{pengunjung.nama}</td>
                    <td className="px-6 py-4 text-center">{pengunjung.tujuan || "-"}</td>
                    <td className="px-6 py-4 text-center">
                      {pengunjung.warga_binaan?.keterangan || "-"}
                      {statusTidakDikenal && pengunjung.tujuan === "Berkunjung" && (
                        <span className="ml-2 text-red-500 text-xs">(❌ tidak dikenal)</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {pengunjung.tujuan === "Berkunjung" ? (pengunjung.pengikut_laki || 0) + 1 : (pengunjung.pengikut_laki || 0)}
                    </td>
                    <td className="px-6 py-4 text-center">{pengunjung.pengikut_perempuan || 0}</td>
                    <td className="px-6 py-4 text-center">{pengunjung.pengikut_anak_laki || 0}</td>
                    <td className="px-6 py-4 text-center">{pengunjung.pengikut_anak_perempuan || 0}</td>
                    <td className="px-6 py-4 text-center">{pengunjung.pengikut_bayi || 0}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-100 font-semibold">
              <tr>
                <td className="px-6 py-4" colSpan="4">Total</td>
                <td className="px-6 py-4 text-center">{totals.laki}</td>
                <td className="px-6 py-4 text-center">{totals.perempuan}</td>
                <td className="px-6 py-4 text-center">{totals.anakLaki}</td>
                <td className="px-6 py-4 text-center">{totals.anakPerempuan}</td>
                <td className="px-6 py-4 text-center">{totals.bayi}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Rekapan Data dengan Verifikasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Rekap Pengunjung</h2>
              <div className="space-y-2">
                <p>Total Pengunjung: {rekapPengunjung.totalPengunjung} orang</p>
                <p className="ml-4 text-green-600">✓ Narapidana Aktif: {rekapPengunjung.narapidanaAktif} orang</p>
                <p className="ml-4 text-blue-600">✓ Tahanan: {rekapPengunjung.tahanan} orang</p>
                {rekapPengunjung.tidakDikenal > 0 && (
                  <p className="ml-4 text-red-600 font-semibold">❌ Status Tidak Dikenal: {rekapPengunjung.tidakDikenal} orang</p>
                )}
                {rekapPengunjung.duplikasi > 0 && (
                  <p className="ml-4 text-yellow-600 font-semibold">⚠️ Data Duplikasi: {rekapPengunjung.duplikasi} orang</p>
                )}
                <div className="border-t pt-2 mt-2">
                  <p className="font-semibold">Verifikasi: {rekapPengunjung.narapidanaAktif + rekapPengunjung.tahanan + rekapPengunjung.tidakDikenal} = {rekapPengunjung.totalPengunjung}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Rekap Penitipan Barang</h2>
              <div className="space-y-2">
                <p>Total Penitip (dengan pengikut): {rekapPenitipan.totalPenitip} orang</p>
                <p className="ml-4">- Narapidana Aktif: {rekapPenitipan.narapidanaAktif} orang</p>
                <p className="ml-4">- Tahanan: {rekapPenitipan.tahanan} orang</p>
                {rekapPenitipan.tidakDikenal > 0 && (
                  <p className="ml-4 text-red-600">- Tidak Dikenal: {rekapPenitipan.tidakDikenal} orang</p>
                )}
                <div className="border-t pt-2 mt-2">
                  <p className="font-medium text-green-600">Jumlah Penitip Unik: {rekapPenitipanPerJenis.totalPenitip} orang</p>
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

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Jumlah Penitip per Jenis Barang</h2>
              <div className="space-y-2">
                <p>Makanan: {rekapPenitipanPerJenis.makanan} orang</p>
                <p>Alat Mandi: {rekapPenitipanPerJenis.alatMandi} orang</p>
                <p>Obat: {rekapPenitipanPerJenis.obat} orang</p>
                <p>Pakaian: {rekapPenitipanPerJenis.pakaian} orang</p>
                <p>Dokumen: {rekapPenitipanPerJenis.dokumen} orang</p>
                <p>Elektronik: {rekapPenitipanPerJenis.elektronik} orang</p>
                <p>Uang: {rekapPenitipanPerJenis.uang} orang</p>
                <div className="border-t pt-2 mt-2">
                  <p className="font-semibold">Total Transaksi: {statistikPenitipan.totalJumlahJenis}</p>
                  <p className="text-sm text-orange-600">Penitip dengan >1 jenis: {statistikPenitipan.penitipGanda} orang</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Barang Titipan (Jumlah Item)</h2>
              <div className="space-y-2">
                <p>Makanan: {barangTitipan.makan}</p>
                <p>Alat Mandi: {barangTitipan.alatMandi}</p>
                <p>Obat: {barangTitipan.obat}</p>
                <p>Uang: {formatRupiah(barangTitipan.uang)}</p>
                <p>Pakaian: {barangTitipan.pakaian}</p>
                <p>Dokumen: {barangTitipan.dokumen}</p>
                <p>Elektronik: {barangTitipan.elektronik}</p>
                <p className="pt-2 border-t font-semibold">Total Item: {barangTitipan.total}</p>
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
      </div>
    </>
  );
};

export default Report;