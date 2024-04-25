
import React from "react";
import styled from "styled-components";
import SidebarMenu from "../../molecules/SideBarMenu/SideBarMenu";

const StyledSidebarContainer = styled.div``;

interface SidebarProps {
  menuItems: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <StyledSidebarContainer>
      <SidebarMenu items={menuItems} />
    </StyledSidebarContainer>
  );
};

export default Sidebar;
