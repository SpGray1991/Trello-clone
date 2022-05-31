import ColumnService from "./ColumnService.js";

class ColumnController {
  async create(req, res) {
    try {
      const column = await ColumnService.create(req.body);
      res.json(column);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const columns = await ColumnService.getAll();
      return res.json(columns);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const column = await ColumnService.getOne(req.params.id);
      return res.json(column);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedColumn = await ColumnService.update(req.body);
      return res.json(updatedColumn);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const column = await ColumnService.delete(req.params.id);
      return res.json(column);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new ColumnController();
