import "./../index.scss";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PageChangeType, People, Person, QueryPeople, UrlMatch } from "../types";
import { useQuery, gql, UriFunction } from "@apollo/client";
import { LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import {CharacterCard} from "./CharacterCard";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import { useStarWarsApi, useRouter } from "../CustomHooks/hooks";



const renderCharacterCard = (results: Person[]) => {
  let people: JSX.Element[] = [];

  results?.forEach((person, index) => {
    const { name, height, mass, gender, birthYear } = person;
    const swPerson = 
      <CharacterCard key={index} {...person} />
    people.push(swPerson);
  });
  return people;
};

const getPageCount = (pageId: string, totalCount: number): number => {
  const _10_ON_SITE = 10;
  const pageIdNumber = Number.parseInt(pageId, 10);

  return (pageIdNumber * _10_ON_SITE < totalCount && 
    (pageIdNumber * _10_ON_SITE > totalCount
       && (pageIdNumber * _10_ON_SITE - totalCount > _10_ON_SITE))) ? pageIdNumber : 1;
}

export const CharacterList = ({match}: UrlMatch) => {

  const pageId = match?.params?.pageid;
  useStarWarsApi(Number.parseInt(pageId,10));
  const router = useRouter();

  const dispatch = useDispatch();
  const { all } = useSelector((state: State) => state.bank);
  const [characters, setCharacters] = useState<Person[]>([] as Person[]);

  useEffect(() => {
    if(all?.length){
      console.log(all)
      setCharacters(all)
    }
  },[all]);


  const onPageChange = ({ selected }:PageChangeType) => {
    router.push(`/page/${selected + 1}`);
  };

  return (
    <div className="main-container">
      <div className="main-wrapper">
      {characters.length &&
          renderCharacterCard(characters)
      }
      </div>
      <div className="commentBox">
        { characters.length && <ReactPaginate
          previousLabel={<BiChevronLeft />}
          nextLabel={<BiChevronRight />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={characters && characters.length ? Math.ceil(characters.length / 10) : 0}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={onPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          nextLinkClassName={"next"}
          previousLinkClassName={"previous"}
        />}
      </div>
    </div>
  );
};