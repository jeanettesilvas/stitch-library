import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Button.scss'

export function Button(props) {
  const className = classnames({
    button: true,
    'button--primary': props.type === 'primary',
  })
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  onClick: () => {},
  type: 'secondary',
}
