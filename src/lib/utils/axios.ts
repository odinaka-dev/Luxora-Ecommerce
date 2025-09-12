import axios from "axios";

import { baseURL } from "@/config";

export const axiosInstance = axios.create({ baseURL: `${baseURL}/api/v1/` });

// handle interceptors for Request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// handle interceptors for Response
axiosInstance.interceptors.response.use((response) => {
  const data = response?.data;
  const success = data?.success;

  if (!success) {
    throw new Error("Failed Response");
  }

  return response;
});
