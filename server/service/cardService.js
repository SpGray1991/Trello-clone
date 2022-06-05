import cardModel from "../models/cardModel.js";

class cardService {
  async create(card) {
    const createdCard = await cardModel.create(card);
    return createdCard;
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

  async update(text, id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const updatedCard = await cardModel.findByIdAndUpdate(id, text, {
      new: true,
    });
    return updatedCard;
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
