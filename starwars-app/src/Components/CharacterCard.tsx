import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { Person } from "../types";
import { BiStar } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CardDetail } from "./CardDetail";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state/index";
import { useRouter } from "../CustomHooks/hooks";
import { CSSTransition } from 'react-transition-group';

export const CharacterCard = ({ id, name, ...fields}: Person) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { addToFavorities, removeFromFavorities } = bindActionCreators(actionCreators,dispatch);
  let { favorites } = useSelector((state: State) => state.bank);
  const router = useRouter();

  const onGoToDetail = () => {
    router.push(`/detail/${id}`)
  };

  useEffect(() => {
    const isFavoriteInState = favorites.findIndex(
      (character) => character.name === name
    );
    setIsFavourite(isFavoriteInState !== -1 ?? false);
  }, [favorites, id]);

  useEffect(() => {}, [isFavourite]);

  const onAddToFavourites = (e: MouseEvent<SVGAElement>) => {
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      removeFromFavorities(id);
    } else {
      addToFavorities({...{ name: name, id: id}});
    }
    console.log("Ulubine", favorites);
  };

  return (
    <div className={"star-wars-card"}>
       <CSSTransition in={!!id} classNames="card" timeout={300} unmountOnExit>
      <div className="content-wrapper" >
        <div className="card-header">
          <div className="header-spacer"></div>
          <div className="character-name">{name}</div>
          <div className="header-star-container">
            <BiStar
              onClick={onAddToFavourites}
              className={isFavourite ? `favorite-icon-is-favorite` : `favorite-icon`}
              data-for="happyFace"
              size={"25px"}
            />
          </div>
        </div>
        <div className="character-basic-info-container">
        {Object.entries(fields)
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
      </CSSTransition>
    </div>
  );
};