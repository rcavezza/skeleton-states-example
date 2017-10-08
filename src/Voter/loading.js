import React, { Component } from 'react';
import '../Voter/index.css';

class VoterLoading extends Component {
  render() {
    return (
      <div className="author-box col-12 col-sm-12 col-lg-6 waiting-on-data">
        <div className="author-image">
          <div className='img-placeholder'></div>
        </div>
        <div className="author-content">
          <h1 className="with-preview"></h1>
          <p className="with-preview"></p>
          <p className="with-preview"></p>
        </div>
      </div>
    );
  }
};

export default VoterLoading;
