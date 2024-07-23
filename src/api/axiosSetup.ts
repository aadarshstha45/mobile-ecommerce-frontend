import axios from "axios";

const THREE_MINUTES = 3 * 60 * 1000;
// export const baseURL = "http://localhost:4001/api";
// export const BaseURL = "http://localhost:4001";
export const BaseURL = import.meta.env.VITE_STORAGE_URL;
export const baseURL = import.meta.env.VITE_BASE_URL;

const getAuthToken = () => sessionStorage.getItem("access_token");

export const isAuthenticated = sessionStorage.getItem("access_token")
  ? true
  : false;

/**
 * Axios HTTP Client
 * {@link https://github.com/axios/axios#request-config Axios Request Config}
 */
const HttpClient = axios.create({
  baseURL,
  timeout: THREE_MINUTES,
});

// Add a request interceptor to include the authorization header
HttpClient.interceptors.request.use(
  async (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// HttpClient.interceptors.request.use(async (config) => {
//   const token = TokenService.getToken()?.token;
//   console.log("Token axios", token);
//   if (config && config.headers) {
//     if (token && config.headers["Authorization"] !== "") {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     if (config.headers["Authorization"] === "") {
//       delete config.headers["Authorization"];
//     }
//   }
//   return config;
// });

/**
 * Pass Integito API Key in Header
 */

export { HttpClient };
