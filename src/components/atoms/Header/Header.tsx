import React from 'react';
import { StyledHeaderContainer, StyledLogo, StyledNav } from './Header.styled';

const Header: React.FC = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogo>My App</StyledLogo>
      <StyledNav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </StyledNav>
    </StyledHeaderContainer>
  );
};

export default Header;
