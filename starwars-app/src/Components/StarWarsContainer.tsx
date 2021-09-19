import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");

  return (
    <div className="app-wrapper">
        <AppHeader />
        <Route exact path="/page/" component={CharacterList}>
          {() => <Redirect to="/page/1" />}
        </Route>
        <Route path="/page/:pageid" component={CharacterList} />
    </div>
  );
};
