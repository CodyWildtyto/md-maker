export default {
        fetchArticleList,
        fetchArticle,
        setArticle
    };

function fetchArticleList() {
    return new Promise( resolve => resolve({
            stateCode: 200,
            data: DEFAULT_ARTICLES
        }) );
}

function fetchArticle(id) {
    return new Promise( (resolve, reject) => {
            const response = DEFAULT_ARTICLES.reduce( (result, item) => {
                    return ( item.id === id ) ? item : result ;
                }, null);
            if ( response ) resolve({
                    stateCode: 200,
                    data: response
                });
            else reject({
                    stateCode: 404
                });
        } );
}

function setArticle({ id, subject, content }) {
    return new Promise( resolve => {
            const response = DEFAULT_ARTICLES.reduce( (result, item, index) => {
                    if ( item.id === id ) {
                        result = DEFAULT_ARTICLES[index] = { id, subject, content };
                    }
                    return result;
                } , null);
            if ( !response ) {
                DEFAULT_ARTICLES.unshift({ id, subject, content })
            }
            resolve({
                    stateCode: 200,
                    data: { id, subject, content }
                });
        } );
}

const DEFAULT_ARTICLES = [{
        id: '1574655289362',
        subject: 'Aloha',
        content: `## React 1 \nReact is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`
    }, {
        id: '1574655283164',
        subject: 'Bluejay',
        content: `## React 2 \nReact is a JavaScript library for building user interfaces.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
    }, {
        id: '1574655272832',
        subject: 'College',
        content: `## React 3 \nReact is a JavaScript library for building user interfaces.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).`
    }, {
        id: '1574655270492',
        subject: 'Digital',
        content: `## React 4 \nReact is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`
    }, {
        id: '1574655261038',
        subject: 'Eagle',
        content: `## React 5 \nReact is a JavaScript library for building user interfaces.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
    }, {
        id: '1574655260313',
        subject: 'Fortune',
        content: `## React 6 \nReact is a JavaScript library for building user interfaces.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).`
    }, {
        id: '1574655253923',
        subject: 'Goal',
        content: `## React 7 \nReact is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`
    }, {
        id: '1574655248239',
        subject: 'Hugo',
        content: `## React 8 \nReact is a JavaScript library for building user interfaces.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
    }, {
        id: '1574655239231',
        subject: 'Interstellar',
        content: `## React 9 \nReact is a JavaScript library for building user interfaces.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).`
    }];