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

    case CONSTANTS.ADD_LIST:
      return { ...state, lists: [...state.lists, action.payload] };

    case CONSTANTS.DEL_LIST:
      return {
        ...state,
        lists: state.lists.filter((l) => l._id !== action.payload),
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
