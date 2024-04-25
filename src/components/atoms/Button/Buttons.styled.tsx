import styled from "styled-components";
import {
  baseButtonStyle,
  buttonVariant,
  hoverColor,
} from "../../../styles/mixins";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyle}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  ${baseButtonStyle}
`;

export const StyledSuccessButton = styled(StyledButton)`
  ${buttonVariant("success", "dark")}
  ${hoverColor("light")}
`;

export const StyledDangerButton = styled(StyledButton)`
  ${buttonVariant("danger", "dark")}
`;
