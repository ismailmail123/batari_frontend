import { useEffect, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import AuthImagePattern from "./AuthImagePattern";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import logoimipas from "../../assets/logokemenimipas.png";
import { FaMotorcycle, FaBolt, FaMapMarkerAlt, FaMoneyBillWave, FaGoogle, FaFacebook } from "react-icons/fa";
import {jwtDecode} from "jwt-decode";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const error = queryParams.get('error');
  const message = queryParams.get('message');

  if (token) {
    const userData = jwtDecode(token);
    localStorage.setItem("authUser", JSON.stringify({user: userData}));
    localStorage.setItem('token', token);
    
    // Redirect ke halaman sebelumnya atau home
    const preLoginPath = localStorage.getItem('preLoginPath') || '/';
    localStorage.removeItem('preLoginPath');
    window.location.href = preLoginPath;
  }

  if (error) {
    if (error === 'provider_mismatch' && message) {
      toast.error(decodeURIComponent(message));
    } else {
      toast.error('Google login failed');
    }
    
    // Bersihkan URL dari parameter error
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }
}, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData); // Jalankan login
      navigate("/"); // Alihkan ke halaman utama hanya jika login berhasil
      window.location.reload(); // Reload halaman agar data terupdate
    } catch (error) {
      console.error("Error : ", error);
      toast.error(error.message || "Login gagal. Periksa email dan password Anda."); // Tampilkan pesan error
    }
  };

  const handleGoogleLogin = () => {
  // Simpan state sebelumnya untuk redirect setelah login
  setIsGoogleLoading(true);
  const previousPath = window.location.pathname;
  localStorage.setItem('preLoginPath', '/');
  
  const selectedRole = 'user';
  const state = JSON.stringify({ 
    role: selectedRole,
    redirect: previousPath 
  });
  const encodedState = encodeURIComponent(state);
  
  window.location.href = `https://batarirtnbantaeng.cloud/tabeom/auth/google?state=${encodedState}&role=${selectedRole}`;
};



  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <img src={logoimipas} className="w-7 h-7 text-blue-600 rounded-full" />
              </div>
              <h1 className="text-3xl font-bold mt-4 text-gray-900">Selamat Datang !</h1>
              <p className="text-gray-500">Masuk ke akun anda</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-black py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Memuat...
                </div>
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          <div className="flex flex-col space-y-3 pt-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Atau Lanjut Dengan</span>
                </div>
              </div>

          <div className="flex items-center w-full justify-center mt-10">
                <button
  onClick={handleGoogleLogin}
  disabled={isGoogleLoading}
  className="w-48 inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
>
  {isGoogleLoading ? (
    <Loader2 className="h-4 w-4 animate-spin" />
  ) : (
    <FaGoogle className="text-red-500" />
  )}
  Google
</button>
              </div>
              </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
             Tidak memiliki akun?{" "}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                Buat akun
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <div className="flex-1 hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <AuthImagePattern
          title={"Selamat datang Kembali!"}
          subtitle={"Masuk dan bergabung dengan komunitas kami dan mulai berbagi.."}
        />
      </div>
    </div>
  );
};

export default LoginPage;