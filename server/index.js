import config from "./config/index.js";
import express from "express";
import mongoose from "mongoose";
import routerLists from "./routers/routerLists.js";
import routerCards from "./routers/routerCards.js";
import cors from "cors";

const { PORT, DB_URL } = config;

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
