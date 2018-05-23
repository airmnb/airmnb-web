import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppContainer from './views/appContainer/component';


export const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer />                
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
