import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaPrint, FaTimes } from "react-icons/fa";

const PrintAntrian = ({ pengunjung, antrian, onClose }) => {
  const printRef = useRef();
  const [selectedPrinter, setSelectedPrinter] = useState('default');
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
	setPrinters([
	  { name: 'default', description: 'Printer Default Sistem' },
	  { name: 'browser', description: 'Dialog Print Browser' }
	]);
  }, []);

  const handlePrint = () => {
	if (selectedPrinter === 'browser') {
	  window.print();
	} else {
	  const printContent = printRef.current;
	  const printWindow = window.open('', '_blank');
	  
	  printWindow.document.write(`
		<!DOCTYPE html>
		<html>
		  <head>
			<title>Print Antrian - ${antrian}</title>
			<style>
			  @media print {
				@page { margin: 0; }
				html, body { 
				  margin: 0; 
				  padding: 0; 
				}
				.ticket-container {
				  width: 65mm;
				  height: 76mm;
				  border: 1px dashed #000;
				  margin: 0;
				  padding: 1mm;
				  page-break-after: always;
				}
				
				.header { text-align: center; margin-bottom: 5mm; }
				.title { font-size: 16pt; font-weight: bold; margin-bottom: 1mm; }
				.subtitle { font-size: 12pt; margin-bottom: 0; }
				.antrian-section { text-align: center; margin: 1mm 0; }
				.antrian-number { font-size: 38pt; font-weight: bold; }
				.barcode-section { text-align: center; margin: 0; }
				.barcode { width: 20mm; height: 20mm; }
				.kode { font-size: 10pt; margin-top: 1mm; }
				.info-section { margin: 1mm 0; }
				.info { font-size: 9pt; margin-bottom: 1mm; text-align: center; }
				.footer { text-align: center; }
				.footer-text { font-size: 8pt; }
			  }
			</style>
		  </head>
		  <body>
			<div class="ticket-container">
			  <div class="header">
				<div class="title">NOMOR ANTRIAN</div>
				<div class="subtitle">Sistem Kunjungan Digital BATARI</div>
				<div class="subtitle">Rutan Kelas II B Bantaeng</div>
			  </div>
			  
			  <div class="antrian-section">
				<div class="antrian-number">${antrian}</div>
			  </div>
			  
			  <div class="barcode-section">
				<img src="${pengunjung.barcode || ''}" alt="Barcode" class="barcode" />
				<div class="kode">Kode: ${pengunjung.kode}</div>
			  </div>
			  
			  <div class="info-section">
				<div class="info">
				  Tanggal: ${new Date().toLocaleDateString('id-ID')}
				</div>
				<div class="info">
				  WBP: ${pengunjung.nama || 'Tidak tersedia'}
				</div>
			  </div>
			  
			  <div class="footer">
				<div class="footer-text">Tunggu hingga nomor antrian dipanggil</div>
			  </div>
			</div>
		  </body>
		</html>
	  `);
	  
	  printWindow.document.close();
	  printWindow.focus();
	  
	  setTimeout(() => {
		printWindow.print();
		printWindow.close();
	  }, 500);
	}
  };

  const handleDirectPrint = () => {
	handlePrint();
	toast.success("Sedang mencetak nomor antrian...");
	
	if (window.updateNewPengunjungWithAntrian) {
	  window.updateNewPengunjungWithAntrian({
		...pengunjung,
		antrian: antrian
	  });
	}
  };

  return (
	<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
	  <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
		<div className="flex justify-between items-center p-4 border-b">
		  <h2 className="text-xl font-semibold">Print Nomor Antrian</h2>
		  <button
			onClick={onClose}
			className="text-gray-500 hover:text-gray-700"
		  >
			<FaTimes className="w-6 h-6" />
		  </button>
		</div>
		
		<div className="p-4">
		  <div 
			ref={printRef}
			className="bg-white border-2 border-dashed border-gray-300 p-4 mb-4 mx-auto"
			style={{ width: '80mm', height: '80mm' }}
		  >
			<div className="text-center border-b border-gray-300 pb-2 mb-2">
			  <div className="text-lg font-bold">NOMOR ANTRIAN</div>
			  <div className="text-xs text-gray-600">Sistem Kunjungan Digital BATARI</div>
			  <div className="text-xs text-gray-600">Rutan Kelas II B Bantaeng</div>
			</div>
			
			<div className="text-center my-2">
			  <div className="text-4xl font-bold text-blue-600">{antrian}</div>
			</div>
			
			<div className="text-center border-t border-gray-300 pt-1 mt-1">
			  {pengunjung.barcode && (
				<img 
				  src={pengunjung.barcode} 
				  alt="Barcode" 
				  className="w-16 h-16 mx-auto" 
				/>
			  )}
			  <div className="text-xs text-gray-600 ">Kode: {pengunjung.kode}</div>
			</div>
			
			<div className="text-center text-[10px] text-gray-700 mt-0">
			  <div>Tanggal: {new Date().toLocaleDateString('id-ID')}</div>
			  <div className="mt-0">pengunjung: {pengunjung.nama || 'Tidak tersedia'}</div>
			</div>
			
			<div className="text-center text-[10px] text-gray-500 mt-1">
			  <div>Tunggu hingga nomor antrian dipanggil</div>
			</div>
		  </div>

		  <div className="mb-4">
			<label className="block text-sm font-medium text-gray-700 mb-2">
			  Pilih Printer:
			</label>
			<select
			  value={selectedPrinter}
			  onChange={(e) => setSelectedPrinter(e.target.value)}
			  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
			  {printers.map((printer) => (
				<option key={printer.name} value={printer.name}>
				  {printer.description}
				</option>
			  ))}
			</select>
		  </div>

		  <div className="text-xs text-gray-500 mb-4">
			<strong>Catatan:</strong> Pilih "Dialog Print Browser" untuk memilih printer secara manual, 
			atau "Printer Default Sistem" untuk print langsung ke printer default.
		  </div>
		</div>
		
		<div className="flex justify-end p-4 border-t gap-2">
		  <button
			onClick={onClose}
			className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
		  >
			Tutup
		  </button>
		  <button
			onClick={handleDirectPrint}
			className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
		  >
			<FaPrint className="mr-2" />
			Print Sekarang
		  </button>
		</div>
	  </div>
	</div>
  );
};

export default PrintAntrian;