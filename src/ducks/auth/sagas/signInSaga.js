import { SIGN_IN_ERROR } from "ducks/auth/const";
import { call, put } from "redux-saga/effects";
import firebase from "firebase";

export default function* signInSaga({ payload: { email, password } }) {
  try {
    const auth = yield call(firebase.auth);

    yield call([auth, auth.signInWithEmailAndPassword], email, password);
  } catch (error) {
    yield put({
      type: SIGN_IN_ERROR,
      error,
    });
  }
}
