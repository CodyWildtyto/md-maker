import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import '../style/Preview.css';

function Preview({ article }) {

    return (
        <div className="app-block app-preview">
            <div className="app-block-container">
                <ReactMarkdown source={ article.content } />
            </div>
        </div>
    );

}

const contentToProps = state => ({
        article: state.article
    });

export default connect(contentToProps)(Preview);
