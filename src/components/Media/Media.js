import React from 'react'
import PropTypes from 'prop-types'

import './Media.scss'

export const Media = ({ alt, className, height, src, width }) => {
  return (
    <div className={`media ${className}`} style={{ height, width }}>
      <img className="media__image" src={src} alt={alt} />
    </div>
  )
}

Media.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
}
