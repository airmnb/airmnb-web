import { whoami } from "../../linksRel";
import { authSuccess, authFail, AUTH_CHECK, AUTH_LOGOUT, authLogoutSuccess } from "./actions";
import { call } from "../../services/httpClient";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import { logout } from '../../linksRel';
import { combineEpics } from 'redux-observable';

export const authCheckEpic = (action$, store) => {

    return action$
    .ofType(AUTH_CHECK)
    .mergeMap(() =>
        call({url: whoami})
        .map(res => {
            return authSuccess(res);
        })
        .catch(err => {
            return Observable.of(authFail(err))
        })
    );
};

export const logoutEpic = (action$) =>
    action$
    .ofType(AUTH_LOGOUT)
    .do(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('sessionId');
    })
    .switchMap(() => {
        const logout$ = call({url: logout})
        .map(authLogoutSuccess)
        .catch(() => Observable.of(authLogoutSuccess()));

        localStorage.removeItem('token');
        localStorage.removeItem('sessionId');

        return logout$;
    });

export default combineEpics(
    authCheckEpic,
    logoutEpic
)