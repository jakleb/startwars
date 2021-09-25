import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { PersonDetail } from "./PersonDetail";
import { SearchContext } from "../contexts";
import { useDispatch, useSelector } from "react-redux";
import { FilteredField } from "../types";
import { State } from "../state";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");
  const [filteredFilter, setFilteredFilter] = useState<FilteredField>(FilteredField.Name);

  const {favorites, theme} = useSelector((state: State) => state.bank);

  const onSerchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSerchValue(value);
  };

  const onChangeFilter = (value:FilteredField ) => {
    setFilteredFilter(value);
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <SearchContext.Provider value={{ value: searchValue, onSearchTextChange: onSerchChange, filterBy: filteredFilter, onFilterChange: onChangeFilter}}>
        <AppHeader />
        <div className="main-container">
          <Route exact path="/page/" component={CharacterList}>
            {() => <Redirect to="/page/1" />}
          </Route>
          <Route path="/page/:pageid" component={CharacterList} />
          <Route path="/contact" component={ContactForm}></Route>
          <Route path="/favorities" component={CharacterList}></Route>
          <Route path="/detail/:personid" component={PersonDetail}></Route>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
