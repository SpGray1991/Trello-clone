import { CONSTANTS } from "../action-creators/constants";

const initialState = {
  lists: [],
  error: null,
};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_LISTS:
      return {
        error: null,
        lists: action.payload,
      };

    case CONSTANTS.LISTS_ERROR:
      return {
        error: action.payload,
        lists: [],
      };

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,

        type,
      } = action.payload;

      // draggin lists around - the listOrderReducer should handle this
      /*  if (type === "list") {
        return state;
      } */

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const lists = state[droppableIdStart];
        const list = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...list);
        return { ...state, [droppableIdStart]: lists };
      }

      /* // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd,
        };
      } */
      return state;

    default:
      return state;
  }
};
