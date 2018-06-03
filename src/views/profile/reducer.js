import * as actions from './actions';

const initiaState = {
    data: null,
    loading: false,
    error: null
}

export default (state = initiaState, action) => {
    switch(action.type) {
        case actions.FETCH_USER:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actions.FETCH_USER_FULFILLED:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actions.FETCH_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actions.SAVE_USER:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actions.SAVE_USER_FULFILLED:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actions.SAVE_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
}