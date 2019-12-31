import React from 'react'
import PropTypes from 'prop-types'

import './TextInput.scss'

export const TextInput = props => {
  return (
    <input
      className={`text-input ${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['password', 'text', 'email']),
  value: PropTypes.string,
}

TextInput.defaultProps = {
  className: '',
  type: 'text',
}
