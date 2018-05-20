import { getUser } from "../../linksRel";
import { authSuccess, authFail, AUTH_CHECK } from "./actions";
import { push } from 'react-router-redux'
import { get } from "../../services/httpClient";
import {Observable} from 'rxjs/Observable';
import config from '../../config';

export const authCheckEpic = (action$, store) => {

    return action$
    .ofType(AUTH_CHECK)
    .mergeMap(() =>{
        const pathname = window.location.pathname;
        return get({url: getUser})
        .map(res => {
            if (config.publicUrls.includes(pathname)) {
                return push('/home');
            } else {
                return authSuccess(res);
            }
        })
        .catch(err => {
            if (!config.publicUrls.includes(pathname)) {
                store.dispatch(push('/login'));
            }
            return Observable.of(authFail(err))
        });
    });
}