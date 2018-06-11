import 'rxjs/add/operator/pluck'
import { SET_LANG } from './actions';
import { setLanguage } from "redux-i18n"

export const setLangEpic = (action$) =>
    action$
    .ofType(SET_LANG)
    .pluck('lang')
    .do(lang => localStorage.setItem('lang', lang))
    .map(setLanguage)
