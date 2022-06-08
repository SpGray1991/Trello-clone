import { cardsApi } from "../../api/apiCards";
import { CONSTANTS } from "./constants";

export const getCardsAC = () => {
  return async (dispatch) => {
    try {
      const response = await cardsApi.getCards();
      console.log("WORK", response);
      dispatch({ type: CONSTANTS.GET_CARDS, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.CARDS_ERROR,
        payload: "Произошла ошибка при загрузке карточек!",
      });
    }
  };
};

export const addCardAC = (text, listId) => {
  return async (dispatch) => {
    try {
      await cardsApi.createCard(text, listId);
      const response = await cardsApi.getCards();
      dispatch({ type: CONSTANTS.GET_CARDS, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.CARDS_ERROR,
        payload: "Произошла ошибка при загрузке карточек!",
      });
    }
  };
};

export const delCardAC = (id) => {
  return async (dispatch) => {
    await cardsApi.delCard(id);
    const response = await cardsApi.getCards();
    dispatch({ type: CONSTANTS.GET_CARDS, payload: response });
  };
};

export const editCardAC = (text, id) => {
  return async (dispatch) => {
    await cardsApi.editCard(text, id);
    const response = await cardsApi.getCards();
    dispatch({ type: CONSTANTS.GET_CARDS, payload: response });
  };
};

export const editCardPositionAC = (
  sourceId,
  destinationId,
  sourceIndex,
  destinationIndex,
  type
) => {
  return async (dispatch) => {
    try {
      await cardsApi.editCardPosition(
        sourceId,
        destinationId,
        sourceIndex,
        destinationIndex,
        type
      );
      console.log("work");
      const response = await cardsApi.getCards();
      console.log("card Actions res getAll", response);
      dispatch({ type: CONSTANTS.GET_CARDS, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.CARDS_ERROR,
        payload: "Произошла ошибка при загрузке карточек!",
      });
    }
  };
};
