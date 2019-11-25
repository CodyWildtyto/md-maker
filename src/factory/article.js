import api from './api';

export default {
        list,
        item,
        set
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
    return new Promise( (resolver, reject) => {
             api.fetchArticle(id)
                .then( ({ data }) => {
                    resolver(data);
                } )
                .catch( () => reject() );
        } );
}

function set ({ id, subject, content}) {
    return;
}