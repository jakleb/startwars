import { ControlProps, InputProps, TextareaProps } from '../types';

const Input = ({
  label = '',
  name,
  fluid,
  error,
  labelClassName = "",
  type,
  ...props
}: ControlProps) => (
  <div className={`control-wrapper ${!!error ? 'valid-error': ''}`}>
    <label
      htmlFor={name}
      className={labelClassName}
    >
      {label}
    </label>
    { type === "textarea" ? <textarea {...{ name, ...props } as TextareaProps}></textarea> : <input {...{ name, type, ...props } as InputProps} />}
    <p>{!!error ? error : ' '}</p>
  </div>
)

export default Input