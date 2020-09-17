import {LOAD_MOVIE_SUCCESS, LOAD_MOVIE_START, LOAD_MOVIE_FAIL } from "ducks/movie/const"

const defaultState = {
    movie: {},
    loading: false,
    errorText: null
}  

export default function reducer(state = defaultState, action) {
    const {type, payload} = action

    switch (type) {
        case LOAD_MOVIE_START:
            return {...state, loading: true}
        case LOAD_MOVIE_SUCCESS:
            return {...state, movie: {...payload}, loading: false}
        case LOAD_MOVIE_FAIL:
            return {...state, errorText: payload.err}
    }

    return state
}