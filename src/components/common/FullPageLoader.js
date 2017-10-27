import React from 'react'
import Loadable from 'react-loading-overlay'

const FullPageLoader = () => {
  return (
    <div className="full-page-div">
      <Loadable
        active={true}
        spinner
        text='Loading your content...'
        >
        <p>_</p>
      </Loadable>
    </div>
  )
}

export default FullPageLoader

     
