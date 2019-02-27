import styled from 'styled-components';
import { baseColors, transitions, commonStyles } from '../../utils/theme';
import { fontSizes } from '../../utils/fonts';

export const StyledList = styled.ul`
  margin: 0px 10px;;
  list-style: none;
  padding: 10px;
  background-color: ${baseColors.mediumblue};
  transition: ${transitions.defaultTransition};
  border-radius: ${commonStyles.defaultBorderRadius};
  box-shadow: ${commonStyles.defaultBoxShadow};
  min-width: 100px;
  max-width: 410px;

  li {
    font-size: ${fontSizes.bigLabel};
    color: ${baseColors.white};
    margin 4px 0px;
    transition: ${transitions.listItem};

    &:hover {
      color: ${baseColors.pink};
    }
  }
`;
