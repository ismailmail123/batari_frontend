// import React from "react";
// import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
// import logo from "../../assets/logokemenimipas.png";
// import logoKunci from "../../assets/logo_kunci.jpg";

// const styles = StyleSheet.create({
//   page: {
//     paddingTop: 45,
//     paddingBottom: 45,
//     paddingLeft: 60,
//     paddingRight: 60,
//     fontSize: 11,
//     fontFamily: "Times-Roman",
//     lineHeight: 1.5,
//   },

//   /* =========================
//       KOP SURAT
//   ========================= */
//   kopContainer: {
//     flexDirection: "row",
//     borderBottomWidth: 2,
//     borderBottomColor: "#000",
//     paddingBottom: 8,
//     marginBottom: 20,
//     lineHeight: 0.8,
//     width: "100%",
//   },

//   logo: {
//     width: 70,
//     height: 70,
//     marginRight: 12,
//   },

//   kopText: {
//     flex: 1,
//     textAlign: "center",
//   },

//   kopTitle: {
//     fontFamily: "Times-Bold",
//     fontSize: 12,
//     marginBottom: 2,
//     letterSpacing: 0.3,
//     textTransform: "uppercase",
//   },

//   kopAlamat: {
//     fontSize: 10,
//     marginTop: 0,
//     fontFamily: "Times-Roman",
//   },

//   kopAlamat2: {
//     fontSize: 10,
//     fontFamily: "Times-Roman",
//   },

//   /* =========================
//       SURAT PENGANTAR
//   ========================= */
//   nomorSurat: {
//     textAlign: "center",
//     marginBottom: 25,
//   },

//   nomorSuratText: {
//     fontFamily: "Times-Bold",
//     fontSize: 12,
//     textTransform: "uppercase",
//   },

//   tujuanSurat: {
//     marginBottom: 20,
//   },

//   tujuanText: {
//     fontSize: 11,
//     marginBottom: 2,
//   },

//   tujuanTextBold: {
//     fontFamily: "Times-Bold",
//     fontSize: 11,
//   },

//   /* =========================
//       TABLE SURAT PENGANTAR
//   ========================= */
//   tableContainer: {
//     marginTop: 20,
//     marginBottom: 30,
//   },

//   table: {
//     display: "flex",
//     width: "100%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "#000",
//   },

//   tableRow: {
//     flexDirection: "row",
//     minHeight: 30,
//   },

//   tableHeader: {
//     backgroundColor: "#f0f0f0",
//     fontFamily: "Times-Bold",
//     borderBottomWidth: 1,
//     borderBottomColor: "#000",
//   },

//   tableColNo: {
//     width: "10%",
//     borderRightWidth: 1,
//     borderRightColor: "#000",
//     padding: 8,
//     textAlign: "center",
//   },

//   tableColJenis: {
//     width: "60%",
//     borderRightWidth: 1,
//     borderRightColor: "#000",
//     padding: 8,
//     textAlign: "center",
//   },

//   tableColBanyak: {
//     width: "15%",
//     borderRightWidth: 1,
//     borderRightColor: "#000",
//     padding: 8,
//     textAlign: "center",
//   },

//   tableColKet: {
//     width: "15%",
//     padding: 8,
//     textAlign: "center",
//   },

//   tableContentLeft: {
//     padding: 8,
//     textAlign: "left",
//   },

//   /* =========================
//       JUDUL LAPORAN
//   ========================= */
//   titleContainer: {
//     textAlign: "center",
//     marginBottom: 25,
//     // marginTop: 30,
//   },

//   title: {
//     fontFamily: "Times-Bold",
//     fontSize: 11,
//     marginBottom: 3,
//     textTransform: "uppercase",
//     letterSpacing: 0.5,
//   },

//   subtitle: {
//     fontFamily: "Times-Bold",
//     fontSize: 12,
//     marginTop: 5,
//   },

//   /* =========================
//       SECTION HEADINGS
//   ========================= */
//   section: {
//     marginTop: 10,
//     marginBottom: 8,
//   },

//   sectionTitle: {
//     fontFamily: "Times-Bold",
//     fontSize: 10,
//     marginBottom: 6,
//     marginLeft: 0,
//     textTransform: "uppercase",
//   },

//   /* =========================
//       PARAGRAPHS & TEXT
//   ========================= */
//   paragraphContainer: {
//     marginLeft: 13,
//     marginRight: 0,
//   },

//   paragraph: {
//     textAlign: "justify",
//     marginBottom: 8,
//     lineHeight: 1.5,
//     fontSize: 11,
//     textIndent: 20,
//   },

//   listItem: {
//     marginLeft: 30,
//     marginBottom: 4,
//     textAlign: "justify",
//     fontSize: 11,
//   },

//   subListItem: {
//     marginLeft: 25,
//     marginBottom: 3,
//     textAlign: "justify",
//     fontSize: 11,
//   },

//   /* =========================
//       DATA SECTION
//   ========================= */
//   dataContainer: {
//     marginLeft: 18,
//     marginTop: 5,
//     marginBottom: 8,
//   },

//   dataRow: {
//     flexDirection: "row",
//     marginLeft: 30,
//     marginBottom: 3,
//     fontSize: 11,
//   },

//   dataLabel: {
//     width: 80,
//     fontFamily: "Times-Roman",
//   },

//   dataValue: {
//     flex: 1,
//   },

//   dataSubTitle: {
//     // fontFamily: "Times-Bold",
//     marginLeft: 18,
//     marginBottom: 4,
//     marginTop: 6,
//     fontSize: 11,
//   },

//   /* =========================
//       TANDA TANGAN - 3 GRID
//   ========================= */
//   signatureContainer: {
//     marginTop: 50,
//     width: "100%",
//     flexDirection: "row",
//   },

//   signatureGrid1: {
//     width: "33.33%",
//     marginTop: 50,
//     marginLeft: 30,
//   },

//   signatureGrid2: {
//     width: "33.33%",
//   },

//   signatureGrid3: {
//     width: "33.33%",
//     alignItems: "flex-start",
//   },

//   signatureTitle: {
//     fontSize: 11,
//     fontFamily: "Times-Roman",
//     marginBottom: 60,
//   },

//   signatureName: {
//     fontFamily: "Times-Bold",
//     fontSize: 11,
//   },

//   signatureNIP: {
//     fontSize: 10,
//     fontFamily: "Times-Roman",
//     marginTop: 2,
//   },

//   /* =========================
//       FOOTER
//   ========================= */
//   pageNumber: {
//     position: "absolute",
//     fontSize: 9,
//     bottom: 25,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });

// // Fungsi untuk memformat tanggal dengan Date.now()
// const formatTanggal = (timestamp) => {
//   const date = new Date(timestamp);
  
//   const daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
//   const daftarBulan = [
//     "Januari", "Februari", "Maret", "April", "Mei", "Juni",
//     "Juli", "Agustus", "September", "Oktober", "November", "Desember"
//   ];
  
//   const hari = daftarHari[date.getDay()];
//   const tanggal = date.getDate();
//   const bulan = daftarBulan[date.getMonth()];
//   const tahun = date.getFullYear();
  
//   return {
//     hari: hari,
//     tanggal: tanggal,
//     bulan: bulan,
//     tahun: tahun,
//     lengkap: `${hari}, ${tanggal} ${bulan} ${tahun}`,
//     tanggalBulanTahun: `${tanggal} ${bulan} ${tahun}`,
//     tahunOnly: tahun
//   };
// };

// const PDFLaporan = ({ data }) => {
//   // Menggunakan Date.now() untuk mendapatkan timestamp hari ini
//   const now = Date.now();
//   const tanggal = formatTanggal(now);
  
//   const {
//     totals = {},
//     barangTitipan = {},
//     filteredPengunjungs = [],
//     petugas = "Kepala Rutan",
//     namaPenandatangan = "Ambo Asse A.",
//     nipPenandatangan = "19750615 200112 1 002",
//   } = data;

//   const totalPengunjung =
//     (totals.laki || 0) +
//     (totals.perempuan || 0) +
//     (totals.anakLaki || 0) +
//     (totals.anakPerempuan || 0) +
//     (totals.bayi || 0);

//   return (
//     <Document>
//       {/* HALAMAN 1: SURAT PENGANTAR */}
//       <Page size="A4" style={styles.page}>
//         {/* KOP SURAT - Sesuai halaman kedua */}
//         <View style={styles.kopContainer}>
//           <Image src={logo} style={styles.logo} />
//           <View style={styles.kopText}>
//             <Text style={styles.kopTitle}>
//               KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI
//             </Text>
//             <Text style={styles.kopTitle}>
//               DIREKTORAT JENDERAL PEMASYARAKATAN
//             </Text>
//             <Text style={styles.kopTitle}>
//               KANTOR WILAYAH SULAWESI SELATAN
//             </Text>
//             <Text style={styles.kopTitle}>
//               RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
//             </Text>
//             <Text style={styles.kopAlamat}>
//               Jl. Mawar No. 9 Kel. Pallantikan, Kec. Bantaeng, Kab. Bantaeng
//             </Text>
//             <Text style={styles.kopAlamat}>
//               Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com
//             </Text>
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "flex-end", marginBottom: 20 }}>
//           <Text style={{ fontSize: 11 }}>
//             {tanggal.tanggalBulanTahun}
//           </Text>
//         </View>

//         {/* NOMOR SURAT */}
//         <View style={styles.nomorSurat}>
//           <Text style={styles.nomorSuratText}>
//             SURAT PENGANTAR
//           </Text>
//           <Text style={styles.nomorSuratText}>
//             Nomor : W24.PAS.PAS17-PK.08.01.503
//           </Text>
//         </View>

//         {/* TUJUAN SURAT - Sesuai gambar */}
//         <View style={styles.tujuanSurat}>
//           <Text style={styles.tujuanText}>Yth. Kepala Kantor Wilayah Direktorat Jenderal Pemasyarakatan Sulawesi Selatan</Text>
//           <Text style={styles.tujuanText}>di -</Text>
//           <Text style={[styles.tujuanTextBold, { marginLeft: 20 }]}>M a k a s s a r</Text>
//         </View>

//         {/* TABLE SURAT PENGANTAR - Hanya 1 baris */}
//         <View style={styles.tableContainer}>
//           <View style={styles.table}>
//             {/* Table Header */}
//             <View style={[styles.tableRow, styles.tableHeader]}>
//               <View style={styles.tableColNo}>
//                 <Text>NO</Text>
//               </View>
//               <View style={styles.tableColJenis}>
//                 <Text>Jenis surat yang dikirim</Text>
//               </View>
//               <View style={styles.tableColBanyak}>
//                 <Text>Banyaknya</Text>
//               </View>
//               <View style={styles.tableColKet}>
//                 <Text>Keterangan</Text>
//               </View>
//             </View>

//             {/* Table Row 1 - Satu baris saja */}
//             <View style={styles.tableRow}>
//               <View style={styles.tableColNo}>
//                 <Text>1.</Text>
//               </View>
//               <View style={styles.tableColJenis}>
//                 <Text style={styles.tableContentLeft}>
//                   Laporan Kegiatan Layanan Kunjungan Hari Raya Idul Fitri Tahun 2026 pada Rumah Tahanan Negara Kelas IIB Bantaeng.
//                 </Text>
//               </View>
//               <View style={styles.tableColBanyak}>
//                 <Text>1 (Satu) Berkas.</Text>
//               </View>
//               <View style={styles.tableColKet}>
//                 <Text>Dikirim dengan hormat untuk digunakan semestinya.</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* TANDA TANGAN SURAT PENGANTAR */}
//         {/* <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 20 }}>
//           <View style={{ width: "45%" }}>            
//             <Text style={{ fontSize: 11, marginBottom: 60 }}>
//               Kepala Rumah Tahanan Negara{'\n'}Kelas IIB Bantaeng,
//             </Text>
//             <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 5 }}>
//               Ambo Asse A.
//             </Text>            
//           </View>
//         </View> */}
//         {/* TANDA TANGAN LAPORAN */}
//         <View style={styles.signatureContainer}>
//           <View style={styles.signatureGrid1}>
//             <Text style={styles.signatureTitle}>{"${ttd}"}</Text>
//           </View>
          
//           <View style={styles.signatureGrid2} />
          
//           <View style={styles.signatureGrid3}>
//             <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Kepala Rutan Kelas IIB Bantaeng,</Text>
//             <Image src={logoKunci} style={{ width: 140, height: 60, marginBottom: 10 }} />
//             <Text style={styles.signatureName}>{namaPenandatangan}</Text>
//           </View>
//         </View>

//         {/* PAGE NUMBER */}
//         <Text
//           style={styles.pageNumber}
//           render={({ pageNumber, totalPages }) => `Halaman ${pageNumber} dari ${totalPages}`}
//           fixed
//         />
//       </Page>

//       {/* HALAMAN 2: LAPORAN UTAMA */}
//       <Page size="A4" style={styles.page}>
//         {/* KOP SURAT */}
//         <View style={styles.kopContainer}>
//           <Image src={logo} style={styles.logo} />
//           <View style={styles.kopText}>
//             <Text style={styles.kopTitle}>
//               KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI
//             </Text>
//             <Text style={styles.kopTitle}>
//               DIREKTORAT JENDERAL PEMASYARAKATAN
//             </Text>
//             <Text style={styles.kopTitle}>
//               KANTOR WILAYAH SULAWESI SELATAN
//             </Text>
//             <Text style={styles.kopTitle}>
//               RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
//             </Text>
//             <Text style={styles.kopAlamat}>
//               Jl. Mawar No. 9 Kel. Pallantikan, Kec. Bantaeng, Kab. Bantaeng
//             </Text>
//             <Text style={styles.kopAlamat}>
//               Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com
//             </Text>
//           </View>
//         </View>

//         {/* JUDUL LAPORAN */}
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>LAPORAN</Text>
//           <Text style={styles.title}>TENTANG</Text>
//           <Text style={styles.title}>PELAKSANAAN KUNJUNGAN HARI RAYA IDUL FITRI 1447 HIJRIAH</Text>
//           <Text style={styles.title}>PADA RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</Text>
//         </View>

//         {/* A. PENDAHULUAN */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>A. PENDAHULUAN</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Pelayanan publik pada dasarnya menyangkut aspek kehidupan yang sangat luas.
//               Dalam kehidupan bernegara, pemerintah memiliki fungsi memberikan pelayanan
//               publik yang diperlukan oleh masyarakat, mulai dari pelayanan dalam bentuk
//               pengaturan ataupun pelayanan lainnya dalam rangka memenuhi kebutuhan
//               masyarakat di berbagai bidang.
//             </Text>
//             <Text style={styles.paragraph}>
//               Pelayanan merupakan tugas utama yang hakiki dari sosok aparatur sebagai
//               abdi negara dan abdi masyarakat. Tugas ini telah jelas digariskan dalam
//               Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 alinea keempat
//               yang meliputi empat aspek pelayanan pokok aparatur terhadap masyarakat.
//             </Text>
//             <Text style={styles.paragraph}>
//               Indonesia sebagai negara hukum sangat menghormati penegakan Hak Asasi
//               Manusia. Upaya penegakan hak asasi tersebut juga dilaksanakan di
//               lembaga pemasyarakatan. Salah satu hak narapidana adalah menerima
//               kunjungan dari keluarga, terutama pada momen hari raya keagamaan.
//             </Text>
//           </View>
//         </View>

//         {/* B. MAKSUD DAN TUJUAN */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>B. MAKSUD DAN TUJUAN</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Melaksanakan kegiatan layanan kunjungan Hari Raya Idul Fitri
//               1 Syawal 1447 Hijriah Tahun {tanggal.tahunOnly} pada Rumah Tahanan Negara Kelas IIB Bantaeng
//               guna memberikan kesempatan kepada keluarga warga binaan untuk bersilaturahmi
//               dan memberikan dukungan moril di hari yang fitri.
//             </Text>
//           </View>
//         </View>

//         {/* C. RUANG LINGKUP */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>C. RUANG LINGKUP</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Ruang lingkup laporan ini mencakup pelaksanaan kegiatan layanan
//               kunjungan Hari Raya Idul Fitri Tahun {tanggal.tahunOnly} pada Rumah Tahanan Negara Kelas IIB
//               Bantaeng, yang meliputi data pengunjung, barang titipan, serta jumlah warga
//               binaan yang dikunjungi.
//             </Text>
//           </View>
//         </View>

//         {/* D. DASAR HUKUM */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>D. DASAR HUKUM</Text>
//           <Text style={styles.listItem}>1. Undang-Undang RI Nomor 22 Tahun 2022 tentang Pemasyarakatan;</Text>
//           <Text style={styles.listItem}>2. Peraturan Pemerintah Nomor 32 Tahun 1999 tentang Hak Warga Binaan;</Text>
//           <Text style={styles.listItem}>3. Peraturan Menteri Hukum dan HAM Nomor 18 Tahun 2015 tentang Organisasi dan Tata Kerja Rutan;</Text>
//           <Text style={styles.listItem}>4. Surat Edaran Dirjen PAS Nomor: PAS-394.PK.01.04.03 Tahun {tanggal.tahunOnly} tentang Layanan Kunjungan Idul Fitri 1447 H.</Text>
//         </View>

//         {/* E. KEGIATAN YANG DILAKSANAKAN */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>E. KEGIATAN YANG DILAKSANAKAN</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Pada hari {tanggal.hari}, {tanggal.tanggalBulanTahun} pukul 09.00 WITA sampai dengan 14.00 WITA telah
//               dilaksanakan kegiatan layanan kunjungan Hari Raya Idul Fitri 1447 H
//               kepada warga binaan pemasyarakatan di Rumah Tahanan Negara Kelas IIB Bantaeng.
//               Kegiatan berlangsung di ruang kunjungan utama dengan tetap memperhatikan
//               protokol keamanan dan ketertiban.
//             </Text>
//           </View>

//           <View style={styles.dataContainer}>
//             <Text style={styles.dataSubTitle}>1. Jumlah Pengunjung</Text>
//             <View style={styles.dataRow}>
//               <Text style={styles.dataLabel}>Laki-laki dewasa</Text>
//               <Text style={styles.dataValue}>: {totals.laki || 0} orang</Text>
//             </View>
//             <View style={styles.dataRow}>
//               <Text style={styles.dataLabel}>Perempuan dewasa</Text>
//               <Text style={styles.dataValue}>: {totals.perempuan || 0} orang</Text>
//             </View>
//             <View style={styles.dataRow}>
//               <Text style={styles.dataLabel}>Anak laki-laki</Text>
//               <Text style={styles.dataValue}>: {totals.anakLaki || 0} orang</Text>
//             </View>
//             <View style={styles.dataRow}>
//               <Text style={styles.dataLabel}>Anak perempuan</Text>
//               <Text style={styles.dataValue}>: {totals.anakPerempuan || 0} orang</Text>
//             </View>
//             <View style={styles.dataRow}>
//               <Text style={styles.dataLabel}>Bayi</Text>
//               <Text style={styles.dataValue}>: {totals.bayi || 0} orang</Text>
//             </View>
//             <View style={[styles.dataRow, { marginTop: 2 }]}>
//               <Text style={[styles.dataLabel, { fontFamily: "Times-Bold" }]}>Total</Text>
//               <Text style={[styles.dataValue, { fontFamily: "Times-Bold" }]}>: {totalPengunjung} orang</Text>
//             </View>

//             {/* BAGIAN JUMLAH PENGAMANAN - Sesuai gambar */}
//             <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>2. Jumlah Pengamanan</Text>
            
//             <Text style={[styles.dataLabel, { marginLeft: 30, marginTop: 4, fontFamily: "Times-Bold" }]}>1) Internal</Text>
//             <View style={[styles.dataRow, { marginLeft: 50 }]}>
//               <Text style={[styles.dataLabel, { width: 140 }]}>- Petugas Layanan Kunjungan</Text>
//               <Text style={styles.dataValue}>: {totals.petugasLayanan || 10} Orang</Text>
//             </View>
//             <View style={[styles.dataRow, { marginLeft: 50 }]}>
//               <Text style={[styles.dataLabel, { width: 140 }]}>- Petugas Piket Pengamanan</Text>
//               <Text style={styles.dataValue}>: {totals.petugasPiket || 4} Orang</Text>
//             </View>
//             <View style={[styles.dataRow, { marginLeft: 50 }]}>
//               <Text style={[styles.dataLabel, { width: 140 }]}>- Petugas KANWIL</Text>
//               <Text style={styles.dataValue}>: {totals.petugasKanwil || 3} Orang</Text>
//             </View>

//             <Text style={[styles.dataLabel, { marginLeft: 30, marginTop: 4, fontFamily: "Times-Bold" }]}>2) Eksternal</Text>
//             <View style={[styles.dataRow, { marginLeft: 50 }]}>
//               <Text style={[styles.dataLabel, { width: 140 }]}>- TNI</Text>
//               <Text style={styles.dataValue}>: {totals.tni || 0} Orang</Text>
//             </View>
//             <View style={[styles.dataRow, { marginLeft: 50 }]}>
//               <Text style={[styles.dataLabel, { width: 140 }]}>- POLRI</Text>
//               <Text style={styles.dataValue}>: {totals.polri || 0} Orang</Text>
//             </View>

//             <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>3. Kejadian yang Menonjol</Text>
//             <View style={[styles.dataRow, { marginLeft: 30 }]}>
//               <Text style={styles.dataValue}>{totals.kejadianMenonjol || "Tidak ada kejadian yang menonjol selama kegiatan kunjungan berlangsung."}</Text>
//             </View>

//             <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>4. Kunjungan Hari Ke-2 dimulai Pukul 09.00-14.00 WITA.</Text>

//             <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>
//               5. Jumlah WBP yang dikunjungi : {filteredPengunjungs.length} orang
//             </Text>

//             <Text style={[styles.paragraph, { marginTop: 8, fontFamily: "Times-Bold", textIndent: 0 }]}>
//               **Secara keseluruhan, situasi RUTAN Kelas IIB Bantaeng berjalan Aman, Tertib dan Kondusif.**
//             </Text>
//           </View>
//         </View>

//         {/* F. HASIL YANG DICAPAI */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>F. HASIL YANG DICAPAI</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Pelaksanaan kegiatan layanan kunjungan Hari Raya Idul Fitri 1447 H
//               berjalan dengan baik, aman, lancar, dan kondusif. Kegiatan ini menjadi
//               sarana bagi warga binaan untuk menjalin silaturahmi dengan keluarga
//               serta mendapatkan dukungan moral dan spiritual di hari yang fitri.
//             </Text>
//             <Text style={styles.paragraph}>
//               Antusiasme keluarga warga binaan cukup tinggi, tercermin dari jumlah
//               pengunjung yang hadir. Seluruh rangkaian kegiatan dapat dilaksanakan
//               sesuai dengan prosedur dan jadwal yang telah ditetapkan pada {tanggal.tanggalBulanTahun}.
//             </Text>
//           </View>
//         </View>

//         {/* G. KESIMPULAN DAN SARAN */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>G. KESIMPULAN DAN SARAN</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Kegiatan layanan kunjungan Hari Raya Idul Fitri 1447 H pada Rumah Tahanan
//               Negara Kelas IIB Bantaeng yang dilaksanakan pada {tanggal.tanggalBulanTahun} berjalan 
//               dengan lancar, tertib, aman, dan kondusif serta memenuhi hak-hak warga 
//               binaan untuk menerima kunjungan keluarga.
//             </Text>
//           </View>
//         </View>

//         {/* H. PENUTUP */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>H. PENUTUP</Text>
//           <View style={styles.paragraphContainer}>
//             <Text style={styles.paragraph}>
//               Demikian laporan pelaksanaan kegiatan layanan kunjungan Hari Raya Idul Fitri
//               1447 H ini dibuat dengan sebenar-benarnya untuk dipergunakan sebagaimana
//               mestinya. Atas perhatian dan kerjasama semua pihak, kami ucapkan terima kasih.
//             </Text>
//           </View>
//         </View>

//         {/* TANDA TANGAN LAPORAN */}
//         <View style={styles.signatureContainer}>
//           <View style={styles.signatureGrid1}>
//             <Text style={styles.signatureTitle}>{"${ttd}"}</Text>
//           </View>
          
//           <View style={styles.signatureGrid2} />
          
//           <View style={styles.signatureGrid3}>
//             <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Dikeluarkan di : Bantaeng</Text>
//             <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Pada Tanggal   : {tanggal.tanggalBulanTahun}</Text>
//             <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Kepala Rutan Kelas IIB Bantaeng,</Text>
//             <Image src={logoKunci} style={{ width: 140, height: 60, marginBottom: 10 }} />
//             <Text style={styles.signatureName}>{namaPenandatangan}</Text>
//           </View>
//         </View>

//         {/* PAGE NUMBER */}
//         <Text
//           style={styles.pageNumber}
//           render={({ pageNumber, totalPages }) => `Halaman ${pageNumber} dari ${totalPages}`}
//           fixed
//         />
//       </Page>
//     </Document>
//   );
// };

// export default PDFLaporan;


import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../assets/logokemenimipas.png";
import logoKunci from "../../assets/logo_kunci.jpg";

const styles = StyleSheet.create({
  page: {
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 11,
    fontFamily: "Times-Roman",
    lineHeight: 1.5,
  },

  /* =========================
      KOP SURAT
  ========================= */
  kopContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 8,
    marginBottom: 20,
    lineHeight: 0.8,
    width: "100%",
  },

  logo: {
    width: 70,
    height: 70,
    marginRight: 12,
  },

  kopText: {
    flex: 1,
    textAlign: "center",
  },

  kopTitle: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    marginBottom: 2,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },

  kopAlamat: {
    fontSize: 10,
    marginTop: 0,
    fontFamily: "Times-Roman",
  },

  kopAlamat2: {
    fontSize: 10,
    fontFamily: "Times-Roman",
  },

  /* =========================
      SURAT PENGANTAR
  ========================= */
  nomorSurat: {
    textAlign: "center",
    marginBottom: 25,
  },

  nomorSuratText: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    textTransform: "uppercase",
  },

  tujuanSurat: {
    marginBottom: 20,
  },

  tujuanText: {
    fontSize: 11,
    marginBottom: 2,
  },

  tujuanTextBold: {
    fontFamily: "Times-Bold",
    fontSize: 11,
  },

  /* =========================
      TABLE SURAT PENGANTAR
  ========================= */
  tableContainer: {
    marginTop: 20,
    marginBottom: 30,
  },

  table: {
    display: "flex",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },

  tableRow: {
    flexDirection: "row",
    minHeight: 30,
  },

  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontFamily: "Times-Bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },

  tableColNo: {
    width: "10%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    padding: 8,
    textAlign: "center",
  },

  tableColJenis: {
    width: "60%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    padding: 8,
    textAlign: "center",
  },

  tableColBanyak: {
    width: "15%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    padding: 8,
    textAlign: "center",
  },

  tableColKet: {
    width: "15%",
    padding: 8,
    textAlign: "center",
  },

  tableContentLeft: {
    padding: 8,
    textAlign: "left",
  },

  /* =========================
      JUDUL LAPORAN
  ========================= */
  titleContainer: {
    textAlign: "center",
    marginBottom: 25,
  },

  title: {
    fontFamily: "Times-Bold",
    fontSize: 11,
    marginBottom: 3,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  subtitle: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    marginTop: 5,
  },

  /* =========================
      SECTION HEADINGS
  ========================= */
  section: {
    marginTop: 10,
    marginBottom: 8,
  },

  sectionTitle: {
    fontFamily: "Times-Bold",
    fontSize: 10,
    marginBottom: 6,
    marginLeft: 0,
    textTransform: "uppercase",
  },

  /* =========================
      PARAGRAPHS & TEXT
  ========================= */
  paragraphContainer: {
    marginLeft: 13,
    marginRight: 0,
  },

  paragraph: {
    textAlign: "justify",
    marginBottom: 8,
    lineHeight: 1.5,
    fontSize: 11,
    textIndent: 20,
  },

  listItem: {
    marginLeft: 30,
    marginBottom: 4,
    textAlign: "justify",
    fontSize: 11,
  },

  subListItem: {
    marginLeft: 25,
    marginBottom: 3,
    textAlign: "justify",
    fontSize: 11,
  },

  /* =========================
      DATA SECTION
  ========================= */
  dataContainer: {
    marginLeft: 18,
    marginTop: 5,
    marginBottom: 8,
  },

  dataRow: {
    flexDirection: "row",
    marginLeft: 30,
    marginBottom: 3,
    fontSize: 11,
  },

  dataLabel: {
    width: 80,
    fontFamily: "Times-Roman",
  },

  dataValue: {
    flex: 1,
  },

  dataSubTitle: {
    marginLeft: 18,
    marginBottom: 4,
    marginTop: 6,
    fontSize: 11,
  },

  /* =========================
      TANDA TANGAN - 3 GRID
  ========================= */
  signatureContainer: {
    marginTop: 50,
    width: "100%",
    flexDirection: "row",
  },

  signatureGrid1: {
    width: "33.33%",
    marginTop: 50,
    marginLeft: 30,
  },

  signatureGrid2: {
    width: "33.33%",
  },

  signatureGrid3: {
    width: "33.33%",
    alignItems: "flex-start",
  },

  signatureTitle: {
    fontSize: 11,
    fontFamily: "Times-Roman",
    marginBottom: 60,
  },

  signatureName: {
    fontFamily: "Times-Bold",
    fontSize: 11,
  },

  signatureNIP: {
    fontSize: 10,
    fontFamily: "Times-Roman",
    marginTop: 2,
  },

  /* =========================
      FOOTER
  ========================= */
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Fungsi untuk memformat tanggal dengan Date.now()
const formatTanggal = (timestamp) => {
  const date = new Date(timestamp);
  
  const daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const daftarBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  const hari = daftarHari[date.getDay()];
  const tanggal = date.getDate();
  const bulan = daftarBulan[date.getMonth()];
  const tahun = date.getFullYear();
  
  return {
    hari: hari,
    tanggal: tanggal,
    bulan: bulan,
    tahun: tahun,
    lengkap: `${hari}, ${tanggal} ${bulan} ${tahun}`,
    tanggalBulanTahun: `${tanggal} ${bulan} ${tahun}`,
    tahunOnly: tahun
  };
};

const PDFLaporan = ({ data }) => {
  // Menggunakan Date.now() untuk mendapatkan timestamp hari ini
  const now = Date.now();
  const tanggal = formatTanggal(now);
  
  const {
    totals = {},
    barangTitipan = {},
    filteredPengunjungs = [],
    petugas = "Kepala Rutan",
    namaPenandatangan = "Ambo Asse A.",
    nipPenandatangan = "19750615 200112 1 002",
    pdfFormData = {} // Data dari form input
  } = data;

  const totalPengunjung =
    (totals.laki || 0) +
    (totals.perempuan || 0) +
    (totals.anakLaki || 0) +
    (totals.anakPerempuan || 0) +
    (totals.bayi || 0);

  // Gunakan data dari form atau default
  const petugasLayanan = pdfFormData.petugasLayanan || totals.petugasLayanan || 10;
  const petugasPiket = pdfFormData.petugasPiket || totals.petugasPiket || 4;
  const petugasKanwil = pdfFormData.petugasKanwil || totals.petugasKanwil || 3;
  const polri = pdfFormData.polri || totals.polri || 0;
  const tni = pdfFormData.tni || totals.tni || 0;
  const kejadianMenonjol = pdfFormData.kejadianMenonjol || totals.kejadianMenonjol || "Tidak ada kejadian yang menonjol selama kegiatan kunjungan berlangsung.";
  const hariKunjungan = pdfFormData.hariKunjungan || "2";
  const jamKunjungan = pdfFormData.jamKunjungan || "09.00-14.00 WITA";
  const nomorSurat = pdfFormData.nomorSurat || "W24.PAS.PAS17-PK.08.01.503";

  return (
    <Document>
      {/* HALAMAN 1: SURAT PENGANTAR */}
      <Page size="A4" style={styles.page}>
        {/* KOP SURAT */}
        <View style={styles.kopContainer}>
          <Image src={logo} style={styles.logo} />
          <View style={styles.kopText}>
            <Text style={styles.kopTitle}>
              KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI
            </Text>
            <Text style={styles.kopTitle}>
              DIREKTORAT JENDERAL PEMASYARAKATAN
            </Text>
            <Text style={styles.kopTitle}>
              KANTOR WILAYAH SULAWESI SELATAN
            </Text>
            <Text style={styles.kopTitle}>
              RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
            </Text>
            <Text style={styles.kopAlamat}>
              Jl. Mawar No. 9 Kel. Pallantikan, Kec. Bantaeng, Kab. Bantaeng
            </Text>
            <Text style={styles.kopAlamat}>
              Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginBottom: 20 }}>
          <Text style={{ fontSize: 11 }}>
            {tanggal.tanggalBulanTahun}
          </Text>
        </View>

        {/* NOMOR SURAT */}
        <View style={styles.nomorSurat}>
          <Text style={styles.nomorSuratText}>
            SURAT PENGANTAR
          </Text>
          <Text style={styles.nomorSuratText}>
            Nomor : {nomorSurat}
          </Text>
        </View>

        {/* TUJUAN SURAT */}
        <View style={styles.tujuanSurat}>
          <Text style={styles.tujuanText}>Yth. Kepala Kantor Wilayah Direktorat Jenderal Pemasyarakatan Sulawesi Selatan</Text>
          <Text style={styles.tujuanText}>di -</Text>
          <Text style={[styles.tujuanTextBold, { marginLeft: 20 }]}>M a k a s s a r</Text>
        </View>

        {/* TABLE SURAT PENGANTAR */}
        <View style={styles.tableContainer}>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={styles.tableColNo}>
                <Text>NO</Text>
              </View>
              <View style={styles.tableColJenis}>
                <Text>Jenis surat yang dikirim</Text>
              </View>
              <View style={styles.tableColBanyak}>
                <Text>Banyaknya</Text>
              </View>
              <View style={styles.tableColKet}>
                <Text>Keterangan</Text>
              </View>
            </View>

            {/* Table Row 1 */}
            <View style={styles.tableRow}>
              <View style={styles.tableColNo}>
                <Text>1.</Text>
              </View>
              <View style={styles.tableColJenis}>
                <Text style={styles.tableContentLeft}>
                  Laporan Kegiatan Layanan Kunjungan Hari Raya Idul Fitri Tahun 2026 pada Rumah Tahanan Negara Kelas IIB Bantaeng.
                </Text>
              </View>
              <View style={styles.tableColBanyak}>
                <Text>1 (Satu) Berkas.</Text>
              </View>
              <View style={styles.tableColKet}>
                <Text>Dikirim dengan hormat untuk digunakan semestinya.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* TANDA TANGAN SURAT PENGANTAR */}
        <View style={styles.signatureContainer}>
          <View style={styles.signatureGrid1}>
            <Text style={styles.signatureTitle}>{"${ttd}"}</Text>
          </View>
          
          <View style={styles.signatureGrid2} />
          
          <View style={styles.signatureGrid3}>
            <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Kepala Rutan Kelas IIB Bantaeng,</Text>
            <Image src={logoKunci} style={{ width: 140, height: 60, marginBottom: 10 }} />
            <Text style={styles.signatureName}>{namaPenandatangan}</Text>
          </View>
        </View>

        {/* PAGE NUMBER */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `Halaman ${pageNumber} dari ${totalPages}`}
          fixed
        />
      </Page>

      {/* HALAMAN 2: LAPORAN UTAMA */}
      <Page size="A4" style={styles.page}>
        {/* KOP SURAT */}
        <View style={styles.kopContainer}>
          <Image src={logo} style={styles.logo} />
          <View style={styles.kopText}>
            <Text style={styles.kopTitle}>
              KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI
            </Text>
            <Text style={styles.kopTitle}>
              DIREKTORAT JENDERAL PEMASYARAKATAN
            </Text>
            <Text style={styles.kopTitle}>
              KANTOR WILAYAH SULAWESI SELATAN
            </Text>
            <Text style={styles.kopTitle}>
              RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
            </Text>
            <Text style={styles.kopAlamat}>
              Jl. Mawar No. 9 Kel. Pallantikan, Kec. Bantaeng, Kab. Bantaeng
            </Text>
            <Text style={styles.kopAlamat}>
              Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com
            </Text>
          </View>
        </View>

        {/* JUDUL LAPORAN */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LAPORAN</Text>
          <Text style={styles.title}>TENTANG</Text>
          <Text style={styles.title}>PELAKSANAAN KUNJUNGAN HARI RAYA IDUL FITRI 1447 HIJRIAH</Text>
          <Text style={styles.title}>PADA RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</Text>
        </View>

        {/* A. PENDAHULUAN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A. PENDAHULUAN</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Pelayanan publik pada dasarnya menyangkut aspek kehidupan yang sangat luas.
              Dalam kehidupan bernegara, pemerintah memiliki fungsi memberikan pelayanan
              publik yang diperlukan oleh masyarakat, mulai dari pelayanan dalam bentuk
              pengaturan ataupun pelayanan lainnya dalam rangka memenuhi kebutuhan
              masyarakat di berbagai bidang.
            </Text>
            <Text style={styles.paragraph}>
              Pelayanan merupakan tugas utama yang hakiki dari sosok aparatur sebagai
              abdi negara dan abdi masyarakat. Tugas ini telah jelas digariskan dalam
              Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 alinea keempat
              yang meliputi empat aspek pelayanan pokok aparatur terhadap masyarakat.
            </Text>
            <Text style={styles.paragraph}>
              Indonesia sebagai negara hukum sangat menghormati penegakan Hak Asasi
              Manusia. Upaya penegakan hak asasi tersebut juga dilaksanakan di
              lembaga pemasyarakatan. Salah satu hak narapidana adalah menerima
              kunjungan dari keluarga, terutama pada momen hari raya keagamaan.
            </Text>
          </View>
        </View>

        {/* B. MAKSUD DAN TUJUAN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>B. MAKSUD DAN TUJUAN</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Melaksanakan kegiatan layanan kunjungan Hari Raya Idul Fitri
              1 Syawal 1447 Hijriah Tahun {tanggal.tahunOnly} pada Rumah Tahanan Negara Kelas IIB Bantaeng
              guna memberikan kesempatan kepada keluarga warga binaan untuk bersilaturahmi
              dan memberikan dukungan moril di hari yang fitri.
            </Text>
          </View>
        </View>

        {/* C. RUANG LINGKUP */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>C. RUANG LINGKUP</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Ruang lingkup laporan ini mencakup pelaksanaan kegiatan layanan
              kunjungan Hari Raya Idul Fitri Tahun {tanggal.tahunOnly} pada Rumah Tahanan Negara Kelas IIB
              Bantaeng, yang meliputi data pengunjung, barang titipan, serta jumlah warga
              binaan yang dikunjungi.
            </Text>
          </View>
        </View>

        {/* D. DASAR HUKUM */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>D. DASAR HUKUM</Text>
          <Text style={styles.listItem}>1. Undang-Undang RI Nomor 22 Tahun 2022 tentang Pemasyarakatan;</Text>
          <Text style={styles.listItem}>2. Peraturan Pemerintah Nomor 32 Tahun 1999 tentang Hak Warga Binaan;</Text>
          <Text style={styles.listItem}>3. Peraturan Menteri Hukum dan HAM Nomor 18 Tahun 2015 tentang Organisasi dan Tata Kerja Rutan;</Text>
          <Text style={styles.listItem}>4. Surat Edaran Dirjen PAS Nomor: PAS-394.PK.01.04.03 Tahun {tanggal.tahunOnly} tentang Layanan Kunjungan Idul Fitri 1447 H.</Text>
        </View>

        {/* E. KEGIATAN YANG DILAKSANAKAN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>E. KEGIATAN YANG DILAKSANAKAN</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Pada hari {tanggal.hari}, {tanggal.tanggalBulanTahun} pukul {jamKunjungan} telah
              dilaksanakan kegiatan layanan kunjungan Hari Raya Idul Fitri 1447 H
              kepada warga binaan pemasyarakatan di Rumah Tahanan Negara Kelas IIB Bantaeng.
              Kegiatan berlangsung di ruang kunjungan utama dengan tetap memperhatikan
              protokol keamanan dan ketertiban.
            </Text>
          </View>

          <View style={styles.dataContainer}>
            <Text style={styles.dataSubTitle}>1. Jumlah Pengunjung Keluarga WBP Hari Ke-{hariKunjungan}</Text>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>Laki-laki dewasa</Text>
              <Text style={styles.dataValue}>: {totals.laki || 0} orang</Text>
            </View>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>Perempuan dewasa</Text>
              <Text style={styles.dataValue}>: {totals.perempuan || 0} orang</Text>
            </View>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>Anak laki-laki</Text>
              <Text style={styles.dataValue}>: {totals.anakLaki || 0} orang</Text>
            </View>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>Anak perempuan</Text>
              <Text style={styles.dataValue}>: {totals.anakPerempuan || 0} orang</Text>
            </View>
            <View style={styles.dataRow}>
              <Text style={styles.dataLabel}>Bayi</Text>
              <Text style={styles.dataValue}>: {totals.bayi || 0} orang</Text>
            </View>
            <View style={[styles.dataRow, { marginTop: 2 }]}>
              <Text style={[styles.dataLabel, { fontFamily: "Times-Bold" }]}>Total</Text>
              <Text style={[styles.dataValue, { fontFamily: "Times-Bold" }]}>: {totalPengunjung} orang</Text>
            </View>

            {/* BAGIAN JUMLAH PENGAMANAN */}
            <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>2. Jumlah Pengamanan</Text>
            
            <Text style={[styles.dataLabel, { marginLeft: 30, marginTop: 4, fontFamily: "Times-Bold" }]}>1) Internal</Text>
            <View style={[styles.dataRow, { marginLeft: 50 }]}>
              <Text style={[styles.dataLabel, { width: 140 }]}>- Petugas Layanan Kunjungan</Text>
              <Text style={styles.dataValue}>: {petugasLayanan} Orang</Text>
            </View>
            <View style={[styles.dataRow, { marginLeft: 50 }]}>
              <Text style={[styles.dataLabel, { width: 140 }]}>- Petugas Piket Pengamanan</Text>
              <Text style={styles.dataValue}>: {petugasPiket} Orang</Text>
            </View>
            <View style={[styles.dataRow, { marginLeft: 50 }]}>
              <Text style={[styles.dataLabel, { width: 140 }]}>- Petugas KANWIL</Text>
              <Text style={styles.dataValue}>: {petugasKanwil} Orang</Text>
            </View>

            <Text style={[styles.dataLabel, { marginLeft: 30, marginTop: 4, fontFamily: "Times-Bold" }]}>2) Eksternal</Text>
            <View style={[styles.dataRow, { marginLeft: 50 }]}>
              <Text style={[styles.dataLabel, { width: 140 }]}>- TNI</Text>
              <Text style={styles.dataValue}>: {tni} Orang</Text>
            </View>
            <View style={[styles.dataRow, { marginLeft: 50 }]}>
              <Text style={[styles.dataLabel, { width: 140 }]}>- POLRI</Text>
              <Text style={styles.dataValue}>: {polri} Orang</Text>
            </View>

            <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>3. Kejadian yang Menonjol</Text>
            <View style={[styles.dataRow, { marginLeft: 30 }]}>
              <Text style={styles.dataValue}>{kejadianMenonjol}</Text>
            </View>

            <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>4. Kunjungan Hari Ke-{hariKunjungan} dimulai Pukul {jamKunjungan}.</Text>

            <Text style={[styles.dataSubTitle, { marginTop: 8 }]}>
              5. Jumlah WBP yang dikunjungi : {filteredPengunjungs.length} orang
            </Text>
          </View>
        </View>

        {/* F. HASIL YANG DICAPAI */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>F. HASIL YANG DICAPAI</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Pelaksanaan kegiatan layanan kunjungan Hari Raya Idul Fitri 1447 H
              berjalan dengan baik, aman, lancar, dan kondusif. Kegiatan ini menjadi
              sarana bagi warga binaan untuk menjalin silaturahmi dengan keluarga
              serta mendapatkan dukungan moral dan spiritual di hari yang fitri.
            </Text>
            <Text style={styles.paragraph}>
              Antusiasme keluarga warga binaan cukup tinggi, tercermin dari jumlah
              pengunjung yang hadir. Seluruh rangkaian kegiatan dapat dilaksanakan
              sesuai dengan prosedur dan jadwal yang telah ditetapkan pada {tanggal.tanggalBulanTahun}.
            </Text>
          </View>
        </View>

        {/* G. KESIMPULAN DAN SARAN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>G. KESIMPULAN DAN SARAN</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Kegiatan layanan kunjungan Hari Raya Idul Fitri 1447 H pada Rumah Tahanan
              Negara Kelas IIB Bantaeng yang dilaksanakan pada {tanggal.tanggalBulanTahun} berjalan 
              dengan lancar, tertib, aman, dan kondusif serta memenuhi hak-hak warga 
              binaan untuk menerima kunjungan keluarga.
            </Text>
          </View>
        </View>

        {/* H. PENUTUP */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>H. PENUTUP</Text>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Demikian laporan pelaksanaan kegiatan layanan kunjungan Hari Raya Idul Fitri
              1447 H ini dibuat dengan sebenar-benarnya untuk dipergunakan sebagaimana
              mestinya. Atas perhatian dan kerjasama semua pihak, kami ucapkan terima kasih.
            </Text>
          </View>
        </View>

        {/* TANDA TANGAN LAPORAN */}
        <View style={styles.signatureContainer}>
          <View style={styles.signatureGrid1}>
            <Text style={styles.signatureTitle}>{"${ttd}"}</Text>
          </View>
          
          <View style={styles.signatureGrid2} />
          
          <View style={styles.signatureGrid3}>
            <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Dikeluarkan di : Bantaeng</Text>
            <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Pada Tanggal   : {tanggal.tanggalBulanTahun}</Text>
            <Text style={[styles.signatureTitle, { marginBottom: 0 }]}>Kepala Rutan Kelas IIB Bantaeng,</Text>
            <Image src={logoKunci} style={{ width: 140, height: 60, marginBottom: 10 }} />
            <Text style={styles.signatureName}>{namaPenandatangan}</Text>
          </View>
        </View>

        {/* PAGE NUMBER */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `Halaman ${pageNumber} dari ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFLaporan;