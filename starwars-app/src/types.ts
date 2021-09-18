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


