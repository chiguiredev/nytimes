import React, { useState } from 'react';
import StyledInput from './Input.style';

const Input = React.forwardRef(({
  inputType,
  labelText,
  required=false,
  onFocus,
  onBlur,
  onChange
}, ref) =>{
  const [isValid, setIsValid] = useState(true);

  const validateInput = (e) => e.target.value.length === 0 ? setIsValid(false) : setIsValid(true);

  return (
    <StyledInput onBlur={validateInput} isValid={isValid}>
      <input
        type={ inputType }
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
      <label>{ labelText }</label>
    </StyledInput>
  )
})

export default Input;
