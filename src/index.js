import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import registerServiceWorker from './registerServiceWorker';
import I18n from "redux-i18n";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppContainer from './views/appContainer/component';
import './styles'
import {translations} from './translations';


export const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <I18n translations={translations}>
            <ThemeProvider theme={theme}>
                <AppContainer />
            </ThemeProvider>
        </I18n>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
