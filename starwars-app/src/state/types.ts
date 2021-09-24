import { Person, ThemeKind } from "../types";

export interface AppState{
  all: Person[];
  favorites: Person[];
  theme: ThemeKind;
}

export enum FavoriteActionType {
  Add = "ADD",
  Remove = "REMOVE",
  Show = "SHOW",
  RemoveAll = "REMOVEALL"
}

export enum AllActionType{
  GETALL = "GETALL",
  SETALL = "SETALL",
  GETONE = "GETONE",
  GETPAGE = "GETPAGE",
  FINDBYSEARCH = "FINDBYSEARCH"
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

interface GetOneAction{
  type: AllActionType.GETONE,
  payload: string;
}

interface SetAllAction{
  type: AllActionType.SETALL,
  payload: Person[];
}

interface GetPageAction{
  type: AllActionType.GETPAGE,
  payload: number;
}

interface SearchAction{
  type: AllActionType.GETPAGE,
  payload: string;
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

interface ShowFavoriteAction {
  type: FavoriteActionType.Show;
}

export type FavoriteAction =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | ShowFavoriteAction
  | RemoveAllFavoritiesAction;

  export type ALLAction = GetALLAction | GetOneAction | SetAllAction | SearchAction | GetPageAction;

  export type AppAction = FavoriteAction | ALLAction | ChangeThemeAction;
