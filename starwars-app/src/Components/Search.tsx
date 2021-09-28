import "./../index.scss";
import { FaSistrix,FaFilter } from "react-icons/fa";
import { MouseEvent, useContext, useDebugValue, useEffect, useRef, useState } from "react";
import { SearchContext } from "../contexts";
import { FilteredField, ModalPosition } from "../types";
import { FilterModalList } from "./FilterModalList";
import { Modal } from "./Modal";


export const Search = () => {

  const { value, onSearchTextChange, filterBy, onFilterChange } = useContext(SearchContext);

  const [position, setPosition] = useState<ModalPosition>({x: 0, y: 0});
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if(position.x && position.y){
      setFilterIsOpen(true);
      console.log(position);
    }
  }, [position.x, position.y]);

  const hideFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  }


  const openFilter = ({clientX, clientY}: MouseEvent<SVGAElement>) => {
    if(!filterIsOpen){
      setPosition({...{x: clientX, y: clientY}});
    }
  }

  return (
    <>
      <div className="search-component">
        <div className="search-icon-wrapper">
          <FaSistrix />
        </div>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            placeholder={filterBy}
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
        filterIsOpen && <Modal list={<FilterModalList />} toggleModal={hideFilter} title={"Filters"} coordinates={position}/>
      }
    </>
  );
};