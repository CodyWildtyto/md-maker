import React from 'react';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import '../style/App.css';

function App() {
    return (
        <article className="App">
            <Header />
            <Editor />
            <Preview />
        </article>
    );
}

export default App;
