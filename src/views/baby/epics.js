import { combineEpics } from "redux-observable";
import { BABY_SAVE, saveBabyFulfilled, saveBabyFailed } from "./actions";
import { post } from "../../services/httpClient";
import { babies } from "../../linksRel";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const saveBabyEpic = (action$) =>
    action$
    .ofType(BABY_SAVE)
    .pluck('payload')
    .switchMap((payload) =>{
        debugger
        return post({url: babies, body: payload})
        .map(saveBabyFulfilled)
        .catch((err) => of(saveBabyFailed(err)))
    })

export default combineEpics(saveBabyEpic);