import * as a from './actions';
const initState = {
    saveBabyLoading: false,
    deleteBabyLoading: false,
    collection: []
}

export default (state = initState, action) => {
    switch(action.type) {
        case a.BABY_SAVE:
            return {
                ...state,
                saveBabyLoading: true
            }
        case a.BABY_SAVE_FULFILED:
            return {
                ...state,
                saveBabyLoading: false
            }
        case a.BABY_SAVE_FAILED:
            return {
                ...state,
                saveBabyLoading: false
            }
        default:
            return state;
    }
}