import listModel from "../models/listModel.js";

class listService {
  async create(list) {
    const createdList = await listModel.create(list);
    return createdList;
  }

  async getAll() {
    const lists = await listModel.find();
    return lists;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("не указан id");
    }
    const list = await listModel.findById(id);
    return list;
  }

  async update(list) {
    if (!list._id) {
      throw new Error("id не указан");
    }
    const updatedList = await listModel.findByIdAndUpdate(list._id, list, {
      new: true,
    });
    return updatedList;
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