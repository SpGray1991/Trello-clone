import axios from "axios";

export const cardsApi = {
  async createCard(text, listId) {
    return await axios
      .post(`http://localhost:5000/apiCards/cards`, { text, listId })
      .then((response) => {
        return response.data;
      });
  },

  async getCards() {
    return await axios
      .get(`http://localhost:5000/apiCards/cards`)
      .then((response) => {
        return response.data;
      });
  },

  async editCard(text, id) {
    return await axios
      .put(`http://localhost:5000/apiCards/cards/${id}`, { text })
      .then((response) => {
        return response.data;
      });
  },

  async editCardPosition(
    sourceId,
    destinationId,
    sourceIndex,
    destinationIndex
  ) {
    return await axios
      .patch(`http://localhost:5000/apiCards/cards/`, {
        sourceId,
        destinationId,
        sourceIndex,
        destinationIndex,
      })
      .then((response) => {
        return response;
      });
  },

  async delCard(id) {
    return await axios
      .delete(`http://localhost:5000/apiCards/cards/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
