import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER_CARDS, FILTER_CARDS } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state, myFavorites: payload, allCharacters: payload };
      

    case REMOVE_FAVORITE:
      return { ...state, myFavorites: payload };

    case FILTER_CARDS:
      const gender = payload;
      let filteredFavorites = [];

      if (gender === "Male") {
        filteredFavorites = state.allCharacters.filter(
          favorite => favorite.gender === "Male"
        );
      } else if (gender === "Female") {
        filteredFavorites = state.allCharacters.filter(
          favorite => favorite.gender === "Female"
        );
      } else if (gender === "Genderless") {
        filteredFavorites = state.allCharacters.filter(
          favorite => favorite.gender === "Genderless"
        );
      } else if (gender === "unknown") {
        filteredFavorites = state.allCharacters.filter(
          favorite => favorite.gender === "unknown"
        );
      } else {
        filteredFavorites = state.allCharacters;
      }

      return {
        ...state,
        myFavorites: filteredFavorites,
      };

    case ORDER_CARDS:
      const orderedCharacters = [...state.allCharacters];
      if (payload === "A") {
        orderedCharacters.sort((a, b) => a.id - b.id);
      } else if (payload === "D") {
        orderedCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderedCharacters
      };

    default:
      return state;
  }
};

export default reducer;
