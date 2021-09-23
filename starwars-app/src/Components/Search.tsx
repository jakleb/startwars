import "./../index.scss";
import { FaSistrix } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../contexts";

export const Search = () => {

  const { value, onSearchTextChange } = useContext(SearchContext);

  return (
    <div className="search-component">
      <div className="search-icon-wrapper">
        <FaSistrix />
      </div>
      <div className="search-input-wrapper">
        <input
          className="search-input"
          placeholder="Name"
          type="text"
          value={value}
          onChange={onSearchTextChange}
        />
      </div>
    </div>
  );
};