import axios from 'axios'
import { GET_FAVORITES_MOVIES_SUCCESS, GET_FAVORITES_MOVIES_FAIL } from 'ducks/watchlist/const'
import { callApi, apiKey } from 'config'
import { call, put} from 'redux-saga/effects'

export default function* fetchFavoriteMoviesSaga({
    payload: {ids}
}) {
    const favoritesArr = [];

    for (let i = 0; i < ids.length; i++) {

        try {
            const options = {
                method: "get",
                url: callApi,
                params: {
                    apiKey,
                    i: ids[i],
                }
            };

            const res = yield call(axios, options)

            if (res && res.data) {
                favoritesArr.push(res.data);
            }
        } catch (err) {
            yield put({
                type: GET_FAVORITES_MOVIES_FAIL,
                payload: {err}
            })
        }
    }

    yield put({
        type: GET_FAVORITES_MOVIES_SUCCESS,
        payload: { favorites: favoritesArr }
    })
}
