import cardService from "../service/cardService.js";

class cardController {
  async create(req, res) {
    try {
      const { text, listId } = req.body;

      const cards = await cardService.get({ listId });

      const card = await cardService.create({
        text,
        listId,
        order: cards.length,
      });

      return res.status(200).json(card);
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

  async updateCardOrder(req, res) {
    try {
      const { sourceId, destinationId, sourceIndex, destinationIndex } =
        req.body;

      const srcCards = await cardService.get({ listId: sourceId });
      const dstCards = await cardService.get({ listId: destinationId });

      let orderedSrcCards;
      let orderedDstCards;

      if (sourceId !== destinationId) {
        const [card] = srcCards.splice(sourceIndex, 1);
        dstCards.splice(destinationIndex, 0, card);
        orderedDstCards = dstCards.map((c, index) => {
          return { id: c._id, sortOrder: index, listId: destinationId };
        });
      } else {
        const [card] = srcCards.splice(sourceIndex, 1);

        srcCards.splice(destinationIndex, 0, card);
      }

      orderedSrcCards = srcCards.map((c, index) => {
        return { id: c._id, sortOrder: index };
      });

      if (!!orderedDstCards) {
        orderedDstCards.forEach(async (c) => {
          await cardService.update(c.id, {
            order: c.sortOrder,
            listId: c.listId,
          });
        });
      }

      orderedSrcCards.forEach(async (c) => {
        await cardService.update(c.id, {
          order: c.sortOrder,
        });
      });

      return res.status(200).json(srcCards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedCard = await cardService.update(req.params.id, req.body);
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
