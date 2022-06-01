import mongoose from "mongoose";

const cardModel = new mongoose.Schema({
  text: { type: String, required: true },
  listId: { type: String, required: true },
});

export default mongoose.model("cardModel", cardModel);
