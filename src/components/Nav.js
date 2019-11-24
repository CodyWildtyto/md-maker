import React from 'react';
import PropTypes from 'prop-types';
import { fetchArticleList } from '../actions';

import {
    Link
} from 'react-router-dom';

const Nav = ({ articles, dispatch }) => {

        dispatch(fetchArticleList())
        return (
                <nav>
                    <div className="nav-header">
                        <h1>MD:Maker</h1>
                    </div>
                    <ul>
                        {
                            articles.map( ({ id, name }) => (
                                    <li key={ id }>
                                        <Link to={ `/${ id }` }>
                                            { name }
                                        </Link>
                                    </li>
                                ) )
                        }
                    </ul>
                </nav>
            );

    };

Nav.propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired).isRequired
    };

export default Nav;