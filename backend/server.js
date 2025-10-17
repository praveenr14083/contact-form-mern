import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.config.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

app.listen(ENV.PORT, () => console.log(`Server running on port ${ENV.PORT}`));
