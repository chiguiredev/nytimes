import React, { Component } from 'react';
import Input from '../../components/inputs/Input';
import DropDownInput from '../../components/inputs/DropDownInput';

class LandingForm extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default LandingForm;
