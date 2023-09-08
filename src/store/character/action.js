import { GET_CHARACTER, GET_PAGINATE_CHARACTER, GET_RANDOM_CHARACTER, REMOVE_CHARACTER, TOOGLE_FAVORITE } from "./action-types";
import { FetchService, actionObject } from "../../utils";
import axios from "axios";
import { RICK_API_URL } from "../../utils/path";

export const setToggleFavorite = (character) => {
  return async (dispatch, getStore) => {
    try {
      const { character: { myFavorites } } = getStore()
      if (!myFavorites.some((char) => char.id === String(character.id))) {
        const response = await FetchService('fav', 'POST', { ...character, id: String(character.id) });
        return dispatch(actionObject(TOOGLE_FAVORITE, response));
      }
      const response = await FetchService(`fav/${character.id}?id=` + character.id, 'DELETE');
      return dispatch(actionObject(TOOGLE_FAVORITE, response));
    } catch (error) {
      window.alert(error?.data || 'ha ocurrido un error')
    }

  };
};

export const removeCharacter = (id) => {
  return (dispatch, getStore) => {
    const { character: { characters } } = getStore()
    const newCaracters = [...characters]
    const index = newCaracters?.findIndex((char) => char.id === Number(id));
    if (index >= 0) {
      newCaracters?.splice(index, 1)
      return dispatch(actionObject(REMOVE_CHARACTER, newCaracters));
    }
  }
}

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

export const getCharacter = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${RICK_API_URL}character/${id}`);
      if (data.name) return dispatch(actionObject(GET_CHARACTER, data));
      window.alert("No hay personajes con ese ID");
    } catch (error) {
      console.log(error)
      window.alert(error?.data || 'ha ocurrido un error')
    }
  }
}

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
      window.alert(error?.data || 'ha ocurrido un error')
    }
  }
};

export const getPaginateCharacters = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${RICK_API_URL}character?page=${page}`);
      return dispatch(actionObject(GET_PAGINATE_CHARACTER, response?.data));
    } catch (error) {
      console.log(error);
      window.alert(error?.data || 'ha ocurrido un error')
    }
  }
}

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