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
    console.log("API");
    return await axios
      .get(`http://localhost:5000/apiLists/lists`)
      .then((response) => {
        return response.data;
      });
  },
  async getOneList(id) {
    return await axios
      .get(`http://localhost:5000/apiLists/lists/:${id}`)
      .then((response) => {
        return response.data;
      });
  },
  async addList() {
    return await axios
      .put(`http://localhost:5000/apiLists/lists`)
      .then((response) => {
        return response.data;
      });
  },
  async delList(id) {
    return await axios
      .delete(`http://localhost:5000/apiLists/lists/:${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
