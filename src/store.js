import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import loginReducer from './views/login/reducer';
import authReducer from './views/authentication/reducer';
import userReducer from './views/profile/reducer';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { setLangEpic } from './views/appContainer/epics';
import { loginNativeUserEpic, loginNativeUserFulfilledEpic, loginGoogleUserEpic } from './views/login/epics';
import { userEpics } from './views/profile/epics';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import signupReducer from './views/signup/reducer';
import { i18nState } from "redux-i18n"

// dependencies
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'
import { authCheckEpic } from './views/authentication/epics';
import { signupNativeUserEpic, signupNativeUserFulfilledEpic, signupCheckUserEpic } from './views/signup/epcis';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

export const configureStore = (deps = {}) => {
    const rootEpic = combineEpics(
        loginNativeUserEpic,
        loginNativeUserFulfilledEpic,
        loginGoogleUserEpic,
        userEpics,
        authCheckEpic,
        signupNativeUserEpic,
        signupNativeUserFulfilledEpic,
        signupCheckUserEpic,
        setLangEpic
    )

    // plugin redux debugging tool
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // middlewares
    const routerMW = routerMiddleware(history)
    const epicMW = createEpicMiddleware(rootEpic, {
        dependencies: {
            ajax: Observable.ajax,
            ...deps
        }
    });

    const reducers = combineReducers({
        auth: authReducer,
        router: routerReducer,
        login: loginReducer,
        user: userReducer,
        signup: signupReducer,
        i18nState
    });

    return createStore(reducers, composeEnhancer(applyMiddleware(epicMW, routerMW)));
};
