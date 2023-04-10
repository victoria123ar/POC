import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import movieRoutes from "./routes/movieRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(movieRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
