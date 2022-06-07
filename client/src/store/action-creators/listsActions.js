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

export const editListPositionAC = (indexList, id) => {
  console.log("EDIT", indexList, id);
  return async (dispatch) => {
    await listsApi.editListPosition(indexList, id);
    const response = await listsApi.getLists();
    dispatch({ type: CONSTANTS.GET_LISTS, payload: response });
  };
};

/* export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  console.log("droppableIdStart", droppableIdStart);
  console.log("droppableIdEnd", droppableIdEnd);
  console.log("droppableIndexStart", droppableIndexStart);
  console.log("droppableIndexEnd", droppableIndexEnd);
  console.log("draggableId", draggableId);
  console.log("type", type);

  return (dispatch, getState) => {
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
      },
    });
  };
}; */
