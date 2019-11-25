import api from './api';
import storage from './storage';

let tmpList;
let tmpItem;

export default {
        list,
        item,
        set
    };

function list(isForce) {
    return new Promise( resolver => {
            let list;
            if ( !isForce ) {
                if ( tmpList ) return resolver(tmpList);
                tmpList = list = storage.fetch();
            }
            if ( list ) resolver(list);
            else api.fetchArticleList()
                .then( ({ data }) => {
                    tmpList = list;
                    resolver(data);
                    storage.update(data);
                } );
        } );
}

function item (id) {
    return new Promise( resolver => {
            if ( tmpItem && tmpItem.id === id ) return tmpItem;
            const item = storage.item(id);
            if ( item && item.id ) {
                resolver(item);
                tmpItem = item;
            } else api.fetchArticle(id)
                .then( ({ data }) => {
                    tmpItem = data;
                    resolver(data);
                } )
                .catch( () => {
                    resolver({
                            id,
                            subject: '',
                            content: ''
                        });
                } );
        } );
}

function set({ id, subject, content}) {
    return new Promise( (resolver, reject) => {
             api.setArticle({ id, subject, content})
                .then( ({ data }) => {
                    resolver(data);
                    list(true);
                } )
                .catch( () => reject() );
        } );
}