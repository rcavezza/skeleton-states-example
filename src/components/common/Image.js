import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Image = props => {

  return (
    <img src={props.src} className={props.className} alt={props.alt} width={props.width} height={props.height} />
  )
}

export default Image

     
