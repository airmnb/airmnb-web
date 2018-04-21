import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import store, {history} from './store';
import { ConnectedRouter, push } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import Login from './views/login/component';


store.dispatch(push('/login'))


ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/login" component={Login} />
            </div>
        </ConnectedRouter>
    </Provider>
    ), document.getElementById('root'));
registerServiceWorker();
