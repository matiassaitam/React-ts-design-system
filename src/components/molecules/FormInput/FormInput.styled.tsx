import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledFormGroup = styled.div`
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  font-size: ${theme.fontSizes.medium};
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: ${theme.fontSizes.medium};
  border: 1px solid ${theme.colors.light};
  border-radius: 4px;
`;
