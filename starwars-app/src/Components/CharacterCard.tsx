import { MouseEvent, useEffect, useState } from "react";
import { Person } from "../types";
import { BiStar } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useAppStore, useRouter } from "../CustomHooks/hooks";
import { CSSTransition } from 'react-transition-group';
import { DetailList } from "./DetailList";

export const CharacterCard = ({ id, name, ...fields}: Person) => {

  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const { addToFavorities, removeFromFavorities, favorites } = useAppStore();
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

  //useEffect(() => {}, [isFavourite]);

  const onAddToFavourites = (e: MouseEvent<SVGAElement>) => {
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      removeFromFavorities(id);
    } else {
      addToFavorities({...{ id, name, ...fields}});
    }
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
          <DetailList {...fields}/>
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