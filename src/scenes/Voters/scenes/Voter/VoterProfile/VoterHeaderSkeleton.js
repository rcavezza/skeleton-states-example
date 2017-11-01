import React from 'react'

const VoterHeader = props => {
  return (
    <div className="row align-items-end">
      <div className="col-lg-3">
        <div className='img-placeholder' style={{width: "225px", height: "225px"}}></div>
      </div>
      <div className="col-lg-9 align-self-bottom">
        <div className="skeleton-text xxl quarter-width"></div>
        <div className="skeleton-text large quarter-width"></div>
      </div>
    </div>
  )
}

export default VoterHeader