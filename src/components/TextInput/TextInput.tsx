import './TextInput.scss'

export interface TextInputProps {
  className?: string
  placeholder?: string
  type?: 'text' | 'password' | 'email'
  value?: string
}

export const TextInput = (props: TextInputProps) => {
  let { className, placeholder, type, value } = props

  return (
    <input
      className={`text-input ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}
