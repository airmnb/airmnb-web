import { whoami } from "../../linksRel";
import { authSuccess, authFail, AUTH_CHECK } from "./actions";
import { get } from "../../services/httpClient";
import {Observable} from 'rxjs/Observable';

export const authCheckEpic = (action$, store) => {

    return action$
    .ofType(AUTH_CHECK)
    .mergeMap(() =>
        get({url: whoami})
        .map(res => {
            return authSuccess(res);
        })
        .catch(err => {
            return Observable.of(authFail(err))
        })
    );
}