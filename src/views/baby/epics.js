import { combineEpics } from "redux-observable";
import { push } from 'react-router-redux';
import * as a from "./actions";
import { call } from "../../services/httpClient";
import { babies } from "../../linksRel";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const fetchBabiesEpic = (action$) =>
    action$
    .ofType(a.BABIES_FETCH)
    .pluck('payload')
    .switchMap((payload) =>{
        return call({url: babies, method: 'GET', body: payload})
        .map(a.fetchBabiesFulfilled)
        .catch((err) => of(a.fetchBabiesFailed(err)))
    })

const fetchBabyEpic = (action$) =>
    action$
    .ofType(a.BABY_FETCH)
    .pluck('babyId')
    .switchMap((babyId) =>{
        return call({url: `${babies}/${babyId}`, method: 'GET'})
        .map(a.fetchBabyFulfilled)
        .catch((err) => of(a.fetchBabyFailed(err)))
    })


const saveBabyEpic = (action$) =>
    action$
    .ofType(a.BABY_SAVE)
    .pluck('payload')
    .switchMap((payload) =>{
        const { babyId } = payload;
        const url = babyId? `${babies}/${payload.babyId}` : `${babies}`
        return call({url, method: payload.babyId? 'PUT':'POST', body: payload})
        .map(a.saveBabyFulfilled)
        .catch((err) => of(a.saveBabyFailed(err)))
    })

const deleteBabyEpic = (action$) =>
    action$
    .ofType(a.BABY_DELETE)
    .pluck('babyId')
    .switchMap((babyId) =>
        call({url: `${babies}/${babyId}`, method: 'DELETE'})
        .map(a.saveBabyFulfilled)
        .catch((err) => of(a.saveBabyFailed(err)))
    )

const editBabyEpic = (action$) =>
    action$
    .ofType(a.BABY_EDIT)
    .pluck('payload')
    .switchMap((payload) =>
        call({url: babies, method: 'PUT', body: payload})
        .map(a.editBabyFulfilled)
        .catch((err) => of(a.editBabyFailed(err)))
    )

export default combineEpics(fetchBabiesEpic, saveBabyEpic, deleteBabyEpic, editBabyEpic, fetchBabyEpic);