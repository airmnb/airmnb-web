import { getUser } from "../../linksRel";
import { authSuccess, authFail, AUTH_CHECK } from "./actions";
import { get } from "../../services/httpClient";
import {Observable} from 'rxjs/Observable';

export const authCheckEpic = (action$) => {
    return action$
    .ofType(AUTH_CHECK)
    .mergeMap(() =>{
        return get({url: getUser})
        .map(authSuccess)
        .catch(err => Observable.of(authFail(err)))
    });
}