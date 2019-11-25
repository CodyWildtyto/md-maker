import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';
import './style/index.css';
import Header from './components/Header';
import List from './containers/List';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const store = createStore(
        reducers,
        applyMiddleware(thunkMiddleware)
    );

ReactDOM.render(
        <Provider store={ store }>
            <Router>
                <Header />
                <Switch>
                    <Route exact path={ `/` }>
                        <List />
                    </Route>
                    <Route exact path={ [`/:id`, `/new`] }>
                        <App />
                    </Route>
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('root')
    );

serviceWorker.unregister();
