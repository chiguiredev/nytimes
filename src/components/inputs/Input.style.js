import styled from 'styled-components';
import { baseColors, transitions } from '../../utils/theme';
import { fontSizes } from '../../utils/fonts';

const StyledInput = styled.div`
  position:relative; 
  margin-top: 35px;
  width: 270px;

  input{
    font-size: ${fontSizes.title};
    padding: 10px 10px 10px 5px;
    display: block;
    width: 83%;
    border: none;
    border-bottom: 2px solid ${baseColors.pink};
    background-color: ${baseColors.darkblue};
    color: ${baseColors.white};
    ${transitions.defaultTransition};
  }

  input:focus {
    outline:none;
  }

  label{
    color: ${baseColors.lightpink}; 
    font-size: ${fontSizes.bigLabel}
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    ${transitions.defaultTransition};
  }

  input:focus ~ label, input:valid ~ label {
    top: -12px;
    font-size: ${fontSizes.mediumLabel}
    font-weight: bold;
    color: ${baseColors.pink}
  }

  input:required {
    box-shadow: none;
  }

  input:invalid {
    box-shadow: none;
  }

`;

export default StyledInput;
