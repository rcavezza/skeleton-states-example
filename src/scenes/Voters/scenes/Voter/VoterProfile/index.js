import React, { Component } from 'react'
import axios from 'axios'
import Aux from 'react-aux'

import VoterHeader from './VoterHeader.js'
import VoterBody from './VoterBody.js'

class VoterProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      voterId: props.match.params.id,
      loading: true,
      voter: { mvpVotes: [] }
    }
  }

  findVoter = (voter) => {
    return voter.id === this.state.voterId
  }

  componentDidMount() {
    axios.get(`../voters.json`)
      .then(res => {
        const voters = res.data

        setTimeout(() => {
          this.setState({ loading: false, voter: voters.find(this.findVoter) })
        }, 3000)
      })
  }

  render() {
    return (
      <Aux>
        <VoterHeader voter={this.state.voter} loading={this.state.loading} />
        <VoterBody voter={this.state.voter} loading={this.state.loading} />
      </Aux>
    )
  }
}

export default VoterProfile
     
