import { createContext } from "react";
import { FilteredField, ISearchContext } from "./types";

const searchConext: ISearchContext = {
    value: "",
    onSearchTextChange: (value) => {},
    filterBy: FilteredField.Name,
    onFilterChange: (value) => {},
  };

export const SearchContext = createContext(searchConext);
