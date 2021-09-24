import "./../index.scss";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PageChangeType, Person, UrlMatch } from "../types";
import {CharacterCard} from "./CharacterCard";
import { useStarWarsApi, useRouter } from "../CustomHooks/hooks";
import { SearchContext } from "../contexts";
import { useSelector } from "react-redux";
import { State } from "../state";
import Loader from "./Loader";



const renderCharacterCard = (results: Person[]) => {
  let people: JSX.Element[] = [];

  results?.forEach(({id, name, height, mass, hairColor, eyeColor, gender}, index) => {
    const swPerson = <CharacterCard 
                        key={index} 
                        name={name} 
                        id={id}
                        height={height}
                        mass={mass}
                        hairColor={hairColor}
                        eyeColor={eyeColor}
                        gender={gender}
                        />
    people.push(swPerson);
  });
  return people;
};

export const filterCharacters = (seachText: string, characters: Person[] = []): Person[] => {
  return characters.filter((character) =>
    character?.name.toLowerCase().includes(seachText)
  );
};

export const CharacterList = ({match}: UrlMatch) => {

  const pageId = match?.params?.pageid;
  useStarWarsApi(Number.parseInt(pageId,10));
  const [totalCount, setTotalCount] = useState<number>(0);
  const [characters, setCharacters] = useState<Person[]>([] as Person[]);
  const [searchPage, setSearchPage] = useState<number>(1);
  const { all } = useSelector((state: State) => state.bank);
  const router = useRouter();
  const { value: searchValue } = useContext(SearchContext);

  useEffect(() => {
    if(all?.length){
      setTotalCount(all.length);
      if(pageId){
        const page = Number.parseInt(pageId, 10);
        setCharacters(all.slice((page - 1) * 10, page * 10 ));
      }
    }
  },[all, pageId]);

  useEffect(() => {
    if(all?.length){
      const filteredCharacters = filterCharacters(searchValue, all);
      setTotalCount(filteredCharacters.length);
      setCharacters(filteredCharacters.slice((searchPage - 1) * 10, searchPage * 10 ));
    }
  }, [searchValue]);

  const onPageChange = ({ selected }:PageChangeType) => {
    searchValue ? setSearchPage(selected) : router.push(`/page/${selected + 1}`);
  };

  return (
    <>
      <div className="main-wrapper">
      {!!characters.length ?
          renderCharacterCard(characters) : <Loader />
      }
      </div>
      <div className="commentBox">
        { !!characters.length && <ReactPaginate
          previousLabel={<BiChevronLeft />}
          nextLabel={<BiChevronRight />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={characters && totalCount ? Math.ceil(totalCount / 10) : 0}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={onPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          nextLinkClassName={"next"}
          previousLinkClassName={"previous"}
        />}
      </div>
    </>
  );
};