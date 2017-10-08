import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Voter = ({voter}) => {
  return (
    <div className="author-box col-12 col-sm-12 col-lg-6">
      <div className="author-image">
        <img src="https://pbs.twimg.com/profile_images/825530397522010113/SNHD5BvM_bigger.jpg" alt="{voter.firstName}'s avatar" />
      </div>
      <div className="author-content">
        <h1>{voter.firstName} {voter.lastName}</h1>
        <h5>Rookie: {voter.roy}</h5>
        <h5>MVP: {voter.mvp}</h5>
      </div>
    </div>
  );
};

Voter.propTypes = {
  voter: PropTypes.object.isRequired
};

export default Voter;

     
