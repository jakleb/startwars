import { MouseEvent } from "react";

export interface QueryPeople {
    allPeople: People;
}
export interface People {
    pageInfo: any
    edges: any;
    totalCount: number;
    people: Person[];
}

export interface Person {
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: number;
    mass: number;
    skinColor: string;
    homeworld: any;
    films: [];
    species: [];
    starships: [];
    vehicles: [];
    created: string;
    edited: string;
    id: string;
  }

  export interface FieldDetail {
      caption: string;
      value: string;
  }

  export interface UrlMatch {
      match: { params: { pageid: string } };
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


