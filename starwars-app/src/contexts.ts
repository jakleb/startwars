import { createContext } from "react";
import { ISearchContext } from "./types";

const searchConext: ISearchContext = {
    value: "",
    onSearchTextChange: (value) => {}
  };

export const SearchContext = createContext(searchConext);
