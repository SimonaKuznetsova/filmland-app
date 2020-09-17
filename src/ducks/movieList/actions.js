import {
    LOAD_MORE_START,
    CHANGE_LOAD_MORE_COUNT,
    CHANGE_SEARCH_TITLE,
    LOAD_ALL_MOVIES_START
  } from 'ducks/movieList/const'

export const getFilms = (title) => {
    return {
        type: LOAD_ALL_MOVIES_START,
        payload: title
    };
};

export const loadMoreMovies = (searchTitle) => {
    return {
        type: LOAD_MORE_START,
        payload: { searchTitle }
    }
}

export const changeLoadMoreCount = (loadMoreCount) => {
    return {
        type: CHANGE_LOAD_MORE_COUNT,
        payload: { loadMoreCount }
    }
}

export const changeSearchTitle = (searchTitle) => {
    return {
        type: CHANGE_SEARCH_TITLE,
        payload: { searchTitle }
    }
}