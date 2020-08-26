import React from "react";
import { SearchCharactersByName, FavCharacters, ContextCharacters } from "./index";

// This is a reusable piece that could be used by any component that requires both contexts.
const ProvideCombinedContext = props => {
  return (
    <SearchCharactersByName.Consumer>
      {SearchCharactersByName => (
        <FavCharacters.Consumer>
          {FavCharacters => (
            <ContextCharacters.Provider value={{ SearchCharactersByName, FavCharacters }}>
              {props.children}
            </ContextCharacters.Provider>
          )}
        </FavCharacters.Consumer>
      )}
    </SearchCharactersByName.Consumer>
  );
};
export default ProvideCombinedContext;