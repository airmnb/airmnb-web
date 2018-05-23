export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'LOGOUT';

export const authCheck = () => ({
    type: AUTH_CHECK
})

export const authSuccess = () => ({
    type: AUTH_SUCCESS
});

export const authFail = (err) => ({
    type: AUTH_FAIL,
    err,
});

export const authLogout = () => ({
    type: AUTH_LOGOUT
});
