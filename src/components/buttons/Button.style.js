import styled from 'styled-components';
import { baseColors, transitions } from '../../utils/theme';

const StyledButton = styled.button`
  color: ${baseColors.pink};
  background: none;
  border: none;
  margin-top: 50px;
  transition: ${transitions.defaultTransition};
`;

export default StyledButton;
