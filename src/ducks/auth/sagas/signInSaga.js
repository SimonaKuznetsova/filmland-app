import {SIGN_IN_SUCCESS, SIGN_IN_ERROR} from "ducks/auth/const"
import { call, put } from 'redux-saga/effects'
import firebase from 'firebase'
import { push } from "react-router-redux"

export default function* signInSaga({
    payload: {email, password}
}) {
    const auth = firebase.auth()

        try {
            const user = yield call(
                [auth, auth.signInWithEmailAndPassword],
                email, password
            )
            
            yield put({
                type: SIGN_IN_SUCCESS,
                payload: {user}
            })
            yield put(push('/watchlist'))
        } catch (error) {
            yield put({
                type: SIGN_IN_ERROR,
                error
            })
        }
}