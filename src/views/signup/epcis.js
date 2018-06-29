import { push } from 'react-router-redux';
import * as a from "./actions";
import { post } from '../../services/httpClient';
import { signup } from '../../linksRel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { combineEpics } from 'redux-observable';


const signupNativeUserEpic = (action$) =>
    action$
    .ofType(a.SIGNUP_NATIVE_USER)
    .mergeMap(action => {
        const {accountName, password} = action.payload;
        return post({url: signup, body: {accountName, password, from: 'web'}})
        .map(a.signupNativeFulfilled)
        .catch(err => Observable.of(a.signupNativeFailed(err)));
    });

const signupNativeUserFulfilledEpic = (action$) =>
    action$
    .ofType(a.SIGNUP_NATIVE_USER_FULFILLED)
    .map(() => push('/login'))

const signupCheckUserEpic = (action$) =>
    action$
    .ofType(a.SIGNUP_CHECK_USER)
    .pluck('accountName')
    .debounceTime(300)
    .distinctUntilChanged()
    .mergeMap(accountName =>{
        return post({url: signup, body: {accountName, check: true, from: 'web'}})
        .map(a.signupCheckUserFulfilled)
        .catch(err => Observable.of(a.signupCheckUserFailed(err.response)));
    });

export default combineEpics(
    signupNativeUserEpic,
    signupNativeUserFulfilledEpic,
    signupCheckUserEpic
)