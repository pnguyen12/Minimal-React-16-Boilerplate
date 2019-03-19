import React from 'react';
import PropTypes from 'prop-types';
import Button from './atoms/Button';

const Home = ({ title, sub }) => (
  <div className="home-wrapper">
    <header className="home-header">
      <p className="home-header-text">{title}</p>
      <p className="home-header-sub">{sub}</p>
      <Button text="Get Started" className="btn btn-white btn-animate" />
    </header>
  </div>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
