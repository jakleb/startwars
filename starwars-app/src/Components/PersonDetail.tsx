import { useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "../CustomHooks/hooks";
import { LOAD_PERSON_BY_ID, LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import { State } from "../state";
import { People, Person, QueryPeople, UrlMatch } from "../types";
import { CardDetail } from "./CardDetail";
import { CardDetailList } from "./CardDetailList";
import { DetailsWrapper } from "./DetailsWrapper";

export const useDetail = (personId: string): Person => {
    const [person, setPerson] = useState<Person>();
    const { all } = useSelector((state: State) => state.bank);

    useEffect(() => {
        setPerson(all.find(person => person.id === personId));
    }, [all, personId]);

    return person || {} as Person
}

export const getDetails = (fields: Object) => {
    return Object.entries(fields)
        .map(([caption, value], index) => {
            if (!caption.startsWith("_"))
                return <CardDetail key={index} caption={caption} value={value} />
        })
}

export const PersonDetail = ({match}: UrlMatch) => {

    const personId = match?.params?.personid;
    const { id, name, species, homeworld, _tech_films, ...fields } = useDetail(personId);

    const getDetailsLength = (...args: object[]) => {
        let length = 0;
        args.forEach((arg) => { Object.keys(arg).length ? length += 1 : length = length });
        return length;
    } 

    useEffect(() => {
        console.log(fields)
    }, [id])

    return (
        <div className="person-detail">
            <div className="person-detail-header">{name}</div>
            <div className="person-details-wrapper">
                <div className="person-detail-main-details">
                    <div className="person-main-details">
                        <div className="details-section-title">Appearance</div>
                        {
                            fields && getDetails(fields)
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

