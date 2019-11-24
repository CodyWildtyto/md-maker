import React from 'react';
import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import { updatePreview } from '../actions';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/pastel-on-dark.css';
import '../style/Editor.css';

function Editor(state) {
    return (
            <div className="app-editor app-block">
                <div className="app-block-container">
                    <CodeMirror
                        value={ state.content }
                        options={ {
                            mode: 'javascript',
                            lineNumbers: true,
                            theme: 'pastel-on-dark',
                        } }
                        onChange={ value => state.dispatch(updatePreview(value)) }
                    />
                </div>
            </div>
        );

}

const contentToProps = state => ({
        content: state.content
    });

export default connect(contentToProps)(Editor);