import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import orderRouter from "./routes/orderRouter.js";
import user from "./routes/user.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
    .connect(
        "mongodb://venkatasaichinnakondu_db_user:password@ac-ceguikv-shard-00-00.6roct4j.mongodb.net:27017,ac-ceguikv-shard-00-01.6roct4j.mongodb.net:27017,ac-ceguikv-shard-00-02.6roct4j.mongodb.net:27017/?ssl=true&replicaSet=atlas-1potsg-shard-0&authSource=admin&appName=Cluster0"
    )
    .then(() => {
        console.log("mongoose is connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Routes
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", categoryRouter);
app.use("/api", orderRouter);
app.use("/api", user);

// __dirname replacement for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server
app.listen(3000, () => {
    console.log("port is running......!");
});
