import watchMovie from 'ducks/movie/sagas'
import watchMovieList from 'ducks/movieList/sagas'
import watchToggleWatchlist from 'ducks/watchlist/sagas'
import {all} from 'redux-saga/effects'


export default function* rootSaga() {
    yield all([
      watchMovie(),
      watchMovieList(),
      watchToggleWatchlist()
    ])
  }