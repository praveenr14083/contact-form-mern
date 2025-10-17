// config/env.config.js
import dotenv from "dotenv";

dotenv.config(); // load .env file

export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
};
