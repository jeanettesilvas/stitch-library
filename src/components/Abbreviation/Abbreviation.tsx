import './Abbreviation.scss'

type AbbreviationProps = {
  className?: string
  text: string
}

export const Abbreviation = (props: AbbreviationProps) => {
  let { className, text } = props

  return <div className={`abbreviation ${className}`}>{text}</div>
}
