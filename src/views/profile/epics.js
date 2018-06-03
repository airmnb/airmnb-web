import { push } from 'react-router-redux';
import { combineEpics } from 'redux-observable';
import { get, put } from '../../services/httpClient'
import { whoami, user } from '../../linksRel';
import {fetchUserfullfilled, fetchUserFailed, FETCH_USER, SAVE_USER, saveUserFulfilled, CANCEL_USER, cancelUser} from './actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

export const fetchUserEpic = (action$, state, deps) => {
    return action$
    .ofType(FETCH_USER)
    .switchMap(() =>{
        return get({url: whoami})
        .map(fetchUserfullfilled)
        .catch(err => Observable.of(fetchUserFailed(err)))
    }
    )
}

const saveUserEpic = (action$, state, deps) => {
    return action$
    .ofType(SAVE_USER)
    .switchMap(({payload}) => {
        console.log('***** payload *****');
        console.log(payload);
        console.log(user);
        const url = user.replace('{userId}', payload.userId);
        console.log(url);
        debugger
        return put({url, body: payload})
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

export const userEpics = combineEpics(
    saveUserEpic,
    cancelUserEpic
)