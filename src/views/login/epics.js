import {Observable} from 'rxjs/Observable';
import * as a from './actions';
import {get} from '../../services/httpClient';
import {signin} from '../../linksRel';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

export const loginNativeUserEpic = (action$, store, deps) =>
    action$
    .ofType(a.LOGIN_NATIVE_USER)
    .switchMap(() => {
        return get({url:'https://virtserver.swaggerhub.com/airmnb/api/1.0.0/stat'})
        .catch(err => Observable.of(a.loginNativeUserFailed(err)))
        .map(a.loginNativeUserFulfilled);
    })


export const loginGoogleUserEpic = (action$) => {
    return action$
    .ofType(a.LOGIN_GOOGLE_USER)
    .do(() => {window.location = `${signin}?use=google&session_id=${localStorage.getItem('sessionId')}`})
    .catch(err => Observable.of(a.loginGoogleUserFailed(err)))
    .map(a.loginGoogleUserFulfilled);
}