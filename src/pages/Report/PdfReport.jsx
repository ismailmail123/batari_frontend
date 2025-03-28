import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import moment from 'moment';
import logo from "../../assets/logokemenimipas.png";

// Register font
Font.register({
	family: 'Roboto',
	fonts: [
	  {
		src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf',
		fontWeight: 'normal',
	  },
	  {
		src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf',
		fontWeight: 'bold',
	  },
	],
  });
  
  // Create styles
  const styles = StyleSheet.create({
	page: {
	  padding: 30,
	  fontSize: 10,
	  fontFamily: 'Roboto',
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
	header1: {
		fontSize: 10,
		marginBottom: 5,
		textAlign: "center", // Teks header di tengah
		fontWeight: "bold",
		lineHeight: 0.7,
	  },
	  address: {
		fontSize: 7,
		textAlign: "center", // Teks alamat di tengah
		marginBottom: 10,
		lineHeight: 0.2,
	  },
	header: {
	  marginBottom: 20,
	  textAlign: 'center',
	},
	title: {
	  fontSize: 16,
	  fontWeight: 'bold',
	  marginBottom: 10,
	},
	table: {
	  display: "table",
	  width: "100%",
	  borderStyle: "solid",
	  borderWidth: 1,
	  borderColor: '#000',
	  marginBottom: 20,
	},
	tableRow: { 
	  flexDirection: "row",
	},
	tableColHeader: {
	  width: "16.66%",
	  borderStyle: "solid",
	  borderWidth: 1,
	  borderColor: '#000',
	  backgroundColor: '#f3f4f6',
	  padding: 5,
	},
	tableCol: {
	  width: "16.66%",
	  borderStyle: "solid",
	  borderWidth: 1,
	  borderColor: '#000',
	  padding: 5,
	},
	summaryContainer: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  marginBottom: 20,
	},
	summaryBox: {
	  width: '30%',
	  borderStyle: 'solid',
	  borderWidth: 1,
	  borderColor: '#000',
	  padding: 10,
	},
	summaryTitle: {
	  fontSize: 12,
	  fontWeight: 'bold',
	  marginBottom: 5,
	},
	signatureContainer: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  marginTop: 40,
	},
	signatureBox: {
	  width: '45%',
	  textAlign: 'center',
	},
	signatureLine: {
	  borderTopStyle: 'solid',
	  borderTopWidth: 1,
	  borderTopColor: '#000',
	  paddingTop: 30,
	  marginTop: 30,
	},
	textCenter: {
	  textAlign: 'center',
	},
	headerText: {
	  fontSize: 12,
	  marginBottom: 5,
	},
    icon_image: {
      width: 50,
      height: 50,
      marginRight: 10, // Jarak antara gambar dan teks
      marginBottom: 10,
    },
  });
  

const PDFReport = ({ data }) => {
  const {
    filteredPengunjungs = [],
    totals = {},
    barangTitipan = {},
    rekapPengunjung = {},
    rekapPenitipan = {},
  } = data;

  console.log ("ini dta dari pdf", data)

  // Komponen Gambar
	const LogoImage = () => <Image style={styles.icon_image} src={logo} />;

    const HeaderText = () => (
	  <View style={styles.headerContainer}>
		<Text style={styles.header1}>
		  KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA
		</Text>
		<Text style={styles.header1}>DIREKTORAT JENDRAL PEMASYARAKATAN</Text>
		<Text style={styles.header1}>KANTOR WILAYAH SULAWESI SELATAN</Text>
		<Text style={styles.header1}>RUMAH TAHANAN NEGARA KELAS IIB BANTAENG</Text>
		<Text style={styles.address}>
		  Jl. mawar No. 9 Kel. Pallantikan, Bantaeng. Telp (0411)2112 Kode Pos:
		  92411
		</Text>
		<Text style={styles.address}>
		  Laman: rutanbantaeng.kemenkumham.go.id, Pos-EI: rutanbantaeng@ymail.com/
		  rtn.bantaeng@kemenkumham.go.id
		</Text>
	  </View>
	);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
				<View style={styles.kop}>
				  {/* Komponen Gambar */}
				  <LogoImage />
				  {/* Komponen Teks Header */}
				  <HeaderText />
				</View>
				<View style={{textAlign: "center", fontSize: 10, fontWeight: "bold"}}>
					<Text>Laporan</Text>
					<Text>Tentang</Text>
					<Text>Laporan kunjungan dan Penitipan Barang</Text>
					<Text>Tanggal, </Text>
				</View>

        {/* Tabel Utama */}
        <View style={styles.table}>
          {/* Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Warga Binaan</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Pengunjung</Text>
            </View>
            <View style={[styles.tableColHeader, styles.textCenter]}>
              <Text>Laki-laki</Text>
            </View>
            <View style={[styles.tableColHeader, styles.textCenter]}>
              <Text>Perempuan</Text>
            </View>
            <View style={[styles.tableColHeader, styles.textCenter]}>
              <Text>Anak-anak</Text>
            </View>
            <View style={[styles.tableColHeader, styles.textCenter]}>
              <Text>Bayi</Text>
            </View>
          </View>

          {/* Data */}
          {filteredPengunjungs.map((pengunjung, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>{pengunjung.warga_binaan?.nama || "-"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{pengunjung.nama}</Text>
              </View>
              <View style={[styles.tableCol, styles.textCenter]}>
                <Text>{pengunjung.pengikut_laki || 0}</Text>
              </View>
              <View style={[styles.tableCol, styles.textCenter]}>
                <Text>{pengunjung.pengikut_perempuan || 0}</Text>
              </View>
              <View style={[styles.tableCol, styles.textCenter]}>
                <Text>{pengunjung.pengikut_anak || 0}</Text>
              </View>
              <View style={[styles.tableCol, styles.textCenter]}>
                <Text>{pengunjung.pengikut_bayi || 0}</Text>
              </View>
            </View>
          ))}

          {/* Footer */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '33.32%' }]}>
              <Text>Total</Text>
            </View>
            <View style={[styles.tableCol, styles.textCenter]}>
              <Text>{totals.laki}</Text>
            </View>
            <View style={[styles.tableCol, styles.textCenter]}>
              <Text>{totals.perempuan}</Text>
            </View>
            <View style={[styles.tableCol, styles.textCenter]}>
              <Text>{totals.anak}</Text>
            </View>
            <View style={[styles.tableCol, styles.textCenter]}>
              <Text>{totals.bayi}</Text>
            </View>
          </View>
        </View>

        {/* Rekapan Data */}
        <View style={styles.summaryContainer}>
          {/* Rekap Pengunjung */}
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Rekap Pengunjung</Text>
            <Text>Narapidana Aktif: {rekapPengunjung.narapidanaAktif}</Text>
            <Text>Tahanan: {rekapPengunjung.tahanan}</Text>
          </View>

          {/* Rekap Penitipan Barang */}
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Rekap Penitipan Barang</Text>
            <Text>Narapidana Aktif: {rekapPenitipan.narapidanaAktif}</Text>
            <Text>Tahanan: {rekapPenitipan.tahanan}</Text>
          </View>

          {/* Barang Titipan */}
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Barang Titipan</Text>
            <Text>Makanan: {barangTitipan.makan}</Text>
            <Text>Alat Mandi: {barangTitipan.alatMandi}</Text>
            <Text>Obat: {barangTitipan.obat}</Text>
            <Text>Uang: {barangTitipan.uang}</Text>
          </View>
        </View>

        {/* Tanda Tangan */}
        <View style={styles.signatureContainer}>
          <View style={styles.signatureBox}>
            <Text>Kepala LAPAS</Text>
            <View style={styles.signatureLine}>
              <Text>(.......................................)</Text>
            </View>
            <Text>NIP. ........................</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text>Kepala Sub Bagian Pelayanan Tahanan</Text>
            <View style={styles.signatureLine}>
              <Text>(.......................................)</Text>
            </View>
            <Text>NIP. ........................</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFReport;