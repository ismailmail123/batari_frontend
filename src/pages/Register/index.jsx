// import { useState } from "react";
// import useAuthStore from "../../store/useAuthStore";
// import {
//   Eye,
//   EyeOff,
//   Loader2,
//   Lock,
//   Mail,
//   User,
//   Image as ImageIcon,
//   MapPin,
//   Phone,
//   Calendar,
//   VenusAndMars,
//   MessageSquare,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import AuthImagePattern from "../Login/AuthImagePattern";
// import toast from "react-hot-toast";

// const SignUpPage = () => {
//   const [step, setStep] = useState(1); // Langkah saat ini
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     nama: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     alamat: "",
//     photo: null,
//     hp: "",
//     jenis_kelamin: "",
//     tempat_lahir: "",
//     tanggal_lahir: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();
//   const navigate = useNavigate();

//   // Validasi setiap langkah
//   const validateStep = () => {
//     switch (step) {
//       case 1:
//   if (!formData.nama.trim()) return toast.error("Nama lengkap wajib diisi");
//   if (!formData.email.trim()) return toast.error("Email wajib diisi");
//   if (!/\S+@\S+\.\S+/.test(formData.email))
//     return toast.error("Format email tidak valid");
//   if (!formData.password) return toast.error("Password wajib diisi");
//   if (formData.password.length < 6)
//     return toast.error("Password minimal 6 karakter");
//   if (formData.password !== formData.confirmPassword)
//     return toast.error("Password dan konfirmasi password tidak sama"); // Validasi konfirmasi password
//   break;
//       case 2:
//         if (!formData.photo) return toast.error("Foto profil wajib diisi");
//         if (!formData.hp.trim())
//           return toast.error("Nomor telepon wajib diisi");
//         if (!formData.tempat_lahir.trim())
//           return toast.error("Tempat lahir wajib diisi");
//         if (!formData.tanggal_lahir)
//           return toast.error("Tanggal lahir wajib diisi");
//         break;
//       case 3:
//         if (!formData.jenis_kelamin)
//           return toast.error("Jenis kelamin wajib diisi");
//         if (!formData.alamat.trim()) return toast.error("Alamat wajib diisi");
//         break;
//       default:
//         break;
//     }
//     return true;
//   };

//   // Navigasi ke langkah berikutnya
//   const handleNextStep = () => {
//     const isValid = validateStep();
//     if (isValid) setStep(step + 1);
//   };

//   // Navigasi ke langkah sebelumnya
//   const handlePrevStep = () => {
//     setStep(step - 1);
//   };

//   // Handle submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const isValid = validateStep();
//     if (isValid) {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataToSend.append(key, formData[key]);
//       });
//       // Panggil fungsi signup
//       await signup(formDataToSend);

//       // Simpan email di localStorage sebelum signup
//       localStorage.setItem("email", formData.email);

//       window.location.href = "/otp";
//       toast.success("Pendaftaran berhasil");
//     }
//   };

//   // Handle perubahan file foto
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, photo: file });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-50 to-purple-50">
//       {/* Left Side - Form */}
//       <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2">
//               <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
//                 <MessageSquare className="w-7 h-7 text-blue-600" />
//               </div>
//               <h1 className="text-3xl font-bold mt-4 text-gray-900">
//                 Buat Akun
//               </h1>
//               <p className="text-gray-500">Langkah {step} dari 3</p>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Langkah 1: Informasi Dasar */}
//             {step === 1 && (
//               <>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Nama Lengkap
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <User className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       placeholder="John Doe"
//                       value={formData.nama}
//                       onChange={(e) =>
//                         setFormData({ ...formData, nama: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       placeholder="you@example.com"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       placeholder="••••••••"
//                       value={formData.password}
//                       onChange={(e) =>
//                         setFormData({ ...formData, password: e.target.value })
//                       }
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                       ) : (
//                         <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//   <label className="block text-sm font-medium text-gray-700 mb-2">
//     Konfirmasi Password
//   </label>
//   <div className="relative">
//     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//       <Lock className="h-5 w-5 text-gray-400" />
//     </div>
//     <input
//       type={showPassword ? "text" : "password"}
//       className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//       placeholder="••••••••"
//       value={formData.confirmPassword}
//       onChange={(e) =>
//         setFormData({ ...formData, confirmPassword: e.target.value })
//       }
//     />
//     <button
//       type="button"
//       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//       onClick={() => setShowPassword(!showPassword)}
//     >
//       {showPassword ? (
//         <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//       ) : (
//         <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//       )}
//     </button>
//   </div>
// </div>
//               </>
//             )}
//             {step < 3 ? (
//   <button
//     type="button"
//     className={`bg-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-700 transition-all ${
//       formData.password !== formData.confirmPassword ? "opacity-50 cursor-not-allowed" : ""
//     }`}
//     onClick={handleNextStep}
//     disabled={formData.password !== formData.confirmPassword} // Nonaktifkan tombol jika password tidak sama
//   >
//     Selanjutnya
//   </button>
// ) : (
//   <button
//     type="submit"
//     className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
//     disabled={isSigningUp}
//   >
//     {isSigningUp ? "Membuat Akun..." : "Buat Akun"}
//   </button>
// )}

//             {/* Langkah 2: Informasi Profil */}
//             {step === 2 && (
//               <>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Foto Profil
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <ImageIcon className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="file"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       accept="image/*"
//                       onChange={handleFileChange}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Nomor Telepon
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Phone className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       placeholder="+62 123 4567 8901"
//                       value={formData.hp}
//                       onChange={(e) =>
//                         setFormData({ ...formData, hp: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Tempat Lahir
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <MapPin className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       placeholder="Jakarta"
//                       value={formData.tempat_lahir}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           tempat_lahir: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Tanggal Lahir
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Calendar className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="date"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       value={formData.tanggal_lahir}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           tanggal_lahir: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Langkah 3: Informasi Tambahan */}
//             {step === 3 && (
//               <>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Jenis Kelamin
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <VenusAndMars className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <select
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       value={formData.jenis_kelamin}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           jenis_kelamin: e.target.value,
//                         })
//                       }
//                     >
//                       <option value="">Pilih Jenis Kelamin</option>
//                       <option value="laki-laki">Laki-laki</option>
//                       <option value="perempuan">Perempuan</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Alamat
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <MapPin className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                       placeholder="Jl. Contoh No. 123"
//                       value={formData.alamat}
//                       onChange={(e) =>
//                         setFormData({ ...formData, alamat: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Tombol Navigasi */}
//             <div className="flex justify-between">
//               {step > 1 && (
//                 <button
//                   type="button"
//                   className="bg-gray-100 text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
//                   onClick={handlePrevStep}
//                 >
//                   Kembali
//                 </button>
//               )}
//               {step < 3 ? (
//                 <button
//                   type="button"
//                   className="bg-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
//                   onClick={handleNextStep}
//                 >
//                   Selanjutnya
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
//                   disabled={isSigningUp}
//                 >
//                   {isSigningUp ? "Membuat Akun..." : "Buat Akun"}
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Image/Pattern */}
//       <div className="flex-1 hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
//         <AuthImagePattern
//           title={"Selamat Datang!"}
//           subtitle={
//             "Buat akun untuk bergabung dengan komunitas kami dan mulai berbagi."
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
  Image as ImageIcon,
  MapPin,
  Phone,
  Calendar,
  VenusAndMars,
  MessageSquare,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthImagePattern from "../Login/AuthImagePattern";
import toast from "react-hot-toast";
import logoimipas from "../../assets/logokemenimipas.png";

const SignUpPage = () => {
  const [step, setStep] = useState(1); // Langkah saat ini
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "", // Tambahkan state untuk konfirmasi password
    alamat: "",
    photo: null,
    hp: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const navigate = useNavigate();

  // Validasi setiap langkah
  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.nama.trim()) return toast.error("Nama lengkap wajib diisi");
        if (!formData.email.trim()) return toast.error("Email wajib diisi");
        if (!/\S+@\S+\.\S+/.test(formData.email))
          return toast.error("Format email tidak valid");
        if (!formData.password) return toast.error("Password wajib diisi");
        if (formData.password.length < 6)
          return toast.error("Password minimal 6 karakter");
        if (formData.password !== formData.confirmPassword)
          return toast.error("Password dan konfirmasi password tidak sama"); // Validasi konfirmasi password
        break;
      case 2:
        if (!formData.photo) return toast.error("Foto profil wajib diisi");
        if (!formData.hp.trim())
          return toast.error("Nomor telepon wajib diisi");
        if (!formData.tempat_lahir.trim())
          return toast.error("Tempat lahir wajib diisi");
        if (!formData.tanggal_lahir)
          return toast.error("Tanggal lahir wajib diisi");
        break;
      case 3:
        if (!formData.jenis_kelamin)
          return toast.error("Jenis kelamin wajib diisi");
        if (!formData.alamat.trim()) return toast.error("Alamat wajib diisi");
        break;
      default:
        break;
    }
    return true;
  };

  // Navigasi ke langkah berikutnya
  const handleNextStep = () => {
    const isValid = validateStep();
    if (isValid) setStep(step + 1);
  };

  // Navigasi ke langkah sebelumnya
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateStep();
    if (isValid) {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Simpan email di localStorage sebelum signup
      localStorage.setItem("email", formData.email);

      // Panggil fungsi signup
      await signup(formDataToSend);
      window.location.href = "/otp";
      toast.success("Pendaftaran berhasil");
    }
  };

  // Handle perubahan file foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
    }
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
                <img src={logoimipas} className="w-7 h-7 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold mt-4 text-gray-900">
                Buat Akun
              </h1>
              <p className="text-gray-500">Langkah {step} dari 3</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Langkah 1: Informasi Dasar */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
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
                  {/* Petunjuk password */}
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      Password minimal berisi 8 karakter yang terdiri dari 1 huruf kapital, huruf kecil, 1 simbol, dan 1 angka.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konfirmasi Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value })
                      }
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
              </>
            )}

            {/* Langkah 2: Informasi Profil */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Foto Profil
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ImageIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="file"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="+62 123 4567 8901"
                      value={formData.hp}
                      onChange={(e) =>
                        setFormData({ ...formData, hp: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tempat Lahir
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Jakarta"
                      value={formData.tempat_lahir}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tempat_lahir: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Lahir
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      value={formData.tanggal_lahir}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tanggal_lahir: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {/* Langkah 3: Informasi Tambahan */}
            {step === 3 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Kelamin
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <VenusAndMars className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      value={formData.jenis_kelamin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jenis_kelamin: e.target.value,
                        })
                      }
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="laki-laki">Laki-laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Jl. Contoh No. 123"
                      value={formData.alamat}
                      onChange={(e) =>
                        setFormData({ ...formData, alamat: e.target.value })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {/* Tombol Navigasi */}
            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  className="bg-gray-100 text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
                  onClick={handlePrevStep}
                >
                  Kembali
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  className={`bg-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-700 transition-all ${
                    formData.password !== formData.confirmPassword ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleNextStep}
                  disabled={formData.password !== formData.confirmPassword} // Nonaktifkan tombol jika password tidak sama
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-blue-600 text-black py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
                  onClick={handleSubmit}
                  disabled={isSigningUp}
                >
                  {isSigningUp ? "Membuat Akun..." : "Buat Akun"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <div className="flex-1 hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <AuthImagePattern
          title={"Selamat Datang!"}
          subtitle={
            "Buat akun untuk bergabung dengan komunitas kami dan mulai berbagi."
          }
        />
      </div>
    </div>
  );
};

export default SignUpPage;