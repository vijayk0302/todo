import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-api-liart-mu.vercel.app/",
});

export default api;
