import * as a from './actions';
const initState = {
    fetchBabiesInProgress: false,
    list: []
}

const updateBabies = (list, id, payload) => {
    const idx = list.findIndex(b => b.babyId === id);
    return [
        ...list.slice(0, idx),
        {
            ...list[idx],
            ...payload
        },
        ...list.slice(idx + 1),
    ]
}
export default (state = initState, action) => {
    switch(action.type) {
        case a.BABIES_FETCH:
            return {
                ...state,
                fetchBabiesInProgress: true
            }
        case a.BABIES_FETCH_FULFILED:
            return {
                ...state,
                fetchBabiesInProgress: false,
                list: action.payload.babies
            }
        case a.BABIES_FETCH_FAILED:
            return {
                ...state,
                fetchBabiesInProgress: false
            }
        case a.BABY_FETCH:
            return {
                ...state,
                fetchBabyInProgress: true
            }
        case a.BABY_FETCH_FULFILED:
            return {
                ...state,
                fetchBabyInProgress: false,
                list: [action.payload.baby]
            }
        case a.BABY_FETCH_FAILED:
            return {
                ...state,
                fetchBabyInProgress: false
            }
        case a.BABY_SAVE:
            return {
                ...state,
                list: updateBabies(state.list, action.payload.babyId, {
                    saveBabyInProgress: true
                })
            }
        case a.BABY_SAVE_FULFILED:
            return {
                ...state,
                list: updateBabies(state.list, action.payload.babyId, {
                    saveBabyInProgress: false
                })
            }
        case a.BABY_SAVE_FAILED:
            return {
                ...state,
                list: updateBabies(state.list, action.payload.babyId, {
                    saveBabyInProgress: false
                })
            }
        case a.BABY_DELETE:
            return {
                ...state,
                list: updateBabies(state.list, action.babyId, {
                    deleteInProgress: true
                })
            }
        case a.BABY_DELETE_FULFILED:
            return {
                ...state,
                list: updateBabies(state.list, action.babyId, {
                    deleteInProgress: false
                })
            }
        case a.BABY_DELETE_FAILED:
            return {
                ...state,
                list: updateBabies(state.list, action.babyId, {
                    deleteInProgress: true
                })
            }
        default:
            return state;
    }
}