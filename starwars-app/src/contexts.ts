import { createContext } from "react";
import { ISearchContext } from "./types";

const context: ISearchContext = {
    value: "",
    onSearchTextChange: (value) => {}
  };

  export const SearchContext = createContext(context);