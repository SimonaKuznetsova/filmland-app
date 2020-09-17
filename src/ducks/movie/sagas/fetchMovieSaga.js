import {LOAD_MOVIE_SUCCESS, LOAD_MOVIE_FAIL} from "ducks/movie/const"
import { call, put} from 'redux-saga/effects'
import axios from 'axios'

import {callApi, apiKey} from 'config'

export default function* fetchMovieSaga({
    payload: id
}) {
    try {
        const options = {
            method: "get",
            url: callApi,
            params: {
                apiKey,
                i: id,
            }
        }
        
        const res = yield call(axios, options)

        if (res && res.data) {
        yield put({
            type: LOAD_MOVIE_SUCCESS,
            payload: res.data
          })
        } 
    } catch (err) {
        yield put({
            type: LOAD_MOVIE_FAIL,
            payload: {err}
        })
    }
}