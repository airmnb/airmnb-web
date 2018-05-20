import * as actions from './actions';
const initialState = {
    loading: false,
    validUser: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.SIGNUP_NATIVE_USER:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actions.SIGNUP_NATIVE_USER_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actions.SIGNUP_NATIVE_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case actions.SIGNUP_CHECK_USER:
            return {
                ...state,
                loading: true
            }
        case actions.SIGNUP_CHECK_USER_FULFILLED:
            return {
                ...state,
                validUser: true,
                loading: false
            }
        case actions.SIGNUP_CHECK_USER_FAILED:
            return {
                ...state,
                validUser: false,
                loading: false
            }
        default:
            return state;
    }
}