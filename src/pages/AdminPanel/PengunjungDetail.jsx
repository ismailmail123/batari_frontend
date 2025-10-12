// // import React, { useEffect, useRef, useState } from "react";
// // import useDataStore from "../../store/useDataStore";
// // import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// // import { useReactToPrint } from "react-to-print";
// // import {
// //   pdf,
// //   Document,
// //   Page,
// //   Text,
// //   View,
// //   StyleSheet,
// //   Image,
// // } from "@react-pdf/renderer";
// // import { PDFViewer } from "@react-pdf/renderer";
// // import logo from "../../assets/logokemenimipas.png";
// // import { icons } from "lucide-react";
// // import "./style.css";
// // import useAuthStore from "../../store/useAuthStore";
// // import { FaHome } from "react-icons/fa";
// // import IconUser from "../../assets/avatar.jpg";

// // const PengunjungDetail = () => {
// //   const { kode } = useParams();
// //   const { fetchPengunjungByCode, pengunjungByCode, verify } = useDataStore();
// //   const { authUser } = useAuthStore();
// //   const componentRef = useRef();
// //   const [showPreview, setShowPreview] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   useEffect(() => {
// //     fetchPengunjungByCode(kode);
// //   }, [kode, fetchPengunjungByCode]);

// //   const handleVerify = () => {
// //     setIsLoading(true);

// //     verify({ id: pengunjungByCode.id })
// //       .then((response) => {
// //         // Pastikan response ada dan status HTTP dalam rentang 200-299
// //         if (
// //           response &&
// //           response.status >= 200 &&
// //           response.status < 300 &&
// //           response.data
// //         ) {
// //           alert(response.data.message || "Verifikasi berhasil!");
// //           window.location.reload();
// //         } else {
// //           // Jika respons tidak valid, lempar error
// //           throw new Error("Response tidak valid dari server");
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error saat verifikasi:", error);

// //         // Tampilkan pesan error dari backend jika ada
// //         if (
// //           error.response &&
// //           error.response.data &&
// //           error.response.data.message
// //         ) {
// //           alert(error.response.data.message); // Tampilkan pesan error spesifik
// //         } else if (error.message) {
// //           alert(error.message); // Tampilkan pesan error yang dilempar secara manual
// //         } else {
// //           alert(
// //             "Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi."
// //           ); // Pesan default
// //         }
// //       })
// //       .finally(() => {
// //         setIsLoading(false);
// //       });
// //   };

// //   const navigate = useNavigate();

// //   // Styles untuk PDF

// //   // const styles = StyleSheet.create({
// //   // page: {
// //   //   flexDirection: 'column',
// //   //   backgroundColor: '#FFFFFF',
// //   //   padding: 20,
// //   //   fontFamily: 'Helvetica',
// //   // },
// //   // header: {
// //   //   fontSize: 10,
// //   //   marginBottom: 5,
// //   //   textAlign: 'center',
// //   //   fontWeight: 'bold',
// //   //   lineHeight: 0.7
// //   // },
// //   // section_header: {
// //   //   borderBottom: 1,
// //   //   borderStyle: "solid"
// //   // },
// //   // section_column: {
// //   //   display: "flex",
// //   //   flexDirection: "column",
// //   //   flexWrap: "nowrap"

// //   // },
// //   // address: {
// //   //   fontSize: 8,
// //   //   textAlign: 'center',
// //   //   marginBottom: 10,
// //   //   lineHeight: 0.2
// //   // },
// //   // title: {
// //   //   fontSize: 14,
// //   //   textAlign: 'center',
// //   //   marginBottom: 15,
// //   //   fontWeight: 'bold',
// //   //   textDecoration: 'underline',
// //   // },
// //   // icon_image: {
// //   //   width: 70,
// //   //   height: 70,
// //   //    marginRight: 10
// //   // },
// //   // table: {
// //   //   width: '100%',
// //   //   marginBottom: 15,
// //   // },
// //   // row: {
// //   //   flexDirection: 'row',
// //   //   borderBottomWidth: 1,
// //   //   borderColor: '#000',
// //   //   paddingVertical: 5,
// //   // },
// //   // label: {
// //   //   width: '40%',
// //   //   paddingLeft: 5,
// //   //   fontSize: 10,
// //   // },
// //   // value: {
// //   //   width: '60%',
// //   //   fontSize: 10,
// //   // },
// //   // barcodeContainer: {
// //   //   marginTop: 20,
// //   //   alignItems: 'center',
// //   // },
// //   // barcodeText: {
// //   //   fontSize: 10,
// //   //   marginTop: 5,
// //   // }
// //   // });

// //   const styles = StyleSheet.create({
// //     page: {
// //       flexDirection: "column",
// //       backgroundColor: "#FFFFFF",
// //       padding: 20,
// //       fontFamily: "Helvetica",
// //     },
// //     kop: {
// //       flexDirection: "row", // Menyusun gambar dan teks secara horizontal
// //       alignItems: "center", // Menyelaraskan gambar dan teks secara vertikal di tengah
// //       marginBottom: 10, // Jarak antara kop dan konten berikutnya
// //     },
// //     headerContainer: {
// //       flex: 1, // Mengisi sisa ruang yang tersedia
// //       alignItems: "center", // Menengahkan teks header secara horizontal
// //       padding: 0,
// //       marginLeft: -50,
// //       borderBottom: 1,
// //     },
// //     header: {
// //       fontSize: 7,
// //       marginBottom: 5,
// //       textAlign: "center", // Teks header di tengah
// //       fontWeight: "bold",
// //       lineHeight: 0.7,
// //     },
// //     address: {
// //       fontSize: 5,
// //       textAlign: "center", // Teks alamat di tengah
// //       marginBottom: 10,
// //       lineHeight: 0.2,
// //     },
// //     icon_image: {
// //       width: 50,
// //       height: 50,
// //       marginRight: 10, // Jarak antara gambar dan teks
// //       marginBottom: 10,
// //     },
// //     table: {
// //       width: "100%",
// //       // marginBottom: 15,
// //     },
// //     row: {
// //       flexDirection: "row", // Baris disusun secara horizontal
// //       // borderBottomWidth: 1,
// //       // borderColor: '#000',
// //       paddingVertical: 5,
// //       lineHeight: 0.25,
// //     },
// //     label: {
// //       width: "45%", // Lebar kolom label
// //       paddingLeft: 5,
// //       fontSize: 6,
// //     },
// //     label_wbp: {
// //       width: "30%", // Lebar kolom label
// //       paddingLeft: 5,
// //       fontSize: 6,
// //     },
// //     label_photo: {
// //       width: "45%", // Lebar kolom label
// //       // paddingLeft: 5,
// //       textAlign: "center",
// //       fontSize: 6,
// //       marginTop: -30,
// //       marginLeft: -30,
// //     },
// //     value: {
// //       width: "40%", // Lebar kolom nilai
// //       fontSize: 6,
// //     },
// //     barcodeContainer: {
// //       marginTop: 20,
// //       alignItems: "center",
// //     },
// //     barcodeText: {
// //       fontSize: 5,
// //       marginTop: 5,
// //     },
// //   });

// //   // Komponen Gambar
// //   const LogoImage = () => <Image style={styles.icon_image} src={logo} />;

// //   const PengunjungImage = () => (
// //     <View
// //       style={[
// //         [styles.row, { lineHeight: 0.01 }],
// //         { flexDirection: "column", gap: 20 },
// //       ]}
// //     >
// //       {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}> */}
// //       {/* <Text style={styles.label_photo}>Photo KTP</Text>
// //       <Image 
// //         src={pengunjungByCode?.photo_ktp} 
// //         style={{ width: 100, height: 100 }} // Sesuaikan ukuran gambar
// //       /> */}
// //       <Text style={styles.label_photo}>Photo Pengunjung</Text>
// //       <View style={{ display: "flex", justifyContent: "center", width: 150 , height: 75}}>
// //         <Image
// //           src={pengunjungByCode?.photo_pengunjung || IconUser}
// //           style={{ width: 100, height: 100 }} // Sesuaikan ukuran gambar
// //         />
// //       </View>
// //       {/* </View> */}
// //     </View>
// //   );

// //   // Komponen Teks Header (berfungsi seperti span)
// //   const HeaderText = () => (
// //     <View style={styles.headerContainer}>
// //       <Text style={styles.header}>
// //         KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
// //       </Text>
// //       <Text style={styles.header}>DIREKTORAT JENDRAL PEMASYARAKATAN</Text>
// //       <Text style={styles.header}>KANTOR WILAYAH SULAWESI SELATAN</Text>
// //       <Text style={styles.header}>RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</Text>
// //       <Text style={styles.address}>
// //         Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos:
// //         92411
// //       </Text>
// //       <Text style={styles.address}>
// //         Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com/
// //         rtn.bantaeng@kemenkumham.go.id
// //       </Text>
// //     </View>
// //   );
// //   // const DataPengunjung = () => (
// //   //   <View style={styles.table}>
// //   //   {/* Baris Nama Pengunjung */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>Nama pengunjung</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.nama || ""}</Text>
// //   //   </View>

// //   //   {/* Baris Jenis Kelamin */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>Jenis Kelamin</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.jenis_kelamin || ""}</Text>
// //   //   </View>

// //   //   {/* Baris No. KTP */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>No. KTP</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.nik || ""}</Text>
// //   //   </View>

// //   //   {/* Baris Alamat */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>Alamat</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.alamat || ""}</Text>
// //   //   </View>

// //   //   {/* Baris No. Telepon */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>No. Telepon</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.hp || ""}</Text>
// //   //   </View>

// //   //   {/* Baris Hubungan dengan WBP */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>Hubungan Dengan WBP</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.hubungan_keluarga || ""}</Text>
// //   //   </View>

// //   //   {/* Baris WBP Yang Dikunjungi */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>WBP Yang Dikunjungi</Text>
// //   //     <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.nama || ""}</Text>
// //   //   </View>

// //   //   {/* Baris Tanggal Daftar */}
// //   //   <View style={[styles.row, {lineHeight: 0.01}]}>
// //   //     <Text style={styles.label}>Tanggal Daftar</Text>
// //   //     <Text style={styles.value}>
// //   //       : {pengunjungByCode?.created_at
// //   //         ? new Date(pengunjungByCode.created_at).toLocaleDateString('id-ID', {
// //   //             weekday: 'long',
// //   //             year: 'numeric',
// //   //             month: 'long',
// //   //             day: 'numeric',
// //   //           })
// //   //         : 'Tanggal tidak tersedia'}
// //   //     </Text>
// //   //   </View>

// //   //   {/* Baris Gambar KTP dan Foto Pengunjung */}

// //   // </View>
// //   // );

// //   const DataPengunjung = () => (
// //     <View style={styles.table}>
// //       {/* Baris Nama Pengunjung */}
// //       <View style={[[styles.row, { lineHeight: 0.01 }], { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>Nama pengunjung</Text>
// //         <Text style={styles.value}>: {pengunjungByCode?.nama || "" || ""}</Text>
// //       </View>

// //       {/* Baris Jenis Kelamin */}
// //       <View style={[[styles.row, { lineHeight: 0.01 }], { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>Jenis Kelamin</Text>
// //         <Text style={styles.value}>: {pengunjungByCode?.jenis_kelamin || "" || ""}</Text>
// //       </View>

// //       {/* Baris No. KTP */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>No. KTP</Text>
// //         <Text style={styles.value}>: {pengunjungByCode?.nik || "" || ""}</Text>
// //       </View>

// //       {/* Baris Alamat */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>Alamat</Text>
// //         <Text style={styles.value}>: {pengunjungByCode?.alamat || "" || ""}</Text>
// //       </View>

// //       {/* Baris No. Telepon */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>No. Telepon</Text>
// //         <Text style={styles.value}>: {pengunjungByCode?.hp || "" || ""}</Text>
// //       </View>

// //       {/* Baris Hubungan dengan WBP */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>Hubungan Dengan WBP</Text>
// //         <Text style={styles.value}>
// //           : {pengunjungByCode?.hubungan_keluarga || "" || ""}
// //         </Text>
// //       </View>

// //       {/* Baris Tanggal Daftar */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>Tanggal Daftar</Text>
// //         <Text style={styles.value}>
// //           :{" "}
// //           {pengunjungByCode?.created_at
// //             ? new Date(pengunjungByCode.created_at).toLocaleDateString(
// //                 "id-ID",
// //                 {
// //                   weekday: "long",
// //                   year: "numeric",
// //                   month: "long",
// //                   day: "numeric",
// //                 }
// //               )
// //             : "Tanggal tidak tersedia" || ""}
// //         </Text>
// //       </View>
// //       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
// //         <Text style={styles.label}>Pengikut</Text>
// //         <View style={[styles.row, { lineHeight: 0.01 }]}>
// //           <Text style={styles.label}>: Laki-laki</Text>
// //           <Text style={styles.value}>
// //             : {pengunjungByCode?.pengikut_laki_laki | ""}
// //           </Text>
// //         </View>
// //       </View>
// //       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
// //         <Text style={styles.label}></Text>
// //         <View style={[styles.row, { lineHeight: 0.01 }]}>
// //           <Text style={styles.label}> Perempuan</Text>
// //           <Text style={styles.value}>
// //             : {pengunjungByCode?.pengikut_perempuan | ""}
// //           </Text>
// //         </View>
// //       </View>
// //       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
// //         <Text style={styles.label}></Text>
// //         <View style={[styles.row, { lineHeight: 0.01 }]}>
// //           <Text style={styles.label}> Anak-anak</Text>
// //           <Text style={styles.value}>
// //             : {pengunjungByCode?.pengikut_anak_anak | ""}
// //           </Text>
// //         </View>
// //       </View>
// //       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -15 }]}>
// //         <Text style={styles.label}></Text>
// //         <View style={[styles.row, { lineHeight: 0.01 }]}>
// //           <Text style={styles.label}> Bayi</Text>
// //           <Text style={styles.value}>: {pengunjungByCode?.pengikut_bayi || "" || ""}</Text>
// //         </View>
// //       </View>

// //       <Text
// //         style={{
// //           textAlign: "start",
// //           marginTop: 13,
// //           marginBottom: 3,
// //           fontSize: 7,
// //           fontWeight: "bold",
// //           textDecoration: "underline",
// //         }}
// //       >
// //         BARANG YANG DITITIPKAN
// //       </Text>
// //       <View style={styles.table}>
// //         {/* Header Tabel */}
// //         <View
// //           style={[
// //             [styles.row, { lineHeight: 0.01 }],
// //             {
// //               backgroundColor: "#f0f0f0",
// //               borderWidth: 1,
// //               borderColor: "#000",
// //               borderStyle: "solid",
// //             },
// //           ]}
// //         >
// //           <Text
// //             style={[
// //               styles.label,
// //               {
// //                 width: "10%",
// //                 fontWeight: "bold",
// //                 borderRightWidth: 1,
// //                 borderColor: "#000",
// //               },
// //             ]}
// //           >
// //             No.
// //           </Text>
// //           <Text
// //             style={[
// //               styles.label,
// //               {
// //                 width: "40%",
// //                 fontWeight: "bold",
// //                 borderRightWidth: 1,
// //                 borderColor: "#000",
// //               },
// //             ]}
// //           >
// //             Jenis Barang
// //           </Text>
// //           <Text
// //             style={[
// //               styles.label,
// //               {
// //                 width: "20%",
// //                 fontWeight: "bold",
// //                 borderRightWidth: 1,
// //                 borderColor: "#000",
// //               },
// //             ]}
// //           >
// //             Jumlah
// //           </Text>
// //           <Text style={[styles.label, { width: "30%", fontWeight: "bold" }]}>
// //             Keterangan
// //           </Text>
// //         </View>

// //         {/* Baris Data Barang */}
// //         {/* {pengunjungByCode?.barang_dititipkan?.map((barang, index) => ( */}
// //         {pengunjungByCode?.barang_titipan?.length > 0 ? (
// //           pengunjungByCode.barang_titipan.map((barang, index) => (
// //             <View
// //               key={barang.id}
// //               style={[
// //                 [styles.row, { lineHeight: 0.01 }],
// //                 { borderWidth: 1, borderColor: "#000", borderStyle: "solid" },
// //               ]}
// //             >
// //               <Text
// //                 style={[
// //                   styles.value,
// //                   {
// //                     width: "10%",
// //                     borderRightWidth: 1,
// //                     borderColor: "#000",
// //                     textAlign: "center",
// //                   },
// //                 ]}
// //               >
// //                 {index + 1}
// //               </Text>
// //               <Text
// //                 style={[
// //                   styles.value,
// //                   {
// //                     width: "40%",
// //                     borderRightWidth: 1,
// //                     borderColor: "#000",
// //                     paddingLeft: 5,
// //                   },
// //                 ]}
// //               >
// //                 {barang.jenis_barang}
// //               </Text>
// //               <Text
// //                 style={[
// //                   styles.value,
// //                   {
// //                     width: "20%",
// //                     borderRightWidth: 1,
// //                     borderColor: "#000",
// //                     paddingLeft: 5,
// //                   },
// //                 ]}
// //               >
// //                 {barang.jumlah}
// //               </Text>
// //               <Text style={[styles.value, { width: "30%", paddingLeft: 5 }]}>
// //                 {barang.keterangan}
// //               </Text>
// //             </View>
// //           ))
// //         ) : (
// //           <View
// //             style={[
// //               [styles.row, { lineHeight: 0.01 }],
// //               { borderWidth: 1, borderColor: "#000" },
// //             ]}
// //           >
// //             <Text
// //               style={[styles.value, { width: "100%", textAlign: "center" }]}
// //             >
// //               Tidak ada barang titipan
// //             </Text>
// //           </View>
// //         )}
// //         {/* ))} */}
// //       </View>
// //     </View>
// //   );

// //   const DataWbp = () => (
// //     <View style={[styles.table, { marginLeft: 30, marginTop: -10 }]}>
// //       {/* Baris Nama Pengunjung */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label}>Warga Binaan Yang Dikunjungi :</Text>
// //       </View>

// //       {/* Baris Jenis Kelamin */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label_wbp}>Nama</Text>
// //         <Text style={styles.value}>
// //           : {pengunjungByCode.warga_binaan?.nama || ""}
// //         </Text>
// //       </View>

// //       {/* Baris No. KTP */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label_wbp}>Perkara</Text>
// //         <Text style={styles.value}>
// //           : {pengunjungByCode.warga_binaan?.jenis_kejahatan || ""}
// //         </Text>
// //       </View>

// //       {/* Baris Alamat */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label_wbp}>Blok Kamar Hunian</Text>
// //         <Text style={styles.value}>
// //           : Blok {pengunjungByCode.warga_binaan?.lokasi_blok || ""}
// //         </Text>
// //       </View>

// //       {/* Baris No. Telepon */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label_wbp}>No. Telepon</Text>
// //         <Text style={styles.value}>: {pengunjungByCode?.hp || ""}</Text>
// //       </View>

// //       {/* Baris Hubungan dengan WBP */}
// //       <View style={[styles.row, { lineHeight: 0.01 }]}>
// //         <Text style={styles.label_wbp}>Hubungan Dengan WBP</Text>
// //         <Text style={styles.value}>
// //           : {pengunjungByCode?.hubungan_keluarga || ""}
// //         </Text>
// //       </View>
// //     </View>
// //   );

// //   const WbpImage = () => (
// //     <View style={[[styles.row, { lineHeight: 0.01 }]]}>
// //       {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}> */}
// //       {/* <Text style={styles.label_photo}>Photo KTP</Text>
// //       <Image 
// //         src={pengunjungByCode?.photo_ktp} 
// //         style={{ width: 100, height: 100 }} // Sesuaikan ukuran gambar
// //       /> */}
// //       <Image
// //         src={pengunjungByCode.warga_binaan?.photo || IconUser}
// //         style={{ width: 100, height: 50 }} // Sesuaikan ukuran gambar
// //       />
// //       {/* </View> */}
// //     </View>
// //   );

// //   const PDFPreview = () => (
// //     <Document>
// //       <Page size="A5" style={styles.page}>
// //         {/* Header */}
// //         <View style={styles.kop}>
// //           {/* Komponen Gambar */}
// //           <LogoImage />
// //           {/* Komponen Teks Header */}
// //           <HeaderText />
// //         </View>

// //         {/* Content */}
// //         <View style={styles.section}>
// //           <Text
// //             style={{
// //               textAlign: "center",
// //               marginBottom: 10,
// //               fontSize: 6,
// //               fontWeight: "bold",
// //               textDecoration: "underline",
// //             }}
// //           >
// //             BUKTI PENDAFTARAN KUNJUNGAN
// //           </Text>
// //           <View style={styles.kop}>
// //             <DataPengunjung />
// //             <View
// //               style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 gap: 30,
// //               }}
// //             >
// //               <View
// //                 style={{
// //                   marginTop: -20,
// //                   marginLeft: -50,
// //                   border: "1 solid black",
// //                   borderRadius: 5,
// //                   width: 190,
// //                 }}
// //               >
// //                 <Text style={{ fontSize: 7 }}>
// //                   Nomor Antrian : {pengunjungByCode.antrian || ""}
// //                 </Text>
// //               </View>
// //               <PengunjungImage />
// //             </View>
// //           </View>
// //         </View>

// //         <View
// //           style={{
// //             lineHeight: 0.01,
// //             flexDirection: "row", // Baris disusun secara horizontal
// //             marginTop: -10,
// //             // borderColor: '#000',
// //             paddingVertical: 5,
// //           }}
// //         >
// //           <Text
// //             style={{
// //               width: "7%", // Lebar kolom label
// //               paddingLeft: 5,
// //               fontSize: 6,
// //             }}
// //           >
// //             Status
// //           </Text>
// //           <Text style={styles.value}>
// //             : {pengunjungByCode?.warga_binaan?.keterangan | ""}
// //           </Text>
// //         </View>
// //         <View style={styles.kop}>
// //           {/* Komponen Gambar */}
// //           <WbpImage />
// //           {/* Komponen Teks Header */}
// //           <DataWbp />
// //         </View>
// //         <View
// //           style={{
// //             justifyContent: "space-between",
// //             flexDirection: "row", // Baris disusun secara horizontal
// //             // borderBottomWidth: 1,
// //             // borderColor: '#000',
// //             marginBottom: -20,
// //             lineHeight: 0.25,
// //           }}
// //         >
// //           <View style={{ display: "flex", flexDirection: "column" }}>
// //             {/* Komponen Gambar */}
// //             <Text style={{ fontSize: 6, marginBottom: 7 }}>
// //               A.n Kepala Rutan Kelas II B bantaeng Ka. Subsi{" "}
// //             </Text>
// //             <Text style={{ fontSize: 6 }}>Pelayanan Tahanan</Text>
// //             {/* Komponen Teks Header */}
// //           </View>
// //           <View
// //             style={{
// //               display: "flex",
// //               marginRight: 30,
// //               flexDirection: "column",
// //             }}
// //           >
// //             {/* Komponen Gambar */}
// //             <Text style={{ fontSize: 6, marginBottom: 7 }}>
// //               Bantaeng{" "}
// //               {pengunjungByCode?.created_at
// //                 ? new Date(pengunjungByCode.created_at).toLocaleDateString(
// //                     "id-ID",
// //                     {
// //                       weekday: "long",
// //                       year: "numeric",
// //                       month: "long",
// //                       day: "numeric",
// //                     }
// //                   )
// //                 : "Tanggal tidak tersedia"}{" "}
// //             </Text>
// //             <Text style={{ fontSize: 6 }}>Petugas Pendaftaran</Text>
// //             {/* Komponen Teks Header */}
// //           </View>
// //         </View>
// //         <View
// //           style={[
// //             [styles.row, { lineHeight: 0.01 }],
// //             { justifyContent: "space-between", marginTop: 50 },
// //           ]}
// //         >
// //           <View style={{ display: "flex", flexDirection: "column" }}>
// //             {/* Komponen Gambar */}
// //             <Text style={{ fontSize: 6, marginBottom: 7, marginLeft: 20 }}>
// //               (ASHADI, S.H.,M.M.)
// //             </Text>

// //             {/* Komponen Teks Header */}
// //           </View>
// //           <View style={{ display: "flex", flexDirection: "column" }}>
// //             {/* Komponen Gambar */}

// //             <Text style={{ fontSize: 6, marginLeft: -110 }}>
// //               (................................)
// //             </Text>
// //             {/* Komponen Teks Header */}
// //           </View>
// //         </View>
// //         {/* <View
// //           style={{
// //             justifyContent: "space-between",
// //             flexDirection: "row", 
// //             marginTop: 30,
// //             lineHeight: 0.25,
// //             maxWidth: "100%"
// //           }}
// //         >
// //           {pengunjungByCode.barang_titipan.length > 0 ? (
// //             pengunjungByCode.barang_titipan.map((titipan) => (
// //               <View
// //                 key={titipan.id}
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   border: "1 solid black",
// //                   padding: 3,
// //                 }}
// //               >
// //                 <View
// //                   style={{
// //                     lineHeight: 0.01,
// //                     flexDirection: "row", 
// //                     paddingVertical: 5,
// //                   }}
// //                 >
// //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                     Nama WBP
// //                   </Text>
// //                   <Text style={styles.value}>
// //                     : {pengunjungByCode.warga_binaan?.nama || ""}
// //                   </Text>
// //                 </View>
// //                 <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                     Pengirim
// //                   </Text>
// //                   <Text style={styles.value}>: {pengunjungByCode.nama || ""}</Text>
// //                 </View>
// //                 <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                     Alamat
// //                   </Text>
// //                   <Text style={styles.value}>: {pengunjungByCode.alamat || ""}</Text>
// //                 </View>
// //                 <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                     Jenis Barang
// //                   </Text>
// //                   <Text style={styles.value}>: {titipan.jenis_barang || ""}</Text>
// //                 </View>
// //                 <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                     Jumlah
// //                   </Text>
// //                   <Text style={styles.value}>: {titipan.jumlah || ""}</Text>
// //                 </View>
// //               </View>
// //             ))
// //           ) : (
// //             <></>
// //           )}
// //         </View> */}
// //       </Page>
// //     </Document>
// //   );

// //   // Handle Print
// //   const handlePrint = useReactToPrint({
// //     content: () => componentRef.current,
// //   });

// //   // Handle Export PDF
// //   const handleDownloadPDF = async () => {
// //     const blob = await pdf(
// //       <Document>
// //         <Page size="A5" style={styles.page}>
// //           {/* Header */}
// //           <View style={styles.kop}>
// //             {/* Komponen Gambar */}
// //             <LogoImage />
// //             {/* Komponen Teks Header */}
// //             <HeaderText />
// //           </View>

// //           {/* Content */}
// //           <View style={styles.section}>
// //             <Text
// //               style={{
// //                 textAlign: "center",
// //                 marginBottom: 10,
// //                 fontSize: 6,
// //                 fontWeight: "bold",
// //                 textDecoration: "underline",
// //               }}
// //             >
// //               BUKTI PENDAFTARAN KUNJUNGAN
// //             </Text>
// //             <View style={styles.kop}>
// //               <DataPengunjung />
// //               <View
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   alignItems: "center",
// //                   gap: 30,
// //                 }}
// //               >
// //                 <View
// //                   style={{
// //                     marginTop: -20,
// //                     marginLeft: -50,
// //                     border: "1 solid black",
// //                     borderRadius: 5,
// //                     width: 190,
// //                   }}
// //                 >
// //                   <Text style={{ fontSize: 7 }}>
// //                     Nomor Antrian : {pengunjungByCode.antrian || ""}
// //                   </Text>
// //                 </View>
// //                 <PengunjungImage />
// //               </View>
// //             </View>
// //           </View>

// //           <View
// //             style={{
// //               lineHeight: 0.01,
// //               flexDirection: "row", // Baris disusun secara horizontal
// //               marginTop: -10,
// //               // borderColor: '#000',
// //               paddingVertical: 5,
// //             }}
// //           >
// //             <Text
// //               style={{
// //                 width: "7%", // Lebar kolom label
// //                 paddingLeft: 5,
// //                 fontSize: 6,
// //               }}
// //             >
// //               Status
// //             </Text>
// //             <Text style={styles.value}>
// //               : {pengunjungByCode?.warga_binaan?.keterangan}
// //             </Text>
// //           </View>
// //           <View style={styles.kop}>
// //             {/* Komponen Gambar */}
// //             <WbpImage />
// //             {/* Komponen Teks Header */}
// //             <DataWbp />
// //           </View>
// //           <View
// //             style={{
// //               justifyContent: "space-between",
// //               flexDirection: "row", // Baris disusun secara horizontal
// //               // borderBottomWidth: 1,
// //               // borderColor: '#000',
// //               marginBottom: -20,
// //               lineHeight: 0.25,
// //             }}
// //           >
// //             <View style={{ display: "flex", flexDirection: "column" }}>
// //               {/* Komponen Gambar */}
// //               <Text style={{ fontSize: 6, marginBottom: 7 }}>
// //                 A.n Kepala Rutan Kelas II B bantaeng Ka. Subsi{" "}
// //               </Text>
// //               <Text style={{ fontSize: 6 }}>Pelayanan Tahanan</Text>
// //               {/* Komponen Teks Header */}
// //             </View>
// //             <View
// //               style={{
// //                 display: "flex",
// //                 marginRight: 30,
// //                 flexDirection: "column",
// //               }}
// //             >
// //               {/* Komponen Gambar */}
// //               <Text style={{ fontSize: 6, marginBottom: 7 }}>
// //                 Bantaeng{" "}
// //                 {pengunjungByCode?.created_at
// //                   ? new Date(pengunjungByCode.created_at).toLocaleDateString(
// //                       "id-ID",
// //                       {
// //                         weekday: "long",
// //                         year: "numeric",
// //                         month: "long",
// //                         day: "numeric",
// //                       }
// //                     )
// //                   : "Tanggal tidak tersedia"}{" "}
// //               </Text>
// //               <Text style={{ fontSize: 6 }}>Petugas Pendaftaran</Text>
// //               {/* Komponen Teks Header */}
// //             </View>
// //           </View>
// //           <View
// //             style={[
// //               [styles.row, { lineHeight: 0.01 }],
// //               { justifyContent: "space-between", marginTop: 50 },
// //             ]}
// //           >
// //             <View style={{ display: "flex", flexDirection: "column" }}>
// //               {/* Komponen Gambar */}
// //               <Text style={{ fontSize: 6, marginBottom: 7, marginLeft: 20 }}>
// //                 (ASHADI, S.H.,M.M.)
// //               </Text>

// //               {/* Komponen Teks Header */}
// //             </View>
// //             <View style={{ display: "flex", flexDirection: "column" }}>
// //               {/* Komponen Gambar */}

// //               <Text style={{ fontSize: 6, marginLeft: -110 }}>
// //                 (................................)
// //               </Text>
// //               {/* Komponen Teks Header */}
// //             </View>
// //           </View>
// //           <View
// //             style={{
// //               justifyContent: "space-between",
// //               flexDirection: "row", // Baris disusun secara horizontal
// //               // marginBottom: -20,
// //               marginTop: 20,
// //               lineHeight: 0.25,
// //             }}
// //           >
// //             {pengunjungByCode.barang_titipan?.length > 0 ? (
// //               pengunjungByCode.barang_titipan.map((titipan) => (
// //                 <View
// //                   key={titipan.id}
// //                   style={{
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     border: "1 solid black",
// //                     padding: 3,
// //                   }}
// //                 >
// //                   {/* Komponen Gambar */}
// //                   <View
// //                     style={{
// //                       lineHeight: 0.01,
// //                       flexDirection: "row", // Baris disusun secara horizontal
// //                       // borderBottomWidth: 1,
// //                       // borderColor: '#000',
// //                       paddingVertical: 5,
// //                     }}
// //                   >
// //                     <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                       Nama WBP
// //                     </Text>
// //                     <Text style={styles.value}>
// //                       : {pengunjungByCode.warga_binaan?.nama}
// //                     </Text>
// //                   </View>
// //                   <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                     <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                       Pengirim
// //                     </Text>
// //                     <Text style={styles.value}>: {pengunjungByCode.nama}</Text>
// //                   </View>
// //                   <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                     <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                       Alamat
// //                     </Text>
// //                     <Text style={styles.value}>
// //                       : {pengunjungByCode.alamat}
// //                     </Text>
// //                   </View>
// //                   <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                     <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                       Jenis Barang
// //                     </Text>
// //                     <Text style={styles.value}>: {titipan.jenis_barang}</Text>
// //                   </View>
// //                   <View style={[styles.row, { lineHeight: 0.01 }]}>
// //                     <Text style={{ width: "45%", paddingLeft: 5, fontSize: 6 }}>
// //                       Jumlah
// //                     </Text>
// //                     <Text style={styles.value}>: {titipan.jumlah}</Text>
// //                   </View>
// //                 </View>
// //               ))
// //             ) : (
// //               <></>
// //             )}
// //           </View>
// //         </Page>
// //       </Document>
// //     ).toBlob();

// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement("a");
// //     link.href = url;
// //     link.download = `bukti-kunjungan-${kode}.pdf`;
// //     link.click();
// //   };

// //   if (!pengunjungByCode) {
// //     return (
// //       <div className="flex justify-center items-center h-screen bg-gray-100">
// //         <p className="text-xl text-gray-700">
// //           Data pengunjung tidak ditemukan.
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
// //       <div
// //         ref={componentRef}
// //         className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
// //       >
// //         <div className="flex justify-end w-full pl-2">
// //           <Link
// //             to="/"
// //             className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //           >
// //             <FaHome className="font-bold text-black size-7" />
// //           </Link>
// //         </div>
// //         {/* Institutional Header */}
// //         <div className="p-6 flex border-b-2 border-gray-200">
// //           <span className=" p-0">
// //             <img src={logo} alt="kemenimipas" className="w-28"></img>
// //           </span>
// //           <span className=" text-center">
// //             <h3 className="text-lg leading-5 font-bold">
// //               KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
// //             </h3>
// //             <h4 className="text-md leading-5 font-bold">
// //               DIREKTORAT JENDRAL PEMASYARAKATAN
// //             </h4>
// //             <h4 className="text-md leading-5 font-bold">
// //               KANTOR WILAYAH SULAWESI SELATAN
// //             </h4>
// //             <h5 className="text-md leading-5 font-bold">
// //               RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
// //             </h5>
// //             <p className="text-sm leading-3 mt-1">
// //               Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode
// //               Pos: 92411
// //             </p>
// //             <p className="text-sm leading-3 italic mt-1">
// //               Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI:
// //               rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id
// //             </p>
// //           </span>
// //         </div>

// //         {/* Main Content */}
// //         <div className="p-6">
// //           <h3 className="font-bold text-center underline mb-6">
// //             BUKTI PENDAFTARAN KUNJUNGAN
// //           </h3>

// //           {/* Visitor Info Table */}
// //           <div className="grid grid-cols-2 gap-4 mb-6">
// //             <div className="col-span-2 sm:col-span-1">
// //               {/* Baris dengan flex untuk meratakan titik dua */}
// //               <div className="flex">
// //                 <span className="font-semibold w-48">Nama pengunjung</span>
// //                 <span>: {pengunjungByCode.nama || ""}</span>
// //               </div>
// //               <div className="flex">
// //                 <span className="font-semibold w-48">Jenis Kelamin</span>
// //                 <span>: {pengunjungByCode.jenis_kelamin || ""}</span>
// //               </div>
// //               <div className="flex">
// //                 <span className="font-semibold w-48">NIK</span>
// //                 <span>: {pengunjungByCode.nik || ""}</span>
// //               </div>
// //               <div className="flex">
// //                 <span className="font-semibold w-48">Alamat</span>
// //                 <span>: {pengunjungByCode.alamat || ""}</span>
// //               </div>
// //               <div className="flex">
// //                 <span className="font-semibold w-48">No. Telepon</span>
// //                 <span>: {pengunjungByCode.hp || ""}</span>
// //               </div>
// //               <div className="flex">
// //                 <span className="font-semibold w-48">Hubungan Dengan WBP</span>
// //                 <span>: {pengunjungByCode.hubungan_keluarga || ""}</span>
// //               </div>
// //               <div className="flex">
// //                 <span className="font-semibold w-48">WBP Yang Dikunjungi</span>
// //                 <span>: {pengunjungByCode.warga_binaan?.nama || ""}</span>
// //               </div>
// //               <p className="font-semibold w-48">Photo Warga Binaan :</p>
// //               <img
// //                 src={pengunjungByCode.warga_binaan?.photo || IconUser}
// //                 alt="Photo WBP"
// //                 className="max-h-36 w-52 object-fill mt-6"
// //               />
// //             </div>
// //             <div className="col-span-2 sm:col-span-1">
// //               <div className="border border-indigo-600 border-2 p-4 rounded-lg">
// //                 <p className="font-bold text-xl">
// //                   Nomor Antrian :{" "}
// //                   {pengunjungByCode.antrian || "Belum Ada Antrian"}
// //                 </p>
// //               </div>

// //               <div className="flex">
// //                 <span className="font-semibold w-48">Pengikut:</span>
// //                 <div
// //                   className="grid grid-cols-[auto_1fr] gap-2"
// //                   style={{ marginLeft: -100 }}
// //                 >
// //                   <span>Laki-laki</span>
// //                   <span>
// //                     : {pengunjungByCode.pengikut_laki_laki || 0} Orang
// //                   </span>
// //                   <span>Perempuan</span>
// //                   <span>
// //                     : {pengunjungByCode.pengikut_perempuan || 0} Orang
// //                   </span>
// //                   <span>Anak-anak</span>
// //                   <span>
// //                     : {pengunjungByCode.pengikut_anak_anak || 0} Orang
// //                   </span>
// //                   <span>Bayi</span>
// //                   <span>: {pengunjungByCode.pengikut_bayi || 0} Orang</span>
// //                 </div>
// //               </div>
// //               <div className="w-full flex justify-center content-center ">
// //                 <img
// //                   src={pengunjungByCode.photo_pengunjung || IconUser}
// //                   alt="Foto Pengunjung"
// //                   className=" content-center w-52 h-34 object-fill mt-6"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full bg-white border border-gray-200">
// //               <thead>
// //                 <tr className="bg-gray-100">
// //                   <th className="border px-4 py-2">No</th>
// //                   <th className="border px-4 py-2">Jenis Barang</th>
// //                   <th className="border px-4 py-2">Jumlah</th>
// //                   <th className="border px-4 py-2">Keterangan</th>
// //                   <th className="border px-4 py-2">Tanggal Dititipkan</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {pengunjungByCode.barang_titipan?.length > 0 ? (
// //                   pengunjungByCode?.barang_titipan.map((barang, index) => (
// //                     <tr key={barang.id} className="text-center">
// //                       <td className="border px-4 py-2">{index + 1}</td>
// //                       <td className="border px-4 py-2">
// //                         {barang.jenis_barang}
// //                       </td>
// //                       <td className="border px-4 py-2">{barang.jumlah}</td>
// //                       <td className="border px-4 py-2">{barang.keterangan}</td>
// //                       <td className="border px-4 py-2">
// //                         {new Date(barang.createdAt).toLocaleDateString("id-ID")}
// //                       </td>
// //                     </tr>
// //                   ))
// //                 ) : (
// //                   <tr>
// //                     <td colSpan="5" className="border px-4 py-2 text-center">
// //                       Tidak ada barang titipan
// //                     </td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //             <div className="text-center m-0">
// //               <p className="text-sm text-gray-500 mt-2">
// //                 Tanggal Daftar:{" "}
// //                 {pengunjungByCode?.created_at
// //                   ? new Date(pengunjungByCode.created_at).toLocaleDateString(
// //                       "id-ID",
// //                       {
// //                         weekday: "long",
// //                         year: "numeric",
// //                         month: "long",
// //                         day: "numeric",
// //                       }
// //                     )
// //                   : "Tanggal tidak tersedia"}
// //               </p>
// //               <div className="flex justify-center w-full">
// //                 <img
// //                   src={pengunjungByCode.barcode || ""}
// //                   alt="Barcode"
// //                   className="h-20 w-20 object-contain"
// //                 />
// //               </div>
// //               <p className="text-center">{pengunjungByCode?.kode || ""}</p>
// //               <p className="text-center">{pengunjungByCode?.status || ""}</p>
// //             </div>
// //           </div>
// //           {/* Barcode */}
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-row justify-center gap-4">
// //           {authUser.user.role === "admin" && (
// //             <>
// //               {pengunjungByCode.status === "Tidak Valid" && (
// //                 <button
// //                   onClick={handleVerify}
// //                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
// //                 >
// //                   verifikasi
// //                 </button>
// //               )}
// //               {pengunjungByCode.status ===
// //                 "Valid Divalidasi oleh Petugas Kunjungan" && (
// //                 <button
// //                   onClick={handleVerify}
// //                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
// //                 >
// //                   verifikasi
// //                 </button>
// //               )}
// //               {pengunjungByCode.status === "Valid, Divalidasi Oleh P2U" && (
// //                 <>
// //                   <p className="mt-2">Telah DiVerifikasi</p>
// //                 </>
// //               )}

// //               <button
// //                 onClick={() => navigate(`/update-pengunjung/${kode}`)}
// //                 className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
// //               >
// //                 Perbarui
// //               </button>
// //               <button
// //                 onClick={() => setShowPreview(true)}
// //                 className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
// //               >
// //                 Cetak
// //               </button>
// //               <button
// //                 onClick={handleDownloadPDF}
// //                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
// //               >
// //                 Export PDF
// //               </button>
// //             </>
// //           )}
// //           {authUser.user.role === "p2u" && (
// //             <>
// //               {pengunjungByCode.status === "Tidak Valid" && (
// //                 <button
// //                   onClick={handleVerify}
// //                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
// //                 >
// //                   verifikasi
// //                 </button>
// //               )}
// //               {pengunjungByCode.status ===
// //                 "Valid Divalidasi oleh Petugas Kunjungan" && (
// //                 <button
// //                   onClick={handleVerify}
// //                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
// //                 >
// //                   verifikasi
// //                 </button>
// //               )}
// //               {pengunjungByCode.status === "Valid, Divalidasi Oleh P2U" && (
// //                 <>
// //                   <p className="mt-2">Telah DiVerifikasi</p>
// //                 </>
// //               )}

// //               <button
// //                 onClick={() => setShowPreview(true)}
// //                 className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
// //               >
// //                 Cetak
// //               </button>
// //               <button
// //                 onClick={handleDownloadPDF}
// //                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
// //               >
// //                 Export PDF
// //               </button>
// //             </>
// //           )}
// //           {authUser.user?.role === "user" && (
// //             <>
// //               <button
// //                 onClick={() => navigate(`/update-pengunjung/${kode}`)}
// //                 className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
// //               >
// //                 Perbarui
// //               </button>
// //               <button
// //                 onClick={handleDownloadPDF}
// //                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
// //               >
// //                 Export PDF
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>

// //       {/* PDF Preview Modal */}
// //       {showPreview && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
// //           <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
// //             <div className="flex justify-between items-center p-4 border-b">
// //               <h2 className="text-xl font-semibold">PDF Cetak</h2>
// //               <button
// //                 onClick={() => setShowPreview(false)}
// //                 className="text-black hover:text-gray-700"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className="h-full">
// //               <PDFViewer width="100%" height="100%">
// //                 <PDFPreview />
// //               </PDFViewer>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PengunjungDetail;




// import React, { useEffect, useRef, useState } from "react";
// import useDataStore from "../../store/useDataStore";
// import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import {
//   pdf,
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Image,
// } from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";
// import logo from "../../assets/logokemenimipas.png";
// import { icons } from "lucide-react";
// import "./style.css";
// import useAuthStore from "../../store/useAuthStore";
// import { FaHome } from "react-icons/fa";
// import IconUser from "../../assets/avatar.jpg";

// const PengunjungDetail = () => {
//   const { id } = useParams();
//   const { fetchPengunjungByCode, pengunjungByCode, verify } = useDataStore();
//   const { authUser } = useAuthStore();
//   const componentRef = useRef();
//   const [showPreview, setShowPreview] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchPengunjungByCode(id);
//   }, [id, fetchPengunjungByCode]);

//   const handleVerify = () => {
//     setIsLoading(true);

//     verify({ id: pengunjungByCode.id })
//       .then((response) => {
//         if (
//           response &&
//           response.status >= 200 &&
//           response.status < 300 &&
//           response.data
//         ) {
//           alert(response.data.message || "Verifikasi berhasil!");
//           window.location.reload();
//         } else {
//           throw new Error("Response tidak valid dari server");
//         }
//       })
//       .catch((error) => {
//         console.error("Error saat verifikasi:", error);
//         if (
//           error.response &&
//           error.response.data &&
//           error.response.data.message
//         ) {
//           alert(error.response.data.message);
//         } else if (error.message) {
//           alert(error.message);
//         } else {
//           alert(
//             "Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi."
//           );
//         }
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   const navigate = useNavigate();

//   // Styles untuk PDF - hanya memperbaiki bagian tabel
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "column",
//       backgroundColor: "#FFFFFF",
//       padding: 20,
//       fontFamily: "Helvetica",
//     },
//     kop: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginBottom: 10,
//     },
//     headerContainer: {
//       flex: 1,
//       alignItems: "center",
//       padding: 0,
//       marginLeft: -50,
//       borderBottom: 1,
//     },
//     header: {
//       fontSize: 7,
//       marginBottom: 5,
//       textAlign: "center",
//       fontWeight: "bold",
//       lineHeight: 0.7,
//     },
//     address: {
//       fontSize: 5,
//       textAlign: "center",
//       marginBottom: 10,
//       lineHeight: 0.2,
//     },
//     icon_image: {
//       width: 50,
//       height: 50,
//       marginRight: 10,
//       marginBottom: 10,
//     },
//     table: {
//       width: "100%",
//     },
//     row: {
//       flexDirection: "row",
//       paddingVertical: 5,
//       lineHeight: 0.25,
//     },
//     label: {
//       width: "45%",
//       paddingLeft: 5,
//       fontSize: 6,
//     },
//     label_wbp: {
//       width: "30%",
//       paddingLeft: 5,
//       fontSize: 6,
//     },
//     label_photo: {
//       width: "45%",
//       textAlign: "center",
//       fontSize: 6,
//       marginTop: -30,
//       marginLeft: -30,
//     },
//     value: {
//       width: "40%",
//       fontSize: 6,
//     },
//     barcodeContainer: {
//       marginTop: 20,
//       alignItems: "center",
//     },
//     barcodeText: {
//       fontSize: 5,
//       marginTop: 5,
//     },
//     // Styles baru untuk tabel yang lebih menarik
//     tableContainer: {
//       marginTop: 5,
//       borderWidth: 1,
//       borderColor: '#000',
//     },
//     tableHeader: {
//       flexDirection: 'row',
//       backgroundColor: '#1e40af',
//       color: '#ffffff',
//       paddingVertical: 3,
//       borderBottomWidth: 1,
//       borderBottomColor: '#000',
//     },
//     tableHeaderCell: {
//       fontSize: 5,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       paddingHorizontal: 2,
//     },
//     tableRow: {
//       flexDirection: 'row',
//       borderBottomWidth: 1,
//       borderBottomColor: '#e5e7eb',
//       paddingVertical: 2,
//     },
//     tableCell: {
//       fontSize: 5,
//       textAlign: 'center',
//       paddingHorizontal: 2,
//     },
//     antrianBox: {
//       backgroundColor: '#1e40af',
//       paddingVertical: 6,
//       paddingHorizontal: 12,
//       borderRadius: 4,
//       marginBottom: 8,
//       alignSelf: 'center',
//       borderWidth: 1,
//       borderColor: '#000',
//       marginTop: -75,
//     },
//     antrianText: {
//       color: '#ffffff',
//       fontSize: 8,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });

//   // Komponen Gambar - TIDAK DIUBAH
//   const LogoImage = () => <Image style={styles.icon_image} src={logo} />;

//   const PengunjungImage = () => (
//     <View style={[[styles.row, { lineHeight: 0.01 }], { flexDirection: "column", gap: 20,  }]}>
//       <Text style={styles.label_photo}>Photo Pengunjung</Text>
//       <View style={{ display: "flex", justifyContent: "center", width: 150, height: 75 }}>
//         <Image
//           src={pengunjungByCode?.photo_pengunjung || IconUser}
//           style={{ width: 100, height: 100 }}
//         />
//       </View>
//     </View>
//   );

//   // Komponen Teks Header - TIDAK DIUBAH
//   const HeaderText = () => (
//     <View style={styles.headerContainer}>
//       <Text style={styles.header}>
//         KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
//       </Text>
//       <Text style={styles.header}>DIREKTORAT JENDRAL PEMASYARAKATAN</Text>
//       <Text style={styles.header}>KANTOR WILAYAH SULAWESI SELATAN</Text>
//       <Text style={styles.header}>RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</Text>
//       <Text style={styles.address}>
//         Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos: 92411
//       </Text>
//       <Text style={styles.address}>
//         Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id
//       </Text>
//     </View>
//   );

//   // Komponen Data Pengunjung - DIPERBAIKI bagian tabel barang titipan saja
//   const DataPengunjung = () => (
//     <View style={styles.table}>
//       {/* Baris Nama Pengunjung */}
//       <View style={[[styles.row, { lineHeight: 0.01 }], { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>Nama pengunjung</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.nama || ""}</Text>
//       </View>

//       {/* Baris Jenis Kelamin */}
//       <View style={[[styles.row, { lineHeight: 0.01 }], { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>Jenis Kelamin</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.jenis_kelamin || ""}</Text>
//       </View>

//       {/* Baris No. KTP */}
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>No. KTP</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.nik || ""}</Text>
//       </View>

//       {/* Baris Alamat */}
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>Alamat</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.alamat || ""}</Text>
//       </View>

//       {/* Baris No. Telepon */}
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>No. Telepon</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.hp || ""}</Text>
//       </View>

//       {/* Baris Hubungan dengan WBP */}
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>Hubungan Dengan WBP</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.hubungan_keluarga || ""}</Text>
//       </View>

//       {/* Baris Tanggal Daftar */}
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>Tanggal Daftar</Text>
//         <Text style={styles.value}>
//           :{" "}
//           {pengunjungByCode?.created_at
//             ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
//                 weekday: "long",
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })
//             : "Tanggal tidak tersedia"}
//         </Text>
//       </View>
//       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
//         <Text style={styles.label}>Pengikut</Text>
//         <View style={[styles.row, { lineHeight: 0.01 }]}>
//           <Text style={styles.label}>: Laki-laki</Text>
//           <Text style={styles.value}>: {pengunjungByCode?.pengikut_laki_laki || 0}</Text>
//         </View>
//       </View>
//       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
//         <Text style={styles.label}></Text>
//         <View style={[styles.row, { lineHeight: 0.01 }]}>
//           <Text style={styles.label}> Perempuan</Text>
//           <Text style={styles.value}>: {pengunjungByCode?.pengikut_perempuan || 0}</Text>
//         </View>
//       </View>
//       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
//         <Text style={styles.label}></Text>
//         <View style={[styles.row, { lineHeight: 0.01 }]}>
//           <Text style={styles.label}> Anak-anak</Text>
//           <Text style={styles.value}>: {pengunjungByCode?.pengikut_anak_anak || 0}</Text>
//         </View>
//       </View>
//       <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -15 }]}>
//         <Text style={styles.label}></Text>
//         <View style={[styles.row, { lineHeight: 0.01 }]}>
//           <Text style={styles.label}> Bayi</Text>
//           <Text style={styles.value}>: {pengunjungByCode?.pengikut_bayi || 0}</Text>
//         </View>
//       </View>

//       <Text style={{
//         textAlign: "start",
//         marginTop: 13,
//         marginBottom: 3,
//         fontSize: 7,
//         fontWeight: "bold",
//         textDecoration: "underline",
//       }}>
//         BARANG YANG DITITIPKAN
//       </Text>

//       {/* TABEL BARANG TITIPAN YANG DIPERBAIKI */}
//       <View style={styles.tableContainer}>
//         {/* Header Tabel */}
//         <View style={styles.tableHeader}>
//           <Text style={[styles.tableHeaderCell, { width: '10%' }]}>No.</Text>
//           <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Jenis Barang</Text>
//           <Text style={[styles.tableHeaderCell, { width: '15%' }]}>Jumlah</Text>
//           <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Keterangan</Text>
//           <Text style={[styles.tableHeaderCell, { width: '15%' }]}>Tanggal</Text>
//         </View>

//         {/* Baris Data Barang */}
//         {pengunjungByCode?.barang_titipan?.length > 0 ? (
//           pengunjungByCode.barang_titipan.map((barang, index) => (
//             <View key={barang.id} style={styles.tableRow}>
//               <Text style={[styles.tableCell, { width: '10%' }]}>{index + 1}</Text>
//               <Text style={[styles.tableCell, { width: '30%' }]}>{barang.jenis_barang}</Text>
//               <Text style={[styles.tableCell, { width: '15%' }]}>{barang.jumlah}</Text>
//               <Text style={[styles.tableCell, { width: '30%' }]}>{barang.keterangan}</Text>
//               <Text style={[styles.tableCell, { width: '15%' }]}>
//                 {barang.createdAt ? new Date(barang.createdAt).toLocaleDateString('id-ID') : '-'}
//               </Text>
//             </View>
//           ))
//         ) : (
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, { width: '100%', textAlign: 'center' }]}>
//               Tidak ada barang titipan
//             </Text>
//           </View>
//         )}
//       </View>
//     </View>
//   );

//   const DataWbp = () => (
//     <View style={[styles.table, { marginLeft: 30, marginTop: -10 }]}>
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label}>Warga Binaan Yang Dikunjungi :</Text>
//       </View>
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label_wbp}>Nama</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.nama || ""}</Text>
//       </View>
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label_wbp}>Perkara</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.jenis_kejahatan || ""}</Text>
//       </View>
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label_wbp}>Blok Kamar Hunian</Text>
//         <Text style={styles.value}>: Blok {pengunjungByCode?.warga_binaan?.lokasi_blok || ""}</Text>
//       </View>
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label_wbp}>No. Telepon</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.hp || ""}</Text>
//       </View>
//       <View style={[styles.row, { lineHeight: 0.01 }]}>
//         <Text style={styles.label_wbp}>Hubungan Dengan WBP</Text>
//         <Text style={styles.value}>: {pengunjungByCode?.hubungan_keluarga || ""}</Text>
//       </View>
//     </View>
//   );

//   const WbpImage = () => (
//     <View style={[[styles.row, { lineHeight: 0.01 }]]}>
//       <Image
//         src={pengunjungByCode?.warga_binaan?.photo || IconUser}
//         style={{ width: 100, height: 50 }}
//       />
//     </View>
//   );

//   // Komponen PDF Preview - DIPERBAIKI bagian nomor antrian dan tabel saja
//   const PDFPreview = () => (
//     <Document>
//       <Page size="A5" style={styles.page}>
//         {/* Header - TIDAK DIUBAH */}
//         <View style={styles.kop}>
//           <LogoImage />
//           <HeaderText />
//         </View>

//         {/* Content - TIDAK DIUBAH struktur, hanya perbaikan tampilan */}
//         <View style={styles.section}>
//           <Text style={{
//             textAlign: "center",
//             marginBottom: 10,
//             fontSize: 6,
//             fontWeight: "bold",
//             textDecoration: "underline",
//           }}>
//             BUKTI PENDAFTARAN KUNJUNGAN
//           </Text>
//           <View style={styles.kop}>
//             <DataPengunjung />
//             <View style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 30,
//             }}>
//               {/* NOMOR ANTRIAN YANG DIPERBAIKI */}
//               <View style={styles.antrianBox}>
//                 <Text style={styles.antrianText}>
//                   Nomor : {pengunjungByCode?.antrian || "Belum Ada Antrian"}
//                 </Text>
//               </View>
//               <PengunjungImage />
//             </View>
//           </View>
//         </View>

//         <View style={{
//           lineHeight: 0.01,
//           flexDirection: "row",
//           marginTop: -10,
//           paddingVertical: 5,
//         }}>
//           <Text style={{
//             width: "7%",
//             paddingLeft: 5,
//             fontSize: 6,
//           }}>
//             Status
//           </Text>
//           <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.keterangan || ""}</Text>
//         </View>
//         <View style={styles.kop}>
//           <WbpImage />
//           <DataWbp />
//         </View>
//         <View style={{
//           justifyContent: "space-between",
//           flexDirection: "row",
//           marginBottom: -20,
//           lineHeight: 0.25,
//         }}>
//           <View style={{ display: "flex", flexDirection: "column" }}>
//             <Text style={{ fontSize: 6, marginBottom: 7 }}>
//               A.n Kepala Rutan Kelas II B bantaeng Ka. Subsi{" "}
//             </Text>
//             <Text style={{ fontSize: 6 }}>Pelayanan Tahanan</Text>
//           </View>
//           <View style={{
//             display: "flex",
//             marginRight: 30,
//             flexDirection: "column",
//           }}>
//             <Text style={{ fontSize: 6, marginBottom: 7 }}>
//               Bantaeng{" "}
//               {pengunjungByCode?.created_at
//                 ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
//                     weekday: "long",
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   })
//                 : "Tanggal tidak tersedia"}{" "}
//             </Text>
//             <Text style={{ fontSize: 6 }}>Petugas Pendaftaran</Text>
//           </View>
//         </View>
//         <View style={[
//           [styles.row, { lineHeight: 0.01 }],
//           { justifyContent: "space-between", marginTop: 50 },
//         ]}>
//           <View style={{ display: "flex", flexDirection: "column" }}>
//             <Text style={{ fontSize: 6, marginBottom: 7, marginLeft: 20 }}>
//               (ASHADI, S.H.,M.M.)
//             </Text>
//           </View>
//           <View style={{ display: "flex", flexDirection: "column" }}>
//             <Text style={{ fontSize: 6, marginLeft: -110 }}>
//               (................................)
//             </Text>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );

//   // Handle Print - TIDAK DIUBAH
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   // Handle Export PDF - TIDAK DIUBAH
//   const handleDownloadPDF = async () => {
//     const blob = await pdf(<PDFPreview />).toBlob();
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `bukti-kunjungan-${id}.pdf`;
//     link.click();
//   };

//   if (!pengunjungByCode) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <p className="text-xl text-gray-700">Data pengunjung tidak ditemukan.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div
//         ref={componentRef}
//         className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
//       >
//         {/* TIDAK DIUBAH struktur HTML */}
//         <div className="flex justify-end w-full pl-2">
//           <Link
//             to="/"
//             className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             <FaHome className="font-bold text-black size-7" />
//           </Link>
//         </div>

//         {/* Institutional Header - TIDAK DIUBAH */}
//         <div className="p-6 flex border-b-2 border-gray-200">
//           <span className=" p-0">
//             <img src={logo} alt="kemenimipas" className="w-28"></img>
//           </span>
//           <span className=" text-center">
//             <h3 className="text-lg leading-5 font-bold">
//               KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
//             </h3>
//             <h4 className="text-md leading-5 font-bold">
//               DIREKTORAT JENDRAL PEMASYARAKATAN
//             </h4>
//             <h4 className="text-md leading-5 font-bold">
//               KANTOR WILAYAH SULAWESI SELATAN
//             </h4>
//             <h5 className="text-md leading-5 font-bold">
//               RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
//             </h5>
//             <p className="text-sm leading-3 mt-1">
//               Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos: 92411
//             </p>
//             <p className="text-sm leading-3 italic mt-1">
//               Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI:
//               rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id
//             </p>
//           </span>
//         </div>

//         {/* Main Content - TIDAK DIUBAH struktur, hanya perbaikan tampilan tabel */}
//         <div className="p-6">
//           <h3 className="font-bold text-center underline mb-6">
//             BUKTI PENDAFTARAN KUNJUNGAN
//           </h3>

//           {/* Visitor Info Table - TIDAK DIUBAH */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="col-span-2 sm:col-span-1">
//               <div className="flex">
//                 <span className="font-semibold w-48">Nama pengunjung</span>
//                 <span>: {pengunjungByCode.nama || ""}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">Jenis Kelamin</span>
//                 <span>: {pengunjungByCode.jenis_kelamin || ""}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">NIK</span>
//                 <span>: {pengunjungByCode.nik || ""}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">Alamat</span>
//                 <span>: {pengunjungByCode.alamat || ""}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">No. Telepon</span>
//                 <span>: {pengunjungByCode.hp || ""}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">Hubungan Dengan WBP</span>
//                 <span>: {pengunjungByCode.hubungan_keluarga || ""}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">WBP Yang Dikunjungi</span>
//                 <span>: {pengunjungByCode.warga_binaan?.nama || ""}</span>
//               </div>
//               <p className="font-semibold w-48">Photo Warga Binaan :</p>
//               <img
//                 src={pengunjungByCode.warga_binaan?.photo || IconUser}
//                 alt="Photo WBP"
//                 className="max-h-36 w-52 object-fill mt-6"
//               />
//             </div>
//             <div className="col-span-2 sm:col-span-1">
//               {/* NOMOR ANTRIAN YANG DIPERBAIKI - hanya styling */}
//               <div className="border-2 border-blue-800 bg-blue-800 text-white p-4 rounded-lg text-center mb-4">
//                 <p className="font-bold text-xl">
//                   Nomor Antrian : {pengunjungByCode.antrian || "Belum Ada Antrian"}
//                 </p>
//               </div>

//               <div className="flex">
//                 <span className="font-semibold w-48">Pengikut:</span>
//                 <div
//                   className="grid grid-cols-[auto_1fr] gap-2"
//                   style={{ marginLeft: -100 }}
//                 >
//                   <span>Laki-laki</span>
//                   <span>: {pengunjungByCode.pengikut_laki_laki || 0} Orang</span>
//                   <span>Perempuan</span>
//                   <span>: {pengunjungByCode.pengikut_perempuan || 0} Orang</span>
//                   <span>Anak-anak</span>
//                   <span>: {pengunjungByCode.pengikut_anak_anak || 0} Orang</span>
//                   <span>Bayi</span>
//                   <span>: {pengunjungByCode.pengikut_bayi || 0} Orang</span>
//                 </div>
//               </div>
//               <div className="w-full flex justify-center content-center ">
//                 <img
//                   src={pengunjungByCode.photo_pengunjung || IconUser}
//                   alt="Foto Pengunjung"
//                   className=" content-center w-52 h-34 object-fill mt-6"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* TABEL BARANG TITIPAN YANG DIPERBAIKI - hanya styling */}
//           <div className="overflow-x-auto mt-8">
//             <h4 className="font-bold text-lg mb-4 text-center underline">
//               BARANG YANG DITITIPKAN
//             </h4>
//             <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//               <thead className="bg-blue-800 text-white">
//                 <tr>
//                   <th className="border px-4 py-3 font-semibold">No</th>
//                   <th className="border px-4 py-3 font-semibold">Jenis Barang</th>
//                   <th className="border px-4 py-3 font-semibold">Jumlah</th>
//                   <th className="border px-4 py-3 font-semibold">Keterangan</th>
//                   <th className="border px-4 py-3 font-semibold">Tanggal Dititipkan</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pengunjungByCode.barang_titipan?.length > 0 ? (
//                   pengunjungByCode?.barang_titipan.map((barang, index) => (
//                     <tr key={barang.id} className="text-center hover:bg-gray-50 transition-colors">
//                       <td className="border px-4 py-2 font-medium">{index + 1}</td>
//                       <td className="border px-4 py-2">{barang.jenis_barang}</td>
//                       <td className="border px-4 py-2 font-semibold">{barang.jumlah}</td>
//                       <td className="border px-4 py-2">{barang.keterangan}</td>
//                       <td className="border px-4 py-2 text-gray-600">
//                         {new Date(barang.createdAt).toLocaleDateString("id-ID")}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="border px-4 py-4 text-center text-gray-500 bg-gray-50">
//                       Tidak ada barang titipan
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="text-center m-0">
//             <p className="text-sm text-gray-500 mt-2">
//               Tanggal Daftar:{" "}
//               {pengunjungByCode?.created_at
//                 ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
//                     weekday: "long",
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   })
//                 : "Tanggal tidak tersedia"}
//             </p>
//             <div className="flex justify-center w-full">
//               <img
//                 src={pengunjungByCode.barcode || ""}
//                 alt="Barcode"
//                 className="h-20 w-20 object-contain"
//               />
//             </div>
//             <p className="text-center">{pengunjungByCode?.kode || ""}</p>
//             <p className="text-center">{pengunjungByCode?.status || ""}</p>
//           </div>
//         </div>

//         {/* Action Buttons - TIDAK DIUBAH */}
//         <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-row justify-center gap-4">
//           {authUser.user.role === "admin" && (
//             <>
//               {pengunjungByCode.status === "Tidak Valid" && (
//                 <button
//                   onClick={handleVerify}
//                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   verifikasi
//                 </button>
//               )}
//               {pengunjungByCode.status ===
//                 "Valid Divalidasi oleh Petugas Kunjungan" && (
//                 <button
//                   onClick={handleVerify}
//                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   verifikasi
//                 </button>
//               )}
//               {pengunjungByCode.status === "Valid, Divalidasi Oleh P2U" && (
//                 <>
//                   <p className="mt-2">Telah DiVerifikasi</p>
//                 </>
//               )}

//               <button
//                 onClick={() => navigate(`/update-pengunjung/${id}`)}
//                 className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Perbarui
//               </button>
//               <button
//                 onClick={() => setShowPreview(true)}
//                 className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Cetak
//               </button>
//               <button
//                 onClick={handleDownloadPDF}
//                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
//               >
//                 Export PDF
//               </button>
//             </>
//           )}
//           {authUser.user.role === "p2u" && (
//             <>
//               {pengunjungByCode.status === "Tidak Valid" && (
//                 <button
//                   onClick={handleVerify}
//                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   verifikasi
//                 </button>
//               )}
//               {pengunjungByCode.status ===
//                 "Valid Divalidasi oleh Petugas Kunjungan" && (
//                 <button
//                   onClick={handleVerify}
//                   className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   verifikasi
//                 </button>
//               )}
//               {pengunjungByCode.status === "Valid, Divalidasi Oleh P2U" && (
//                 <>
//                   <p className="mt-2">Telah DiVerifikasi</p>
//                 </>
//               )}

//               <button
//                 onClick={() => setShowPreview(true)}
//                 className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Cetak
//               </button>
//               <button
//                 onClick={handleDownloadPDF}
//                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
//               >
//                 Export PDF
//               </button>
//             </>
//           )}
//           {authUser.user?.role === "user" && (
//             <>
//               <button
//                 onClick={() => navigate(`/update-pengunjung/${id}`)}
//                 className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Perbarui
//               </button>
//               <button
//                 onClick={handleDownloadPDF}
//                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
//               >
//                 Export PDF
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* PDF Preview Modal - TIDAK DIUBAH */}
//       {showPreview && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-semibold">PDF Cetak</h2>
//               <button
//                 onClick={() => setShowPreview(false)}
//                 className="text-black hover:text-gray-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="h-full">
//               <PDFViewer width="100%" height="100%">
//                 <PDFPreview />
//               </PDFViewer>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PengunjungDetail;


import React, { useEffect, useRef, useState } from "react";
import useDataStore from "../../store/useDataStore";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import logo from "../../assets/logokemenimipas.png";
import { icons } from "lucide-react";
import "./style.css";
import useAuthStore from "../../store/useAuthStore";
import { FaHome } from "react-icons/fa";
import IconUser from "../../assets/avatar.jpg";

const PengunjungDetail = () => {
  const { id } = useParams();
  const { fetchPengunjungByCode, pengunjungByCode, verify } = useDataStore();
  const { authUser } = useAuthStore();
  const componentRef = useRef();
  const labelTitipanRef = useRef();
  const [showPreview, setShowPreview] = useState(false);
  const [showLabelPreview, setShowLabelPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const mmToPt = (mm) => mm * 2.83465;

  useEffect(() => {
    fetchPengunjungByCode(id);
  }, [id, fetchPengunjungByCode]);

  const handleVerify = () => {
    setIsLoading(true);

    verify({ id: pengunjungByCode.id })
      .then((response) => {
        if (
          response &&
          response.status >= 200 &&
          response.status < 300 &&
          response.data
        ) {
          alert(response.data.message || "Verifikasi berhasil!");
          window.location.reload();
        } else {
          throw new Error("Response tidak valid dari server");
        }
      })
      .catch((error) => {
        console.error("Error saat verifikasi:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert(error.response.data.message);
        } else if (error.message) {
          alert(error.message);
        } else {
          alert(
            "Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi."
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const navigate = useNavigate();

  // Styles untuk PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      padding: 20,
      fontFamily: "Helvetica",
    },
    kop: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    headerContainer: {
      flex: 1,
      alignItems: "center",
      padding: 0,
      marginLeft: -50,
      borderBottom: 1,
    },
    header: {
      fontSize: 7,
      marginBottom: 5,
      textAlign: "center",
      fontWeight: "bold",
      lineHeight: 0.7,
    },
    address: {
      fontSize: 5,
      textAlign: "center",
      marginBottom: 10,
      lineHeight: 0.2,
    },
    icon_image: {
      width: 50,
      height: 50,
      marginRight: 10,
      marginBottom: 10,
    },
    table: {
      width: "100%",
    },
    row: {
      flexDirection: "row",
      paddingVertical: 5,
      lineHeight: 0.25,
    },
    label: {
      width: "45%",
      paddingLeft: 5,
      fontSize: 6,
    },
    label_wbp: {
      width: "30%",
      paddingLeft: 5,
      fontSize: 6,
    },
    label_photo: {
      width: "45%",
      textAlign: "center",
      fontSize: 6,
      marginTop: -30,
      marginLeft: -30,
    },
    value: {
      width: "40%",
      fontSize: 6,
    },
    barcodeContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    barcodeText: {
      fontSize: 5,
      marginTop: 5,
    },
    tableContainer: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#000',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: '#1e40af',
      color: '#ffffff',
      paddingVertical: 3,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    tableHeaderCell: {
      fontSize: 5,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 2,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      paddingVertical: 2,
    },
    tableCell: {
      fontSize: 5,
      textAlign: 'center',
      paddingHorizontal: 2,
    },
    antrianBox: {
      backgroundColor: '#1e40af',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
      marginBottom: 8,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#000',
      marginTop: -75,
    },
    antrianText: {
      color: '#ffffff',
      fontSize: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  // Styles untuk Label Titipan PDF
  const labelStyles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      padding: 2,
      fontFamily: "Helvetica",
    },
    row: {
      flexDirection: "row",
      paddingVertical: 5,
      lineHeight: 0.3,
    },
    label: {
      width: "45%",
      paddingLeft: 5,
      fontSize: 6,
    },
    value: {
      width: "80%",
      fontSize: 9,
      flexWrap: "wrap",
      lineHeight: 0.85,
    },
  });

  // Komponen Gambar
  const LogoImage = () => <Image style={styles.icon_image} src={logo} />;

  const PengunjungImage = () => (
    <View style={[[styles.row, { lineHeight: 0.01 }], { flexDirection: "column", gap: 20 }]}>
      <Text style={styles.label_photo}>Photo Pengunjung</Text>
      <View style={{ display: "flex", justifyContent: "center", width: 150, height: 75 }}>
        <Image
          src={pengunjungByCode?.photo_pengunjung || IconUser}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );

  // Komponen Teks Header
  const HeaderText = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>
        KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
      </Text>
      <Text style={styles.header}>DIREKTORAT JENDRAL PEMASYARAKATAN</Text>
      <Text style={styles.header}>KANTOR WILAYAH SULAWESI SELATAN</Text>
      <Text style={styles.header}>RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</Text>
      <Text style={styles.address}>
        Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos: 92411
      </Text>
      <Text style={styles.address}>
        Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id
      </Text>
    </View>
  );

  // Komponen Data Pengunjung
  const DataPengunjung = () => (
    <View style={styles.table}>
      {/* Baris Nama Pengunjung */}
      <View style={[[styles.row, { lineHeight: 0.01 }], { lineHeight: 0.01 }]}>
        <Text style={styles.label}>Nama pengunjung</Text>
        <Text style={styles.value}>: {pengunjungByCode?.nama || ""}</Text>
      </View>

      {/* Baris Jenis Kelamin */}
      <View style={[[styles.row, { lineHeight: 0.01 }], { lineHeight: 0.01 }]}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <Text style={styles.value}>: {pengunjungByCode?.jenis_kelamin || ""}</Text>
      </View>

      {/* Baris No. KTP */}
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label}>No. KTP</Text>
        <Text style={styles.value}>: {pengunjungByCode?.nik || ""}</Text>
      </View>

      {/* Baris Alamat */}
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label}>Alamat</Text>
        <Text style={styles.value}>: {pengunjungByCode?.alamat || ""}</Text>
      </View>

      {/* Baris No. Telepon */}
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label}>No. Telepon</Text>
        <Text style={styles.value}>: {pengunjungByCode?.hp || ""}</Text>
      </View>

      {/* Baris Hubungan dengan WBP */}
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label}>Hubungan Dengan WBP</Text>
        <Text style={styles.value}>: {pengunjungByCode?.hubungan_keluarga || ""}</Text>
      </View>

      {/* Baris Tanggal Daftar */}
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label}>Tanggal Daftar</Text>
        <Text style={styles.value}>
          :{" "}
          {pengunjungByCode?.created_at
            ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Tanggal tidak tersedia"}
        </Text>
      </View>
      <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
        <Text style={styles.label}>Pengikut</Text>
        <View style={[styles.row, { lineHeight: 0.01 }]}>
          <Text style={styles.label}>: Laki-laki</Text>
          <Text style={styles.value}>: {pengunjungByCode?.pengikut_laki_laki || 0}</Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.01 }]}>
          <Text style={styles.label}> Perempuan</Text>
          <Text style={styles.value}>: {pengunjungByCode?.pengikut_perempuan || 0}</Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -10 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.01 }]}>
          <Text style={styles.label}> Anak-anak</Text>
          <Text style={styles.value}>: {pengunjungByCode?.pengikut_anak_anak || 0}</Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.01 }], { marginBottom: -15 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.01 }]}>
          <Text style={styles.label}> Bayi</Text>
          <Text style={styles.value}>: {pengunjungByCode?.pengikut_bayi || 0}</Text>
        </View>
      </View>

      <Text style={{
        textAlign: "start",
        marginTop: 13,
        marginBottom: 3,
        fontSize: 7,
        fontWeight: "bold",
        textDecoration: "underline",
      }}>
        BARANG YANG DITITIPKAN
      </Text>

      {/* TABEL BARANG TITIPAN */}
      <View style={styles.tableContainer}>
        {/* Header Tabel */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderCell, { width: '10%' }]}>No.</Text>
          <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Jenis Barang</Text>
          <Text style={[styles.tableHeaderCell, { width: '15%' }]}>Jumlah</Text>
          <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Keterangan</Text>
          <Text style={[styles.tableHeaderCell, { width: '15%' }]}>Tanggal</Text>
        </View>

        {/* Baris Data Barang */}
        {pengunjungByCode?.barang_titipan?.length > 0 ? (
          pengunjungByCode.barang_titipan.map((barang, index) => (
            <View key={barang.id} style={styles.tableRow}>
              <Text style={[styles.tableCell, { width: '10%' }]}>{index + 1}</Text>
              <Text style={[styles.tableCell, { width: '30%' }]}>{barang.jenis_barang}</Text>
              <Text style={[styles.tableCell, { width: '15%' }]}>{barang.jumlah}</Text>
              <Text style={[styles.tableCell, { width: '30%' }]}>{barang.keterangan}</Text>
              <Text style={[styles.tableCell, { width: '15%' }]}>
                {barang.createdAt ? new Date(barang.createdAt).toLocaleDateString('id-ID') : '-'}
              </Text>
            </View>
          ))
        ) : (
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: '100%', textAlign: 'center' }]}>
              Tidak ada barang titipan
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  const DataWbp = () => (
    <View style={[styles.table, { marginLeft: 30, marginTop: -10 }]}>
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label}>Warga Binaan Yang Dikunjungi :</Text>
      </View>
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label_wbp}>Nama</Text>
        <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.nama || ""}</Text>
      </View>
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label_wbp}>Perkara</Text>
        <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.jenis_kejahatan || ""}</Text>
      </View>
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label_wbp}>Blok Kamar Hunian</Text>
        <Text style={styles.value}>: Blok {pengunjungByCode?.warga_binaan?.lokasi_blok || ""}</Text>
      </View>
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label_wbp}>No. Telepon</Text>
        <Text style={styles.value}>: {pengunjungByCode?.hp || ""}</Text>
      </View>
      <View style={[styles.row, { lineHeight: 0.01 }]}>
        <Text style={styles.label_wbp}>Hubungan Dengan WBP</Text>
        <Text style={styles.value}>: {pengunjungByCode?.hubungan_keluarga || ""}</Text>
      </View>
    </View>
  );

  const WbpImage = () => (
    <View style={[[styles.row, { lineHeight: 0.01 }]]}>
      <Image
        src={pengunjungByCode?.warga_binaan?.photo || IconUser}
        style={{ width: 100, height: 50 }}
      />
    </View>
  );

  // Komponen PDF Preview
  const PDFPreview = () => (
    <Document>
      <Page size="A5" style={styles.page}>
        {/* Header */}
        <View style={styles.kop}>
          <LogoImage />
          <HeaderText />
        </View>

        {/* Content */}
        <View style={styles.section}>
          <Text style={{
            textAlign: "center",
            marginBottom: 10,
            fontSize: 6,
            fontWeight: "bold",
            textDecoration: "underline",
          }}>
            BUKTI PENDAFTARAN KUNJUNGAN
          </Text>
          <View style={styles.kop}>
            <DataPengunjung />
            <View style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
            }}>
              {/* NOMOR ANTRIAN */}
              <View style={styles.antrianBox}>
                <Text style={styles.antrianText}>
                  Nomor : {pengunjungByCode?.antrian || "Belum Ada Antrian"}
                </Text>
              </View>
              <PengunjungImage />
            </View>
          </View>
        </View>

        <View style={{
          lineHeight: 0.01,
          flexDirection: "row",
          marginTop: -10,
          paddingVertical: 5,
        }}>
          <Text style={{
            width: "7%",
            paddingLeft: 5,
            fontSize: 6,
          }}>
            Status
          </Text>
          <Text style={styles.value}>: {pengunjungByCode?.warga_binaan?.keterangan || ""}</Text>
        </View>
        <View style={styles.kop}>
          <WbpImage />
          <DataWbp />
        </View>
        <View style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: -20,
          lineHeight: 0.25,
        }}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 6, marginBottom: 7 }}>
              A.n Kepala Rutan Kelas II B bantaeng Ka. Subsi{" "}
            </Text>
            <Text style={{ fontSize: 6 }}>Pelayanan Tahanan</Text>
          </View>
          <View style={{
            display: "flex",
            marginRight: 30,
            flexDirection: "column",
          }}>
            <Text style={{ fontSize: 6, marginBottom: 7 }}>
              Bantaeng{" "}
              {pengunjungByCode?.created_at
                ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Tanggal tidak tersedia"}{" "}
            </Text>
            <Text style={{ fontSize: 6 }}>Petugas Pendaftaran</Text>
          </View>
        </View>
        <View style={[
          [styles.row, { lineHeight: 0.01 }],
          { justifyContent: "space-between", marginTop: 50 },
        ]}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 6, marginBottom: 7, marginLeft: 20 }}>
              (ASHADI, S.H.,M.M.)
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 6, marginLeft: -110 }}>
              (................................)
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  // Komponen Label Titipan PDF
  const LabelTitipanPDF = () => (
    <Document>
      <Page size={[mmToPt(80), mmToPt(80)]} style={labelStyles.page}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            marginBottom: -20,
            lineHeight: 0.25,
            gap: 3,
          }}
        >
          {pengunjungByCode?.barang_titipan?.length > 0 ? (
            pengunjungByCode.barang_titipan.map((titipan) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1 dashed black",
                  padding: 3,
                  width: "100%",
                  height: "77mm",
                  paddingBottom: 10,
                  marginTop: 0,
                }}
              >
                {/* Content */}
                <View style={labelStyles.section}>
                  <Text
                    style={{
                      textAlign: "center",
                      marginBottom: 10,
                      fontSize: 10,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    LABEL TITIPAN {titipan?.jenis_barang?.toUpperCase()}
                  </Text>
                </View>
                <View
                  key={titipan.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      lineHeight: 0.3,
                      flexDirection: "row",
                      paddingVertical: 5,
                    }}
                  >
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Nama WBP
                    </Text>
                    <Text style={labelStyles.value}>
                      : {pengunjungByCode?.warga_binaan?.nama || ""}
                    </Text>
                  </View>
                  <View
                    style={{
                      lineHeight: 0.3,
                      flexDirection: "row",
                      paddingVertical: 5,
                    }}
                  >
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Status WBP
                    </Text>
                    <Text style={labelStyles.value}>
                      : {pengunjungByCode?.warga_binaan?.keterangan || ""}
                    </Text>
                  </View>
                  <View
                    style={{
                      lineHeight: 0.3,
                      flexDirection: "row",
                      paddingVertical: 5,
                    }}
                  >
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Alamat WBP
                    </Text>
                    <Text style={labelStyles.value}>
                      : {pengunjungByCode?.warga_binaan?.alamat || ""}
                    </Text>
                  </View>
                  <View style={[labelStyles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Pengirim
                    </Text>
                    <Text style={labelStyles.value}>: {pengunjungByCode?.nama || ""}</Text>
                  </View>
                  <View style={[labelStyles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Alamat
                    </Text>
                    <Text style={labelStyles.value}>
                      : {pengunjungByCode?.alamat || ""}
                    </Text>
                  </View>
                  <View style={[labelStyles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Jenis Barang
                    </Text>
                    <Text style={labelStyles.value}>: {titipan.jenis_barang}</Text>
                  </View>
                  <View style={[labelStyles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Jumlah
                    </Text>
                    <Text style={labelStyles.value}>: {titipan.jumlah}</Text>
                  </View>
                  <View style={[labelStyles.row, { alignSelf: 'flex-end'}]}>
                    <Image
                      src={pengunjungByCode?.barcode || ""}
                      style={{ width: 50, height: 50, marginLeft: 5, marginTop: -15, alignSelf: 'end' }}
                    />
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1 dashed black",
                padding: 3,
                width: "100%",
                height: "77mm",
                paddingBottom: 10,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                Tidak ada barang titipan
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );

  // FUNGSI PRINT LANGSUNG KARTU THERMAL
const handlePrintThermalNow = () => {
  setIsPrinting(true);
  
  // Buat konten HTML untuk thermal printer
  const thermalContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Kartu Kunjungan Thermal - ${pengunjungByCode?.nama || ''}</title>
        <style>
        @media print {
    @page { margin: 0; }
    html, body { 
      margin: 0; 
      padding: 0; 
    }
    .thermal-container {
      width: 80mm;
      border: 1px dashed #000;
      margin: 0;
      padding: 1mm;
      page-break-after: always;
    }

            
            .header {
              text-align: center;
              margin-bottom: 3mm;
            }
            .institution-name {
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 1mm;
            }
            .unit-name {
              font-size: 12px;
              margin-bottom: 1mm;
            }
            .address {
              font-size: 10px;
              margin-bottom: 2mm;
            }
            .title {
              text-align: center;
              font-weight: bold;
              text-decoration: underline;
              margin-bottom: 3mm;
              font-size: 12px;
              margin-top: 2mm;
            }
            .data-row {
              display: flex;
              margin-bottom: 1mm;
            }
            .data-label {
              width: 40%;
              font-weight: bold;
            }
            .data-value {
              width: 60%;
            }
            .divider {
              border-top: 1px dashed #000;
              margin: 2mm 0;
            }
            .signature-section {
              margin-top: 5mm;
            }
            .signature-row {
              display: flex;
              justify-content: space-between;
              margin-top: 10mm;
            }
            .signature-box {
              text-align: center;
              font-size: 7px;
            }
            .barcode {
              text-align: center;
              margin: 2mm 0;
            }
            .barcode-img {
              width: 40mm;
              height: 40mm;
            }
            .antrian {
              text-align: center;
              font-weight: bold;
              font-size: 11px;
              margin: 2mm 0;
              background: #000;
              color: #fff;
              padding: 1mm;
            }
          }
        </style>
      </head>
      <body>
        <div class="thermal-container">
          <!-- Header -->
          <div class="header">
            <div class="institution-name">KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI</div>
            <div class="unit-name">DIREKTORAT JENDRAL PEMASYARAKATAN</div>
            <div class="unit-name">KANTOR WILAYAH SULAWESI SELATAN</div>
            <div class="unit-name">RUMAH TAHANAN NEGARA KLAS IIB BANTAENG</div>
            <div class="address">
              Jl. Mawar No. 9 Kel. Pallantikan, Bantaeng<br>
              Telp (0411) 2112 - Kode Pos: 92411
            </div>
          </div>

          <div class="divider"></div>

          <!-- Title -->
          <div class="title">BUKTI PENDAFTARAN KUNJUNGAN</div>

          <!-- Nomor Antrian -->
          <div class="antrian">
            NO. ANTRIAN: ${pengunjungByCode?.antrian || "BELUM ADA"}
          </div>

          <!-- Data Pengunjung -->
          <div class="data-row">
            <div class="data-label">Nama Pengunjung</div>
            <div class="data-value">: ${pengunjungByCode?.nama || ""}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Jenis Kelamin</div>
            <div class="data-value">: ${pengunjungByCode?.jenis_kelamin || ""}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Alamat</div>
            <div class="data-value">: ${pengunjungByCode?.alamat || ""}</div>
          </div>

          <div class="divider"></div>

          <!-- Data WBP -->
          <div class="data-row">
            <div class="data-label">WBP Dikunjungi</div>
            <div class="data-value">: ${pengunjungByCode?.warga_binaan?.nama || ""}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Hubungan</div>
            <div class="data-value">: ${pengunjungByCode?.hubungan_keluarga || ""}</div>
          </div>

          <div class="divider"></div>

          <!-- Data Pengikut -->
          <div class="data-row">
            <div class="data-label">Pengikut Laki-laki</div>
            <div class="data-value">: ${pengunjungByCode?.pengikut_laki_laki || 0} orang</div>
          </div>
          <div class="data-row">
            <div class="data-label">Pengikut Perempuan</div>
            <div class="data-value">: ${pengunjungByCode?.pengikut_perempuan || 0} orang</div>
          </div>
          <div class="data-row">
            <div class="data-label">Pengikut Anak-anak</div>
            <div class="data-value">: ${pengunjungByCode?.pengikut_anak_anak || 0} orang</div>
          </div>
          <div class="data-row">
            <div class="data-label">Pengikut Bayi</div>
            <div class="data-value">: ${pengunjungByCode?.pengikut_bayi || 0} orang</div>
          </div>
          <div class="data-row">
            <div class="data-label">Total Pengikut</div>
            <div class="data-value">: ${(pengunjungByCode?.pengikut_laki_laki || 0) + 
              (pengunjungByCode?.pengikut_perempuan || 0) + 
              (pengunjungByCode?.pengikut_anak_anak || 0) + 
              (pengunjungByCode?.pengikut_bayi || 0)} orang</div>
          </div>

          <div class="divider"></div>

          <!-- Tanggal -->
          <div class="data-row">
            <div class="data-label">Tanggal Daftar</div>
            <div class="data-value">: ${
              pengunjungByCode?.created_at
                ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "Tanggal tidak tersedia"
            }</div>
          </div>

          <!-- Barcode -->
          <div class="barcode">
            ${pengunjungByCode?.barcode ? `<img src="${pengunjungByCode.barcode}" alt="Barcode" class="barcode-img" />` : ''}
            <div>${pengunjungByCode?.kode || ""}</div>
          </div>

          <!-- Tanda Tangan -->
          <div class="signature-section">
            <div class="signature-row">
              <div class="signature-box">
                <div style="font-size: 14px">Pengunjung</div>
                <div style="margin-top: 15mm; font-size: 10px">(___________________)</div>
              </div>
              <div class="signature-box">
                <div style="font-size: 14px">Petugas Pendaftaran</div>
                <div style="margin-top: 15mm; font-size: 10px">(___________________)</div>
              </div>
            </div>
          </div>

          <div style="text-align: center; font-size: 6px; margin-top: 3mm;">
            ${new Date().toLocaleDateString('id-ID')} - ${new Date().toLocaleTimeString('id-ID')}
          </div>
        </div>
      </body>
    </html>
  `;

  // Buka jendela baru untuk print thermal
  const printWindow = window.open('', '_blank', 'width=300,height=400');
  if (printWindow) {
    printWindow.document.write(thermalContent);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
      setTimeout(() => {
        printWindow.close();
        setIsPrinting(false);
      }, 500);
    }, 500);
  } else {
    alert('Popup diblokir! Silakan izinkan popup untuk mencetak kartu thermal.');
    setIsPrinting(false);
  }
};

  // FUNGSI PRINT LANGSUNG DENGAN WINDOW.PRINT()
  const handlePrintNow = () => {
    setIsPrinting(true);
    
    // Buat konten HTML untuk dicetak
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Bukti Kunjungan - ${pengunjungByCode?.nama || ''}</title>
          <style>
            @media print {
              @page {
                size: A5;
                margin: 10mm;
              }
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                font-size: 12px;
                line-height: 1.2;
              }
              .print-container {
                width: 100%;
                max-width: 148mm;
                margin: 0 auto;
              }
              .header {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                border-bottom: 1px solid #000;
                padding-bottom: 10px;
              }
              .logo {
                width: 50px;
                height: 50px;
                margin-right: 10px;
              }
              .header-text {
                flex: 1;
                text-align: center;
              }
              .header-text h3 {
                font-size: 11px;
                margin: 2px 0;
                font-weight: bold;
              }
              .header-text h4 {
                font-size: 10px;
                margin: 2px 0;
                font-weight: bold;
              }
              .header-text h5 {
                font-size: 10px;
                margin: 2px 0;
                font-weight: bold;
              }
              .header-text p {
                font-size: 10px;
                margin: 1px 0;
              }
              .title {
                text-align: center;
                font-size: 10px;
                font-weight: bold;
                text-decoration: underline;
                margin-bottom: 10px;
              }
              .content {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
              }
              .left-column {
                flex: 2;
              }
              .right-column {
                flex: 1;
                text-align: center;
              }
              .data-row {
                display: flex;
                margin-bottom: 3px;
              }
              .data-label {
                width: 45%;
                font-weight: bold;
              }
              .data-value {
                width: 55%;
              }
              .antrian-box {
                background-color: #1e40af;
                color: white;
                padding: 6px 12px;
                border-radius: 4px;
                border: 1px solid #000;
                margin-bottom: 20px;
              }
              .antrian-text {
                font-size: 8px;
                font-weight: bold;
                text-align: center;
              }
              .photo-section {
                margin-top: 10px;
              }
              .photo-label {
                font-size: 6px;
                margin-bottom: 5px;
              }
              .photo-img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border: 1px solid #ccc;
              }
              .table-container {
                margin-top: 10px;
              }
              .table-title {
                font-size: 7px;
                font-weight: bold;
                text-decoration: underline;
                margin-bottom: 3px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                font-size: 6px;
              }
              th {
                background-color: #1e40af;
                color: white;
                border: 1px solid #000;
                padding: 2px;
                text-align: center;
                font-weight: bold;
              }
              td {
                border: 1px solid #000;
                padding: 2px;
                text-align: center;
              }
              .wbp-section {
                display: flex;
                align-items: flex-start;
                margin-top: 10px;
              }
              .wbp-photo {
                width: 100px;
                height: 50px;
                object-fit: cover;
                margin-right: 10px;
              }
              .footer {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
              }
              .signature {
                font-size: 6px;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-container">
            <!-- Header -->
            <div class="header">
              <img src="${logo}" alt="Logo" class="logo" />
              <div class="header-text">
                <h3>KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA</h3>
                <h4>DIREKTORAT JENDRAL PEMASYARAKATAN</h4>
                <h4>KANTOR WILAYAH SULAWESI SELATAN</h4>
                <h5>RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</h5>
                <p>Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos: 92411</p>
                <p>Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id</p>
              </div>
            </div>

            <!-- Title -->
            <div class="title">BUKTI PENDAFTARAN KUNJUNGAN</div>

            <!-- Content -->
            <div class="content">
              <div class="left-column">
                <!-- Data Pengunjung -->
                <div class="data-row">
                  <div class="data-label">Nama pengunjung</div>
                  <div class="data-value">: ${pengunjungByCode?.nama || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Jenis Kelamin</div>
                  <div class="data-value">: ${pengunjungByCode?.jenis_kelamin || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">No. KTP</div>
                  <div class="data-value">: ${pengunjungByCode?.nik || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Alamat</div>
                  <div class="data-value">: ${pengunjungByCode?.alamat || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">No. Telepon</div>
                  <div class="data-value">: ${pengunjungByCode?.hp || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Hubungan Dengan WBP</div>
                  <div class="data-value">: ${pengunjungByCode?.hubungan_keluarga || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Tanggal Daftar</div>
                  <div class="data-value">: ${
                    pengunjungByCode?.created_at
                      ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Tanggal tidak tersedia"
                  }</div>
                </div>
                
                <!-- Pengikut -->
                <div class="data-row">
                  <div class="data-label">Pengikut</div>
                  <div class="data-value">: Laki-laki: ${pengunjungByCode?.pengikut_laki_laki || 0}</div>
                </div>
                <div class="data-row">
                  <div class="data-label"></div>
                  <div class="data-value">: Perempuan: ${pengunjungByCode?.pengikut_perempuan || 0}</div>
                </div>
                <div class="data-row">
                  <div class="data-label"></div>
                  <div class="data-value">: Anak-anak: ${pengunjungByCode?.pengikut_anak_anak || 0}</div>
                </div>
                <div class="data-row">
                  <div class="data-label"></div>
                  <div class="data-value">: Bayi: ${pengunjungByCode?.pengikut_bayi || 0}</div>
                </div>

                <!-- Barang Titipan -->
                <div class="table-container">
                  <div class="table-title">BARANG YANG DITITIPKAN</div>
                  ${
                    pengunjungByCode?.barang_titipan?.length > 0
                      ? `
                      <table>
                        <thead>
                          <tr>
                            <th style="width: 10%">No.</th>
                            <th style="width: 30%">Jenis Barang</th>
                            <th style="width: 15%">Jumlah</th>
                            <th style="width: 30%">Keterangan</th>
                            <th style="width: 15%">Tanggal</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${pengunjungByCode.barang_titipan
                            .map(
                              (barang, index) => `
                            <tr>
                              <td>${index + 1}</td>
                              <td>${barang.jenis_barang}</td>
                              <td>${barang.jumlah}</td>
                              <td>${barang.keterangan}</td>
                              <td>${
                                barang.createdAt
                                  ? new Date(barang.createdAt).toLocaleDateString("id-ID")
                                  : "-"
                              }</td>
                            </tr>
                          `
                            )
                            .join("")}
                        </tbody>
                      </table>
                    `
                      : '<div style="text-align: center; font-size: 6px;">Tidak ada barang titipan</div>'
                  }
                </div>
              </div>

              <div class="right-column">
                <!-- Nomor Antrian -->
                <div class="antrian-box">
                  <div class="antrian-text">Nomor : ${pengunjungByCode?.antrian || "Belum Ada Antrian"}</div>
                </div>

                <!-- Foto Pengunjung -->
                <div class="photo-section">
                  <div class="photo-label">Photo Pengunjung</div>
                  <img src="${pengunjungByCode?.photo_pengunjung || IconUser}" alt="Foto Pengunjung" class="photo-img" />
                </div>
              </div>
            </div>

            <!-- Status -->
            <div class="data-row">
              <div class="data-label">Status</div>
              <div class="data-value">: ${pengunjungByCode?.warga_binaan?.keterangan || ""}</div>
            </div>

            <!-- Data WBP -->
            <div class="wbp-section">
              <img src="${pengunjungByCode?.warga_binaan?.photo || IconUser}" alt="Foto WBP" class="wbp-photo" />
              <div style="flex: 1;">
                <div class="data-row">
                  <div class="data-label">Warga Binaan Yang Dikunjungi :</div>
                </div>
                <div class="data-row">
                  <div class="data-label" style="width: 30%">Nama</div>
                  <div class="data-value" style="width: 70%">: ${pengunjungByCode?.warga_binaan?.nama || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label" style="width: 30%">Perkara</div>
                  <div class="data-value" style="width: 70%">: ${pengunjungByCode?.warga_binaan?.jenis_kejahatan || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label" style="width: 30%">Blok Kamar Hunian</div>
                  <div class="data-value" style="width: 70%">: Blok ${pengunjungByCode?.warga_binaan?.lokasi_blok || ""}</div>
                </div>
                <div class="data-row">
                  <div class="data-label" style="width: 30%">Hubungan Dengan WBP</div>
                  <div class="data-value" style="width: 70%">: ${pengunjungByCode?.hubungan_keluarga || ""}</div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="signature">
                <div>A.n Kepala Rutan Kelas II B bantaeng Ka. Subsi</div>
                <div>Pelayanan Tahanan</div>
                <div style="margin-top: 40px;">(ASHADI, S.H.,M.M.)</div>
              </div>
              <div class="signature">
                <div>Bantaeng, ${
                  pengunjungByCode?.created_at
                    ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Tanggal tidak tersedia"
                }</div>
                <div>Petugas Pendaftaran</div>
                <div style="margin-top: 40px;">(................................)</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Buka jendela baru untuk print
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      
      // Tunggu sebentar untuk memastikan konten dimuat, lalu print
      setTimeout(() => {
        printWindow.print();
        setTimeout(() => {
          printWindow.close();
          setIsPrinting(false);
        }, 500);
      }, 500);
    } else {
      alert('Popup diblokir! Silakan izinkan popup untuk mencetak.');
      setIsPrinting(false);
    }
  };

  // FUNGSI PRINT LABEL TITIPAN
  const handlePrintLabelNow = () => {
    setIsPrinting(true);
    
    const labelContent = `
    
      <!DOCTYPE html>
      <html>
        <head>
          <title>Label Titipan - ${pengunjungByCode?.nama || ''}</title>
          <style>
             @media print {
    @page { margin: 0 10px 0 0; }
    html, body { 
      margin: 0; 
      padding: 0; 
    }
    .label-container {
      width: 80mm;
      height: 80mm;
      border: 1px dashed #000;
      padding: 1mm;
      page-break-after: always;
    }
              
              .label-title {
                text-align: center;
                font-size: 16px;
                font-weight: bold;
                text-decoration: underline;
                margin-bottom: 3mm;
              }
              .label-row {
                display: flex;
                margin-bottom: 1mm;
              }
              .label-key {
                width: 45%;
                font-weight: bold;
              }
              .label-value {
                width: 55%;
                font-size: 14px;
              }
              .barcode-container {
                text-align: right;
                margin-top: 2mm;
              }
              .barcode-img {
                width: 50px;
                height: 50px;
              }
            }
          </style>
        </head>
        <body>
          ${
            pengunjungByCode?.barang_titipan?.length > 0
              ? pengunjungByCode.barang_titipan
                  .map(
                    (titipan) => `
                <div class="label-container">
                  <div class="label-title">LABEL TITIPAN ${titipan?.jenis_barang?.toUpperCase()}</div>
                  <div class="label-row">
                    <div class="label-key">Nama WBP</div>
                    <div class="label-value">: ${pengunjungByCode?.warga_binaan?.nama || ""}</div>
                  </div>
                  <div class="label-row">
                    <div class="label-key">Status WBP</div>
                    <div class="label-value">: ${pengunjungByCode?.warga_binaan?.keterangan || ""}</div>
                  </div>
                  <div class="label-row">
                    <div class="label-key">Alamat WBP</div>
                    <div class="label-value">: ${pengunjungByCode?.warga_binaan?.alamat || ""}</div>
                  </div>
                  <div class="label-row">
                    <div class="label-key">Pengirim</div>
                    <div class="label-value">: ${pengunjungByCode?.nama || ""}</div>
                  </div>
                  <div class="label-row">
                    <div class="label-key">Alamat</div>
                    <div class="label-value">: ${pengunjungByCode?.alamat || ""}</div>
                  </div>
                  <div class="label-row">
                    <div class="label-key">Jenis Barang</div>
                    <div class="label-value">: ${titipan.jenis_barang}</div>
                  </div>
                  <div class="label-row">
                    <div class="label-key">Jumlah</div>
                    <div class="label-value">: ${titipan.jumlah}</div>
                  </div>
                  <div class="barcode-container">
                    ${pengunjungByCode?.barcode ? `<img src="${pengunjungByCode.barcode}" alt="Barcode" class="barcode-img" />` : ''}
                  </div>
                </div>
              `
                  )
                  .join("")
              : `
              <div class="label-container" style="display: flex; justify-content: center; align-items: center;">
                <div style="text-align: center; font-size: 12px;">Tidak ada barang titipan</div>
              </div>
            `
          }
        </body>
      </html>
      
    `;

    // Buka jendela baru untuk print label
    const printWindow = window.open('', '_blank', 'width=300,height=400');
    if (printWindow) {
      printWindow.document.write(labelContent);
      printWindow.document.close();
      
      setTimeout(() => {
        printWindow.print();
        setTimeout(() => {
          printWindow.close();
          setIsPrinting(false);
        }, 500);
      }, 500);
    } else {
      alert('Popup diblokir! Silakan izinkan popup untuk mencetak label.');
      setIsPrinting(false);
    }
  };

  // Handle Export PDF
  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(<PDFPreview />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `bukti-kunjungan-${id}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting PDF:", error);
      alert("Terjadi error saat mengexport PDF.");
    }
  };

  // Handle Export Label Titipan PDF
  const handleDownloadLabelPDF = async () => {
    try {
      const blob = await pdf(<LabelTitipanPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `label-titipan-${id}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting label PDF:", error);
      alert("Terjadi error saat mengexport label PDF.");
    }
  };

  if (!pengunjungByCode) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Data pengunjung tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div
        ref={componentRef}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-end w-full pl-2">
          <Link
            to="/"
            className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaHome className="font-bold text-black size-7" />
          </Link>
        </div>

        {/* Institutional Header */}
        <div className="p-6 flex border-b-2 border-gray-200">
          <span className=" p-0">
            <img src={logo} alt="kemenimipas" className="w-28"></img>
          </span>
          <span className=" text-center">
            <h3 className="text-lg leading-5 font-bold">
              KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
            </h3>
            <h4 className="text-md leading-5 font-bold">
              DIREKTORAT JENDRAL PEMASYARAKATAN
            </h4>
            <h4 className="text-md leading-5 font-bold">
              KANTOR WILAYAH SULAWESI SELATAN
            </h4>
            <h5 className="text-md leading-5 font-bold">
              RUMAH TAHANAN NEGARA KELAS IIB BANTAENG
            </h5>
            <p className="text-sm leading-3 mt-1">
              Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos: 92411
            </p>
            <p className="text-sm leading-3 italic mt-1">
              Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI:
              rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id
            </p>
          </span>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h3 className="font-bold text-center underline mb-6">
            BUKTI PENDAFTARAN KUNJUNGAN
          </h3>

          {/* Visitor Info Table */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex">
                <span className="font-semibold w-48">Nama pengunjung</span>
                <span>: {pengunjungByCode.nama || ""}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Jenis Kelamin</span>
                <span>: {pengunjungByCode.jenis_kelamin || ""}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">NIK</span>
                <span>: {pengunjungByCode.nik || ""}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Alamat</span>
                <span>: {pengunjungByCode.alamat || ""}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">No. Telepon</span>
                <span>: {pengunjungByCode.hp || ""}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Hubungan Dengan WBP</span>
                <span>: {pengunjungByCode.hubungan_keluarga || ""}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">WBP Yang Dikunjungi</span>
                <span>: {pengunjungByCode.warga_binaan?.nama || ""}</span>
              </div>
              <p className="font-semibold w-48">Photo Warga Binaan :</p>
              <img
                src={pengunjungByCode.warga_binaan?.photo || IconUser}
                alt="Photo WBP"
                className="max-h-36 w-52 object-fill mt-6"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              {/* NOMOR ANTRIAN */}
              <div className="border-2 border-blue-800 bg-blue-800 text-white p-4 rounded-lg text-center mb-4">
                <p className="font-bold text-xl">
                  Nomor Antrian : {pengunjungByCode.antrian || "Belum Ada Antrian"}
                </p>
              </div>

              <div className="flex">
                <span className="font-semibold w-48">Pengikut:</span>
                <div
                  className="grid grid-cols-[auto_1fr] gap-2"
                  style={{ marginLeft: -100 }}
                >
                  <span>Laki-laki</span>
                  <span>: {pengunjungByCode.pengikut_laki_laki || 0} Orang</span>
                  <span>Perempuan</span>
                  <span>: {pengunjungByCode.pengikut_perempuan || 0} Orang</span>
                  <span>Anak-anak</span>
                  <span>: {pengunjungByCode.pengikut_anak_anak || 0} Orang</span>
                  <span>Bayi</span>
                  <span>: {pengunjungByCode.pengikut_bayi || 0} Orang</span>
                </div>
              </div>
              <div className="w-full flex justify-center content-center ">
                <img
                  src={pengunjungByCode.photo_pengunjung || IconUser}
                  alt="Foto Pengunjung"
                  className=" content-center w-52 h-34 object-fill mt-6"
                />
              </div>
            </div>
          </div>

          {/* TABEL BARANG TITIPAN */}
          <div className="overflow-x-auto mt-8">
            <h4 className="font-bold text-lg mb-4 text-center underline">
              BARANG YANG DITITIPKAN
            </h4>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="border px-4 py-3 font-semibold">No</th>
                  <th className="border px-4 py-3 font-semibold">Jenis Barang</th>
                  <th className="border px-4 py-3 font-semibold">Jumlah</th>
                  <th className="border px-4 py-3 font-semibold">Keterangan</th>
                  <th className="border px-4 py-3 font-semibold">Tanggal Dititipkan</th>
                </tr>
              </thead>
              <tbody>
                {pengunjungByCode.barang_titipan?.length > 0 ? (
                  pengunjungByCode?.barang_titipan.map((barang, index) => (
                    <tr key={barang.id} className="text-center hover:bg-gray-50 transition-colors">
                      <td className="border px-4 py-2 font-medium">{index + 1}</td>
                      <td className="border px-4 py-2">{barang.jenis_barang}</td>
                      <td className="border px-4 py-2 font-semibold">{barang.jumlah}</td>
                      <td className="border px-4 py-2">{barang.keterangan}</td>
                      <td className="border px-4 py-2 text-gray-600">
                        {new Date(barang.createdAt).toLocaleDateString("id-ID")}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="border px-4 py-4 text-center text-gray-500 bg-gray-50">
                      Tidak ada barang titipan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="text-center m-0">
            <p className="text-sm text-gray-500 mt-2">
              Tanggal Daftar:{" "}
              {pengunjungByCode?.created_at
                ? new Date(pengunjungByCode.created_at).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Tanggal tidak tersedia"}
            </p>
            <div className="flex justify-center w-full">
              <img
                src={pengunjungByCode.barcode || ""}
                alt="Barcode"
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="text-center">{pengunjungByCode?.kode || ""}</p>
            <p className="text-center">{pengunjungByCode?.status || ""}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-50 p-4 border-t border-gray-200 flex flex-row justify-center gap-4 z-50">
          {isPrinting && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-center">Mempersiapkan cetakan...</p>
              </div>
            </div>
          )}

          {authUser.user.role === "admin" && (
            <>
              {pengunjungByCode.status === "Tidak Valid" && (
                <button
                  onClick={handleVerify}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-bold hover:bg-blue-700 disabled:opacity-50"
                >
                  {isLoading ? "Memverifikasi..." : "Verifikasi"}
                </button>
              )}
              {pengunjungByCode.status ===
                "Valid Divalidasi oleh Petugas Kunjungan" && (
                <button
                  onClick={handleVerify}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-bold hover:bg-blue-700 disabled:opacity-50"
                >
                  {isLoading ? "Memverifikasi..." : "Verifikasi"}
                </button>
              )}
              {pengunjungByCode.status === "Valid, Divalidasi Oleh P2U" && (
                <>
                  <p className="mt-2">Telah DiVerifikasi</p>
                </>
              )}

              <button
                onClick={() => navigate(`/update-pengunjung/${id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded text-bold hover:bg-blue-700"
              >
                Perbarui
              </button>
              
              {/* TOMBOL PRINT LANGSUNG KARTU KUNJUNGAN */}
              <button
                onClick={handlePrintNow}
                disabled={isPrinting}
                className="bg-green-600 text-white px-4 py-2 rounded text-bold hover:bg-green-700 disabled:opacity-50"
              >
                {isPrinting ? "Mencetak..." : "Print Kartu Kunjungan"}
              </button>
              {/* TOMBOL PRINT THERMAL LANGSUNG */}
<button
  onClick={handlePrintThermalNow}
  disabled={isPrinting}
  className="bg-gray-700 text-white px-4 py-2 rounded text-bold hover:bg-gray-800 disabled:opacity-50"
>
  {isPrinting ? "Mencetak..." : "Print Kartu Thermal"}
</button>
              
              {/* <button
                onClick={() => setShowPreview(true)}
                className="bg-green-500 text-white px-4 py-2 rounded text-bold hover:bg-green-600"
              >
                Preview Cetak
              </button>
              
              <button
                onClick={handleDownloadPDF}
                className="bg-purple-600 text-white px-4 py-2 rounded text-bold hover:bg-purple-700"
              >
                Export PDF
              </button> */}
              
              {/* TOMBOL PRINT LANGSUNG LABEL TITIPAN */}
              {pengunjungByCode.barang_titipan?.length > 0 && (
                <>
                  <button
                    onClick={handlePrintLabelNow}
                    disabled={isPrinting}
                    className="bg-orange-600 text-white px-4 py-2 rounded text-bold hover:bg-orange-700 disabled:opacity-50"
                  >
                    {isPrinting ? "Mencetak..." : "Print Label"}
                  </button>
                  
                  {/* <button
                    onClick={() => setShowLabelPreview(true)}
                    className="bg-orange-500 text-white px-4 py-2 rounded text-bold hover:bg-orange-600"
                  >
                    Preview Label
                  </button> */}
                  
                  {/* <button
                    onClick={handleDownloadLabelPDF}
                    className="bg-red-600 text-white px-4 py-2 rounded text-bold hover:bg-red-700"
                  >
                    Export Label PDF
                  </button> */}
                </>
              )}
            </>
          )}
          
          {authUser.user.role === "p2u" && (
            <>
              {pengunjungByCode.status === "Tidak Valid" && (
                <button
                  onClick={handleVerify}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {isLoading ? "Memverifikasi..." : "Verifikasi"}
                </button>
              )}
              {pengunjungByCode.status ===
                "Valid Divalidasi oleh Petugas Kunjungan" && (
                <button
                  onClick={handleVerify}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {isLoading ? "Memverifikasi..." : "Verifikasi"}
                </button>
              )}
              {pengunjungByCode.status === "Valid, Divalidasi Oleh P2U" && (
                <>
                  <p className="mt-2">Telah DiVerifikasi</p>
                </>
              )}

              {/* TOMBOL PRINT LANGSUNG KARTU KUNJUNGAN */}
              <button
                onClick={handlePrintNow}
                disabled={isPrinting}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {isPrinting ? "Mencetak..." : "Print Langsung"}
              </button>
              
              <button
                onClick={() => setShowPreview(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Preview Cetak
              </button>
              
              <button
                onClick={handleDownloadPDF}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Export PDF
              </button>
              
              {/* TOMBOL PRINT LANGSUNG LABEL TITIPAN */}
              {pengunjungByCode.barang_titipan?.length > 0 && (
                <>
                  <button
                    onClick={handlePrintLabelNow}
                    disabled={isPrinting}
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 disabled:opacity-50"
                  >
                    {isPrinting ? "Mencetak..." : "Print Label Langsung"}
                  </button>
                  
                  <button
                    onClick={() => setShowLabelPreview(true)}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    Preview Label
                  </button>
                  
                  <button
                    onClick={handleDownloadLabelPDF}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Export Label PDF
                  </button>
                </>
              )}
            </>
          )}
          
          {authUser.user?.role === "user" && (
            <>
              <button
                onClick={() => navigate(`/update-pengunjung/${id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Perbarui
              </button>
              
              {/* TOMBOL PRINT LANGSUNG KARTU KUNJUNGAN */}
              <button
                onClick={handlePrintNow}
                disabled={isPrinting}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {isPrinting ? "Mencetak..." : "Print Langsung"}
              </button>
              
              <button
                onClick={() => setShowPreview(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Preview Cetak
              </button>
              
              <button
                onClick={handleDownloadPDF}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Export PDF
              </button>
              
              {/* TOMBOL PRINT LANGSUNG LABEL TITIPAN */}
              {pengunjungByCode.barang_titipan?.length > 0 && (
                <>
                  <button
                    onClick={handlePrintLabelNow}
                    disabled={isPrinting}
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 disabled:opacity-50"
                  >
                    {isPrinting ? "Mencetak..." : "Print Label Langsung"}
                  </button>
                  
                  <button
                    onClick={() => setShowLabelPreview(true)}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    Preview Label
                  </button>
                  
                  <button
                    onClick={handleDownloadLabelPDF}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Export Label PDF
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">PDF Cetak</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-black hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="h-full">
              <PDFViewer width="100%" height="100%">
                <PDFPreview />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}

      {/* Label Titipan PDF Preview Modal */}
      {showLabelPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Label Titipan PDF</h2>
              <button
                onClick={() => setShowLabelPreview(false)}
                className="text-black hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="h-full">
              <PDFViewer width="100%" height="100%">
                <LabelTitipanPDF />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PengunjungDetail;