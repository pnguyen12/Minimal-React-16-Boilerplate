import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import './styles.scss';

const App = () => {
    return (
        <div className="app">
            <Home />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

