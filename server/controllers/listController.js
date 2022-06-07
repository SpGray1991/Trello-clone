import listService from "../service/listService.js";

class listController {
  async create(req, res) {
    try {
      const { title } = req.body;

      const lists = await listService.getAll();

      const list = await listService.create({
        title,
        order: lists.length + 1,
      });
      res.json(list);

      /* const list = await listService.create(req.body);
      res.json(list); */
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateListOrder(req, res) {
    const { sourceId, destinationId, sourceIndex, destinationIndex } = req.body;

    // pull down all lists for board
    const lists = await listService.getAll();

    // // perform reorder
    const [list] = lists.splice(sourceIndex, 1);
    lists.splice(destinationIndex, 0, list);

    const orderedLists = lists.map((l, index) => {
      return { id: l._id, sortOrder: index + 1 };
    });

    //TODO: Multi update implementation rather than separate queries
    orderedLists.forEach(async (l) => {
      await listService.update(l.id, {
        sortOrder: l.sortOrder,
      });
    });

    return res.status(200).json(lists);
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
