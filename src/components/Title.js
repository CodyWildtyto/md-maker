import React from 'react';
import { connect } from 'react-redux';
import { updatePreview } from '../actions';
import '../style/Title.css';

let elm;

function Title({ article, dispatch }) {

    if (elm) elm.value = article.subject;
    return (
        <div className="article-title">
            <input type="text"
                    placeholder="Untitled"
                    defaultValue={ article.subject }
                    onChange={ ({ currentTarget }) => {
                            dispatch(updatePreview({
                                    id: article.id,
                                    subject: currentTarget.value,
                                    content: article.content
                                }));
                        } }
                    ref={ ref => elm = ref }
                />
        </div>
    );

}

const contentToProps = state => ({
        article: state.article
    });

export default connect(contentToProps)(Title);
