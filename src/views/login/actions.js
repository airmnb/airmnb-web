export const LOGIN_NATIVE_USER = 'LOGIN_NATIVE_USER';
export const LOGIN_NATIVE_USER_FAILED = 'LOGIN_NATIVE_USER_FAILED';
export const LOGIN_NATIVE_USER_FULFILLED = 'LOGIN_NATIVE_USER_FULFILLED';
export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER';
export const LOGIN_GOOGLE_USER_FAILED = 'LOGIN_GOOGLE_USER_FAILED';
export const LOGIN_GOOGLE_USER_FULFILLED = 'LOGIN_GOOGLE_USER_FULFILLED';

export const loginNativeUser = (accountName, password) => ({
    type: LOGIN_NATIVE_USER,
    accountName,
    password
});

export const loginNativeUserFailed = (error) => ({
    type: LOGIN_NATIVE_USER,
    error
});

export const loginNativeUserFulfilled = (payload) => ({
    type: LOGIN_NATIVE_USER_FULFILLED,
    payload
})

export const loginGoogleUser = () => ({
    type: LOGIN_GOOGLE_USER
})

export const loginGoogleUserFailed = (error) => ({
    type: LOGIN_GOOGLE_USER,
    error
});

export const loginGoogleUserFulfilled = (payload) => ({
    type: LOGIN_GOOGLE_USER_FULFILLED,
    payload
})
