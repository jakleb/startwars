import { ButtonHTMLAttributes, ChangeEvent, ReactChild, ReactFragment, ReactPortal } from "react";


export interface QueryPeople {
    allPeople: People;
}
export interface People {
    people: Person[];
}

export interface Person {
    name: string;
    id: string;
    birthYear?: string;
    eyeColor?: string;
    gender?: string;
    hairColor?: string;
    height?: number;
    mass?: number;
    skinColor?: string;
    homeworld?: HomeWorld;
    _tech_films?: Films;
    species?: Species;
  }

  export interface HomeWorld{
    name?: string;
    diameter: number;
    gravity: string;
    population: number;
  }

  export interface ModalProps {
    toggleModal: () => void;
    list: JSX.Element;
    buttons?: JSX.Element;
    title: string;
    coordinates?: ModalPosition;
  }

  export interface ModalPosition{
    left: number;
    top: number;
  }

  export interface Species{
    name: string;
    language: string;
  }

  export interface Films{
    films:Film[];
  }

  export interface QueryFilms{
    allFilms: Films;
  }

  export interface Film{
    title: string;
    description?: string;
  }
  

  export interface FieldDetail {
      caption: string;
      value: string;
  }

  export interface FieldDetailList {
    caption: string;
    value?: Object;
}

  export interface UrlMatch {
      match: { params: URLQueryParams };
  }

  export interface URLQueryParams {
    pageid: string; personid: string, filter: string
  }

  export enum ButtonKind {
    success = "custom-success-btn",
    error = "custom-error-btn",
    warning = "custom-warning-btn",
    primary = "custom-primary-btn"
  }

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    kind: ButtonKind;
  }

  export interface PageChangeType{
    selected: number
  }

  export interface ISearchContext {
    value: string;
    onSearchTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

  export enum ThemeKind {
    Dark = "theme-dark",
    Light = "theme-light",
  }

  export interface DetailsWrapperProps {
    children?:  boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    totalCount?: number;
  }

  export interface FilterModalListProps{
    onSelectTilte: (element: HTMLInputElement) => void;
  }

  export interface InputWrapperProps {
    children?:  boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    label?: string;
    fluid?: boolean;
    labelClassName?: string;
    name?: string;
    error?: string;
  }

  export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    postalCode: string;
    phoneNumber: string;
    message: string;
  }

  export interface UrlAppInfoProps{
    filter: string|null;
    characters: Person[];
    isFavoritesPage: boolean;
  }

  export enum APP_ENDPOINTS {
    Favorites = "favorites",
    Detail = "detail",
    Contact = "contact",
    List = "list",
    Filter = "?filmtitle=",
  }
