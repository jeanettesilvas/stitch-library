import classnames from 'classnames'

import './Button.scss'

interface ButtonProps {
  children: any
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
