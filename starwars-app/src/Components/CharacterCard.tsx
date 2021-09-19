import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { Person } from "../types";
import { BiStar } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CardDetail } from "./CardDetail";

export const CharacterCard = (props: Person): JSX.Element => {

  const onGoToDetail = () => {};

  const onAddToFavourites = (e: MouseEvent<SVGAElement>) => {};

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
              color={"#c3bebe"}
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