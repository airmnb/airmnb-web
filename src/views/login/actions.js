export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USE_FAILED = 'LOGIN_USER_FAILED';
export const LOGIN_USE_FULFILLED = 'LOGIN_USER_FULFILLED';

export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
});

export const loginUserFailed = (error) => ({
    type: LOGIN_USER,
    error
});

export const loginUserFulfilled = (payload) => ({
    type: LOGIN_USE_FULFILLED,
    payload
})