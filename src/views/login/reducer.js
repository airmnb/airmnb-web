import * as actions from './actions';
const initialState = {
    loading: false,
    token: null,
    user: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN_USER:
            return {
                ...state,
                error: null,
                token: null,
                loading: true
            }
        case actions.LOGIN_USE_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actions.LOGIN_USE_FULFILLED:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}