import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

// 1. Create the Axios Instance
const apiClient = axios.create({
  baseURL: API_BASE,
});

// 2. The Interceptor: Automatically attaches JWT to EVERY request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 3. API Methods
export const paystackAPI = {
  // Payment Flow
  initialize: (email, amount) =>
    apiClient.post("/pay/initialize/", { email, amount }),

  verify: (reference) => apiClient.get(`/pay/verify/${reference}/`),

  // Authentication Flow (The New Part)
  loginWithPass: (passCode) =>
    apiClient.post("/pass/login-pass/", { pass_code: passCode }),
};
