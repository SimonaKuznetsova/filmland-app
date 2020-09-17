import fetchMovieListSaga from 'ducks/movieList/sagas/fetchMovieListSaga'
import fetchMoreMoviesSaga from 'ducks/movieList/sagas/fetchMoreMoviesSaga'
import {LOAD_ALL_MOVIES_START, LOAD_MORE_START} from 'ducks/movieList/const'
import {takeEvery} from 'redux-saga/effects'

export default function* saga() {
    yield takeEvery(LOAD_ALL_MOVIES_START, fetchMovieListSaga)
    yield takeEvery(LOAD_MORE_START, fetchMoreMoviesSaga)
}