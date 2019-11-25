import React from 'react';
import { connect } from 'react-redux';
import { updatePreview } from '../actions';
import '../style/Title.css';

function Title({ article, dispatch }) {

    return (
        <div className="article-title">
            <input type="text"
                    placeholder="Untitled"
                    defaultValue={ article.subject }
                    onChange={ value => {
                            dispatch(updatePreview({
                                    id: article.id,
                                    subject: value,
                                    content: article.content
                                }));
                        } }
                />
        </div>
    );

}

const contentToProps = state => ({
        article: state.article
    });

export default connect(contentToProps)(Title);
