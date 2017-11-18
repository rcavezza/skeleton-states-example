import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Image from '../../../../components/common/Image'
import '../../index.css'


const PlayerSquare = ({player}) => {
  return (
    <div className="col-4 mb-4">
      <div className="row">
        <div className="col-3">
          <span>
            <Image 
              src={player.image} 
              className="each-vote-player-image" 
              alt="{player.firstName}'s avatar" 
              width="75"
              height="75"              
            />
          </span>
        </div>          
        <div className="col-9">
          <p className="d-inline"><Link to={`/players/${player.id}`}>{player.firstName} {player.lastName}</Link></p>
          <p>{player.team}</p>
        </div>
      </div>
    </div>
  )
}

PlayerSquare.propTypes = {
  player: PropTypes.object.isRequired
}

export default PlayerSquare

     
