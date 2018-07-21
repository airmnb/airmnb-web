export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILED = 'UPLOAD_FILE_FAILED';

export const uploadFile = (uuid, file) => ({
    type: UPLOAD_FILE,
    file,
    uuid
});

export const uploadFileSuccess = (uuid, {image}) => ({
    type: UPLOAD_FILE_SUCCESS,
    file: image,
    uuid
});

export const uploadFileFailed = (uuid, err) => ({
    type: UPLOAD_FILE_FAILED,
    err,
    uuid
});