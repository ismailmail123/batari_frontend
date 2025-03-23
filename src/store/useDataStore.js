// import { create } from "zustand";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { axios } from "../lib/axios";

// const getUserDataFromCookie = () => {
//     try {
//         const cookie = document.cookie
//             .split("; ")
//             .find((row) => row.startsWith("user_data="));
//         return cookieJSON.parse(decodeURIComponent(cookie.split("=")[1])) : null;
//     } catch (error) {
//         console.error("Error parsing user_data cookie:", error);
//         return null;
//     }
// };

// const useDataStore = create((set, get) => ({
//     user: null,
//     userData: getUserDataFromCookie(),
//     wargabinaans: [],
//     wbpById: [],
//     pengunjungs: [],
//     pengunjungUser: [],
//     pengunjungByCode: [],
//     wbpList: [],
//     antrians: [],

//     setErrorMessage: (message) => set({ errorMessage: message }),

//     createWargabinaan: async(formData, setError) => {
//         const userData = get().userData;
//         console.log("ini userData", userData);

//         if (!userData) {
//             console.error("Token not found. Unable to create wbp.");
//             setError("Anda harus login terlebih dahulu.");
//             return;
//         }

//         try {
//             const response = await axios.post(
//                 "/wargabinaan/upload-excel",
//                 formData, {
//                     headers: {
//                         "Content-Type": "multipart/form-data", // Set header untuk file upload
//                     },
//                     withCredentials: true, // Izinkan pengiriman credentials (cookie/token)
//                 }
//             );

//             console.log("Create wbp response:", response.data);

//             // Periksa apakah upload berhasil berdasarkan response dari backend
//             if (response.data.message === "Proses upload file Excel selesai.") {
//                 const newWbp = response.data.data;

//                 set((state) => ({
//                     wargabinaans: [...state.wargabinaans, newWbp],
//                 }));

//                 toast.success("Data WBP berhasil diupload!"); // Notifikasi sukses
//             } else {
//                 // Jika backend mengembalikan pesan error
//                 const errorMessage = response.data.message || "Terjadi kesalahan saat mengupload file.";
//                 set({ errorMessage });
//                 toast.error(errorMessage);
//                 if (setError) {
//                     setError(errorMessage);
//                 }
//             }
//         } catch (error) {
//             console.error("Create wbp error:", error);

//             // Ambil pesan error dari response API
//             const errorMessage =
//                 error.response.data.message ||
//                 error.message ||
//                 "Terjadi kesalahan saat mengupload file. Silakan coba lagi.";

//             // Set pesan error ke state
//             set({ errorMessage });

//             // Tampilkan pesan error menggunakan toast
//             toast.error(errorMessage);

//             // Jika menggunakan setError (misalnya dari react-hook-form), set pesan error
//             if (setError) {
//                 setError(errorMessage);
//             }
//         }
//     },

//     formCreateWargabinaan: async(wbpData, setError) => {
//         const userData = get().userData;
//         // const { cartItems, selectedCart } = get();
//         console.log("ini userData", userData);
//         if (!userData) {
//             console.error("Token not found. Unable to create wbp.");

//             return;
//         }

//         try {
//             const response = await axios.post("/wargabinaan", wbpData, {
//                 withCredentials: true,
//             });
//             console.log("Create wbp response:", response.data);
//             const newWbp = response.data;

//             console.log("newWbp", response);

//             set((state) => ({
//                 wargabinaans: [...state.wargabinaans, newWbp],
//                 cartItems: [], // Kosongkan keranjang setelah wbp sukses
//             }));

//             toast.success("wbp created successfully!"); // Notifikasi sukses

//         } catch (error) {
//             console.error("Create wbp error:", error);

//             // Penanganan error yang lebih baik
//             if (error.response) {
//                 // Error dari server (4xx atau 5xx)
//                 toast.error(error.response.data.message || "wbp creation failed.");
//                 setError(error.response.data.message || "wbp creation failed. Please try again.");
//             } else if (error.request) {
//                 // Tidak ada respons dari server
//                 toast.error("No response from server. Please check your connection.");
//                 setError("No response from server. Please check your connection.");
//             } else {
//                 // Error lainnya (misalnya, error JavaScript)
//                 toast.error("An unexpected error occurred. Please try again.");
//                 setError("An unexpected error occurred. Please try again.");
//             }
//         }
//     },

//     // fetchWargabinaan: async() => {
//     //     try {
//     //         const userData = get().userData;
//     //         if (!userData) {
//     //             console.error("userData not found. Unable to fetch products.");
//     //             return;
//     //         }

//     //         const response = await axios.get("/wargabinaan", );
//     //         set({ wargabinaans: response.data.data });
//     //         console.log("Fetched wargabinaans successfully:", response.data.data);
//     //     } catch (error) {
//     //         console.error("Fetch wargabinaans error:", error);
//     //     }
//     // },

//     // Fungsi untuk fetch data wargabinaan
//     fetchWargabinaan: async(page = 1, limit = 10) => {
//         try {
//             const userData = get().userData;
//             if (!userData) {
//                 console.error("userData not found. Unable to fetch wargabinaans.");
//                 set({ error: "User data not found. Please login again." });

//                 return;
//             }

//             // Set loading state ke true
//             set({ loading: true, error: null });

//             // Lakukan request ke endpoint dengan pagination
//             const response = await axios.get("/wargabinaan", {
//                 params: {
//                     page,
//                     limit,
//                 },
//             });

//             // Simpan data dan informasi pagination ke state
//             set({
//                 wargabinaans: response.data.data,
//                 pagination: response.data.pagination, // Simpan informasi pagination
//                 loading: false,
//             });

//             console.log("Fetched wargabinaans successfully:", response.data.data);
//         } catch (error) {
//             console.error("Fetch wargabinaans error:", error);

//             // Simpan pesan error ke state
//             set({
//                 error: error.response.data.message || "Failed to fetch wargabinaans.",
//                 loading: false,
//             });
//         }
//     },

//     fetchWbpById: async(wbpId) => {
//         const userData = get().userData;
//         if (!userData) {
//             console.error("userData not found. Unable to fetch wargabinaan.");

//             return;
//         }

//         try {
//             const response = await axios.get(`/wargabinaan/${wbpId}`);
//             set({ wbpById: response.data.data || [] }); // Handle jika response kosong
//         } catch (error) {
//             console.error("Fetch wargabinaan error:", error);
//             throw error; // Pastikan error dilemparkan untuk ditangani di komponen
//         }
//     },

//     updateWbp: async(wbpId, newData) => {
//         try {
//             const userData = get().userData;
//             if (!userData) {

//                 throw new Error("User data not found. Unable to update wbp data.");
//             }

//             const response = await axios.put(`/wargabinaan/${wbpId}`, newData);

//             if (response.status !== 200) {
//                 throw new Error("Failed to update data");
//             }

//             console.log("Data berhasil diperbarui:", response.data);
//             get().fetchWargabinaan(); // Refetch data jika diperlukan
//         } catch (error) {
//             console.error("Gagal memperbarui data:", error);
//             throw error; // Lempar error ke komponen
//         }
//     },

//     deleteWargabinaan: async(wbpId) => {
//         const userData = get().userData;
//         if (!userData) {
//             console.error("User data not found. Unable to delete wargabinaan.");
//             toast.error("Anda harus login terlebih dahulu.");

//             return;
//         }

//         try {
//             // Kirim permintaan DELETE ke backend
//             const response = await axios.delete(`/wargabinaan/${wbpId}`, {
//                 withCredentials: true, // Izinkan pengiriman credentials (cookie/token)
//             });

//             // Periksa apakah penghapusan berhasil
//             if (response.status === 200 || response.status === 204) {
//                 // Hapus data dari state
//                 set((state) => ({
//                     wargabinaans: state.wargabinaans.filter((wbp) => wbp.id !== wbpId),
//                 }));

//                 // Tampilkan notifikasi sukses
//                 toast.success("Data WBP berhasil dihapus!");
//             } else {
//                 // Jika backend mengembalikan pesan error
//                 const errorMessage = response.data.message || "Terjadi kesalahan saat menghapus data.";
//                 toast.error(errorMessage);
//             }
//         } catch (error) {
//             console.error("Delete wargabinaan error:", error);

//             // Ambil pesan error dari response API
//             const errorMessage =
//                 error.response.data.message ||
//                 error.message ||
//                 "Terjadi kesalahan saat menghapus data. Silakan coba lagi.";

//             // Tampilkan pesan error menggunakan toast
//             toast.error(errorMessage);
//         }
//     },

//     fetchWbpList: async() => {
//         try {
//             const userData = get().userData;
//             if (!userData) {
//                 console.error("userData not found. Unable to fetch wargabinaans.");

//                 return;
//             }

//             const response = await axios.get("/wargabinaan/list", );
//             set({ wbpList: response.data.data });
//             console.log("Fetched wargabinaans successfully:", response.data.data);
//         } catch (error) {
//             console.error("Fetch wargabinaans error:", error);
//         }
//     },
//     fetchPengunjung: async() => {
//         try {
//             const userData = get().userData;
//             if (!userData) {
//                 console.error("userData not found. Unable to fetch products.");

//                 return;
//             }

//             const response = await axios.get("/pengunjung", );
//             set({ pengunjungs: response.data.data });
//             console.log("Fetched pengunjungs successfully:", response.data.data);
//         } catch (error) {
//             console.error("Fetch pengunjungs error:", error);
//         }
//     },
//     fetchPengunjungUser: async() => {
//         try {
//             const userData = get().userData;
//             if (!userData) {
//                 console.error("userData not found. Unable to fetch products.");

//                 return;
//             }

//             const response = await axios.get("/pengunjung/user", );
//             set({ pengunjungUser: response.data.data });
//             console.log("Fetched pengunjungs successfully:", response.data.data);
//         } catch (error) {
//             console.error("Fetch pengunjungs error:", error);
//         }
//     },

//     // verify: async(data) => {
//     //     try {
//     //         const res = await axios.post("/pengunjung/kode-verifikasi", data);
//     //         if (res.data && res.data.data) {
//     //             document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;

//     //         } else {
//     //             throw new Error("Gagal melakukan verifikasi. Periksa kode yang dimasukkan.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error Zustand: ", error.response.data.message)
//     //         toast.error(error.response.data.message);
//     //     }
//     // },

//     // verify: async(data) => {
//     //     try {
//     //         const res = await axios.post("/pengunjung/kode-verifikasi", data);

//     //         console.log("ini dizustand", res).message

//     //         // Pastikan respons memiliki data yang diharapkan
//     //         if (res.data && res.data.message) {
//     //             document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;
//     //             return res; // Mengembalikan respons untuk penanganan lebih lanjut
//     //         } else {
//     //             throw new Error("Gagal melakukan verifikasi. Periksa kode yang dimasukkan.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error Zustand: ", error);

//     //         // Menangani error dengan lebih baik
//     //         if (error.response) {
//     //             // Jika ada respons dari server, tampilkan pesan error dari backend
//     //             const errorMessage = error.response.data.message || "Terjadi kesalahan saat verifikasi.";
//     //             toast.error(errorMessage);
//     //         } else if (error.request) {
//     //             // Jika tidak ada respons dari server (misalnya, masalah jaringan)
//     //             toast.error("Tidak ada respons dari server. Periksa koneksi internet Anda.");
//     //         } else {
//     //             // Jika error lainnya (misalnya, error saat membuat permintaan)
//     //             toast.error("Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi.");
//     //         }

//     //         // Lempar error untuk penanganan lebih lanjut
//     //         throw error;
//     //     }
//     // },

//     verify: async(data) => {
//         try {
//             const res = await axios.post("/pengunjung/kode-verifikasi", data);

//             console.log("Response dari API:", res); // Perbaiki console.log

//             // Pastikan respons memiliki data yang diharapkan
//             if (res.data && res.data.message) {
//                 // Cek apakah res.data.data ada sebelum mencoba mengaksesnya
//                 if (res.data.data) {
//                     document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;
//                 } else {
//                     console.warn("Data dari API bernilai null:", res.data);
//                 }
//                 return res; // Mengembalikan respons untuk penanganan lebih lanjut
//             } else {
//                 throw new Error("Gagal melakukan verifikasi. Periksa kode yang dimasukkan.");
//             }
//         } catch (error) {
//             console.error("Error Zustand: ", error);

//             // Menangani error dengan lebih baik
//             if (error.response) {
//                 // Jika ada respons dari server, tampilkan pesan error dari backend
//                 const errorMessage = error.response.data.message || "Terjadi kesalahan saat verifikasi.";
//                 toast.error(errorMessage);
//             } else if (error.request) {
//                 // Jika tidak ada respons dari server (misalnya, masalah jaringan)
//                 toast.error("Tidak ada respons dari server. Periksa koneksi internet Anda.");
//             } else {
//                 // Jika error lainnya (misalnya, error saat membuat permintaan)
//                 toast.error("Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi.");
//             }

//             // Lempar error untuk penanganan lebih lanjut
//             throw error;
//         }
//     },

//     fetchPengunjungByCode: async(kode) => {
//         try {
//             const userData = get().userData;
//             if (!userData) {

//                 console.error("userData not found. Unable to fetch pengunjung by code.");
//                 return;
//             }

//             // Kirim kode di request body menggunakan POST
//             const response = await axios.get(`/pengunjung/${ kode }`); // Sesuaikan dengan endpoint backend
//             set({ pengunjungByCode: response.data.data }); // Simpan data pengunjung ke state
//             console.log("Fetched pengunjung by code successfully:", response.data.data);
//             return response.data.data; // Return data untuk digunakan di komponen
//         } catch (error) {
//             console.error("Fetch pengunjung by code error:", error);
//             throw error; // Lempar error untuk ditangani di komponen
//         }
//     },

//     updatePengunjung: async(kode, newData) => {
//         try {
//             const userData = get().userData;
//             if (!userData) {

//                 throw new Error("User data not found. Unable to update pengunjung data.");
//             }

//             const response = await axios.put(`/pengunjung/${kode}`, newData);

//             if (response.status !== 200) {
//                 throw new Error("Failed to update data");
//             }

//             console.log("Data berhasil diperbarui:", response.data);
//             get().fetchPengunjung(); // Refetch data pengunjung
//         } catch (error) {
//             console.error("Gagal memperbarui data:", error);
//             throw error; // Lempar error ke komponen
//         }
//     },

//     createTitipan: async(titipanData, setError) => {
//         const userData = get().userData;
//         // const { cartItems, selectedCart } = get();
//         console.log("ini userData", userData);
//         if (!userData) {

//             console.error("Token not found. Unable to create titipan.");
//             return;
//         }

//         try {
//             const response = await axios.post("/barang-titipan", titipanData, {
//                 withCredentials: true,
//             });
//             console.log("Create titipan response:", response.data);
//             const newTitipan = response.data;

//             console.log("newTitipan", response);

//             set((state) => ({
//                 titipans: [...state.wargabinaans, newTitipan],
//             }));

//             toast.success("titipan created successfully!"); // Notifikasi sukses

//         } catch (error) {
//             // console.error("Create titipan error:", error);

//             // Penanganan error yang lebih baik
//             if (error.response) {
//                 // Error dari server (4xx atau 5xx)
//                 toast.error(error.response.data.message || "titipan creation failed.");
//                 setError(error.response.data.message || "titipan creation failed. Please try again.");
//             } else if (error.request) {
//                 // Tidak ada respons dari server
//                 toast.error("No response from server. Please check your connection.");
//                 setError("No response from server. Please check your connection.");
//             } else {
//                 // Error lainnya (misalnya, error JavaScript)
//                 toast.error("An unexpected error occurred. Please try again.");
//                 setError("An unexpected error occurred. Please try again.");
//             }
//         }
//     },

//     createPengunjung: async(formData, setError) => {
//         const userData = get().userData;
//         if (!userData) {
//             toast.error("Anda harus login terlebih dahulu.");
//             return;
//         }

//         try {
//             const response = await axios.post("/pengunjung", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data", // Untuk upload file
//                 },
//                 withCredentials: true,
//             });

//             toast.success("Pengunjung berhasil ditambahkan!");
//             get().fetchPengunjung(); // Refresh data pengunjung
//         } catch (error) {
//             console.error("Error saat menambahkan pengunjung:", error);
//             toast.error(error.response.data.message || "Terjadi kesalahan.");
//             if (setError) setError(error.response.data.message);
//         }
//     },

//     // Fungsi untuk update nomor antrian (menggunakan body)
//     // updateAntrian: async(kode, antrian) => {
//     //     set({ loading: true, error: null }); // Set loading state

//     //     try {
//     //         // Kirim permintaan ke backend untuk update antrian
//     //         const response = await axios.put("/pengunjung/update-antrian", { kode, antrian });

//     //         if (response.status === 200) {
//     //             // Update state pengunjungs dengan data terbaru
//     //             set((state) => ({
//     //                 pengunjungs: state.pengunjungs.map((pengunjung) =>
//     //                     pengunjung.kode === kode{...pengunjung, antrian } : pengunjung
//     //                 ),
//     //             }));

//     //             toast.success("Nomor antrian berhasil diupdate!");
//     //         } else {
//     //             throw new Error("Gagal mengupdate nomor antrian.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Update antrian error:", error);
//     //         set({ error: error.response.data.message || "Terjadi kesalahan saat mengupdate antrian." });
//     //         toast.error(error.response.data.message || "Terjadi kesalahan saat mengupdate antrian.");
//     //     } finally {
//     //         set({ loading: false }); // Reset loading state
//     //     }
//     // },

//     // updateAntrian: async(kode, antrian) => {
//     //     set({ loading: true, error: null }); // Set loading state

//     //     try {
//     //         console.log("Data yang dikirim:", { kode, antrian }); // Debugging

//     //         // Kirim permintaan ke backend untuk update antrian
//     //         const response = await axios.put("/pengunjung/update-antrian", { kode, antrian });

//     //         console.log("Respons dari backend:", response.data); // Debugging

//     //         if (response.status === 200) {
//     //             // Update state pengunjungs dengan data terbaru
//     //             set((state) => ({
//     //                 pengunjungs: state.pengunjungs.map((pengunjung) =>
//     //                     pengunjung.kode === kode{...pengunjung, antrian } : pengunjung
//     //                 ),
//     //             }));

//     //             toast.success("Nomor antrian berhasil diupdate!");
//     //         } else {
//     //             throw new Error("Gagal mengupdate nomor antrian.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Update antrian error:", error);
//     //         set({ error: error.response.data.message || "Terjadi kesalahan saat mengupdate antrian." });
//     //         toast.error(error.response.data.message || "Terjadi kesalahan saat mengupdate antrian.");
//     //     } finally {
//     //         set({ loading: false }); // Reset loading state
//     //     }
//     // },

//     // Update antrian pengunjung
//     // Pada useDataStore, pastikan ada fungsi updateAntrian
//     updateAntrian: async(kode) => {
//         set({ loading: true, error: null });
//         try {
//             const response = await axios.put('/pengunjung/update-antrian', { kode });
//             if (response.status === 200) {
//                 set((state) => ({
//                     pengunjungs: state.pengunjungs.map((pengunjung) =>
//                         pengunjung.kode === kode{...pengunjung, antrian: response.data.data.antrian } : pengunjung
//                     ),
//                 }));
//                 toast.success('Nomor antrian berhasil diupdate!');
//                 return response.data.data;
//             }
//         } catch (error) {
//             // Handle error
//             console.error('Update antrian error:', error);
//             set({ error: error.response.data.message || 'Terjadi kesalahan saat mengupdate antrian.' });
//         } finally {
//             set({ loading: false });
//         }
//     },


//     // Fungsi untuk mengambil nomor antrian terakhir
//     // getNomorAntrianTerakhir: async() => {
//     //     try {
//     //         const userData = get().userData;
//     //         if (!userData) {
//     //             console.error("User data not found. Unable to fetch last antrian.");
//     //             toast.error("Anda harus login terlebih dahulu.");
//     //             return null;
//     //         }

//     //         // Kirim permintaan GET ke endpoint backend
//     //         const response = await axios.get("/pengunjung/antrian-terakhir");

//     //         // Pastikan respons memiliki data yang diharapkan
//     //         if (response.data && response.data.lastNumber !== undefined) {
//     //             return response.data.lastNumber; // Kembalikan nomor antrian terakhir
//     //         } else {
//     //             throw new Error("Format respons tidak valid.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error fetching last antrian:", error);

//     //         // Tampilkan pesan error menggunakan toast
//     //         const errorMessage =
//     //             error.response.data.message ||
//     //             error.message ||
//     //             "Terjadi kesalahan saat mengambil nomor antrian terakhir.";
//     //         toast.error(errorMessage);

//     //         return null; // Kembalikan null jika terjadi error
//     //     }
//     // },

//     getNomorAntrianTerakhir: async() => {
//         try {
//             const userData = get().userData;
//             if (!userData) {
//                 console.error("User data not found. Unable to fetch last antrian.");
//                 toast.error("Anda harus login terlebih dahulu.");

//                 return null;
//             }

//             // Kirim permintaan GET ke endpoint backend
//             const response = await axios.get("/pengunjung/antrian-terakhir");

//             // Pastikan respons memiliki data yang diharapkan
//             if (response.data && response.data.lastNumber !== undefined) {
//                 // Konversi lastNumber (integer) ke format XXX
//                 const lastNumber = response.data.lastNumber;
//                 const formattedLastNumber = String(lastNumber).padStart(3, '0'); // Contoh: 1 -> "001"
//                 return formattedLastNumber; // Kembalikan dalam format "001"
//             } else {
//                 throw new Error("Format respons tidak valid.");
//             }
//         } catch (error) {
//             console.error("Error fetching last antrian:", error);

//             // Tampilkan pesan error menggunakan toast
//             const errorMessage =
//                 error.response.data.message ||
//                 error.message ||
//                 "Terjadi kesalahan saat mengambil nomor antrian terakhir.";
//             toast.error(errorMessage);

//             return null; // Kembalikan null jika terjadi error
//         }
//     },



// }));

// export default useDataStore;


import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const useDataStore = create((set, get) => ({
    user: null,
    token: localStorage.getItem("token") || null, // Ambil token dari local storage
    userData: null,
    wargabinaans: [],
    wbpById: [],
    pengunjungs: [],
    pengunjungUser: [],
    pengunjungByCode: [],
    wbpList: [],
    antrians: [],
    errorMessage: "",

    // Set pesan error
    setErrorMessage: (message) => set({ errorMessage: message }),

    // Fungsi untuk login dan menyimpan token di local storage
    login: async(credentials, navigate, setError) => {
        try {
            const response = await axios.post("https://api-invitation.xyz/api/auth/login", credentials);
            const data = response.data;
            set({ user: data.data });
            localStorage.setItem("token", data.token); // Simpan token di local storage
            set({ token: data.token }); // Simpan token di state
            toast.success("Login berhasil!");
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Login failed. Please try again.");
            }
        }
    },

    // Fungsi untuk logout dan menghapus token dari local storage
    logout: () => {
        set({ user: null, token: null, userData: null });
        localStorage.removeItem("token"); // Hapus token dari local storage
        toast.success("Logout berhasil!");
        window.location.reload();
    },

    // Fungsi untuk mengambil data pengguna berdasarkan token
    fetchUserData: async() => {
        try {
            const token = get().token;
            if (!token) {
                console.error("Token not found. Unable to fetch user data.");
                return;
            }

            const response = await axios.get("https://api-invitation.xyz/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ userData: response.data.data });
        } catch (error) {
            console.error("Fetch user data error:", error);
        }
    },

    // Fungsi untuk membuat wargabinaan
    createWargabinaan: async(formData, setError) => {
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to create wbp.");
            setError("Anda harus login terlebih dahulu.");
            return;
        }

        try {
            const response = await axios.post("https://api-invitation.xyz/api/wargabinaan/upload-excel", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.message === "Proses upload file Excel selesai.") {
                const newWbp = response.data.data;
                set((state) => ({
                    wargabinaans: [...state.wargabinaans, newWbp],
                }));
                toast.success("Data WBP berhasil diupload!");
            } else {
                const errorMessage = response.data.message || "Terjadi kesalahan saat mengupload file.";
                set({ errorMessage });
                toast.error(errorMessage);
                if (setError) {
                    setError(errorMessage);
                }
            }
        } catch (error) {
            console.error("Create wbp error:", error);
            const errorMessage =
                error.response.data.message ||
                error.message ||
                "Terjadi kesalahan saat mengupload file. Silakan coba lagi.";
            set({ errorMessage });
            toast.error(errorMessage);
            if (setError) {
                setError(errorMessage);
            }
        }
    },

    // Fungsi untuk mengambil data wargabinaan dengan pagination
    fetchWargabinaan: async(page = 1, limit = 10) => {
        try {
            const token = get().token;
            if (!token) {
                console.error("Token not found. Unable to fetch wargabinaans.");
                set({ error: "User data not found. Please login again." });
                return;
            }
            console.log("fetch token", token)

            set({ loading: true, error: null });

            const response = await axios.get("https://api-invitation.xyz/api/wargabinaan", {
                params: { page, limit },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            set({
                wargabinaans: response.data.data,
                pagination: response.data.pagination,
                loading: false,
            });

            console.log("Fetched wargabinaans successfully:", response.data.data);
        } catch (error) {
            console.error("Fetch wargabinaans error:", error);
            set({
                error: error.response.data.message || "Failed to fetch wargabinaans.",
                loading: false,
            });
        }
    },

    // Fungsi untuk mengambil data wargabinaan berdasarkan ID
    fetchWbpById: async(wbpId) => {
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to fetch wargabinaan.");
            return;
        }

        try {
            const response = await axios.get(`https://api-invitation.xyz/api/wargabinaan/${wbpId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ wbpById: response.data.data || [] });
        } catch (error) {
            console.error("Fetch wargabinaan error:", error);
            throw error;
        }
    },

    // Fungsi untuk memperbarui data wargabinaan
    updateWbp: async(wbpId, newData) => {
        try {
            const token = get().token;
            if (!token) {
                throw new Error("User data not found. Unable to update wbp data.");
            }

            const response = await axios.put(`https://api-invitation.xyz/api/wargabinaan/${wbpId}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status !== 200) {
                throw new Error("Failed to update data");
            }

            console.log("Data berhasil diperbarui:", response.data);
            get().fetchWargabinaan(); // Refetch data
        } catch (error) {
            console.error("Gagal memperbarui data:", error);
            throw error;
        }
    },

    // Fungsi untuk menghapus data wargabinaan
    deleteWargabinaan: async(wbpId) => {
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to delete wargabinaan.");
            toast.error("Anda harus login terlebih dahulu.");
            return;
        }

        try {
            const response = await axios.delete(`https://api-invitation.xyz/api/wargabinaan/${wbpId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200 || response.status === 204) {
                set((state) => ({
                    wargabinaans: state.wargabinaans.filter((wbp) => wbp.id !== wbpId),
                }));
                toast.success("Data WBP berhasil dihapus!");
            } else {
                const errorMessage = response.data.message || "Terjadi kesalahan saat menghapus data.";
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error("Delete wargabinaan error:", error);
            const errorMessage =
                error.response.data.message ||
                error.message ||
                "Terjadi kesalahan saat menghapus data. Silakan coba lagi.";
            toast.error(errorMessage);
        }
    },

    // Fungsi untuk mengambil daftar wargabinaan
    fetchWbpList: async() => {
        try {
            const token = get().token;
            if (!token) {
                console.error("Token not found. Unable to fetch wargabinaans.");
                return;
            }

            const response = await axios.get("https://api-invitation.xyz/api/wargabinaan/list", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ wbpList: response.data.data });
            console.log("Fetched wargabinaans successfully:", response.data.data);
        } catch (error) {
            console.error("Fetch wargabinaans error:", error);
        }
    },

    // Fungsi untuk mengambil data pengunjung
    fetchPengunjung: async() => {
        try {
            const token = get().token;
            if (!token) {
                console.error("Token not found. Unable to fetch pengunjungs.");
                return;
            }

            const response = await axios.get("https://api-invitation.xyz/api/pengunjung", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ pengunjungs: response.data.data });
            console.log("Fetched pengunjungs successfully:", response.data.data);
        } catch (error) {
            console.error("Fetch pengunjungs error:", error);
        }
    },

    // Fungsi untuk mengambil data pengunjung berdasarkan kode
    fetchPengunjungByCode: async(kode) => {
        try {
            const token = get().token;
            if (!token) {
                console.error("Token not found. Unable to fetch pengunjung by code.");
                return;
            }

            const response = await axios.get(`https://api-invitation.xyz/api/pengunjung/${kode}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ pengunjungByCode: response.data.data });
            console.log("Fetched pengunjung by code successfully:", response.data.data);
            return response.data.data;
        } catch (error) {
            console.error("Fetch pengunjung by code error:", error);
            throw error;
        }
    },

    // Fungsi untuk memperbarui data pengunjung
    updatePengunjung: async(kode, newData) => {
        try {
            const token = get().token;
            if (!token) {
                throw new Error("Token not found. Unable to update pengunjung data.");
            }

            const response = await axios.put(`https://api-invitation.xyz/api/pengunjung/${kode}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status !== 200) {
                throw new Error("Failed to update data");
            }

            console.log("Data berhasil diperbarui:", response.data);
            get().fetchPengunjung(); // Refetch data pengunjung
        } catch (error) {
            console.error("Gagal memperbarui data:", error);
            throw error;
        }
    },
    getNomorAntrianTerakhir: async() => {
        try {
            const token = get().token;
            if (!token) {
                throw new Error("Token not found. Unable to update pengunjung data.");
            }

            // Kirim permintaan GET ke endpoint backend
            const response = await axios.get("https://api-invitation.xyz/api/pengunjung/antrian-terakhir", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("API Response:", response); // Log respons untuk debugging

            // Pastikan respons memiliki data yang diharapkan
            if (response.data && response.data.lastNumber !== undefined) {
                // Konversi lastNumber (integer) ke format XXX
                const lastNumber = response.data.lastNumber;
                const formattedLastNumber = String(lastNumber).padStart(3, '0'); // Contoh: 1 -> "001"
                return formattedLastNumber; // Kembalikan dalam format "001"
            } else {
                // Jika data tidak ditemukan, kembalikan nilai default
                console.warn("Data nomor antrian terakhir tidak ditemukan. Mengembalikan nilai default.");
                return "000"; // Nilai default jika data tidak ditemukan
            }
        } catch (error) {
            console.error("Error fetching last antrian:", error);
            console.log("API Error:", error); // Log error untuk debugging

            // Tampilkan pesan error menggunakan toast
            const errorMessage =
                error.response.data.message || // Gunakan optional chaining untuk menghindari error
                error.message ||
                "Terjadi kesalahan saat mengambil nomor antrian terakhir.";
            toast.error(errorMessage);

            return null; // Kembalikan null jika terjadi error
        }
    },

    // createWargabinaan: async(formData, setError) => {
    //     const token = get().token;
    //     if (!token) {
    //         console.error("Token not found. Unable to fetch wargabinaans.");
    //         set({ error: "User data not found. Please login again." });
    //         return;
    //     }

    //     try {
    //         const response = await axios.post(
    //             "/wargabinaan/upload-excel",
    //             formData, {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data", // Set header untuk file upload
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //                 withCredentials: true, // Izinkan pengiriman credentials (cookie/token)
    //             }
    //         );

    //         console.log("Create wbp response:", response.data);

    //         // Periksa apakah upload berhasil berdasarkan response dari backend
    //         if (response.data.message === "Proses upload file Excel selesai.") {
    //             const newWbp = response.data.data;

    //             set((state) => ({
    //                 wargabinaans: [...state.wargabinaans, newWbp],
    //             }));

    //             toast.success("Data WBP berhasil diupload!"); // Notifikasi sukses
    //         } else {
    //             // Jika backend mengembalikan pesan error
    //             const errorMessage = response.data.message || "Terjadi kesalahan saat mengupload file.";
    //             set({ errorMessage });
    //             toast.error(errorMessage);
    //             if (setError) {
    //                 setError(errorMessage);
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Create wbp error:", error);

    //         // Ambil pesan error dari response API
    //         const errorMessage =
    //             error.response.data.message ||
    //             error.message ||
    //             "Terjadi kesalahan saat mengupload file. Silakan coba lagi.";

    //         // Set pesan error ke state
    //         set({ errorMessage });

    //         // Tampilkan pesan error menggunakan toast
    //         toast.error(errorMessage);

    //         // Jika menggunakan setError (misalnya dari react-hook-form), set pesan error
    //         if (setError) {
    //             setError(errorMessage);
    //         }
    //     }
    // },

    formCreateWargabinaan: async(pengunjungData, setError) => {
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to fetch wargabinaans.");
            set({ error: "User data not found. Please login again." });
            return;
        }

        try {
            const response = await axios.post("https://api-invitation.xyz/api/wargabinaan", pengunjungData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Create wbp response:", response.data);
            const newPengunjung = response.data;

            console.log("newPengunjung", response);

            set((state) => ({
                pengunjungs: [...state.pengunjungs, newPengunjung],
                cartItems: [], // Kosongkan keranjang setelah wbp sukses
            }));

            toast.success("wbp created successfully!"); // Notifikasi sukses

        } catch (error) {
            console.error("Create wbp error:", error);

            // Penanganan error yang lebih baik
            if (error.response) {
                // Error dari server (4xx atau 5xx)
                toast.error(error.response.data.message || "wbp creation failed.");
                setError(error.response.data.message || "wbp creation failed. Please try again.");
            } else if (error.request) {
                // Tidak ada respons dari server
                toast.error("No response from server. Please check your connection.");
                setError("No response from server. Please check your connection.");
            } else {
                // Error lainnya (misalnya, error JavaScript)
                toast.error("An unexpected error occurred. Please try again.");
                setError("An unexpected error occurred. Please try again.");
            }
        }
    },

    // fetchWargabinaan: async() => {
    //     try {
    //         const userData = get().userData;
    //         if (!userData) {
    //             console.error("userData not found. Unable to fetch products.");
    //             return;
    //         }

    //         const response = await axios.get("/wargabinaan", );
    //         set({ wargabinaans: response.data.data });
    //         console.log("Fetched wargabinaans successfully:", response.data.data);
    //     } catch (error) {
    //         console.error("Fetch wargabinaans error:", error);
    //     }
    // },

    // // Fungsi untuk fetch data wargabinaan
    // fetchWargabinaan: async(page = 1, limit = 10) => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         // Set loading state ke true
    //         set({ loading: true, error: null });

    //         // Lakukan request ke endpoint dengan pagination
    //         const response = await axios.get("/wargabinaan", {
    //             params: {
    //                 page,
    //                 limit,
    //             },
    //         });

    //         // Simpan data dan informasi pagination ke state
    //         set({
    //             wargabinaans: response.data.data,
    //             pagination: response.data.pagination, // Simpan informasi pagination
    //             loading: false,
    //         });

    //         console.log("Fetched wargabinaans successfully:", response.data.data);
    //     } catch (error) {
    //         console.error("Fetch wargabinaans error:", error);

    //         // Simpan pesan error ke state
    //         set({
    //             error: error.response.data.message || "Failed to fetch wargabinaans.",
    //             loading: false,
    //         });
    //     }
    // },

    // fetchWbpById: async(wbpId) => {
    //     const token = get().token;
    //     if (!token) {
    //         console.error("Token not found. Unable to fetch wargabinaans.");
    //         set({ error: "User data not found. Please login again." });
    //         return;
    //     }

    //     try {
    //         const response = await axios.get(`/wargabinaan/${wbpId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         set({ wbpById: response.data.data || [] }); // Handle jika response kosong
    //     } catch (error) {
    //         console.error("Fetch wargabinaan error:", error);
    //         throw error; // Pastikan error dilemparkan untuk ditangani di komponen
    //     }
    // },

    // updateWbp: async(wbpId, newData) => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         const response = await axios.put(`/wargabinaan/${wbpId}`, newData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         if (response.status !== 200) {
    //             throw new Error("Failed to update data");
    //         }

    //         console.log("Data berhasil diperbarui:", response.data);
    //         get().fetchWargabinaan(); // Refetch data jika diperlukan
    //     } catch (error) {
    //         console.error("Gagal memperbarui data:", error);
    //         throw error; // Lempar error ke komponen
    //     }
    // },

    // deleteWargabinaan: async(wbpId) => {
    //     const token = get().token;
    //     if (!token) {
    //         console.error("Token not found. Unable to fetch wargabinaans.");
    //         set({ error: "User data not found. Please login again." });
    //         return;
    //     }

    //     try {
    //         // Kirim permintaan DELETE ke backend
    //         const response = await axios.delete(`/wargabinaan/${wbpId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         // Periksa apakah penghapusan berhasil
    //         if (response.status === 200 || response.status === 204) {
    //             // Hapus data dari state
    //             set((state) => ({
    //                 wargabinaans: state.wargabinaans.filter((wbp) => wbp.id !== wbpId),
    //             }));

    //             // Tampilkan notifikasi sukses
    //             toast.success("Data WBP berhasil dihapus!");
    //         } else {
    //             // Jika backend mengembalikan pesan error
    //             const errorMessage = response.data.message || "Terjadi kesalahan saat menghapus data.";
    //             toast.error(errorMessage);
    //         }
    //     } catch (error) {
    //         console.error("Delete wargabinaan error:", error);

    //         // Ambil pesan error dari response API
    //         const errorMessage =
    //             error.response.data.message ||
    //             error.message ||
    //             "Terjadi kesalahan saat menghapus data. Silakan coba lagi.";

    //         // Tampilkan pesan error menggunakan toast
    //         toast.error(errorMessage);
    //     }
    // },

    // fetchWbpList: async() => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         const response = await axios.get("/wargabinaan/list", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         set({ wbpList: response.data.data });
    //         console.log("Fetched wargabinaans successfully:", response.data.data);
    //     } catch (error) {
    //         console.error("Fetch wargabinaans error:", error);
    //     }
    // },
    // fetchPengunjung: async() => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         const response = await axios.get("/pengunjung", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         set({ pengunjungs: response.data.data });
    //         console.log("Fetched pengunjungs successfully:", response.data.data);
    //     } catch (error) {
    //         console.error("Fetch pengunjungs error:", error);
    //     }
    // },
    fetchPengunjungUser: async() => {
        try {
            const token = get().token;
            if (!token) {
                console.error("Token not found. Unable to fetch wargabinaans.");
                set({ error: "User data not found. Please login again." });
                return;
            }

            const response = await axios.get("https://api-invitation.xyz/api/pengunjung/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ pengunjungUser: response.data.data });
            console.log("Fetched pengunjungs successfully:", response.data.data);
        } catch (error) {
            console.error("Fetch pengunjungs error:", error);
        }
    },

    // verify: async(data) => {
    //     try {
    //         const res = await axios.post("/pengunjung/kode-verifikasi", data);
    //         if (res.data && res.data.data) {
    //             document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;

    //         } else {
    //             throw new Error("Gagal melakukan verifikasi. Periksa kode yang dimasukkan.");
    //         }
    //     } catch (error) {
    //         console.error("Error Zustand: ", error.response.data.message)
    //         toast.error(error.response.data.message);
    //     }
    // },

    // verify: async(data) => {
    //     try {
    //         const res = await axios.post("/pengunjung/kode-verifikasi", data);

    //         console.log("ini dizustand", res).message

    //         // Pastikan respons memiliki data yang diharapkan
    //         if (res.data && res.data.message) {
    //             document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;
    //             return res; // Mengembalikan respons untuk penanganan lebih lanjut
    //         } else {
    //             throw new Error("Gagal melakukan verifikasi. Periksa kode yang dimasukkan.");
    //         }
    //     } catch (error) {
    //         console.error("Error Zustand: ", error);

    //         // Menangani error dengan lebih baik
    //         if (error.response) {
    //             // Jika ada respons dari server, tampilkan pesan error dari backend
    //             const errorMessage = error.response.data.message || "Terjadi kesalahan saat verifikasi.";
    //             toast.error(errorMessage);
    //         } else if (error.request) {
    //             // Jika tidak ada respons dari server (misalnya, masalah jaringan)
    //             toast.error("Tidak ada respons dari server. Periksa koneksi internet Anda.");
    //         } else {
    //             // Jika error lainnya (misalnya, error saat membuat permintaan)
    //             toast.error("Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi.");
    //         }

    //         // Lempar error untuk penanganan lebih lanjut
    //         throw error;
    //     }
    // },

    verify: async(data) => {
        const token = get().token;

        if (!token) {
            console.error("Token not found. Unable to fetch wargabinaans.");
            set({ error: "User data not found. Please login again." });
            return;
        }
        try {
            const res = await axios.post("https://api-invitation.xyz/api/pengunjung/kode-verifikasi", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Response dari API:", res); // Perbaiki console.log

            // Pastikan respons memiliki data yang diharapkan
            if (res.data && res.data.message) {
                // Cek apakah res.data.data ada sebelum mencoba mengaksesnya
                if (res.data.data) {
                    document.cookie = `user_data=${encodeURIComponent(JSON.stringify(res.data.data))}; path=/; max-age=86400;`;
                } else {
                    console.warn("Data dari API bernilai null:", res.data);
                }
                return res; // Mengembalikan respons untuk penanganan lebih lanjut
            } else {
                throw new Error("Gagal melakukan verifikasi. Periksa kode yang dimasukkan.");
            }
        } catch (error) {
            console.error("Error Zustand: ", error);

            // Menangani error dengan lebih baik
            if (error.response) {
                // Jika ada respons dari server, tampilkan pesan error dari backend
                const errorMessage = error.response.data.message || "Terjadi kesalahan saat verifikasi.";
                toast.error(errorMessage);
            } else if (error.request) {
                // Jika tidak ada respons dari server (misalnya, masalah jaringan)
                toast.error("Tidak ada respons dari server. Periksa koneksi internet Anda.");
            } else {
                // Jika error lainnya (misalnya, error saat membuat permintaan)
                toast.error("Terjadi kesalahan saat melakukan verifikasi. Silakan coba lagi.");
            }

            // Lempar error untuk penanganan lebih lanjut
            throw error;
        }
    },

    // fetchPengunjungByCode: async(kode) => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         // Kirim kode di request body menggunakan POST
    //         const response = await axios.get(`/pengunjung/${ kode }`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         }); // Sesuaikan dengan endpoint backend
    //         set({ pengunjungByCode: response.data.data }); // Simpan data pengunjung ke state
    //         console.log("Fetched pengunjung by code successfully:", response.data.data);
    //         return response.data.data; // Return data untuk digunakan di komponen
    //     } catch (error) {
    //         console.error("Fetch pengunjung by code error:", error);
    //         throw error; // Lempar error untuk ditangani di komponen
    //     }
    // },

    // updatePengunjung: async(kode, newData) => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         const response = await axios.put(`/pengunjung/${kode}`, newData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         if (response.status !== 200) {
    //             throw new Error("Failed to update data");
    //         }

    //         console.log("Data berhasil diperbarui:", response.data);
    //         get().fetchPengunjung(); // Refetch data pengunjung
    //     } catch (error) {
    //         console.error("Gagal memperbarui data:", error);
    //         throw error; // Lempar error ke komponen
    //     }
    // },

    createTitipan: async(titipanData, setError) => {
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to fetch wargabinaans.");
            set({ error: "User data not found. Please login again." });
            return;
        }

        try {
            const response = await axios.post("https://api-invitation.xyz/api/barang-titipan", titipanData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Create titipan response:", response.data);
            const newTitipan = response.data;

            console.log("newTitipan", response);

            set((state) => ({
                titipans: [...state.wargabinaans, newTitipan],
            }));

            toast.success("titipan created successfully!"); // Notifikasi sukses

        } catch (error) {
            // console.error("Create titipan error:", error);

            // Penanganan error yang lebih baik
            if (error.response) {
                // Error dari server (4xx atau 5xx)
                toast.error(error.response.data.message || "titipan creation failed.");
                setError(error.response.data.message || "titipan creation failed. Please try again.");
            } else if (error.request) {
                // Tidak ada respons dari server
                toast.error("No response from server. Please check your connection.");
                setError("No response from server. Please check your connection.");
            } else {
                // Error lainnya (misalnya, error JavaScript)
                toast.error("An unexpected error occurred. Please try again.");
                setError("An unexpected error occurred. Please try again.");
            }
        }
    },

    // createPengunjung: async(formData, setError) => {
    //     const token = get().token;
    //     if (!token) {
    //         console.error("Token not found. Unable to fetch wargabinaans.");
    //         set({ error: "User data not found. Please login again." });
    //         return;
    //     }
    //     try {
    //         const response = await axios.post("/pengunjung", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data", // Untuk upload file


    //                 Authorization: `Bearer ${token}`,


    //             },
    //             withCredentials: true,
    //         });

    //         toast.success("Pengunjung berhasil ditambahkan!");
    //         get().fetchPengunjung(); // Refresh data pengunjung
    //     } catch (error) {
    //         console.error("Error saat menambahkan pengunjung:", error);
    //         toast.error(error.response.data.message || "Terjadi kesalahan.");
    //         if (setError) setError(error.response.data.message);
    //     }
    // },

    // createPengunjung: async(formData, setError) => {
    //     const token = get().token;
    //     if (!token) {
    //         console.error("Token not found. Unable to create pengunjung.");
    //         set({ error: "User data not found. Please login again." });
    //         return;
    //     }

    //     try {
    //         const response = await axios.post("https://api-invitation.xyz/api/pengunjung", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data", // Untuk upload file
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             withCredentials: true,
    //         });

    //         toast.success("Pengunjung berhasil ditambahkan!");
    //         get().fetchPengunjung(); // Refresh data pengunjung
    //     } catch (error) {
    //         console.error("Error saat menambahkan pengunjung:", error);

    //         // Handle different types of errors
    //         if (error.response) {
    //             // Server responded with a status code outside the 2xx range
    //             toast.error(error.response.data.message || "Terjadi kesalahan.");
    //             if (setError) setError(error.response.data.message);
    //         } else if (error.request) {
    //             // No response received (e.g., network error)
    //             toast.error("Tidak ada respons dari server. Periksa koneksi internet Anda.");
    //             if (setError) setError("Tidak ada respons dari server. Periksa koneksi internet Anda.");
    //         } else {
    //             // Something else happened
    //             toast.error("Terjadi kesalahan. Silakan coba lagi.");
    //             if (setError) setError("Terjadi kesalahan. Silakan coba lagi.");
    //         }
    //     }
    // },

    createPengunjung: async(wbpData, setError) => {
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to fetch wargabinaans.");
            set({ error: "User data not found. Please login again." });
            return;
        }

        try {
            const response = await axios.post("https://api-invitation.xyz/api/pengunjung", wbpData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Create wbp response:", response.data);
            const newWbp = response.data;

            console.log("newWbp", response);

            set((state) => ({
                pengunjungs: [...state.pengunjungs, newWbp],
                cartItems: [], // Kosongkan keranjang setelah wbp sukses
            }));

            toast.success("wbp created successfully!"); // Notifikasi sukses

        } catch (error) {
            console.error("Create wbp error:", error);

            // Penanganan error yang lebih baik
            if (error.response) {
                // Error dari server (4xx atau 5xx)
                toast.error(error.response.data.message || "wbp creation failed.");
                setError(error.response.data.message || "wbp creation failed. Please try again.");
            } else if (error.request) {
                // Tidak ada respons dari server
                toast.error("No response from server. Please check your connection.");
                setError("No response from server. Please check your connection.");
            } else {
                // Error lainnya (misalnya, error JavaScript)
                toast.error("An unexpected error occurred. Please try again.");
                setError("An unexpected error occurred. Please try again.");
            }
        }
    },

    // Fungsi untuk update nomor antrian (menggunakan body)
    // updateAntrian: async(kode, antrian) => {
    //     set({ loading: true, error: null }); // Set loading state

    //     try {
    //         // Kirim permintaan ke backend untuk update antrian
    //         const response = await axios.put("/pengunjung/update-antrian", { kode, antrian });

    //         if (response.status === 200) {
    //             // Update state pengunjungs dengan data terbaru
    //             set((state) => ({
    //                 pengunjungs: state.pengunjungs.map((pengunjung) =>
    //                     pengunjung.kode === kode{...pengunjung, antrian } : pengunjung
    //                 ),
    //             }));

    //             toast.success("Nomor antrian berhasil diupdate!");
    //         } else {
    //             throw new Error("Gagal mengupdate nomor antrian.");
    //         }
    //     } catch (error) {
    //         console.error("Update antrian error:", error);
    //         set({ error: error.response.data.message || "Terjadi kesalahan saat mengupdate antrian." });
    //         toast.error(error.response.data.message || "Terjadi kesalahan saat mengupdate antrian.");
    //     } finally {
    //         set({ loading: false }); // Reset loading state
    //     }
    // },

    // updateAntrian: async(kode, antrian) => {
    //     set({ loading: true, error: null }); // Set loading state

    //     try {
    //         console.log("Data yang dikirim:", { kode, antrian }); // Debugging

    //         // Kirim permintaan ke backend untuk update antrian
    //         const response = await axios.put("/pengunjung/update-antrian", { kode, antrian });

    //         console.log("Respons dari backend:", response.data); // Debugging

    //         if (response.status === 200) {
    //             // Update state pengunjungs dengan data terbaru
    //             set((state) => ({
    //                 pengunjungs: state.pengunjungs.map((pengunjung) =>
    //                     pengunjung.kode === kode{...pengunjung, antrian } : pengunjung
    //                 ),
    //             }));

    //             toast.success("Nomor antrian berhasil diupdate!");
    //         } else {
    //             throw new Error("Gagal mengupdate nomor antrian.");
    //         }
    //     } catch (error) {
    //         console.error("Update antrian error:", error);
    //         set({ error: error.response.data.message || "Terjadi kesalahan saat mengupdate antrian." });
    //         toast.error(error.response.data.message || "Terjadi kesalahan saat mengupdate antrian.");
    //     } finally {
    //         set({ loading: false }); // Reset loading state
    //     }
    // },

    // Update antrian pengunjung
    // Pada useDataStore, pastikan ada fungsi updateAntrian
    updateAntrian: async(kode) => {
        set({ loading: true, error: null });
        const token = get().token;
        if (!token) {
            console.error("Token not found. Unable to fetch wargabinaans.");
            set({ error: "User data not found. Please login again." });
            return;
        }
        try {
            const response = await axios.put('https://api-invitation.xyz/api/pengunjung/update-antrian', { kode }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                set((state) => ({
                    pengunjungs: state.pengunjungs.map((pengunjung) =>
                        pengunjung.kode === kode ? {...pengunjung, antrian: response.data.data.antrian } : pengunjung
                    ),
                }));
                toast.success('Nomor antrian berhasil diupdate!');
                return response.data.data;
            }
        } catch (error) {
            // Handle error
            console.error('Update antrian error:', error);
            set({ error: error.response.data.message || 'Terjadi kesalahan saat mengupdate antrian.' });
        } finally {
            set({ loading: false });
        }
    },


    // Fungsi untuk mengambil nomor antrian terakhir
    // getNomorAntrianTerakhir: async() => {
    //     try {
    //         const userData = get().userData;
    //         if (!userData) {
    //             console.error("User data not found. Unable to fetch last antrian.");
    //             toast.error("Anda harus login terlebih dahulu.");
    //             return null;
    //         }

    //         // Kirim permintaan GET ke endpoint backend
    //         const response = await axios.get("/pengunjung/antrian-terakhir");

    //         // Pastikan respons memiliki data yang diharapkan
    //         if (response.data && response.data.lastNumber !== undefined) {
    //             return response.data.lastNumber; // Kembalikan nomor antrian terakhir
    //         } else {
    //             throw new Error("Format respons tidak valid.");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching last antrian:", error);

    //         // Tampilkan pesan error menggunakan toast
    //         const errorMessage =
    //             error.response.data.message ||
    //             error.message ||
    //             "Terjadi kesalahan saat mengambil nomor antrian terakhir.";
    //         toast.error(errorMessage);

    //         return null; // Kembalikan null jika terjadi error
    //     }
    // },

    // getNomorAntrianTerakhir: async() => {
    //     try {
    //         const token = get().token;
    //         if (!token) {
    //             console.error("Token not found. Unable to fetch wargabinaans.");
    //             set({ error: "User data not found. Please login again." });
    //             return;
    //         }

    //         // Kirim permintaan GET ke endpoint backend
    //         const response = await axios.get("/pengunjung/antrian-terakhir", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         // Pastikan respons memiliki data yang diharapkan
    //         if (response.data && response.data.lastNumber !== undefined) {
    //             // Konversi lastNumber (integer) ke format XXX
    //             const lastNumber = response.data.lastNumber;
    //             const formattedLastNumber = String(lastNumber).padStart(3, '0'); // Contoh: 1 -> "001"
    //             return formattedLastNumber; // Kembalikan dalam format "001"
    //         } else {
    //             throw new Error("Format respons tidak valid.");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching last antrian:", error);

    //         // Tampilkan pesan error menggunakan toast
    //         const errorMessage =
    //             error.response.data.message ||
    //             error.message ||
    //             "Terjadi kesalahan saat mengambil nomor antrian terakhir.";
    //         toast.error(errorMessage);

    //         return null; // Kembalikan null jika terjadi error
    //     }
    // },

}));

export default useDataStore;