import {
    ADD_TO_WATCHLIST,
    DELETE_FROM_WATCHLIST,
    GET_FAVORITES_MOVIES_START
  } from 'ducks/watchlist/const'

export const addToWatchlist = (id) => {
    return {
      type: ADD_TO_WATCHLIST,
      payload: { id },
    };
  };
  
  export const deleteFromWatchlist = (id) => {
    return {
      type: DELETE_FROM_WATCHLIST,
      payload: { id },
    };
  };
  
  export const getFavoritesMovies = (ids) => {
    return {
      type: GET_FAVORITES_MOVIES_START,
      payload: { ids },
    };
  };