import {LOAD_MOVIE_START} from "ducks/movie/const"

export const getFilm = (id) => {
    return {
      type: LOAD_MOVIE_START,
      payload: id
    };
  };