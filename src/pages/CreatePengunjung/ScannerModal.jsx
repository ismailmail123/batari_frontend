import { FaTimes } from "react-icons/fa";
import BarcodeScanner from "./BarcodeScanner";
import { useEffect, useState } from "react";

const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
	if (isOpen) {
	  const timer = setTimeout(() => {
		setIsVisible(true);
	  }, 100);
	  return () => clearTimeout(timer);
	} else {
	  setIsVisible(false);
	}
  }, [isOpen]);

  const handleScan = (decodedText) => {
	onScan(decodedText);
  };

  const handleClose = () => {
	setIsVisible(false);
	setTimeout(() => {
	  onClose();
	}, 200);
  };

  if (!isOpen) return null;

  return (
	<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
	  <div className="bg-white rounded-lg p-6 w-full max-w-md">
		<div className="flex justify-between items-center mb-4">
		  <h2 className="text-xl font-bold text-gray-800">{title}</h2>
		  <button
			onClick={handleClose}
			className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
		  >
			<FaTimes className="w-6 h-6" />
		  </button>
		</div>
		
		{isVisible && (
		  <BarcodeScanner onScan={handleScan} onClose={handleClose} />
		)}
	  </div>
	</div>
  );
};

export default ScannerModal;