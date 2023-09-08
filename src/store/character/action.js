import { ADD_FAVORITE, GET_RANDOM_CHARACTER, REMOVE_FAVORITE } from "./action-types";
import { FetchService, actionObject } from "../../utils";
import axios from "axios";
import { RICK_API_URL } from "../../utils/path";

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


export const getRandomCharacter = () => {
  return async (dispatch, getStore) => {
    try {
      const { character: { characters } } = getStore()
      const { data } = await axios(`${RICK_API_URL}character`);
      const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
      if (
        randomCharacter &&
        !characters?.some((char) => char.id === randomCharacter.id)
      ) dispatch(actionObject(GET_RANDOM_CHARACTER, [...characters || [], randomCharacter]));
    } catch (error) {
      console.log(error)
      window.alert(error?.data || 'ha ocurrido un error')
    }
  }
};

export const onSearch = (id) => {
  return async (dispatch, getStore) => {
    const { character: { characters } } = getStore()
    if (!id && isNaN(id)) window.alert("Ingrese un ID");
    if (characters.some((chart) => chart.id === Number(id))) return window.alert("El personaje ya existe");
    try {
      const { data } = await axios(`${RICK_API_URL}character/${id}`);
      if (data.name) dispatch(actionObject(GET_RANDOM_CHARACTER, [...characters || [], data]));
    } catch (error) {
      console.log(error);
    }
  }
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