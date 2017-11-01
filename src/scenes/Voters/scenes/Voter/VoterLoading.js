import React from 'react'
import '../../index.css'

const VoterLoading = () => {
  return (
    <div className="media col-4 border border-dark p-4">
      <div className='img-placeholder mr-3' style={{width: "75px", height: "75px"}}></div>
      <div className="media-body">
        <div className="skeleton-text large half-width"></div>
        <div className="skeleton-text medium three-quarters-width"></div>
        <div className="skeleton-text medium three-quarters-width"></div>
      </div>
    </div>
  )
}

export default VoterLoading
