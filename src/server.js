import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { connectDB, sequelize } from "./config/db.js";
import "dotenv/config";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

connectDB();

// table sync (optional)
sequelize.sync();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// this is test commit=
//test commmit 2
