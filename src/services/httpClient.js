import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/do'

export const get = (opts) => {
    const {url, headers} = opts;
    const token = localStorage.getItem('token');

    let defaultHeaders = {};
    if(token) {
        defaultHeaders.Authorization= `bearer ${token}`;
    }
    return Observable.ajax({url, headers: Object.assign({}, defaultHeaders, headers)})
    .catch(err => {
        return Observable.empty();
    });
}

export const post = (opts) => {
    const token = localStorage.getItem('token');

    let defaultHeaders = {};
    if(token) {
        defaultHeaders.Authorization= `bearer ${token}`;
    }
    return Observable.ajax(opts.url, Object.assign({}, defaultHeaders, opts.headers));
}