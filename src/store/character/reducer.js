import { GET_RANDOM_CHARACTER } from "./action-types";

const initialState = {
  myFavorites: [],
  characters: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*     case ADD_FAVORITE:
          return { ...state, ...payload };
        case REMOVE_FAVORITE:
          return { ...state, myFavorites: payload }; */

    case GET_RANDOM_CHARACTER:
      return { ...state, characters: payload };
    /* 
        case FILTER_CARDS:
          const gender = payload;
          let filteredFavorites = [];
    
          if (gender === "Male") {
            filteredFavorites = state.characters.filter(
              favorite => favorite.gender === "Male"
            );
          } else if (gender === "Female") {
            filteredFavorites = state.characters.filter(
              favorite => favorite.gender === "Female"
            );
          } else if (gender === "Genderless") {
            filteredFavorites = state.characters.filter(
              favorite => favorite.gender === "Genderless"
            );
          } else if (gender === "unknown") {
            filteredFavorites = state.characters.filter(
              favorite => favorite.gender === "unknown"
            );
          } else {
            filteredFavorites = state.characters;
          }
    
          return {
            ...state,
            myFavorites: filteredFavorites,
          };
    
        case ORDER_CARDS:
          const orderedCharacters = [...state.characters];
          if (payload === "A") {
            orderedCharacters.sort((a, b) => a.id - b.id);
          } else if (payload === "D") {
            orderedCharacters.sort((a, b) => b.id - a.id);
          }
          return {
            ...state,
            myFavorites: orderedCharacters
          };
     */
    default:
      return state;
  }
};

export default reducer