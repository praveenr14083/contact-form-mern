import axios from "axios";

export const submitContact = async (data) => {
  const res = await axios.post("http://localhost:5000/api/contact", data);
  return res.data;
};
