import fetchFavoriteMoviesSaga from 'ducks/watchlist/sagas/fetchFavoriteMoviesSaga'
import {GET_FAVORITES_MOVIES_START} from 'ducks/watchlist/const'
import {takeEvery} from 'redux-saga/effects'

export default function* saga() {
    yield takeEvery(GET_FAVORITES_MOVIES_START, fetchFavoriteMoviesSaga)
}