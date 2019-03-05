import React from 'react';
import Tag from './Tag';
import { StyledTagbar } from './Tagbar.style';

const Tagbar = ({ keywords }) => {
  if (keywords.length === 0) {
    return null;
  }
  return (
    <StyledTagbar>
      {
        keywords.map((element, index) => {
          return <Tag keyword={element.value} key={`${index}${element.value}`} />;
        })
      }
    </StyledTagbar>
  );
}

export default Tagbar;
