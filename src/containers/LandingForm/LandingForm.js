import React, { Component } from 'react';
import Input from '../../components/inputs/Input';
import DropDownInput from '../../components/inputs/DropDownInput';
import SearchButton from '../../components/buttons/SearchButton';
import StyledLandingFrom from './LandingForm.style';

class LandingForm extends Component {
  render() {
    return (
      <StyledLandingFrom>
        <div className='logo'>
          <h1>NY</h1>
          <span>times</span>
        </div>
        <div className='form'>
          <Input
            inputType='text'
            labelText='Search Keywords'
            required={true}
          />
          <DropDownInput
            inputType='text'
            labelText='Type of material'
            required={true}
          />
          <SearchButton />
        </div>
        <div className='footer'>
        </div>
      </StyledLandingFrom>
    );
  }
}

export default LandingForm;
