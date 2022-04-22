import express, { Router } from "express";
import mongoose from "mongoose";
import route from "./Route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", route);

const url =process.env.MONGODB_URL;
const PORT = "8000";

mongoose.connect(url).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running!!!${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
