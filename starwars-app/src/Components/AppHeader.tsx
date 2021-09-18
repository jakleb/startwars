import "./../index.scss";
import {Search} from './Search';
import { FaStar } from "react-icons/fa";

export const AppHeader = (): JSX.Element => {
  return (
    <div className="app-header">
      <Search />
      <div className="app-header-favourite-container">
        <div
          className="app-header-favorite-icon"
        >
          <FaStar color={"#d0c438"} size={"25px"} />
        </div>
      </div>
    </div>
  );
};