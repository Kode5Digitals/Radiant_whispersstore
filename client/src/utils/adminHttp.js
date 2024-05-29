import axios from "axios";
const http = axios.create({
  baseURL: `https://radiant-whispersstore.onrender.com`,
headers: { "Content-Type": "multipart/form-data" }
 
});

// http.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem("token")
//       if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//         console.log(token)
//       }
//       return config;
//     },
//     (error) => Promise.reject(error),
//   )
function jwtDecode(t) {
  let token = {};
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split('.')[0]));
  token.payload = JSON.parse(window.atob(t.split('.')[1]));
  return (token)
}
http.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        // Token expired, get new tokens
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post('https://radiant-whispersstore.onrender.com/user/refresh-token', { refreshToken });
        if (response.status === 200) {
          const { accessToken, refreshToken: newRefreshToken } = response.data;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("refreshToken", newRefreshToken);
          token = accessToken;
        }
      }
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

  export default http;