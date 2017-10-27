import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Aux from 'react-aux'

import Image from '../../../../../components/common/Image'
import OrderedList from '../../../../../components/common/OrderedList'
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
        }, 2000)
      })
  }

  render() {
    if (this.state.loading) return <div />;
    return (
      <Aux>
        <VoterHeader voter={this.state.voter} />
        <VoterBody voter={this.state.voter}  />
      </Aux>
    )
  }
}

export default VoterProfile
     
