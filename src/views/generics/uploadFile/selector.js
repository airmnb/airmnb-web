import { createSelector } from 'reselect';

const getUploadedFile = (state, props) => state.files.find(f => f.uuid === props.uuid)

export const makeGetUploadedFile = () => createSelector(
    getUploadedFile,
    (file) => file
)