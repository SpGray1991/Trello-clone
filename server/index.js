import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";

const PORT = 5000;
const DB_URL = `mongodb+srv://Gray1991:z1x2c3v4@cluster0.iqjmk.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/apiLists", router);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
