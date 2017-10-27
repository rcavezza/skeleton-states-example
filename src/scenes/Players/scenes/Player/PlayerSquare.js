import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../../index.css'


const PlayerSquare = ({player}) => {
  return (
    <div className="border border-dark p-4 col-12 col-sm-12 col-lg-6">
      <div className="author-image">
        <img src={player.image} alt="{player.firstName}'s avatar" width="75" height="75" />
      </div>
      <div className="author-content">
        <h1><Link to={`/players/${player.id}`}>{player.firstName} {player.lastName}</Link></h1>
        <h5>Rookie: {player.roy}</h5>
        <h5>MVP: {player.mvp}</h5>
      </div>
    </div>
  )
}

PlayerSquare.propTypes = {
  player: PropTypes.object.isRequired
}

export default PlayerSquare

     
