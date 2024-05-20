import axios from "axios";
const httpAuth = axios.create({
  // baseURL: `http://localhost:4000`,
  baseURL: `https://radiant-whispersstore.onrender.com`,

  headers: {
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
    // 'Accept': 'application/json',
  }
//   ,
//   credentials: 'include', 
});

// httpAuth.interceptors.request.use(
//   (config) => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
export default httpAuth;