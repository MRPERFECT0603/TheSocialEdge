
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://thesocialedge-api.onrender.com/api/",
  withCredentials: true,
});
