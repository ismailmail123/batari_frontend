import React, { useEffect, useRef, useState } from "react";
import useDataStore from "../../store/useDataStore";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
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

const PengunjungLabel = () => {
  const { id } = useParams();
  const { fetchPengunjungById, pengunjungById, verify } = useDataStore();
  const { authUser } = useAuthStore();
  const componentRef = useRef();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mmToPt = (mm) => mm * 2.83465;

  useEffect(() => {
    fetchPengunjungById(id);
  }, [id, fetchPengunjungById]);

  const navigate = useNavigate();

  console.log("pengunjungById:", pengunjungById);

  const styles = StyleSheet.create({
    // page: {
    //   flexDirection: "column",
    //   backgroundColor: "#FFFFFF",
    //   padding: 2,
    //   // paddingRight: 10,
    //   fontFamily: "Helvetica",
    // },
    page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 4, // Ubah dari 2 menjadi 0
    fontFamily: "Helvetica",
  },
    kop: {
      flexDirection: "row", // Menyusun gambar dan teks secara horizontal
      alignItems: "center", // Menyelaraskan gambar dan teks secara vertikal di tengah
      marginBottom: 10, // Jarak antara kop dan konten berikutnya
    },
    headerContainer: {
      flex: 1, // Mengisi sisa ruang yang tersedia
      alignItems: "center", // Menengahkan teks header secara horizontal
      padding: 0,
      marginLeft: -50,
      borderBottom: 1,
    },
    header: {
      fontSize: 7,
      marginBottom: 5,
      textAlign: "center", // Teks header di tengah
      fontWeight: "bold",
      lineHeight: 0.7,
    },
    address: {
      fontSize: 5,
      textAlign: "center", // Teks alamat di tengah
      marginBottom: 10,
      lineHeight: 0.2,
    },
    icon_image: {
      width: 50,
      height: 50,
      marginRight: 10, // Jarak antara gambar dan teks
      marginBottom: 10,
    },
    table: {
      width: "100%",
      height: "100%"
      // marginBottom: 15,
    },
    row: {
      flexDirection: "row", // Baris disusun secara horizontal
      // borderBottomWidth: 1,
      // borderColor: '#000',
      paddingVertical: 5,
      lineHeight: 0.25,
    },
    label: {
      width: "45%", // Lebar kolom label
      paddingLeft: 5,
      fontSize: 6,
    },
    labelContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1 dashed black",
    padding: 3,
    width: "100%",
    height: "77mm", // Pastikan tinggi sesuai
    marginBottom: 3, // Tambahkan margin bottom
    pageBreakInside: 'avoid', // Hindari potongan di tengah elemen
  },
    label_wbp: {
      width: "30%", // Lebar kolom label
      paddingLeft: 5,
      fontSize: 6,
    },
    label_photo: {
      width: "45%", // Lebar kolom label
      // paddingLeft: 5,
      textAlign: "center",
      fontSize: 6,
      marginTop: -30,
      marginLeft: -30,
    },
    value: {
      width: "80%", // Lebar kolom nilai
      fontSize: 9,
      flexWrap: "wrap",
      lineHeight: 0.85,
    },
    barcodeContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    barcodeText: {
      fontSize: 5,
      marginTop: 5,
    },
    dataRow: {
  flexDirection: "row",
  paddingVertical: 2,
  lineHeight: 0.8,
},
dataLabel: {
  width: "45%",
  paddingLeft: 5,
  fontSize: 8,
},
dataValue: {
  width: "55%",
  fontSize: 8,
  flexWrap: "wrap",
},
  });

  const DataPengunjung = () => (
    <View style={styles.table}>
      {/* Baris Nama Pengunjung */}
      <View style={[[styles.row, { lineHeight: 0.3 }], { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Nama pengunjung</Text>
        <Text style={styles.value}>: {pengunjungById?.nama}</Text>
      </View>

      {/* Baris Jenis Kelamin */}
      <View style={[[styles.row, { lineHeight: 0.3 }], { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <Text style={styles.value}>: {pengunjungById?.jenis_kelamin}</Text>
      </View>

      {/* Baris No. KTP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>No. KTP</Text>
        <Text style={styles.value}>: {pengunjungById?.nik}</Text>
      </View>

      {/* Baris Alamat */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Alamat</Text>
        <Text style={styles.value}>: {pengunjungById?.alamat}</Text>
      </View>

      {/* Baris No. Telepon */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>No. Telepon</Text>
        <Text style={styles.value}>: {pengunjungById?.hp}</Text>
      </View>

      {/* Baris Hubungan dengan WBP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Hubungan Dengan WBP</Text>
        <Text style={styles.value}>
          : {pengunjungById?.hubungan_keluarga}
        </Text>
      </View>

      {/* Baris Tanggal Daftar */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Tanggal Daftar</Text>
        <Text style={styles.value}>
          :{" "}
          {pengunjungById?.created_at
            ? new Date(pengunjungById.created_at).toLocaleDateString(
                "id-ID",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )
            : "Tanggal tidak tersedia"}
        </Text>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -10 }]}>
        <Text style={styles.label}>Pengikut</Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}>: Laki-laki</Text>
          <Text style={styles.value}>
            : {pengunjungById?.pengikut_laki_laki}
          </Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -10 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}> Perempuan</Text>
          <Text style={styles.value}>
            : {pengunjungById?.pengikut_perempuan}
          </Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -10 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}> Anak-anak</Text>
          <Text style={styles.value}>
            : {pengunjungById?.pengikut_anak_anak}
          </Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -15 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}> Bayi</Text>
          <Text style={styles.value}>: {pengunjungById?.pengikut_bayi}</Text>
        </View>
      </View>

      <Text
        style={{
          textAlign: "start",
          marginTop: 13,
          marginBottom: 3,
          fontSize: 7,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        BARANG YANG DITITIPKAN
      </Text>
      <View style={styles.table}>
        {/* Header Tabel */}
        <View
          style={[
            [styles.row, { lineHeight: 0.3 }],
            {
              backgroundColor: "#f0f0f0",
              borderWidth: 1,
              borderColor: "#000",
              borderStyle: "solid",
            },
          ]}
        >
          <Text
            style={[
              styles.label,
              {
                width: "10%",
                fontWeight: "bold",
                borderRightWidth: 1,
                borderColor: "#000",
              },
            ]}
          >
            No.
          </Text>
          <Text
            style={[
              styles.label,
              {
                width: "40%",
                fontWeight: "bold",
                borderRightWidth: 1,
                borderColor: "#000",
              },
            ]}
          >
            Jenis Barang
          </Text>
          <Text
            style={[
              styles.label,
              {
                width: "20%",
                fontWeight: "bold",
                borderRightWidth: 1,
                borderColor: "#000",
              },
            ]}
          >
            Jumlah
          </Text>
          <Text style={[styles.label, { width: "30%", fontWeight: "bold" }]}>
            Keterangan
          </Text>
          <Image
            src={pengunjungById?.barcode}
            style={{ width: 50, height: 50, marginLeft: 5, marginTop: -15 }}  
          />
        </View>

        {/* Baris Data Barang */}
        {/* {pengunjungById?.barang_dititipkan?.map((barang, index) => ( */}
        {pengunjungById?.barang_titipan?.length > 0 ? (
          pengunjungById.barang_titipan.map((barang, index) => (
            <View
              key={barang.id}
              style={[
                [styles.row, { lineHeight: 0.3 }],
                { borderWidth: 1, borderColor: "#000", borderStyle: "solid" },
              ]}
            >
              <Text
                style={[
                  styles.value,
                  {
                    width: "10%",
                    borderRightWidth: 1,
                    borderColor: "#000",
                    textAlign: "center",
                  },
                ]}
              >
                {index + 1}
              </Text>
              <Text
                style={[
                  styles.value,
                  {
                    width: "40%",
                    borderRightWidth: 1,
                    borderColor: "#000",
                    paddingLeft: 5,
                  },
                ]}
              >
                {barang.jenis_barang}
              </Text>
              <Text
                style={[
                  styles.value,
                  {
                    width: "20%",
                    borderRightWidth: 1,
                    borderColor: "#000",
                    paddingLeft: 5,
                  },
                ]}
              >
                {barang.jumlah}
              </Text>
              <Text style={[styles.value, { width: "30%", paddingLeft: 5 }]}>
                {barang.keterangan}
              </Text>
              
            </View>
          ))
        ) : (
          <View
            style={[
              [styles.row, { lineHeight: 0.3 }],
              { borderWidth: 1, borderColor: "#000" },
            ]}
          >
            <Text
              style={[styles.value, { width: "100%", textAlign: "center" }]}
            >
              Tidak ada barang titipan
            </Text>
          </View>
        )}
        {/* ))} */}
      </View>
    </View>
  );

  const DataWbp = () => (
    <View style={[styles.table, { marginLeft: 30, marginTop: -10 }]}>
      {/* Baris Nama Pengunjung */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Warga Binaan Yang Dikunjungi :</Text>
      </View>

      {/* Baris Jenis Kelamin */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Nama</Text>
        <Text style={styles.value}>
          : {pengunjungById.warga_binaan?.nama}
        </Text>
      </View>

      {/* Baris No. KTP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Perkara</Text>
        <Text style={styles.value}>
          : {pengunjungById.warga_binaan?.jenis_kejahatan}
        </Text>
      </View>

      {/* Baris Alamat */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Blok Kamar Hunian</Text>
        <Text style={styles.value}>
          : Blok {pengunjungById.warga_binaan?.lokasi_blok}
        </Text>
      </View>

      {/* Baris No. Telepon */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>No. Telepon</Text>
        <Text style={styles.value}>: {pengunjungById?.hp}</Text>
      </View>

      {/* Baris Hubungan dengan WBP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Hubungan Dengan WBP</Text>
        <Text style={styles.value}>
          : {pengunjungById?.hubungan_keluarga}
        </Text>
      </View>
    </View>
  );

  const WbpImage = () => (
    <View style={[[styles.row, { lineHeight: 0.3 }]]}>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}> */}
      {/* <Text style={styles.label_photo}>Photo KTP</Text>
      <Image 
        src={pengunjungById?.photo_ktp} 
        style={{ width: 100, height: 100 }} // Sesuaikan ukuran gambar
      /> */}
      <Image
        src={pengunjungById.warga_binaan?.photo || IconUser}
        style={{ width: 100, height: 50 }} // Sesuaikan ukuran gambar
      />
      {/* </View> */}
    </View>
  );

  // const PDFPreview = () => (
  //   <Document>
  //     <Page size={[mmToPt(80), mmToPt(80)]} style={styles.page}>
  //       <View
  //         style={{
  //           justifyContent: "space-between",
  //           flexDirection: "column", // Baris disusun secara horizontal
  //           marginBottom: -20,
  //           lineHeight: 0.25,
  //           gap: 3,
  //         }}
  //       >
  //         {pengunjungById.barang_titipan.length > 0 ? (
  //           pengunjungById.barang_titipan.map((titipan) => (
  //             <View
  //               style={{
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 border: "1 dashed black",
  //                 padding: 3,
  //                 width: "100%",
  //                 height: "77mm",
  //                 // paddingTop: 40,
  //                 paddingBottom: 10,
  //                 marginTop: 0,
  //               }}
  //             >
  //               {/* Content */}
  //               <View style={styles.section}>
  //                 <Text
  //                   style={{
  //                     textAlign: "center",
  //                     marginBottom: 10,
  //                     fontSize: 10,
  //                     fontWeight: "bold",
  //                     textDecoration: "underline",
  //                   }}
  //                 >
  //                   LABEL TITIPAN {titipan?.jenis_barang?.toUpperCase()}
  //                 </Text>
  //               </View>
  //               <View
  //                 key={titipan.id}
  //                 style={{
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   width: "100%",
  //                 }}
  //               >
  //                 {/* Komponen Gambar */}
  //                 <View
  //                   style={{
  //                     lineHeight: 0.3,
  //                     flexDirection: "row", // Baris disusun secara horizontal
  //                     // borderBottomWidth: 1,
  //                     // borderColor: '#000',
  //                     paddingVertical: 5,
  //                   }}
  //                 >
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Nama WBP
  //                   </Text>
  //                   <Text style={styles.value}>
  //                     : {pengunjungById.warga_binaan?.nama}
  //                   </Text>
  //                 </View>
  //                 <View
  //                   style={{
  //                     lineHeight: 0.3,
  //                     flexDirection: "row", // Baris disusun secara horizontal
  //                     // borderBottomWidth: 1,
  //                     // borderColor: '#000',
  //                     paddingVertical: 5,
  //                   }}
  //                 >
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Status WBP
  //                   </Text>
  //                   <Text style={styles.value}>
  //                     : {pengunjungById.warga_binaan?.keterangan}
  //                   </Text>
  //                 </View>
  //                 <View
  //                   style={{
  //                     lineHeight: 0.3,
  //                     flexDirection: "row", // Baris disusun secara horizontal
  //                     // borderBottomWidth: 1,
  //                     // borderColor: '#000',
  //                     paddingVertical: 5,
  //                   }}
  //                 >
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Alamat WBP
  //                   </Text>
  //                   <Text style={styles.value}>
  //                     : {pengunjungById.warga_binaan?.alamat}
  //                   </Text>
  //                 </View>
  //                 <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Pengirim
  //                   </Text>
  //                   <Text style={styles.value}>: {pengunjungById.nama}</Text>
  //                 </View>
  //                 <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Alamat
  //                   </Text>
  //                   <Text style={styles.value}>
  //                     : {pengunjungById.alamat}
  //                   </Text>
  //                 </View>
  //                 <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Jenis Barang
  //                   </Text>
  //                   <Text style={styles.value}>: {titipan.jenis_barang}</Text>
  //                 </View>
  //                 <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                   <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
  //                     Jumlah
  //                   </Text>
  //                   <Text style={styles.value}>: {titipan.jumlah}</Text>
  //                 </View>
  //                 <View style={[styles.row, { alignSelf: 'flex-end', position: 'fixed-button'}]}>
  //                   <Image
  //                     src={pengunjungById?.barcode}
  //                     style={{ width: 50, height: 50, marginLeft: 5, marginTop: -15, alignSelf: 'end' }}
  //                   />
  //                   </View>
  //               </View>
  //             </View>
  //           ))
  //         ) : (
  //           <></>
  //         )}
  //       </View>
  //     </Page>
  //   </Document>
  // );

  // Handle Print
  const PDFPreview = () => (
  <Document>
    <Page 
      size={[mmToPt(80), mmToPt(80)]} 
      style={styles.page}
      wrap={true} // Enable wrapping untuk multiple pages
    >
      <View style={{
        flexDirection: "column",
        marginBottom: 0,
        lineHeight: 0.25,
        gap: 2, // Kurangi gap
      }}>
        {pengunjungById.barang_titipan.length > 0 ? (
          pengunjungById.barang_titipan.map((titipan, index) => (
            <View 
              key={titipan.id}
              style={styles.labelContainer}
              wrap={false} // Nonaktifkan wrap untuk container individual
            >
              {/* Content */}
              <View style={{marginBottom: 5}}>
                <Text style={{
                  textAlign: "center",
                  marginBottom: 5, // Kurangi margin
                  fontSize: 10,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}>
                  LABEL TITIPAN {titipan?.jenis_barang?.toUpperCase()}
                </Text>
              </View>
              
              <View style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                flexGrow: 1,
              }}>
                {/* Data fields */}
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Nama WBP</Text>
                  <Text style={styles.dataValue}>: {pengunjungById.warga_binaan?.nama}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Status WBP</Text>
                  <Text style={styles.dataValue}>: {pengunjungById.warga_binaan?.keterangan}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Alamat WBP</Text>
                  <Text style={styles.dataValue}>: {pengunjungById.warga_binaan?.alamat}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Pengirim</Text>
                  <Text style={styles.dataValue}>: {pengunjungById.nama}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Alamat</Text>
                  <Text style={styles.dataValue}>: {pengunjungById.alamat}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Jenis Barang</Text>
                  <Text style={styles.dataValue}>: {titipan.jenis_barang}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Jumlah</Text>
                  <Text style={styles.dataValue}>: {titipan.jumlah}</Text>
                </View>
                
                {/* Barcode di pojok kanan bawah */}
                <View style={{
                  position: 'absolute',
                  right: 5,
                  bottom: 5,
                }}>
                  <Image
                    src={pengunjungById?.barcode}
                    style={{ 
                      width: 40, 
                      height: 40,
                    }}
                  />
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.labelContainer}>
            <Text>Tidak ada barang titipan</Text>
          </View>
        )}
      </View>
    </Page>
  </Document>
);
  
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Handle Export PDF
  // const handleDownloadPDF = async () => {
  //   const blob = await pdf(
  //     <Document>
  //       <Page size={[mmToPt(80), mmToPt(80)]} style={styles.page}>
  //         <View
  //           style={{
  //             justifyContent: "space-between",
  //             flexDirection: "column", // Baris disusun secara horizontal
  //             marginBottom: -20,
  //             lineHeight: 0.25,
  //             gap: 3,
  //           }}
  //         >
  //           {pengunjungById.barang_titipan.length > 0 ? (
  //             pengunjungById.barang_titipan.map((titipan) => (
  //               <View
  //                 style={{
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   border: "1 dashed black",
  //                   padding: 3,
  //                   width: "100%",
  //                   paddingTop: 10,
  //                   paddingBottom: 10,
  //                 }}
  //               >
  //                 {/* Content */}
  //                 <View style={styles.section}>
  //                   <Text
  //                     style={{
  //                       textAlign: "center",
  //                       marginBottom: 10,
  //                       fontSize: 10,
  //                       fontWeight: "bold",
  //                       textDecoration: "underline",
  //                     }}
  //                   >
  //                     LABEL TITIPAN {titipan?.jenis_barang?.toUpperCase()}
  //                   </Text>
  //                 </View>
  //                 <View
  //                   key={titipan.id}
  //                   style={{
  //                     display: "flex",
  //                     flexDirection: "column",
  //                     width: "100%",
  //                   }}
  //                 >
  //                   {/* Komponen Gambar */}
  //                   <View
  //                     style={{
  //                       lineHeight: 0.3,
  //                       flexDirection: "row", // Baris disusun secara horizontal
  //                       // borderBottomWidth: 1,
  //                       // borderColor: '#000',
  //                       paddingVertical: 5,
  //                     }}
  //                   >
  //                     <Text
  //                       style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
  //                     >
  //                       Nama WBP
  //                     </Text>
  //                     <Text style={styles.value}>
  //                       : {pengunjungById.warga_binaan?.nama}
  //                     </Text>
  //                   </View>
  //                   <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                     <Text
  //                       style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
  //                     >
  //                       Pengirim
  //                     </Text>
  //                     <Text style={styles.value}>
  //                       : {pengunjungById.nama}
  //                     </Text>
  //                   </View>
  //                   <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                     <Text
  //                       style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
  //                     >
  //                       Alamat
  //                     </Text>
  //                     <Text style={styles.value}>
  //                       : {pengunjungById.alamat}
  //                     </Text>
  //                   </View>
  //                   <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                     <Text
  //                       style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
  //                     >
  //                       Jenis Barang
  //                     </Text>
  //                     <Text style={styles.value}>: {titipan.jenis_barang}</Text>
  //                   </View>
  //                   <View style={[styles.row, { lineHeight: 0.3 }]}>
  //                     <Text
  //                       style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
  //                     >
  //                       Jumlah
  //                     </Text>
  //                     <Text style={styles.value}>: {titipan.jumlah}</Text>
  //                   </View>
  //                 </View>
  //               </View>
  //             ))
  //           ) : (
  //             <></>
  //           )}
  //         </View>
  //       </Page>
  //     </Document>
  //   ).toBlob();

  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = `bukti-kunjungan-${kode}.pdf`;
  //   link.click();
  // };
  const handleDownloadPDF = async () => {
  const blob = await pdf(
    <Document>
      <Page 
        size={[mmToPt(80), mmToPt(80)]} 
        style={styles.page}
        wrap={true}
      >
        <View style={{
          flexDirection: "column",
          marginBottom: 0,
          lineHeight: 0.25,
          gap: 2,
        }}>
          {pengunjungById.barang_titipan.length > 0 ? (
            pengunjungById.barang_titipan.map((titipan) => (
              <View 
                key={titipan.id}
                style={styles.labelContainer}
                wrap={false}
              >
                {/* Gunakan struktur yang sama dengan PDFPreview */}
                <View style={{marginBottom: 5}}>
                  <Text style={{
                    textAlign: "center",
                    marginBottom: 5,
                    fontSize: 10,
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}>
                    LABEL TITIPAN {titipan?.jenis_barang?.toUpperCase()}
                  </Text>
                </View>
                
                <View style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  flexGrow: 1,
                }}>
                  {/* Data fields - sama seperti di PDFPreview */}
                  <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Nama WBP</Text>
                    <Text style={styles.dataValue}>: {pengunjungById.warga_binaan?.nama}</Text>
                  </View>
                  
                  {/* ... tambahkan field lainnya seperti di PDFPreview */}
                  
                  <View style={{
                    position: 'absolute',
                    right: 5,
                    bottom: 5,
                  }}>
                    <Image
                      src={pengunjungById?.barcode}
                      style={{ 
                        width: 40, 
                        height: 40,
                      }}
                    />
                  </View>
                </View>
              </View>
            ))
          ) : (
            <></>
          )}
        </View>
      </Page>
    </Document>
  ).toBlob();

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `label-titipan-${id}.pdf`;
  link.click();
};

  if (!pengunjungById) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">
          Data pengunjung tidak ditemukan.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div
        ref={componentRef}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex justify-end w-full pl-2">
          <Link
            to="/"
            className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaHome className="font-bold text-black size-[30px]" />
          </Link>
        </div>
        {/* Institutional Header */}
        <div className="p-6 mt-[-50px] flex border-b-2 border-gray-200">
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
              Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode
              Pos: 92411
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
            DETAIL KUNJUNGAN
          </h3>

          {/* Visitor Info Table */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-2 sm:col-span-1">
              {/* Baris dengan flex untuk meratakan titik dua */}
              <div className="flex">
                <span className="font-semibold w-48">Nama pengunjung</span>
                <span>: {pengunjungById.nama}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Jenis Kelamin</span>
                <span>: {pengunjungById.jenis_kelamin}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">NIK</span>
                <span>: {pengunjungById.nik}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Alamat</span>
                <span>: {pengunjungById.alamat}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">No. Telepon</span>
                <span>: {pengunjungById.hp}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Hubungan Dengan WBP</span>
                <span>: {pengunjungById.hubungan_keluarga}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">WBP Yang Dikunjungi</span>
                <span>: {pengunjungById.warga_binaan?.nama}</span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="border border-indigo-600 border-2 p-4 rounded-lg">
                <p className="font-bold text-xl">
                  Nomor Antrian :{" "}
                  {pengunjungById.antrian || "Belum Ada Antrian"}
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Jenis Barang</th>
                  <th className="border px-4 py-2">Jumlah</th>
                  <th className="border px-4 py-2">Keterangan</th>
                  <th className="border px-4 py-2">Tanggal Dititipkan</th>
                </tr>
              </thead>
              <tbody>
                {pengunjungById.barang_titipan?.length > 0 ? (
                  pengunjungById?.barang_titipan.map((barang, index) => (
                    <tr key={barang.id} className="text-center">
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">
                        {barang.jenis_barang}
                      </td>
                      <td className="border px-4 py-2">{barang.jumlah}</td>
                      <td className="border px-4 py-2">{barang.keterangan}</td>
                      <td className="border px-4 py-2">
                        {new Date(barang.createdAt).toLocaleDateString("id-ID")}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="border px-4 py-2 text-center">
                      Tidak ada barang titipan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="text-center m-0">
              <p className="text-sm text-gray-500 mt-2">
                Tanggal Daftar:{" "}
                {pengunjungById?.created_at
                  ? new Date(pengunjungById.created_at).toLocaleDateString(
                      "id-ID",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  : "Tanggal tidak tersedia"}
              </p>
              <div className="flex justify-center w-full">
                <img
                  src={pengunjungById.barcode}
                  alt="Barcode"
                  className="h-20 w-20 object-contain"
                />
              </div>
              <p className="text-center">{pengunjungById?.kode}</p>
              <p className="text-center">{pengunjungById?.status}</p>
            </div>
          </div>
          {/* Barcode */}
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-row justify-center gap-4">
          {authUser.user.role === "admin" && (
            <>
              <button
                onClick={() => navigate(`/update-pengunjung/${id}`)}
                className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
              >
                Perbarui
              </button>
              <button
                onClick={() => setShowPreview(true)}
                className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
              >
                Cetak
              </button>
              <button
                onClick={handleDownloadPDF}
                className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700"
              >
                Export PDF
              </button>
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
    </div>
  );
};

export default PengunjungLabel;

// // import React, { useEffect, useState } from "react";
// // import useDataStore from "../../store/useDataStore";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import { FaHome, FaPrint, FaSpinner } from "react-icons/fa";
// // import useAuthStore from "../../store/useAuthStore";
// // import "./style.css";

// // const PengunjungLabelThermal = () => {
// //   const { kode } = useParams();
// //   const { fetchPengunjungById, pengunjungById } = useDataStore();
// //   const { authUser } = useAuthStore();
// //   const navigate = useNavigate();
// //   const [isPrinting, setIsPrinting] = useState(false);
// //   const [printStatus, setPrintStatus] = useState("");

// //   useEffect(() => {
// //     fetchPengunjungById(kode);
// //   }, [kode, fetchPengunjungById]);

// //   const directPrint = (content) => {
// //     return new Promise((resolve, reject) => {
// //       try {
// //         // Method 1: Menggunakan window.print() dengan iframe
// //         const iframe = document.createElement('iframe');
// //         iframe.style.position = 'fixed';
// //         iframe.style.right = '0';
// //         iframe.style.bottom = '0';
// //         iframe.style.width = '0';
// //         iframe.style.height = '0';
// //         iframe.style.border = 'none';
        
// //         document.body.appendChild(iframe);
        
// //         const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
// //         // Konten thermal printer friendly
// //         iframeDoc.write(`
// //           <!DOCTYPE html>
// //           <html>
// //           <head>
// //             <title>Print Thermal</title>
// //             <style>
// //               @media print {
// //                 body { 
// //                   margin: 0; 
// //                   padding: 0; 
// //                   font-family: 'Courier New', monospace;
// //                   font-size: 12px;
// //                   line-height: 1.2;
// //                   width: 80mm;
// //                 }
// //                 .container { 
// //                   width: 80mm; 
// //                   padding: 2mm;
// //                   word-wrap: break-word;
// //                 }
// //                 .text-center { text-align: center; }
// //                 .text-bold { font-weight: bold; }
// //                 .border-bottom { border-bottom: 1px dashed #000; padding-bottom: 2mm; margin-bottom: 2mm; }
// //                 .line { border-top: 1px dashed #000; margin: 2mm 0; }
// //                 .barcode { image-rendering: pixelated; width: 150px; height: 50px; }
// //                 .mt-1 { margin-top: 1mm; }
// //                 .mb-1 { margin-bottom: 1mm; }
// //                 .p-1 { padding: 1mm; }
// //               }
// //               @page { margin: 0; size: 80mm auto; }
// //             </style>
// //           </head>
// //           <body>
// //             <div class="container">
// //               ${content}
// //             </div>
// //             <script>
// //               window.onload = function() {
// //                 setTimeout(function() {
// //                   window.print();
// //                   setTimeout(function() {
// //                     window.onafterprint = function() {
// //                       window.parent.postMessage('printCompleted', '*');
// //                     };
// //                   }, 100);
// //                 }, 500);
// //               };
// //             </script>
// //           </body>
// //           </html>
// //         `);
        
// //         iframeDoc.close();
        
// //         // Listen for print completion
// //         const handleMessage = (event) => {
// //           if (event.data === 'printCompleted') {
// //             document.body.removeChild(iframe);
// //             window.removeEventListener('message', handleMessage);
// //             resolve();
// //           }
// //         };
        
// //         window.addEventListener('message', handleMessage);
        
// //         // Fallback timeout
// //         setTimeout(() => {
// //           document.body.removeChild(iframe);
// //           window.removeEventListener('message', handleMessage);
// //           resolve();
// //         }, 5000);
        
// //       } catch (error) {
// //         reject(error);
// //       }
// //     });
// //   };

// //   const handlePrintThermal = async () => {
// //     setIsPrinting(true);
// //     setPrintStatus("Mempersiapkan cetakan...");
    
// //     try {
// //       const thermalContent = `
// //         <div class="text-center text-bold">
// //           <div>KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN</div>
// //           <div>RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</div>
// //           <div class="line"></div>
// //         </div>
        
// //         <div class="text-center text-bold border-bottom">
// //           BUKTI KUNJUNGAN
// //         </div>
        
// //         <div class="text-bold">DATA PENGGUNA:</div>
// //         <div>Nama&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${pengunjungById?.nama || '-'}</div>
// //         <div>Jenis Kelamin : ${pengunjungById?.jenis_kelamin || '-'}</div>
// //         <div>NIK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${pengunjungById?.nik || '-'}</div>
// //         <div>Alamat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${pengunjungById?.alamat || '-'}</div>
// //         <div>Telp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${pengunjungById?.hp || '-'}</div>
// //         <div>Hubungan&nbsp;&nbsp;: ${pengunjungById?.hubungan_keluarga || '-'}</div>
        
// //         <div class="line"></div>
        
// //         <div class="text-bold">DATA WBP:</div>
// //         <div>Nama WBP&nbsp;&nbsp;: ${pengunjungById?.warga_binaan?.nama || '-'}</div>
// //         <div>Perkara&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${pengunjungById?.warga_binaan?.jenis_kejahatan || '-'}</div>
// //         <div>Blok Kamar&nbsp;: Blok ${pengunjungById?.warga_binaan?.lokasi_blok || '-'}</div>
        
// //         <div class="line"></div>
        
// //         <div class="text-bold">PENGGUNA:</div>
// //         <div>Laki-laki&nbsp;&nbsp;: ${pengunjungById?.pengikut_laki_laki || 0}</div>
// //         <div>Perempuan&nbsp;: ${pengunjungById?.pengikut_perempuan || 0}</div>
// //         <div>Anak-anak&nbsp;: ${pengunjungById?.pengikut_anak_anak || 0}</div>
// //         <div>Bayi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${pengunjungById?.pengikut_bayi || 0}</div>
        
// //         <div class="line"></div>
        
// //         <div class="text-bold">BARANG TITIPAN:</div>
// //         ${pengunjungById?.barang_titipan?.length > 0 ? 
// //           pengunjungById.barang_titipan.map((barang, index) => 
// //             `<div>${index + 1}. ${barang.jenis_barang} - ${barang.jumlah} pcs</div>` +
// //             (barang.keterangan ? `<div>&nbsp;&nbsp;Ket: ${barang.keterangan}</div>` : '')
// //           ).join('') : 
// //           '<div>Tidak ada barang titipan</div>'
// //         }
        
// //         <div class="line"></div>
        
// //         <div class="text-center">
// //           <div class="text-bold">NOMOR ANTRIAN:</div>
// //           <div class="text-bold" style="font-size: 16px;">${pengunjungById?.antrian || 'BELUM ADA'}</div>
// //         </div>
        
// //         <div class="text-center mt-1">
// //           <div>${pengunjungById?.created_at ? 
// //             new Date(pengunjungById.created_at).toLocaleDateString('id-ID', {
// //               day: '2-digit',
// //               month: 'short',
// //               year: 'numeric'
// //             }) : 'Tanggal tidak tersedia'
// //           }</div>
// //         </div>
        
// //         <div class="text-center">
// //           <div class="text-bold">KODE: ${pengunjungById?.kode || '-'}</div>
// //           <div>Status: ${pengunjungById?.status?.toUpperCase() || '-'}</div>
// //         </div>
        
// //         ${pengunjungById?.barcode ? `
// //           <div class="text-center mt-1">
// //             <img src="${pengunjungById.barcode}" class="barcode" alt="Barcode">
// //           </div>
// //         ` : ''}
        
// //         <div class="text-center mt-1">
// //           <div>================================</div>
// //         </div>
// //       `;

// //       setPrintStatus("Membuka dialog print...");
// //       await directPrint(thermalContent);
      
// //       setPrintStatus("Cetakan berhasil dikirim!");
// //       setTimeout(() => setPrintStatus(""), 2000);
      
// //     } catch (error) {
// //       console.error('Print error:', error);
// //       setPrintStatus("Error: Gagal mencetak");
// //       setTimeout(() => setPrintStatus(""), 3000);
// //     } finally {
// //       setIsPrinting(false);
// //     }
// //   };

// //   const handlePrintLabelTitipan = async () => {
// //     if (!pengunjungById?.barang_titipan?.length) return;
    
// //     setIsPrinting(true);
// //     setPrintStatus("Mempersiapkan label titipan...");
    
// //     try {
// //       for (const titipan of pengunjungById.barang_titipan) {
// //         const labelContent = `
// //           <div class="text-center text-bold">
// //             <div>LABEL TITIPAN</div>
// //             <div>${titipan.jenis_barang.toUpperCase()}</div>
// //             <div class="line"></div>
// //           </div>
          
// //           <div class="text-bold">NAMA WBP:</div>
// //           <div>${pengunjungById.warga_binaan?.nama || '-'}</div>
          
// //           <div class="text-bold">PENGIRIM:</div>
// //           <div>${pengunjungById.nama || '-'}</div>
          
// //           <div class="text-bold">ALAMAT:</div>
// //           <div>${pengunjungById.alamat || '-'}</div>
          
// //           <div class="line"></div>
          
// //           <div class="text-bold">JENIS BARANG:</div>
// //           <div>${titipan.jenis_barang}</div>
          
// //           <div class="text-bold">JUMLAH:</div>
// //           <div>${titipan.jumlah} pcs</div>
          
// //           ${titipan.keterangan ? `
// //             <div class="text-bold">KETERANGAN:</div>
// //             <div>${titipan.keterangan}</div>
// //           ` : ''}
          
// //           <div class="line"></div>
          
// //           <div class="text-center">
// //             <div>${new Date().toLocaleDateString('id-ID')}</div>
// //             <div>${pengunjungById.kode}</div>
// //           </div>
          
// //           <div class="text-center mt-1">
// //             <div>================================</div>
// //           </div>
// //         `;

// //         await directPrint(labelContent);
// //         await new Promise(resolve => setTimeout(resolve, 1000)); // Delay antar label
// //       }
      
// //       setPrintStatus("Semua label berhasil dicetak!");
// //       setTimeout(() => setPrintStatus(""), 2000);
      
// //     } catch (error) {
// //       console.error('Label print error:', error);
// //       setPrintStatus("Error: Gagal mencetak label");
// //       setTimeout(() => setPrintStatus(""), 3000);
// //     } finally {
// //       setIsPrinting(false);
// //     }
// //   };

// //   // Fallback print method menggunakan window.print() langsung
// //   const fallbackPrint = () => {
// //     const printWindow = window.open('', '_blank');
// //     const content = `
// //       <!DOCTYPE html>
// //       <html>
// //       <head>
// //         <title>Print ${pengunjungById?.kode}</title>
// //         <style>
// //           body { 
// //             font-family: 'Courier New', monospace;
// //             font-size: 12px;
// //             line-height: 1.2;
// //             margin: 0;
// //             padding: 10px;
// //           }
// //           .text-center { text-align: center; }
// //           .text-bold { font-weight: bold; }
// //           .line { border-top: 1px dashed #000; margin: 5px 0; }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="text-center text-bold">
// //           <div>BUKTI KUNJUNGAN</div>
// //           <div>${pengunjungById?.kode}</div>
// //         </div>
// //         <div class="line"></div>
// //         <div>Nama: ${pengunjungById?.nama}</div>
// //         <div>WBP: ${pengunjungById?.warga_binaan?.nama}</div>
// //         <div>Antrian: ${pengunjungById?.antrian}</div>
// //         <div class="line"></div>
// //         <div class="text-center">Silakan gunakan CTRL+P untuk mencetak</div>
// //       </body>
// //       </html>
// //     `;
    
// //     printWindow.document.write(content);
// //     printWindow.document.close();
// //     printWindow.focus();
// //     printWindow.print();
// //     printWindow.close();
// //   };

// //   if (!pengunjungById) {
// //     return (
// //       <div className="flex justify-center items-center h-screen bg-gray-100">
// //         <p className="text-xl text-gray-700">Data pengunjung tidak ditemukan.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-4 px-2">
// //       {/* Print Status Indicator */}
// //       {printStatus && (
// //         <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg ${
// //           printStatus.includes('Error') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
// //         }`}>
// //           {printStatus}
// //         </div>
// //       )}

// //       <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
// //         {/* Header */}
// //         <div className="bg-blue-600 text-white p-3 text-center">
// //           <div className="flex justify-between items-center mb-2">
// //             <Link to="/" className="text-white hover:text-gray-200">
// //               <FaHome className="text-xl" />
// //             </Link>
// //             <h1 className="text-lg font-bold">CETAK THERMAL</h1>
// //             <div className="w-6"></div>
// //           </div>
// //           <p className="text-xs">RUTAN KELAS IIB BANTAENG</p>
// //         </div>

// //         {/* Content Summary */}
// //         <div className="p-4">
// //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
// //             <h3 className="font-bold text-center text-blue-800 mb-2">SUMMARY KUNJUNGAN</h3>
// //             <div className="grid grid-cols-2 gap-2 text-sm">
// //               <div>
// //                 <span className="font-medium">Kode:</span> {pengunjungById.kode}
// //               </div>
// //               <div>
// //                 <span className="font-medium">Status:</span> {pengunjungById.status}
// //               </div>
// //               <div>
// //                 <span className="font-medium">Nama:</span> {pengunjungById.nama}
// //               </div>
// //               <div>
// //                 <span className="font-medium">WBP:</span> {pengunjungById.warga_binaan?.nama}
// //               </div>
// //               <div className="col-span-2">
// //                 <span className="font-medium">Antrian:</span> {pengunjungById.antrian || 'Belum ada'}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Quick Info Cards */}
// //           <div className="grid grid-cols-2 gap-3 mb-4">
// //             <div className="bg-green-50 border border-green-200 rounded p-2 text-center">
// //               <div className="text-2xl font-bold text-green-600">{pengunjungById.barang_titipan?.length || 0}</div>
// //               <div className="text-xs text-green-800">Barang Titipan</div>
// //             </div>
// //             <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">
// //               <div className="text-2xl font-bold text-purple-600">
// //                 {((pengunjungById.pengikut_laki_laki || 0) + (pengunjungById.pengikut_perempuan || 0) + (pengunjungById.pengikut_anak_anak || 0) + (pengunjungById.pengikut_bayi || 0))}
// //               </div>
// //               <div className="text-xs text-purple-800">Total Pengikut</div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="bg-gray-50 p-4 border-t border-gray-200">
// //           <div className="flex flex-col gap-3">
// //             <button
// //               onClick={handlePrintThermal}
// //               disabled={isPrinting}
// //               className="bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50 transition duration-200"
// //             >
// //               {isPrinting ? <FaSpinner className="animate-spin" /> : <FaPrint />}
// //               {isPrinting ? "Mencetak..." : "Cetak Bukti Kunjungan"}
// //             </button>
            
// //             {pengunjungById.barang_titipan?.length > 0 && (
// //               <button
// //                 onClick={handlePrintLabelTitipan}
// //                 disabled={isPrinting}
// //                 className="bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 disabled:opacity-50 transition duration-200"
// //               >
// //                 {isPrinting ? <FaSpinner className="animate-spin" /> : <FaPrint />}
// //                 {isPrinting ? "Mencetak..." : "Cetak Label Titipan"}
// //               </button>
// //             )}
            
// //             <button
// //               onClick={fallbackPrint}
// //               className="bg-gray-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition duration-200"
// //             >
// //               <FaPrint />
// //               Cetak Manual (Fallback)
// //             </button>

// //             {authUser?.user?.role === "admin" && (
// //               <button
// //                 onClick={() => navigate(`/update-pengunjung/${kode}`)}
// //                 className="bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition duration-200"
// //               >
// //                 Perbarui Data
// //               </button>
// //             )}
// //           </div>
// //         </div>

// //         {/* Printing Instructions */}
// //         <div className="bg-yellow-50 border-t border-yellow-200 p-3">
// //           <div className="text-xs text-yellow-800">
// //             <strong>Petunjuk Cetak:</strong> Pastikan thermal printer sudah terhubung dan menjadi printer default.
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PengunjungLabelThermal;

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

// const PengunjungLabel = () => {
//   const { kode } = useParams();
//   const { fetchPengunjungById, pengunjungById, verify } = useDataStore();
//   const { authUser } = useAuthStore();
//   const componentRef = useRef();
//   const [showPreview, setShowPreview] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const mmToPt = (mm) => mm * 2.83465;

//   useEffect(() => {
//     fetchPengunjungById(kode);
//   }, [kode, fetchPengunjungById]);

//   const navigate = useNavigate();

//   console.log("pengunjungById:", pengunjungById);

//   // Styles untuk PDF dengan font size dinamis
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "column",
//       backgroundColor: "#FFFFFF",
//       padding: 3,
//       fontFamily: "Helvetica",
//       width: mmToPt(80),
//       height: mmToPt(80),
//     },
//     adaptiveContainer: {
//       flex: 1,
//       justifyContent: 'flex-start',
//       padding: 2,
//     },
//     adaptiveTitle: {
//       textAlign: "center",
//       fontSize: 7,
//       fontWeight: "bold",
//       marginBottom: 4,
//       textDecoration: "underline",
//     },
//     adaptiveRow: {
//       flexDirection: "row",
//       marginBottom: 2,
//       flexWrap: 'wrap',
//       alignItems: 'flex-start',
//     },
//     adaptiveLabel: {
//       fontWeight: "bold",
//       width: '35%',
//       paddingRight: 2,
//     },
//     adaptiveValue: {
//       width: '65%',
//       flexWrap: 'wrap',
//       flex: 1,
//     },
//     adaptiveBarcode: {
//       alignSelf: 'flex-end',
//       marginTop: 'auto',
//       paddingTop: 5,
//     },
//     smallBarcode: {
//       width: 35,
//       height: 35,
//     },
//     noDataContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     noDataText: {
//       fontSize: 8,
//       textAlign: 'center',
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
//   });

//   // Komponen untuk menghitung font size dinamis
//   const calculateFontSize = (text, maxLength = 30) => {
//     const baseSize = 6;
//     if (!text) return baseSize;
    
//     // Kurangi font size jika teks terlalu panjang
//     if (text.length > maxLength) {
//       const reduction = Math.floor((text.length - maxLength) / 10);
//       return Math.max(4, baseSize - reduction);
//     }
//     return baseSize;
//   };

//   // Komponen Adaptive Row
//   const AdaptiveRow = ({ label, value }) => {
//     const labelFontSize = calculateFontSize(label, 20);
//     const valueFontSize = calculateFontSize(value, 40);
    
//     return (
//       <View style={styles.adaptiveRow}>
//         <Text style={[styles.adaptiveLabel, { fontSize: labelFontSize }]}>
//           {label}
//         </Text>
//         <Text style={[styles.adaptiveValue, { fontSize: valueFontSize }]}>
//           : {value || '-'}
//         </Text>
//       </View>
//     );
//   };

//   // Komponen Adaptive Label untuk setiap barang titipan
//   const AdaptiveLabel = ({ titipan }) => (
//     <View style={styles.adaptiveContainer}>
//       <Text style={styles.adaptiveTitle}>
//         LABEL TITIPAN {titipan?.jenis_barang?.toUpperCase() || 'BARANG'}
//       </Text>
      
//       <AdaptiveRow 
//         label="Nama WBP" 
//         value={pengunjungById?.warga_binaan?.nama}
//       />
//       <AdaptiveRow 
//         label="Status WBP" 
//         value={pengunjungById?.warga_binaan?.keterangan}
//       />
//       <AdaptiveRow 
//         label="Alamat WBP" 
//         value={pengunjungById?.warga_binaan?.alamat}
//       />
//       <AdaptiveRow 
//         label="Pengirim" 
//         value={pengunjungById?.nama}
//       />
//       <AdaptiveRow 
//         label="Alamat" 
//         value={pengunjungById?.alamat}
//       />
//       <AdaptiveRow 
//         label="Jenis Barang" 
//         value={titipan?.jenis_barang}
//       />
//       <AdaptiveRow 
//         label="Jumlah" 
//         value={titipan?.jumlah?.toString()}
//       />
//       {titipan?.keterangan && (
//         <AdaptiveRow 
//           label="Keterangan" 
//           value={titipan?.keterangan}
//         />
//       )}
      
//       <View style={styles.adaptiveBarcode}>
//         <Image
//           src={pengunjungById?.barcode}
//           style={styles.smallBarcode}
//         />
//       </View>
//     </View>
//   );

//   // PDF Preview dengan Adaptive Layout
//   const PDFPreview = () => (
//     <Document>
//       {pengunjungById?.barang_titipan?.length > 0 ? (
//         pengunjungById.barang_titipan.map((titipan) => (
//           <Page 
//             key={titipan.id} 
//             size={[mmToPt(80), mmToPt(80)]} 
//             style={styles.page}
//             wrap={false}
//           >
//             <AdaptiveLabel titipan={titipan} />
//           </Page>
//         ))
//       ) : (
//         <Page size={[mmToPt(80), mmToPt(80)]} style={styles.page}>
//           <View style={styles.noDataContainer}>
//             <Text style={styles.noDataText}>
//               TIDAK ADA BARANG TITIPAN
//             </Text>
//           </View>
//         </Page>
//       )}
//     </Document>
//   );

//   // Handle Print
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   // Handle Export PDF
//   const handleDownloadPDF = async () => {
//     setIsLoading(true);
//     try {
//       const blob = await pdf(<PDFPreview />).toBlob();
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `label-titipan-${kode}.pdf`;
//       link.click();
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Komponen untuk tampilan web (tetap sama)
//   const DataPengunjung = () => (
//     <View style={styles.table}>
//       {/* ... (kode DataPengunjung tetap sama seperti sebelumnya) */}
//     </View>
//   );

//   const DataWbp = () => (
//     <View style={[styles.table, { marginLeft: 30, marginTop: -10 }]}>
//       {/* ... (kode DataWbp tetap sama seperti sebelumnya) */}
//     </View>
//   );

//   const WbpImage = () => (
//     <View style={[[styles.row, { lineHeight: 0.3 }]]}>
//       <Image
//         src={pengunjungById?.warga_binaan?.photo || IconUser}
//         style={{ width: 100, height: 50 }}
//       />
//     </View>
//   );

//   if (!pengunjungById) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <p className="text-xl text-gray-700">
//           Data pengunjung tidak ditemukan.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div
//         ref={componentRef}
//         className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
//       >
//         <div className="flex justify-end w-full pl-2">
//           <Link
//             to="/"
//             className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             <FaHome className="font-bold text-black size-[30px]" />
//           </Link>
//         </div>
        
//         {/* Institutional Header */}
//         <div className="p-6 mt-[-50px] flex border-b-2 border-gray-200">
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
//               Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com/ rtn.bantaeng@kemenkumham.go.id
//             </p>
//           </span>
//         </div>

//         {/* Main Content */}
//         <div className="p-6">
//           <h3 className="font-bold text-center underline mb-6">
//             DETAIL KUNJUNGAN
//           </h3>

//           {/* Visitor Info Table */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="col-span-2 sm:col-span-1">
//               <div className="flex">
//                 <span className="font-semibold w-48">Nama pengunjung</span>
//                 <span>: {pengunjungById.nama}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">Jenis Kelamin</span>
//                 <span>: {pengunjungById.jenis_kelamin}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">NIK</span>
//                 <span>: {pengunjungById.nik}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">Alamat</span>
//                 <span>: {pengunjungById.alamat}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">No. Telepon</span>
//                 <span>: {pengunjungById.hp}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">Hubungan Dengan WBP</span>
//                 <span>: {pengunjungById.hubungan_keluarga}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-semibold w-48">WBP Yang Dikunjungi</span>
//                 <span>: {pengunjungById.warga_binaan?.nama}</span>
//               </div>
//             </div>
//             <div className="col-span-2 sm:col-span-1">
//               <div className="border border-indigo-600 border-2 p-4 rounded-lg">
//                 <p className="font-bold text-xl">
//                   Nomor Antrian : {pengunjungById.antrian || "Belum Ada Antrian"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Barang Titipan Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-4 py-2">No</th>
//                   <th className="border px-4 py-2">Jenis Barang</th>
//                   <th className="border px-4 py-2">Jumlah</th>
//                   <th className="border px-4 py-2">Keterangan</th>
//                   <th className="border px-4 py-2">Tanggal Dititipkan</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pengunjungById.barang_titipan?.length > 0 ? (
//                   pengunjungById?.barang_titipan.map((barang, index) => (
//                     <tr key={barang.id} className="text-center">
//                       <td className="border px-4 py-2">{index + 1}</td>
//                       <td className="border px-4 py-2">{barang.jenis_barang}</td>
//                       <td className="border px-4 py-2">{barang.jumlah}</td>
//                       <td className="border px-4 py-2">{barang.keterangan}</td>
//                       <td className="border px-4 py-2">
//                         {new Date(barang.createdAt).toLocaleDateString("id-ID")}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="border px-4 py-2 text-center">
//                       Tidak ada barang titipan
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
            
//             <div className="text-center m-0">
//               <p className="text-sm text-gray-500 mt-2">
//                 Tanggal Daftar:{" "}
//                 {pengunjungById?.created_at
//                   ? new Date(pengunjungById.created_at).toLocaleDateString("id-ID", {
//                       weekday: "long",
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })
//                   : "Tanggal tidak tersedia"}
//               </p>
//               <div className="flex justify-center w-full">
//                 <img
//                   src={pengunjungById.barcode}
//                   alt="Barcode"
//                   className="h-20 w-20 object-contain"
//                 />
//               </div>
//               <p className="text-center">{pengunjungById?.kode}</p>
//               <p className="text-center">{pengunjungById?.status}</p>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-row justify-center gap-4">
//           {authUser.user.role === "admin" && (
//             <>
//               <button
//                 onClick={() => navigate(`/update-pengunjung/${kode}`)}
//                 className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Perbarui
//               </button>
//               <button
//                 onClick={() => setShowPreview(true)}
//                 className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Cetak Label
//               </button>
//               <button
//                 onClick={handleDownloadPDF}
//                 disabled={isLoading}
//                 className="bg-purple-600 text-black px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
//               >
//                 {isLoading ? "Generating..." : "Export PDF"}
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* PDF Preview Modal */}
//       {showPreview && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-semibold">Preview Label Titipan (80x80mm)</h2>
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
//             <div className="flex justify-end p-4 border-t">
//               <button
//                 onClick={() => setShowPreview(false)}
//                 className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Tutup
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PengunjungLabel;