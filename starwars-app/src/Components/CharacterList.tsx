import "./../index.scss";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { People, Person, QueryPeople, UrlMatch } from "../types";
import { useQuery, gql, UriFunction } from "@apollo/client";
import { LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries";
import {CharacterCard} from "./CharacterCard";

const useNavigate = (pageNumber: number):People => {
  const [currentQueryPeople, setCurrentQueryPeople] = useState<QueryPeople>();
  const {error, loading, data} = useQuery<QueryPeople>(LOAD_STARWARS_CHARACTERS(pageNumber * 10));

  useEffect(() => {
    if(error){
      console.log(`Error! ${error}`)
    }

    if(data?.allPeople){
      setCurrentQueryPeople(data)
    }
    
  }, [pageNumber]);

   return data?.allPeople || {} as People;
}

const renderCharacterCard = (results: Person[]) => {
  let people: JSX.Element[] = [];

  results?.forEach((person, index) => {
    const { name, height, mass, gender, birthYear } = person;
    const swPerson = <CharacterCard key={index} {...person} />;
    people.push(swPerson);
  });
  return people;
};

const getPageCount = (pageId: string, totalCount: number): number => {
  const MAX_CHARACTERS_ON_SITE = 10;
  const pageIdNumber = Number.parseInt(pageId, 10);

  return (pageIdNumber * MAX_CHARACTERS_ON_SITE < totalCount && 
    (pageIdNumber * MAX_CHARACTERS_ON_SITE > totalCount
       && (pageIdNumber * MAX_CHARACTERS_ON_SITE - totalCount > MAX_CHARACTERS_ON_SITE))) ? pageIdNumber : 1;
}

export const CharacterList = (props: UrlMatch) => {
  const {match} = props;
  const pageId = match?.params?.pageid;
  const [characters, setCharacters] = useState<Person[]>([] as Person[]);
  const MAX_CHARACTERS_ON_SITE = 10;

  const { pageInfo, people, edges, totalCount } = useNavigate(Number.parseInt(pageId,10));
  
  let pageCount = getPageCount(pageId, totalCount);

  useEffect(() => {
    if(people?.length){
      setCharacters(people)
    }
  },[people]);

  useEffect(() => {
    pageCount = getPageCount(pageId, totalCount);
  }, [characters]);

  useEffect(() => {}, [pageCount])

  const onPageChange = () => {} 

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
          pageCount={pageCount}
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