export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    danger: string;
    info: string;
    light: string;
    dark: string;
    text: string;
    background: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    xl: string;
  };
  buttonSizes: {
    small: string;
    medium: string;
    large: string;
    xl: string;
  };
  fonts: {
    base: string;
    heading: string;
    cursive: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    error: "#dc3545",
    danger: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    text: "#212529",
    background: "#fff",
  },
  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    lg: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    xl: "0px 20px 40px rgba(0, 0, 0, 0.2)",
  },
  fontSizes: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.25rem",
    xl: "2.5rem",
  },
  buttonSizes: {
    small: "8px 12px",
    medium: "10px 20px",
    large: "12px 24px",
    xl: "18px 32px",
  },
  fonts: {
    base: "'Helvetica Neue', sans-serif",
    heading: "'Georgia', serif",
    cursive: 'cursive',
  },
};
