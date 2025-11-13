import { useEffect, useRef, useState } from "react";
import { FaKeyboard, FaTimes } from "react-icons/fa";

const VirtualKeyboard = ({ onKeyPress, onClose, value, activeInput, onInputChange, onEnter }) => {
  const [isShift, setIsShift] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isPc, setIsPc] = useState(false);
  const keyboardRef = useRef(null);
  const containerRef = useRef(null);

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

  const currentRows = isSymbol ? symbolRows : alphaRows;

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

  const handleDragEnd = () => {
	setIsDragging(false);
  };

  useEffect(() => {
	if (isDragging) {
	  document.addEventListener('mousemove', handleMouseMove);
	  document.addEventListener('mouseup', handleDragEnd);
	  document.addEventListener('touchmove', handleTouchMove, { passive: false });
	  document.addEventListener('touchend', handleDragEnd);
	  document.addEventListener('touchcancel', handleDragEnd);
	  
	  document.body.style.overflow = 'hidden';
	  document.body.style.userSelect = 'none';
	  document.body.style.webkitUserSelect = 'none';
	}

	return () => {
	  document.removeEventListener('mousemove', handleMouseMove);
	  document.removeEventListener('mouseup', handleDragEnd);
	  document.removeEventListener('touchmove', handleTouchMove);
	  document.removeEventListener('touchend', handleDragEnd);
	  document.removeEventListener('touchcancel', handleDragEnd);
	  
	  document.body.style.overflow = '';
	  document.body.style.userSelect = '';
	  document.body.style.webkitUserSelect = '';
	};
  }, [isDragging, dragOffset]);

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
	const finalKey = isShift ? key.toUpperCase() : key;
	onKeyPress(finalKey);
	if (onInputChange) {
	  onInputChange(finalKey);
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
		if (onEnter) onEnter();
		break;
	  case 'clear':
		onKeyPress('clear');
		if (onInputChange) onInputChange('clear');
		break;
	  case 'tab':
		onKeyPress('tab');
		break;
	  default:
		break;
	}
  };

  const getInputLabel = () => {
	switch (activeInput) {
	  case 'wbp':
		return 'Cari Warga Binaan';
	  case 'pengunjung':
		return 'Cari Pengunjung';
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
	  case 'kode':
		return 'Input Kode';
	  case 'tujuan':
		return 'Pilih Tujuan';
	  default:
		return 'Virtual Keyboard';
	}
  };

  if (!isPc) {
	return null;
  }

  return (
	<div 
	  ref={containerRef}
	  className="fixed inset-0 bg-black bg-opacity-20 flex items-end justify-center z-50 p-4 pointer-events-none"
	  style={{ touchAction: 'none' }}
	>
	  <div 
		ref={keyboardRef}
		className="bg-transparent rounded-2xl transform transition-all duration-300 pointer-events-auto"
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
		  border: '3px solid #3b82f6',
		  boxShadow: `
			0 0 0 1px rgba(59, 130, 246, 0.5),
			0 10px 30px rgba(0, 0, 0, 0.3),
			0 0 20px rgba(59, 130, 246, 0.4)
		  `,
		}}
		onMouseDown={(e) => e.stopPropagation()}
		onTouchStart={(e) => e.stopPropagation()}
	  >
		<div 
		  className="keyboard-draggable bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl p-4 text-white cursor-grab active:cursor-grabbing touch-none border-b-4 border-blue-700"
		  onMouseDown={handleMouseDown}
		  onTouchStart={handleTouchStart}
		  style={{ touchAction: 'none' }}
		>
		  <div className="flex justify-between items-center">
			<div className="flex items-center space-x-3">
			  <FaKeyboard className="w-6 h-6" />
			  <div>
				<h3 className="font-bold text-lg">{getInputLabel()}</h3>
				<p className="text-blue-100 text-sm flex items-center">
				  <span className="inline-block w-3 h-3 bg-white bg-opacity-50 rounded-full mr-1 animate-pulse"></span>
				  Drag untuk memindahkan • Gunakan keyboard virtual
				</p>
			  </div>
			</div>
			<button
			  onClick={onClose}
			  className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all touch-friendly min-w-[44px] min-h-[44px] flex items-center justify-center border-2 border-white border-opacity-30"
			  style={{ touchAction: 'manipulation' }}
			>
			  <FaTimes className="w-5 h-5" />
			</button>
		  </div>
		  
		  <div className="mt-2 flex justify-center">
			<div className="w-20 h-1 bg-white bg-opacity-50 rounded-full"></div>
		  </div>
		</div>

		<div className="p-4 bg-gray-50 bg-opacity-60 border-b-2 border-gray-300">
		  <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-inner border-2 border-gray-200">
			<div className="text-sm text-gray-500 mb-2 flex justify-between">
			  <span>Input Preview:</span>
			  <span className="text-blue-500 font-medium">{value.length} karakter</span>
			</div>
			<div className="text-lg font-mono min-h-[28px] p-2 bg-gray-50 bg-opacity-70 rounded-lg border-2 border-blue-300">
			  {value || <span className="text-gray-400">Ketik menggunakan keyboard virtual...</span>}
			  <span className="ml-1 animate-pulse text-blue-500">|</span>
			</div>
		  </div>
		</div>

		<div className="p-4 bg-transparent" style={{ touchAction: 'manipulation' }}>
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
				  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 border-[3px] border-gray-500 shadow-sm"></div>
				  
				  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-0"></div>
				  
				  <div className="absolute inset-[3px] rounded-lg bg-white bg-opacity-95 flex items-center justify-center z-10 group-hover:bg-opacity-100 transition-all duration-300">
					{isShift && !isSymbol ? key.toUpperCase() : key}
				  </div>
				  
				  <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/40 group-hover:shadow-xl transition-all duration-300"></div>
				</button>
			  ))}
			</div>
		  ))}

		  <div className="flex justify-center space-x-1 mt-4">
			<button
			  onClick={() => handleSpecialKey('shift')}
			  className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly border-2 ${
				isShift 
				  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 border-blue-600' 
				  : 'bg-white bg-opacity-90 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
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
			  className={`flex-1 max-w-[120px] h-14 rounded-xl font-medium transition-all touch-friendly border-2 ${
				isSymbol 
				  ? 'bg-purple-500 text-white shadow-lg shadow-purple-200 border-purple-600' 
				  : 'bg-white bg-opacity-90 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
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
			  className="flex-1 max-w-[200px] h-14 bg-white bg-opacity-90 border-2 border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 transition-all touch-friendly text-gray-600 font-medium"
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

		<div className="bg-gray-100 bg-opacity-70 rounded-b-xl p-3 border-t-2 border-gray-300">
		  <div className="text-center text-sm text-gray-600">
			💡 Tips: Drag header untuk memindahkan • SHIFT untuk huruf kapital • 123 untuk simbol
		  </div>
		</div>
	  </div>
	</div>
  );
};

export default VirtualKeyboard;