import React, { Component } from 'react'
import './index.css'
import VoterLoading from './scenes/Voter/VoterLoading.js'
import Aux from 'react-aux'

class VotersLoading extends Component {
  render() {
    return (
      <Aux>
        <VoterLoading />
        <VoterLoading />
        <VoterLoading />
      </Aux> 
    )
  }
}

export default VotersLoading
