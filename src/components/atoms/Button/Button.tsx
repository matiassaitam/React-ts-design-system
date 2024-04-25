import React from "react";
import {
  StyledButton,
  StyledSuccessButton,
  StyledDangerButton,
} from "./Buttons.styled";
import { Theme } from "../../../theme/theme";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: keyof Theme['buttonSizes'];
  variant?: keyof Theme["colors"];
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  variant = "primary",
  disabled,
}) => {
  let Component = StyledButton;

  if (variant === "success") {
    Component = StyledSuccessButton;
  } else if (variant === "danger") {
    Component = StyledDangerButton;
  }

  return (
    <Component onClick={onClick} size={size} disabled={disabled}>
      {children}
    </Component>
  );
};

export default Button;
