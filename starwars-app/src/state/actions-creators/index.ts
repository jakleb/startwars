import { Dispatch } from "redux";
import { Person } from "../../types";
import { AllActionType, AppAction, FavoriteActionType, ThemeActionType } from "../types";

export const addAll = (people: Person[]) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: AllActionType.SETALL,
      payload: people
    });
  }; 
}

export const addToFavorities = (character: Person) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: FavoriteActionType.Add,
      payload: character
    });
  };
};

export const removeFromFavorities = (id: string) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: FavoriteActionType.Remove,
      payload: id
    });
  };
};

export const removeAllFromFavorities = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: FavoriteActionType.RemoveAll
    });
  };
};

export const changeTheme = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: ThemeActionType.CHANGETHEME
    });
  };
};
