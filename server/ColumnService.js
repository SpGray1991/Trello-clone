import ColumnModel from "../server/models/ColumnModel.js";

class ColumnService {
  async create(column) {
    const createdColumn = await ColumnModel.create(column);
    return createdColumn;
  }

  async getAll() {
    const columns = await ColumnModel.find();
    return columns;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("не указан id");
    }
    const column = await ColumnModel.findById(id);
    return column;
  }

  async update(column) {
    if (!column._id) {
      throw new Error("id не указан");
    }
    const updatedColumn = await ColumnModel.findByIdAndUpdate(
      column._id,
      column,
      {
        new: true,
      }
    );
    return updatedColumn;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const column = await ColumnModel.findByIdAndRemove(id);
    return column;
  }
}

export default new ColumnService();
