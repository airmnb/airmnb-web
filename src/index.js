import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { history, configureStore } from './store';
import { ConnectedRouter, push } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import Login from './views/login/component';
import { injectGlobal } from 'styled-components';
import PrivateRoute from './views/authentication/privateRoute';
import { Home } from './views/home/component';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';


export const store = configureStore();
store.dispatch(push('/login'))


ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={Home} />
                </Switch>
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();

injectGlobal`
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`
