import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { useState } from "react";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");

  return (
    <div className="app-wrapper">
        <AppHeader />
        <CharacterList/>
    </div>
  );
};
