import { css, DefaultTheme } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const baseButtonStyle = css<{ size?: keyof DefaultTheme['buttonSizes'], disabled?: boolean }>`
  ${({ theme, size, disabled }) => {
    const padding = size ? theme.buttonSizes[size] : theme.buttonSizes.medium; 
    return `
      color: white;
      background-color: ${theme.colors.primary}; // Use the primary color by default
      padding: ${padding};
      border: none;
      border-radius: 4px;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      font-size: ${size ? theme.fontSizes[size] : theme.fontSizes.medium}; // Provide a default font size
      box-shadow: ${theme.shadows.md};
      opacity: ${disabled ? '0.5' : '1'};
      pointer-events: ${disabled ? 'none' : 'auto'};
      transition: background-color 0.3s; // Adding transition for smooth hover effect

      &:hover {
        background-color: ${disabled ? theme.colors.primary : theme.colors.secondary};
      }
    `;
  }}
`;

export const hoverColor = (hoverColor: keyof DefaultTheme['colors']) => css<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    &:hover {
      background-color: ${disabled ? 'inherit' : theme.colors[hoverColor]};
    }
  `}
`;

export const buttonVariant = (color: keyof DefaultTheme['colors'], hoverColor: keyof DefaultTheme['colors']) => css<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    background-color: ${theme.colors[color]};
    &:hover {
      background-color: ${disabled ? theme.colors[color] : theme.colors[hoverColor]};
    }
  `}
`;
