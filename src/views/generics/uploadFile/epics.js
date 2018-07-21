import { combineEpics } from "redux-observable";
import { UPLOAD_FILE, uploadFileSuccess, uploadFileFailed } from "./actions";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/of'
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';

import { images } from '../../../linksRel';
import { call } from "../../../services/httpClient";

const uploadFileEpic = ($actions) =>
    $actions
    .ofType(UPLOAD_FILE)
    .switchMap(({uuid, file}) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return fromEvent(reader, 'load')
        .switchMap(() =>
            call({
                method: 'POST',
                url: images,
                body: {data: reader.result},
            })
        )
        .map((payload) => uploadFileSuccess(uuid, payload))
        .catch(err => of(uploadFileFailed(uuid, err)))
    })


export default combineEpics(
    uploadFileEpic
)