import "./../index.scss";
import { FaSistrix } from "react-icons/fa";

export const Search = () => {
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
        />
      </div>
    </div>
  );
};