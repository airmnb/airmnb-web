import { push } from 'react-router-redux';
import {Observable} from 'rxjs/Observable';
import * as a from './actions';
import { post } from '../../services/httpClient';
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
    .switchMap(({accountName, password}) => {
        return post({url: login, body: {
            accountName,
            password,
            session_id: localStorage.getItem('sessionId')
        }})
        .catch(err => Observable.of(a.loginNativeUserFailed(err)))
        .map(a.loginNativeUserFulfilled);
    })

export const loginNativeUserFulfilledEpic = (action$) =>{
    const redirect = getUrlParams(window.location.href)['redirect'] || '/platform/home';
    return action$
    .ofType(a.LOGIN_NATIVE_USER_FULFILLED)
    .map(() => push(redirect))
}

export const loginGoogleUserEpic = (action$) => {
    return action$
    .ofType(a.LOGIN_GOOGLE_USER)
    .do(() => {
        const redirect = getUrlParams(window.location.href)['redirect'];
        window.location = `${login}?use=google&session_id=${localStorage.getItem('sessionId')}${redirect? `&${redirect}`:''}`
    })
    .ignoreElements()
    
}