import React from 'react';
import '../style/Header.css';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Header() {

    return (
        <header>
            <h1>
                <strong>MD:</strong>Maker
            </h1>
            <nav>
                <Link to={ () => `/${ +new Date() }` }>NEW</Link>
                <Switch>
                    <Route exact path={ [`/:id`, `/new`] }>
                        <Link to={ `/` }>HOME</Link>
                    </Route>
                </Switch>
            </nav>
        </header>
    );

}

export default Header;
