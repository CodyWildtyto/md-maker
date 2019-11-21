import { combineReducers } from 'redux';
import { DEFAULT_ARTICLES, UPDATE_PREVIEW } from '../actions';

const articles = ( state = [] , action) => {

        switch ( action.type ) {
            case DEFAULT_ARTICLES:
                return [
                        ...state, {
                                id: action.id,
                                name: action.name
                            }
                    ];
            default:
                return state;
        }

    };

const content = ( state = '' , action ) => {

        switch ( action.type ) {
            case UPDATE_PREVIEW:
                return action.text;
            default:
                return state;
        }

    }

export default combineReducers({
        articles,
        content
    });