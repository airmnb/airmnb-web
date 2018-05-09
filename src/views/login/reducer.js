import * as actions from './actions';
const initialState = {
    loading: false,
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
                loading: true
            }
        case actions.LOGIN_NATIVE_USER_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actions.LOGIN_NATIVE_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case actions.LOGIN_GOOGLE_USER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}