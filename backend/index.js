import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

app.use(cors({ credentials: false, origin: 'http://localhost:4000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log('Server running at port 4000'));