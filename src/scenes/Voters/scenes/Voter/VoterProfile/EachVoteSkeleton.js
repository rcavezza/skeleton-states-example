import React from 'react'

const EachVoteSkeleton = (props) => (
  <div className="col-4 mb-4">
    <div className="row">
      <div className="col-3">
        <span className="circle text-center"><h2>{props.rank || 1}</h2></span>
      </div>
      <div className="col-3">
        <span>
          <div className='img-placeholder mr-3' style={{width: "100px", height: "135px"}}></div>
        </span>
      </div>          
      <div className="col-6">
        <div className="skeleton-text medium three-quarters-width"></div>
        <div className="skeleton-text medium three-quarters-width"></div>
      </div>
    </div>
  </div>
)

export default EachVoteSkeleton