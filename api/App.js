import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();
const App = express();

const port = process.env.PORT || 5000;

App.get("/", (req, res) => {
  res.send('Hello')
})

App.listen(port, () => {
  console.log(`Server Runnig On Port: http://localhost:${port}`);
}) 
