import "./../index.scss";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { People, Person } from "../types";
import { useQuery, gql } from "@apollo/client";
import { LOAD_STARWARS_CHARACTERS } from "../GraphQL/Queries"

export const CharacterList = () => {
  const {error, loading ,data} = useQuery<People>(LOAD_STARWARS_CHARACTERS);
  const [people, setPeople] = useState<Person[]>([] as Person[]);

  useEffect(() => {
    if(data?.people){
      setPeople(data.people)
    }
  },[data]);

  useEffect(() => {}, [people]);

  const onPageChange = () => {} 

  return (
    <div className="main-container">
      <div className="main-wrapper">

      </div>
      <div className="commentBox">
        <ReactPaginate
          previousLabel={<BiChevronLeft />}
          nextLabel={<BiChevronRight />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={10}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={onPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          nextLinkClassName={"next"}
          previousLinkClassName={"previous"}
        />
      </div>
    </div>
  );
};