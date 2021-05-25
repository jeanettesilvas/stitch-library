import './Media.scss'

interface MediaProps {
  alt?: string
  className?: string
  height?: string
  src?: string
  width?: string
}

export const Media = (props: MediaProps) => {
  let {
    alt = '',
    className = '',
    height = '100px',
    src = '',
    width = '100px',
  } = props

  return (
    <div className={`media ${className}`} style={{ height, width }}>
      <img className="media__image" src={src} alt={alt} />
    </div>
  )
}
