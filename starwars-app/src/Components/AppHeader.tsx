import "./../index.scss";
import {Search} from './Search';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AppHeader = (): JSX.Element => {
  return (
    <div className="app-header">
      <Search />
      <div className="app-header-favourite-container">
        <Link to="/page/1">Characters</Link>
        <Link to="/contact">Contact</Link>
        <div className="app-header-favorite-icon">
          <FaStar color={"#d0c438"} size={"25px"} />
        </div>
      </div>
    </div>
  );
};