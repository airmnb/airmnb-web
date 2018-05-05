import * as actions from './actions';

const initialState = {
    isAuthenticated: false,
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.AUTH_CHECK:
            return {
                ...state,
                loading: true
            }
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        case actions.AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}