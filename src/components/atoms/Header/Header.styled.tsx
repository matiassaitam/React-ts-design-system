import styled from 'styled-components';
import { theme } from '../../../theme/theme';

export const StyledHeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.h1`
  color: white;
  font-size: ${theme.fontSizes.large};
`;

export const StyledNav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin-left: 16px;
    font-size: ${theme.fontSizes.medium};
    background-color: 'red',
    &:first-child {
      margin-left: 0;
    }
  }
`;
