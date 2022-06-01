import { combineReducers } from "redux";
import { listsReducer } from "./listsReducer";
import { cardsReducer } from "./cardsReducer";

export const rootReducer = combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
});
