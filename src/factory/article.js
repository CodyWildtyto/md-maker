import api from './api';

export default {
        list,
        item
    };

function list() {
    return new Promise( resolver => {
             api.fetchArticleList()
                .then( ({ data }) => {
                    resolver(data);
                } );
        } );
}

function item (id) {
    return new Promise( resolver => {
             api.fetchArticle(id)
                .then( ({ data }) => {
                    resolver(data);
                } );
        } );
}