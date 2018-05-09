export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULLFILLED = 'FETCH_USER_FULLFILLED';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const fetchUser = () => ({
    type: FETCH_USER
});

export const fetchUserfullfilled = (payload) => ({
    type: FETCH_USER_FULLFILLED,
    payload
});

export const fetchUserFailed = () => ({
    type: FETCH_USER_FAILED,
    error: 'failed'
});