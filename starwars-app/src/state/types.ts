import { Person, ThemeKind } from "../types";

export interface AppState{
  all: Person[];
  favorites: Person[];
  theme: ThemeKind;
}

export enum FavoriteActionType {
  Add = "ADD",
  Remove = "REMOVE",
  RemoveAll = "REMOVEALL"
}

export enum AllActionType{
  GETALL = "GETALL",
  SETALL = "SETALL",
}

export enum ThemeActionType{
  CHANGETHEME = "CHANGETHEME",
}

interface ChangeThemeAction{
  type: ThemeActionType.CHANGETHEME;
}

interface GetALLAction{
  type: AllActionType.GETALL;
}


interface SetAllAction{
  type: AllActionType.SETALL,
  payload: Person[];
}

interface AddFavoriteAction {
  type: FavoriteActionType.Add;
  payload: Person;
}

interface RemoveFavoriteAction {
  type: FavoriteActionType.Remove;
  payload: string;
}

interface RemoveAllFavoritiesAction {
  type: FavoriteActionType.RemoveAll;
}

export type FavoriteAction =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | RemoveAllFavoritiesAction;

  export type ALLAction = GetALLAction | SetAllAction;

  export type AppAction = FavoriteAction | ALLAction | ChangeThemeAction;
