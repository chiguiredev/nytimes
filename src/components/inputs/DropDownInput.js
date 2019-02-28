import React, { useState } from 'react';
import Input from './Input';
import { StyledList, StyledDropdown, StyledError } from './DropDownInput.style';

const DropDownInput = ({ inputType, labelText, required }) => {

  const listElements = ['hola','hoja','hopo','soy','el','ella','ello'];
  const [isListVisible, setIsListVisible] = useState(false);
  const [list, setList] = useState(listElements);
  const inputRef = React.createRef();

  const handleVisibility = (value, e) => {
    setIsListVisible(value);
  }

  // Each time the input value change it creates a new regular expression
  // and test it against the elements of the list to filter them
  const handleChange = (e) => {
    const currenTypedValue = e.target.value;
    var regex = new RegExp(currenTypedValue, 'i');
    const filteredList = list.filter(element => regex.test(element));
    setList(filteredList);
  }

  const handleBackspace = (e) => {
    const key = e.key || e.code;
    if (key === 'Backspace') {
      setList(listElements);
    }
  }

  return (
    <StyledDropdown>
      <Input
        inputType={inputType}
        labelText={labelText}
        required={true}
        onFocus={handleVisibility.bind(this, true)}
        onBlur={handleVisibility.bind(this, false)}
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleBackspace}
      />
      <List
        listElements={list}
        isVisible={isListVisible}
        inputRef={inputRef}
        setVisible={setIsListVisible}
      />
    </StyledDropdown>
  );
}

export default DropDownInput;

// This component displays the list of options from the dropdown
// Elements on this list must be strings
const List = ({ listElements, isVisible, inputRef }) => {

  // takes the reference of the input above the List component and
  // sets its value to the clicked element in the list
  const handleListElmentSelection = (e) => {
    inputRef.current.value = e.target.dataset.value;
    inputRef.current.blur();
  };

  if (listElements.length === 0) {
    return <StyledError className='not-found'>Not matches found</StyledError>;
  }

  return (
    <StyledList isVisible={isVisible}>
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
