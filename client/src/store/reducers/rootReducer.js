import { combineReducers } from "redux";
/* /* import { filmReducer } from "./filmReducer"; */
import { listsReducer } from "./listsReducer";

export const rootReducer = combineReducers({
  lists: listsReducer,
});
