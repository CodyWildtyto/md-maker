import React from 'react';
import '../style/App.css';

function App() {
    return (
        <article className="App">
            <div className="app-block app-editor">
                <div className="app-block-container">
                    <textarea>
                    </textarea>
                </div>
            </div>
            <div className="app-block app-preview">
                <div className="app-block-container">
                </div>
            </div>
        </article>
    );
}

export default App;
