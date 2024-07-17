import axios from "axios";

const THREE_MINUTES = 3 * 60 * 1000;
// export const baseURL = "http://localhost:4001/api";
// export const BaseURL = "http://localhost:4001";
export const BaseURL = import.meta.env.VITE_STORAGE_URL;
export const baseURL = import.meta.env.VITE_BASE_URL;

const getAuthToken = () => {
  const token = sessionStorage.getItem("access_token");
  return token ? `Bearer ${token}` : "";
};

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

/**
 * Pass Integito API Key in Header
 */

export { HttpClient };
