import mongoose from "mongoose";

const ColumnModel = new mongoose.Schema({
  title: { type: String, required: true },
});

export default mongoose.model("ColumnModel", ColumnModel);
