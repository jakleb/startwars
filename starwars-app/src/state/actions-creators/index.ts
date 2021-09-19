import { Dispatch } from "redux";
import { Person } from "../../types";
import { Action, FavoriteActionType } from "../types";

export const addToFavorities = (character: Person) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: FavoriteActionType.Add,
      payload: character
    });
  };
};

export const removeFromFavorities = (character: Person) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: FavoriteActionType.Remove,
      payload: character
    });
  };
};

export const removeAllFromFavorities = (
  characters: Person[]
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: FavoriteActionType.RemoveAll
    });
  };
};

export const showFavorities = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: FavoriteActionType.Show
    });
  };
};
