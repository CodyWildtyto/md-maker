export const DEFAULT_ARTICLES = 'DEFAULT_ARTICLES';
export const UPDATE_PREVIEW = 'UPDATE_PREVIEW';

export const defaultArticles = (id, name) => ({
        type: DEFAULT_ARTICLES,
        id,
        name
    });

export const updatePreview = text => ({
        type: UPDATE_PREVIEW,
        text
    });