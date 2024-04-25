import React from 'react';
import Header from '../atoms/Header/Header';
import Sidebar from '../organisms/SideBar/SideBar';
import { StyledLayoutContainer, StyledContentContainer, StyledMainContent } from './MainLayout.styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledLayoutContainer>
      <Header />
      <StyledContentContainer>
        <Sidebar menuItems={[]} /> 
        <StyledMainContent>{children}</StyledMainContent>
      </StyledContentContainer>
    </StyledLayoutContainer>
  );
};

export default MainLayout;
