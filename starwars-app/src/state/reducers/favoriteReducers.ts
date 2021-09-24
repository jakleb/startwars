import { getPackedSettings } from "http2";
import { Person, ThemeKind } from "../../types";
import { FavoriteAction, ALLAction, FavoriteActionType, AppAction, AllActionType, AppState, ThemeActionType } from "../types";

const FavoriteStorageKey = "FAVORITESTATE";
const { localStorage } = window;

const saveToStorage = (favorities: Person[]) => {
  localStorage.setItem(FavoriteStorageKey, JSON.stringify(favorities));
};

const initialState = { all: [], favorites: JSON.parse(localStorage.getItem(FavoriteStorageKey) || "[]"), theme: ThemeKind.Light};

saveToStorage(initialState.favorites);

const addFavorite = (state: AppState, payload: Person) => {
  const { favorites } = state;
  const newFavorites = [...favorites];
  const isFavorite = newFavorites.find((character) => character.name === payload.name);

  if (!isFavorite) 
    newFavorites.push(payload);

  saveToStorage(newFavorites);
  state.favorites = newFavorites;
  return {...state};
};

const removeFavorite = (state: AppState, id: string) => {
  const { favorites } = state;
  const newFavorites = [...favorites];
  const index = newFavorites.findIndex((character) => character.id === id);

  if (index !== -1) 
    newFavorites.splice(index, 1);

  saveToStorage(newFavorites);
  state.favorites = newFavorites;
  return {...state};
};

const removeAllFavorities = (state: AppState) => {
  const { favorites } = state;
  const newFavorites = [...favorites];
  newFavorites.length = 0;
  saveToStorage(newFavorites);
  state.favorites = newFavorites;
  return {...state};
};

const getAll = (state: AppState) => {
  return state;
}

const setAll = (state: AppState, people: Person[]) => {
  const newAll = people;
  state.all = newAll;
  return {...state};
}

const getPersonByID = (state: AppState, id: string) => {
  const { all } = state;
  const newAll = [...all];
  const index = newAll.findIndex((character) => character.id === id);
  if (index !== -1) {
    newAll.splice(index, 1);
  }
  state.all = newAll;
  return {...state};
}

const changeTheme = (state: AppState) =>{
  const { theme } = state;
  state.theme = theme === ThemeKind.Light ? ThemeKind.Dark : ThemeKind.Light;
  return {...state};
}

const reducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case FavoriteActionType.Add:
      return addFavorite(state, action.payload);
    case FavoriteActionType.Remove:
      return removeFavorite(state, action.payload);
    case FavoriteActionType.RemoveAll:
      return removeAllFavorities(state);
    case AllActionType.GETALL:
      return getAll(state);
    case AllActionType.SETALL:
      return setAll(state, action.payload);
    case AllActionType.GETONE:
      return getPersonByID(state, action.payload);
    case ThemeActionType.CHANGETHEME:
      return changeTheme(state);
    default:
      return state;
  }
};

export default reducer;
