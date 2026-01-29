import axios from "axios";

// Base URL from env
const BASE_URL = import.meta.env.VITE_API_URL as string;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===============================
   Request Interceptor
   (Attach Token)
================================ */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // or cookie later

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* ===============================
   Response Interceptor
   (Handle Errors)
================================ */
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    // Token expired / unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;