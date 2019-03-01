import styled from 'styled-components';
import { baseColors, commonStyles, transitions } from '../../utils/theme';

export const StyledButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10vw;
  background-color: ${baseColors.pink};
  color: ${baseColors.darkblue};
  height: 25px;
  border-radius: ${commonStyles.defaultBorderRadius};
  transition: ${transitions.defaultTransition};

  &:hover {
    box-shadow: ${commonStyles.defaultBoxShadow};
  }
`;
