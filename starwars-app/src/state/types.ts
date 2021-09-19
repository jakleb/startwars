import { Person } from "../types";

export enum FavoriteActionType {
  Add = "ADD",
  Remove = "REMOVE",
  Show = "SHOW",
  RemoveAll = "REMOVEALL"
}

interface AddFavoriteAction {
  type: FavoriteActionType.Add;
  payload: Person;
}

interface RemoveFavoriteAction {
  type: FavoriteActionType.Remove;
  payload: Person;
}

interface RemoveAllFavoritiesAction {
  type: FavoriteActionType.RemoveAll;
}

interface ShowFavoriteAction {
  type: FavoriteActionType.Show;
}

export type Action =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | ShowFavoriteAction
  | RemoveAllFavoritiesAction;
