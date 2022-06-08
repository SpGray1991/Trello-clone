import { listsApi } from "../../api/apiLists";
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
      await listsApi.createList(title);
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

export const delListAC = (id) => {
  return async (dispatch) => {
    await listsApi.delList(id);
    const response = await listsApi.getLists();
    dispatch({ type: CONSTANTS.GET_LISTS, payload: response });
  };
};

export const editListAC = (title, id) => {
  console.log("EDIT", title, id);
  return async (dispatch) => {
    await listsApi.editList(title, id);
    const response = await listsApi.getLists();
    dispatch({ type: CONSTANTS.GET_LISTS, payload: response });
  };
};

export const editListPositionAC = (
  sourceId,
  destinationId,
  sourceIndex,
  destinationIndex
) => {
  return async (dispatch) => {
    await listsApi.editListPosition(
      sourceId,
      destinationId,
      sourceIndex,
      destinationIndex
    );
    const response = await listsApi.getLists();
    dispatch({ type: CONSTANTS.GET_LISTS, payload: response });
  };
};
