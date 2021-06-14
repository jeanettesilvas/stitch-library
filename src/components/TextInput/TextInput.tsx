import './TextInput.scss'

export type TextInputStatus = 'default' | 'error' | 'warning'

export interface TextInputProps {
  className?: string
  id?: string
  message?: string
  onChange: () => void
  placeholder?: string
  status?: TextInputStatus
  type?: 'text' | 'password' | 'email'
  value?: string
}

export const TextInput = (props: TextInputProps) => {
  let {
    className,
    id,
    message = '',
    onChange,
    placeholder,
    status = 'default',
    type,
    value = '',
  } = props
  let allClassNames = 'text-input-field'
  if (className) {
    allClassNames = `${allClassNames} ${className}`
  }

  return (
    <div className={`text-input text-input--${status}`}>
      <input
        className={`text-input__field text-input__field--${status}`}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <span className={`text-input__message text-input__message--${status}`}>
        {message}
      </span>
    </div>
  )
}
