import { get } from '../../services/httpClient'
import {getUser} from '../../linksRel';
import {fetchUserfullfilled, fetchUserFailed, FETCH_USER} from './actions';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';

export const fetchUserEpic = (action$, state, deps) => {
    return action$
    .ofType(FETCH_USER)
    .mergeMap(() =>{
        return get({url: getUser})
        .map(fetchUserfullfilled)
        .catch(() => Observable.of(fetchUserFailed()))
    }
    )
}