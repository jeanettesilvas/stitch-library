import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/pro-duotone-svg-icons'

import { TextInput } from '../index'

import './TextInputWithIcon.scss'

export class TextInputWithIcon extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    // let faIcon

    // switch (props.icon) {
    //   case 'search':
    //     faIcon = faSearch
    //     break
    //   default:
    // }

    return (
      <div className={`text-input-with-icon ${this.props.className}`}>
        <TextInput />
        {/* {faIcon && (
          <FontAwesomeIcon icon={faIcon} className="text-input-with-icon__icon" />
        )} */}
      </div>
    )
  }
}
