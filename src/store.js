import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { i18nState } from "redux-i18n"

// dependencies
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'

// reducers
import loginReducer from './views/login/reducer';
import authReducer from './views/authentication/reducer';
import userReducer from './views/profile/reducer';
import signupReducer from './views/signup/reducer';
import fileReducer from './views/generics/uploadFile/reducer';
import babiesReducer from './views/baby/reducer';

// epics
import appEpics from './views/appContainer/epics';
import authEpics from './views/authentication/epics';
import loginEpics from './views/login/epics';
import signupEpics from './views/signup/epcis';
import userEpics from './views/profile/epics';
import babyEpics from './views/baby/epics';
import uploadFileEpic from './views/generics/uploadFile/epics';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

export const configureStore = (deps = {}) => {
    const rootEpic = combineEpics(
        loginEpics,
        userEpics,
        authEpics,
        signupEpics,
        appEpics,
        babyEpics,
        uploadFileEpic,
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
        babies: babiesReducer,
        files: fileReducer,
        i18nState
    });

    return createStore(reducers, composeEnhancer(applyMiddleware(epicMW, routerMW)));
};
