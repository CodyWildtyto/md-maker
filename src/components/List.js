import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { fetchArticleList } from '../actions';
import '../style/List.css';

import { Link } from 'react-router-dom';

const List = ({ articles, dispatch }) => {

        dispatch(fetchArticleList())
        return (
                <ul className="list">
                    {
                        articles.map( ({ id, subject, content }) => {
                                return (
                                    <li key={ id }>
                                        <Link to={ `/${ id }` }>
                                            <h2>{ subject }</h2>
                                            <div>
                                                <ReactMarkdown source={ content } disallowedTypes={ ['link', 'linkReference'] }/>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            } )
                    }
                </ul>
            );

    };

List.propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                subject: PropTypes.string.isRequired
            }).isRequired).isRequired
    };

export default List;