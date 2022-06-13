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

      return {
        byId: arrayToArrays(lists),
      };

    case CONSTANTS.UPDATE_CARD_ORDER:
      const { sourceId, destinationId, sourceIndex, destinationIndex } =
        action.payload;

      const cards = [...state.byId[sourceId]];

      if (sourceId !== destinationId) {
        const sourceCards = [...state.byId[sourceId]];

        const destinationCards = [...state.byId[destinationId]];

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

    case CONSTANTS.EDIT_CARD:
      const { text, id, listID } = action.payload;

      const cardsById = [...state.byId[listID]];

      const cardById = cardsById.map((c) => {
        if (c._id === id) {
          return Object.assign({}, c, { text: text });
        }
        return c;
      });

      return {
        ...state,
        byId: {
          ...state.byId,
          [listID]: cardById,
        },
      };

    case CONSTANTS.ADD_CARD:
      const { listId } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [listId]: [...state.byId[listId], action.payload],
        },
      };

    case CONSTANTS.DEL_CARD:
      const { idCard, idList } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [idList]: [...state.byId[idList].filter((c) => c._id !== idCard)],
        },
      };

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
    obj[item.listId].push(...item.cards);
    return obj;
  }, {});
