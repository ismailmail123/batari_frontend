// import axios from "axios";
// import { isTokenExpired } from './authUtils'; // Import fungsi utilitas
// import useAuthStore from '../store/useAuthStore';

// export const axiosInstance = axios.create({
//     baseURL: "https://api-invitation.xyz/api",
//     withCredentials: true,
// });

// axiosInstance.interceptors.request.use((config) => {
//     const { authUser } = useAuthStore.getState();
//     if (authUser && authUser.token) {
//         if (isTokenExpired(authUser.token)) {
//             const { logout } = useAuthStore.getState();
//             logout(); // Hapus token jika expired
//             // window.location.href = '/auth'; // Arahkan ke halaman login
//         } else {
//             config.headers.Authorization = `Bearer ${authUser.token}`; // Tambahkan token ke header
//         }
//     }
//     return config;
// });

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response; // Jika respons sukses, kembalikan respons
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             // Jika status 401 (Unauthorized), hapus token dan arahkan ke login
//             const { logout } = useAuthStore.getState();
//             logout(); // Hapus token dari state
//             // window.location.href = '/auth'; // Arahkan ke halaman login
//         }
//         return Promise.reject(error);
//     }
// );


import axios from "axios";
import { isTokenExpired } from './authUtils'; // Import fungsi utilitas untuk cek token kedaluwarsa
import useAuthStore from '../store/useAuthStore'; // Import store untuk akses token

// Buat instance axios
export const axiosInstance = axios.create({
    baseURL: "https://batarirtnbantaeng.cloud/tabeom/api",
    withCredentials: true, // Izinkan pengiriman credentials (cookie/token)
});

// // Tambahkan interceptor untuk request
// axiosInstance.interceptors.request.use(
//     async(config) => {
//         const token = localStorage.getItem("token"); // Ambil token dari local storage

//         // Jika token ada, tambahkan ke header Authorization
//         if (token) {
//             // Cek apakah token sudah kedaluwarsa
//             if (isTokenExpired(token)) {
//                 // Jika token kedaluwarsa, lakukan refresh token
//                 try {
//                     const newToken = await refreshToken();
//                     localStorage.setItem("token", newToken); // Simpan token baru
//                     config.headers.Authorization = `Bearer ${newToken}`; // Gunakan token baru
//                 } catch (error) {
//                     console.error("Gagal melakukan refresh token:", error);
//                     // Jika refresh token gagal, logout pengguna
//                     useAuthStore.getState().logout();
//                     throw new Error("Session expired. Please login again.");
//                 }
//             } else {
//                 // Jika token masih valid, gunakan token yang ada
//                 config.headers.Authorization = `Bearer ${token}`;
//             }
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Tambahkan interceptor untuk response
// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async(error) => {
//         const originalRequest = error.config;

//         // Jika error karena token kedaluwarsa (status 401) dan belum mencoba refresh token
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true; // Tandai request ini sudah dicoba refresh token

//             try {
//                 const newToken = await refreshToken();
//                 localStorage.setItem("token", newToken); // Simpan token baru
//                 originalRequest.headers.Authorization = `Bearer ${newToken}`; // Gunakan token baru
//                 return axiosInstance(originalRequest); // Ulangi request dengan token baru
//             } catch (refreshError) {
//                 console.error("Gagal melakukan refresh token:", refreshError);
//                 // Jika refresh token gagal, logout pengguna
//                 useAuthStore.getState().logout();
//                 throw new Error("Session expired. Please login again.");
//             }
//         }

//         return Promise.reject(error);
//     }
// );

// // Fungsi untuk melakukan refresh token
// const refreshToken = async() => {
//     try {
//         const response = await axios.post(
//             "https://api-invitation.xyz/api/auth/refresh-token", {}, { withCredentials: true }
//         );

//         if (response.data && response.data.token) {
//             return response.data.token; // Kembalikan token baru
//         } else {
//             throw new Error("Token refresh failed. No token received.");
//         }
//     } catch (error) {
//         console.error("Error refreshing token:", error);
//         throw error;
//     }
// };