import mongoose from "mongoose";
import { ENV } from "./env.config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      ENV.MONGO_URI || "mongodb://127.0.0.1:27017/contactDB"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
