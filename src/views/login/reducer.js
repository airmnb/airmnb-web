import * as actions from './actions';
const initialState = {
    nativeLoading: false,
    googleLoading: false,
    token: null,
    user: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN_NATIVE_USER:
            return {
                ...state,
                error: null,
                token: null,
                nativeLoading: true
            }
        case actions.LOGIN_NATIVE_USER_FAILED:
            return {
                ...state,
                error: action.error,
                nativeLoading: false
            }
        case actions.LOGIN_NATIVE_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                nativeLoading: false
            }
        case actions.LOGIN_GOOGLE_USER:
            return {
                ...state,
                googleLoading: true
            }
        default:
            return state;
    }
}