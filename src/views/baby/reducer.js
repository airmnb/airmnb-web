import * as a from './actions';
const initState = {
    fetchBabiesInProgress: false,
    list: []
}

const findIndex = (list, id) => list.findIndex(b => b.babyId === id)

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
                saveBabyInProgress: true
            }
        case a.BABY_SAVE_FULFILED:
            return {
                ...state,
                saveBabyInProgress: false
            }
        case a.BABY_SAVE_FAILED:
            return {
                ...state,
                saveBabyInProgress: false
            }
        case a.BABY_DELETE:
            const index = findIndex(state.list, action.babyId);
            return {
                ...state,
                list: [
                    ...state.list.slice(0, index),
                    {
                        ...state.list[index],
                        deleteInProgress: true
                    },
                    ...state.list.slice(index + 1),
                ]

            }
        case a.BABY_DELETE_FULFILED:
            return {
                ...state,
                deleteBabyInProgress: false
            }
        case a.BABY_DELETE_FAILED:
            return {
                ...state,
                deleteBabyInProgress: false
            }
        default:
            return state;
    }
}