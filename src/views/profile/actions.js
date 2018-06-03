export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';
export const SAVE_USER = 'FETCH_USER';
export const SAVE_USER_FULFILLED = 'SAVE_USER_FULFILLED';
export const SAVE_USER_FAILED = 'SAVE_USER_FAILED';
export const CANCEL_USER = 'CANCEL_USER';

export const fetchUser = () => ({
    type: FETCH_USER
});

export const fetchUserfullfilled = (payload) => ({
    type: FETCH_USER_FULFILLED,
    payload
});

export const fetchUserFailed = () => ({
    type: FETCH_USER_FAILED,
    error: 'failed'
});

export const saveUser = (payload) => ({
    type: FETCH_USER,
    payload
});

export const saveUserFulfilled = (payload) => ({
    type: FETCH_USER_FULFILLED,
    payload
})

export const saveUserfailed = (error) => ({
    type: FETCH_USER_FAILED,
    error
})

export const cancelUser = () => ({
    type: CANCEL_USER
})