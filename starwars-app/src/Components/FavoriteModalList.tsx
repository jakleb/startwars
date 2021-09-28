import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import { FaStar } from "react-icons/fa";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { ButtonKind, Person } from "../types";
import { Button } from "./Button";
import { useRouter } from "../CustomHooks/hooks";

export const FavoriteModalList = () => {
    const dispatch = useDispatch();
    const { removeFromFavorities } = bindActionCreators(actionCreators, dispatch);

    const { favorites } = useSelector((state: State) => state.bank);
    const router = useRouter();

    const goToDetail = (id: string) => {
        router.push(`/detail/${id}`)
    };

    return (
        <>
            {favorites.length ? (
            favorites.map(({name, id}, index) => (
              <div className="modal-row" key={index}>
                <div className="modal-store-element" onClick={() => { goToDetail(id) }}>
                  {name}
                </div>
                <div className="modal-row-action-container">
                  <FaStar
                    color={"#d0c438"}
                    size={"15px"}
                    onClick={(e: MouseEvent<SVGAElement>) => { removeFromFavorities(id) }}
                  />
                </div>
              </div>
            ))) : (<div className="empty-favorities-list">Favorite list is empty!</div>)
          }
        </>
    )
}
