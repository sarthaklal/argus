import axios from "axios";

const API_BASE_URL = import.meta.env.DEV ? "http://localhost:8005/api" : (import.meta.env.VITE_API_URL || "http://localhost:8005/api");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
