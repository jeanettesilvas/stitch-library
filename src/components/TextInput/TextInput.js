import React from 'react'
import PropTypes from 'prop-types'

import './TextInput.scss'

export const TextInput = props => {
  return (
    <input
      className="text-input"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['password', 'text']),
  value: PropTypes.string,
}

TextInput.defaultProps = {
  type: 'text',
}
