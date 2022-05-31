import express from "express";
import mongoose from "mongoose";
import routerLists from "./routers/routerLists.js";
import routerCards from "./routers/routerCards.js";
import cors from "cors";

const PORT = 5000;
const DB_URL = `mongodb+srv://Gray1991:z1x2c3v4@cluster0.iqjmk.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/apiLists", routerLists);
app.use("/apiCards", routerCards);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
