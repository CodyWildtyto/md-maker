import { combineReducers } from 'redux';
import { DEFAULT_ARTICLES, FETCH_ARTICLE_LIST, FETCH_ARTICLE, UPDATE_PREVIEW } from '../actions';

const articles = ( state = [] , action) => {

        switch ( action.type ) {
            case DEFAULT_ARTICLES:
                return [
                        ...state, {
                                id: action.id,
                                name: action.name
                            }
                    ];
            case FETCH_ARTICLE_LIST:
                return action.articles;
            default:
                return state;
        }

    };

const article = ( state = {} , action ) => {

        switch ( action.type ) {
            case FETCH_ARTICLE:
                return {
                        id: action.id,
                        name: action.name
                    };
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
        article,
        content
    });