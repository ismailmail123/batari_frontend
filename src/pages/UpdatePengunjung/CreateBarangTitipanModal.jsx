// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useDataStore from "../../store/useDataStore";
// import { FaBoxOpen, FaUser, FaPlus, FaInfoCircle, FaTimes, FaKeyboard, FaCheck, FaSearch } from "react-icons/fa";

// // Komponen Virtual Keyboard untuk CreateBarangTitipanModal
// const VirtualKeyboardBarang = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
//   const [isShift, setIsShift] = useState(false);
//   const [isSymbol, setIsSymbol] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
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

//   // Keyboard khusus untuk jumlah (angka) dengan tombol 00 dan 000
//   const numberRows = [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '9'],
//     ['00', '0', '000', 'backspace'],
//   ];

//   const currentRows = activeInput === 'jumlah' ? numberRows : (isSymbol ? symbolRows : alphaRows);

//   // Handle click outside untuk menutup keyboard
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (keyboardRef.current && !keyboardRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('touchstart', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('touchstart', handleClickOutside);
//     };
//   }, [onClose]);

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
//     e.stopPropagation();
//     handleDragStart(e.clientX, e.clientY);
//   };

//   const handleTouchStart = (e) => {
//     e.stopPropagation();
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
//   }, []);

//   const handleKeyClick = (key) => {
//     if (key === 'backspace') {
//       onKeyPress('backspace');
//       if (onInputChange) onInputChange('backspace');
//     } else if (key === '00' || key === '000') {
//       // Handle tombol 00 dan 000 khusus untuk angka
//       onKeyPress(key);
//       if (onInputChange) onInputChange(key);
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
//       case 'keterangan':
//         return 'Input Keterangan';
//       case 'jumlah':
//         return 'Input Jumlah - Gunakan 00/000 untuk ratusan/ribuan';
//       default:
//         return 'Virtual Keyboard';
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none">
//       <div 
//         ref={keyboardRef}
//         className="bg-transparent rounded-2xl shadow-2xl w-full max-w-2xl pointer-events-auto border border-white border-opacity-20"
//         style={{
//           position: 'fixed',
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           cursor: isDragging ? 'grabbing' : 'grab',
//           touchAction: 'none',
//           zIndex: 1000
//         }}
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
//                   Drag untuk memindahkan • Klik tombol 00/000 untuk input cepat
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
//               {row.map((key) => {
//                 // Tentukan lebar khusus untuk tombol 00 dan 000
//                 const isDoubleZero = key === '00';
//                 const isTripleZero = key === '000';
//                 const isSpecialZero = isDoubleZero || isTripleZero;
//                 const isBackspace = key === 'backspace';
                
//                 return (
//                   <button
//                     key={key}
//                     onClick={() => handleKeyClick(key)}
//                     className={`${isSpecialZero ? 'max-w-[90px]' : isBackspace ? 'max-w-[90px]' : 'max-w-[60px]'} h-14 bg-white bg-opacity-95 rounded-xl transition-all duration-300 font-medium text-gray-700 touch-friendly relative overflow-hidden group`}
//                     style={{ 
//                       minWidth: isSpecialZero ? '70px' : isBackspace ? '70px' : '44px',
//                       minHeight: '44px',
//                       touchAction: 'manipulation'
//                     }}
//                   >
//                     {/* Base Border - Lebih tebal */}
//                     <div className={`absolute inset-0 rounded-xl border-[3px] shadow-sm ${
//                       isSpecialZero 
//                         ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500' 
//                         : isBackspace
//                         ? 'bg-gradient-to-br from-red-400 to-red-600 border-red-500'
//                         : 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-500'
//                     }`}></div>
                    
//                     {/* Neon Border Effect */}
//                     <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-0 ${
//                       isSpecialZero
//                         ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
//                         : isBackspace
//                         ? 'bg-gradient-to-r from-red-400 via-red-500 to-red-600'
//                         : 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'
//                     }`}></div>
                    
//                     {/* Content Area */}
//                     <div className="absolute inset-[3px] rounded-lg bg-white bg-opacity-95 flex items-center justify-center z-10 group-hover:bg-opacity-100 transition-all duration-300">
//                       {key === 'backspace' ? '⌫' : 
//                        key === '00' ? '00' :
//                        key === '000' ? '000' :
//                        (isShift && !isSymbol && activeInput !== 'jumlah' ? key.toUpperCase() : key)}
//                     </div>
                    
//                     {/* Hover Glow */}
//                     <div className={`absolute inset-0 rounded-xl shadow-lg transition-all duration-300 ${
//                       isSpecialZero
//                         ? 'shadow-green-500/0 group-hover:shadow-green-500/40 group-hover:shadow-xl'
//                         : isBackspace
//                         ? 'shadow-red-500/0 group-hover:shadow-red-500/40 group-hover:shadow-xl'
//                         : 'shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl'
//                     }`}></div>
//                   </button>
//                 );
//               })}
//             </div>
//           ))}

//           {/* Control Row untuk non-number input */}
//           {activeInput !== 'jumlah' && (
//             <div className="flex justify-center space-x-1 mt-4">
//               <button
//                 onClick={() => handleSpecialKey('shift')}
//                 className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
//                   isShift 
//                     ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-2 border-blue-600' 
//                     : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
//                 }`}
//                 style={{ 
//                   minHeight: '44px',
//                   touchAction: 'manipulation'
//                 }}
//               >
//                 ⇧ SHIFT
//               </button>

//               <button
//                 onClick={() => handleSpecialKey('symbol')}
//                 className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly ${
//                   isSymbol 
//                     ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-2 border-purple-600' 
//                     : 'bg-gray-100 bg-opacity-80 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
//                 }`}
//                 style={{ 
//                   minHeight: '44px',
//                   touchAction: 'manipulation'
//                 }}
//               >
//                 {isSymbol ? 'ABC' : '123'}
//               </button>

//               <button
//                 onClick={() => handleSpecialKey('space')}
//                 className="flex-1 max-w-[200px] h-14 bg-gray-100 bg-opacity-80 border-2 border-gray-200 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all touch-friendly text-gray-600 font-medium"
//                 style={{ 
//                   minHeight: '44px',
//                   touchAction: 'manipulation'
//                 }}
//               >
//                 SPACE
//               </button>

//               <button
//                 onClick={() => handleSpecialKey('backspace')}
//                 className="flex-1 max-w-[120px] h-14 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-all touch-friendly font-medium shadow-lg shadow-red-200 border-2 border-red-600"
//                 style={{ 
//                   minHeight: '44px',
//                   touchAction: 'manipulation'
//                 }}
//               >
//                 ⌫ DELETE
//               </button>
//             </div>
//           )}

//           {/* Row khusus untuk tombol cepat jumlah */}
//           {activeInput === 'jumlah' && (
//             <div className="flex justify-center space-x-2 mt-3">
//               <button
//                 onClick={() => handleKeyClick('00')}
//                 className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
//                 style={{ 
//                   minHeight: '44px',
//                   touchAction: 'manipulation'
//                 }}
//               >
//                 +00 (Ratusan)
//               </button>
              
//               <button
//                 onClick={() => handleKeyClick('000')}
//                 className="flex-1 max-w-[140px] h-12 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all touch-friendly font-medium border-2 border-green-700 shadow-lg shadow-green-200"
//                 style={{ 
//                   minHeight: '44px',
//                   touchAction: 'manipulation'
//                 }}
//               >
//                 +000 (Ribuan)
//               </button>
//             </div>
//           )}

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

// const CreateBarangTitipanModal = ({ isOpen, onClose, pengunjungs }) => {
//   const { createTitipan, fetchWbpList, wbpList } = useDataStore();
//   const [formData, setFormData] = useState({
//     pengunjung_id: "",
//     wbp_id: "", // Tambahkan field WBP
//     jenis_barang: "",
//     jumlah: "",
//     keterangan: "",
//   });
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // State untuk virtual keyboard
//   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [keyboardValue, setKeyboardValue] = useState('');

//   // State untuk pencarian WBP
//   const [searchWbp, setSearchWbp] = useState('');
//   const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
//   const [loadingWbp, setLoadingWbp] = useState(false);
//   const [selectedWbp, setSelectedWbp] = useState(null);
//   const dropdownRef = useRef(null);

//   // Reset form ketika modal dibuka/ditutup
//   useEffect(() => {
//     if (isOpen && pengunjungs) {
//       setFormData({
//         pengunjung_id: pengunjungs.id || "",
//         wbp_id: "", // Reset WBP
//         jenis_barang: "",
//         jumlah: "",
//         keterangan: "",
//       });
//       setError("");
//       setShowVirtualKeyboard(false);
//       setSelectedWbp(null);
//       setSearchWbp('');
//     }
//   }, [isOpen, pengunjungs]);

//   // Fetch data WBP saat modal dibuka
//   useEffect(() => {
//     const loadWbpData = async () => {
//       if (isOpen) {
//         setLoadingWbp(true);
//         try {
//           await fetchWbpList();
//         } catch (error) {
//           console.error('Error fetching WBP data:', error);
//         } finally {
//           setLoadingWbp(false);
//         }
//       }
//     };
    
//     loadWbpData();
//   }, [isOpen, fetchWbpList]);

//   // Handle click outside untuk menutup dropdown WBP
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsWbpDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Filter WBP berdasarkan pencarian
//   const filteredWbp = (() => {
//     if (!wbpList) return [];
    
//     const dataArray = Array.isArray(wbpList) 
//       ? wbpList 
//       : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
//     return dataArray.filter((wbp) => {
//       const searchTerm = searchWbp?.toLowerCase() || '';
//       const namaMatch = wbp.nama?.toLowerCase().includes(searchTerm);
//       const idMatch = wbp.id?.toString().includes(searchTerm);
      
//       return namaMatch || idMatch;
//     });
//   })();

//   // Fungsi untuk memilih WBP
//   const selectWbp = (wbp) => {
//     setSelectedWbp(wbp);
//     setFormData(prev => ({ ...prev, wbp_id: wbp.id }));
//     setSearchWbp(wbp.nama);
//     setIsWbpDropdownOpen(false);
//     toast.success(`WBP dipilih: ${wbp.nama}`);
//   };

//   // Fungsi untuk menghapus pilihan WBP
//   const clearWbpSelection = () => {
//     setSelectedWbp(null);
//     setFormData(prev => ({ ...prev, wbp_id: "" }));
//     setSearchWbp('');
//   };

//   // Handler untuk virtual keyboard
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
//     } else if (key === '00' || key === '000') {
//       // Handle tombol 00 dan 000 - tambahkan angka nol sesuai kebutuhan
//       setKeyboardValue(prev => prev + key);
//       handleInputUpdate(key);
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
//     } else if (key === '00' || key === '000') {
//       // Untuk tombol 00 dan 000, tambahkan angka nol sesuai kebutuhan
//       newValue = keyboardValue + key;
//     } else {
//       newValue = keyboardValue + key;
//     }

//     // Update form data sesuai dengan input yang aktif
//     switch (activeInput) {
//       case 'keterangan':
//         setFormData(prev => ({ ...prev, keterangan: newValue }));
//         break;
//       case 'jumlah':
//         // Untuk jumlah, hanya terima angka dan tombol 00/000
//         if (key === 'backspace') {
//           setFormData(prev => ({ ...prev, jumlah: newValue }));
//         } else if (key === 'clear') {
//           setFormData(prev => ({ ...prev, jumlah: '' }));
//         } else if (/[\d.]/.test(key) || key === '00' || key === '000') {
//           setFormData(prev => ({ ...prev, jumlah: newValue }));
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   // Handler untuk membuka virtual keyboard dengan input tertentu
//   const handleInputFocus = (inputType, currentValue = '') => {
//     setActiveInput(inputType);
//     setKeyboardValue(currentValue);
//     setShowVirtualKeyboard(true);
//   };

//   // Handle perubahan input manual (tanpa virtual keyboard)
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle submit form - untuk tombol "Tambah Barang Titipan"
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validasi form
//     if (!formData.pengunjung_id || !formData.jenis_barang || !formData.jumlah) {
//       setError("Pastikan pengunjung, jenis barang, dan jumlah diisi.");
//       setIsSubmitting(false);
//       return;
//     }

//     // Validasi jumlah harus lebih dari 0
//     const jumlahNumber = parseInt(formData.jumlah);
//     if (isNaN(jumlahNumber) || jumlahNumber <= 0) {
//       setError("Jumlah harus lebih dari 0.");
//       setIsSubmitting(false);
//       return;
//     }

//     // Reset error
//     setError("");

//     // Panggil fungsi createTitipan dari Zustand
//     try {
//       await createTitipan(formData, setError);
//       toast.success("Barang titipan berhasil dibuat!");

//       // Reset form setelah berhasil
//       setFormData({
//         pengunjung_id: pengunjungs?.id || "",
//         wbp_id: "",
//         jenis_barang: "",
//         jumlah: "",
//         keterangan: "",
//       });

//       // Reset WBP selection
//       setSelectedWbp(null);
//       setSearchWbp('');

//       // Tutup keyboard virtual
//       setShowVirtualKeyboard(false);
      
//       // TIDAK menutup modal di sini, form tetap terbuka untuk input berikutnya
//     } catch (err) {
//       console.error("Error saat membuat barang titipan:", err);
//       toast.error("Gagal membuat barang titipan. Silakan coba lagi.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle tombol Selesai - untuk menutup modal
//   const handleSelesai = () => {
//     setFormData({
//       pengunjung_id: "",
//       wbp_id: "",
//       jenis_barang: "",
//       jumlah: "",
//       keterangan: "",
//     });
//     setError("");
//     setShowVirtualKeyboard(false);
//     setSelectedWbp(null);
//     setSearchWbp('');
//     onClose();
//   };

//   // Handle close modal (untuk tombol X)
//   const handleClose = () => {
//     setFormData({
//       pengunjung_id: "",
//       wbp_id: "",
//       jenis_barang: "",
//       jumlah: "",
//       keterangan: "",
//     });
//     setError("");
//     setShowVirtualKeyboard(false);
//     setSelectedWbp(null);
//     setSearchWbp('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
//         {/* Header */}
//         <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <FaBoxOpen className="w-8 h-8" />
//               <div>
//                 <h2 className="text-2xl font-bold">Tambah Barang Titipan</h2>
//                 <p className="text-sm opacity-90 mt-1">
//                   Isi formulir di bawah ini untuk menambahkan barang titipan baru.
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={handleClose}
//               className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
//             >
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div className="p-6 max-h-[80vh] overflow-y-auto">
//           {error && (
//             <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg">
//               <div className="flex items-center">
//                 <FaInfoCircle className="inline-block mr-2 flex-shrink-0" />
//                 <span>{error}</span>
//               </div>
//             </div>
//           )}

//           {/* Informasi Pengunjung */}
//           {pengunjungs && (
//             <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
//               <div className="flex items-center space-x-2 text-blue-700 mb-2">
//                 <FaUser className="w-4 h-4" />
//                 <span className="font-semibold">Informasi Pengunjung:</span>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
//                 <div><strong>Nama:</strong> {pengunjungs.nama}</div>
//                 <div><strong>NIK:</strong> {pengunjungs.nik}</div>
//                 <div><strong>Kode:</strong> {pengunjungs.kode}</div>
//                 <div><strong>HP:</strong> {pengunjungs.hp}</div>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Pencarian WBP (Opsional) */}
//             <div className="relative" ref={dropdownRef}>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaUser className="inline-block mr-2" /> 
//                 Pilih Warga Binaan (Opsional)
//                 <span className="text-gray-500 text-xs ml-1">- Jika barang untuk WBP tertentu</span>
//               </label>
              
//               {selectedWbp && (
//                 <div className="mb-3 p-3 bg-green-50 border-l-4 border-green-500 rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="text-green-700 font-medium">
//                         ✓ WBP Terpilih: <strong>{selectedWbp.nama}</strong>
//                       </p>
//                       <p className="text-green-600 text-sm">ID: {selectedWbp.id}</p>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={clearWbpSelection}
//                       className="text-red-600 hover:text-red-800 text-sm p-1 rounded-full hover:bg-red-50"
//                     >
//                       <FaTimes />
//                     </button>
//                   </div>
//                 </div>
//               )}

//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchWbp}
//                   onChange={(e) => {
//                     setSearchWbp(e.target.value);
//                     setIsWbpDropdownOpen(true);
//                   }}
//                   onFocus={() => setIsWbpDropdownOpen(true)}
//                   placeholder="Ketik nama atau ID WBP (opsional)..."
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//                 <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>

//               {loadingWbp && (
//                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
//                     Memuat data WBP...
//                   </div>
//                 </div>
//               )}
              
//               {isWbpDropdownOpen && filteredWbp.length > 0 && (
//                 <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                   {filteredWbp.map((wbp) => (
//                     <div
//                       key={wbp.id}
//                       onClick={() => selectWbp(wbp)}
//                       className="p-4 hover:bg-blue-50 cursor-pointer flex items-center border-b border-gray-100"
//                     >
//                       <div className="flex-1">
//                         <div className="font-medium text-gray-800">{wbp.nama}</div>
//                         <div className="text-sm text-gray-500">ID: {wbp.id}</div>
//                         {wbp.nomor_register && (
//                           <div className="text-sm text-gray-500">Register: {wbp.nomor_register}</div>
//                         )}
//                       </div>
//                       <FaUser className="ml-2 text-gray-400" />
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {isWbpDropdownOpen && searchWbp && filteredWbp.length === 0 && !loadingWbp && (
//                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
//                   <div className="text-center text-gray-500">
//                     Tidak ditemukan WBP dengan nama "{searchWbp}"
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Pengunjung (Hidden jika sudah ada data pengunjungs) */}
//             {!pengunjungs && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <FaUser className="inline-block mr-2" />
//                   Pilih Pengunjung
//                 </label>
//                 <select
//                   name="pengunjung_id"
//                   value={formData.pengunjung_id}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                   required
//                 >
//                   <option value="">Pilih Pengunjung</option>
//                   <option value={pengunjungs?.id}>
//                     {pengunjungs?.nama} (NIK: {pengunjungs?.nik})
//                   </option>
//                 </select>
//               </div>
//             )}

//             {/* Jenis Barang */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaBoxOpen className="inline-block mr-2" />
//                 Jenis Barang *
//               </label>
//               <select
//                 name="jenis_barang"
//                 value={formData.jenis_barang}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 required
//               >
//                 <option value="">Pilih Jenis Barang</option>
//                 <option value="Makanan">Makanan</option>
//                 <option value="Pakaian">Pakaian</option>
//                 <option value="Obat">Obat</option>
//                 <option value="Alat mandi">Alat mandi</option>
//                 <option value="Uang">Uang</option>
//                 <option value="Dokumen">Dokumen</option>
//                 <option value="Elektronik">Elektronik</option>
//                 <option value="Lainnya">Lainnya</option>
//               </select>
//             </div>

//             {/* Jumlah dengan tombol keyboard virtual */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaBoxOpen className="inline-block mr-2" />
//                 Jumlah *
//               </label>
//               <div className="flex space-x-2">
//                 <input
//                   type="number"
//                   name="jumlah"
//                   value={formData.jumlah}
//                   onChange={handleInputChange}
//                   onFocus={() => handleInputFocus('jumlah', formData.jumlah)}
//                   className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                   placeholder="Masukkan Jumlah Barang"
//                   min="1"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleInputFocus('jumlah', formData.jumlah)}
//                   className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                 >
//                   <FaKeyboard className="w-5 h-5" />
//                 </button>
//               </div>
//               <p className="text-xs text-gray-500 mt-1">
//                 Jumlah harus lebih dari 0 • Gunakan keyboard virtual untuk tombol 00/000
//               </p>
//             </div>

//             {/* Keterangan dengan tombol keyboard virtual */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <FaInfoCircle className="inline-block mr-2" />
//                 Keterangan (Opsional)
//               </label>
//               <div className="flex space-x-2">
//                 <textarea
//                   name="keterangan"
//                   value={formData.keterangan}
//                   onChange={handleInputChange}
//                   onFocus={() => handleInputFocus('keterangan', formData.keterangan)}
//                   className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                   placeholder="Masukkan keterangan tambahan tentang barang titipan..."
//                   rows="3"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleInputFocus('keterangan', formData.keterangan)}
//                   className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center self-start"
//                 >
//                   <FaKeyboard className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
//               <button
//                 type="button"
//                 onClick={handleSelesai}
//                 disabled={isSubmitting}
//                 className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 <FaCheck className="inline-block mr-2" />
//                 Selesai
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Memproses...
//                   </>
//                 ) : (
//                   <>
//                     <FaPlus className="inline-block mr-2" />
//                     Tambah Barang Titipan
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Virtual Keyboard */}
//       {showVirtualKeyboard && (
//         <VirtualKeyboardBarang 
//           onKeyPress={handleVirtualKeyPress}
//           onClose={() => setShowVirtualKeyboard(false)}
//           value={keyboardValue}
//           activeInput={activeInput}
//           onInputChange={handleInputUpdate}
//         />
//       )}
//     </div>
//   );
// };

// export default CreateBarangTitipanModal;

import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDataStore from "../../store/useDataStore";
import { FaBoxOpen, FaUser, FaPlus, FaInfoCircle, FaTimes, FaKeyboard, FaCheck, FaSearch, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

// Komponen VoiceToTextButton yang reusable
const VoiceToTextButton = ({ 
  onTranscript, 
  onStart, 
  onStop, 
  isListening,
  className = "" 
}) => {
  return (
    <button
      type="button"
      onClick={isListening ? onStop : onStart}
      className={`p-2 rounded-full transition-all duration-300 ${
        isListening 
          ? 'bg-red-500 text-white animate-pulse' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } ${className}`}
      title={isListening ? "Menghentikan rekaman" : "Mulai rekaman suara"}
    >
      {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
    </button>
  );
};

// Custom hook untuk speech recognition
const useSpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Cek apakah browser mendukung Web Speech API
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setIsSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'id-ID'; // Bahasa Indonesia

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setTranscript('');
      };

      recognitionRef.current.onresult = (event) => {
        const currentTranscript = event.results[0][0].transcript;
        setTranscript(currentTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        
        if (event.error === 'not-allowed') {
          toast.error('Izin microphone tidak diberikan. Silakan izinkan akses microphone.');
        } else if (event.error === 'audio-capture') {
          toast.error('Tidak dapat mengakses microphone. Pastikan microphone terhubung.');
        } else {
          toast.error(`Error speech recognition: ${event.error}`);
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setIsSupported(false);
      console.warn('Web Speech API tidak didukung di browser ini');
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (!isSupported) {
      toast.error('Browser tidak mendukung fitur voice-to-text');
      return;
    }

    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        toast.success("Mendengarkan... Silakan berbicara sekarang");
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        toast.error('Gagal memulai speech recognition');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Reset transcript
  const resetTranscript = () => {
    setTranscript('');
  };

  return {
    isListening,
    transcript,
    isSupported,
    startListening,
    stopListening,
    resetTranscript
  };
};

// Komponen Virtual Keyboard untuk CreateBarangTitipanModal
const VirtualKeyboardBarang = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
  const [isShift, setIsShift] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
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

  // Keyboard khusus untuk jumlah (angka) dengan tombol 00 dan 000
  const numberRows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['00', '0', '000', 'backspace'],
  ];

  const currentRows = activeInput === 'jumlah' ? numberRows : (isSymbol ? symbolRows : alphaRows);

  // Handle click outside untuk menutup keyboard
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (keyboardRef.current && !keyboardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClose]);

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
    e.stopPropagation();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
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
  }, []);

  const handleKeyClick = (key) => {
    if (key === 'backspace') {
      onKeyPress('backspace');
      if (onInputChange) onInputChange('backspace');
    } else if (key === '00' || key === '000') {
      // Handle tombol 00 dan 000 khusus untuk angka
      onKeyPress(key);
      if (onInputChange) onInputChange(key);
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
      case 'wbp':
        return 'Cari Warga Binaan';
      case 'keterangan':
        return 'Input Keterangan';
      case 'jumlah':
        return 'Input Jumlah - Gunakan 00/000 untuk ratusan/ribuan';
      default:
        return 'Virtual Keyboard';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4 pointer-events-none">
      <div 
        ref={keyboardRef}
        className="bg-transparent rounded-2xl shadow-2xl w-full max-w-2xl pointer-events-auto border border-white border-opacity-20"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none',
          zIndex: 1000
        }}
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
                  Drag untuk memindahkan • Klik tombol 00/000 untuk input cepat
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
              {row.map((key) => {
                // Tentukan lebar khusus untuk tombol 00 dan 000
                const isDoubleZero = key === '00';
                const isTripleZero = key === '000';
                const isSpecialZero = isDoubleZero || isTripleZero;
                const isBackspace = key === 'backspace';
                
                return (
                  <button
                    key={key}
                    onClick={() => handleKeyClick(key)}
                    className={`${isSpecialZero ? 'max-w-[90px]' : isBackspace ? 'max-w-[90px]' : 'max-w-[60px]'} h-14 bg-white bg-opacity-95 rounded-xl transition-all duration-300 font-medium text-gray-700 touch-friendly relative overflow-hidden group`}
                    style={{ 
                      minWidth: isSpecialZero ? '70px' : isBackspace ? '70px' : '44px',
                      minHeight: '44px',
                      touchAction: 'manipulation'
                    }}
                  >
                    {/* Base Border - Lebih tebal */}
                    <div className={`absolute inset-0 rounded-xl border-[3px] shadow-sm ${
                      isSpecialZero 
                        ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500' 
                        : isBackspace
                        ? 'bg-gradient-to-br from-red-400 to-red-600 border-red-500'
                        : 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-500'
                    }`}></div>
                    
                    {/* Neon Border Effect */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-0 ${
                      isSpecialZero
                        ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
                        : isBackspace
                        ? 'bg-gradient-to-r from-red-400 via-red-500 to-red-600'
                        : 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'
                    }`}></div>
                    
                    {/* Content Area */}
                    <div className="absolute inset-[3px] rounded-lg bg-white bg-opacity-95 flex items-center justify-center z-10 group-hover:bg-opacity-100 transition-all duration-300">
                      {key === 'backspace' ? '⌫' : 
                       key === '00' ? '00' :
                       key === '000' ? '000' :
                       (isShift && !isSymbol && activeInput !== 'jumlah' ? key.toUpperCase() : key)}
                    </div>
                    
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-xl shadow-lg transition-all duration-300 ${
                      isSpecialZero
                        ? 'shadow-green-500/0 group-hover:shadow-green-500/40 group-hover:shadow-xl'
                        : isBackspace
                        ? 'shadow-red-500/0 group-hover:shadow-red-500/40 group-hover:shadow-xl'
                        : 'shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl'
                    }`}></div>
                  </button>
                );
              })}
            </div>
          ))}

          {/* Control Row untuk non-number input */}
          {activeInput !== 'jumlah' && (
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
          )}

          {/* Row khusus untuk tombol cepat jumlah */}
          {activeInput === 'jumlah' && (
            <div className="flex justify-center space-x-2 mt-3">
              <button
                onClick={() => handleKeyClick('00')}
                className="flex-1 max-w-[140px] h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all touch-friendly font-medium border-2 border-green-600 shadow-lg shadow-green-200"
                style={{ 
                  minHeight: '44px',
                  touchAction: 'manipulation'
                }}
              >
                +00 (Ratusan)
              </button>
              
              <button
                onClick={() => handleKeyClick('000')}
                className="flex-1 max-w-[140px] h-12 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all touch-friendly font-medium border-2 border-green-700 shadow-lg shadow-green-200"
                style={{ 
                  minHeight: '44px',
                  touchAction: 'manipulation'
                }}
              >
                +000 (Ribuan)
              </button>
            </div>
          )}

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

const CreateBarangTitipanModal = ({ isOpen, onClose, pengunjungs }) => {
  const { createTitipan, fetchWbpList, wbpList } = useDataStore();
  const [formData, setFormData] = useState({
    pengunjung_id: "",
    wbp_id: "", // Tambahkan field WBP
    jenis_barang: "",
    jumlah: "",
    keterangan: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk virtual keyboard
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');

  // State untuk pencarian WBP
  const [searchWbp, setSearchWbp] = useState('');
  const [isWbpDropdownOpen, setIsWbpDropdownOpen] = useState(false);
  const [loadingWbp, setLoadingWbp] = useState(false);
  const [selectedWbp, setSelectedWbp] = useState(null);
  const dropdownRef = useRef(null);

  // Speech to text hook
  const {
    isListening,
    transcript,
    isSupported,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechToText();

  // State untuk melacak input mana yang sedang aktif untuk voice
  const [activeVoiceInput, setActiveVoiceInput] = useState(null);

  // Effect untuk menangani transcript ketika berubah
  useEffect(() => {
    if (transcript && activeVoiceInput) {
      handleVoiceInput(activeVoiceInput, transcript);
      resetTranscript();
    }
  }, [transcript, activeVoiceInput]);

  // Fungsi untuk menangani input dari voice
  const handleVoiceInput = (inputType, voiceText) => {
    switch (inputType) {
      case 'wbp':
        setSearchWbp(voiceText);
        if (voiceText.length > 0) {
          setIsWbpDropdownOpen(true);
        }
        break;
      case 'keterangan':
        setFormData(prev => ({ ...prev, keterangan: voiceText }));
        break;
      case 'jumlah':
        // Hanya ambil angka dari transcript untuk jumlah
        const jumlahNumbers = voiceText.replace(/\D/g, '');
        setFormData(prev => ({ ...prev, jumlah: jumlahNumbers }));
        break;
      default:
        break;
    }
    
    toast.success(`Teks berhasil diinput: "${voiceText}"`);
  };

  // Fungsi untuk memulai listening untuk input tertentu
  const startVoiceInput = (inputType) => {
    setActiveVoiceInput(inputType);
    startListening();
  };

  // Fungsi untuk menghentikan listening
  const stopVoiceInput = () => {
    stopListening();
    setActiveVoiceInput(null);
  };

  // Reset form ketika modal dibuka/ditutup
  useEffect(() => {
    if (isOpen && pengunjungs) {
      setFormData({
        pengunjung_id: pengunjungs.id || "",
        wbp_id: "", // Reset WBP
        jenis_barang: "",
        jumlah: "",
        keterangan: "",
      });
      setError("");
      setShowVirtualKeyboard(false);
      setSelectedWbp(null);
      setSearchWbp('');
      stopVoiceInput();
      resetTranscript();
    }
  }, [isOpen, pengunjungs]);

  // Fetch data WBP saat modal dibuka
  useEffect(() => {
    const loadWbpData = async () => {
      if (isOpen) {
        setLoadingWbp(true);
        try {
          await fetchWbpList();
        } catch (error) {
          console.error('Error fetching WBP data:', error);
        } finally {
          setLoadingWbp(false);
        }
      }
    };
    
    loadWbpData();
  }, [isOpen, fetchWbpList]);

  // Handle click outside untuk menutup dropdown WBP
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsWbpDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter WBP berdasarkan pencarian
  const filteredWbp = (() => {
    if (!wbpList) return [];
    
    const dataArray = Array.isArray(wbpList) 
      ? wbpList 
      : (wbpList && typeof wbpList === 'object' ? [wbpList] : []);
    
    return dataArray.filter((wbp) => {
      const searchTerm = searchWbp?.toLowerCase() || '';
      const namaMatch = wbp.nama?.toLowerCase().includes(searchTerm);
      const idMatch = wbp.id?.toString().includes(searchTerm);
      
      return namaMatch || idMatch;
    });
  })();

  // Fungsi untuk memilih WBP
  const selectWbp = (wbp) => {
    setSelectedWbp(wbp);
    setFormData(prev => ({ ...prev, wbp_id: wbp.id }));
    setSearchWbp(wbp.nama);
    setIsWbpDropdownOpen(false);
    toast.success(`WBP dipilih: ${wbp.nama}`);
  };

  // Fungsi untuk menghapus pilihan WBP
  const clearWbpSelection = () => {
    setSelectedWbp(null);
    setFormData(prev => ({ ...prev, wbp_id: "" }));
    setSearchWbp('');
  };

  // Handler untuk virtual keyboard
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
    } else if (key === '00' || key === '000') {
      // Handle tombol 00 dan 000 - tambahkan angka nol sesuai kebutuhan
      setKeyboardValue(prev => prev + key);
      handleInputUpdate(key);
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
    } else if (key === '00' || key === '000') {
      // Untuk tombol 00 dan 000, tambahkan angka nol sesuai kebutuhan
      newValue = keyboardValue + key;
    } else {
      newValue = keyboardValue + key;
    }

    // Update form data sesuai dengan input yang aktif
    switch (activeInput) {
      case 'wbp':
        setSearchWbp(newValue);
        if (newValue.length > 0) {
          setIsWbpDropdownOpen(true);
        }
        break;
      case 'keterangan':
        setFormData(prev => ({ ...prev, keterangan: newValue }));
        break;
      case 'jumlah':
        // Untuk jumlah, hanya terima angka dan tombol 00/000
        if (key === 'backspace') {
          setFormData(prev => ({ ...prev, jumlah: newValue }));
        } else if (key === 'clear') {
          setFormData(prev => ({ ...prev, jumlah: '' }));
        } else if (/[\d.]/.test(key) || key === '00' || key === '000') {
          setFormData(prev => ({ ...prev, jumlah: newValue }));
        }
        break;
      default:
        break;
    }
  };

  // Handler untuk membuka virtual keyboard dengan input tertentu
  const handleInputFocus = (inputType, currentValue = '') => {
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    setShowVirtualKeyboard(true);
  };

  // Handle perubahan input manual (tanpa virtual keyboard)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit form - untuk tombol "Tambah Barang Titipan"
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validasi form
    if (!formData.pengunjung_id || !formData.jenis_barang || !formData.jumlah) {
      setError("Pastikan pengunjung, jenis barang, dan jumlah diisi.");
      setIsSubmitting(false);
      return;
    }

    // Validasi jumlah harus lebih dari 0
    const jumlahNumber = parseInt(formData.jumlah);
    if (isNaN(jumlahNumber) || jumlahNumber <= 0) {
      setError("Jumlah harus lebih dari 0.");
      setIsSubmitting(false);
      return;
    }

    // Reset error
    setError("");

    // Panggil fungsi createTitipan dari Zustand
    try {
      await createTitipan(formData, setError);
      toast.success("Barang titipan berhasil dibuat!");

      // Reset form setelah berhasil
      setFormData({
        pengunjung_id: pengunjungs?.id || "",
        wbp_id: "",
        jenis_barang: "",
        jumlah: "",
        keterangan: "",
      });

      // Reset WBP selection
      setSelectedWbp(null);
      setSearchWbp('');

      // Tutup keyboard virtual dan stop voice input
      setShowVirtualKeyboard(false);
      stopVoiceInput();
      
      // TIDAK menutup modal di sini, form tetap terbuka untuk input berikutnya
    } catch (err) {
      console.error("Error saat membuat barang titipan:", err);
      toast.error("Gagal membuat barang titipan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle tombol Selesai - untuk menutup modal
  const handleSelesai = () => {
    setFormData({
      pengunjung_id: "",
      wbp_id: "",
      jenis_barang: "",
      jumlah: "",
      keterangan: "",
    });
    setError("");
    setShowVirtualKeyboard(false);
    setSelectedWbp(null);
    setSearchWbp('');
    stopVoiceInput();
    resetTranscript();
    onClose();
  };

  // Handle close modal (untuk tombol X)
  const handleClose = () => {
    setFormData({
      pengunjung_id: "",
      wbp_id: "",
      jenis_barang: "",
      jumlah: "",
      keterangan: "",
    });
    setError("");
    setShowVirtualKeyboard(false);
    setSelectedWbp(null);
    setSearchWbp('');
    stopVoiceInput();
    resetTranscript();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaBoxOpen className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Tambah Barang Titipan</h2>
                <p className="text-sm opacity-90 mt-1">
                  Isi formulir di bawah ini untuk menambahkan barang titipan baru.
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg">
              <div className="flex items-center">
                <FaInfoCircle className="inline-block mr-2 flex-shrink-0" />
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pencarian WBP (Opsional) dengan voice-to-text */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" /> 
                Pilih Warga Binaan (Opsional)
                <span className="text-gray-500 text-xs ml-1">- Jika barang untuk WBP tertentu</span>
              </label>
              
              {selectedWbp && (
                <div className="mb-3 p-3 bg-green-50 border-l-4 border-green-500 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-700 font-medium">
                        ✓ WBP Terpilih: <strong>{selectedWbp.nama}</strong>
                      </p>
                      <p className="text-green-600 text-sm">ID: {selectedWbp.id}</p>
                    </div>
                    <button
                      type="button"
                      onClick={clearWbpSelection}
                      className="text-red-600 hover:text-red-800 text-sm p-1 rounded-full hover:bg-red-50"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={searchWbp}
                  onChange={(e) => {
                    setSearchWbp(e.target.value);
                    setIsWbpDropdownOpen(true);
                  }}
                  onFocus={() => {
                    setIsWbpDropdownOpen(true);
                    handleInputFocus('wbp', searchWbp);
                  }}
                  placeholder="Ketik nama atau ID WBP (opsional)..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-20"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <button
                    type="button"
                    onClick={() => handleInputFocus('wbp', searchWbp)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center min-w-[44px] min-h-[44px]"
                    title="Buka Keyboard Virtual"
                  >
                    <FaKeyboard className="w-4 h-4" />
                  </button>
                  {isSupported && (
                    <VoiceToTextButton
                      onStart={() => startVoiceInput('wbp')}
                      onStop={stopVoiceInput}
                      isListening={isListening && activeVoiceInput === 'wbp'}
                      className="min-w-[44px] min-h-[44px]"
                    />
                  )}
                </div>
              </div>

              {loadingWbp && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
                    Memuat data WBP...
                  </div>
                </div>
              )}
              
              {isWbpDropdownOpen && filteredWbp.length > 0 && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredWbp.map((wbp) => (
                    <div
                      key={wbp.id}
                      onClick={() => selectWbp(wbp)}
                      className="p-4 hover:bg-blue-50 cursor-pointer flex items-center border-b border-gray-100"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{wbp.nama}</div>
                        <div className="text-sm text-gray-500">ID: {wbp.id}</div>
                        {wbp.nomor_register && (
                          <div className="text-sm text-gray-500">Register: {wbp.nomor_register}</div>
                        )}
                      </div>
                      <FaUser className="ml-2 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}

              {isWbpDropdownOpen && searchWbp && filteredWbp.length === 0 && !loadingWbp && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                  <div className="text-center text-gray-500">
                    Tidak ditemukan WBP dengan nama "{searchWbp}"
                  </div>
                </div>
              )}

              {isSupported && (
                <p className="text-xs text-gray-500 mt-1">
                  Gunakan tombol microphone untuk mencari WBP dengan suara
                </p>
              )}
            </div>

            {/* Pengunjung (Hidden jika sudah ada data pengunjungs) */}
            {!pengunjungs && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaUser className="inline-block mr-2" />
                  Pilih Pengunjung
                </label>
                <select
                  name="pengunjung_id"
                  value={formData.pengunjung_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
                  <option value="">Pilih Pengunjung</option>
                  <option value={pengunjungs?.id}>
                    {pengunjungs?.nama} (NIK: {pengunjungs?.nik})
                  </option>
                </select>
              </div>
            )}

            {/* Jenis Barang */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBoxOpen className="inline-block mr-2" />
                Jenis Barang *
              </label>
              <select
                name="jenis_barang"
                value={formData.jenis_barang}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                <option value="">Pilih Jenis Barang</option>
                <option value="Makanan">Makanan</option>
                <option value="Pakaian">Pakaian</option>
                <option value="Obat">Obat</option>
                <option value="Alat mandi">Alat mandi</option>
                <option value="Uang">Uang</option>
                <option value="Dokumen">Dokumen</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            {/* Jumlah dengan tombol keyboard virtual dan voice-to-text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBoxOpen className="inline-block mr-2" />
                Jumlah *
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="jumlah"
                  value={formData.jumlah}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('jumlah', formData.jumlah)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Masukkan Jumlah Barang"
                  min="1"
                  required
                />
                <div className="flex flex-col space-y-2">
                  <button
                    type="button"
                    onClick={() => handleInputFocus('jumlah', formData.jumlah)}
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
                  >
                    <FaKeyboard className="w-5 h-5" />
                  </button>
                  {isSupported && (
                    <VoiceToTextButton
                      onStart={() => startVoiceInput('jumlah')}
                      onStop={stopVoiceInput}
                      isListening={isListening && activeVoiceInput === 'jumlah'}
                      className="min-w-[44px] min-h-[44px]"
                    />
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Jumlah harus lebih dari 0 • Gunakan keyboard virtual untuk tombol 00/000 • Gunakan voice-to-text untuk input suara
              </p>
            </div>

            {/* Keterangan dengan tombol keyboard virtual dan voice-to-text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaInfoCircle className="inline-block mr-2" />
                Keterangan (Opsional)
              </label>
              <div className="flex space-x-2">
                <textarea
                  name="keterangan"
                  value={formData.keterangan}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('keterangan', formData.keterangan)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Masukkan keterangan tambahan tentang barang titipan..."
                  rows="3"
                />
                <div className="flex flex-col space-y-2">
                  <button
                    type="button"
                    onClick={() => handleInputFocus('keterangan', formData.keterangan)}
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center"
                  >
                    <FaKeyboard className="w-5 h-5" />
                  </button>
                  {isSupported && (
                    <VoiceToTextButton
                      onStart={() => startVoiceInput('keterangan')}
                      onStop={stopVoiceInput}
                      isListening={isListening && activeVoiceInput === 'keterangan'}
                      className="min-w-[44px] min-h-[44px]"
                    />
                  )}
                </div>
              </div>
              {isSupported && (
                <p className="text-xs text-gray-500 mt-1">
                  Gunakan tombol microphone untuk input suara
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                type="button"
                onClick={handleSelesai}
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <FaCheck className="inline-block mr-2" />
                Selesai
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </>
                ) : (
                  <>
                    <FaPlus className="inline-block mr-2" />
                    Tambah Barang Titipan
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Virtual Keyboard */}
      {showVirtualKeyboard && (
        <VirtualKeyboardBarang 
          onKeyPress={handleVirtualKeyPress}
          onClose={() => setShowVirtualKeyboard(false)}
          value={keyboardValue}
          activeInput={activeInput}
          onInputChange={handleInputUpdate}
        />
      )}
    </div>
  );
};

export default CreateBarangTitipanModal;