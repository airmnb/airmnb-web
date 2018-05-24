import { SIGNUP_NATIVE_USER, signupNativeFulfilled, signupNativeFailed, SIGNUP_CHECK_USER, signupCheckUserFulfilled, signupCheckUserFailed } from "./actions";
import { post } from '../../services/httpClient';
import { signup } from '../../linksRel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


export const signupNativeUserEpic = (action$) =>
    action$
    .ofType(SIGNUP_NATIVE_USER)
    .mergeMap(action => {
        const {accountName, password} = action;
        return post({url: signup, body: {accountName, password, from: 'web'}})
        .map(signupNativeFulfilled)
        .catch(err => Observable.of(signupNativeFailed(err)));
    });

export const signupCheckUserEpic = (action$) =>
    action$
    .ofType(SIGNUP_CHECK_USER)
    .pluck('accountName')
    .debounceTime(300)
    .distinctUntilChanged()
    .mergeMap(accountName =>{
        return post({url: signup, body: {accountName, check: true, from: 'web'}})
        .map(signupCheckUserFulfilled)
        .catch(err => Observable.of(signupCheckUserFailed(err)))
    });