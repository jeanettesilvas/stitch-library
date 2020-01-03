import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Abbreviation.scss'

export class Abbreviation extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className={`abbreviation ${this.props.className}`}>
        {this.props.text}
      </div>
    )
  }
}
