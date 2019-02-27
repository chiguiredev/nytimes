import styled from 'styled-components';
import { baseColors, transitions } from '../../utils/theme';
import { fontSizes } from '../../utils/fonts';

const StyledInput = styled.div`
  position:relative; 
  margin: 10px;
  margin-top: 35px;
  min-width: 100px;
  max-width: 435px;

  input{
    font-size: ${fontSizes.title}
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    width: 100%;
    border-bottom: 2px solid ${props => props.isValid ? baseColors.pink : baseColors.error };
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
