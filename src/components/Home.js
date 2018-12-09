import React from 'react';
import PropTypes from 'prop-types';
import Button from './atoms/Button'; 

const Home = ({ title }) => {
    return (
        <div className="home-wrapper">
            <header className="home-header">
                <p className="home-header-text">{title}</p>
                <Button text="Get Started" className="btn btn-main" />
            </header>
        </div>
    )
}

Home.propTypes = {
    title: PropTypes.string.isRequired
}

export default Home;