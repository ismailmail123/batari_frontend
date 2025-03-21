export const isTokenExpired = (token) => {
    try {
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode token
        const currentTime = Date.now() / 1000; // Waktu saat ini dalam detik
        return decodedToken.exp < currentTime; // Cek apakah token sudah expired
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // Jika terjadi error, anggap token sudah expired
    }
};