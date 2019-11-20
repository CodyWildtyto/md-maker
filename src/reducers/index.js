import { combineReducers } from 'redux';

const articles = ( state = [] ) => {

        return [
                ...state, {
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
                    }
            ];

    };

export default combineReducers({
        articles
    });