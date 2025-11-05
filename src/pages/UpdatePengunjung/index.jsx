// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useDataStore from "../../store/useDataStore";
// import toast from "react-hot-toast";
// import CreateBarangTitipanModal from "./CreateBarangTitipanModal";
// import { User, ArrowLeft, Save, Package } from "lucide-react";
// import { FaKeyboard, FaTimes, FaSearch, FaInfoCircle } from "react-icons/fa";

// // Komponen FloatingActionButtons untuk EditPengunjungForm - DIPERBAIKI
// const FloatingActionButtons = ({ onCheckData, onScrollUp, onScrollDown, isExpanded, onToggleExpand }) => {
//   return (
//     <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end space-y-3">
//       {/* Main Check Button */}
//       <button
//         onClick={onCheckData}
//         className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 transform hover:scale-110 animate-pulse"
//         title="Cek Kelengkapan Data"
//       >
//         <FaSearch className="w-6 h-6" />
        
//         {/* Tooltip */}
//         <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//           Cek Kelengkapan Data
//           <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
//         </div>
//       </button>

//       {/* Scroll Buttons */}
//       <div className={`flex flex-col space-y-3 transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
//         <button
//           onClick={onScrollUp}
//           className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
//           title="Scroll ke Atas"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//           </svg>
//         </button>
        
//         <button
//           onClick={onScrollDown}
//           className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
//           title="Scroll ke Bawah"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//       </div>

//       {/* Toggle Button */}
//       <button
//         onClick={onToggleExpand}
//         className={`mt-2 p-2 rounded-full transition-all duration-300 ${
//           isExpanded 
//             ? 'bg-gray-600 text-white rotate-45' 
//             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//         }`}
//         title={isExpanded ? "Tutup Menu" : "Buka Menu Scroll"}
//       >
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// // Komponen Virtual Keyboard untuk EditPengunjungForm - Hanya untuk PC
// const VirtualKeyboardEdit = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
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

//   const numberRows = [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '9'],
//     ['0', 'backspace', 'clear'],
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

//   const getCurrentRows = () => {
//     if (activeInput === 'nik' || activeInput === 'hp') {
//       return numberRows;
//     }
//     return isSymbol ? symbolRows : alphaRows;
//   };

//   const currentRows = getCurrentRows();

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
//       case 'nama':
//         return 'Input Nama';
//       case 'nik':
//         return 'Input NIK';
//       case 'hp':
//         return 'Input Nomor HP';
//       case 'alamat':
//         return 'Input Alamat';
//       case 'hubungan_keluarga':
//         return 'Input Hubungan Keluarga';
//       default:
//         return 'Virtual Keyboard';
//     }
//   };

//   const isNumericInput = activeInput === 'nik' || activeInput === 'hp';

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
//           width: '35vw', // 25% dari lebar viewport
//           minWidth: '500px', // Minimum width
//           maxWidth: '600px', // Maximum width
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
//                   {isNumericInput ? 'Keyboard Numerik' : 'Drag untuk memindahkan'}
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
//                     {key === 'backspace' ? '⌫' : (key === 'clear' ? '🗑️' : (isShift && !isSymbol && !isNumericInput ? key.toUpperCase() : key))}
//                   </div>
                  
//                   {/* Hover Glow */}
//                   <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl transition-all duration-300"></div>
//                 </button>
//               ))}
//             </div>
//           ))}

//           {/* Control Row untuk non-numeric input */}
//           {!isNumericInput && (
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

// const EditPengunjungForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { fetchPengunjungById, pengunjungById, updatePengunjung } = useDataStore();
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     nama: "",
//     jenis_kelamin: "",
//     nik: "",
//     alamat: "",
//     hp: "",
//     hubungan_keluarga: "",
//     tujuan: "",
//     pengikut_laki_laki: 0,
//     pengikut_perempuan: 0,
//     pengikut_anak_anak: 0,
//     pengikut_bayi: 0,
//     total_pengikut: 0,
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // State untuk virtual keyboard
//   const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [keyboardValue, setKeyboardValue] = useState('');
//   const [isPc, setIsPc] = useState(false);

//   // State untuk Floating Action Buttons
//   const [isExpanded, setIsExpanded] = useState(true);

//   // Ref untuk form container - DITAMBAHKAN
//   const formContainerRef = useRef(null);

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

//   // Fungsi untuk menghitung total pengikut
//   const calculateTotalPengikut = (data) => {
//     const total = 
//       parseInt(data.pengikut_laki_laki || 0) +
//       parseInt(data.pengikut_perempuan || 0) +
//       parseInt(data.pengikut_anak_anak || 0) +
//       parseInt(data.pengikut_bayi || 0);
//     return total;
//   };

//   // Ambil data pengunjung yang sudah ada
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         await fetchPengunjungById(id);
//       } catch (error) {
//         console.error("Error fetching pengunjung:", error);
//         toast.error("Gagal memuat data pengunjung");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, [id, fetchPengunjungById]);

//   // Isi form dengan data yang ada dan hitung total
//   useEffect(() => {
//     if (pengunjungById) {
//       const initialData = {
//         nama: pengunjungById.nama || "",
//         jenis_kelamin: pengunjungById.jenis_kelamin || "",
//         nik: pengunjungById.nik || "",
//         alamat: pengunjungById.alamat || "",
//         hp: pengunjungById.hp || "",
//         hubungan_keluarga: pengunjungById.hubungan_keluarga || "",
//         tujuan: pengunjungById.tujuan || "",
//         pengikut_laki_laki: pengunjungById.pengikut_laki_laki || 0,
//         pengikut_perempuan: pengunjungById.pengikut_perempuan || 0,
//         pengikut_anak_anak: pengunjungById.pengikut_anak_anak || 0,
//         pengikut_bayi: pengunjungById.pengikut_bayi || 0,
//         total_pengikut: pengunjungById.total_pengikut || 0,
//       };
      
//       // Hitung ulang total pengikut
//       initialData.total_pengikut = calculateTotalPengikut(initialData);
      
//       setFormData(initialData);
//     }
//   }, [pengunjungById]);

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
//       case 'nama':
//         setFormData(prev => ({ ...prev, nama: newValue }));
//         break;
//       case 'nik':
//         // Hanya terima angka untuk NIK
//         if (key === 'backspace') {
//           setFormData(prev => ({ ...prev, nik: newValue }));
//         } else if (key === 'clear') {
//           setFormData(prev => ({ ...prev, nik: '' }));
//         } else if (/\d/.test(key)) {
//           setFormData(prev => ({ ...prev, nik: newValue }));
//         }
//         break;
//       case 'hp':
//         // Hanya terima angka untuk HP
//         if (key === 'backspace') {
//           setFormData(prev => ({ ...prev, hp: newValue }));
//         } else if (key === 'clear') {
//           setFormData(prev => ({ ...prev, hp: '' }));
//         } else if (/\d/.test(key)) {
//           setFormData(prev => ({ ...prev, hp: newValue }));
//         }
//         break;
//       case 'alamat':
//         setFormData(prev => ({ ...prev, alamat: newValue }));
//         break;
//       case 'hubungan_keluarga':
//         setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
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

//   // Handle perubahan input manual (tanpa virtual keyboard)
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const updatedFormData = {
//       ...formData,
//       [name]: value,
//     };
    
//     // Jika field pengikut diubah, hitung total otomatis
//     if (name.includes('pengikut_') && name !== 'total_pengikut') {
//       updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//     }
    
//     setFormData(updatedFormData);
//   };

//   // Handle submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       await updatePengunjung(id, formData);
//       toast.success("Data pengunjung berhasil diperbarui!");
      
//       // Tunggu sebentar sebelum navigasi agar user bisa melihat toast
//       setTimeout(() => {
//         navigate(-1);
//       }, 1000);
      
//     } catch (error) {
//       console.error("Error updating pengunjung:", error);
//       toast.error("Gagal memperbarui data pengunjung. Silakan coba lagi.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // FUNGSI SCROLL YANG DIPERBAIKI
//   const scrollToTop = () => {
//     // Coba beberapa metode scroll untuk memastikan berfungsi
//     const formElement = document.querySelector('.bg-white.rounded-2xl');
//     const firstInput = document.querySelector('input[name="nama"]');
    
//     if (formElement) {
//       formElement.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'start',
//         inline: 'nearest'
//       });
//     } else if (firstInput) {
//       firstInput.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'center',
//         inline: 'nearest'
//       });
//     } else {
//       // Fallback ke window scroll
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
    
//     console.log('Scroll to top executed');
//   };

//   const scrollToBottom = () => {
//     const submitButton = document.querySelector('button[type="submit"]');
//     const lastElement = document.querySelector('form')?.lastElementChild;
    
//     if (submitButton) {
//       submitButton.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'end',
//         inline: 'nearest'
//       });
//     } else if (lastElement) {
//       lastElement.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'end',
//         inline: 'nearest'
//       });
//     } else {
//       // Fallback ke window scroll
//       window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//     }
    
//     console.log('Scroll to bottom executed');
//   };

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Fungsi untuk fokus ke field kosong - DIPERBAIKI
//   const focusNextEmptyField = () => {
//     const fieldOrder = [
//       'nama', 'nik', 'hp', 'alamat', 'jenis_kelamin', 'hubungan_keluarga', 'tujuan'
//     ];

//     let foundEmpty = false;

//     for (const fieldName of fieldOrder) {
//       let element;
//       if (fieldName === 'jenis_kelamin' || fieldName === 'tujuan') {
//         element = document.querySelector(`select[name="${fieldName}"]`);
//       } else {
//         element = document.querySelector(`input[name="${fieldName}"]`);
//       }

//       if (element) {
//         const value = element.value ? element.value.trim() : '';
//         const isSelect = element.tagName === 'SELECT';
        
//         let isEmpty = false;
//         if (isSelect) {
//           isEmpty = !value;
//         } else {
//           isEmpty = !value;
//         }

//         if (isEmpty) {
//           // Scroll ke element dengan offset untuk header fixed
//           element.scrollIntoView({ 
//             behavior: 'smooth', 
//             block: 'center',
//             inline: 'nearest'
//           });

//           // Highlight element
//           element.style.borderColor = '#3b82f6';
//           element.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.3)';
          
//           // Hapus highlight setelah 2 detik
//           setTimeout(() => {
//             element.style.borderColor = '';
//             element.style.boxShadow = '';
//           }, 2000);

//           // Fokus ke element dengan delay untuk memastikan scroll selesai
//           setTimeout(() => {
//             element.focus();
            
//             // Jika di PC dan field bukan select, buka virtual keyboard
//             if (isPc && !isSelect) {
//               handleInputFocus(fieldName, formData[fieldName]);
//             }
//           }, 300);

//           const fieldLabels = {
//             'nama': 'Nama',
//             'nik': 'NIK',
//             'hp': 'Nomor HP',
//             'alamat': 'Alamat',
//             'jenis_kelamin': 'Jenis Kelamin',
//             'hubungan_keluarga': 'Hubungan Keluarga',
//             'tujuan': 'Tujuan'
//           };

//           toast.success(`Beralih ke: ${fieldLabels[fieldName]}`);
//           foundEmpty = true;
//           break;
//         }
//       }
//     }

//     if (!foundEmpty) {
//       // Jika semua field terisi, fokus ke tombol submit
//       const submitButton = document.querySelector('button[type="submit"]');
//       if (submitButton) {
//         submitButton.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'center',
//           inline: 'nearest'
//         });
        
//         submitButton.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.3)';
//         setTimeout(() => {
//           submitButton.style.boxShadow = '';
//         }, 2000);
        
//         toast.success('Semua field sudah terisi! Silakan submit form.');
//       }
//     }
    
//     return foundEmpty;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Memuat data pengunjung...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!pengunjungById) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="text-center">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md">
//             <h3 className="font-bold text-lg mb-2">Data Tidak Ditemukan</h3>
//             <p className="mb-4">Pengunjung dengan kode {id} tidak ditemukan.</p>
//             <button
//               onClick={() => navigate(-1)}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Kembali
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div 
//       ref={formContainerRef}
//       className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center space-x-4 mb-4 lg:mb-0">
//                 <div className="bg-white bg-opacity-20 p-3 rounded-xl">
//                   <User className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h1 className="text-3xl font-bold">Edit Data Pengunjung</h1>
//                   <p className="text-blue-100 mt-1">
//                     Kode: <span className="font-mono font-semibold">{pengunjungById.kode}</span>
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => navigate(-1)}
//                 className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all self-start lg:self-auto"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span>Kembali</span>
//               </button>
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="p-8">
//             {/* Tombol Cek Kelengkapan Data */}
//             <div className="flex justify-center mb-6">
//               <button
//                 type="button"
//                 onClick={focusNextEmptyField}
//                 className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all flex items-center justify-center touch-friendly text-lg font-semibold shadow-lg"
//               >
//                 <FaSearch className="inline-block mr-2" />
//                 Cek Kelengkapan Data
//               </button>
//             </div>

//             <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
//               <p className="text-blue-700 text-sm flex items-center">
//                 <FaInfoCircle className="mr-2" />
//                 <strong>Tips:</strong> Gunakan tombol "Cek Kelengkapan Data" untuk langsung menuju ke field yang masih kosong.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Kolom Kiri - Data Dasar */}
//                 <div className="space-y-6">
//                   <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
//                     <h3 className="font-semibold text-blue-800 text-lg mb-2">Data Dasar</h3>
//                     <p className="text-blue-600 text-sm">Informasi utama pengunjung</p>
//                   </div>

//                   {/* Nama */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       Nama Lengkap *
//                     </label>
//                     <div className="flex space-x-2">
//                       <input
//                         type="text"
//                         name="nama"
//                         value={formData.nama}
//                         onChange={handleInputChange}
//                         onFocus={() => handleInputFocus('nama', formData.nama)}
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                         required
//                       />
//                       {/* Tombol keyboard hanya muncul di PC */}
//                       {isPc && (
//                         <button
//                           type="button"
//                           onClick={() => handleInputFocus('nama', formData.nama)}
//                           className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                         >
//                           <FaKeyboard className="w-5 h-5" />
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   {/* NIK */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       NIK *
//                     </label>
//                     <div className="flex space-x-2">
//                       <input
//                         type="number"
//                         name="nik"
//                         value={formData.nik}
//                         onChange={handleInputChange}
//                         onFocus={() => handleInputFocus('nik', formData.nik)}
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                         required
//                       />
//                       {/* Tombol keyboard hanya muncul di PC */}
//                       {isPc && (
//                         <button
//                           type="button"
//                           onClick={() => handleInputFocus('nik', formData.nik)}
//                           className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                         >
//                           <FaKeyboard className="w-5 h-5" />
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   {/* Nomor HP */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       Nomor HP *
//                     </label>
//                     <div className="flex space-x-2">
//                       <input
//                         type="tel"
//                         name="hp"
//                         value={formData.hp}
//                         onChange={handleInputChange}
//                         onFocus={() => handleInputFocus('hp', formData.hp)}
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                         required
//                       />
//                       {/* Tombol keyboard hanya muncul di PC */}
//                       {isPc && (
//                         <button
//                           type="button"
//                           onClick={() => handleInputFocus('hp', formData.hp)}
//                           className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
//                         >
//                           <FaKeyboard className="w-5 h-5" />
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   {/* Alamat */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       Alamat
//                     </label>
//                     <div className="flex space-x-2">
//                       <input
//                         type="text"
//                         name="alamat"
//                         value={formData.alamat}
//                         onChange={handleInputChange}
//                         onFocus={() => handleInputFocus('alamat', formData.alamat)}
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       />
//                       {/* Tombol keyboard hanya muncul di PC */}
//                       {isPc && (
//                         <button
//                           type="button"
//                           onClick={() => handleInputFocus('alamat', formData.alamat)}
//                           className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center self-start"
//                         >
//                           <FaKeyboard className="w-5 h-5" />
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   {/* Jenis Kelamin */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       Jenis Kelamin
//                     </label>
//                     <select
//                       name="jenis_kelamin"
//                       value={formData.jenis_kelamin}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">Pilih Jenis Kelamin</option>
//                       <option value="laki-laki">Laki-laki</option>
//                       <option value="perempuan">Perempuan</option>
//                     </select>
//                   </div>

//                   {/* Hubungan Keluarga */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       Hubungan Keluarga
//                     </label>
//                     <div className="flex space-x-2">
//                       <input
//                         type="text"
//                         name="hubungan_keluarga"
//                         value={formData.hubungan_keluarga}
//                         onChange={handleInputChange}
//                         onFocus={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
//                         placeholder="Contoh: Saudara, Ibu, Ayah, dll."
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       />
//                       {/* Tombol keyboard hanya muncul di PC */}
//                       {isPc && (
//                         <button
//                           type="button"
//                           onClick={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
//                           className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center self-start"
//                         >
//                           <FaKeyboard className="w-5 h-5" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Kolom Kanan - Informasi Kunjungan */}
//                 <div className="space-y-6">
//                   <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
//                     <h3 className="font-semibold text-purple-800 text-lg mb-2">Informasi Kunjungan</h3>
//                     <p className="text-purple-600 text-sm">Detail kunjungan dan pengikut</p>
//                   </div>

//                   {/* Tujuan */}
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       Tujuan Kunjungan
//                     </label>
//                     <select
//                       name="tujuan"
//                       value={formData.tujuan}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">Pilih Tujuan Kunjungan</option>
//                       <option value="Berkunjung">Berkunjung</option>
//                       <option value="Menitip barang">Menitip Barang</option>
//                     </select>
//                   </div>

//                   {/* Pengikut */}
//                   <div className="space-y-4">
//                     <h4 className="font-medium text-gray-700">Jumlah Pengikut</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       {[
//                         { 
//                           name: "pengikut_laki_laki", 
//                           label: "Laki-laki", 
//                           icon: "👨",
//                           color: "blue",
//                           description: "Dewasa 12+ tahun"
//                         },
//                         { 
//                           name: "pengikut_perempuan", 
//                           label: "Perempuan", 
//                           icon: "👩",
//                           color: "pink",
//                           description: "Dewasa 12+ tahun"
//                         },
//                         { 
//                           name: "pengikut_anak_anak", 
//                           label: "Anak-anak", 
//                           icon: "🧒",
//                           color: "green",
//                           description: "2-11 tahun"
//                         },
//                         { 
//                           name: "pengikut_bayi", 
//                           label: "Bayi", 
//                           icon: "👶",
//                           color: "purple",
//                           description: "0-1 tahun"
//                         },
//                       ].map((field) => (
//                         <div key={field.name} className="space-y-3">
//                           <label className="block text-sm font-medium text-gray-700 flex items-center">
//                             <span className="text-lg mr-2">{field.icon}</span>
//                             {field.label}
//                           </label>
                          
//                           {/* Counter Component */}
//                           <div className="flex items-center justify-between space-x-3">
//                             {/* Minus Button */}
//                             <button
//                               type="button"
//                               onClick={() => {
//                                 const currentValue = parseInt(formData[field.name]) || 0;
//                                 if (currentValue > 0) {
//                                   const updatedFormData = {
//                                     ...formData,
//                                     [field.name]: currentValue - 1
//                                   };
//                                   updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                                   setFormData(updatedFormData);
//                                 }
//                               }}
//                               className={`
//                                 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200
//                                 ${parseInt(formData[field.name]) > 0 
//                                   ? `bg-${field.color}-100 hover:bg-${field.color}-200 text-${field.color}-700 border-2 border-${field.color}-300 hover:border-${field.color}-400` 
//                                   : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
//                                 }
//                                 focus:outline-none focus:ring-2 focus:ring-${field.color}-500 focus:ring-offset-2
//                                 active:scale-95
//                               `}
//                               disabled={parseInt(formData[field.name]) <= 0}
//                             >
//                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                               </svg>
//                             </button>

//                             {/* Input Display */}
//                             <div className="flex-1 relative">
//                               <input
//                                 type="number"
//                                 name={field.name}
//                                 value={formData[field.name]}
//                                 onChange={handleInputChange}
//                                 className={`
//                                   w-full px-4 py-3 text-center border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200
//                                   bg-white font-semibold text-lg
//                                   border-${field.color}-200 focus:border-${field.color}-500 focus:ring-${field.color}-500
//                                   hover:border-${field.color}-300
//                                 `}
//                                 min="0"
//                               />
//                               <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                                 <span className="text-gray-400">{field.icon}</span>
//                               </div>
//                             </div>

//                             {/* Plus Button */}
//                             <button
//                               type="button"
//                               onClick={() => {
//                                 const currentValue = parseInt(formData[field.name]) || 0;
//                                 const updatedFormData = {
//                                   ...formData,
//                                   [field.name]: currentValue + 1
//                                 };
//                                 updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
//                                 setFormData(updatedFormData);
//                               }}
//                               className={`
//                                 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200
//                                 bg-${field.color}-100 hover:bg-${field.color}-200 text-${field.color}-700 
//                                 border-2 border-${field.color}-300 hover:border-${field.color}-400
//                                 focus:outline-none focus:ring-2 focus:ring-${field.color}-500 focus:ring-offset-2
//                                 active:scale-95
//                               `}
//                             >
//                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                               </svg>
//                             </button>
//                           </div>

//                           {/* Description */}
//                           <p className="text-xs text-gray-500 text-center">
//                             {field.description}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Total Pengikut */}
//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-lg">
//                     <div className="text-center">
//                       <div className="text-sm font-medium text-green-800 mb-1">Total Pengikut</div>
//                       <div className="text-3xl font-bold text-green-600">
//                         {formData.total_pengikut} <span className="text-lg">Orang</span>
//                       </div>
//                       <div className="text-xs text-green-600 mt-2">
//                         Detail: Laki-laki ({formData.pengikut_laki_laki}) • 
//                         Perempuan ({formData.pengikut_perempuan}) • 
//                         Anak ({formData.pengikut_anak_anak}) • 
//                         Bayi ({formData.pengikut_bayi})
//                       </div>
//                     </div>
//                   </div>

//                   {/* Tombol Simpan */}
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                   >
//                     {submitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                         <span>Menyimpan...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Save className="w-5 h-5" />
//                         <span>Simpan Perubahan</span>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </form>

//             {/* Tombol Tambah Barang Titipan */}
//             <div className="mt-8 pt-8 border-t border-gray-200">
//               <div className="text-center">
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02]"
//                 >
//                   <Package className="w-5 h-5" />
//                   <span>Tambah Barang Titipan</span>
//                 </button>
//                 <p className="text-sm text-gray-600 mt-2">
//                   Tambahkan barang titipan untuk pengunjung ini
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal CreateBarangTitipan */}
//       <CreateBarangTitipanModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         pengunjungs={pengunjungById}
//       />

//       {/* Virtual Keyboard - Hanya muncul di PC */}
//       {showVirtualKeyboard && (
//         <VirtualKeyboardEdit 
//           onKeyPress={handleVirtualKeyPress}
//           onClose={() => setShowVirtualKeyboard(false)}
//           value={keyboardValue}
//           activeInput={activeInput}
//           onInputChange={handleInputUpdate}
//         />
//       )}

//       {/* Floating Action Buttons */}
//       <FloatingActionButtons 
//         onCheckData={focusNextEmptyField}
//         onScrollUp={scrollToTop}
//         onScrollDown={scrollToBottom}
//         isExpanded={isExpanded}
//         onToggleExpand={toggleExpand}
//       />
//     </div>
//   );
// };

// export default EditPengunjungForm;


import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";
import toast from "react-hot-toast";
import CreateBarangTitipanModal from "./CreateBarangTitipanModal";
import { User, ArrowLeft, Save, Package } from "lucide-react";
import { FaKeyboard, FaTimes, FaSearch, FaInfoCircle } from "react-icons/fa";

// Komponen FloatingActionButtons untuk EditPengunjungForm - DIPERBAIKI
const FloatingActionButtons = ({ 
  onCheckData, 
  onScrollUp, 
  onScrollDown, 
  isExpanded, 
  onToggleExpand,
  onToggleKeyboard, 
  isKeyboardEnabled 
}) => {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end space-y-3">
      {/* Tombol untuk toggle keyboard */}
      <button
        onClick={onToggleKeyboard}
        className={`group relative p-4 rounded-full shadow-2xl focus:outline-none focus:ring-4 transition-all duration-300 transform hover:scale-110 ${
          isKeyboardEnabled 
            ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300' 
            : 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300'
        }`}
        title={`${isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual`}
      >
        <FaKeyboard className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
        </div>
      </button>

      {/* Main Check Button */}
      <button
        onClick={onCheckData}
        className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Cek Kelengkapan Data"
      >
        <FaSearch className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Cek Kelengkapan Data
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
        </div>
      </button>

      {/* Scroll Buttons */}
      <div className={`flex flex-col space-y-3 transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
        <button
          onClick={onScrollUp}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
          title="Scroll ke Atas"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        
        <button
          onClick={onScrollDown}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
          title="Scroll ke Bawah"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggleExpand}
        className={`mt-2 p-2 rounded-full transition-all duration-300 ${
          isExpanded 
            ? 'bg-gray-600 text-white rotate-45' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        title={isExpanded ? "Tutup Menu" : "Buka Menu Scroll"}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

// Komponen Virtual Keyboard untuk EditPengunjungForm - Hanya untuk PC
const VirtualKeyboardEdit = ({ onKeyPress, onClose, value, activeInput, onInputChange }) => {
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

  const numberRows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', 'backspace', 'clear'],
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

  const getCurrentRows = () => {
    if (activeInput === 'nik' || activeInput === 'hp') {
      return numberRows;
    }
    return isSymbol ? symbolRows : alphaRows;
  };

  const currentRows = getCurrentRows();

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
      case 'nama':
        return 'Input Nama';
      case 'nik':
        return 'Input NIK';
      case 'hp':
        return 'Input Nomor HP';
      case 'alamat':
        return 'Input Alamat';
      case 'hubungan_keluarga':
        return 'Input Hubungan Keluarga';
      default:
        return 'Virtual Keyboard';
    }
  };

  const isNumericInput = activeInput === 'nik' || activeInput === 'hp';

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
          width: '35vw', // 25% dari lebar viewport
          minWidth: '500px', // Minimum width
          maxWidth: '600px', // Maximum width
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
                  {isNumericInput ? 'Keyboard Numerik' : 'Drag untuk memindahkan'}
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
                    {key === 'backspace' ? '⌫' : (key === 'clear' ? '🗑️' : (isShift && !isSymbol && !isNumericInput ? key.toUpperCase() : key))}
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl transition-all duration-300"></div>
                </button>
              ))}
            </div>
          ))}

          {/* Control Row untuk non-numeric input */}
          {!isNumericInput && (
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

const EditPengunjungForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchPengunjungById, pengunjungById, updatePengunjung } = useDataStore();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    jenis_kelamin: "",
    nik: "",
    alamat: "",
    hp: "",
    hubungan_keluarga: "",
    tujuan: "",
    pengikut_laki_laki: 0,
    pengikut_perempuan: 0,
    pengikut_anak_anak: 0,
    pengikut_bayi: 0,
    total_pengikut: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State untuk virtual keyboard
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [keyboardValue, setKeyboardValue] = useState('');
  const [isPc, setIsPc] = useState(false);

  // State untuk toggle keyboard - DITAMBAHKAN
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(true);

  // State untuk Floating Action Buttons
  const [isExpanded, setIsExpanded] = useState(true);

  // Ref untuk form container - DITAMBAHKAN
  const formContainerRef = useRef(null);

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

  // Load keyboard preference dari localStorage saat komponen dimount - DITAMBAHKAN
  useEffect(() => {
    const savedKeyboardPreference = localStorage.getItem('virtualKeyboardEnabled');
    if (savedKeyboardPreference !== null) {
      setIsKeyboardEnabled(JSON.parse(savedKeyboardPreference));
    }
  }, []);

  // Simpan keyboard preference ke localStorage saat berubah - DITAMBAHKAN
  const toggleKeyboard = () => {
    const newState = !isKeyboardEnabled;
    setIsKeyboardEnabled(newState);
    localStorage.setItem('virtualKeyboardEnabled', JSON.stringify(newState));
    toast.success(`Keyboard virtual ${newState ? 'diaktifkan' : 'dinonaktifkan'}`);
  };

  // Fungsi untuk menghitung total pengikut
  const calculateTotalPengikut = (data) => {
    const total = 
      parseInt(data.pengikut_laki_laki || 0) +
      parseInt(data.pengikut_perempuan || 0) +
      parseInt(data.pengikut_anak_anak || 0) +
      parseInt(data.pengikut_bayi || 0);
    return total;
  };

  // Ambil data pengunjung yang sudah ada
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await fetchPengunjungById(id);
      } catch (error) {
        console.error("Error fetching pengunjung:", error);
        toast.error("Gagal memuat data pengunjung");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id, fetchPengunjungById]);

  // Isi form dengan data yang ada dan hitung total
  useEffect(() => {
    if (pengunjungById) {
      const initialData = {
        nama: pengunjungById.nama || "",
        jenis_kelamin: pengunjungById.jenis_kelamin || "",
        nik: pengunjungById.nik || "",
        alamat: pengunjungById.alamat || "",
        hp: pengunjungById.hp || "",
        hubungan_keluarga: pengunjungById.hubungan_keluarga || "",
        tujuan: pengunjungById.tujuan || "",
        pengikut_laki_laki: pengunjungById.pengikut_laki_laki || 0,
        pengikut_perempuan: pengunjungById.pengikut_perempuan || 0,
        pengikut_anak_anak: pengunjungById.pengikut_anak_anak || 0,
        pengikut_bayi: pengunjungById.pengikut_bayi || 0,
        total_pengikut: pengunjungById.total_pengikut || 0,
      };
      
      // Hitung ulang total pengikut
      initialData.total_pengikut = calculateTotalPengikut(initialData);
      
      setFormData(initialData);
    }
  }, [pengunjungById]);

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
      case 'nama':
        setFormData(prev => ({ ...prev, nama: newValue }));
        break;
      case 'nik':
        // Hanya terima angka untuk NIK
        if (key === 'backspace') {
          setFormData(prev => ({ ...prev, nik: newValue }));
        } else if (key === 'clear') {
          setFormData(prev => ({ ...prev, nik: '' }));
        } else if (/\d/.test(key)) {
          setFormData(prev => ({ ...prev, nik: newValue }));
        }
        break;
      case 'hp':
        // Hanya terima angka untuk HP
        if (key === 'backspace') {
          setFormData(prev => ({ ...prev, hp: newValue }));
        } else if (key === 'clear') {
          setFormData(prev => ({ ...prev, hp: '' }));
        } else if (/\d/.test(key)) {
          setFormData(prev => ({ ...prev, hp: newValue }));
        }
        break;
      case 'alamat':
        setFormData(prev => ({ ...prev, alamat: newValue }));
        break;
      case 'hubungan_keluarga':
        setFormData(prev => ({ ...prev, hubungan_keluarga: newValue }));
        break;
      default:
        break;
    }
  };

  // Handler untuk membuka virtual keyboard dengan input tertentu - hanya untuk PC
  const handleInputFocus = (inputType, currentValue = '') => {
    // Hanya tampilkan virtual keyboard jika perangkat adalah PC dan keyboard diaktifkan
    if (!isPc || !isKeyboardEnabled) return;
    
    setActiveInput(inputType);
    setKeyboardValue(currentValue);
    setShowVirtualKeyboard(true);
  };

  // Handle perubahan input manual (tanpa virtual keyboard)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    
    // Jika field pengikut diubah, hitung total otomatis
    if (name.includes('pengikut_') && name !== 'total_pengikut') {
      updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
    }
    
    setFormData(updatedFormData);
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await updatePengunjung(id, formData);
      toast.success("Data pengunjung berhasil diperbarui!");
      
      // Tunggu sebentar sebelum navigasi agar user bisa melihat toast
      setTimeout(() => {
        navigate(-1);
      }, 1000);
      
    } catch (error) {
      console.error("Error updating pengunjung:", error);
      toast.error("Gagal memperbarui data pengunjung. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  // FUNGSI SCROLL YANG DIPERBAIKI
  const scrollToTop = () => {
    // Coba beberapa metode scroll untuk memastikan berfungsi
    const formElement = document.querySelector('.bg-white.rounded-2xl');
    const firstInput = document.querySelector('input[name="nama"]');
    
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else if (firstInput) {
      firstInput.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
    } else {
      // Fallback ke window scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    console.log('Scroll to top executed');
  };

  const scrollToBottom = () => {
    const submitButton = document.querySelector('button[type="submit"]');
    const lastElement = document.querySelector('form')?.lastElementChild;
    
    if (submitButton) {
      submitButton.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'end',
        inline: 'nearest'
      });
    } else if (lastElement) {
      lastElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'end',
        inline: 'nearest'
      });
    } else {
      // Fallback ke window scroll
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    
    console.log('Scroll to bottom executed');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Fungsi untuk fokus ke field kosong - DIPERBAIKI
  const focusNextEmptyField = () => {
    const fieldOrder = [
      'nama', 'nik', 'hp', 'alamat', 'jenis_kelamin', 'hubungan_keluarga', 'tujuan'
    ];

    let foundEmpty = false;

    for (const fieldName of fieldOrder) {
      let element;
      if (fieldName === 'jenis_kelamin' || fieldName === 'tujuan') {
        element = document.querySelector(`select[name="${fieldName}"]`);
      } else {
        element = document.querySelector(`input[name="${fieldName}"]`);
      }

      if (element) {
        const value = element.value ? element.value.trim() : '';
        const isSelect = element.tagName === 'SELECT';
        
        let isEmpty = false;
        if (isSelect) {
          isEmpty = !value;
        } else {
          isEmpty = !value;
        }

        if (isEmpty) {
          // Scroll ke element dengan offset untuk header fixed
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });

          // Highlight element
          element.style.borderColor = '#3b82f6';
          element.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.3)';
          
          // Hapus highlight setelah 2 detik
          setTimeout(() => {
            element.style.borderColor = '';
            element.style.boxShadow = '';
          }, 2000);

          // Fokus ke element dengan delay untuk memastikan scroll selesai
          setTimeout(() => {
            element.focus();
            
            // Jika di PC dan field bukan select, buka virtual keyboard (jika diaktifkan)
            if (isPc && !isSelect && isKeyboardEnabled) {
              handleInputFocus(fieldName, formData[fieldName]);
            }
          }, 300);

          const fieldLabels = {
            'nama': 'Nama',
            'nik': 'NIK',
            'hp': 'Nomor HP',
            'alamat': 'Alamat',
            'jenis_kelamin': 'Jenis Kelamin',
            'hubungan_keluarga': 'Hubungan Keluarga',
            'tujuan': 'Tujuan'
          };

          toast.success(`Beralih ke: ${fieldLabels[fieldName]}`);
          foundEmpty = true;
          break;
        }
      }
    }

    if (!foundEmpty) {
      // Jika semua field terisi, fokus ke tombol submit
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        
        submitButton.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.3)';
        setTimeout(() => {
          submitButton.style.boxShadow = '';
        }, 2000);
        
        toast.success('Semua field sudah terisi! Silakan submit form.');
      }
    }
    
    return foundEmpty;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat data pengunjung...</p>
        </div>
      </div>
    );
  }

  if (!pengunjungById) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md">
            <h3 className="font-bold text-lg mb-2">Data Tidak Ditemukan</h3>
            <p className="mb-4">Pengunjung dengan kode {id} tidak ditemukan.</p>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={formContainerRef}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Edit Data Pengunjung</h1>
                  <p className="text-blue-100 mt-1">
                    Kode: <span className="font-mono font-semibold">{pengunjungById.kode}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all self-start lg:self-auto"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Kembali</span>
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Tombol Cek Kelengkapan Data */}
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={focusNextEmptyField}
                className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all flex items-center justify-center touch-friendly text-lg font-semibold shadow-lg"
              >
                <FaSearch className="inline-block mr-2" />
                Cek Kelengkapan Data
              </button>
            </div>

            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <p className="text-blue-700 text-sm flex items-center">
                <FaInfoCircle className="mr-2" />
                <strong>Tips:</strong> Gunakan tombol "Cek Kelengkapan Data" untuk langsung menuju ke field yang masih kosong.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Kolom Kiri - Data Dasar */}
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 text-lg mb-2">Data Dasar</h3>
                    <p className="text-blue-600 text-sm">Informasi utama pengunjung</p>
                  </div>

                  {/* Nama */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nama Lengkap *
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('nama', formData.nama)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                      {/* Tombol keyboard hanya muncul di PC dan jika keyboard diaktifkan */}
                      {isPc && isKeyboardEnabled && (
                        <button
                          type="button"
                          onClick={() => handleInputFocus('nama', formData.nama)}
                          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                        >
                          <FaKeyboard className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* NIK */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      NIK *
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        name="nik"
                        value={formData.nik}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('nik', formData.nik)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                      {/* Tombol keyboard hanya muncul di PC dan jika keyboard diaktifkan */}
                      {isPc && isKeyboardEnabled && (
                        <button
                          type="button"
                          onClick={() => handleInputFocus('nik', formData.nik)}
                          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                        >
                          <FaKeyboard className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Nomor HP */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nomor HP *
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="tel"
                        name="hp"
                        value={formData.hp}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('hp', formData.hp)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                      {/* Tombol keyboard hanya muncul di PC dan jika keyboard diaktifkan */}
                      {isPc && isKeyboardEnabled && (
                        <button
                          type="button"
                          onClick={() => handleInputFocus('hp', formData.hp)}
                          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center"
                        >
                          <FaKeyboard className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Alamat */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Alamat
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('alamat', formData.alamat)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      {/* Tombol keyboard hanya muncul di PC dan jika keyboard diaktifkan */}
                      {isPc && isKeyboardEnabled && (
                        <button
                          type="button"
                          onClick={() => handleInputFocus('alamat', formData.alamat)}
                          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center self-start"
                        >
                          <FaKeyboard className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Jenis Kelamin */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Jenis Kelamin
                    </label>
                    <select
                      name="jenis_kelamin"
                      value={formData.jenis_kelamin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="laki-laki">Laki-laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>

                  {/* Hubungan Keluarga */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Hubungan Keluarga
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name="hubungan_keluarga"
                        value={formData.hubungan_keluarga}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
                        placeholder="Contoh: Saudara, Ibu, Ayah, dll."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      {/* Tombol keyboard hanya muncul di PC dan jika keyboard diaktifkan */}
                      {isPc && isKeyboardEnabled && (
                        <button
                          type="button"
                          onClick={() => handleInputFocus('hubungan_keluarga', formData.hubungan_keluarga)}
                          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center self-start"
                        >
                          <FaKeyboard className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Kolom Kanan - Informasi Kunjungan */}
                <div className="space-y-6">
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 text-lg mb-2">Informasi Kunjungan</h3>
                    <p className="text-purple-600 text-sm">Detail kunjungan dan pengikut</p>
                  </div>

                  {/* Tujuan */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Tujuan Kunjungan
                    </label>
                    <select
                      name="tujuan"
                      value={formData.tujuan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih Tujuan Kunjungan</option>
                      <option value="Berkunjung">Berkunjung</option>
                      <option value="Menitip barang">Menitip Barang</option>
                    </select>
                  </div>

                  {/* Pengikut */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">Jumlah Pengikut</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { 
                          name: "pengikut_laki_laki", 
                          label: "Laki-laki", 
                          icon: "👨",
                          color: "blue",
                          description: "Dewasa 12+ tahun"
                        },
                        { 
                          name: "pengikut_perempuan", 
                          label: "Perempuan", 
                          icon: "👩",
                          color: "pink",
                          description: "Dewasa 12+ tahun"
                        },
                        { 
                          name: "pengikut_anak_anak", 
                          label: "Anak-anak", 
                          icon: "🧒",
                          color: "green",
                          description: "2-11 tahun"
                        },
                        { 
                          name: "pengikut_bayi", 
                          label: "Bayi", 
                          icon: "👶",
                          color: "purple",
                          description: "0-1 tahun"
                        },
                      ].map((field) => (
                        <div key={field.name} className="space-y-3">
                          <label className="block text-sm font-medium text-gray-700 flex items-center">
                            <span className="text-lg mr-2">{field.icon}</span>
                            {field.label}
                          </label>
                          
                          {/* Counter Component */}
                          <div className="flex items-center justify-between space-x-3">
                            {/* Minus Button */}
                            <button
                              type="button"
                              onClick={() => {
                                const currentValue = parseInt(formData[field.name]) || 0;
                                if (currentValue > 0) {
                                  const updatedFormData = {
                                    ...formData,
                                    [field.name]: currentValue - 1
                                  };
                                  updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                                  setFormData(updatedFormData);
                                }
                              }}
                              className={`
                                flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200
                                ${parseInt(formData[field.name]) > 0 
                                  ? `bg-${field.color}-100 hover:bg-${field.color}-200 text-${field.color}-700 border-2 border-${field.color}-300 hover:border-${field.color}-400` 
                                  : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                                }
                                focus:outline-none focus:ring-2 focus:ring-${field.color}-500 focus:ring-offset-2
                                active:scale-95
                              `}
                              disabled={parseInt(formData[field.name]) <= 0}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>

                            {/* Input Display */}
                            <div className="flex-1 relative">
                              <input
                                type="number"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                className={`
                                  w-full px-4 py-3 text-center border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200
                                  bg-white font-semibold text-lg
                                  border-${field.color}-200 focus:border-${field.color}-500 focus:ring-${field.color}-500
                                  hover:border-${field.color}-300
                                `}
                                min="0"
                              />
                              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <span className="text-gray-400">{field.icon}</span>
                              </div>
                            </div>

                            {/* Plus Button */}
                            <button
                              type="button"
                              onClick={() => {
                                const currentValue = parseInt(formData[field.name]) || 0;
                                const updatedFormData = {
                                  ...formData,
                                  [field.name]: currentValue + 1
                                };
                                updatedFormData.total_pengikut = calculateTotalPengikut(updatedFormData);
                                setFormData(updatedFormData);
                              }}
                              className={`
                                flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200
                                bg-${field.color}-100 hover:bg-${field.color}-200 text-${field.color}-700 
                                border-2 border-${field.color}-300 hover:border-${field.color}-400
                                focus:outline-none focus:ring-2 focus:ring-${field.color}-500 focus:ring-offset-2
                                active:scale-95
                              `}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-gray-500 text-center">
                            {field.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total Pengikut */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-800 mb-1">Total Pengikut</div>
                      <div className="text-3xl font-bold text-green-600">
                        {formData.total_pengikut} <span className="text-lg">Orang</span>
                      </div>
                      <div className="text-xs text-green-600 mt-2">
                        Detail: Laki-laki ({formData.pengikut_laki_laki}) • 
                        Perempuan ({formData.pengikut_perempuan}) • 
                        Anak ({formData.pengikut_anak_anak}) • 
                        Bayi ({formData.pengikut_bayi})
                      </div>
                    </div>
                  </div>

                  {/* Tombol Simpan */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Menyimpan...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>Simpan Perubahan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Tombol Tambah Barang Titipan */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02]"
                >
                  <Package className="w-5 h-5" />
                  <span>Tambah Barang Titipan</span>
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  Tambahkan barang titipan untuk pengunjung ini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal CreateBarangTitipan */}
      <CreateBarangTitipanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pengunjungs={pengunjungById}
      />

      {/* Virtual Keyboard - Hanya muncul di PC dan jika diaktifkan */}
      {showVirtualKeyboard && isKeyboardEnabled && (
        <VirtualKeyboardEdit 
          onKeyPress={handleVirtualKeyPress}
          onClose={() => setShowVirtualKeyboard(false)}
          value={keyboardValue}
          activeInput={activeInput}
          onInputChange={handleInputUpdate}
        />
      )}

      {/* Floating Action Buttons - DITAMBAHKAN prop onToggleKeyboard dan isKeyboardEnabled */}
      <FloatingActionButtons 
        onCheckData={focusNextEmptyField}
        onScrollUp={scrollToTop}
        onScrollDown={scrollToBottom}
        isExpanded={isExpanded}
        onToggleExpand={toggleExpand}
        onToggleKeyboard={toggleKeyboard}
        isKeyboardEnabled={isKeyboardEnabled}
      />
    </div>
  );
};

export default EditPengunjungForm;