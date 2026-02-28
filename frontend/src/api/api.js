import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-api-one-rho.vercel.app",
  withCredentials: true, 
});

export default api;
