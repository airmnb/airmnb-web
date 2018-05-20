import { push } from 'react-router-redux';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'
import { store } from '../index';

export const get = (opts) => {
    const {headers, query} = opts;
    const token = localStorage.getItem('token');
    let {url} = opts;
    const queryArr = [];
    let queryStr = '';

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

    let defaultHeaders = {};
    if(token) {
        defaultHeaders.Authorization= `bearer ${token}`;
    }
    return Observable.ajax({url, method: 'get', headers: Object.assign({}, defaultHeaders, headers)})
    .catch(err => {
        if(err.status === 401) {
            if(err.request.url.match(/sys\/whoami/ig)) {
                localStorage.setItem('sessionId', err.response.sessionId);
                localStorage.setItem('token', err.response.sessionToken);
            } else {
                store.dispatch(push('/login'));
            }
        }

        return Observable.throw(err);
    });
}

export const post = (opts) => {
    const {url, body} = opts;
    const token = localStorage.getItem('token');

    let defaultHeaders = {};
    if(token) {
        defaultHeaders.Authorization= `bearer ${token}`;
    }
    return Observable.ajax({url, body, method: 'post', headers: Object.assign({}, defaultHeaders, opts.headers)});
}