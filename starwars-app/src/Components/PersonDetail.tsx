import { useDetail } from "../CustomHooks/hooks";
import { UrlMatch } from "../types";
import { CardDetailList } from "./CardDetailList";
import { DetailList } from "./DetailList";
import { DetailsWrapper } from "./DetailsWrapper";

export const PersonDetail = ({match}: UrlMatch) => {

    const personId = match?.params?.personid;
    const { id, name, species, homeworld, _tech_films, ...fields } = useDetail(personId);

    const getDetailsLength = (...args: object[]) => {
        let length = 0;
        args.forEach((arg) => { Object.keys(arg).length ? length += 1 : length = length });
        return length;
    } 

    return (
        <div className="person-detail">
            <div className="person-detail-header">{name}</div>
            <div className="person-details-wrapper">
                <div className="person-detail-main-details">
                    <div className="person-main-details">
                        <div className="details-section-title">Appearance</div>
                        {
                            fields && <DetailList {...fields}/>
                        }
                    </div>
                    <div className="person-additional-details">
                        <div className="details-section-title">Additional</div>
                        <DetailsWrapper totalCount={getDetailsLength(homeworld || {}, species || {})}>
                            {
                                species && <CardDetailList caption={"Species"} value={species}/>
                            }
                            {
                                homeworld && <CardDetailList caption={"Homeworld"} value={homeworld} />
                            }
                        </DetailsWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

