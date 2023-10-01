import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getRoutes } from "./Routes/get.Routes.js";


dotenv.config();
const App = express();

App.use(cors());
App.use(express.json());

const port = process.env.PORT || 5000;

App.use(getRoutes)

App.listen(port, () => {
  console.log(`Server Runnig On Port: http://localhost:${port}`);
}) 
