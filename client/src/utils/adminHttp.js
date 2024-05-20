import axios from "axios";
const http = axios.create({
  baseURL: `https://radiant-whispersstore.onrender.com`,
//   baseURL: `http://localhost:4000`,
headers: { "Content-Type": "multipart/form-data" }
 
});

http.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  )
  export default http;