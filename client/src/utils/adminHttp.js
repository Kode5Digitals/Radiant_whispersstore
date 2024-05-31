import axios from "axios";


const http = axios.create({
  baseURL: `https://radiant-whispersstore.onrender.com`,
headers: { "Content-Type": "multipart/form-data" }
 
});





let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post('https://radiant-whispersstore.onrender.com/user/refresh-token', { refreshToken });
    if (response.status === 200) {
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      return accessToken;
    }
  } catch (error) {
    console.error("Error refreshing token", error);
    throw error;
  }
};

http.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axios(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshToken();
        processQueue(null, newToken);
        originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
        return axios(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
























// const refreshToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     const response = await axios.post('https://radiant-whispersstore.onrender.com/user/refresh-token', { refreshToken });
//     if (response.status === 200) {
//       const { accessToken, refreshToken: newRefreshToken } = response.data;
//       localStorage.setItem("token", accessToken);
//       localStorage.setItem("refreshToken", newRefreshToken);
    
//    }
//   } catch (error) {
//     console.error(error);
//   }
// };




// http.interceptors.request.use(
//    async (config) => {

// await refreshToken()
//       const token = await localStorage.getItem("token")
//       if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//         console.log(token)
//       }
//       return config;
//     },
//     (error) => Promise.reject(error),
//   )
// // function jwtDecode(t) {
// //   let token = {};
// //   token.raw = t;
// //   token.header = JSON.parse(window.atob(t.split('.')[0]));
// //   token.payload = JSON.parse(window.atob(t.split('.')[1]));
// //   return (token)
// // }
// // http.interceptors.request.use(
// //   async (config) => {
// //     let token = localStorage.getItem("token");
// //     if (token) {
// //       const decoded = jwtDecode(token);
// //       if (decoded.exp * 1000 < Date.now()) {
// //         const refreshToken = localStorage.getItem("refreshToken");
// //         const response = await axios.post('https://radiant-whispersstore.onrender.com/user/refresh-token', { refreshToken });
// //         if (response.status === 200) {
// //           const { accessToken, refreshToken: newRefreshToken } = response.data;
// //           localStorage.setItem("token", accessToken);
// //           localStorage.setItem("refreshToken", newRefreshToken);
// //           token = accessToken;
// //           console.log(token)
// //         }
// //       }
// //       config.headers["Authorization"] = `Bearer ${token}`;
// //     }
// //     return config;
// //   },
// //   (error) => Promise.reject(error),
// // );

  export default http;