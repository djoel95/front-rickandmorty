import { GET_CHARACTER, GET_PAGINATE_CHARACTER, GET_RANDOM_CHARACTER, REMOVE_CHARACTER, TOOGLE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
  characters: [],
  paginateCharacters: {},
  character: {},
  filteredCharacters: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_CHARACTER:
      return { ...state, characters: payload };
    case GET_PAGINATE_CHARACTER:
      return { ...state, paginateCharacters: payload }
    case REMOVE_CHARACTER:
      return { ...state, characters: payload }
    case GET_CHARACTER:
      return { ...state, character: payload }
    case TOOGLE_FAVORITE:
      return { ...state, myFavorites: payload }
    default:
      return state;
  }
};

export default reducer