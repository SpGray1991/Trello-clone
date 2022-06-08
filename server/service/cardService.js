import cardModel from "../models/cardModel.js";

class cardService {
  async create(card) {
    const createdCard = await cardModel.create(card);
    return createdCard;
  }

  async get({ listId }) {
    const cards = await cardModel.find({ listId }).sort("order").exec();
    return cards;
  }

  async getAll() {
    const cards = await cardModel.find();
    return cards;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("не указан id");
    }
    const card = await cardModel.findById(id);
    return card;
  }

  async update(id, data) {
    if (!id) {
      throw new Error("id не указан");
    }
    const updatedCard = await cardModel.findByIdAndUpdate(id, data);
    return updatedCard.save();
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const card = await cardModel.findByIdAndRemove(id);
    return card;
  }
}

export default new cardService();
