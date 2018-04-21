import {combineReducers, createStore, applyMiddleware} from 'redux';
import login from './views/login/reducer';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {loginUserEpic} from './views/login/epics';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

const rootEpic = combineEpics(
    loginUserEpic
)

// middlewares
const routerMW = routerMiddleware(history)
const epicMW = createEpicMiddleware(rootEpic);

const reducers = combineReducers({
    login,
    router: routerReducer
})

export default createStore(reducers,applyMiddleware(epicMW, routerMW));