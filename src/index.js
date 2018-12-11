import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import './static/styles/base.scss';

const title = 'Minimal React Boilerplate'

const App = () => {
    return (
        <div className="app">
            <Home title={title}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

