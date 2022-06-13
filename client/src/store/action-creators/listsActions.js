import { listsApi } from "../../api/apiLists";
import { CONSTANTS } from "./constants";
import { cardsApi } from "../../api/apiCards";

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

      const res = await cardsApi.getCards();
      dispatch({ type: CONSTANTS.GET_CARDS, payload: res });
    } catch (e) {
      dispatch({
        type: CONSTANTS.LISTS_ERROR,
        payload: "Произошла ошибка при создании списка!",
      });
    }
  };
};

export const delListAC = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CONSTANTS.DEL_LIST, payload: id });

      await listsApi.delList(id);
    } catch (e) {
      console.log(e);
    }
  };
};

export const editListAC = (title, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CONSTANTS.EDIT_LIST, payload: { title, id } });

      await listsApi.editList(title, id);
    } catch (e) {
      console.log(e);
    }
  };
};

export const editListPositionAC = (
  sourceId,
  destinationId,
  sourceIndex,
  destinationIndex
) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CONSTANTS.UPDATE_LIST_ORDER,
        payload: {
          sourceIndex,
          destinationIndex,
        },
      });

      await listsApi.editListPosition(
        sourceId,
        destinationId,
        sourceIndex,
        destinationIndex
      );
    } catch (e) {
      console.log(e);
    }
  };
};
