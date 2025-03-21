// import { create } from "zustand";
// import { axiosInstance } from "../lib/axios";
// import toast from "react-hot-toast";
// import { persist } from "zustand/middleware";

// const BASE_URL = "http://localhost:8001";

// // Fungsi aman untuk mendapatkan data user dari cookie
// const getUserDataFromCookie = () => {
//     try {
//         const cookie = document.cookie
//             .split("; ")
//             .find((row) => row.startsWith("user_data="));
//         return cookie ? JSON.parse(decodeURIComponent(cookie.split("=")[1])) : null;
//     } catch (error) {
//         console.error("Error parsing user_data cookie:", error);
//         return null;
//     }
// };

// console.log("data user", getUserDataFromCookie())

// const useAuthStore = create(
//     persist(
//         (set, get) => ({
//             authUser: getUserDataFromCookie(), // Langsung ambil data user dari cookie
//             userId: null,
//             isSigningUp: false,
//             isLoggingIn: false,
//             isUpdatingProfile: false,
//             isCheckingAuth: true,
//             onlineUsers: [],
//             socket: null,

//             signup: async(data) => {
//                 set({ isSigningUp: true });
//                 try {
//                     const res = await axiosInstance.post("/auth/register", data);
//                     set({ authUser: res.data });
//                     document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data))}; path=/; max-age=86400;`;
//                     return res.data; // Kembalikan data response
//                 } catch (error) {
//                     toast.error(error.response.data.message || "Signup failed");
//                     throw error; // Lempar error jika signup gagal
//                 } finally {
//                     set({ isSigningUp: false });
//                 }
//             },
//             verify: async(data) => {
//                 set({ isSigningUp: true });
//                 try {
//                     const res = await axiosInstance.post("/auth/verify-email", data);
//                     set({ authUser: res.data });
//                     document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data))}; path=/; max-age=86400;`;
//                 } catch (error) {
//                     toast.error(error.response.data.message || "Verification failed");
//                 } finally {
//                     set({ isSigningUp: false });
//                 }
//             },


//             // login: async(data) => {
//             //     set({ isLoggingIn: true });
//             //     try {
//             //         const res = await axiosInstance.post("/auth/login", data);
//             //         console.log("ini res", res.data);

//             //         if (res.data && res.data.data) {
//             //             set({ authUser: res.data.data });
//             //             document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;

//             //         }
//             //         toast.success("Logged in successfully");
//             //     } catch (error) {
//             //         console.error("Error", error)
//             //         toast.error("Login gagal")
//             //     } finally {
//             //         set({ isLoggingIn: false });
//             //     }



//             login: async(data) => {
//                 set({ isLoggingIn: true });
//                 try {
//                     const res = await axiosInstance.post("/auth/login", data);
//                     if (res.data && res.data.data) {
//                         set({ authUser: res.data.data });
//                         document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;

//                     } else {
//                         throw new Error("Login gagal. Periksa email dan password Anda.");
//                     }
//                 } finally {
//                     set({ isLoggingIn: false });
//                 }
//             },

//             // logout: async() => {
//             //     try {
//             //         await axiosInstance.post("/auth/logout");
//             //         set({ authUser: null });
//             //         document.cookie = "user_data=; path=/; max-age=0;";
//             //         toast.success("Logged out successfully");
//             //     } catch (error) {
//             //         toast.error(error.response.data.message || "Logout failed");
//             //     }
//             // },
//             // logout: async(navigate) => {
//             //     try {
//             //         await axiosInstance.post("/auth/logout");
//             //         set({ authUser: null }); // Set authUser ke null
//             //         document.cookie = "user_data=; path=/; max-age=0;";

//             //         localStorage.removeItem('authUser');
//             //         toast.success("Logged out successfully");
//             //         navigate("/login"); // Redirect ke halaman login
//             //     } catch (error) {
//             //         toast.error(error.response.data.message || "Logout failed");
//             //     }
//             // },

//             logout: async() => {
//                 try {
//                     await axiosInstance.post("/auth/logout"); // Panggil API logout
//                     set({ authUser: null }); // Reset state authUser ke null

//                     // Hapus cookie
//                     document.cookie = "user_data=; path=/; max-age=0;"; // Hapus cookie
//                     document.cookie = "jwt=; path=/; max-age=0;"; // Jika ada cookie JWT, hapus juga

//                     // Hapus dari localStorage
//                     localStorage.removeItem('authUser');

//                     // Tampilkan pesan sukses
//                     toast.success("Logged out successfully");

//                     // Redirect ke halaman login dengan refresh halaman
//                     window.location.href = "/login"; // Gunakan window.location.href untuk memastikan refresh
//                 } catch (error) {
//                     // Tampilkan pesan error
//                     toast.error(error.response.data.message || "Logout failed");
//                 }
//             },

//             updateProfile: async(data) => {
//                 set({ isUpdatingProfile: true });
//                 try {
//                     const res = await axiosInstance.put("/auth/update-profile", data);
//                     set({ authUser: res.data });
//                     document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data))}; path=/; max-age=86400;`;
//                     toast.success("Profile updated successfully");
//                 } catch (error) {
//                     console.log("Error in update profile:", error);
//                     toast.error(error.response.data.message || "Update failed");
//                 } finally {
//                     set({ isUpdatingProfile: false });
//                 }
//             },

//         }), {
//             name: "auth-storage",
//             getStorage: () => ({
//                 getItem: (name) => {
//                     const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
//                         const [key, value] = cookie.split("=");
//                         acc[key] = value ? decodeURIComponent(value) : null;
//                         return acc;
//                     }, {});
//                     return cookies[name] ? cookies[name] : null;
//                 },
//                 setItem: (name, value) => {
//                     document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=86400;`;
//                 },
//                 removeItem: (name) => {
//                     document.cookie = `${name}=; path=/; max-age=0;`;
//                 },
//             }),
//         })
// );

// export default useAuthStore;

import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { persist } from "zustand/middleware";

const BASE_URL = "http://localhost:8001";

const useAuthStore = create(
    persist(
        (set, get) => ({
            authUser: JSON.parse(localStorage.getItem("authUser")) || null, // Ambil data user dari local storage
            userId: null,
            isSigningUp: false,
            isLoggingIn: false,
            isUpdatingProfile: false,
            isCheckingAuth: true,
            onlineUsers: [],
            socket: null,

            // Fungsi untuk signup
            signup: async(data) => {
                set({ isSigningUp: true });
                try {
                    const res = await axiosInstance.post("/auth/register", data);
                    set({ authUser: res.data });
                    localStorage.setItem("authUser", JSON.stringify(res.data)); // Simpan data user di local storage
                    return res.data; // Kembalikan data response
                } catch (error) {
                    toast.error(error.response.data.message || "Signup failed");
                    throw error; // Lempar error jika signup gagal
                } finally {
                    set({ isSigningUp: false });
                }
            },

            // Fungsi untuk verifikasi email
            verify: async(data) => {
                set({ isSigningUp: true });
                try {
                    const res = await axiosInstance.post("/auth/verify-email", data);
                    set({ authUser: res.data });
                    localStorage.setItem("authUser", JSON.stringify(res.data)); // Simpan data user di local storage
                } catch (error) {
                    toast.error(error.response.data.message || "Verification failed");
                } finally {
                    set({ isSigningUp: false });
                }
            },

            // Fungsi untuk login
            login: async(data) => {
                set({ isLoggingIn: true });
                try {
                    const res = await axiosInstance.post("/auth/login", data);
                    if (res.data && res.data.data) {
                        set({ authUser: res.data.data });
                        localStorage.setItem("authUser", JSON.stringify(res.data.data)); // Simpan data user di local storage
                        localStorage.setItem("token", res.data.data.token);
                    } else {
                        throw new Error("Login gagal. Periksa email dan password Anda.");
                    }
                } catch (error) {
                    toast.error(error.response.data.message || "Login failed");
                    throw error;
                } finally {
                    set({ isLoggingIn: false });
                }
            },

            // Fungsi untuk logout
            logout: async() => {
                try {
                    await axiosInstance.post("/auth/logout"); // Panggil API logout
                    set({ authUser: null }); // Reset state authUser ke null
                    localStorage.removeItem("authUser"); // Hapus data user dari local storage
                    localStorage.removeItem("token"); // Hapus data user dari local storage
                    localStorage.removeItem("auth-storage"); // Hapus data user dari local storage
                    toast.success("Logged out successfully");
                    window.location.href = "/login"; // Redirect ke halaman login
                } catch (error) {
                    toast.error(error.response.data.message || "Logout failed");
                }
            },

            // Fungsi untuk update profil
            updateProfile: async(data) => {
                set({ isUpdatingProfile: true });
                try {
                    const res = await axiosInstance.put("/auth/update-profile", data);
                    set({ authUser: res.data });
                    localStorage.setItem("authUser", JSON.stringify(res.data)); // Simpan data user di local storage
                    toast.success("Profile updated successfully");
                } catch (error) {
                    console.log("Error in update profile:", error);
                    toast.error(error.response.data.message || "Update failed");
                } finally {
                    set({ isUpdatingProfile: false });
                }
            },
        }), {
            name: "auth-storage", // Nama untuk penyimpanan persist
            getStorage: () => localStorage, // Gunakan local storage sebagai penyimpanan persist
        }
    )
);

export default useAuthStore;