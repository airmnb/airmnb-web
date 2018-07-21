import * as a from './actions';

const initialState = []

export default (state = initialState, action) => {
    const index = state.findIndex(f => f.uuid === action.uuid);
    switch(action.type) {
        case a.UPLOAD_FILE:
            return (index > -1) ?
            [
                ...state.slice(0, index),
                {
                    ...state[index],
                    inProgress: true,
                    error: null
                },
                ...state.slice(index + 1)
            ] :
            [
                ...state,
                {
                    uuid: action.uuid,
                    inProgress: true,
                    error: null
                }
            ]
        case a.UPLOAD_FILE_SUCCESS:
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    inProgress: false,
                    error: null,
                    imageId: action.file.imageId
                },
                ...state.slice(index + 1)
            ]
        case a.UPLOAD_FILE_FAILED:
            return[
                    ...state.files.slice(0,index),
                    {
                        ...state.files[index],
                        uploading: false,
                        error: action.err,
                    },
                    ...state.files.slice(index+1)
                ]
        default:
            return state;
    }
}