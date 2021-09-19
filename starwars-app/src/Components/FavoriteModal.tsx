import "./../index.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state/index";
import { MouseEvent, useEffect } from "react";
import { Person, ButtonKind } from "../types";
import { Button } from "./Button";
import { FaStar } from "react-icons/fa";

export interface FavoritiesModalProps {
  hideModal: () => void;
  isShown: boolean;
}

export const FavoriteModal = (props: FavoritiesModalProps) => {
  const dispatch = useDispatch();
  const { removeAllFromFavorities, removeFromFavorities } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state: Person[] = useSelector((state: State) => state.bank);

  useEffect(() => {}, [props.isShown]);

  const goToDetail = (character: Person) => {};

  return (
    <div className="modal-wrapper">
      <div className={`favorities-modal ${props.isShown && "show"}`}>
        <div className="modal-header">Favorities</div>
        <div className="modal-content-conteiner">
          {state.length ? (
            state.map((character, index) => (
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
                    onClick={(e: MouseEvent<SVGAElement>) => { removeFromFavorities(character) }}
                  />
                </div>
              </div>
            ))) : (<div className="empty-favorities-list">Favorite list is empty!</div>)
          }
        </div>
        <div className="modal-btns-container">
          <Button
            click={(e: MouseEvent<HTMLButtonElement>) => { props.hideModal() }}
            caption={"Close"}
            kind={ButtonKind.error}
          />
          <Button
            click={(e: MouseEvent<HTMLButtonElement>) => { removeAllFromFavorities(state) }}
            caption={"Remove all"}
            kind={ButtonKind.warning}
          />
        </div>
      </div>
    </div>
  );
};
