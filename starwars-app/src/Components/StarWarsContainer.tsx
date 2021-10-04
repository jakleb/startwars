import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { ChangeEvent, useState, useCallback } from "react";
import { Route, Switch} from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { PersonDetail } from "./PersonDetail";
import { SearchContext } from "../utils/contexts";
import { useSelector } from "react-redux";
import { State } from "../state";
import { NotFound } from "./NotFound";
import { useStarWarsApi } from "../CustomHooks/hooks";
import { APP_ENDPOINTS } from "../types";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");

  const { theme } = useSelector((state: State) => state.bank);

  useStarWarsApi();

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
            <Route path={`/${APP_ENDPOINTS.List}/:pageid`} component={CharacterList} />
            <Route path={`/${APP_ENDPOINTS.Contact}`} component={ContactForm} />
            <Route path={`/${APP_ENDPOINTS.Favorites}/:pageid`} component={CharacterList} />
            <Route path={`/${APP_ENDPOINTS.Detail}/:personid`} component={PersonDetail} />
            <Route><NotFound /></Route>
          </Switch>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
