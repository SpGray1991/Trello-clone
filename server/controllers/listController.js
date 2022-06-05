import listService from "../service/listService.js";

class listController {
  async create(req, res) {
    try {
      const list = await listService.create(req.body);
      res.json(list);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const lists = await listService.getAll();
      return res.json(lists);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const list = await listService.getOne(req.params.id);
      return res.json(list);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedList = await listService.update(req.body, req.params.id);
      return res.json(updatedList);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const list = await listService.delete(req.params.id);
      return res.json(list);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new listController();
