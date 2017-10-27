import React, { Component } from 'react'
import '../../index.css'

const VoterLoading = () => {
  return (
    <div className="media col-4 border border-dark p-4">
      <div className='img-placeholder mr-3' style={{width: "75px", height: "75px"}}></div>
      <div className="media-body">
        <h5 className="skeleton-text large half-width"></h5>
        <div className="skeleton-text medium three-quarters-width"></div>
        <div className="skeleton-text medium three-quarters-width"></div>
      </div>
    </div>
  )
}

export default VoterLoading
