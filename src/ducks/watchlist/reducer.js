import {
    ADD_TO_WATCHLIST,
    DELETE_FROM_WATCHLIST,
    GET_FAVORITES_MOVIES_SUCCESS,
    GET_FAVORITES_MOVIES_START,
    GET_FAVORITES_MOVIES_FAIL
} from 'ducks/watchlist/const'

const defaultState = {
    favorites: [],
    favoritesMovies: [],
    loading: true,
    errorText: null
};

export default function reducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                favorites: [...state.favorites, payload.id],
            };

        case DELETE_FROM_WATCHLIST:
            return {
                ...state,
                favorites: state.favorites.filter((id) => id !== payload.id),
                favoritesMovies: state.favoritesMovies.filter(
                    ({ imdbID }) => imdbID !== payload.id
                ),
            };

        case GET_FAVORITES_MOVIES_START: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_FAVORITES_MOVIES_SUCCESS:
            return {
                ...state,
                favoritesMovies: payload.favorites,
                loading: false,
            }
        case GET_FAVORITES_MOVIES_FAIL:
            return {
                ...state, errorText: payload.err
            }
    }

    return state;
}