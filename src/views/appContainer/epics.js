import 'rxjs/add/operator/pluck'
import { SET_LANG } from './actions';
import { setLanguage } from "redux-i18n"
import { combineEpics } from 'redux-observable';

const setLangEpic = (action$) =>
    action$
    .ofType(SET_LANG)
    .pluck('lang')
    .do(lang => localStorage.setItem('lang', lang))
    .map(setLanguage)

export default combineEpics(
    setLangEpic
);