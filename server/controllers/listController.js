import listService from "../service/listService.js";

class listController {
  async create(req, res) {
    try {
      const { title } = req.body;

      const lists = await listService.getAll();

      const list = await listService.create({
        title,
        order: lists.length,
      });
      res.json(list);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateListOrder(req, res) {
    try {
      const { sourceId, destinationId, sourceIndex, destinationIndex } =
        req.body;

      const lists = await listService.getAll();

      const [list] = lists.splice(sourceIndex, 1);

      lists.splice(destinationIndex, 0, list);

      const orderedLists = lists.map((l, index) => {
        return { id: l._id, sortOrder: index };
      });

      orderedLists.forEach(async (l) => {
        await listService.update(l.id, {
          order: l.sortOrder,
        });
      });

      return res.status(200).json(lists);
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

  async update(req, res) {
    try {
      const updatedList = await listService.update(req.params.id, req.body);
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
