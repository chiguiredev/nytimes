import React from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../utils/fonts';
import { baseColors, commonStyles, transitions } from '../../utils/theme';

const Tag = ({keyword}) =>{
  return (
    <StyledSpan>{keyword}</StyledSpan>
  );
};

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  padding: 6px;
  background-color: ${baseColors.pink};
  color: ${baseColors.darkblue};
  border-radius: ${commonStyles.defaultBorderRadius};
  height: 12px;
  transition: ${transitions.defaultTransition};
  font-size: ${fontSizes.tag};

  :hover {
    cursor: pointer;
    box-shadow: ${commonStyles.defaultBoxShadow};
  }
`;

export default Tag;
