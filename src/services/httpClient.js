import { push } from 'react-router-redux';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'
import { store } from '..';

export const call = ({url, headers, query, body, method = 'GET'}) => {
    const token = localStorage.getItem('token');
    const queryArr = [];
    let queryStr = '';
    let defaultHeaders =  { 'Content-Type': 'application/json' };

    if(query) {
        for(const key in query) {
            if(query[key]) {
                queryArr.push(`${key}=${encodeURIComponent(query[key])}`);
            }
        }
        queryStr = queryArr.join('&');
    }

    if(queryStr) {
        url +=`?${queryStr}`;
    }

    if(token) {
        defaultHeaders.Authorization= `bearer ${token}`;
    }

    return Observable.ajax({url, body, method, headers: Object.assign({}, defaultHeaders, headers)})
    .pluck('response')
    .catch(err => {
        if(err.status === 401) {
            if((!method || method === 'GET') && err.request.url.match(/sys\/whoami/ig)) {
                localStorage.setItem('sessionId', err.response.sessionId);
                localStorage.setItem('token', err.response.sessionToken);
            } else {
                store.dispatch(push('/login'));
            }
        }

        return Observable.throw(err);
    });
}