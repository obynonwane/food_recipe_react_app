// 1. create context
import { createContext } from "react";

//2. create a context object - with method s and variable it will use - exported since we will use it somewher else
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// 3. we can create a functional component in the context file
// the component or provider will be warrped around any component that needs to
// interact with this context
function FavoritesContextProvider({ children }) {
  //4. the actual implementation of the above context object will be here
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

// 5. export
export default FavoritesContextProvider;
