import axios from "axios";

export const listsApi = {
  async createList(title) {
    return await axios
      .post(`http://localhost:5000/apiLists/lists`, { title })
      .then((response) => {
        return response.data;
      });
  },

  async getLists() {
    return await axios
      .get(`http://localhost:5000/apiLists/lists`)
      .then((response) => {
        return response.data;
      });
  },

  async editList(title, id) {
    return await axios
      .put(`http://localhost:5000/apiLists/lists/${id}`, { title })
      .then((response) => {
        return response.data;
      });
  },

  async editListPosition(
    sourceId,
    destinationId,
    sourceIndex,
    destinationIndex
  ) {
    return await axios
      .patch(`http://localhost:5000/apiLists/lists/`, {
        sourceId,
        destinationId,
        sourceIndex,
        destinationIndex,
      })
      .then((response) => {
        return response.data;
      });
  },

  async delList(id) {
    return await axios
      .delete(`http://localhost:5000/apiLists/lists/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
