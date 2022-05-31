import { CONSTANTS } from "../action-creators/constants";

const initialState = {
  lists: [],
  error: null,
};
/* {
    title: "Horizon Zero Dawn",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Lorem ipsum",
      },
      {
        id: 1,
        text: "Lorem ipsum2",
      },
    ],
  },
  {
    title: "GTA V",
    id: 1,
    cards: [
      {
        id: 2,
        text: "Lorem ipsum3",
      },
      {
        id: 3,
        text: "Lorem ipsum4",
      },
    ],
  }, */

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LISTS:
      return {
        error: null,
        lists: action.payload,
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
