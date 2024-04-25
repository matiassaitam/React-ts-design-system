import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const StyledMainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;