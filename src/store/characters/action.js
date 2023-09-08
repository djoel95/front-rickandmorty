import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action-types";
import { FetchService, actionObject } from "../../utils";

export const addFav = (character) => {
  return async (dispatch) => {
    const response = await FetchService('fav', 'POST', character);
    return dispatch(actionObject(ADD_FAVORITE, { allCharacters: response, myFavorites: response }));
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    const response = await FetchService('fav/' + id, 'DELETE');
    return dispatch(actionObject(REMOVE_FAVORITE, response));
  };
};

export const filterCards = (gender) => {
  return async (dispatch, store) => {
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
    return actionObject(FILTER_CARDS, gender)
  }
}
export const orderCards = (order) => actionObject(ORDER_CARDS, order);