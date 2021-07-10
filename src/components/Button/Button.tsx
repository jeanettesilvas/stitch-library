import classnames from 'classnames'
import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/pro-light-svg-icons'

import './Button.scss'

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
  status?: 'active' | 'disabled' | 'loading'
  type?: 'primary' | 'secondary' | 'destructive'
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
    'button--destructive': type === 'destructive',
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
        <FontAwesomeIcon icon={faCircleNotch} className="fa-lg fa-spin" />
      </span>
      <span className={labelClassnames}>{children}</span>
    </button>
  )
}
