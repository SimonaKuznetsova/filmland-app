import { SIGN_UP_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from "./const";

export const signUp = (email, password) => {
    return {
        type: SIGN_UP_REQUEST,
        payload: { email, password }
      };
}

export const signIn = (email, password) => {
    return {
        type: SIGN_IN_REQUEST,
        payload: { email, password }
      };
}

export const signOut = () => {
    return {
        type: SIGN_OUT_REQUEST,
      };
}