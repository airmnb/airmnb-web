export const SIGNUP_NATIVE_USER = 'SIGNUP_NATIVE_USER';
export const SIGNUP_NATIVE_USER_FULFILLED = 'SIGNUP_NATIVE_USER_FULFILLED';
export const SIGNUP_NATIVE_USER_FAILED = 'SIGNUP_NATIVE_USER_FAILED';
export const SIGNUP_CHECK_USER = 'SIGNUP_CHECK_USER';
export const SIGNUP_CHECK_USER_FULFILLED = 'SIGNUP_CHECK_USER_FULFILLED';
export const SIGNUP_CHECK_USER_FAILED = 'SIGNUP_CHECK_USER_FAILED';

export const signupNativeUser = (payload) => ({
    type: SIGNUP_NATIVE_USER,
    payload
});

export const signupNativeFulfilled = (payload) => ({
    type: SIGNUP_NATIVE_USER_FULFILLED,
    payload
});

export const signupNativeFailed = (error) => ({
    type: SIGNUP_NATIVE_USER_FAILED,
    error
});

export const signupCheckUser = (accountName) => {
    return {
    type: SIGNUP_CHECK_USER,
    accountName
};}

export const signupCheckUserFulfilled = (payload) => ({
    type: SIGNUP_CHECK_USER_FULFILLED,
    payload
});

export const signupCheckUserFailed = (error) => ({
    type: SIGNUP_CHECK_USER_FAILED,
    error
});