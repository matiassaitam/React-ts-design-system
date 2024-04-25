import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledLoginFormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const StyledSubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${theme.fontSizes.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
