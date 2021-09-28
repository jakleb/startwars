import { ChangeEvent, MouseEvent, Props, ReactChild, ReactFragment, ReactPortal } from "react";
import { JsxElement } from "typescript";

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
    x: number;
    y: number;
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
      match: { params: { pageid: string; personid: string, filter: string } };
  }

  export enum ButtonKind {
    success = "custom-success-btn",
    error = "custom-error-btn",
    warning = "custom-warning-btn",
    primary = "custom-primary-btn"
  }

  export interface ButtonProps {
    caption: string;
    click: (e: MouseEvent<HTMLButtonElement>) => void;
    kind: ButtonKind;
  }

  export interface PageChangeType{
    selected: number
  }

  export enum FilteredField {
    Name = "name",
    Homeworld = "homeworld",
    Films = "films",
  }

  export interface ISearchContext {
    value: string;
    onSearchTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
    filterBy: FilteredField;
    onFilterChange: (value: FilteredField) => void;
  }

  export enum ThemeKind {
    Dark = "theme-dark",
    Light = "theme-light",
  }

  export interface DetailsWrapperProps {
    children?:  boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    totalCount?: number;
  }

