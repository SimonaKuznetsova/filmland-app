
import firebase from 'firebase'
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR, SIGN_IN_SUCCESS } from "ducks/auth/const"

const defaultState = {
    user: null,
    loading: null,
    error: null
}

export default function reducer(state = defaultState, action) {
    const { type, payload, error } = action

    switch (type) {
        case SIGN_UP_REQUEST:
            return { ...state, loading: true }
        case SIGN_UP_SUCCESS:
            return { ...state, loading: false, user: payload.user, error: null }
        case SIGN_UP_ERROR:
            return { ...state, loading: false, error }
    }

    return state
}

export const signUp = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: SIGN_UP_REQUEST
        })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: SIGN_UP_SUCCESS,
                payload: { user }
            }))
            .catch(error => dispatch({
                type: SIGN_UP_ERROR,
                error
            }))
    }
}

// import { AUTH_USER_CHANGE, USER_EMAIL_CHANGE, USER_PASSWORD_CHANGE, SIGN_UP } from "ducks/auth/const"

// const defaultState = {
//     user: {},
//     userData: {
//         email: '',
//         password: ''
//     }
// }

// export default function reducer(state = defaultState, action) {
//     const { type, payload } = action

//     switch (type) {
//         case AUTH_USER_CHANGE:
//             return { ...state, user: payload.user }
//         case USER_EMAIL_CHANGE:
//             return {
//                 ...state, userData: { email: payload.email, password: state.userData.password.concat('') }
//             }
//         case USER_PASSWORD_CHANGE:
//             return {
//                 ...state, userData: { email: state.userData.email.concat(''), password: payload.password }
//             }
//         case SIGN_UP:
//                 return {
//                     ...state, userData: { email: state.userData.email.concat(''), password: payload.password }
//                 }

//     }

//     return state
// }