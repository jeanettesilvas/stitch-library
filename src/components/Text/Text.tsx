import classnames from 'classnames'

import './Text.scss'

interface TextProps {
  children?: JSX.Element | string
  className?: string
  element?: 'p' | 'div'
  html?: string
  type?: 'callout'
}

export const Text = (props: TextProps) => {
  let { children, className, element = 'p', html = '', type } = props

  const classNames = classnames('text', className, {
    'text--callout': type === 'callout',
  })

  return (
    <>
      {(html && element === 'div') ?? (
        <div
          className={classNames}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      {html && element === 'p' && <p className={classNames}>{children}</p>}
      {!html && children}
    </>
  )
}
