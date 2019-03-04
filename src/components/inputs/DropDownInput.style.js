import styled from 'styled-components';
import { baseColors, transitions, commonStyles } from '../../utils/theme';
import { fontSizes } from '../../utils/fonts';

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledList = styled.ul`
  margin: 0px 20px;;
  list-style: none;
  padding: 10px;
  background-color: ${baseColors.mediumblue};
  transition: ${transitions.defaultTransition};
  border-radius: ${commonStyles.defaultBorderRadius};
  box-shadow: ${commonStyles.defaultBoxShadow};
  min-width: 100px;
  max-width: 410px;
  max-height: 200px;
  position: absolute;
  top: 90px;
  z-index: 9;
  ${({isVisible}) => isVisible? null : 'visibility: hidden;'}
  overflow-y: scroll;

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

export const StyledError = styled.span`
  color: ${baseColors.error};
  display: block;
  margin-top: 6px;
  font-size: ${fontSizes.white};
`;
