import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-api-liart-mu.vercel.app/",
  withCredentials: true, 
});

export default api;
