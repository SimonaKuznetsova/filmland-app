import fetchMovieSaga from 'ducks/movie/sagas/fetchMovieSaga'
import {LOAD_MOVIE_START} from 'ducks/movie/const'
import {takeEvery} from 'redux-saga/effects'

export default function* saga() {
    yield takeEvery(LOAD_MOVIE_START, fetchMovieSaga)
}