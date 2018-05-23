import {Observable} from 'rxjs/Observable';
import * as a from './actions';
import {get} from '../../services/httpClient';
import { login } from '../../linksRel';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/ignoreElements'
import { getUrlParams } from '../../services/routerService';

export const loginNativeUserEpic = (action$, store, deps) =>
    action$
    .ofType(a.LOGIN_NATIVE_USER)
    .switchMap(() => {
        return get({url: `login?use=native`})
        .catch(err => Observable.of(a.loginNativeUserFailed(err)))
        .map(a.loginNativeUserFulfilled);
    })


export const loginGoogleUserEpic = (action$) => {
    return action$
    .ofType(a.LOGIN_GOOGLE_USER)
    .do(() => {
        const redirect = getUrlParams(window.location.href)['redirect'];
        window.location = `${login}?use=google&session_id=${localStorage.getItem('sessionId')}${redirect? `&${redirect}`:''}`
    })
    .ignoreElements()
    
}