import { CONSTANTS } from "../action-creators/constants";

const initialState = {
  cards: [],
  error: null,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_CARDS:
      return {
        error: null,
        cards: action.payload,
      };

    case CONSTANTS.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };

    case CONSTANTS.CARDS_ERROR:
      return {
        error: action.payload,
        cards: [],
      };

    default:
      return state;
  }
};
