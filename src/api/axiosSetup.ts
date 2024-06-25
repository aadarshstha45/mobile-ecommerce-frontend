import axios from "axios";

const THREE_MINUTES = 3 * 60 * 1000;
// export const baseURL = "http://localhost:4001/api";
// export const BaseURL = "http://localhost:4001";
export const BaseURL = import.meta.env.VITE_STORAGE_URL;
export const baseURL = import.meta.env.VITE_BASE_URL;

/**
 * Axios HTTP Client
 * {@link https://github.com/axios/axios#request-config Axios Request Config}
 */
const HttpClient = axios.create({
  baseURL,
  timeout: THREE_MINUTES,
});

/**
 * Pass Integito API Key in Header
 */

export { HttpClient };
