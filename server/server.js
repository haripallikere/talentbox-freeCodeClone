import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import signInRouter from "./routes/signIn.js";
import registerRouter from "./routes/register.js";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const mongoURL = process.env.MONGODB_URL;

// routes
app.use("/login", signInRouter);
app.use("/register", registerRouter);

mongoose.connect(process.env.MONGODB_URL);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
