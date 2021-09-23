import { Person } from "../types";

export interface AppState{
  all: Person[];
  favorites: Person[];
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
}

interface GetALL{
  type: AllActionType.GETALL;
}

interface GetOne{
  type: AllActionType.GETONE,
  payload: string;
}

interface SetAll{
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

interface ShowFavoriteAction {
  type: FavoriteActionType.Show;
}

export type FavoriteAction =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | ShowFavoriteAction
  | RemoveAllFavoritiesAction;

  export type ALLAction = GetALL | GetOne | SetAll;

  export type AppAction = FavoriteAction | ALLAction;
