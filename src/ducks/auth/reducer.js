import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS,
     SIGN_UP_ERROR, SIGN_IN_ERROR, SIGN_IN_SUCCESS, 
     SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS
     } from "ducks/auth/const"

const defaultState = {
    user: null,
    loading: null,
    error: null
}

export default function reducer(state = defaultState, action) {
    const { type, payload, error } = action

    switch(type){
        case SIGN_UP_REQUEST:
            return { ...state, loading: true }
        case SIGN_UP_SUCCESS:
            return { ...state, loading: false, user: payload.user, error: null }
        case SIGN_UP_ERROR:
            return { ...state, loading: false, error }

        case SIGN_IN_REQUEST:
            return { ...state, loading: true }
        case SIGN_IN_SUCCESS:
            return { ...state, loading: false, user: payload.user, error: null }
        case SIGN_IN_ERROR:
            return { ...state, loading: false, error }
        
        case SIGN_OUT_REQUEST:
            return { ...state, user: null }
            case SIGN_OUT_SUCCESS:
                return { ...state, user: null }
    }

    return state
}

// export const signUp = (email, password) => {
//     return (dispatch) => {
//         dispatch({
//             type: SIGN_UP_REQUEST
//         })

//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(user => dispatch({
//                 type: SIGN_UP_SUCCESS,
//                 payload: { user }
//             }))
//             .catch(error => dispatch({
//                 type: SIGN_UP_ERROR,
//                 error
//             }))
//     }
// }

// export const signIn = (email, password) => {
//     return (dispatch) => {
//         dispatch({
//             type: SIGN_IN_REQUEST
//         })

//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(user => dispatch({
//                 type: SIGN_IN_SUCCESS,
//                 payload: { user }
//             }))
//             .catch(error => dispatch({
//                 type: SIGN_IN_ERROR,
//                 error
//             }))
//     }
// }

