import { InputWrapperProps } from "../types"

const InputWrapper = ({error,labelClassName, name, label, children}: InputWrapperProps) => (
      <div className={`control-wrapper ${!!error ? 'valid-error': ''}`}>
       <label 
          htmlFor={name} 
          className={labelClassName}>
            {`${label}:`} 
        </label>
        {children}
       <p>{!!error ? error : ' '}</p>
     </div>
)
  
  
  
  export default InputWrapper