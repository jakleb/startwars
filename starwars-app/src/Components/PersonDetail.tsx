import React, { MouseEvent, Suspense, useCallback, useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { useAppStore, useDetail } from "../CustomHooks/hooks";
import { ButtonKind, UrlMatch } from "../types";
import { Button } from "./Button";
import { CardDetailList } from "./CardDetailList";
import { DetailList } from "./DetailList";
import { DetailsWrapper } from "./DetailsWrapper";
import Loader from "./Loader";
const HomeWorlds = React.lazy(() => import('./HomeWorlds'));

export const PersonDetail = ({ match }: UrlMatch) => {

    const personId = match?.params?.personid;
    const { id, name, species, homeworld, _tech_films, ...fields } = useDetail(personId);
    const [homeWorldsIsShown, setHomeWorldsIsShown] = useState<boolean>(false);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const { addToFavorities, removeFromFavorities } = useAppStore();

    useEffect(() => {
        setHomeWorldsIsShown(false);
    },[personId])

    const getDetailsLength = (...args: object[]) => {
        let length = 0;
        args.forEach((arg) => { Object.keys(arg).length ? length += 1 : length = length });
        return length;
    }

    const showMore = useCallback(() => {
        setHomeWorldsIsShown(true);
    }, [homeWorldsIsShown])

    const onAddToFavourites = (e: MouseEvent<SVGAElement>) => {
        setIsFavourite(!isFavourite);
        if (isFavourite) {
          removeFromFavorities(id);
        } else {
          addToFavorities({...{ id, name, ...fields}});
        }
      };



    return (
        <div className="person-detail">
            <div className="person-detail-header">{name}</div>
            <div className="person-details-wrapper">
                <div className="person-detail-main-details">
                    <div className="person-main-details">
                        <div className="details-section-title">Appearance</div>
                        {
                            fields && <DetailList {...fields} />
                        }
                        <BiStar
                            onClick={onAddToFavourites}
                            className={isFavourite ? `favorite-icon-is-favorite` : `favorite-icon`}
                            data-for="happyFace"
                            size={"25px"}
                        />
                    </div>
                    <div className="person-additional-details">
                        <div className="details-section-title">Additional</div>
                        <DetailsWrapper totalCount={getDetailsLength(homeworld || {}, species || {})}>
                            {
                                species && <CardDetailList caption={"Species"} value={species} />
                            }
                            {
                                !homeWorldsIsShown ?
                                    <Button onClick={showMore} kind={ButtonKind.primary}>Show more</Button>
                                    :
                                    <Suspense fallback={<Loader />}>
                                        <HomeWorlds />
                                    </Suspense>
                            }

                        </DetailsWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

