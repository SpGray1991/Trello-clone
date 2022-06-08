import cardService from "../service/cardService.js";

class cardController {
  async create(req, res) {
    const { text, listId } = req.body;

    const cards = await cardService.get({ listId });

    const card = await cardService
      .create({
        text,
        listId,
        order: cards.length,
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });

    return res.status(201).json(card);
    /*  try {
      const card = await cardService.create(req.body);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    } */
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
    const { sourceId, destinationId, sourceIndex, destinationIndex } = req.body;
    console.log("Req", req.body);
    const srcCards = await cardService.get({ listId: sourceId });
    const dstCards = await cardService.get({ listId: destinationId });

    console.log("srcCards", srcCards);
    console.log("dstCards в начале", dstCards);

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

    console.log("dstCards измененное", dstCards);

    orderedSrcCards = srcCards.map((c, index) => {
      return { id: c._id, sortOrder: index };
    });

    //TODO: More efficient multi update
    if (!!orderedDstCards) {
      orderedDstCards.forEach(async (c) => {
        await cardService.update(c.id, {
          order: c.sortOrder,
          listId: c.listId,
        });
      });
    }

    //TODO: More efficient multi update
    orderedSrcCards.forEach(async (c) => {
      await cardService.update(c.id, {
        order: c.sortOrder,
      });
    });

    return res.status(200).json(srcCards);
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
