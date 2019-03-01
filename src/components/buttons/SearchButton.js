import React from 'react';

import { StyledSearchButton } from './SearchButton.style';

const SearchButton = ({ onClick }) => {
  const onClickFallback = () => console.error('not onClick provided, for the button');
  const onClickFunction = onClick || onClickFallback;
  return (
    <StyledSearchButton
      onClick={onClickFunction}
    >
      <i className="fas fa-search"></i>
    </StyledSearchButton>
  );
}

export default SearchButton;
