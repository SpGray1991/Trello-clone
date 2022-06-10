import { CONSTANTS } from "../action-creators/constants";

const initialState = {
  byId: [],
  error: null,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_CARDS:
      const cardsForList = action.payload[1];

      let lists = action.payload[0].map((l) => {
        return {
          listId: l._id,
          cards: cardsForList.filter((c) => c.listId === l._id),
        };
      });

      console.log("LISTS", lists);

      return {
        byId: arrayToArrays(lists),
      };

    case CONSTANTS.UPDATE_CARD_ORDER:
      const { sourceId, destinationId, sourceIndex, destinationIndex } =
        action.payload;

      const cards = [...state.byId[sourceId]];

      if (sourceId !== destinationId) {
        console.log("sourceId", sourceId);
        console.log("destinationId", destinationId);

        const sourceCards = [...state.byId[sourceId]];
        console.log("sourceCards", sourceCards);
        const destinationCards = [...state.byId[destinationId]];
        console.log("destinationCards", destinationCards);
        const [card] = sourceCards.splice(sourceIndex, 1);
        destinationCards.splice(destinationIndex, 0, card);
        const orderedDstCards = destinationCards.map((c, index) => {
          return { ...c, order: index };
        });

        return {
          ...state,
          byId: {
            ...state.byId,
            [destinationId]: orderedDstCards,

            [sourceId]: sourceCards,
          },
        };
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

/* const arrayToArrays = (array) =>
  array.reduce((obj, item) => {
    if (!obj.hasOwnProperty(item.listId)) {
      obj[item.listId] = [];
    }
    obj[item.listId].push(item);
    return obj;
  }, {}); */

const arrayToArrays = (array) =>
  array.reduce((obj, item) => {
    if (!obj.hasOwnProperty(item.listId)) {
      obj[item.listId] = [];
    }
    obj[item.listId].push(...item.cards);
    return obj;
  }, {});

/* const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item._id] = item;
    return obj;
  }, {}); */
