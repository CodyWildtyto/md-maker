import { combineReducers } from 'redux';
import { DEFAULT_ARTICLES, FETCH_ARTICLE_LIST, FETCH_ARTICLE, NEW_ARTICLE, UPDATE_PREVIEW } from '../actions';

const articles = ( state = [] , action) => {

        switch ( action.type ) {
            case DEFAULT_ARTICLES:
                return [
                        ...state, {
                                id: action.id,
                                subject: action.subject
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
                        subject: action.subject,
                        content: action.content
                    };
            case UPDATE_PREVIEW:
                return {
                        id: action.id,
                        subject: action.subject,
                        content: action.content
                    };
            case NEW_ARTICLE:
                return {
                        id: action.id,
                        subject: action.subject,
                        content: action.content
                    };
            default:
                return state;
        }

    };

export default combineReducers({
        articles,
        article
    });