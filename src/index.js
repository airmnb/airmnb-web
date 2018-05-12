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
import AppContainer from './views/AppContainer/component';


export const store = configureStore();
store.dispatch(push('/login'))


ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path="/home" component={Home} />
                    </Switch>
                </ConnectedRouter>
            </AppContainer>
        </ThemeProvider>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();

injectGlobal`
    body {
        margin: 0;
        font-family: 'system-ui', serif;
        color: #000;
    }
    .align-center{
        text-align: center;
    }
`
