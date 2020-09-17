import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import { LOAD_MORE_SUCCESS, LOAD_MORE_FAIL } from "ducks/movieList/const"
import { callApi, apiKey } from 'config'
import { stateSelector } from 'ducks/movieList/selectors'

export default function* fetchMoreMoviesSaga({
    payload: { searchTitle }
}) {

    const state = yield select(stateSelector)

    const count = state.foundMovies.length / 10
    try {
        const options = {
            method: "get",
            url: callApi,
            params: {
                apiKey,
                s: searchTitle,
                page: count + 1
            }
        }

        const res = yield call(axios, options)

        if (res && res.data) {
                yield put({
                    type: LOAD_MORE_SUCCESS,
                    payload: { moreMovies: res.data.Search }
                })
    }
    } catch (err) {
        yield put({
            type: LOAD_MORE_FAIL,
            payload: {err}
        })
    }
}