import styled from 'styled-components';
import { baseColors, transitions } from '../../utils/theme';

export const StyledButton = styled.button`
  color: ${baseColors.pink};
  background: none;
  border: none;
  margin-top: 50px;
  transition: ${transitions.defaultTransition};
`;

export const StyledSearchButton = styled.button`
  color: ${baseColors.pink};
  background: none;
  border: none;
  margin-top: 50px;
  transition: ${transitions.defaultTransition};
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;
