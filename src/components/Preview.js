import React from 'react';
import { connect } from 'react-redux';

function Preview({ content }) {
    return (
        <div className="app-block app-preview">
            <div className="app-block-container">
                { content }
            </div>
        </div>
    );
}

const contentToProps = ({ content }) => ({
        content
    });

export default connect(contentToProps)(Preview);
