import axios from 'axios';

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@Forum:Token") || "";
  config.headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return config;
});

export default api;