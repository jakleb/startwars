import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { PersonDetail } from "./PersonDetail";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");

  return (
    <div className="app-wrapper">
        <AppHeader />
        <Route exact path="/page/" component={CharacterList}>
          {() => <Redirect to="/page/1" />}
        </Route>
        <Route path="/page/:pageid" component={CharacterList} />
        <Route path="/contact" component={ContactForm}></Route>
        <Route path="/favorities" component={CharacterList}></Route>
        <Route path="/detail/:personid" component={PersonDetail}></Route>
    </div>
  );
};
