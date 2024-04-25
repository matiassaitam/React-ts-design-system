import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  padding: 8px 16px;
`;

interface SidebarItemProps {
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label }) => {
  return <ItemContainer>{label}</ItemContainer>;
};

export default SidebarItem;
