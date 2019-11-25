import React from 'react';
import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';
import { fetchArticle, newArticle, updatePreview } from '../actions';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/pastel-on-dark.css';
import '../style/Editor.css';
import { useParams } from 'react-router-dom';

function Editor({ article, dispatch }) {

    let { id } = useParams();
    let mirrorInstance;
    if ( id === 'new' ) {
        if ( article.id ) {
            dispatch(newArticle());
            setTimeout( () => refreshMirror(), 0);
        }
    } else if ( article.id !== id ) dispatch(fetchArticle(id))
        .then( response => refreshMirror(response.content) );

    return (
            <div className="app-editor app-block">
                <div className="app-block-container">
                    <CodeMirror
                        value={ article.content }
                        options={ {
                                mode: 'javascript',
                                lineNumbers: true,
                                lineWrapping: true,
                                theme: 'pastel-on-dark',
                            } }
                        onChange={ value => dispatch(updatePreview({
                                id: article.id,
                                subject: article.subject,
                                content: value
                            })) }
                        ref={ ref => {
                                if ( !mirrorInstance && ref ) mirrorInstance = ref.codeMirror;
                            }
                        }
                    />
                </div>
            </div>
        );

    function refreshMirror( content = '' ) {
        if ( mirrorInstance ) mirrorInstance.setValue(content)
    }

}

const contentToProps = state => ({
        article: state.article
    });


Editor.propTypes = {
        article: PropTypes.shape({
                id: PropTypes.string,
                subject: PropTypes.string,
                content: PropTypes.string
            }).isRequired
    };

export default connect(contentToProps)(Editor);