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

const DEFAULT_ARTICLES = [{
        id: 'n9oga3ga3',
        subject: 'Aloha',
        content: `## React 1 \nReact is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`
    }, {
        id: 'agn389p34',
        subject: 'Bluejay',
        content: `## React 2 \nReact is a JavaScript library for building user interfaces.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
    }, {
        id: 'unf8pq34',
        subject: 'College',
        content: `## React 3 \nReact is a JavaScript library for building user interfaces.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).`
    }, {
        id: 'pgnv83amg',
        subject: 'Digital',
        content: `## React 4 \nReact is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`
    }, {
        id: 'pan8ugga3',
        subject: 'Eagle',
        content: `## React 5 \nReact is a JavaScript library for building user interfaces.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
    }, {
        id: 'g9go8anw',
        subject: 'Fortune',
        content: `## React 6 \nReact is a JavaScript library for building user interfaces.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).`
    }, {
        id: 'gq34948m',
        subject: 'Goal',
        content: `## React 7 \nReact is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`
    }, {
        id: 'ug8m3g34g4',
        subject: 'Hugo',
        content: `## React 8 \nReact is a JavaScript library for building user interfaces.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
    }, {
        id: 'g47o9gaweg',
        subject: 'Interstellar',
        content: `## React 9 \nReact is a JavaScript library for building user interfaces.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).`
    }];