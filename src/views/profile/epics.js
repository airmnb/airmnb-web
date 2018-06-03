import { get, post } from '../../services/httpClient'
import { getUser, saveUser } from '../../linksRel';
import {fetchUserfullfilled, fetchUserFailed, FETCH_USER, SAVE_USER, saveUserFulfilled} from './actions';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

export const fetchUserEpic = (action$, state, deps) => {
    return action$
    .ofType(FETCH_USER)
    .mergeMap(() =>{
        return get({url: getUser})
        .map(fetchUserfullfilled)
        .catch(err => Observable.of(fetchUserFailed(err)))
    }
    )
}

export const saveUserEpic = (action$, state, deps) => {
    return action$
    .ofType(SAVE_USER)
    .mergeMap(() =>{
        return post({url: saveUser})
        .map(saveUserFulfilled)
        .catch(err => Observable.of(fetchUserFailed(err)))
    }
    )
}