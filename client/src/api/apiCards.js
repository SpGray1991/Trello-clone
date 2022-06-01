import axios from "axios";

export const cardsApi = {
  async createCard(text) {
    return await axios
      .post(`http://localhost:5000/apiCards/cards`, { text })
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
  async addCard() {
    return await axios
      .put(`http://localhost:5000/apiCards/cards`)
      .then((response) => {
        return response.data;
      });
  },
  async delCard(id) {
    return await axios
      .delete(`http://localhost:5000/apiCards/cards/:${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
