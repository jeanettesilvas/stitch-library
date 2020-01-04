import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Button.scss'

export class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']),
  }

  static defaultProps = {
    onClick: () => {},
    type: 'secondary',
  }

  render() {
    const className = classnames({
      button: true,
      'button--primary': this.props.type === 'primary',
    })

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
