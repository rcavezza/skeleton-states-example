import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aux from 'react-aux'

import OrderedList from '../../../../../components/common/OrderedList'
import VoteCategoryRow from './VoteCategoryRow'

class VoterBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Aux>
        <div className="row">
          <h4>MVP Votes</h4>
        </div>
        <div className="row">
          <VoteCategoryRow votes={this.props.voter.mvpVotes} />
        </div>
      </Aux>
    )
  }
}

export default VoterBody