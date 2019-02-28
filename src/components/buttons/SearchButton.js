import React from 'react';

import StyledButton from './Button.style';

const SearchButton = ({ onClick }) => {
  const onClickFallback = () => console.error('not onClick provided, for the button');
  const onClickFunction = onClick || onClickFallback;
  return (
    <StyledButton
      onClick={onClickFunction}
    >
      <i className="fas fa-search"></i>
    </StyledButton>
  );
}

export default SearchButton;
