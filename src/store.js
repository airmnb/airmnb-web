import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import login from './views/login/reducer';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { loginUserEpic } from './views/login/epics';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

// dependencies
import { ajax } from 'rxjs/add/observable/dom/ajax'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

export const configureStore = (deps = {}) => {
    const rootEpic = combineEpics(
        loginUserEpic
    )
    
    // plugin redux debugging tool
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    // middlewares
    const routerMW = routerMiddleware(history)
    const epicMW = createEpicMiddleware(rootEpic, {
        dependencies: {
            ajax,
            ...deps
        }
    });
    
    const reducers = combineReducers({
        login,
        router: routerReducer
    });

    return createStore(reducers, composeEnhancer(applyMiddleware(epicMW, routerMW)));
};
