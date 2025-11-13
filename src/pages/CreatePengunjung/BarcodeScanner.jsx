import { useEffect } from 'react';

const BarcodeScanner = ({ onScan, onClose }) => {
  useEffect(() => {
	// Dynamically import html5-qrcode
	import('html5-qrcode').then(({ Html5QrcodeScanner }) => {
	  const scanner = new Html5QrcodeScanner('qr-reader', {
		qrbox: {
		  width: 250,
		  height: 250,
		},
		fps: 10,
		rememberLastUsedCamera: true,
		supportedScanTypes: null,
	  });

	  let isScanning = true;

	  const onScanSuccess = (decodedText) => {
		if (isScanning) {
		  onScan(decodedText);
		  scanner.clear().then(() => {
			console.log("Scanner cleared successfully");
		  }).catch((err) => {
			console.warn("Error clearing scanner:", err);
		  });
		  onClose();
		  isScanning = false;
		}
	  };

	  const onScanError = (error) => {
		if (error && !error.message?.includes('NotFoundException')) {
		  console.warn("Scan error:", error);
		}
	  };

	  setTimeout(() => {
		if (isScanning) {
		  scanner.render(onScanSuccess, onScanError);
		}
	  }, 100);

	  return () => {
		isScanning = false;
		setTimeout(() => {
		  scanner.clear().catch((err) => {
			console.warn("Error in cleanup:", err);
		  });
		}, 100);
	  };
	}).catch((error) => {
	  console.error("Failed to load html5-qrcode:", error);
	  onClose();
	});

  }, [onScan, onClose]);

  return (
	<div className="text-center">
	  <div className="mb-4">
		<p className="text-gray-600">Arahkan kamera ke barcode</p>
	  </div>
	  <div id="qr-reader" className="mx-auto" style={{ width: '100%', maxWidth: '300px' }}></div>
	  <button 
		onClick={onClose}
		className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
	  >
		Tutup Scanner
	  </button>
	</div>
  );
};

export default BarcodeScanner;