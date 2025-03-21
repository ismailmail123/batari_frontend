import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const BarcodeScanner = ({ onScan, onClose }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('qr-reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 10, // Sesuaikan frame rate
    });

    const onScanSuccess = (decodedText) => {
      onScan(decodedText); // Kirim hasil scan ke parent component
      scanner.clear(); // Hentikan scanner setelah berhasil scan
      onClose(); // Tutup scanner
    };

    const onScanError = (error) => {
      if (error.name === 'NotFoundException') {
        console.error("Barcode/QR code tidak ditemukan. Pastikan kode jelas dan terlihat.");
      } else {
        console.error("Error saat scan:", error);
      }
    };

    scanner.render(onScanSuccess, onScanError);

    return () => {
      scanner.clear(); // Membersihkan scanner saat komponen unmount
    };
  }, [onScan, onClose]);

  return (
    <div >
      <h3>Scan Barcode</h3>
      <div id="qr-reader" style={{ width: '300px' }}></div>
      <button className='text-black, text-center' onClick={onClose}>Tutup Scanner</button>
    </div>
  );
};

export default BarcodeScanner;