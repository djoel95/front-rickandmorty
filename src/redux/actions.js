
import axios from "axios";
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';

export const addFav = (character) => {
  const endpoint = 'https://back-rickandmorty.onrender.com/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAVORITE,
           payload: data,
        });
     });
  };
};
  
  export const removeFav = (id) => {
    const endpoint = 'https://back-rickandmorty.onrender.com/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAVORITE,
             payload: data,
       });
       });
    };
  };
  export const filterCards = (gender) => {
    return {
      type: FILTER_CARDS,
      payload: gender
    };
  };
  
  export const orderCards = (order) => {
    return {
      type: ORDER_CARDS,
      payload: order
    };
  };
  