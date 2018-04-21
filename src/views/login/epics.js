import {Observable} from 'rxjs/Observable';
import {LOGIN_USER, loginUserFailed, loginUserFulfilled} from './actions';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

export const loginUserEpic = (action$) =>
    action$
    .ofType(LOGIN_USER)
    .switchMap(() => {
        debugger
        return Observable.ajax.getJSON('https://virtserver.swaggerhub.com/airmnb/api/1.0.0/stat')
        .catch(err => {return Observable.of(loginUserFailed(err))})
        .map(loginUserFulfilled);
    })