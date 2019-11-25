const STORAGE_NAME = 'STORAGE_ARTICLE_LIST_KEY';

export default {
        fetch,
        item,
        update
    };

function fetch() {

    let list = window.sessionStorage.getItem(STORAGE_NAME);
    if ( list ) {
        list = JSON.parse(list);
        return list;
    }

}

function item(id) {

    let list = window.sessionStorage.getItem(STORAGE_NAME);
    if ( list ) {
        list = JSON.parse(list);
        return list.reduce( (result, item) => {
                return ( item.id === id ) ? item : result ;
            } , {});
    }

}

function update(list) {

    window.sessionStorage.setItem(STORAGE_NAME, JSON.stringify(list));

}