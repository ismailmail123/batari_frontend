
import { Link, useNavigate } from "react-router-dom";
import  useAuthStore  from "../../store/useAuthStore";
import { BaggageClaim, FolderClock, LogOut, MessageCircle, MessageCircleMore, MessageSquare, Rat, RatIcon, RatioIcon, Settings, ShoppingCart, Sparkles, User, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logokemenimipas.png";
import { FaHome } from "react-icons/fa";

const NavbarWbp = () => {
  const { logout, authUser } = useAuthStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!authUser) {
        navigate("/auth");
      }
    }, [authUser, navigate]);


      // Jika authUser null, jangan render apa pun
      if (!authUser) {
        return null; // atau return <LoadingSpinner /> jika Anda ingin menampilkan loading
      }
    
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  //   const handleLogout = async () => {
  //     try {
  //         // Panggil endpoint logout di backend
  //         const response = await fetch("https://batarirtnbantaeng.cloud /v1/logout", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //                 Authorization: `Bearer ${localStorage.getItem("token")}`, // Kirim token untuk validasi
  //             },
  //         });
  
  //         if (response.ok) {
  //             // Hapus token dan data pengguna dari localStorage
  //             localStorage.removeItem("token");
  //             localStorage.removeItem("userData");
  
  //             // Redirect pengguna ke halaman login atau halaman lain
  //             window.location.href = "/auth"; // Contoh redirect ke halaman login
  //         } else {
  //             console.error("Logout failed:", await response.json());
  //         }
  //     } catch (error) {
  //         console.error("Error during logout:", error);
  //     }
  // };

  const handleLogout = () => {
    logout();
    // window.location.reload();
    navigate("/auth")
  }
  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
        
          <div className="flex items-center gap-8">
              {/* Optional: Tampilkan indikator status koneksi */}
      
            <Link to="/"
        style={{ textDecoration: "none" }}
             className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <img src={logo} alt="Kemenimipas" />
              </div>
              <h5 className="text-lg font-bold">Rumah Tahanan Negara Kelas II B Bantaeng</h5>
            </Link>
          </div>

          <div className="flex items-center gap-4">
      

      {/* Tombol Titik Tiga dan Menu Dropdown */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
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
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>

        {/* Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div className="flex flex-col p-2">
              

              {authUser.user.role === 'admin' && (
                <>
                  {/* <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <User className="size-5" />
                    <span>Profile</span>
                  </Link> */}
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <FaHome className="size-5" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/wargabinaan-form"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <BaggageClaim className="size-5" />
                    <span>Tambah Warga Binaan</span>
                  </Link>
                  <Link
                    to="/wbp-list"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Wallet className="size-5" />
                    <span>Daftar List Warga Binaan</span>
                  </Link>
                  <Link
                    to="/pengunjung"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Wallet className="size-5" />
                    <span>Daftar List Kunjungan</span>
                  </Link>
                  <Link
                    to="/admin-panel"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Wallet className="size-5" />
                    <span>Admin Panel</span>
                  </Link>
                 
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                  >
                    <LogOut className="size-5" />
                    <span>Logout</span>
                  </button>
                </>
              )}

              {authUser.user.role === 'p2u' && (
                <>
                  
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <FaHome className="size-5" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/pengunjung"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Wallet className="size-5" />
                    <span>Daftar List Kunjungan</span>
                  </Link>
                 
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                  >
                    <LogOut className="size-5" />
                    <span>Logout</span>
                  </button>
                </>
              )}
              {authUser.user.role === 'user' && (
                <>
                  
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <FaHome className="size-5" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/pengunjung"
                    style={{ textDecoration: "none", color: "black" }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Wallet className="size-5" />
                    <span>Daftar List Kunjungan</span>
                  </Link>
                 
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-left"
                  >
                    <LogOut className="size-5" />
                    <span>Logout</span>
                  </button>
                </>
              )}
              <Link
                to="/settings"
                    style={{ textDecoration: "none", color: "black" }}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
        </div>
      </div>
    </header>
  );
};
export default NavbarWbp;
