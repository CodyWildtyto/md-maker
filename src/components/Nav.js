import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ articles }) => {

        return (
                <nav>
                    <div className="nav-header">
                        <h1>MD:Maker</h1>
                    </div>
                    <ul>
                        {
                            articles.map( ({ id, name }) => (
                                    <li key={ id }>
                                        <a href={ `#/${ id }` }>
                                            { name }
                                        </a>
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