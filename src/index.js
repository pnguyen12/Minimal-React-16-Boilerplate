import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import './static/styles/base.scss';

const title = 'React Boilerplate'
const sub = 'Start building';

const App = () => {
    return (
        <div className="app">
            <Home title={title} sub={sub}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

