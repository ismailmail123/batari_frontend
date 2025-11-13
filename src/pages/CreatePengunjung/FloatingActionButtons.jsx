import { FaKeyboard, FaSearch } from "react-icons/fa";

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
		
		<div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
		  {isKeyboardEnabled ? 'Nonaktifkan' : 'Aktifkan'} Keyboard Virtual
		  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
		</div>
	  </button>

	  <button
		onClick={onCheckData}
		className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 transform hover:scale-110 animate-pulse"
		title="Cek Kelengkapan Data"
	  >
		<FaSearch className="w-6 h-6" />
		
		<div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
		  Cek Kelengkapan Data
		  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
		</div>
	  </button>

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

export default FloatingActionButtons;