import { combineReducers } from "redux";
import appReducer from "./favoriteReducers";

const reducers = combineReducers({
  bank: appReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
