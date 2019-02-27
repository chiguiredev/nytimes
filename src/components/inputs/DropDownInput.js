import React, { useState } from 'react';
import Input from './Input';
import { StyledList } from './DropDownInput.style';

const DropDownInput = ({ inputType, labelText, required }) => {
  const listElements = ['hola','que','tal','soy','el'];
  const [isListVisible, setIsListVisible] = useState(false);
  const inputRef = React.createRef();

  const handleVisibility = (value, e) => {
    setIsListVisible(value);
  }

  const handleChange = (e) => {
    inputRef.current.value = 'perro sucio';
  }

  return (
    <>
      <Input
        inputType={inputType}
        labelText={labelText}
        required={true}
        onFocus={handleVisibility.bind(this, true)}
        onBlur={handleVisibility.bind(this, false)}
        ref={inputRef}
        onChange={handleChange}
      />
      <List
        listElements={listElements}
        isVisible={isListVisible}
      />
    </>
  );
}

export default DropDownInput;

// This component displays the list of options from the dropdown
// Elements on this list must be strings
const List = ({ listElements, isVisible, setValueCallback }) => {
  const handleListElmentSelection = (e) => {
    console.log(e.target.dataset.value);
  }

  if (!isVisible) return null;

  return (
    <StyledList>
      {
        listElements.map((element, index) => {
          return(
            <li
              data-value={element}
              onClick={handleListElmentSelection}
              key={`${index}${element}`}
            >
              {element}
            </li>
          );
        })
      }
    </StyledList>
  );
}
