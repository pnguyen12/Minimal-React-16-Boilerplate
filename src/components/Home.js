import React from 'react';
import PropTypes from 'prop-types'; 

const Home = ({ title }) => {
    return (
        <div className="home-wrapper">
            <header className="home-header">
                <p className="home-header-text">{title}</p>
            </header>
        </div>
    )
}

Home.propTypes = {
    title: PropTypes.string.isRequired
}

export default Home;