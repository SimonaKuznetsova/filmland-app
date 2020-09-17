import {
    LOAD_ALL_MOVIES_START, LOAD_ALL_MOVIES_SUCCESS,
    CHANGE_LOAD_MORE_COUNT, CHANGE_SEARCH_TITLE,
    LOAD_MORE_START, LOAD_MORE_SUCCESS,
    LOAD_ALL_MOVIES_FAIL, LOAD_MORE_FAIL
} from 'ducks/movieList/const'

const defaultState = {
    foundMovies: [],
    loading: false,
    totalCount: null,
    loadMoreCount: 1,
    searchTitle: '',
    errorText: null
}

export default function reducer(state = defaultState, action) {
    const { type, payload } = action

    switch (type) {
        case LOAD_ALL_MOVIES_START:
            return { ...state, loading: true }
        case LOAD_ALL_MOVIES_SUCCESS:
            return { ...state, foundMovies: payload.Search, totalCount: payload.totalResults, loading: false }
            case LOAD_ALL_MOVIES_FAIL: 
            return {...state, errorText: payload.err}
        case CHANGE_LOAD_MORE_COUNT:
            return { ...state, loadMoreCount: payload.loadMoreCount }
        case LOAD_MORE_START:
            return { ...state }
        case LOAD_MORE_SUCCESS:
            return { ...state, foundMovies: state.foundMovies.concat(payload.moreMovies) }
        case LOAD_MORE_FAIL: 
            return {...state, errorText: payload.err}
        case CHANGE_SEARCH_TITLE: {
            return { ...state, searchTitle: payload.searchTitle }
        }
    }

    return state
}