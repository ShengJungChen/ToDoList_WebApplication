import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import model from "./models/index.js";

const app = express();

//connect to database
mongoose.connect('mongodb://localhost:27017/to-dosDB')

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// initialize routes
routes(app);

export default app;