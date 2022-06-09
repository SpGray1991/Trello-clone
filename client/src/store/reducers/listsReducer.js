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

    case CONSTANTS.EDIT_LIST:
      const payload = action.payload;

      const test = state.lists.map((l) => {
        if (l._id === payload.id) {
          return Object.assign({}, l, { title: payload.title });
        }
        return l;
      });

      return {
        lists: test,
      };

    case CONSTANTS.UPDATE_LIST_ORDER:
      const { sourceIndex, destinationIndex } = action.payload;

      const lists = state.lists;

      const [list] = lists.splice(sourceIndex, 1);
      lists.splice(destinationIndex, 0, list);

      return {
        lists: lists,
      };

    case CONSTANTS.LISTS_ERROR:
      return {
        error: action.payload,
        lists: [],
      };

    default:
      return state;
  }
};
