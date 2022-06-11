import { cardsApi } from "../../api/apiCards";
import { CONSTANTS } from "./constants";

export const getCardsAC = () => {
  return async (dispatch) => {
    try {
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

export const addCardAC = (text, listId) => {
  return async (dispatch) => {
    try {
      const response = await cardsApi.createCard(text, listId);

      dispatch({ type: CONSTANTS.ADD_CARD, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.CARDS_ERROR,
        payload: "Произошла ошибка при создании карточки!",
      });
    }
  };
};

export const delCardAC = (idCard, idList) => {
  return async (dispatch) => {
    dispatch({ type: CONSTANTS.DEL_CARD, payload: { idCard, idList } });

    await cardsApi.delCard(idCard);
  };
};

export const editCardAC = (text, id, listID) => {
  return async (dispatch) => {
    dispatch({ type: CONSTANTS.EDIT_CARD, payload: { text, id, listID } });

    await cardsApi.editCard(text, id);
  };
};

export const editCardPositionAC = (
  sourceId,
  destinationId,
  sourceIndex,
  destinationIndex
) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTANTS.UPDATE_CARD_ORDER,
      payload: {
        sourceId,
        destinationId,
        sourceIndex,
        destinationIndex,
      },
    });

    await cardsApi.editCardPosition(
      sourceId,
      destinationId,
      sourceIndex,
      destinationIndex
    );
  };
};
