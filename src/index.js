import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './style/index.css';
import './style/Nav.css';
import Nav from './containers/Nav';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers);

ReactDOM.render(
        <Provider store={ store }>
            <Nav />
            <App />
        </Provider>,
        document.getElementById('root')
    );

serviceWorker.unregister();
