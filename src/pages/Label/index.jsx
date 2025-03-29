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
  const { kode } = useParams();
  const { fetchPengunjungByCode, pengunjungByCode, verify } = useDataStore();
  const { authUser } = useAuthStore();
  const componentRef = useRef();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPengunjungByCode(kode);
  }, [kode, fetchPengunjungByCode]);

  const navigate = useNavigate();

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      padding: 20,
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
      flexWrap: "wrap"
    },
    barcodeContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    barcodeText: {
      fontSize: 5,
      marginTop: 5,
    },
  });

  const DataPengunjung = () => (
    <View style={styles.table}>
      {/* Baris Nama Pengunjung */}
      <View style={[[styles.row, { lineHeight: 0.3 }], { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Nama pengunjung</Text>
        <Text style={styles.value}>: {pengunjungByCode?.nama}</Text>
      </View>

      {/* Baris Jenis Kelamin */}
      <View style={[[styles.row, { lineHeight: 0.3 }], { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <Text style={styles.value}>: {pengunjungByCode?.jenis_kelamin}</Text>
      </View>

      {/* Baris No. KTP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>No. KTP</Text>
        <Text style={styles.value}>: {pengunjungByCode?.nik}</Text>
      </View>

      {/* Baris Alamat */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Alamat</Text>
        <Text style={styles.value}>: {pengunjungByCode?.alamat}</Text>
      </View>

      {/* Baris No. Telepon */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>No. Telepon</Text>
        <Text style={styles.value}>: {pengunjungByCode?.hp}</Text>
      </View>

      {/* Baris Hubungan dengan WBP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Hubungan Dengan WBP</Text>
        <Text style={styles.value}>
          : {pengunjungByCode?.hubungan_keluarga}
        </Text>
      </View>

      {/* Baris Tanggal Daftar */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label}>Tanggal Daftar</Text>
        <Text style={styles.value}>
          :{" "}
          {pengunjungByCode?.created_at
            ? new Date(pengunjungByCode.created_at).toLocaleDateString(
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
            : {pengunjungByCode?.pengikut_laki_laki}
          </Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -10 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}> Perempuan</Text>
          <Text style={styles.value}>
            : {pengunjungByCode?.pengikut_perempuan}
          </Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -10 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}> Anak-anak</Text>
          <Text style={styles.value}>
            : {pengunjungByCode?.pengikut_anak_anak}
          </Text>
        </View>
      </View>
      <View style={[[styles.row, { lineHeight: 0.3 }], { marginBottom: -15 }]}>
        <Text style={styles.label}></Text>
        <View style={[styles.row, { lineHeight: 0.3 }]}>
          <Text style={styles.label}> Bayi</Text>
          <Text style={styles.value}>: {pengunjungByCode?.pengikut_bayi}</Text>
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
        </View>

        {/* Baris Data Barang */}
        {/* {pengunjungByCode?.barang_dititipkan?.map((barang, index) => ( */}
        {pengunjungByCode?.barang_titipan?.length > 0 ? (
          pengunjungByCode.barang_titipan.map((barang, index) => (
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
          : {pengunjungByCode.warga_binaan?.nama}
        </Text>
      </View>

      {/* Baris No. KTP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Perkara</Text>
        <Text style={styles.value}>
          : {pengunjungByCode.warga_binaan?.jenis_kejahatan}
        </Text>
      </View>

      {/* Baris Alamat */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Blok Kamar Hunian</Text>
        <Text style={styles.value}>
          : Blok {pengunjungByCode.warga_binaan?.lokasi_blok}
        </Text>
      </View>

      {/* Baris No. Telepon */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>No. Telepon</Text>
        <Text style={styles.value}>: {pengunjungByCode?.hp}</Text>
      </View>

      {/* Baris Hubungan dengan WBP */}
      <View style={[styles.row, { lineHeight: 0.3 }]}>
        <Text style={styles.label_wbp}>Hubungan Dengan WBP</Text>
        <Text style={styles.value}>
          : {pengunjungByCode?.hubungan_keluarga}
        </Text>
      </View>
    </View>
  );

  const WbpImage = () => (
    <View style={[[styles.row, { lineHeight: 0.3 }]]}>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}> */}
      {/* <Text style={styles.label_photo}>Photo KTP</Text>
      <Image 
        src={pengunjungByCode?.photo_ktp} 
        style={{ width: 100, height: 100 }} // Sesuaikan ukuran gambar
      /> */}
      <Image
        src={pengunjungByCode.warga_binaan?.photo || IconUser}
        style={{ width: 100, height: 50 }} // Sesuaikan ukuran gambar
      />
      {/* </View> */}
    </View>
  );

  const PDFPreview = () => (
    <Document>
      <Page size={[226.772, 164.41]} style={styles.page}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column", // Baris disusun secara horizontal
            marginBottom: -20,
            lineHeight: 0.25,
            gap: 3,
          }}
        >
          {pengunjungByCode.barang_titipan.length > 0 ? (
            pengunjungByCode.barang_titipan.map((titipan) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1 dashed black",
                  padding: 3,
                  width: "100%",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                {/* Content */}
                <View style={styles.section}>
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
                  {/* Komponen Gambar */}
                  <View
                    style={{
                      lineHeight: 0.3,
                      flexDirection: "row", // Baris disusun secara horizontal
                      // borderBottomWidth: 1,
                      // borderColor: '#000',
                      paddingVertical: 5,
                    }}
                  >
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Nama WBP
                    </Text>
                    <Text style={styles.value}>
                      : {pengunjungByCode.warga_binaan?.nama}
                    </Text>
                  </View>
                  <View style={[styles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Pengirim
                    </Text>
                    <Text style={styles.value}>: {pengunjungByCode.nama}</Text>
                  </View>
                  <View style={[styles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Alamat
                    </Text>
                    <Text style={styles.value}>
                      : {pengunjungByCode.alamat}
                    </Text>
                  </View>
                  <View style={[styles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Jenis Barang
                    </Text>
                    <Text style={styles.value}>: {titipan.jenis_barang}</Text>
                  </View>
                  <View style={[styles.row, { lineHeight: 0.3 }]}>
                    <Text style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}>
                      Jumlah
                    </Text>
                    <Text style={styles.value}>: {titipan.jumlah}</Text>
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
  );

  // Handle Print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Handle Export PDF
  const handleDownloadPDF = async () => {
    const blob = await pdf(
      <Document>
        <Page size={[226.772, 164.41]} style={styles.page}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "column", // Baris disusun secara horizontal
              marginBottom: -20,
              lineHeight: 0.25,
              gap: 3,
            }}
          >
            {pengunjungByCode.barang_titipan.length > 0 ? (
              pengunjungByCode.barang_titipan.map((titipan) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1 dashed black",
                    padding: 3,
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  {/* Content */}
                  <View style={styles.section}>
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
                    {/* Komponen Gambar */}
                    <View
                      style={{
                        lineHeight: 0.3,
                        flexDirection: "row", // Baris disusun secara horizontal
                        // borderBottomWidth: 1,
                        // borderColor: '#000',
                        paddingVertical: 5,
                      }}
                    >
                      <Text
                        style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
                      >
                        Nama WBP
                      </Text>
                      <Text style={styles.value}>
                        : {pengunjungByCode.warga_binaan?.nama}
                      </Text>
                    </View>
                    <View style={[styles.row, { lineHeight: 0.3 }]}>
                      <Text
                        style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
                      >
                        Pengirim
                      </Text>
                      <Text style={styles.value}>
                        : {pengunjungByCode.nama}
                      </Text>
                    </View>
                    <View style={[styles.row, { lineHeight: 0.3 }]}>
                      <Text
                        style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
                      >
                        Alamat
                      </Text>
                      <Text style={styles.value}>
                        : {pengunjungByCode.alamat}
                      </Text>
                    </View>
                    <View style={[styles.row, { lineHeight: 0.3 }]}>
                      <Text
                        style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
                      >
                        Jenis Barang
                      </Text>
                      <Text style={styles.value}>: {titipan.jenis_barang}</Text>
                    </View>
                    <View style={[styles.row, { lineHeight: 0.3 }]}>
                      <Text
                        style={{ width: "45%", paddingLeft: 5, fontSize: 9 }}
                      >
                        Jumlah
                      </Text>
                      <Text style={styles.value}>: {titipan.jumlah}</Text>
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
    link.download = `bukti-kunjungan-${kode}.pdf`;
    link.click();
  };

  if (!pengunjungByCode) {
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
            <FaHome className="font-bold size-3.5" />
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
                <span>: {pengunjungByCode.nama}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Jenis Kelamin</span>
                <span>: {pengunjungByCode.jenis_kelamin}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">NIK</span>
                <span>: {pengunjungByCode.nik}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Alamat</span>
                <span>: {pengunjungByCode.alamat}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">No. Telepon</span>
                <span>: {pengunjungByCode.hp}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">Hubungan Dengan WBP</span>
                <span>: {pengunjungByCode.hubungan_keluarga}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-48">WBP Yang Dikunjungi</span>
                <span>: {pengunjungByCode.warga_binaan?.nama}</span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="border border-indigo-600 border-2 p-4 rounded-lg">
                <p className="font-bold text-xl">
                  Nomor Antrian :{" "}
                  {pengunjungByCode.antrian || "Belum Ada Antrian"}
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
                {pengunjungByCode.barang_titipan?.length > 0 ? (
                  pengunjungByCode?.barang_titipan.map((barang, index) => (
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
                {pengunjungByCode?.created_at
                  ? new Date(pengunjungByCode.created_at).toLocaleDateString(
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
                  src={pengunjungByCode.barcode}
                  alt="Barcode"
                  className="h-20 w-20 object-contain"
                />
              </div>
              <p className="text-center">{pengunjungByCode?.kode}</p>
              <p className="text-center">{pengunjungByCode?.status}</p>
            </div>
          </div>
          {/* Barcode */}
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-row justify-center gap-4">
          {authUser.user.role === "admin" && (
            <>
              <button
                onClick={() => navigate(`/update-pengunjung/${kode}`)}
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
                <PDFPreview ref={componentRef}/>
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PengunjungLabel;

