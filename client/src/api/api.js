import axios from "axios";

export const listsApi = {
  async popularFilms() {
    return await axios.get(`/movie/popular?page=1`).then((response) => {
      return response.data;
    });
  },
  async addFilms() {
    return await axios.get(`/movie/popular?page=`).then((response) => {
      return response.data;
    });
  },
  async movieInformation() {
    return await axios.get(`/movie/`).then((response) => {
      return response.data;
    });
  },
};
