import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { history, configureStore } from './store';
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import Login from './views/login/component';
import Signup from './views/signup/component';
import { injectGlobal } from 'styled-components';
import { Home } from './views/home/component';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppContainer from './views/AppContainer/component';


export const store = configureStore();


ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/home" component={Home} />
                        <Redirect to="/home" />
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
