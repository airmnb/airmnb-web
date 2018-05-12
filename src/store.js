import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import loginReducer from './views/login/reducer';
import authReducer from './views/authentication/reducer';
import userReducer from './views/user/reducer';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { loginNativeUserEpic, loginGoogleUserEpic } from './views/login/epics';
import { fetchUserEpic } from './views/user/epics';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

// dependencies
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'
import { authCheckEpic } from './views/authentication/epics';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

export const configureStore = (deps = {}) => {
    const rootEpic = combineEpics(
        loginNativeUserEpic,
        loginGoogleUserEpic,
        fetchUserEpic,
        authCheckEpic
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
        user: userReducer
    });

    return createStore(reducers, composeEnhancer(applyMiddleware(epicMW, routerMW)));
};
