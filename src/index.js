import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style';
import Router from './router';
import store from './store';

ReactDOM.render(
    <Fragment>
        <GlobalStyle />
        <Provider store={store}>
            <Router />
        </Provider>
    </Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
