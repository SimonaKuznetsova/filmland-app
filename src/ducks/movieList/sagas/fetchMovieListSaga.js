import {LOAD_ALL_MOVIES_SUCCESS, LOAD_ALL_MOVIES_FAIL} from "ducks/movieList/const"
import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { callApi, apiKey } from 'config'

export default function* fetchMovieListSaga({
    payload: title
}) {
    try {
        const options = {
            method: "get",
            url: callApi,
            params: {
                apiKey,
                s: title,
            }
        };

        const res = yield call(axios, options)

        if (res && res.data) {
            yield put({
                type: LOAD_ALL_MOVIES_SUCCESS,
                payload: res.data
            })
        }
    } catch (err) {
        yield put({
            type: LOAD_ALL_MOVIES_FAIL,
            payload: {err}
        })
    }
}