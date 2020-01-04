import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './TextInput.scss'

export class TextInput extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['password', 'text', 'email']),
    value: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    type: 'text',
  }

  render() {
    return (
      <input
        className={`text-input ${this.props.className}`}
        placeholder={this.props.placeholder}
        type={this.props.type}
        value={this.props.value}
      />
    )
  }
}
