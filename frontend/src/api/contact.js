import axios from "axios";

// Use Vite environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const submitContact = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/api/contact`, data);
  return res.data;
};
