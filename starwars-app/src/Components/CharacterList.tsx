import "./../index.scss";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PageChangeType, Person, UrlMatch } from "../types";
import { CharacterCard } from "./CharacterCard";
import { useStarWarsApi, useRouter, useCharacrterListData } from "../CustomHooks/hooks";
import { SearchContext } from "../utils/contexts";
import Loader from "./Loader";
import { filterCharacters } from "../utils/appUtils";


export const CharacterList = ({match}: UrlMatch) => {

  const pageId = match?.params?.pageid;

  useStarWarsApi(Number.parseInt(pageId,10));

  const [totalCount, setTotalCount] = useState<number>(0);
  const [characters, setCharacters] = useState<Person[]>([] as Person[]);
  const [searchPage, setSearchPage] = useState<number>(1);
  const { filter, characters:charactersData, isFavoritesPage } = useCharacrterListData();

  const router = useRouter();
  const { value: searchValue } = useContext(SearchContext);

  useEffect(() => {
    if(charactersData?.length){
      setTotalCount(charactersData.length);
      if(pageId){
        const page = Number.parseInt(pageId, 10);
        setCharacters(charactersData.slice((page - 1) * 10, page * 10 ));
      }
      else {
        setCharacters(charactersData);
      }

    }
    else {
      setCharacters([]);
    }
  },[charactersData, pageId]);

  useEffect(() => {
    if(charactersData?.length){
      const filteredCharacters = filterCharacters(searchValue, filter || '' , charactersData);
      setTotalCount(filteredCharacters.length);
      setCharacters(filteredCharacters.slice((searchPage - 1) * 10, searchPage * 10 ));
    }
  }, [searchValue, filter]);

  const onPageChange = ({ selected }:PageChangeType) => {
    searchValue ? setSearchPage(selected) : router.push(`/${isFavoritesPage ? "favorites" : "page"}/${selected + 1}`);
  };

  return (
    <>
      <div className="main-wrapper">
      {!!characters.length ?
            characters.map(({id, name, height, mass, hairColor, eyeColor, gender, _tech_films}, index) => 
              <CharacterCard key={index} { ...{name, id, height, mass, hairColor, eyeColor, gender,  _tech_films}} />): <Loader />
      }
      </div>
      <div className="commentBox">
        { (!!characters.length && characters.length > 1) && <ReactPaginate
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