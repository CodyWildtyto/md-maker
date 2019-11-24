import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { fetchArticle } from '../actions';
import '../style/Preview.css';

import { useParams } from 'react-router-dom';

function Preview({ content, article, dispatch }) {

    let { id } = useParams();
    if ( article.id !== id ) dispatch(fetchArticle(id));

    return (
        <div className="app-block app-preview">
                <p>Hello, { article.name }</p>
                <div className="app-block-container">
                    <ReactMarkdown source={ content } />
                </div>
        </div>
    );

}

const contentToProps = state => ({
        article: state.article
    });

export default connect(contentToProps)(Preview);
