import { Dispatch } from "redux";
import { Person } from "../../types";
import { AllActionType, AppAction, FavoriteActionType } from "../types";

export const addAll = (people: Person[]) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: AllActionType.SETALL,
      payload: people
    });
  }; 
}

export const getAll = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: AllActionType.GETALL
    });
  }; 
}

export const getOne = (id:string) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: AllActionType.GETONE,
      payload: id
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

export const removeAllFromFavorities = (
  characters: Person[]
) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: FavoriteActionType.RemoveAll
    });
  };
};

export const showFavorities = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: FavoriteActionType.Show
    });
  };
};
