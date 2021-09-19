import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { Person } from "../types";
import { BiStar } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CardDetail } from "./CardDetail";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state/index";

export const CharacterCard = (props: Person): JSX.Element => {

  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { addToFavorities, removeFromFavorities } = bindActionCreators(actionCreators,dispatch);

  let state = useSelector((state: State) => state.bank);

  const onGoToDetail = () => {};

  useEffect(() => {
    const isFavoriteInState = state.findIndex(
      (character) => character.name === props.name
    );
    setIsFavourite(isFavoriteInState !== -1 ?? false);
  }, [state, props]);

  useEffect(() => {}, [isFavourite]);

  const onAddToFavourites = (e: MouseEvent<SVGAElement>) => {
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      removeFromFavorities({ ...props });
    } else {
      addToFavorities({ ...props });
    }
    console.log("Ulubine", state);
  };

  return (
    <div className={"star-wars-card"}>
      <div className="content-wrapper" >
        <div className="card-header">
          <div className="header-spacer"></div>
          <div className="character-name">{props.name}</div>
          <div className="header-star-container">
            <BiStar
              onClick={onAddToFavourites}
              className="favorite-icon"
              data-for="happyFace"
              color={isFavourite ? "#d0c438" : "#c3bebe"}
              size={"25px"}
            />
          </div>
        </div>
        <div className="character-basic-info-container">
        {Object.entries(props)
            .slice(1, 4)
            .map((detail, index) => (
              <CardDetail key={index} caption={detail[0]} value={detail[1]} />
            ))}
          <div className="character-details">
            <div className="details-text" onClick={onGoToDetail}>
              Details
            </div>
            <FaAngleDoubleRight color={"green"} size={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
};