import React from 'react'
import Aux from 'react-aux'

import VoteCategoryRow from './VoteCategoryRow'
import EachVoteSkeleton from './EachVoteSkeleton'

const voterCategoryRow = (props) => {
  if(props.loading) {
      return (
        <Aux>
          {[1,2,3,4,5].map(rank =>
            <EachVoteSkeleton rank={rank} key={rank} />
          )}
        </Aux>
      )
    } else {
      return <VoteCategoryRow votes={props.voter.mvpVotes} />
    }
}

const VoterBody = (props) => {
  return (
    <Aux>
      <div className="row">
        <div className="col-12 mt-2">
          <h4>MVP Votes</h4>
        </div>
      </div>
      <div className="row">
        {voterCategoryRow(props)}
      </div>
    </Aux>
  )
}

export default VoterBody