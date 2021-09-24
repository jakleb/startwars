import "./../index.scss";
import {Search} from './Search';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State, store } from "../state/index";
import { Person, ThemeKind } from "../types";
import { useContext, useEffect, useState } from "react";
import { FavoriteModal } from "./FavoriteModal";
import { bindActionCreators } from "redux";

export const AppHeader = (): JSX.Element => {

  const [favoritiesModalIsShown, setFavoritiesModalIsShown] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { changeTheme } = bindActionCreators(actionCreators,dispatch);
  const {favorites, theme} = useSelector((state: State) => state.bank);


  const hideModal = () => {
    setFavoritiesModalIsShown(false);
  };

  useEffect(() => {
    console.log(favoritiesModalIsShown)
  }, [favorites, favoritiesModalIsShown]);

  return (
    <div className={`app-header`}>
      <Search />
      <div className="app-header-favourite-container">
        <div className="theme-mode-container">
          <div>Theme: </div>
          <div className={`${theme === ThemeKind.Light ? "light" : "dark"}`} onClick={ () => { changeTheme()} }>{theme === ThemeKind.Light ? "Light" : "Dark" }</div>
        </div>
        <Link to="/page/1">Characters</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favorities">Favorities</Link>
        <div 
          className="app-header-favorite-icon" 
          onClick={() => { setFavoritiesModalIsShown(true) }}>
          <FaStar color={"#d0c438"} size={"25px"} />
          {!!favorites?.length && (<div className={"state-counter"}>{favorites && favorites?.length}</div>)}
          {favoritiesModalIsShown && (<FavoriteModal hideModal={hideModal} isShown={favoritiesModalIsShown} /> )}
        </div>
      </div>
    </div>
  );
};

