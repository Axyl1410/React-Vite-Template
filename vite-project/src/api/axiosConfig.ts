import axios from "axios";

/**
 * this file is used to configure the axios instance
 * to include the Authorization header in every request
 * for spring security to work
 */

const api = axios.create({
  baseURL: "http://localhost:8080", // Adjust the base URL as needed
});

// Add a request interceptor to include the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
