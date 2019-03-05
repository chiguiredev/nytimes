import React from 'react';
import Tag from './Tag';
import { StyledTagbar } from './Tagbar.style';

const Tagbar = ({ keywords, material, fetch_news, update_news_form_value }) => {
  if (keywords.length === 0) {
    return null;
  }
  return (
    <StyledTagbar>
      {
        keywords.map((element, index) => {
          return(
            <Tag
              keyword={element.value}
              key={`${index}${element.value}`}
              material={material}
              fetch_news={fetch_news}
              update_news_form_value={update_news_form_value}
            />
          );
        })
      }
    </StyledTagbar>
  );
}

export default Tagbar;
