const DEFAULT_ARTICLES = [{
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
    }];

export default {
        fetchArticleList,
        fetchArticle
    };

function fetchArticleList() {
    return new Promise( resolve => resolve({
            stateCode: 200,
            data: DEFAULT_ARTICLES
        }) );
}

function fetchArticle(id) {
    return new Promise( resolve => {
            const response = DEFAULT_ARTICLES.reduce( (result, item) => {
                    return ( item.id === id ) ? item : result ;
                });
            resolve({
                stateCode: response ? 200 : 404 ,
                data: response
            })
        } );
}