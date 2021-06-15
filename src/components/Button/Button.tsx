import classnames from 'classnames'
import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Button.scss'

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
  status?: 'loading' | 'disabled' | 'active'
  type?: 'primary' | 'secondary'
}

export const Button = (props: ButtonProps) => {
  let {
    children,
    disabled = false,
    status = 'active',
    type = 'secondary',
    onClick = () => {},
  } = props

  let className = classnames({
    button: true,
    'button--primary': type === 'primary',
  })

  let spinnerClassnames = classnames('button__spinner', {
    'button__spinner--loading': status === 'loading',
  })

  let labelClassnames = classnames('button__label', {
    'button__label--loading': status === 'loading',
  })

  let isDisabled = status === 'loading' || status === 'disabled' || disabled

  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      <span className={spinnerClassnames}>
        <FontAwesomeIcon
          icon={['fal', 'circle-notch']}
          className="fa-lg fa-spin"
        />
      </span>
      <span className={labelClassnames}>{children}</span>
    </button>
  )
}
