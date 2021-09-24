import "./../index.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state/index";
import { MouseEvent, useEffect, useRef } from "react";
import { Person, ButtonKind } from "../types";
import { Button } from "./Button";
import { FaStar } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

export interface FavoritiesModalProps {
  hideModal: () => void;
  isShown: boolean;
}

export const FavoriteModal = ({isShown, hideModal}: FavoritiesModalProps) => {
  const dispatch = useDispatch();
  const { removeAllFromFavorities, removeFromFavorities } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { favorites } = useSelector((state: State) => state.bank);

  useEffect(() => {}, [isShown]);

  const goToDetail = (character: Person) => {};

  return (
    <CSSTransition in={isShown} timeout={300} className="animation-container">
    <div className="modal-wrapper">
      <div className={`favorities-modal ${isShown && "show"}`}> 
        <div className="modal-header">Favorities</div>
        <div className="modal-content-conteiner">
          {favorites.length ? (
            favorites.map((character, index) => (
              <div className="modal-row" key={index}>
                <div
                  className="modal-store-element"
                  onClick={() => { goToDetail(character) }}
                >
                  {character.name}
                </div>
                <div className="modal-row-action-container">
                  <FaStar
                    color={"#d0c438"}
                    size={"15px"}
                    onClick={(e: MouseEvent<SVGAElement>) => { removeFromFavorities(character.id) }}
                  />
                </div>
              </div>
            ))) : (<div className="empty-favorities-list">Favorite list is empty!</div>)
          }
        </div>
        <div className="modal-btns-container">
          <Button
            click={(e: MouseEvent<HTMLButtonElement>) => { hideModal() }}
            caption={"Close"}
            kind={ButtonKind.error}
          />
          <Button
            click={(e: MouseEvent<HTMLButtonElement>) => { removeAllFromFavorities() }}
            caption={"Remove all"}
            kind={ButtonKind.warning}
          />
        </div>
      </div>
    </div>
    </CSSTransition>
  );
};
