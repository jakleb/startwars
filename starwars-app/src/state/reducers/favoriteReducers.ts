import { Person } from "../../types";
import { Action, FavoriteActionType } from "../types";

const FavoriteStorageKey = "FAVORITESTATE";
const { localStorage } = window;

const saveToStorage = (favorities: Person[]) => {
  localStorage.setItem(FavoriteStorageKey, JSON.stringify(favorities));
};

const initialState = JSON.parse(
  localStorage.getItem(FavoriteStorageKey) || "[]"
);

saveToStorage(initialState);

const addFavorite = (state: Person[], payload: Person) => {
  const newState = [...state];
  const isFavorite = newState.find((character) => character.name === payload.name);

  if (!isFavorite) 
    newState.push(payload);

  saveToStorage(newState);
  return newState;
};

const removeFavorite = (
  state: Person[],
  payload: Person
) => {
  const newState = [...state];
  const index = newState.findIndex(
    (character) => character.name === payload.name
  );
  if (index !== -1) {
    newState.splice(index, 1);
  }
  saveToStorage(newState);
  return newState;
};

const removeAllFavorities = (state: Person[]) => {
  const newState = [...state];
  newState.length = 0;
  saveToStorage(newState);
  return newState;
};

const reducer = (
  state: Person[] = initialState,
  action: Action
) => {
  switch (action.type) {
    case FavoriteActionType.Add:
      return addFavorite(state, action.payload);
    case FavoriteActionType.Remove:
      return removeFavorite(state, action.payload);
    case FavoriteActionType.RemoveAll:
      return removeAllFavorities(state);
    default:
      return state;
  }
};

export default reducer;
