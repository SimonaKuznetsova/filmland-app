import {SIGN_UP_SUCCESS, SIGN_UP_ERROR} from "ducks/auth/const"
import { call, put } from 'redux-saga/effects'
import firebase from 'firebase'

export default function* signUpSaga({
    payload: {email, password}
}) {
    const auth = firebase.auth()

        try {
            const user = yield call(
                [auth, auth.createUserWithEmailAndPassword],
                email, password
            )

            yield put({
                type: SIGN_UP_SUCCESS,
                payload: {user}
            })
        } catch (error) {
            yield put({
                type: SIGN_UP_ERROR,
                error
            })
        }
}