import mongoose from "mongoose";

const listModel = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, required: true },
});

export default mongoose.model("listModel", listModel);
