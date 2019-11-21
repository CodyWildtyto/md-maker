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

const store = createStore(reducers, {
        articles: [{
                id: 'n9oga3ga3',
                name: 'Aloha'
            }, {
                id: 'agn389p34',
                name: 'Bluejay'
            }, {
                id: 'unf8pq34',
                name: 'College'
            }, {
                id: 'pgnv83amg',
                name: 'Digital'
            }, {
                id: 'pan8ugga3',
                name: 'Eagle'
            }, {
                id: 'g9go8anw',
                name: 'Fortune'
            }, {
                id: 'gq34948m',
                name: 'Goal'
            }, {
                id: 'ug8m3g34g4',
                name: 'Hugo'
            }, {
                id: 'g47o9gaweg',
                name: 'Interstellar'
            }]
    });

ReactDOM.render(
        <Provider store={ store }>
            <Nav />
            <App />
        </Provider>,
        document.getElementById('root')
    );

serviceWorker.unregister();
