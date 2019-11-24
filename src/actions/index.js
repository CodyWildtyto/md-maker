import article from '../factory/article';

export const DEFAULT_ARTICLES = 'DEFAULT_ARTICLES';
export const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const UPDATE_PREVIEW = 'UPDATE_PREVIEW';

export const defaultArticles = (id, name) => ({
        type: DEFAULT_ARTICLES,
        id,
        name
    });

export const readArticles = articles => ({
        type: FETCH_ARTICLE_LIST,
        articles
    });

export function readArticle({ id, name }) {

    return {
        type: FETCH_ARTICLE,
        id,
        name
    };

}

export const updatePreview = text => ({
        type: UPDATE_PREVIEW,
        text
    });

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