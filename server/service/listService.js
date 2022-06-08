import listModel from "../models/listModel.js";

class listService {
  async create(list) {
    const createdList = await listModel.create(list);
    return createdList;
  }

  async getAll() {
    const lists = await listModel.find().sort("order");
    return lists;
  }

  async update(listId, data) {
    if (!listId) {
      throw new Error("id не указан");
    }
    const updatedList = await listModel.findByIdAndUpdate(listId, data);
    return await updatedList.save();
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const list = await listModel.findByIdAndRemove(id);
    return list;
  }
}

export default new listService();
