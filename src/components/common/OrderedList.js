import React from 'react'
import PropTypes from 'prop-types'

const OrderedList = props => {
  const values = props.values
  const listItems = values.map((value, index) =>
    <li key={index}>{value}</li>
  )
  return (
    <ol>{listItems}</ol>
  )
}

OrderedList.propTypes = {
  values: PropTypes.array.isRequired
}

export default OrderedList
     