import firebase from "firebase";
import { eventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { push } from "react-router-redux";

import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "ducks/auth/const";

const onAuthStateChanged = () => {
  return eventChannel((emitter) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        emitter({
          error: false,
          user,
        });
      } else {
        // No user is signed in.
        emitter({
          error: true,
          user: null,
        });
      }
    });

    // The subscriber must return an unsubscribe function
    return () => {
      unsubscribe();
    };
  });
};

export default function* onAuthStateChangedSaga() {
  const chan = yield call(onAuthStateChanged);

  try {
    while (true) {
      const { error, user } = yield take(chan);

      if (!error) {
        yield put({
          type: SIGN_IN_SUCCESS,
          payload: { user },
        });
        yield put(push("/watchlist"));
        console.log('i`m authorized!')
      } else {
        yield put({
          type: SIGN_IN_ERROR,
          error: "Sign in error",
        });
      }
    }
  } catch (e) {
    console.log("Auth Event Channel error ::: ", e);
  }
}
