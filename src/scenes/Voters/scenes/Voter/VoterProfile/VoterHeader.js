import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from '../../../../../components/common/Image'

const VoterHeader = props => {
  return (
    <div className="row align-items-end">
      <div className="col-lg-3">
        <Image src={props.voter.image} className="voter-profile-image" alt="{props.voter.firstName}'s avatar" />
      </div>
      <div className="col-lg-9 align-self-bottom">
        <div><h2>{props.voter.firstName} {props.lastName}</h2></div>
        <div><h4>{props.voter.company}</h4></div>
      </div>
    </div>
  )
}

export default VoterHeader