import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { ChangeEvent, useState, useCallback } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { PersonDetail } from "./PersonDetail";
import { SearchContext } from "../utils/contexts";
import { useSelector } from "react-redux";
import { State } from "../state";
import { NotFound } from "./NotFound";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");

  const { theme } = useSelector((state: State) => state.bank);

  const onSerchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSerchValue(value);
  }, []);

  return (
    <div className={`app-wrapper ${theme}`}>
      <SearchContext.Provider value={{ value: searchValue, onSearchTextChange: onSerchChange }}>
        <AppHeader />
        <div className="main-container">
          <Switch>
            <Route path="/page/:pageid" component={CharacterList} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/favorites/:pageid" component={CharacterList} />
            <Route path="/detail/:personid" component={PersonDetail} />
            <Route><NotFound /></Route>
          </Switch>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
