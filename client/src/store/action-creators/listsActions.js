import { listsApi } from "../../api/api";
import { CONSTANTS } from "./constants";

export const getListsAC = () => {
  return async (dispatch) => {
    try {
      const response = await listsApi.getLists();
      dispatch({ type: CONSTANTS.GET_LISTS, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.LISTS_ERROR,
        payload: "Произошла ошибка при загрузке списков!",
      });
    }
  };
};

export const addListAC = (title) => {
  return async (dispatch) => {
    try {
      const response = await listsApi.createList(title);
      dispatch({ type: CONSTANTS.ADD_LIST, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.LISTS_ERROR,
        payload: "Произошла ошибка при загрузке списков!",
      });
    }
  };
};
