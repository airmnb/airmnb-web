import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppContainer from './views/appContainer/component';
import './styles'


export const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer />                
        </ThemeProvider>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
