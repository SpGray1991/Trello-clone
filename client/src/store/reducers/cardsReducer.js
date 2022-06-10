import { CONSTANTS } from "../action-creators/constants";

const initialState = {
  cards: [],
  byId: [],
  error: null,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_CARDS:
      console.log("Приходят из базы", action.payload);

      return {
        cards: action.payload,
        byId: arrayToArrays(action.payload),
      };

    /*  return {
        error: null,
        cards: action.payload,
      }; */

    case CONSTANTS.UPDATE_CARD_ORDER:
      const { sourceId, destinationId, sourceIndex, destinationIndex } =
        action.payload;

      const cards = [...state.byId[sourceId]];

      if (sourceId !== destinationId) {
        /*  const sourceCards = state.cards.filter((c) => c._id === sourceId);
        const destinationCards = state.cards.filter(
          (c) => c._id === destinationId
        );
        const card = sourceCards.splice(sourceIndex, 1);
        destinationCards.splice(destinationIndex, 0, card);

        return {
          ...state,
          byId: {
            ...state.byId,
            [destinationId]: {
              ...state.byId[destinationId],
              cards: destinationCards,
            },
            [sourceId]: {
              ...state.byId[sourceId],
              cards: sourceCards,
            },
          },
        }; */
      } else {
        const [card] = cards.splice(sourceIndex, 1);
        cards.splice(destinationIndex, 0, card);
        const orderedSrcCards = cards.map((c, index) => {
          return { ...c, order: index };
        });

        return {
          ...state,
          byId: {
            ...state.byId,
            [destinationId]: orderedSrcCards,
          },
        };
      }

    case CONSTANTS.CARDS_ERROR:
      return {
        error: action.payload,
        cards: [],
      };

    default:
      return state;
  }
};

const arrayToArrays = (array) =>
  array.reduce((obj, item) => {
    if (!obj.hasOwnProperty(item.listId)) {
      obj[item.listId] = [];
    }
    obj[item.listId].push(item);
    return obj;
  }, {});
