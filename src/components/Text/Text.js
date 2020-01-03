import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Text.scss'

export const Text = props => {
  const classNames = classnames('text', {
    [props.className]: !!props.className,
    'text--callout': props.type === 'callout',
  })

  return <props.element className={classNames}>{props.children}</props.element>
}

Text.propTypes = {
  className: PropTypes.string,
  element: PropTypes.oneOf(['p', 'div']),
  type: PropTypes.oneOf(['callout']),
}

Text.defaultProps = {
  element: 'p',
}
