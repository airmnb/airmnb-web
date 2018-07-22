import { push } from 'react-router-redux';
import {Observable} from 'rxjs/Observable';
import * as a from './actions';
import { authSuccess } from '../authentication/actions'
import { call } from '../../services/httpClient';
import { login } from '../../linksRel';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/ignoreElements'
import 'rxjs/add/operator/startWith';
import { getUrlParams } from '../../services/routerService';
import { combineEpics } from 'redux-observable';

const loginNativeUserEpic = (action$, store, deps) =>
    action$
    .ofType(a.LOGIN_NATIVE_USER)
    .switchMap(({payload}) => {
        const { accountName, password } = payload;
        return call({url: `${login}?session_id=${localStorage.getItem('sessionId')}`, method: 'POST', body: {
            accountName,
            password,
            session_id: localStorage.getItem('sessionId')
        }})
        .catch(err => Observable.of(a.loginNativeUserFailed(err)))
        .map(a.loginNativeUserFulfilled);
    })

const loginNativeUserFulfilledEpic = (action$) =>{
    return action$
    .ofType(a.LOGIN_NATIVE_USER_FULFILLED)
    .switchMap(({payload}) => {
        const redirect = getUrlParams(window.location.href)['r'] || '/platform/home';
        return of(authSuccess(payload),push(redirect))
    })
}

const loginGoogleUserEpic = (action$) => {
    return action$
    .ofType(a.LOGIN_GOOGLE_USER)
    .do(() => {
        const redirect = getUrlParams(window.location.href)['r'];
        window.location = `${login}?use=google&session_id=${localStorage.getItem('sessionId')}${redirect? `&r=${encodeURI(redirect)}`:''}`
    })
    .ignoreElements()

}

export default combineEpics(
    loginNativeUserEpic,
    loginNativeUserFulfilledEpic,
    loginGoogleUserEpic
);