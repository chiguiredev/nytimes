import React from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../utils/fonts';
import { baseColors, commonStyles, transitions } from '../../utils/theme';
import { SEARCH_ARTICLE } from '../../api/endpoints';

const Tag = ({keyword, material, fetch_news, update_news_form_value}) =>{

  const handleTagClick = (e) =>{
    const logo = document.getElementById('ny-logo');
    logo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    update_news_form_value('keywords', e.target.dataset.keyword);
    fetch_news(SEARCH_ARTICLE(keyword, material, 0));
  }

  return (
    <StyledSpan data-keyword={keyword} onClick={handleTagClick}>
      {keyword}
    </StyledSpan>
  );
};

const StyledSpan = styled.div`
  display: block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 6px;
  min-height: 0px;
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
