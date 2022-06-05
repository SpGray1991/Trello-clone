import axios from "axios";

export const cardsApi = {
  async createCard(text, listId) {
    console.log("124346", listId, { text, listId });
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
  async getOneCard(id) {
    return await axios
      .get(`http://localhost:5000/apiCards/cards/:${id}`)
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
  async delCard(id) {
    return await axios
      .delete(`http://localhost:5000/apiCards/cards/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
