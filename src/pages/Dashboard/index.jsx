// import { useRef, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   UserIcon,
//   PlusIcon,
//   ShieldCheckIcon,
//   UsersIcon,
//   TicketIcon,
// } from "@heroicons/react/24/outline";
// import logo from "../../assets/logokemenimipas.png";
// import photo from "../../assets/avatar.jpg"
// import useAuthStore from "../../store/useAuthStore";
// import useDataStore from "../../store/useDataStore";
// import { BaggageClaim, Barcode, LogOut, QrCode, ScrollText } from "lucide-react";
// import { FaSearch, FaQrcode, FaTimes, FaPrint, FaKeyboard } from 'react-icons/fa';

// // Import komponen PDF
// import { Document, Page, Text, View, StyleSheet, Image, PDFViewer } from "@react-pdf/renderer";
// import toast from "react-hot-toast";

// // Komponen Virtual Keyboard untuk HomePage
// const VirtualKeyboardHome = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
//   const [isShift, setIsShift] = useState(false);
//   const [isSymbol, setIsSymbol] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
//   const [isPc, setIsPc] = useState(false);
//   const keyboardRef = useRef(null);

//   const alphaRows = [
//     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
//     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
//     ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
//   ];

//   const symbolRows = [
//     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//     ['-', '_', '@', '#', '$', '%', '&', '*', '(', ')'],
//     ['.', ',', '!', '?', ':', ';', '"', "'"],
//   ];

//   // Deteksi perangkat saat komponen dimuat
//   useEffect(() => {
//     const checkDevice = () => {
//       const userAgent = navigator.userAgent.toLowerCase();
//       const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
//       const isTablet = /tablet|ipad/i.test(userAgent);
//       const isPcDevice = !isMobile && !isTablet;
      
//       setIsPc(isPcDevice);
//     };

//     checkDevice();
//   }, []);

//   // Handle click outside untuk menutup keyboard
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // Jika keyboardRef ada dan klik dilakukan di luar komponen keyboard
//       if (keyboardRef.current && !keyboardRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     // Tambahkan event listener ketika komponen mount
//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('touchstart', handleClickOutside); // Untuk perangkat touch

//     // Cleanup event listener ketika komponen unmount
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('touchstart', handleClickOutside);
//     };
//   }, [onClose]);

//   const currentRows = isSymbol ? symbolRows : alphaRows;

//   // Handle drag start
//   const handleDragStart = (clientX, clientY) => {
//     if (!keyboardRef.current) return;
    
//     setIsDragging(true);
//     const rect = keyboardRef.current.getBoundingClientRect();
    
//     setDragOffset({
//       x: clientX - rect.left,
//       y: clientY - rect.top
//     });
//   };

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     e.stopPropagation(); // Mencegah event bubbling ke parent
//     handleDragStart(e.clientX, e.clientY);
//   };

//   const handleTouchStart = (e) => {
//     e.stopPropagation(); // Mencegah event bubbling ke parent
//     const touch = e.touches[0];
//     handleDragStart(touch.clientX, touch.clientY);
//   };

//   // Handle drag movement
//   const handleDragMove = (clientX, clientY) => {
//     if (!isDragging || !keyboardRef.current) return;
    
//     const newX = clientX - dragOffset.x;
//     const newY = clientY - dragOffset.y;
    
//     const keyboardWidth = keyboardRef.current.offsetWidth;
//     const keyboardHeight = keyboardRef.current.offsetHeight;
//     const maxX = window.innerWidth - keyboardWidth;
//     const maxY = window.innerHeight - keyboardHeight;
    
//     setPosition({
//       x: Math.max(10, Math.min(newX, maxX - 10)),
//       y: Math.max(10, Math.min(newY, maxY - 10))
//     });
//   };

//   const handleMouseMove = (e) => {
//     handleDragMove(e.clientX, e.clientY);
//   };

//   const handleTouchMove = (e) => {
//     const touch = e.touches[0];
//     handleDragMove(touch.clientX, touch.clientY);
//     e.preventDefault();
//   };

//   // Handle drag end
//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   // Event listeners untuk drag
//   useEffect(() => {
//     if (isDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleDragEnd);
//       document.addEventListener('touchmove', handleTouchMove, { passive: false });
//       document.addEventListener('touchend', handleDragEnd);
      
//       document.body.style.overflow = 'hidden';
//       document.body.style.userSelect = 'none';
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleDragEnd);
//       document.removeEventListener('touchmove', handleTouchMove);
//       document.removeEventListener('touchend', handleDragEnd);
      
//       document.body.style.overflow = '';
//       document.body.style.userSelect = '';
//     };
//   }, [isDragging, dragOffset]);

//   // Set posisi awal
//   useEffect(() => {
//     if (!isPc) return;

//     const updateInitialPosition = () => {
//       if (keyboardRef.current) {
//         const keyboardWidth = keyboardRef.current.offsetWidth;
//         const keyboardHeight = keyboardRef.current.offsetHeight;
        
//         setPosition({
//           x: (window.innerWidth - keyboardWidth) / 2,
//           y: window.innerHeight - keyboardHeight - 20
//         });
//       }
//     };

//     setTimeout(updateInitialPosition, 100);
//     window.addEventListener('resize', updateInitialPosition);
//     return () => window.removeEventListener('resize', updateInitialPosition);
//   }, [isPc]);

//   const handleKeyClick = (key) => {
//     if (key === 'backspace') {
//       onKeyPress('backspace');
//       if (onInputChange) onInputChange('backspace');
//     } else if (key === 'clear') {
//       onKeyPress('clear');
//       if (onInputChange) onInputChange('clear');
//     } else {
//       const finalKey = isShift ? key.toUpperCase() : key;
//       onKeyPress(finalKey);
//       if (onInputChange) onInputChange(finalKey);
//     }
//   };

//   const handleSpecialKey = (action) => {
//     switch (action) {
//       case 'shift':
//         setIsShift(!isShift);
//         break;
//       case 'symbol':
//         setIsSymbol(!isSymbol);
//         setIsShift(false);
//         break;
//       case 'space':
//         onKeyPress(' ');
//         if (onInputChange) onInputChange(' ');
//         break;
//       case 'backspace':
//         onKeyPress('backspace');
//         if (onInputChange) onInputChange('backspace');
//         break;
//       case 'enter':
//         onKeyPress('enter');
//         break;
//       case 'clear':
//         onKeyPress('clear');
//         if (onInputChange) onInputChange('clear');
//         break;
//       default:
//         break;
//     }
//   };

//   const getInputLabel = () => {
//     switch (activeInput) {
//       case 'antrian':
//         return 'Input Pencarian Antrian';
//       case 'titipan':
//         return 'Input Pencarian Titipan';
//       case 'kartu':
//         return 'Input Pencarian Kartu';
//       default:
//         return 'Virtual Keyboard';
//     }
//   };

//   // Jika bukan PC, jangan render keyboard virtual
//   if (!isPc) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none">
//       <div 
//         ref={keyboardRef}
//         className="bg-transparent rounded-2xl shadow-2xl pointer-events-auto border border-white border-opacity-20"
//         style={{
//           position: 'fixed',
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           cursor: isDragging ? 'grabbing' : 'grab',
//           touchAction: 'none',
//           zIndex: 1000,
//           width: '35vw',
//           minWidth: '500px',
//           maxWidth: '600px',
//         }}
//         // Tambahkan event stopPropagation untuk mencegah event bubbling
//         onMouseDown={(e) => e.stopPropagation()}
//         onTouchStart={(e) => e.stopPropagation()}
//       >
//         {/* Draggable Header */}
//         <div 
//           className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl p-4 text-white cursor-grab active:cursor-grabbing touch-none"
//           onMouseDown={handleMouseDown}
//           onTouchStart={handleTouchStart}
//         >
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <FaKeyboard className="w-6 h-6" />
//               <div>
//                 <h3 className="font-bold text-lg">{getInputLabel()}</h3>
//                 <p className="text-blue-100 text-sm">
//                   Drag untuk memindahkan
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
//             >
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Preview Area */}
//         <div className="p-4 bg-gray-50 bg-opacity-50 border-b">
//           <div className="bg-white bg-opacity-70 rounded-xl p-4 shadow-inner border">
//             <div className="text-sm text-gray-500 mb-2 flex justify-between">
//               <span>Input Preview:</span>
//               <span className="text-blue-500 font-medium">{value.length} karakter</span>
//             </div>
//             <div className="text-lg font-mono min-h-[28px] p-2 bg-gray-50 bg-opacity-50 rounded-lg border-2 border-blue-200">
//               {value || <span className="text-gray-400">Ketik menggunakan keyboard virtual...</span>}
//               <span className="ml-1 animate-pulse text-blue-500">|</span>
//             </div>
//           </div>
//         </div>

//         {/* Keyboard Layout */}
//         <div className="p-4">
//           {/* Main Keyboard */}
//           {currentRows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex justify-center mb-2 space-x-1">
//               {row.map((key) => (
//                 <button
//                   key={key}
//                   onClick={() => handleKeyClick(key)}
//                   className="flex-1 max-w-[60px] h-14 bg-white bg-opacity-95 rounded-xl transition-all duration-300 font-medium text-gray-700 touch-friendly relative overflow-hidden group"
//                   style={{ 
//                     minWidth: '44px',
//                     minHeight: '44px',
//                     touchAction: 'manipulation'
//                   }}
//                 >
//                   {/* Base Border - Lebih tebal */}
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 border-[3px] border-gray-500 shadow-sm"></div>
                  
//                   {/* Neon Border Effect */}
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-0"></div>
                  
//                   {/* Content Area */}
//                   <div className="absolute inset-[3px] rounded-lg bg-white bg-opacity-95 flex items-center justify-center z-10 group-hover:bg-opacity-100 transition-all duration-300">
//                     {isShift && !isSymbol ? key.toUpperCase() : key}
//                   </div>
                  
//                   {/* Hover Glow */}
//                   <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl transition-all duration-300"></div>
//                 </button>
//               ))}
//             </div>
//           ))}

//           {/* Control Row */}
//           <div className="flex justify-center space-x-1 mt-4">
//             <button
//               onClick={() => handleSpecialKey('shift')}
//               className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
//                 isShift 
//                   ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
//                   : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
//               }`}
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               ⇧ SHIFT
//             </button>

//             <button
//               onClick={() => handleSpecialKey('symbol')}
//               className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
//                 isSymbol 
//                   ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
//                   : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
//               }`}
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               {isSymbol ? 'ABC' : '123'}
//             </button>

//             <button
//               onClick={() => handleSpecialKey('space')}
//               className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               SPACE
//             </button>

//             <button
//               onClick={() => handleSpecialKey('backspace')}
//               className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               ⌫ DELETE
//             </button>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-center space-x-2 mt-3">
//             <button
//               onClick={() => handleSpecialKey('clear')}
//               className="flex-1 max-w-[140px] h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all touch-friendly font-medium border-2 border-orange-600"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               🗑️ CLEAR
//             </button>
            
//             <button
//               onClick={() => handleSpecialKey('enter')}
//               className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
//               style={{ 
//                 minHeight: '44px',
//                 touchAction: 'manipulation'
//               }}
//             >
//               ↵ ENTER
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Komponen BarcodeScanner yang fixed - kembali ke approach awal
// const BarcodeScanner = ({ onScan, onClose }) => {
//   useEffect(() => {
//     // Dynamically import html5-qrcode
//     import('html5-qrcode').then(({ Html5QrcodeScanner }) => {
//       const scanner = new Html5QrcodeScanner('qr-reader', {
//         qrbox: {
//           width: 250,
//           height: 250,
//         },
//         fps: 10,
//         // Tambahkan config untuk stability
//         rememberLastUsedCamera: true,
//         supportedScanTypes: null,
//       });

//       let isScanning = true;

//       const onScanSuccess = (decodedText) => {
//         if (isScanning) {
//           onScan(decodedText);
//           scanner.clear().then(() => {
//             console.log("Scanner cleared successfully");
//           }).catch((err) => {
//             console.warn("Error clearing scanner:", err);
//           });
//           onClose();
//           isScanning = false;
//         }
//       };

//       const onScanError = (error) => {
//         // Only log errors that are not expected
//         if (error && !error.message?.includes('NotFoundException')) {
//           console.warn("Scan error:", error);
//         }
//       };

//       // Render scanner dengan delay kecil
//       setTimeout(() => {
//         if (isScanning) {
//           scanner.render(onScanSuccess, onScanError);
//         }
//       }, 100);

//       // Cleanup function
//       return () => {
//         isScanning = false;
//         setTimeout(() => {
//           scanner.clear().catch((err) => {
//             console.warn("Error in cleanup:", err);
//           });
//         }, 100);
//       };
//     }).catch((error) => {
//       console.error("Failed to load html5-qrcode:", error);
//       onClose();
//     });

//   }, [onScan, onClose]);

//   return (
//     <div className="text-center">
//       <div className="mb-4">
//         <p className="text-gray-600">Arahkan kamera ke barcode</p>
//       </div>
//       <div id="qr-reader" className="mx-auto" style={{ width: '100%', maxWidth: '300px' }}></div>
//       <button 
//         onClick={onClose}
//         className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
//       >
//         Tutup Scanner
//       </button>
//     </div>
//   );
// };

// // Komponen PDF untuk Antrian
// const PDFAntrian = ({ pengunjung, antrian }) => {
//   const mmToPt = (mm) => mm * 2.83465;

//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "column",
//       backgroundColor: "#FFFFFF",
//       padding: 5,
//       width: mmToPt(80),
//       height: mmToPt(80),
//       justifyContent: "space-between",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: 5,
//     },
//     title: {
//       fontSize: 14,
//       fontWeight: "bold",
//       marginBottom: 5,
//     },
//     subtitle: {
//       fontSize: 8,
//       marginBottom: 2,
//     },
//     antrianSection: {
//       alignItems: "center",
//     },
//     antrianNumber: {
//       fontSize: 32,
//       fontWeight: "bold",
//     },
//     barcodeSection: {
//       alignItems: "center",
//     },
//     barcode: {
//       width: 50,
//       height: 50,
//     },
//     kode: {
//       fontSize: 8,
//       marginTop: 3,
//     },
//     infoSection: {
//       marginVertical: 0,
//     },
//     info: {
//       fontSize: 9,
//       marginBottom: 3,
//       textAlign: "center",
//     },
//     footer: {
//       textAlign: "center",
//     },
//     footerText: {
//       fontSize: 7,
//     },
//   });

//   return (
//     <Document>
//       <Page size={[mmToPt(80), mmToPt(80)]} style={styles.page}>
//         <View style={styles.header}>
//           <Text style={styles.title}>NOMOR ANTRIAN</Text>
//           <Text style={styles.subtitle}>Sistem Kunjungan Digital BATARI</Text>
//           <Text style={styles.subtitle}>Rutan Kelas II B Bantaeng</Text>
//         </View>
        
//         <View style={styles.antrianSection}>
//           <Text style={styles.antrianNumber}>{antrian}</Text>
//         </View>
        
//         <View style={styles.barcodeSection}>
//           <Image src={pengunjung.barcode} style={styles.barcode} />
//           <Text style={styles.kode}>Kode: {pengunjung.kode}</Text>
//         </View>
        
//         <View style={styles.infoSection}>
//           <Text style={styles.info}>
//             Tanggal: {new Date().toLocaleDateString('id-ID')}
//           </Text>
//         </View>
        
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>** Harap simpan tiket ini **</Text>
//           <Text style={styles.footerText}>Tunggu hingga nomor antrian dipanggil</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// // Komponen Modal Print Preview
// const PrintPreviewModal = ({ isOpen, onClose, printData }) => {
//   if (!isOpen || !printData) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-semibold">Print Preview Antrian</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
        
//         <div className="h-full p-4">
//           <PDFViewer width="100%" height="100%">
//             <PDFAntrian 
//               pengunjung={printData.pengunjung}
//               antrian={printData.antrian}
//             />
//           </PDFViewer>
//         </div>
        
//         <div className="flex justify-end p-4 border-t gap-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//           >
//             Tutup
//           </button>
//           <button
//             onClick={() => window.print()}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Print
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Komponen Modal Scanner
// const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       // Delay sedikit untuk memastikan DOM ready
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//       }, 100);
//       return () => clearTimeout(timer);
//     } else {
//       setIsVisible(false);
//     }
//   }, [isOpen]);

//   const handleScan = (decodedText) => {
//     onScan(decodedText);
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//     // Delay onClose untuk memberi waktu cleanup
//     setTimeout(() => {
//       onClose();
//     }, 200);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-gray-800">{title}</h2>
//           <button
//             onClick={handleClose}
//             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//           >
//             <FaTimes className="w-6 h-6" />
//           </button>
//         </div>
        
//         {isVisible && (
//           <BarcodeScanner onScan={handleScan} onClose={handleClose} />
//         )}
//       </div>
//     </div>
//   );
// };

// // Komponen Screensaver Animasi
// const VisitScreensaver = ({ onClose }) => {
//   return (
//     <div 
//       className="fixed inset-0 bg-blue-900 z-50 flex items-center justify-center cursor-pointer"
//       onClick={onClose}
//     >
//       <div className="relative w-full h-full overflow-hidden">
//         {/* Animasi Latar Belakang */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* Logo Berputar */}
//           <div className="animate-spin-slow">
//             <svg
//               className="w-64 h-64 text-yellow-400 opacity-20"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Konten Utama */}
//         <div className="relative z-10 text-center text-white">
//           <div className="flex justify-center align-center animate-pulse ">
//             <img className="rounded-full mt-2" src={logo} alt="Logo Kemenimipas" />
//           </div>
//           {/* Animasi Teks */}
//           <h1 className="text-5xl font-bold mb-6 animate-pulse">
//             SELAMAT DATANG
//           </h1>
          
//           {/* Kartu Animasi */}
//           <div className="inline-block animate-float">
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
//               <div className="flex flex-col items-center">
//                 <Barcode className="h-32 w-32 text-yellow-400 mb-4 animate-bounce" />
//                 <h2 className="text-3xl font-semibold mb-2">
//                   Sistem Kunjungan Digital
//                 </h2>
//                 <h2 className="text-3xl font-semibold mb-2">
//                   BATARI (Barcode Tanpa Antrian)
//                 </h2>
//                 <p className="text-xl opacity-80">
//                   Sentuh layar untuk melanjutkan
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Animasi Garis Bawah */}
//           <div className="mt-12 flex justify-center">
//             <div className="w-64 h-1 bg-yellow-400 rounded-full animate-scale-x" />
//           </div>
//         </div>

//         {/* Partikel Animasi */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-yellow-400 rounded-full"
//             style={{
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//               animation: `twinkle ${2 + i % 3}s infinite`
//             }}
//           />
//         ))}
//       </div>

//       <style jsx global>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes scale-x {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }

//         @keyframes twinkle {
//           0% { opacity: 0.2; }
//           50% { opacity: 1; }
//           100% { opacity: 0.2; }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 30s linear infinite;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-scale-x {
//           animation: scale-x 2s ease-in-out infinite alternate;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Helper function untuk mendapatkan tanggal hari ini dalam format YYYY-MM-DD (Asia/Makassar)
// const getTodayMakassar = () => {
//   const now = new Date();
//   // Konversi ke timezone Asia/Makassar (UTC+8)
//   const makassarOffset = 8 * 60; // dalam menit
//   const localOffset = now.getTimezoneOffset();
//   const makassarTime = new Date(now.getTime() + (makassarOffset + localOffset) * 60000);
  
//   const year = makassarTime.getFullYear();
//   const month = String(makassarTime.getMonth() + 1).padStart(2, '0');
//   const day = String(makassarTime.getDate()).padStart(2, '0');
  
//   return `${year}-${month}-${day}`;
// };

// // Helper function untuk memeriksa apakah tanggal sama dengan hari ini (Asia/Makassar)
// const isTodayMakassar = (dateString) => {
//   if (!dateString) return false;
  
//   try {
//     const inputDate = new Date(dateString);
//     const today = getTodayMakassar();
    
//     const inputYear = inputDate.getFullYear();
//     const inputMonth = String(inputDate.getMonth() + 1).padStart(2, '0');
//     const inputDay = String(inputDate.getDate()).padStart(2, '0');
//     const inputDateFormatted = `${inputYear}-${inputMonth}-${inputDay}`;
    
//     return inputDateFormatted === today;
//   } catch (error) {
//     console.error("Error checking date:", error);
//     return false;
//   }
// };

// // Helper function untuk mendapatkan data unik berdasarkan kode dengan ID terakhir
// const getUniquePengunjungsByLatestId = (pengunjungs) => {
//   const groupedByKode = {};
  
//   // Kelompokkan pengunjung berdasarkan kode
//   pengunjungs.forEach(pengunjung => {
//     if (!groupedByKode[pengunjung.kode]) {
//       groupedByKode[pengunjung.kode] = [];
//     }
//     groupedByKode[pengunjung.kode].push(pengunjung);
//   });
  
//   // Untuk setiap kode, ambil data dengan ID terakhir (createdAt terbaru)
//   const uniquePengunjungs = [];
//   Object.keys(groupedByKode).forEach(kode => {
//     const pengunjungsWithSameKode = groupedByKode[kode];
//     // Urutkan berdasarkan createdAt descending dan ambil yang pertama (terbaru)
//     const latestPengunjung = pengunjungsWithSameKode
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
//     uniquePengunjungs.push(latestPengunjung);
//   });
  
//   return uniquePengunjungs;
// };

// // Helper function untuk mendapatkan data dengan filter kode dan ID terakhir
// const getFilteredUniquePengunjungs = (pengunjungs, searchTerm, additionalFilter = null) => {
//   // Filter berdasarkan kondisi tambahan jika ada
//   let filtered = pengunjungs;
//   if (additionalFilter) {
//     filtered = pengunjungs.filter(additionalFilter);
//   }
  
//   // Filter berdasarkan search term
//   if (searchTerm) {
//     filtered = filtered.filter(pengunjung =>
//       pengunjung.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pengunjung.kode?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }
  
//   // Ambil data unik berdasarkan kode dengan ID terakhir
//   return getUniquePengunjungsByLatestId(filtered);
// };

// // Main HomePage Component
// export default function HomePage() {
//   const [showScreensaver, setShowScreensaver] = useState(false);
//   const [inactivityTimer, setInactivityTimer] = useState(null);
//   const { authUser, logout } = useAuthStore();
//   const {
//     pengunjungs,
//     fetchPengunjung,
//     getNomorAntrianTerakhir,
//     fetchPengunjungByCode,
//     pengunjungByCode,
//     updateAntrian,
//     updateKartuDiambil
//   } = useDataStore();


  
//   // State untuk Antrian
//   const [searchKode, setSearchKode] = useState("");
//   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
//   const [antrian, setAntrian] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
//   // State untuk Titipan
//   const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
//   const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
//   const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
  
//   // State untuk Kartu Kunjungan
//   const [searchKodeKartu, setSearchKodeKartu] = useState("");
//   const [selectedPengunjungKartu, setSelectedPengunjungKartu] = useState(null);
//   const [isDropdownKartuOpen, setIsDropdownKartuOpen] = useState(false);
  
//   // State umum
//   const [showPrintPreview, setShowPrintPreview] = useState(false);
//   const [printData, setPrintData] = useState(null);
//   const [lastAntrian, setLastAntrian] = useState("000");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   // State untuk Scanner
//   const [showScannerAntrian, setShowScannerAntrian] = useState(false);
//   const [showScannerTitipan, setShowScannerTitipan] = useState(false);
//   const [showScannerKartu, setShowScannerKartu] = useState(false);
  
//   // State untuk Virtual Keyboard
//   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [keyboardValue, setKeyboardValue] = useState('');
//   const [isPc, setIsPc] = useState(false);

//   const dropdownRef = useRef(null);
//   const dropdownTitipanRef = useRef(null);
//   const dropdownKartuRef = useRef(null);
//   const navigate = useNavigate();
//   const inactivityTimerRef = useRef(null);

//   // Deteksi perangkat saat komponen dimuat
//   useEffect(() => {
//     const checkDevice = () => {
//       const userAgent = navigator.userAgent.toLowerCase();
//       const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
//       const isTablet = /tablet|ipad/i.test(userAgent);
//       const isPcDevice = !isMobile && !isTablet;
      
//       setIsPc(isPcDevice);
//     };

//     checkDevice();
//   }, []);

//   // Redirect ke halaman login jika authUser null
//   useEffect(() => {
//     if (!authUser) {
//       navigate("/auth");
//     }
//   }, [authUser, navigate]);

//   // Inactivity timer untuk screensaver
//   useEffect(() => {
//     if (authUser?.user?.role === "admin") {
//       const events = ["mousemove", "keydown", "click", "scroll"];
      
//       const resetTimer = () => {
//         if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
//         inactivityTimerRef.current = setTimeout(() => {
//           if (authUser?.user?.role === "admin") {
//             setShowScreensaver(true);
//           }
//         }, 30000);
//       };

//       events.forEach(event => 
//         window.addEventListener(event, resetTimer)
//       );

//       resetTimer();

//       return () => {
//         events.forEach(event => 
//           window.removeEventListener(event, resetTimer)
//         );
//         if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
//       };
//     }
//   }, [authUser]);

//   // Fetch last antrian
//   useEffect(() => {
//     const fetchLastAntrian = async () => {
//       try {
//         const antrian = await getNomorAntrianTerakhir();
//         if (antrian) {
//           setLastAntrian(antrian);
//         }
//       } catch (error) {
//         console.error("Error fetching last antrian:", error);
//       }
//     };

//     fetchLastAntrian();
//   }, [getNomorAntrianTerakhir]);

//   // Fetch data pengunjung
//   useEffect(() => {
//     fetchPengunjung();
//   }, [fetchPengunjung]);

//   // Handle klik di luar dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//       if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
//         setIsDropdownTitipanOpen(false);
//       }
//       if (dropdownKartuRef.current && !dropdownKartuRef.current.contains(event.target)) {
//         setIsDropdownKartuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Handler untuk virtual keyboard - hanya untuk PC
//   const handleVirtualKeyPress = (key) => {
//     if (key === 'backspace') {
//       setKeyboardValue(prev => prev.slice(0, -1));
//       handleInputUpdate('backspace');
//     } else if (key === 'enter') {
//       setShowVirtualKeyboard(false);
//     } else if (key === 'space') {
//       setKeyboardValue(prev => prev + ' ');
//       handleInputUpdate(' ');
//     } else if (key === 'clear') {
//       setKeyboardValue('');
//       handleInputUpdate('clear');
//     } else {
//       setKeyboardValue(prev => prev + key);
//       handleInputUpdate(key);
//     }
//   };

//   // Fungsi untuk langsung update input field dari keyboard
//   const handleInputUpdate = (key) => {
//     let newValue = '';
    
//     if (key === 'backspace') {
//       newValue = keyboardValue.slice(0, -1);
//     } else if (key === 'clear') {
//       newValue = '';
//     } else if (key === ' ') {
//       newValue = keyboardValue + ' ';
//     } else {
//       newValue = keyboardValue + key;
//     }

//     // Update form data sesuai dengan input yang aktif
//     switch (activeInput) {
//       case 'antrian':
//         setSearchKode(newValue);
//         setIsDropdownOpen(true);
//         break;
//       case 'titipan':
//         setSearchKodeTitipan(newValue);
//         setIsDropdownTitipanOpen(true);
//         break;
//       case 'kartu':
//         setSearchKodeKartu(newValue);
//         setIsDropdownKartuOpen(true);
//         break;
//       default:
//         break;
//     }
//   };

//   // Handler untuk membuka virtual keyboard dengan input tertentu - hanya untuk PC
//   const handleInputFocus = (inputType, currentValue = '') => {
//     // Hanya tampilkan virtual keyboard jika perangkat adalah PC
//     if (!isPc) return;
    
//     setActiveInput(inputType);
//     setKeyboardValue(currentValue);
//     setShowVirtualKeyboard(true);
//   };

//   // PERBAIKAN: Filter pengunjung untuk antrian - Hanya yang belum punya antrian dan created hari ini
//   const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
//     const isKodeMatch = pengunjung.nama?.toLowerCase().includes(searchKode?.toLowerCase()) ||
//                        pengunjung.kode?.toLowerCase().includes(searchKode?.toLowerCase());
//     const hasNoAntrian = !pengunjung.antrian; // Hanya yang belum punya antrian
//     const isToday = isTodayMakassar(pengunjung.createdAt); // Hanya data yang dibuat hari ini
    
//     return isKodeMatch && hasNoAntrian && isToday;
//   });

//   // PERBAIKAN: Filter pengunjung untuk titipan - Hanya data hari ini yang sudah punya antrian, dengan ID terakhir
//   const filteredPengunjungTitipan = getFilteredUniquePengunjungs(
//     pengunjungs,
//     searchKodeTitipan,
//     (pengunjung) => {
//       const hasAntrian = !!pengunjung.antrian; // Hanya yang sudah punya antrian
//       const isToday = isTodayMakassar(pengunjung.createdAt); // Hanya data yang dibuat hari ini
//       return hasAntrian && isToday;
//     }
//   );
//   // PERBAIKAN: Filter pengunjung untuk kartu kunjungan - Hanya data hari ini dengan ID terakhir
//   const filteredPengunjungKartu = getFilteredUniquePengunjungs(
//     pengunjungs,
//     searchKodeKartu,
//     (pengunjung) => isTodayMakassar(pengunjung.createdAt) // Hanya data yang dibuat hari ini
//   );

//   // Handle pemilihan pengunjung untuk antrian
//   const handleSelectPengunjung = (pengunjung) => {
//     setSearchKode(pengunjung.kode);
//     setSelectedPengunjung(pengunjung);
//     setIsDropdownOpen(false);
//   };

//   // Handle pemilihan pengunjung untuk titipan
//   const handleSelectPengunjungTitipan = (pengunjung) => {
//     setSearchKodeTitipan(pengunjung.kode);
//     setSelectedPengunjungTitipan(pengunjung);
//     setIsDropdownTitipanOpen(false);
//   };

//   // Handle pemilihan pengunjung untuk kartu kunjungan
//   const handleSelectPengunjungKartu = (pengunjung) => {
//     setSearchKodeKartu(pengunjung.kode);
//     setSelectedPengunjungKartu(pengunjung);
//     setIsDropdownKartuOpen(false);
//   };

//   // Handle scan untuk antrian
//   const handleScanAntrian = (data) => {
//     setSearchKode(data);
//     setShowScannerAntrian(false);
    
//     // Cari pengunjung berdasarkan kode yang di-scan dan created hari ini
//     const pengunjungDitemukan = pengunjungs.find(p => 
//       p.kode === data && isTodayMakassar(p.createdAt)
//     );
    
//     if (pengunjungDitemukan) {
//       if (pengunjungDitemukan.antrian) {
//         toast.error("Pengunjung ini sudah memiliki nomor antrian");
//       } else {
//         setSelectedPengunjung(pengunjungDitemukan);
//         toast.success("Pengunjung ditemukan");
//       }
//     } else {
//       toast.error("Pengunjung tidak ditemukan untuk hari ini");
//     }
//   };

//   // Handle scan untuk titipan - PERBAIKAN: Mengambil data dengan ID terakhir
//   const handleScanTitipan = (data) => {
//     setSearchKodeTitipan(data);
//     setShowScannerTitipan(false);
    
//     // Cari semua pengunjung dengan kode yang sama dan created hari ini
//     const pengunjungsWithSameKode = pengunjungs.filter(p => 
//       p.kode === data && isTodayMakassar(p.createdAt) && p.antrian
//     );
    
//     if (pengunjungsWithSameKode.length > 0) {
//       // Ambil data dengan ID terakhir (createdAt terbaru)
//       const latestPengunjung = pengunjungsWithSameKode
//         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      
//       setSelectedPengunjungTitipan(latestPengunjung);
//       toast.success("Pengunjung ditemukan (data terbaru)");
//     } else {
//       toast.error("Pengunjung tidak ditemukan atau belum memiliki antrian untuk hari ini");
//     }
//   };

//   // Handle scan untuk kartu kunjungan - PERBAIKAN: Mengambil data dengan ID terakhir
//   const handleScanKartu = (data) => {
//     setSearchKodeKartu(data);
//     setShowScannerKartu(false);
    
//     // Cari semua pengunjung dengan kode yang sama dan created hari ini
//     const pengunjungsWithSameKode = pengunjungs.filter(p => 
//       p.kode === data && isTodayMakassar(p.createdAt)
//     );
    
//     if (pengunjungsWithSameKode.length > 0) {
//       // Ambil data dengan ID terakhir (createdAt terbaru)
//       const latestPengunjung = pengunjungsWithSameKode
//         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      
//       setSelectedPengunjungKartu(latestPengunjung);
//       toast.success("Pengunjung ditemukan (data terbaru)");
//     } else {
//       toast.error("Pengunjung tidak ditemukan untuk hari ini");
//     }
//   };

//   // Submit nomor antrian dengan print preview
//   const handleSubmitAntrian = async () => {
//     try {
//       if (!selectedPengunjung?.id) {
//         setError("Pilih pengunjung terlebih dahulu");
//         return;
//       }

//       // Validasi: pastikan pengunjung belum punya antrian
//       if (selectedPengunjung.antrian) {
//         setError("Pengunjung ini sudah memiliki nomor antrian");
//         return;
//       }

//       // Validasi: pastikan data pengunjung adalah hari ini
//       if (!isTodayMakassar(selectedPengunjung.createdAt)) {
//         setError("Data pengunjung tidak valid untuk hari ini");
//         return;
//       }

//       const updatedPengunjung = await updateAntrian(selectedPengunjung.id);

//       if (updatedPengunjung) {
//         const newAntrian = updatedPengunjung.antrian;
//         const lastThreeDigits = newAntrian.slice(-3);
        
//         setAntrian(lastThreeDigits);
//         setSuccess("Nomor antrian berhasil disimpan");
//         setError("");
        
//         // Set data untuk print preview
//         setPrintData({
//           pengunjung: selectedPengunjung,
//           antrian: lastThreeDigits
//         });
        
//         // Tampilkan print preview
//         setShowPrintPreview(true);

//         // Update lastAntrian untuk ditampilkan di UI
//         setLastAntrian(lastThreeDigits);

//         // Reset form setelah beberapa detik
//         setTimeout(() => {
//           setSuccess("");
//           setSearchKode("");
//           setSelectedPengunjung(null);
//           setAntrian(null);
//           fetchPengunjung(); // Refresh data
        
//         }, 5000);
//       }
//     } catch (error) {
//       console.error("Gagal menyimpan antrian:", error);
//       setError("Gagal menyimpan nomor antrian");
//     }
//   };

//   // Handle close print preview
//   const handleClosePrintPreview = () => {
//     setShowPrintPreview(false);
//     setPrintData(null);
//   };

//   // Handle ambil label titipan
//   const handleAmbilLabelTitipan = () => {
//     if (selectedPengunjungTitipan?.id) {
//       navigate(`/label/${selectedPengunjungTitipan.id}`);
//     }
//   };

//   // Handle ambil kartu kunjungan
//   const handleAmbilKartuKunjungan = () => {
//     if (selectedPengunjungKartu?.id) {
//       navigate(`/pengunjung/${selectedPengunjungKartu.id}`);
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     logout();
//     navigate("/auth");
//   };

//   // Toggle menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Handle close screensaver
//   const handleCloseScreensaver = () => {
//     setShowScreensaver(false);
//     if (inactivityTimer) clearTimeout(inactivityTimer);
//   };

//   // Handle perubahan input manual (tanpa virtual keyboard)
//   const handleInputChange = (e, type) => {
//     const value = e.target.value;
//     switch (type) {
//       case 'antrian':
//         setSearchKode(value);
//         setIsDropdownOpen(true);
//         break;
//       case 'titipan':
//         setSearchKodeTitipan(value);
//         setIsDropdownTitipanOpen(true);
//         break;
//       case 'kartu':
//         setSearchKodeKartu(value);
//         setIsDropdownKartuOpen(true);
//         break;
//       default:
//         break;
//     }
//   };

//   // Jika authUser null, jangan render apa pun
//   if (!authUser) {
//     return null;
//   }


//   return (
//     <div className="min-h-screen bg-gray-50">
//       {authUser?.user?.role === "admin" && showScreensaver ? (
//         <VisitScreensaver onClose={handleCloseScreensaver} />
//       ) : (
//         <div className="min-h-screen bg-gray-50">
//           {/* Header */}
//           <header className="bg-blue-600 text-white shadow-lg relative">
//             <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={logo}
//                   alt="Logo Kemenimipas"
//                   className="h-12 w-12 rounded-full"
//                 />
//                 <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
//               </div>

//               <div className="flex-col items-center space-x-4 relative">
//                 <div className="flex justify-center cursor-pointer" onClick={toggleMenu}>
//                   <img 
//                     className="w-10 h-10 rounded-full border-2 border-white" 
//                     src={authUser.user?.photo || photo} 
//                     alt="Profile"
//                   />
//                 </div>
//                 <div className="flex justify-center">
//                   <h3 className="text-sm text-end capitalize">{authUser.user?.role}</h3>
//                 </div>
//                 <span className="text-sm">
//                   Selamat Datang, {authUser.user?.nama}
//                 </span>
                
//                 {isMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                     <div className="flex flex-col p-2">
//                       <button
//                         onClick={handleLogout}
//                         className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
//                       >
//                         <LogOut className="size-5" />
//                         <span>Logout</span>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </header>

//           {authUser.user?.role === "admin" && (
//             <>
//               {/* Main Content */}
//               <main className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
//                   {/* Card Ambil Nomor Antrian */}
//                   <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                     <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Ambil Nomor Antrian
//                     </h2>

//                     <div className="relative" ref={dropdownRef}>
//                       <div className="flex items-center space-x-2 mb-2">
//                         <input
//                           type="text"
//                           value={searchKode}
//                           onChange={(e) => handleInputChange(e, 'antrian')}
//                           onFocus={() => {
//                             setIsDropdownOpen(true);
//                             handleInputFocus('antrian', searchKode);
//                           }}
//                           placeholder="Masukkan kode atau nama pengunjung..."
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                         {isPc && (
//                           <button
//                             type="button"
//                             onClick={() => handleInputFocus('antrian', searchKode)}
//                             className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                             title="Virtual Keyboard"
//                           >
//                             <FaKeyboard className="w-5 h-5" />
//                           </button>
//                         )}
//                         <button
//                           type="button"
//                           onClick={() => setShowScannerAntrian(true)}
//                           className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                           title="Scan Barcode"
//                         >
//                           <FaQrcode className="w-5 h-5" />
//                         </button>
//                       </div>

//                       {isDropdownOpen && filteredPengunjungs.length > 0 && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                           {filteredPengunjungs.map((pengunjung) => (
//                             <div
//                               key={pengunjung.id}
//                               onClick={() => handleSelectPengunjung(pengunjung)}
//                               className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//                             >
//                               <div className="font-medium">{pengunjung.nama}</div>
//                               <div className="text-sm text-gray-500">
//                                 Kode: {pengunjung.kode} | ID: {pengunjung.id}
//                               </div>
//                               <div className="text-xs text-gray-400">
//                                 Dibuat: {new Date(pengunjung.createdAt).toLocaleTimeString('id-ID')}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {isDropdownOpen && searchKode && filteredPengunjungs.length === 0 && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//                           <div className="p-3 text-gray-500 text-center">
//                             {pengunjungs.some(p => 
//                               (p.nama?.toLowerCase().includes(searchKode.toLowerCase()) ||
//                                p.kode?.toLowerCase().includes(searchKode.toLowerCase())) &&
//                               p.antrian && isTodayMakassar(p.createdAt)
//                             ) ? (
//                               <div>
//                                 <p>Pengunjung ditemukan tetapi sudah memiliki nomor antrian</p>
//                                 <p className="text-sm text-red-600 mt-1">
//                                   Cari pengunjung lain yang belum memiliki antrian
//                                 </p>
//                               </div>
//                             ) : (
//                               "Tidak ada pengunjung yang sesuai untuk hari ini"
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                       <h2 className="text-xl font-semibold mb-2">
//                         Nomor Antrian Terakhir
//                       </h2>
//                       <p className="text-gray-600 mb-4">
//                         Nomor antrian terakhir yang diambil:
//                       </p>

//                       {lastAntrian ? (
//                         <div className="text-3xl font-bold text-blue-600">
//                           {lastAntrian}
//                         </div>
//                       ) : (
//                         <div className="text-gray-500">Belum ada antrian</div>
//                       )}
//                     </div>

//                     {selectedPengunjung && (
//                       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                         <div className="mb-2">
//                           <span className="font-semibold">Nama:</span>{" "}
//                           {selectedPengunjung.nama}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">Kode:</span>{" "}
//                           {selectedPengunjung.kode}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">ID:</span>{" "}
//                           {selectedPengunjung.id}
//                         </div>
//                         <button
//                           onClick={handleSubmitAntrian}
//                           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                         >
//                           Generate Nomor Antrian
//                         </button>

//                         {antrian && (
//                           <div className="mt-4 text-center">
//                             <span className="font-semibold">Nomor Antrian:</span>
//                             <div className="text-3xl font-bold text-blue-600 mt-1">
//                               {antrian}
//                             </div>
//                             <p className="text-sm text-green-600 mt-2">
//                               Sedang menampilkan preview...
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {error && (
//                       <div className="text-red-500 mt-2 p-2 bg-red-50 rounded">{error}</div>
//                     )}
//                     {success && (
//                       <div className="text-green-500 mt-2 p-2 bg-green-50 rounded">{success}</div>
//                     )}
//                   </div>

//                   {/* Card Ambil Label Titipan */}
//                   <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                     <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>
//                     <p className="text-sm text-gray-500 mb-4">
//                       *Menampilkan data terbaru untuk setiap kode
//                     </p>

//                     <div className="relative" ref={dropdownTitipanRef}>
//                       <div className="flex items-center space-x-2 mb-2">
//                         <input
//                           type="text"
//                           value={searchKodeTitipan}
//                           onChange={(e) => handleInputChange(e, 'titipan')}
//                           onFocus={() => {
//                             setIsDropdownTitipanOpen(true);
//                             handleInputFocus('titipan', searchKodeTitipan);
//                           }}
//                           placeholder="Masukkan kode atau nama pengunjung..."
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                         {isPc && (
//                           <button
//                             type="button"
//                             onClick={() => handleInputFocus('titipan', searchKodeTitipan)}
//                             className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                             title="Virtual Keyboard"
//                           >
//                             <FaKeyboard className="w-5 h-5" />
//                           </button>
//                         )}
//                         <button
//                           type="button"
//                           onClick={() => setShowScannerTitipan(true)}
//                           className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                           title="Scan Barcode"
//                         >
//                           <FaQrcode className="w-5 h-5" />
//                         </button>
//                       </div>

//                       {isDropdownTitipanOpen && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                           {filteredPengunjungTitipan.length > 0 ? (
//                             filteredPengunjungTitipan.map((pengunjung) => (
//                               <div
//                                 key={pengunjung.id}
//                                 onClick={() => handleSelectPengunjungTitipan(pengunjung)}
//                                 className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//                               >
//                                 <div className="font-medium">{pengunjung.nama}</div>
//                                 <div className="text-sm text-gray-500">
//                                   Kode: {pengunjung.kode} | ID: {pengunjung.id}
//                                 </div>
//                                 <div className="text-sm text-green-600 font-medium">
//                                   Antrian: {pengunjung.antrian}
//                                 </div>
//                                 <div className="text-xs text-gray-400">
//                                   Dibuat: {new Date(pengunjung.createdAt).toLocaleTimeString('id-ID')}
//                                 </div>
//                                 <div className="text-xs text-blue-500 font-medium mt-1">
//                                   ✓ Data Terbaru
//                                 </div>
//                               </div>
//                             ))
//                           ) : (
//                             <div className="p-3 text-gray-500">
//                               {searchKodeTitipan ? "Tidak ditemukan data hari ini" : "Tidak ada data hari ini"}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>

//                     {selectedPengunjungTitipan && (
//                       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                         <div className="mb-2">
//                           <span className="font-semibold">Nama:</span>{" "}
//                           {selectedPengunjungTitipan.nama}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">Kode:</span>{" "}
//                           {selectedPengunjungTitipan.kode}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">ID:</span>{" "}
//                           {selectedPengunjungTitipan.id}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">Antrian:</span>{" "}
//                           {selectedPengunjungTitipan.antrian}
//                         </div>
//                         <div className="mb-3 p-2 bg-green-50 rounded">
//                           <span className="font-semibold text-green-700">Status:</span>{" "}
//                           <span className="text-green-600">Data Terbaru</span>
//                         </div>
//                         <button
//                           onClick={handleAmbilLabelTitipan}
//                           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                         >
//                           Ambil Label Titipan
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Card Ambil Kartu Kunjungan */}
//                   <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//                     <QrCode className="h-12 w-12 text-red-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">Ambil Kartu Kunjungan + Label Titipan</h2>
//                     <p className="text-sm text-gray-500 mb-4">
//                       *Menampilkan data terbaru untuk setiap kode
//                     </p>

//                     <div className="relative" ref={dropdownKartuRef}>
//                       <div className="flex items-center space-x-2 mb-2">
//                         <input
//                           type="text"
//                           value={searchKodeKartu}
//                           onChange={(e) => handleInputChange(e, 'kartu')}
//                           onFocus={() => {
//                             setIsDropdownKartuOpen(true);
//                             handleInputFocus('kartu', searchKodeKartu);
//                           }}
//                           placeholder="Masukkan kode atau nama pengunjung..."
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                         {isPc && (
//                           <button
//                             type="button"
//                             onClick={() => handleInputFocus('kartu', searchKodeKartu)}
//                             className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                             title="Virtual Keyboard"
//                           >
//                             <FaKeyboard className="w-5 h-5" />
//                           </button>
//                         )}
//                         <button
//                           type="button"
//                           onClick={() => setShowScannerKartu(true)}
//                           className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                           title="Scan Barcode"
//                         >
//                           <FaQrcode className="w-5 h-5" />
//                         </button>
//                       </div>

//                       {isDropdownKartuOpen && filteredPengunjungKartu.length > 0 && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                           {filteredPengunjungKartu.map((pengunjung) => (
//                             <div
//                               key={pengunjung.id}
//                               onClick={() => handleSelectPengunjungKartu(pengunjung)}
//                               className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
//                             >
//                               <div className="font-medium">{pengunjung.nama}</div>
//                               <div className="text-sm text-gray-500">
//                                 Kode: {pengunjung.kode} | ID: {pengunjung.id}
//                               </div>
//                               {pengunjung.antrian && (
//                                 <div className="text-sm text-green-600 font-medium">
//                                   Antrian: {pengunjung.antrian}
//                                 </div>
//                               )}
//                               <div className="text-xs text-gray-400">
//                                 Dibuat: {new Date(pengunjung.createdAt).toLocaleTimeString('id-ID')}
//                               </div>
//                               <div className="text-xs text-blue-500 font-medium mt-1">
//                                 ✓ Data Terbaru
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {isDropdownKartuOpen && searchKodeKartu && filteredPengunjungKartu.length === 0 && (
//                         <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//                           <div className="p-3 text-gray-500 text-center">
//                             Tidak ada pengunjung yang sesuai untuk hari ini
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {selectedPengunjungKartu && (
//                       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                         <div className="mb-2">
//                           <span className="font-semibold">Nama:</span>{" "}
//                           {selectedPengunjungKartu.nama}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">Kode:</span>{" "}
//                           {selectedPengunjungKartu.kode}
//                         </div>
//                         <div className="mb-2">
//                           <span className="font-semibold">ID:</span>{" "}
//                           {selectedPengunjungKartu.id}
//                         </div>
//                         {selectedPengunjungKartu.antrian && (
//                           <div className="mb-2">
//                             <span className="font-semibold">Antrian:</span>{" "}
//                             {selectedPengunjungKartu.antrian}
//                           </div>
//                         )}
//                         <div className="mb-3 p-2 bg-green-50 rounded">
//                           <span className="font-semibold text-green-700">Status:</span>{" "}
//                           <span className="text-green-600">Data Terbaru</span>
//                         </div>
                        
//                         {/* Tombol Ambil Kartu */}
//                         <button
//                           onClick={handleAmbilKartuKunjungan}
//                           disabled={selectedPengunjungKartu.kartu_diambil}
//                           className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//                         >
//                           <FaPrint className="mr-2" />
//                           {selectedPengunjungKartu.kartu_diambil ? 'Kartu Sudah Diambil' : 'Ambil Kartu Kunjungan'}
//                         </button>

//                         {selectedPengunjungKartu.kartu_diambil && (
//                           <p className="text-red-600 text-sm mt-2 text-center">
//                             Kartu kunjungan untuk pengunjung ini sudah diambil sebelumnya.
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>

//                   {/* ... (sisa kode untuk card lainnya tetap sama) */}
//                   <Link
//                     to="/create-pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Pengunjung
//                     </h2>
//                     <p className="text-gray-600">Registrasi pengunjung baru</p>
//                   </Link>

//                   <Link
//                     to="/wargabinaan-form"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Warga Binaan
//                     </h2>
//                     <p className="text-gray-600">
//                       Tambahkan data warga binaan baru
//                     </p>
//                   </Link>

//                   <Link
//                     to="/wbp-list"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 block relative z-10"
//                     style={{ position: 'relative', zIndex: 10 }}
//                   >
//                     <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Daftar Warga Binaan
//                     </h2>
//                     <p className="text-gray-600">
//                       Lihat dan kelola data warga binaan
//                     </p>
//                   </Link>

//                   <Link
//                     to="/pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Daftar Pengunjung
//                     </h2>
//                     <p className="text-gray-600">
//                       Kelola data pengunjung yang tercatat
//                     </p>
//                   </Link>
                  
//                   <Link
//                     to="/pengunjung/data"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Data Input
//                     </h2>
//                     <p className="text-gray-600">
//                       Kelola data pengunjung yang akan tercatat pada sistem kunjungan
//                     </p>
//                   </Link>

//                   <Link
//                     to="/report"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Laporan
//                     </h2>
//                     <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
//                   </Link>
//                 </div>
//               </main>

//               {/* Footer */}
//               <footer className="bg-blue-600 text-white mt-12 py-4">
//                 <div className="container mx-auto px-4 text-center">
//                   <p className="text-sm">
//                     © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//                     reserved
//                   </p>
//                 </div>
//               </footer>
//             </>
//           )}

//           {/* Render untuk role p2u dan user */}
//           {(authUser.user?.role === "p2u" || authUser.user?.role === "user") && (
//             <>
//               <main className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   <Link
//                     to="/create-pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Pengunjung
//                     </h2>
//                     <p className="text-gray-600">Registrasi pengunjung baru</p>
//                   </Link>
//                   <Link
//                     to="/pengunjung/data/create"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Tambah Data
//                     </h2>
//                     <p className="text-gray-600">Registrasi pengunjung baru</p>
//                   </Link>
//                   <Link
//                     to="/pengunjung"
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
//                   >
//                     <UserIcon className="h-12 w-12 text-green-600 mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">
//                       Daftar Pengunjung
//                     </h2>
//                     <p className="text-gray-600">
//                       Kelola data pengunjung yang tercatat
//                     </p>
//                   </Link>
//                 </div>
//               </main>
//               <footer className="bg-blue-600 text-white mt-12 py-4">
//                 <div className="container mx-auto px-4 text-center">
//                   <p className="text-sm">
//                     © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
//                     reserved
//                   </p>
//                 </div>
//               </footer>
//             </>
//           )}

//           {/* Print Preview Modal */}
//           <PrintPreviewModal 
//             isOpen={showPrintPreview}
//             onClose={handleClosePrintPreview}
//             printData={printData}
//           />

//           {/* Scanner Modals */}
//           <ScannerModal 
//             isOpen={showScannerAntrian}
//             onClose={() => setShowScannerAntrian(false)}
//             onScan={handleScanAntrian}
//             title="Scan Barcode untuk Antrian"
//           />

//           <ScannerModal 
//             isOpen={showScannerTitipan}
//             onClose={() => setShowScannerTitipan(false)}
//             onScan={handleScanTitipan}
//             title="Scan Barcode untuk Label Titipan"
//           />

//           <ScannerModal 
//             isOpen={showScannerKartu}
//             onClose={() => setShowScannerKartu(false)}
//             onScan={handleScanKartu}
//             title="Scan Barcode untuk Kartu Kunjungan"
//           />

//           {/* Virtual Keyboard - Hanya muncul di PC */}
//           {showVirtualKeyboard && (
//             <VirtualKeyboardHome 
//               onKeyPress={handleVirtualKeyPress}
//               onClose={() => setShowVirtualKeyboard(false)}
//               value={keyboardValue}
//               activeInput={activeInput}
//               onInputChange={handleInputUpdate}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserIcon,
  PlusIcon,
  ShieldCheckIcon,
  UsersIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logokemenimipas.png";
import photo from "../../assets/avatar.jpg"
import useAuthStore from "../../store/useAuthStore";
import useDataStore from "../../store/useDataStore";
import { BaggageClaim, Barcode, LogOut, QrCode, ScrollText } from "lucide-react";
import { FaSearch, FaQrcode, FaTimes, FaPrint, FaKeyboard } from 'react-icons/fa';

// Import komponen PDF
import { Document, Page, Text, View, StyleSheet, Image, PDFViewer } from "@react-pdf/renderer";
import toast from "react-hot-toast";

// Komponen Floating Keyboard Toggle Button untuk HomePage
const FloatingKeyboardToggleHome = ({ isKeyboardEnabled, onToggleKeyboard }) => {
  return (
    <button
      onClick={onToggleKeyboard}
      className={`fixed right-6 bottom-24 z-40 group relative p-4 rounded-full shadow-2xl focus:outline-none focus:ring-4 transition-all duration-300 transform hover:scale-110 ${
        isKeyboardEnabled 
          ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300' 
          : 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300'
      }`}
      title={`${isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual`}
    >
      <FaKeyboard className="w-6 h-6" />
      
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
      </div>
    </button>
  );
};

// Komponen Virtual Keyboard untuk HomePage
const VirtualKeyboardHome = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
  const [isShift, setIsShift] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isPc, setIsPc] = useState(false);
  const keyboardRef = useRef(null);

  const alphaRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  const symbolRows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '_', '@', '#', '$', '%', '&', '*', '(', ')'],
    ['.', ',', '!', '?', ':', ';', '"', "'"],
  ];

  // Deteksi perangkat saat komponen dimuat
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isTablet = /tablet|ipad/i.test(userAgent);
      const isPcDevice = !isMobile && !isTablet;
      
      setIsPc(isPcDevice);
    };

    checkDevice();
  }, []);

  // Handle click outside untuk menutup keyboard
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Jika keyboardRef ada dan klik dilakukan di luar komponen keyboard
      if (keyboardRef.current && !keyboardRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Tambahkan event listener ketika komponen mount
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Untuk perangkat touch

    // Cleanup event listener ketika komponen unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClose]);

  const currentRows = isSymbol ? symbolRows : alphaRows;

  // Handle drag start
  const handleDragStart = (clientX, clientY) => {
    if (!keyboardRef.current) return;
    
    setIsDragging(true);
    const rect = keyboardRef.current.getBoundingClientRect();
    
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Mencegah event bubbling ke parent
    handleDragStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    e.stopPropagation(); // Mencegah event bubbling ke parent
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  // Handle drag movement
  const handleDragMove = (clientX, clientY) => {
    if (!isDragging || !keyboardRef.current) return;
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    const keyboardWidth = keyboardRef.current.offsetWidth;
    const keyboardHeight = keyboardRef.current.offsetHeight;
    const maxX = window.innerWidth - keyboardWidth;
    const maxY = window.innerHeight - keyboardHeight;
    
    setPosition({
      x: Math.max(10, Math.min(newX, maxX - 10)),
      y: Math.max(10, Math.min(newY, maxY - 10))
    });
  };

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
    e.preventDefault();
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Event listeners untuk drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleDragEnd);
      
      document.body.style.overflow = 'hidden';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      
      document.body.style.overflow = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, dragOffset]);

  // Set posisi awal
  useEffect(() => {
    if (!isPc) return;

    const updateInitialPosition = () => {
      if (keyboardRef.current) {
        const keyboardWidth = keyboardRef.current.offsetWidth;
        const keyboardHeight = keyboardRef.current.offsetHeight;
        
        setPosition({
          x: (window.innerWidth - keyboardWidth) / 2,
          y: window.innerHeight - keyboardHeight - 20
        });
      }
    };

    setTimeout(updateInitialPosition, 100);
    window.addEventListener('resize', updateInitialPosition);
    return () => window.removeEventListener('resize', updateInitialPosition);
  }, [isPc]);

  const handleKeyClick = (key) => {
    if (key === 'backspace') {
      onKeyPress('backspace');
      if (onInputChange) onInputChange('backspace');
    } else if (key === 'clear') {
      onKeyPress('clear');
      if (onInputChange) onInputChange('clear');
    } else {
      const finalKey = isShift ? key.toUpperCase() : key;
      onKeyPress(finalKey);
      if (onInputChange) onInputChange(finalKey);
    }
  };

  const handleSpecialKey = (action) => {
    switch (action) {
      case 'shift':
        setIsShift(!isShift);
        break;
      case 'symbol':
        setIsSymbol(!isSymbol);
        setIsShift(false);
        break;
      case 'space':
        onKeyPress(' ');
        if (onInputChange) onInputChange(' ');
        break;
      case 'backspace':
        onKeyPress('backspace');
        if (onInputChange) onInputChange('backspace');
        break;
      case 'enter':
        onKeyPress('enter');
        break;
      case 'clear':
        onKeyPress('clear');
        if (onInputChange) onInputChange('clear');
        break;
      default:
        break;
    }
  };

  const getInputLabel = () => {
    switch (activeInput) {
      case 'antrian':
        return 'Input Pencarian Antrian';
      case 'titipan':
        return 'Input Pencarian Titipan';
      case 'kartu':
        return 'Input Pencarian Kartu';
      default:
        return 'Virtual Keyboard';
    }
  };

  // Jika bukan PC, jangan render keyboard virtual
  if (!isPc) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none">
      <div 
        ref={keyboardRef}
        className="bg-transparent rounded-2xl shadow-2xl pointer-events-auto border border-white border-opacity-20"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none',
          zIndex: 1000,
          width: '35vw',
          minWidth: '500px',
          maxWidth: '600px',
        }}
        // Tambahkan event stopPropagation untuk mencegah event bubbling
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        {/* Draggable Header */}
        <div 
          className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl p-4 text-white cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaKeyboard className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">{getInputLabel()}</h3>
                <p className="text-blue-100 text-sm">
                  Drag untuk memindahkan
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="p-4 bg-gray-50 bg-opacity-50 border-b">
          <div className="bg-white bg-opacity-70 rounded-xl p-4 shadow-inner border">
            <div className="text-sm text-gray-500 mb-2 flex justify-between">
              <span>Input Preview:</span>
              <span className="text-blue-500 font-medium">{value.length} karakter</span>
            </div>
            <div className="text-lg font-mono min-h-[28px] p-2 bg-gray-50 bg-opacity-50 rounded-lg border-2 border-blue-200">
              {value || <span className="text-gray-400">Ketik menggunakan keyboard virtual...</span>}
              <span className="ml-1 animate-pulse text-blue-500">|</span>
            </div>
          </div>
        </div>

        {/* Keyboard Layout */}
        <div className="p-4">
          {/* Main Keyboard */}
          {currentRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-2 space-x-1">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="flex-1 max-w-[60px] h-14 bg-white bg-opacity-95 rounded-xl transition-all duration-300 font-medium text-gray-700 touch-friendly relative overflow-hidden group"
                  style={{ 
                    minWidth: '44px',
                    minHeight: '44px',
                    touchAction: 'manipulation'
                  }}
                >
                  {/* Base Border - Lebih tebal */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 border-[3px] border-gray-500 shadow-sm"></div>
                  
                  {/* Neon Border Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-0"></div>
                  
                  {/* Content Area */}
                  <div className="absolute inset-[3px] rounded-lg bg-white bg-opacity-95 flex items-center justify-center z-10 group-hover:bg-opacity-100 transition-all duration-300">
                    {isShift && !isSymbol ? key.toUpperCase() : key}
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl transition-all duration-300"></div>
                </button>
              ))}
            </div>
          ))}

          {/* Control Row */}
          <div className="flex justify-center space-x-1 mt-4">
            <button
              onClick={() => handleSpecialKey('shift')}
              className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
                isShift 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
                  : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
              }`}
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              ⇧ SHIFT
            </button>

            <button
              onClick={() => handleSpecialKey('symbol')}
              className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
                isSymbol 
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
                  : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
              }`}
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              {isSymbol ? 'ABC' : '123'}
            </button>

            <button
              onClick={() => handleSpecialKey('space')}
              className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              SPACE
            </button>

            <button
              onClick={() => handleSpecialKey('backspace')}
              className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              ⌫ DELETE
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-2 mt-3">
            <button
              onClick={() => handleSpecialKey('clear')}
              className="flex-1 max-w-[140px] h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all touch-friendly font-medium border-2 border-orange-600"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              🗑️ CLEAR
            </button>
            
            <button
              onClick={() => handleSpecialKey('enter')}
              className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
              style={{ 
                minHeight: '44px',
                touchAction: 'manipulation'
              }}
            >
              ↵ ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen BarcodeScanner yang fixed - kembali ke approach awal
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
        // Tambahkan config untuk stability
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
        // Only log errors that are not expected
        if (error && !error.message?.includes('NotFoundException')) {
          console.warn("Scan error:", error);
        }
      };

      // Render scanner dengan delay kecil
      setTimeout(() => {
        if (isScanning) {
          scanner.render(onScanSuccess, onScanError);
        }
      }, 100);

      // Cleanup function
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

// Komponen PDF untuk Antrian
const PDFAntrian = ({ pengunjung, antrian }) => {
  const mmToPt = (mm) => mm * 2.83465;

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      padding: 5,
      width: mmToPt(80),
      height: mmToPt(80),
      justifyContent: "space-between",
    },
    header: {
      textAlign: "center",
      marginBottom: 5,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 8,
      marginBottom: 2,
    },
    antrianSection: {
      alignItems: "center",
    },
    antrianNumber: {
      fontSize: 32,
      fontWeight: "bold",
    },
    barcodeSection: {
      alignItems: "center",
    },
    barcode: {
      width: 50,
      height: 50,
    },
    kode: {
      fontSize: 8,
      marginTop: 3,
    },
    infoSection: {
      marginVertical: 0,
    },
    info: {
      fontSize: 9,
      marginBottom: 3,
      textAlign: "center",
    },
    footer: {
      textAlign: "center",
    },
    footerText: {
      fontSize: 7,
    },
  });

  return (
    <Document>
      <Page size={[mmToPt(80), mmToPt(80)]} style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>NOMOR ANTRIAN</Text>
          <Text style={styles.subtitle}>Sistem Kunjungan Digital BATARI</Text>
          <Text style={styles.subtitle}>Rutan Kelas II B Bantaeng</Text>
        </View>
        
        <View style={styles.antrianSection}>
          <Text style={styles.antrianNumber}>{antrian}</Text>
        </View>
        
        <View style={styles.barcodeSection}>
          <Image src={pengunjung.barcode} style={styles.barcode} />
          <Text style={styles.kode}>Kode: {pengunjung.kode}</Text>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.info}>
            Tanggal: {new Date().toLocaleDateString('id-ID')}
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>** Harap simpan tiket ini **</Text>
          <Text style={styles.footerText}>Tunggu hingga nomor antrian dipanggil</Text>
        </View>
      </Page>
    </Document>
  );
};

// Komponen Modal Print Preview
const PrintPreviewModal = ({ isOpen, onClose, printData }) => {
  if (!isOpen || !printData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Print Preview Antrian</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
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
        
        <div className="h-full p-4">
          <PDFViewer width="100%" height="100%">
            <PDFAntrian 
              pengunjung={printData.pengunjung}
              antrian={printData.antrian}
            />
          </PDFViewer>
        </div>
        
        <div className="flex justify-end p-4 border-t gap-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Tutup
          </button>
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

// Komponen Modal Scanner
const ScannerModal = ({ isOpen, onClose, onScan, title = "Scan Barcode" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay sedikit untuk memastikan DOM ready
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
    // Delay onClose untuk memberi waktu cleanup
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

// Komponen Screensaver Animasi
const VisitScreensaver = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-blue-900 z-50 flex items-center justify-center cursor-pointer"
      onClick={onClose}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Animasi Latar Belakang */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Logo Berputar */}
          <div className="animate-spin-slow">
            <svg
              className="w-64 h-64 text-yellow-400 opacity-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center align-center animate-pulse ">
            <img className="rounded-full mt-2" src={logo} alt="Logo Kemenimipas" />
          </div>
          {/* Animasi Teks */}
          <h1 className="text-5xl font-bold mb-6 animate-pulse">
            SELAMAT DATANG
          </h1>
          
          {/* Kartu Animasi */}
          <div className="inline-block animate-float">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="flex flex-col items-center">
                <Barcode className="h-32 w-32 text-yellow-400 mb-4 animate-bounce" />
                <h2 className="text-3xl font-semibold mb-2">
                  Sistem Kunjungan Digital
                </h2>
                <h2 className="text-3xl font-semibold mb-2">
                  BATARI (Barcode Tanpa Antrian)
                </h2>
                <p className="text-xl opacity-80">
                  Sentuh layar untuk melanjutkan
                </p>
              </div>
            </div>
          </div>

          {/* Animasi Garis Bawah */}
          <div className="mt-12 flex justify-center">
            <div className="w-64 h-1 bg-yellow-400 rounded-full animate-scale-x" />
          </div>
        </div>

        {/* Partikel Animasi */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${2 + i % 3}s infinite`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scale-x {
          animation: scale-x 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

// Helper function untuk mendapatkan tanggal hari ini dalam format YYYY-MM-DD (Asia/Makassar)
const getTodayMakassar = () => {
  const now = new Date();
  // Konversi ke timezone Asia/Makassar (UTC+8)
  const makassarOffset = 8 * 60; // dalam menit
  const localOffset = now.getTimezoneOffset();
  const makassarTime = new Date(now.getTime() + (makassarOffset + localOffset) * 60000);
  
  const year = makassarTime.getFullYear();
  const month = String(makassarTime.getMonth() + 1).padStart(2, '0');
  const day = String(makassarTime.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

// Helper function untuk memeriksa apakah tanggal sama dengan hari ini (Asia/Makassar)
const isTodayMakassar = (dateString) => {
  if (!dateString) return false;
  
  try {
    const inputDate = new Date(dateString);
    const today = getTodayMakassar();
    
    const inputYear = inputDate.getFullYear();
    const inputMonth = String(inputDate.getMonth() + 1).padStart(2, '0');
    const inputDay = String(inputDate.getDate()).padStart(2, '0');
    const inputDateFormatted = `${inputYear}-${inputMonth}-${inputDay}`;
    
    return inputDateFormatted === today;
  } catch (error) {
    console.error("Error checking date:", error);
    return false;
  }
};

// Helper function untuk mendapatkan data unik berdasarkan kode dengan ID terakhir
const getUniquePengunjungsByLatestId = (pengunjungs) => {
  const groupedByKode = {};
  
  // Kelompokkan pengunjung berdasarkan kode
  pengunjungs.forEach(pengunjung => {
    if (!groupedByKode[pengunjung.kode]) {
      groupedByKode[pengunjung.kode] = [];
    }
    groupedByKode[pengunjung.kode].push(pengunjung);
  });
  
  // Untuk setiap kode, ambil data dengan ID terakhir (createdAt terbaru)
  const uniquePengunjungs = [];
  Object.keys(groupedByKode).forEach(kode => {
    const pengunjungsWithSameKode = groupedByKode[kode];
    // Urutkan berdasarkan createdAt descending dan ambil yang pertama (terbaru)
    const latestPengunjung = pengunjungsWithSameKode
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    uniquePengunjungs.push(latestPengunjung);
  });
  
  return uniquePengunjungs;
};

// Helper function untuk mendapatkan data dengan filter kode dan ID terakhir
const getFilteredUniquePengunjungs = (pengunjungs, searchTerm, additionalFilter = null) => {
  // Filter berdasarkan kondisi tambahan jika ada
  let filtered = pengunjungs;
  if (additionalFilter) {
    filtered = pengunjungs.filter(additionalFilter);
  }
  
  // Filter berdasarkan search term
  if (searchTerm) {
    filtered = filtered.filter(pengunjung =>
      pengunjung.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pengunjung.kode?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Ambil data unik berdasarkan kode dengan ID terakhir
  return getUniquePengunjungsByLatestId(filtered);
};

// Main HomePage Component
export default function HomePage() {
  const [showScreensaver, setShowScreensaver] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  const { authUser, logout } = useAuthStore();
  const {
    pengunjungs,
    fetchPengunjung,
    getNomorAntrianTerakhir,
    fetchPengunjungByCode,
    pengunjungByCode,
    updateAntrian,
    updateKartuDiambil
  } = useDataStore();

  // State untuk Antrian
  const [searchKode, setSearchKode] = useState("");
  const [selectedPengunjung, setSelectedPengunjung] = useState(null);
  const [antrian, setAntrian] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // State untuk Titipan
  const [searchKodeTitipan, setSearchKodeTitipan] = useState("");
  const [selectedPengunjungTitipan, setSelectedPengunjungTitipan] = useState(null);
  const [isDropdownTitipanOpen, setIsDropdownTitipanOpen] = useState(false);
  
  // State untuk Kartu Kunjungan
  const [searchKodeKartu, setSearchKodeKartu] = useState("");
  const [selectedPengunjungKartu, setSelectedPengunjungKartu] = useState(null);
  const [isDropdownKartuOpen, setIsDropdownKartuOpen] = useState(false);
  
  // State umum
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [printData, setPrintData] = useState(null);
  const [lastAntrian, setLastAntrian] = useState("000");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State untuk Scanner
  const [showScannerAntrian, setShowScannerAntrian] = useState(false);
  const [showScannerTitipan, setShowScannerTitipan] = useState(false);
  const [showScannerKartu, setShowScannerKartu] = useState(false);
  
  // State untuk Virtual Keyboard
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');
  const [isPc, setIsPc] = useState(false);

  // State untuk toggle keyboard global
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(true);

  const dropdownRef = useRef(null);
  const dropdownTitipanRef = useRef(null);
  const dropdownKartuRef = useRef(null);
  const navigate = useNavigate();
  const inactivityTimerRef = useRef(null);

  // Deteksi perangkat saat komponen dimuat
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isTablet = /tablet|ipad/i.test(userAgent);
      const isPcDevice = !isMobile && !isTablet;
      
      setIsPc(isPcDevice);
    };

    checkDevice();
  }, []);

  // Load keyboard preference dari localStorage saat komponen dimount
  useEffect(() => {
    const savedKeyboardPreference = localStorage.getItem('virtualKeyboardEnabledHome');
    if (savedKeyboardPreference !== null) {
      setIsKeyboardEnabled(JSON.parse(savedKeyboardPreference));
    }
  }, []);

  // Simpan keyboard preference ke localStorage saat berubah
  const toggleKeyboard = () => {
    const newState = !isKeyboardEnabled;
    setIsKeyboardEnabled(newState);
    localStorage.setItem('virtualKeyboardEnabledHome', JSON.stringify(newState));
    toast.success(`Keyboard virtual ${newState ? 'diaktifkan' : 'dinonaktifkan'}`);
  };

  // Redirect ke halaman login jika authUser null
  useEffect(() => {
    if (!authUser) {
      navigate("/auth");
    }
  }, [authUser, navigate]);

  // Inactivity timer untuk screensaver
  useEffect(() => {
    if (authUser?.user?.role === "admin") {
      const events = ["mousemove", "keydown", "click", "scroll"];
      
      const resetTimer = () => {
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = setTimeout(() => {
          if (authUser?.user?.role === "admin") {
            setShowScreensaver(true);
          }
        }, 30000);
      };

      events.forEach(event => 
        window.addEventListener(event, resetTimer)
      );

      resetTimer();

      return () => {
        events.forEach(event => 
          window.removeEventListener(event, resetTimer)
        );
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      };
    }
  }, [authUser]);

  // Fetch last antrian
  useEffect(() => {
    const fetchLastAntrian = async () => {
      try {
        const antrian = await getNomorAntrianTerakhir();
        if (antrian) {
          setLastAntrian(antrian);
        }
      } catch (error) {
        console.error("Error fetching last antrian:", error);
      }
    };

    fetchLastAntrian();
  }, [getNomorAntrianTerakhir]);

  // Fetch data pengunjung
  useEffect(() => {
    fetchPengunjung();
  }, [fetchPengunjung]);

  // Handle klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (dropdownTitipanRef.current && !dropdownTitipanRef.current.contains(event.target)) {
        setIsDropdownTitipanOpen(false);
      }
      if (dropdownKartuRef.current && !dropdownKartuRef.current.contains(event.target)) {
        setIsDropdownKartuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handler untuk virtual keyboard - hanya untuk PC
  const handleVirtualKeyPress = (key) => {
    if (key === 'backspace') {
      setKeyboardValue(prev => prev.slice(0, -1));
      handleInputUpdate('backspace');
    } else if (key === 'enter') {
      setShowVirtualKeyboard(false);
    } else if (key === 'space') {
      setKeyboardValue(prev => prev + ' ');
      handleInputUpdate(' ');
    } else if (key === 'clear') {
      setKeyboardValue('');
      handleInputUpdate('clear');
    } else {
      setKeyboardValue(prev => prev + key);
      handleInputUpdate(key);
    }
  };

  // Fungsi untuk langsung update input field dari keyboard
  const handleInputUpdate = (key) => {
    let newValue = '';
    
    if (key === 'backspace') {
      newValue = keyboardValue.slice(0, -1);
    } else if (key === 'clear') {
      newValue = '';
    } else if (key === ' ') {
      newValue = keyboardValue + ' ';
    } else {
      newValue = keyboardValue + key;
    }

    // Update form data sesuai dengan input yang aktif
    switch (activeInput) {
      case 'antrian':
        setSearchKode(newValue);
        setIsDropdownOpen(true);
        break;
      case 'titipan':
        setSearchKodeTitipan(newValue);
        setIsDropdownTitipanOpen(true);
        break;
      case 'kartu':
        setSearchKodeKartu(newValue);
        setIsDropdownKartuOpen(true);
        break;
      default:
        break;
    }
  };

  // Handler untuk membuka virtual keyboard dengan input tertentu - hanya untuk PC
  const handleInputFocus = (inputType, currentValue = '') => {
    // Hanya tampilkan virtual keyboard jika perangkat adalah PC dan keyboard diaktifkan
    if (!isPc || !isKeyboardEnabled) {
      if (!isKeyboardEnabled) {
        toast.info('Keyboard virtual dinonaktifkan. Aktifkan terlebih dahulu untuk menggunakan fitur ini.');
      }
      return;
    }
    
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    setShowVirtualKeyboard(true);
  };

  // PERBAIKAN: Filter pengunjung untuk antrian - Hanya yang belum punya antrian dan created hari ini
  const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
    const isKodeMatch = pengunjung.nama?.toLowerCase().includes(searchKode?.toLowerCase()) ||
                       pengunjung.kode?.toLowerCase().includes(searchKode?.toLowerCase());
    const hasNoAntrian = !pengunjung.antrian; // Hanya yang belum punya antrian
    const isToday = isTodayMakassar(pengunjung.createdAt); // Hanya data yang dibuat hari ini
    
    return isKodeMatch && hasNoAntrian && isToday;
  });

  // PERBAIKAN: Filter pengunjung untuk titipan - Hanya data hari ini yang sudah punya antrian, dengan ID terakhir
  const filteredPengunjungTitipan = getFilteredUniquePengunjungs(
    pengunjungs,
    searchKodeTitipan,
    (pengunjung) => {
      const hasAntrian = !!pengunjung.antrian; // Hanya yang sudah punya antrian
      const isToday = isTodayMakassar(pengunjung.createdAt); // Hanya data yang dibuat hari ini
      return hasAntrian && isToday;
    }
  );
  // PERBAIKAN: Filter pengunjung untuk kartu kunjungan - Hanya data hari ini dengan ID terakhir
  const filteredPengunjungKartu = getFilteredUniquePengunjungs(
    pengunjungs,
    searchKodeKartu,
    (pengunjung) => isTodayMakassar(pengunjung.createdAt) // Hanya data yang dibuat hari ini
  );

  // Handle pemilihan pengunjung untuk antrian
  const handleSelectPengunjung = (pengunjung) => {
    setSearchKode(pengunjung.kode);
    setSelectedPengunjung(pengunjung);
    setIsDropdownOpen(false);
  };

  // Handle pemilihan pengunjung untuk titipan
  const handleSelectPengunjungTitipan = (pengunjung) => {
    setSearchKodeTitipan(pengunjung.kode);
    setSelectedPengunjungTitipan(pengunjung);
    setIsDropdownTitipanOpen(false);
  };

  // Handle pemilihan pengunjung untuk kartu kunjungan
  const handleSelectPengunjungKartu = (pengunjung) => {
    setSearchKodeKartu(pengunjung.kode);
    setSelectedPengunjungKartu(pengunjung);
    setIsDropdownKartuOpen(false);
  };

  // Handle scan untuk antrian
  const handleScanAntrian = (data) => {
    setSearchKode(data);
    setShowScannerAntrian(false);
    
    // Cari pengunjung berdasarkan kode yang di-scan dan created hari ini
    const pengunjungDitemukan = pengunjungs.find(p => 
      p.kode === data && isTodayMakassar(p.createdAt)
    );
    
    if (pengunjungDitemukan) {
      if (pengunjungDitemukan.antrian) {
        toast.error("Pengunjung ini sudah memiliki nomor antrian");
      } else {
        setSelectedPengunjung(pengunjungDitemukan);
        toast.success("Pengunjung ditemukan");
      }
    } else {
      toast.error("Pengunjung tidak ditemukan untuk hari ini");
    }
  };

  // Handle scan untuk titipan - PERBAIKAN: Mengambil data dengan ID terakhir
  const handleScanTitipan = (data) => {
    setSearchKodeTitipan(data);
    setShowScannerTitipan(false);
    
    // Cari semua pengunjung dengan kode yang sama dan created hari ini
    const pengunjungsWithSameKode = pengunjungs.filter(p => 
      p.kode === data && isTodayMakassar(p.createdAt) && p.antrian
    );
    
    if (pengunjungsWithSameKode.length > 0) {
      // Ambil data dengan ID terakhir (createdAt terbaru)
      const latestPengunjung = pengunjungsWithSameKode
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      
      setSelectedPengunjungTitipan(latestPengunjung);
      toast.success("Pengunjung ditemukan (data terbaru)");
    } else {
      toast.error("Pengunjung tidak ditemukan atau belum memiliki antrian untuk hari ini");
    }
  };

  // Handle scan untuk kartu kunjungan - PERBAIKAN: Mengambil data dengan ID terakhir
  const handleScanKartu = (data) => {
    setSearchKodeKartu(data);
    setShowScannerKartu(false);
    
    // Cari semua pengunjung dengan kode yang sama dan created hari ini
    const pengunjungsWithSameKode = pengunjungs.filter(p => 
      p.kode === data && isTodayMakassar(p.createdAt)
    );
    
    if (pengunjungsWithSameKode.length > 0) {
      // Ambil data dengan ID terakhir (createdAt terbaru)
      const latestPengunjung = pengunjungsWithSameKode
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      
      setSelectedPengunjungKartu(latestPengunjung);
      toast.success("Pengunjung ditemukan (data terbaru)");
    } else {
      toast.error("Pengunjung tidak ditemukan untuk hari ini");
    }
  };

  // Submit nomor antrian dengan print preview
  const handleSubmitAntrian = async () => {
    try {
      if (!selectedPengunjung?.id) {
        setError("Pilih pengunjung terlebih dahulu");
        return;
      }

      // Validasi: pastikan pengunjung belum punya antrian
      if (selectedPengunjung.antrian) {
        setError("Pengunjung ini sudah memiliki nomor antrian");
        return;
      }

      // Validasi: pastikan data pengunjung adalah hari ini
      if (!isTodayMakassar(selectedPengunjung.createdAt)) {
        setError("Data pengunjung tidak valid untuk hari ini");
        return;
      }

      const updatedPengunjung = await updateAntrian(selectedPengunjung.id);

      if (updatedPengunjung) {
        const newAntrian = updatedPengunjung.antrian;
        const lastThreeDigits = newAntrian.slice(-3);
        
        setAntrian(lastThreeDigits);
        setSuccess("Nomor antrian berhasil disimpan");
        setError("");
        
        // Set data untuk print preview
        setPrintData({
          pengunjung: selectedPengunjung,
          antrian: lastThreeDigits
        });
        
        // Tampilkan print preview
        setShowPrintPreview(true);

        // Update lastAntrian untuk ditampilkan di UI
        setLastAntrian(lastThreeDigits);

        // Reset form setelah beberapa detik
        setTimeout(() => {
          setSuccess("");
          setSearchKode("");
          setSelectedPengunjung(null);
          setAntrian(null);
          fetchPengunjung(); // Refresh data
        
        }, 5000);
      }
    } catch (error) {
      console.error("Gagal menyimpan antrian:", error);
      setError("Gagal menyimpan nomor antrian");
    }
  };

  // Handle close print preview
  const handleClosePrintPreview = () => {
    setShowPrintPreview(false);
    setPrintData(null);
  };

  // Handle ambil label titipan
  const handleAmbilLabelTitipan = () => {
    if (selectedPengunjungTitipan?.id) {
      navigate(`/label/${selectedPengunjungTitipan.id}`);
    }
  };

  // Handle ambil kartu kunjungan
  const handleAmbilKartuKunjungan = () => {
    if (selectedPengunjungKartu?.id) {
      navigate(`/pengunjung/${selectedPengunjungKartu.id}`);
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle close screensaver
  const handleCloseScreensaver = () => {
    setShowScreensaver(false);
    if (inactivityTimer) clearTimeout(inactivityTimer);
  };

  // Handle perubahan input manual (tanpa virtual keyboard)
  const handleInputChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case 'antrian':
        setSearchKode(value);
        setIsDropdownOpen(true);
        break;
      case 'titipan':
        setSearchKodeTitipan(value);
        setIsDropdownTitipanOpen(true);
        break;
      case 'kartu':
        setSearchKodeKartu(value);
        setIsDropdownKartuOpen(true);
        break;
      default:
        break;
    }
  };

  // Jika authUser null, jangan render apa pun
  if (!authUser) {
    return null;
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {authUser?.user?.role === "admin" && showScreensaver ? (
        <VisitScreensaver onClose={handleCloseScreensaver} />
      ) : (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-blue-600 text-white shadow-lg relative">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={logo}
                  alt="Logo Kemenimipas"
                  className="h-12 w-12 rounded-full"
                />
                <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
              </div>

              <div className="flex-col items-center space-x-4 relative">
                <div className="flex justify-center cursor-pointer" onClick={toggleMenu}>
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src={authUser.user?.photo || photo} 
                    alt="Profile"
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className="text-sm text-end capitalize">{authUser.user?.role}</h3>
                </div>
                <span className="text-sm">
                  Selamat Datang, {authUser.user?.nama}
                </span>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col p-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                      >
                        <LogOut className="size-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {authUser.user?.role === "admin" && (
            <>
              {/* Main Content */}
              <main className="container mx-auto px-4 py-8">
                {/* Status Keyboard Virtual */}
                <div className={`mb-6 p-4 rounded-lg border ${
                  isKeyboardEnabled 
                    ? 'bg-green-50 border-green-200 text-green-700' 
                    : 'bg-gray-50 border-gray-200 text-gray-700'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaKeyboard className={`mr-2 ${isKeyboardEnabled ? 'text-green-500' : 'text-gray-500'}`} />
                      <span className="text-sm font-medium">
                        Keyboard Virtual: <span className={isKeyboardEnabled ? 'text-green-600' : 'text-gray-600'}>
                          {isKeyboardEnabled ? 'AKTIF' : 'NONAKTIF'}
                        </span>
                      </span>
                    </div>
                    <button
                      onClick={toggleKeyboard}
                      className={`text-xs px-3 py-1 rounded-full transition-colors ${
                        isKeyboardEnabled 
                          ? 'bg-green-500 text-white hover:bg-green-600' 
                          : 'bg-gray-500 text-white hover:bg-gray-600'
                      }`}
                    >
                      {isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Card Ambil Nomor Antrian */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                    <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Ambil Nomor Antrian
                    </h2>

                    <div className="relative" ref={dropdownRef}>
                      <div className="flex items-center space-x-2 mb-2">
                        <input
                          type="text"
                          value={searchKode}
                          onChange={(e) => handleInputChange(e, 'antrian')}
                          onFocus={() => {
                            setIsDropdownOpen(true);
                            if (isKeyboardEnabled) {
                              handleInputFocus('antrian', searchKode);
                            }
                          }}
                          placeholder="Masukkan kode atau nama pengunjung..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        {isPc && isKeyboardEnabled && (
                          <button
                            type="button"
                            onClick={() => handleInputFocus('antrian', searchKode)}
                            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                            title="Virtual Keyboard"
                          >
                            <FaKeyboard className="w-5 h-5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setShowScannerAntrian(true)}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                          title="Scan Barcode"
                        >
                          <FaQrcode className="w-5 h-5" />
                        </button>
                      </div>

                      {isDropdownOpen && filteredPengunjungs.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {filteredPengunjungs.map((pengunjung) => (
                            <div
                              key={pengunjung.id}
                              onClick={() => handleSelectPengunjung(pengunjung)}
                              className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
                            >
                              <div className="font-medium">{pengunjung.nama}</div>
                              <div className="text-sm text-gray-500">
                                Kode: {pengunjung.kode} | ID: {pengunjung.id}
                              </div>
                              <div className="text-xs text-gray-400">
                                Dibuat: {new Date(pengunjung.createdAt).toLocaleTimeString('id-ID')}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {isDropdownOpen && searchKode && filteredPengunjungs.length === 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                          <div className="p-3 text-gray-500 text-center">
                            {pengunjungs.some(p => 
                              (p.nama?.toLowerCase().includes(searchKode.toLowerCase()) ||
                               p.kode?.toLowerCase().includes(searchKode.toLowerCase())) &&
                              p.antrian && isTodayMakassar(p.createdAt)
                            ) ? (
                              <div>
                                <p>Pengunjung ditemukan tetapi sudah memiliki nomor antrian</p>
                                <p className="text-sm text-red-600 mt-1">
                                  Cari pengunjung lain yang belum memiliki antrian
                                </p>
                              </div>
                            ) : (
                              "Tidak ada pengunjung yang sesuai untuk hari ini"
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h2 className="text-xl font-semibold mb-2">
                        Nomor Antrian Terakhir
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Nomor antrian terakhir yang diambil:
                      </p>

                      {lastAntrian ? (
                        <div className="text-3xl font-bold text-blue-600">
                          {lastAntrian}
                        </div>
                      ) : (
                        <div className="text-gray-500">Belum ada antrian</div>
                      )}
                    </div>

                    {selectedPengunjung && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="mb-2">
                          <span className="font-semibold">Nama:</span>{" "}
                          {selectedPengunjung.nama}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Kode:</span>{" "}
                          {selectedPengunjung.kode}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">ID:</span>{" "}
                          {selectedPengunjung.id}
                        </div>
                        <button
                          onClick={handleSubmitAntrian}
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Generate Nomor Antrian
                        </button>

                        {antrian && (
                          <div className="mt-4 text-center">
                            <span className="font-semibold">Nomor Antrian:</span>
                            <div className="text-3xl font-bold text-blue-600 mt-1">
                              {antrian}
                            </div>
                            <p className="text-sm text-green-600 mt-2">
                              Sedang menampilkan preview...
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {error && (
                      <div className="text-red-500 mt-2 p-2 bg-red-50 rounded">{error}</div>
                    )}
                    {success && (
                      <div className="text-green-500 mt-2 p-2 bg-green-50 rounded">{success}</div>
                    )}
                  </div>

                  {/* Card Ambil Label Titipan */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                    <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Ambil Label Titipan</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      *Menampilkan data terbaru untuk setiap kode
                    </p>

                    <div className="relative" ref={dropdownTitipanRef}>
                      <div className="flex items-center space-x-2 mb-2">
                        <input
                          type="text"
                          value={searchKodeTitipan}
                          onChange={(e) => handleInputChange(e, 'titipan')}
                          onFocus={() => {
                            setIsDropdownTitipanOpen(true);
                            if (isKeyboardEnabled) {
                              handleInputFocus('titipan', searchKodeTitipan);
                            }
                          }}
                          placeholder="Masukkan kode atau nama pengunjung..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        {isPc && isKeyboardEnabled && (
                          <button
                            type="button"
                            onClick={() => handleInputFocus('titipan', searchKodeTitipan)}
                            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                            title="Virtual Keyboard"
                          >
                            <FaKeyboard className="w-5 h-5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setShowScannerTitipan(true)}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                          title="Scan Barcode"
                        >
                          <FaQrcode className="w-5 h-5" />
                        </button>
                      </div>

                      {isDropdownTitipanOpen && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {filteredPengunjungTitipan.length > 0 ? (
                            filteredPengunjungTitipan.map((pengunjung) => (
                              <div
                                key={pengunjung.id}
                                onClick={() => handleSelectPengunjungTitipan(pengunjung)}
                                className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
                              >
                                <div className="font-medium">{pengunjung.nama}</div>
                                <div className="text-sm text-gray-500">
                                  Kode: {pengunjung.kode} | ID: {pengunjung.id}
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  Antrian: {pengunjung.antrian}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Dibuat: {new Date(pengunjung.createdAt).toLocaleTimeString('id-ID')}
                                </div>
                                <div className="text-xs text-blue-500 font-medium mt-1">
                                  ✓ Data Terbaru
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-3 text-gray-500">
                              {searchKodeTitipan ? "Tidak ditemukan data hari ini" : "Tidak ada data hari ini"}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {selectedPengunjungTitipan && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="mb-2">
                          <span className="font-semibold">Nama:</span>{" "}
                          {selectedPengunjungTitipan.nama}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Kode:</span>{" "}
                          {selectedPengunjungTitipan.kode}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">ID:</span>{" "}
                          {selectedPengunjungTitipan.id}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Antrian:</span>{" "}
                          {selectedPengunjungTitipan.antrian}
                        </div>
                        <div className="mb-3 p-2 bg-green-50 rounded">
                          <span className="font-semibold text-green-700">Status:</span>{" "}
                          <span className="text-green-600">Data Terbaru</span>
                        </div>
                        <button
                          onClick={handleAmbilLabelTitipan}
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Ambil Label Titipan
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Card Ambil Kartu Kunjungan */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                    <QrCode className="h-12 w-12 text-red-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Ambil Kartu Kunjungan + Label Titipan</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      *Menampilkan data terbaru untuk setiap kode
                    </p>

                    <div className="relative" ref={dropdownKartuRef}>
                      <div className="flex items-center space-x-2 mb-2">
                        <input
                          type="text"
                          value={searchKodeKartu}
                          onChange={(e) => handleInputChange(e, 'kartu')}
                          onFocus={() => {
                            setIsDropdownKartuOpen(true);
                            if (isKeyboardEnabled) {
                              handleInputFocus('kartu', searchKodeKartu);
                            }
                          }}
                          placeholder="Masukkan kode atau nama pengunjung..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        {isPc && isKeyboardEnabled && (
                          <button
                            type="button"
                            onClick={() => handleInputFocus('kartu', searchKodeKartu)}
                            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                            title="Virtual Keyboard"
                          >
                            <FaKeyboard className="w-5 h-5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setShowScannerKartu(true)}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                          title="Scan Barcode"
                        >
                          <FaQrcode className="w-5 h-5" />
                        </button>
                      </div>

                      {isDropdownKartuOpen && filteredPengunjungKartu.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {filteredPengunjungKartu.map((pengunjung) => (
                            <div
                              key={pengunjung.id}
                              onClick={() => handleSelectPengunjungKartu(pengunjung)}
                              className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
                            >
                              <div className="font-medium">{pengunjung.nama}</div>
                              <div className="text-sm text-gray-500">
                                Kode: {pengunjung.kode} | ID: {pengunjung.id}
                              </div>
                              {pengunjung.antrian && (
                                <div className="text-sm text-green-600 font-medium">
                                  Antrian: {pengunjung.antrian}
                                </div>
                              )}
                              <div className="text-xs text-gray-400">
                                Dibuat: {new Date(pengunjung.createdAt).toLocaleTimeString('id-ID')}
                              </div>
                              <div className="text-xs text-blue-500 font-medium mt-1">
                                ✓ Data Terbaru
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {isDropdownKartuOpen && searchKodeKartu && filteredPengunjungKartu.length === 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                          <div className="p-3 text-gray-500 text-center">
                            Tidak ada pengunjung yang sesuai untuk hari ini
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedPengunjungKartu && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="mb-2">
                          <span className="font-semibold">Nama:</span>{" "}
                          {selectedPengunjungKartu.nama}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Kode:</span>{" "}
                          {selectedPengunjungKartu.kode}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">ID:</span>{" "}
                          {selectedPengunjungKartu.id}
                        </div>
                        {selectedPengunjungKartu.antrian && (
                          <div className="mb-2">
                            <span className="font-semibold">Antrian:</span>{" "}
                            {selectedPengunjungKartu.antrian}
                          </div>
                        )}
                        <div className="mb-3 p-2 bg-green-50 rounded">
                          <span className="font-semibold text-green-700">Status:</span>{" "}
                          <span className="text-green-600">Data Terbaru</span>
                        </div>
                        
                        {/* Tombol Ambil Kartu */}
                        <button
                          onClick={handleAmbilKartuKunjungan}
                          disabled={selectedPengunjungKartu.kartu_diambil}
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <FaPrint className="mr-2" />
                          {selectedPengunjungKartu.kartu_diambil ? 'Kartu Sudah Diambil' : 'Ambil Kartu Kunjungan'}
                        </button>

                        {selectedPengunjungKartu.kartu_diambil && (
                          <p className="text-red-600 text-sm mt-2 text-center">
                            Kartu kunjungan untuk pengunjung ini sudah diambil sebelumnya.
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* ... (sisa kode untuk card lainnya tetap sama) */}
                  <Link
                    to="/create-pengunjung"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Tambah Pengunjung
                    </h2>
                    <p className="text-gray-600">Registrasi pengunjung baru</p>
                  </Link>

                  <Link
                    to="/wargabinaan-form"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <PlusIcon className="h-12 w-12 text-purple-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Tambah Warga Binaan
                    </h2>
                    <p className="text-gray-600">
                      Tambahkan data warga binaan baru
                    </p>
                  </Link>

                  <Link
                    to="/wbp-list"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 block relative z-10"
                    style={{ position: 'relative', zIndex: 10 }}
                  >
                    <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Daftar Warga Binaan
                    </h2>
                    <p className="text-gray-600">
                      Lihat dan kelola data warga binaan
                    </p>
                  </Link>

                  <Link
                    to="/pengunjung"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <UserIcon className="h-12 w-12 text-green-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Daftar Pengunjung
                    </h2>
                    <p className="text-gray-600">
                      Kelola data pengunjung yang tercatat
                    </p>
                  </Link>
                  
                  <Link
                    to="/pengunjung/data"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <UserIcon className="h-12 w-12 text-green-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Data Input
                    </h2>
                    <p className="text-gray-600">
                      Kelola data pengunjung yang akan tercatat pada sistem kunjungan
                    </p>
                  </Link>

                  <Link
                    to="/report"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <ScrollText className="h-12 w-12 text-orange-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Laporan
                    </h2>
                    <p className="text-gray-600">Buat laporan Harian Kunjungan</p>
                  </Link>
                </div>
              </main>

              {/* Footer */}
              <footer className="bg-blue-600 text-white mt-12 py-4">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-sm">
                    © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
                    reserved
                  </p>
                </div>
              </footer>
            </>
          )}

          {/* Render untuk role p2u dan user */}
          {(authUser.user?.role === "p2u" || authUser.user?.role === "user") && (
            <>
              <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link
                    to="/create-pengunjung"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Tambah Pengunjung
                    </h2>
                    <p className="text-gray-600">Registrasi pengunjung baru</p>
                  </Link>
                  <Link
                    to="/pengunjung/data/create"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <PlusIcon className="h-12 w-12 text-orange-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Tambah Data
                    </h2>
                    <p className="text-gray-600">Registrasi pengunjung baru</p>
                  </Link>
                  <Link
                    to="/pengunjung"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <UserIcon className="h-12 w-12 text-green-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      Daftar Pengunjung
                    </h2>
                    <p className="text-gray-600">
                      Kelola data pengunjung yang tercatat
                    </p>
                  </Link>
                </div>
              </main>
              <footer className="bg-blue-600 text-white mt-12 py-4">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-sm">
                    © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
                    reserved
                  </p>
                </div>
              </footer>
            </>
          )}

          {/* Print Preview Modal */}
          <PrintPreviewModal 
            isOpen={showPrintPreview}
            onClose={handleClosePrintPreview}
            printData={printData}
          />

          {/* Scanner Modals */}
          <ScannerModal 
            isOpen={showScannerAntrian}
            onClose={() => setShowScannerAntrian(false)}
            onScan={handleScanAntrian}
            title="Scan Barcode untuk Antrian"
          />

          <ScannerModal 
            isOpen={showScannerTitipan}
            onClose={() => setShowScannerTitipan(false)}
            onScan={handleScanTitipan}
            title="Scan Barcode untuk Label Titipan"
          />

          <ScannerModal 
            isOpen={showScannerKartu}
            onClose={() => setShowScannerKartu(false)}
            onScan={handleScanKartu}
            title="Scan Barcode untuk Kartu Kunjungan"
          />

          {/* Floating Keyboard Toggle Button */}
          <FloatingKeyboardToggleHome 
            isKeyboardEnabled={isKeyboardEnabled}
            onToggleKeyboard={toggleKeyboard}
          />

          {/* Virtual Keyboard - Hanya muncul di PC dan jika diaktifkan */}
          {showVirtualKeyboard && isKeyboardEnabled && (
            <VirtualKeyboardHome 
              onKeyPress={handleVirtualKeyPress}
              onClose={() => setShowVirtualKeyboard(false)}
              value={keyboardValue}
              activeInput={activeInput}
              onInputChange={handleInputUpdate}
            />
          )}
        </div>
      )}
    </div>
  );
}