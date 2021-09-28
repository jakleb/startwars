import "./../index.scss";
import { Search } from './Search';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ContactForm } from "./ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State, store } from "../state/index";
import { Person, ThemeKind } from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { bindActionCreators } from "redux";
import { FavoriteModalList } from "./FavoriteModalList";
import { FavoriteModalButton } from "./FavoriteModalButton";

export const AppHeader = (): JSX.Element => {

  const [favoritiesModalIsShown, setFavoritiesModalIsShown] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { changeTheme } = bindActionCreators(actionCreators, dispatch);
  const { favorites, theme } = useSelector((state: State) => state.bank);

  const toggleModal = () => {
    setFavoritiesModalIsShown(!favoritiesModalIsShown);
  };

  useEffect(() => {
    console.log(favoritiesModalIsShown);
  }, [favorites, favoritiesModalIsShown]);

  return (
    <div className={`app-header`}>
      <Search />
      <div className="app-header-favourite-container">
        <div className="theme-mode-container">
          <div>Theme: </div>
          <div className={`${theme === ThemeKind.Light ? "light" : "dark"}`} onClick={() => { changeTheme() }}>{theme === ThemeKind.Light ? "Light" : "Dark"}</div>
        </div>
        <Link to="/page/1">Characters</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favorities">Favorities</Link>
        <div
          className="app-header-favorite-icon"
          onClick={() => { setFavoritiesModalIsShown(true) }}>
          <FaStar className={ !!favorites.length ? "no-empty-list" : "empty-list" } size={"25px"} />
          {!!favorites?.length && (<div className={"state-counter"}>{favorites && favorites?.length}</div>)}
          {favoritiesModalIsShown && (
            <Modal toggleModal={toggleModal}
              list={<FavoriteModalList />} 
              buttons={<FavoriteModalButton />} 
              title={"Favorites"}/>
          )}
        </div>
      </div>
    </div>
  );
};

