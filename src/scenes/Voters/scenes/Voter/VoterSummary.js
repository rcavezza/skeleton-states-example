import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../../index.css'


const VoterSummary = ({voter}) => {
  return (
    <div className="media col-4 border border-dark p-4">
      <img className="mr-3" src={voter.image} alt="{voter.firstName}'s avatar" width="75" height="75" />
      <div className="media-body">
        <h5 className="mt-0"><Link to={`/voters/${voter.id}`}>{voter.firstName} {voter.lastName}</Link></h5>
        <div>Rookie: {voter.roy} </div>
        <div>MVP: {voter.mvp} </div>
      </div>
    </div>
  )
}

VoterSummary.propTypes = {
  voter: PropTypes.object.isRequired
}

export default VoterSummary

     
