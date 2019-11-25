import article from '../factory/article';

export const DEFAULT_ARTICLES = 'DEFAULT_ARTICLES';
export const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const NEW_ARTICLE = 'NEW_ARTICLE';
export const UPDATE_PREVIEW = 'UPDATE_PREVIEW';

export const defaultArticles = (id, subject) => ({
        type: DEFAULT_ARTICLES,
        id,
        subject
    });

export const readArticles = articles => ({
        type: FETCH_ARTICLE_LIST,
        articles
    });

export function readArticle({ id, subject, content }) {

    return {
        type: FETCH_ARTICLE,
        id,
        subject,
        content
    };

}

export function newArticle() {

    return {
        type: NEW_ARTICLE,
        id: '',
        subject: '',
        content: ''
    };

}

export const updatePreview = ({ id, subject, content }) => {

    article.set({ id, subject, content });
    return {
        type: UPDATE_PREVIEW,
        id,
        subject,
        content
    };

}

export function fetchArticleList() {

    return function(dispatch) {

        return article.list()
            .then( response => dispatch(readArticles(response)) );

    }

}

export function fetchArticle(id) {

    return function(dispatch) {

        return article.item(id)
            .then( response => dispatch(readArticle(response)) );

    }

}