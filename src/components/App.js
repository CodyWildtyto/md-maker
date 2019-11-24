import React from 'react';
import Header from './Header';
import Editor from './Editor';
import { connect } from 'react-redux';
import Preview from './Preview';
import '../style/App.css';

import {
    Switch,
    Route
} from 'react-router-dom';

function App() {
    return (
        <article className="App">
            <Header />
            <Editor />
            <Switch>
                <Route exact path={ `/:id` }>
                    <Preview />
                </Route>
            </Switch>
        </article>
    );
}

export default connect()(App);
