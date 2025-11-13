// import { useState } from "react";
// import toast from "react-hot-toast";
// import { FaQrcode, FaSearch, FaSpinner, FaUser } from "react-icons/fa";
// import useDataStore from "../../store/useDataStore";
// import DetailModal from "./DetailModal";

// const SearchSection = ({ 
//   onSelectPengunjung, 
//   onUseForNewVisit,
//   pengunjungs 
// }) => {
//   const { searchAllPengunjung } = useDataStore();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchType, setSearchType] = useState("nama"); // 'nama', 'kode', 'id'
//   const [searchTujuan, setSearchTujuan] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedPengunjung, setSelectedPengunjung] = useState(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [isSearching, setIsSearching] = useState(false);

//   // Fungsi pencarian yang menggunakan backend
//   const performSearch = async () => {
// 	if (!searchQuery.trim()) {
// 	  setSearchResults([]);
// 	  return;
// 	}

// 	setIsSearching(true);
	
// 	try {
// 	  let query = searchQuery;
	  
// 	  // Jika tipe pencarian adalah ID, pastikan formatnya benar
// 	  if (searchType === 'id') {
// 		query = searchQuery.replace(/\D/g, ''); // Hanya angka
// 	  }
	  
// 	  // Jika tipe pencarian adalah kode, uppercase
// 	  if (searchType === 'kode') {
// 		query = searchQuery.toUpperCase();
// 	  }
	  
// 	  const results = await searchAllPengunjung(query);
	  
// 	  // Filter tambahan berdasarkan tujuan jika dipilih
// 	  let filteredResults = results;
// 	  if (searchTujuan) {
// 		filteredResults = results.filter(pengunjung => 
// 		  pengunjung.tujuan === searchTujuan
// 		);
// 	  }
	  
// 	  setSearchResults(filteredResults);
// 	} catch (error) {
// 	  console.error("Error searching pengunjung:", error);
// 	  toast.error("Gagal melakukan pencarian");
// 	  setSearchResults([]);
// 	} finally {
// 	  setIsSearching(false);
// 	}
//   };

//   // Reset search
//   const resetSearch = () => {
// 	setSearchQuery("");
// 	setSearchType("nama");
// 	setSearchTujuan("");
// 	setSearchResults([]);
//   };

//   // Handle select pengunjung untuk detail
//   const handleSelectPengunjung = (pengunjung) => {
// 	setSelectedPengunjung(pengunjung);
// 	setShowDetailModal(true);
//   };

//   // Handle use data untuk kunjungan baru
//   const handleUseData = (editedData) => {
//   console.log("Data diterima di SearchSection:", editedData);
//   onUseForNewVisit(editedData);
//   setShowDetailModal(false);
//   resetSearch();
// };
//   return (
// 	<div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 shadow-lg">
// 	  <div className="flex items-center justify-between mb-4">
// 		<h3 className="text-xl font-bold text-gray-800 flex items-center">
// 		  <FaSearch className="mr-3 text-blue-600" />
// 		  Cari Data Pengunjung Sebelumnya
// 		</h3>
// 		<button
// 		  onClick={resetSearch}
// 		  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
// 		>
// 		  Reset
// 		</button>
// 	  </div>

// 	  {/* Search Input dan Filter */}
// 	  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// 		<div>
// 		  <label className="block text-sm font-medium text-gray-700 mb-2">
// 			Cari Berdasarkan
// 		  </label>
// 		  <select
// 			value={searchType}
// 			onChange={(e) => setSearchType(e.target.value)}
// 			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// 		  >
// 			<option value="nama">Nama</option>
// 			<option value="kode">Kode</option>
// 			<option value="id">ID</option>
// 			<option value="nik">NIK</option>
// 		  </select>
// 		</div>

// 		<div className="md:col-span-2">
// 		  <label className="block text-sm font-medium text-gray-700 mb-2">
// 			Kata Kunci Pencarian
// 		  </label>
// 		  <div className="relative">
// 			<input
// 			  type="text"
// 			  value={searchQuery}
// 			  onChange={(e) => setSearchQuery(e.target.value)}
// 			  placeholder={
// 				searchType === 'nama' ? "Masukkan nama pengunjung..." :
// 				searchType === 'kode' ? "Masukkan kode pengunjung..." :
// 				searchType === 'id' ? "Masukkan ID pengunjung..." :
// 				"Masukkan NIK pengunjung..."
// 			  }
// 			  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// 			  onKeyPress={(e) => e.key === 'Enter' && performSearch()}
// 			/>
// 			<button
// 			  onClick={performSearch}
// 			  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
// 			>
// 			  <FaSearch className="w-4 h-4" />
// 			</button>
// 		  </div>
// 		</div>

// 		<div>
// 		  <label className="block text-sm font-medium text-gray-700 mb-2">
// 			Filter Tujuan
// 		  </label>
// 		  <select
// 			value={searchTujuan}
// 			onChange={(e) => setSearchTujuan(e.target.value)}
// 			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// 		  >
// 			<option value="">Semua Tujuan</option>
// 			<option value="Berkunjung">Berkunjung</option>
// 			<option value="Menitip barang">Menitip Barang</option>
// 		  </select>
// 		</div>
// 	  </div>

// 	  {/* Search Results */}
// 	  {isSearching && (
// 		<div className="text-center py-8">
// 		  <FaSpinner className="animate-spin mx-auto text-blue-500 text-2xl mb-2" />
// 		  <p className="text-gray-600">Mencari data pengunjung...</p>
// 		</div>
// 	  )}

// 	  {searchResults.length > 0 && (
// 		<div className="mb-4">
// 		  <div className="flex justify-between items-center mb-3">
// 			<p className="text-sm text-gray-600">
// 			  Ditemukan {searchResults.length} data pengunjung
// 			</p>
// 		  </div>
// 		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto p-2">
// 			{searchResults.map((pengunjung, index) => (
// 			  <div
// 				key={pengunjung.id || index}
// 				onClick={() => handleSelectPengunjung(pengunjung)}
// 				className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer p-4"
// 			  >
// 				<div className="flex items-start space-x-3">
// 				  {/* Foto Pengunjung */}
// 				  <div className="flex-shrink-0">
// 					{pengunjung.photo_pengunjung ? (
// 					  <img
// 						src={pengunjung.photo_pengunjung}
// 						alt={pengunjung.nama}
// 						className="w-16 h-16 rounded-lg object-cover border-2 border-gray-300"
// 					  />
// 					) : (
// 					  <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center border-2 border-gray-300">
// 						<FaUser className="text-gray-400 text-xl" />
// 					  </div>
// 					)}
// 				  </div>

// 				  {/* Info Pengunjung */}
// 				  <div className="flex-1 min-w-0">
// 					<h4 className="font-semibold text-gray-800 truncate">
// 					  {pengunjung.nama}
// 					</h4>
// 					<div className="space-y-1 mt-2">
// 					  <div className="flex items-center text-sm text-gray-600">
// 						<FaUser className="mr-2 text-green-500" />
// 						<span className="truncate">
// 						  {pengunjung.warga_binaan?.nama || 'Tidak ada WBP'}
// 						</span>
// 					  </div>
// 					  <div className="flex items-center text-sm text-gray-600">
// 						<FaQrcode className="mr-2 text-blue-500" />
// 						<span>Kode: {pengunjung.kode}</span>
// 					  </div>
// 					  <div className="flex items-center text-sm">
// 						<span className={`px-2 py-1 rounded-full text-xs font-medium ${
// 						  pengunjung.tujuan === 'Berkunjung' 
// 							? 'bg-green-100 text-green-800' 
// 							: 'bg-orange-100 text-orange-800'
// 						}`}>
// 						  {pengunjung.tujuan}
// 						</span>
// 					  </div>
// 					</div>
// 				  </div>
// 				</div>
// 			  </div>
// 			))}
// 		  </div>
// 		</div>
// 	  )}

// 	  {searchQuery && searchResults.length === 0 && !isSearching && (
// 		<div className="text-center py-8 bg-white rounded-lg border-2 border-dashed border-gray-300">
// 		  <FaSearch className="mx-auto text-gray-400 text-3xl mb-3" />
// 		  <p className="text-gray-600">Tidak ditemukan data pengunjung</p>
// 		  <p className="text-sm text-gray-500 mt-1">
// 			Coba dengan kata kunci lain atau ubah filter tujuan
// 		  </p>
// 		</div>
// 	  )}

// 	  {/* Detail Modal - Diperbarui dengan tombol Gunakan */}
// 	  {showDetailModal && selectedPengunjung && (
//   <DetailModal
//     pengunjung={selectedPengunjung}
//     onClose={() => setShowDetailModal(false)}
//     onUse={handleUseData}
//   />
// )}
// 	</div>
//   );
// };

// export default SearchSection;

import { useState } from "react";
import toast from "react-hot-toast";
import { FaQrcode, FaSearch, FaSpinner, FaUser } from "react-icons/fa";
import useDataStore from "../../store/useDataStore";
import DetailModal from "./DetailModal";
import ScannerModal from "./ScannerModal"; // Pastikan komponen ini sudah diimpor

const SearchSection = ({ 
  onSelectPengunjung, 
  onUseForNewVisit,
  pengunjungs 
}) => {
  const { searchAllPengunjung } = useDataStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("nama"); // 'nama', 'kode', 'id'
  const [searchTujuan, setSearchTujuan] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPengunjung, setSelectedPengunjung] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showScanner, setShowScanner] = useState(false); // State untuk scanner

  // Fungsi pencarian yang menggunakan backend
  const performSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      let query = searchQuery;
      
      // Jika tipe pencarian adalah ID, pastikan formatnya benar
      if (searchType === 'id') {
        query = searchQuery.replace(/\D/g, ''); // Hanya angka
      }
      
      // Jika tipe pencarian adalah kode, uppercase
      if (searchType === 'kode') {
        query = searchQuery.toUpperCase();
      }
      
      const results = await searchAllPengunjung(query);
      
      // Filter tambahan berdasarkan tujuan jika dipilih
      let filteredResults = results;
      if (searchTujuan) {
        filteredResults = results.filter(pengunjung => 
          pengunjung.tujuan === searchTujuan
        );
      }
      
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching pengunjung:", error);
      toast.error("Gagal melakukan pencarian");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Reset search
  const resetSearch = () => {
    setSearchQuery("");
    setSearchType("nama");
    setSearchTujuan("");
    setSearchResults([]);
  };

  // Handle select pengunjung untuk detail
  const handleSelectPengunjung = (pengunjung) => {
    setSelectedPengunjung(pengunjung);
    setShowDetailModal(true);
  };

  // Handle use data untuk kunjungan baru
  const handleUseData = (editedData) => {
    console.log("Data diterima di SearchSection:", editedData);
    onUseForNewVisit(editedData);
    setShowDetailModal(false);
    resetSearch();
  };

  // Handle scan barcode untuk pencarian
  const handleScanBarcode = (scannedData) => {
    console.log("Data hasil scan:", scannedData);
    setSearchQuery(scannedData);
    setSearchType('kode'); // Default ke pencarian berdasarkan kode untuk barcode
    setShowScanner(false);
    
    // Beri feedback ke user
    toast.success(`Kode ter-scan: ${scannedData}`);
    
    // Otomatis melakukan pencarian setelah scan
    setTimeout(() => {
      performSearch();
    }, 500);
  };

  // Handle error scan
  const handleScanError = (error) => {
    console.error("Error scanning:", error);
    toast.error("Gagal memindai barcode");
  };

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <FaSearch className="mr-3 text-blue-600" />
          Cari Data Pengunjung Sebelumnya
        </h3>
        <button
          onClick={resetSearch}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
        >
          Reset
        </button>
      </div>

      {/* Search Input dan Filter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cari Berdasarkan
          </label>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="nama">Nama</option>
            <option value="kode">Kode</option>
            <option value="id">ID</option>
            <option value="nik">NIK</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kata Kunci Pencarian
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                searchType === 'nama' ? "Masukkan nama pengunjung..." :
                searchType === 'kode' ? "Masukkan kode pengunjung..." :
                searchType === 'id' ? "Masukkan ID pengunjung..." :
                "Masukkan NIK pengunjung..."
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-24"
              onKeyPress={(e) => e.key === 'Enter' && performSearch()}
            />
            
            {/* Tombol Search dan Scan */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <button
                onClick={() => setShowScanner(true)}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
                title="Scan Barcode"
                type="button"
              >
                <FaQrcode className="w-4 h-4" />
              </button>
              <button
                onClick={performSearch}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
                title="Cari Data"
                type="button"
              >
                <FaSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter Tujuan
          </label>
          <select
            value={searchTujuan}
            onChange={(e) => setSearchTujuan(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">Semua Tujuan</option>
            <option value="Berkunjung">Berkunjung</option>
            <option value="Menitip barang">Menitip Barang</option>
          </select>
        </div>
      </div>

      {/* Informasi Quick Action */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700 flex items-center">
          <FaQrcode className="mr-2" />
          <strong>Tips:</strong> Gunakan tombol scan <FaQrcode className="inline mx-1" /> untuk memindai barcode pengunjung existing
        </p>
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="text-center py-8">
          <FaSpinner className="animate-spin mx-auto text-blue-500 text-2xl mb-2" />
          <p className="text-gray-600">Mencari data pengunjung...</p>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-600">
              Ditemukan {searchResults.length} data pengunjung
            </p>
            {searchResults.length === 1 && (
              <button
                onClick={() => handleSelectPengunjung(searchResults[0])}
                className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
              >
                Gunakan Data
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto p-2">
            {searchResults.map((pengunjung, index) => (
              <div
                key={pengunjung.id || index}
                onClick={() => handleSelectPengunjung(pengunjung)}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer p-4"
              >
                <div className="flex items-start space-x-3">
                  {/* Foto Pengunjung */}
                  <div className="flex-shrink-0">
                    {pengunjung.photo_pengunjung ? (
                      <img
                        src={pengunjung.photo_pengunjung}
                        alt={pengunjung.nama}
                        className="w-16 h-16 rounded-lg object-cover border-2 border-gray-300"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                        <FaUser className="text-gray-400 text-xl" />
                      </div>
                    )}
                  </div>

                  {/* Info Pengunjung */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 truncate">
                      {pengunjung.nama}
                    </h4>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaUser className="mr-2 text-green-500" />
                        <span className="truncate">
                          {pengunjung.warga_binaan?.nama || 'Tidak ada WBP'}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaQrcode className="mr-2 text-blue-500" />
                        <span>Kode: {pengunjung.kode}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          pengunjung.tujuan === 'Berkunjung' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {pengunjung.tujuan}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchQuery && searchResults.length === 0 && !isSearching && (
        <div className="text-center py-8 bg-white rounded-lg border-2 border-dashed border-gray-300">
          <FaSearch className="mx-auto text-gray-400 text-3xl mb-3" />
          <p className="text-gray-600">Tidak ditemukan data pengunjung</p>
          <p className="text-sm text-gray-500 mt-1">
            Coba dengan kata kunci lain atau ubah filter tujuan
          </p>
          {searchType === 'kode' && (
            <div className="mt-3">
              <button
                onClick={() => setShowScanner(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center mx-auto"
              >
                <FaQrcode className="mr-2" />
                Scan Barcode Lagi
              </button>
            </div>
          )}
        </div>
      )}

      {/* Scanner Modal untuk Pencarian */}
      {showScanner && (
        <ScannerModal 
          isOpen={showScanner}
          onClose={() => setShowScanner(false)}
          onScan={handleScanBarcode}
          title="Scan Barcode Pengunjung"
          description="Arahkan kamera ke barcode/QR code pengunjung yang sudah ada"
        />
      )}

      {/* Detail Modal - Diperbarui dengan tombol Gunakan */}
      {showDetailModal && selectedPengunjung && (
        <DetailModal
          pengunjung={selectedPengunjung}
          onClose={() => setShowDetailModal(false)}
          onUse={handleUseData}
        />
      )}
    </div>
  );
};

export default SearchSection;