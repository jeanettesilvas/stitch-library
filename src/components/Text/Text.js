import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Text.scss'

export class Text extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    element: PropTypes.oneOf(['p', 'div']),
    html: PropTypes.string,
    type: PropTypes.oneOf(['callout']),
  }

  static defaultProps = {
    element: 'p',
  }

  render() {
    const classNames = classnames('text', this.props.className, {
      'text--callout': this.props.type === 'callout',
    })

    return (
      <>
        {this.props.html ? (
          <this.props.element
            className={classNames}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        ) : (
          <this.props.element className={classNames}>
            {this.props.children}
          </this.props.element>
        )}
      </>
    )
  }
}
