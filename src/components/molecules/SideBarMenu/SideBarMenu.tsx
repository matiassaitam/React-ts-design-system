import React from "react";
import styled from "styled-components";
import SidebarItem from "../../atoms/SideBarItem/SideBarItem";
import { flexCenter } from "../../../styles/mixins";

const StyledMenuContainer = styled.div`
  ${flexCenter}
`;

interface SidebarMenuProps {
  items: string[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <StyledMenuContainer>
      {items.map((label, index) => (
        <SidebarItem key={index} label={label} />
      ))}
    </StyledMenuContainer>
  );
};

export default SidebarMenu;
