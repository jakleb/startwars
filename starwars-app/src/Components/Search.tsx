import "./../index.scss";
import { FaSistrix,FaFilter } from "react-icons/fa";
import { MouseEvent, useContext, useEffect, useState, useCallback } from "react";
import { SearchContext } from "../utils/contexts";
import { ModalPosition } from "../types";
import { Modal } from "./Modal";
import { FilterListWrapper } from "./FilterListWrapper";


export const Search = () => {

  const { value, onSearchTextChange } = useContext(SearchContext);

  const [position, setPosition] = useState<ModalPosition>({left: 0, top: 0});
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if(position.top && position.left){
      setFilterIsOpen(true);
    }
  }, [position.left, position.top]);

  const hideFilter = useCallback(() => {
    setFilterIsOpen(!filterIsOpen);
  }, [filterIsOpen])


  const openFilter = useCallback(({ clientX, clientY }: MouseEvent<SVGAElement>) => {
    if (!filterIsOpen) {
      setPosition({ ...{ left: clientX, top: clientY } });
    }
  }, [filterIsOpen])

  return (
    <>
      <div className="search-component">
        <div className="search-icon-wrapper">
          <FaSistrix />
        </div>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            placeholder="name"
            type="text"
            value={value}
            onChange={onSearchTextChange}
          />
        </div>
      </div>
      <div className="filter-icon">
        <FaFilter onClick={openFilter}/>
      </div>
      {
        filterIsOpen && 
            <Modal 
              list={<FilterListWrapper />} 
              toggleModal={hideFilter} 
              title={"Filters"} 
              coordinates={position}/>
      }
    </>
  );
};