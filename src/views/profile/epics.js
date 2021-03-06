import { push } from 'react-router-redux';
import { combineEpics } from 'redux-observable';
import { call } from '../../services/httpClient'
import { whoami, user } from '../../linksRel';
import {fetchUserfullfilled, fetchUserFailed, FETCH_USER, SAVE_USER, saveUserFulfilled, CANCEL_USER} from './actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const fetchUserEpic = (action$, state, deps) => {
    return action$
    .ofType(FETCH_USER)
    .switchMap(() =>
        call({url: whoami})
        .map(fetchUserfullfilled)
        .catch(err => Observable.of(fetchUserFailed(err)))
    )
}

const saveUserEpic = (action$, state, deps) => {
    return action$
    .ofType(SAVE_USER)
    .switchMap(({payload}) => {
        const url = user.replace('{userId}', payload.userId);
        return call({url, body: payload, method: 'PUT'})
        .map(saveUserFulfilled)
        .catch(err => Observable.of(fetchUserFailed(err)))
    }
    )
}

const cancelUserEpic = (action$) => {
    return action$
    .ofType(CANCEL_USER)
    .mapTo('/platform/home')
    .map(push)
}

export default combineEpics(
    fetchUserEpic,
    saveUserEpic,
    cancelUserEpic
)