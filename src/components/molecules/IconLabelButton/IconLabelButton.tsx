import React from "react";
import Button from "../../atoms/Button/Button";
import { Theme, theme } from "../../../theme/theme";

export interface IconLabelButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: keyof Theme["buttonSizes"];
  variant?: keyof Theme["colors"];
  disabled?: boolean;
  labelSize?: keyof Theme["fontSizes"];
  font?: keyof Theme["fonts"];
}

const IconLabelButton: React.FC<IconLabelButtonProps> = ({
  label,
  icon,
  onClick,
  size,
  variant,
  disabled,
  labelSize = "medium",
  font = "base",
}) => {
  return (
    <Button onClick={onClick} size={size} variant={variant} disabled={disabled}>
      {icon && <span>{icon}</span>}
      <span
        style={{
          fontSize: theme.fontSizes[labelSize],
          fontFamily: theme.fonts[font],
        }}
      >
        {label}
      </span>
    </Button>
  );
};

export default IconLabelButton;
