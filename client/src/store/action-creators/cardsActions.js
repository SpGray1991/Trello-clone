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

export const addCardAC = (text) => {
  return async (dispatch) => {
    try {
      const response = await cardsApi.createCard(text);
      dispatch({ type: CONSTANTS.ADD_CARD, payload: response });
    } catch (e) {
      dispatch({
        type: CONSTANTS.CARDS_ERROR,
        payload: "Произошла ошибка при загрузке карточек!",
      });
    }
  };
};
