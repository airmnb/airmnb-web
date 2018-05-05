import {Observable} from 'rxjs/Observable';
import {LOGIN_USER, loginUserFailed, loginUserFulfilled} from './actions';
import {get} from '../../services/httpClient';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

export const loginUserEpic = (action$, store, deps) => {
    return action$
    .ofType(LOGIN_USER)
    .switchMap(() => {
        return get({url:'https://virtserver.swaggerhub.com/airmnb/api/1.0.0/stat'})
        .catch(err => {return Observable.of(loginUserFailed(err))})
        .map(loginUserFulfilled);
    })}