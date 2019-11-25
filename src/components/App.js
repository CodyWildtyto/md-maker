import React from 'react';
import Title from './Title';
import Editor from './Editor';
import { connect } from 'react-redux';
import Preview from './Preview';
import '../style/App.css';

function App() {
    return (
        <article className="App">
            <Title />
            <Editor />
            <Preview />
        </article>
    );
}

export default connect()(App);
