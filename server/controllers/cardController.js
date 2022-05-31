import cardService from "../service/cardService.js";

class cardController {
  async create(req, res) {
    try {
      const card = await cardService.create(req.body);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const cards = await cardService.getAll();
      return res.json(cards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const card = await cardService.getOne(req.params.id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedCard = await cardService.update(req.body);
      return res.json(updatedCard);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const card = await cardService.delete(req.params.id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new cardController();
