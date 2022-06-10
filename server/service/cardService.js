import cardModel from "../models/cardModel.js";
import listModel from "../models/listModel.js";

class cardService {
  async create(card) {
    const createdCard = await cardModel.create(card);
    return createdCard;
  }

  async get({ listId }) {
    const cards = await cardModel.find({ listId }).sort("order");
    return cards;
  }

  async getAll() {
    const cards = await cardModel.find();
    const lists = await listModel.find();

    const listWithCards = [lists, cards];

    return listWithCards;
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
