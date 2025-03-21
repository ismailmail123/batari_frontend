import { useEffect, useState, useRef, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserIcon,
  PlusIcon,
  ShieldCheckIcon,
  UsersIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logokemenimipas.png";
import useAuthStore from "../../store/useAuthStore";
import useDataStore from "../../store/useDataStore";
import axios from "axios";
import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { BaggageClaim, LogOut, Settings, Wallet } from "lucide-react";

export default function HomePage() {
  const { authUser, logout } = useAuthStore();
  const {
    pengunjungs,
    fetchPengunjung,
    updatePengunjung,
    getNomorAntrianTerakhir,
  } = useDataStore(); // Tambahkan getNomorAntrianTerakhir
  const [searchKode, setSearchKode] = useState("");
  const [selectedPengunjung, setSelectedPengunjung] = useState(null);
  const [antrian, setAntrian] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const updateAntrian = useDataStore((state) => state.updateAntrian);
  const [lastAntrian, setLastAntrian] = useState("000");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Redirect ke halaman login jika authUser null
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  console.log("auth user", authUser)


  useEffect(() => {
    const fetchLastAntrian = async () => {
      const antrian = await getNomorAntrianTerakhir();
      if (antrian) {
        setLastAntrian(antrian); // Format "001"
      }
    };

    fetchLastAntrian();
  }, [getNomorAntrianTerakhir]);

  // Fetch data pengunjung saat komponen dimuat
  useEffect(() => {
    fetchPengunjung();
  }, [fetchPengunjung]);

  // Handle klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

// Filter pengunjung berdasarkan kode dan yang belum memiliki nomor antrian
const filteredPengunjungs = pengunjungs.filter((pengunjung) => {
  const isKodeMatch = pengunjung.kode.toLowerCase().includes(searchKode.toLowerCase());
  const hasNoAntrian = !pengunjung.antrian; // Hanya tampilkan pengunjung yang belum memiliki antrian
  return isKodeMatch && hasNoAntrian;
});

  // Handle pemilihan pengunjung
  const handleSelectPengunjung = async (pengunjung) => {
    setSearchKode(pengunjung.kode);
    setSelectedPengunjung(pengunjung);
    setIsDropdownOpen(false);
  };
  

  // Submit nomor antrian
  const handleSubmitAntrian = async () => {
    try {
      if (!selectedPengunjung?.kode) {
        setError("Pilih pengunjung terlebih dahulu");
        return;
      }

      const updatedPengunjung = await updateAntrian(selectedPengunjung.kode);

      if (updatedPengunjung) {
        setAntrian(updatedPengunjung.antrian);
        setSuccess("Nomor antrian berhasil disimpan");
        setError("");
        window.location.reload();
        setTimeout(() => {
          setSuccess("");
          setSearchKode("");
          setSelectedPengunjung(null);
          setAntrian(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Gagal menyimpan antrian:", error);
      setError("Gagal menyimpan nomor antrian");
    }
  };

    // Jika authUser null, jangan render apa pun
    if (!authUser) {
      return null; // atau return <LoadingSpinner /> jika Anda ingin menampilkan loading
    }
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  const handleLogout = () => {
    logout();
    // window.location.reload();
    navigate("/login")
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo Kemenimipas"
              className="h-12 w-12 rounded-full"
            />
            <h1 className="text-2xl font-bold">Sistem Registrasi Kunjungan</h1>
          </div>

          <div className="flex-col items-center space-x-4" onClick={toggleMenu}>
            <div className="flex justify-center" > 
            <img className="w-10 rounded-full" src={authUser.user?.photo} ></img>
            </div>
            <div className="flex justify-center">
            <h3 className="text-xl text-end">{authUser.user?.role}</h3>
            </div>
            <span className="text-sm">
              Selamat Datang, {authUser.user?.nama}
            </span>
            </div>
        </div>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col p-2">
                      <>
                          
                          <button
                          onClick={handleLogout}
                            className="flex items-center text-black gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                          >
                            <LogOut className="size-5" />
                            <span>Logout</span>
                          </button>
                        </>
                    </div>
                  </div>
                )}
      </header>
      {authUser.user?.role === "admin" && (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Ambil Nomor Antrian */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <TicketIcon className="h-12 w-12 text-yellow-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Ambil Nomor Antrian
                </h2>

                <div className="relative" ref={dropdownRef}>
                  <input
                    type="text"
                    value={searchKode}
                    onChange={(e) => {
                      setSearchKode(e.target.value);
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    placeholder="Masukkan kode pengunjung..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
                  />

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredPengunjungs.length > 0 ? filteredPengunjungs.map((pengunjung) => (
                        <div
                          key={pengunjung.id}
                          onClick={() => handleSelectPengunjung(pengunjung)}
                          className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100"
                        >
                          <div className="font-medium">{pengunjung.nama}</div>
                          <div className="text-sm text-gray-500">
                            Kode: {pengunjung.kode}
                          </div>
                        </div>
                      )):(<div className="p-3 text-gray-500">Tidak ada data</div>)}
                    </div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
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

                {/* {selectedPengunjung && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="mb-2">
                  <span className="font-semibold">Nama:</span> {selectedPengunjung.nama}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Kode:</span> {selectedPengunjung.kode}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Nomor Antrian:</span>
                  <div className="text-2xl font-bold text-blue-600 mt-1">
                    {antrian}
                  </div>
                </div>
                <button
                  onClick={handleSubmitAntrian}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Konfirmasi Ambil Antrian
                </button>
              </div>
            )} */}

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
                    <button
                      onClick={handleSubmitAntrian}
                      className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Generate Nomor Antrian
                    </button>

                    {antrian && (
                      <div className="mt-4">
                        <span className="font-semibold">Nomor Antrian:</span>
                        <div className="text-2xl font-bold text-blue-600 mt-1">
                          {antrian}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && (
                  <div className="text-green-500 mt-2">{success}</div>
                )}
              </div>

              {/* Daftar Warga Binaan */}
              <Link
                to="/wbp-list"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Daftar Warga Binaan
                </h2>
                <p className="text-gray-600">
                  Lihat dan kelola data warga binaan
                </p>
              </Link>

              {/* Daftar Pengunjung */}
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

              {/* Tambah Warga Binaan */}
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

              {/* Tambah Pengunjung */}
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

              {/* Admin Panel */}
              <Link
                to="/admin-panel"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ShieldCheckIcon className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
                <p className="text-gray-600">Pengaturan sistem dan pengguna</p>
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
      {authUser.user?.role === "p2u" && (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tambah Pengunjung */}
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
              {/* Daftar Pengunjung */}
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
                {/* Footer */}
      <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
            reserved
          </p>
        </div>
      </footer>
        </>
      )}
      {authUser.user?.role === "user" && (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tambah Pengunjung */}
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
              {/* Daftar Pengunjung */}
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
                {/* Footer */}
      <footer className="bg-blue-600 text-white mt-12 py-4 absolute bottom-0 right-0 left-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Rumah Tahanan Negara Kelas II B Bantaeng - All rights
            reserved
          </p>
        </div>
      </footer>
        </>
      )}


    </div>
  );
}
