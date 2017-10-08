import React, { Component } from 'react';
import '../Voter/index.css';
import VoterLoading from '../Voter/loading.js';

class VotersLoading extends Component {
  render() {
    return (
      [
        <VoterLoading />
        ,<VoterLoading />
        ,<VoterLoading />
        ,<VoterLoading />
      ]
    );
  }
};

export default VotersLoading;
