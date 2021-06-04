import classnames from 'classnames'
import { FC, ReactNode } from 'react'

import './Button.scss'

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  type?: 'primary' | 'secondary'
}

export const Button = (props: ButtonProps) => {
  let { children, type = 'secondary', onClick = () => {} } = props

  const className = classnames({
    button: true,
    'button--primary': type === 'primary',
  })

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
