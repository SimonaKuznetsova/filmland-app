import { call, takeEvery } from "redux-saga/effects";

import signUpSaga from "ducks/auth/sagas/signUpSaga";
import signInSaga from "ducks/auth/sagas/signInSaga";
import signOutSaga from "ducks/auth/sagas/signOutSaga";
import {
  SIGN_UP_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
} from "ducks/auth/const";

import onAuthStateChangedSaga from "ducks/auth/sagas/onAuthStateChangedSaga";

export default function* saga() {
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga);
  yield takeEvery(SIGN_IN_REQUEST, signInSaga);
  yield takeEvery(SIGN_OUT_REQUEST, signOutSaga);

  yield call(onAuthStateChangedSaga);
}
