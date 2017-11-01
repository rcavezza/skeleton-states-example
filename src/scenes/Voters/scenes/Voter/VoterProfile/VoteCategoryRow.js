import React from 'react'
import Aux from 'react-aux'

import EachVote from './EachVote'

const VoteCategoryRow = (props) => {
  return (
    <Aux>
      {props.votes.map( (player, index) =>
        <EachVote playerId={player} rank={index+1} key={index} />
      )}
    </Aux>
  ) 
}

export default VoteCategoryRow