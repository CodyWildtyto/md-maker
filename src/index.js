import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';
import './style/index.css';
import './style/Nav.css';
import Nav from './containers/Nav';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

const store = createStore(
        reducers,
        applyMiddleware(thunkMiddleware)
    );

ReactDOM.render(
        <Provider store={ store }>
            <Router>
                <Nav />
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    );

serviceWorker.unregister();
