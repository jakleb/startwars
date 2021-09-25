import "./../index.scss";
import { FaSistrix,FaFilter } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../contexts";
import { FilteredField } from "../types";

export const Search = () => {

  const { value, onSearchTextChange, filterBy, onFilterChange } = useContext(SearchContext);

  return (
    <>
      <div className="search-component">
        <div className="search-icon-wrapper">
          <FaSistrix />
        </div>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            placeholder={filterBy}
            type="text"
            value={value}
            onChange={onSearchTextChange}
          />
        </div>
      </div>
      <div className="filter-icon">
        <FaFilter />
      </div>
      <div onClick={() => { onFilterChange(FilteredField.Name) }}>Nazwa</div>
      <div onClick={() => { onFilterChange(FilteredField.Homeworld) }}>HomeWorld</div>
      <div onClick={() => { onFilterChange(FilteredField.Films) }}>Films</div>
    </>
  );
};