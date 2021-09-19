import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducers";

const reducers = combineReducers({
  bank: favoriteReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
