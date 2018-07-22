import { whoami } from "../../linksRel";
import { authSuccess, authFail, AUTH_CHECK, AUTH_LOGOUT, authLogoutSuccess, authCheck } from "./actions";
import { call } from "../../services/httpClient";
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
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
    .switchMap(() =>
        merge(
            of(authCheck()),
            call({url: logout})
            .map(authLogoutSuccess)
        )
        .catch(() => Observable.of(authLogoutSuccess()))
    );

export default combineEpics(
    authCheckEpic,
    logoutEpic
)