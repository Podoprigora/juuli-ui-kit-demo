import { extendTheme, PaletteRangeOverrides } from "@mui/joy/styles";

// Interfaces
declare module "@mui/joy/styles" {
  interface PaletteRangeOverrides {
    50: false;
    100: false;
    200: false;
    300: false;
    400: false;
    500: false;
    600: false;
    700: false;
    800: false;
    900: false;
    plainColor: false;
    plainHoverBg: false;
    plainActiveBg: false;
    plainDisabledColor: false;
    outlinedColor: false;
    outlinedBorder: false;
    outlinedHoverBg: false;
    outlinedHoverBorder: false;
    outlinedActiveBg: false;
    outlinedDisabledColor: false;
    outlinedDisabledBorder: false;
    softColor: false;
    softBg: false;
    softHoverBg: false;
    softActiveBg: false;
    softDisabledColor: false;
    softDisabledBg: false;
    solidColor: false;
    solidBg: false;
    solidHoverBg: false;
    solidActiveBg: false;
    solidDisabledColor: false;
    solidDisabledBg: false;

    test: true;
  }

  interface TypographySystemOverrides {
    "title-lg": false;
    "title-md": false;
    "title-sm": false;

    h5: true;
    h6: true;
    body: true;
    button: true;
  }

  interface FontWeightOverrides {
    sm: false;
    md: false;
    lg: false;
    xl: false;

    500: true;
    700: true;

    medium: true;
    bold: true;
  }
}

// Helpers
export const pxToRem = (value: number) => {
  return `${value / 10}rem`;
};

// Theme
export const theme = extendTheme({
  cssVarPrefix: "",

  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          50: undefined,
          100: undefined,
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          plainColor: undefined,
          plainHoverBg: undefined,
          plainActiveBg: undefined,
          plainDisabledColor: undefined,
          outlinedColor: undefined,
          outlinedBorder: undefined,
          outlinedHoverBg: undefined,
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
          outlinedDisabledColor: undefined,
          outlinedDisabledBorder: undefined,
          softColor: undefined,
          softBg: undefined,
          softHoverBg: undefined,
          softActiveBg: undefined,
          softDisabledColor: undefined,
          softDisabledBg: undefined,
          solidColor: undefined,
          solidBg: undefined,
          solidHoverBg: undefined,
          solidActiveBg: undefined,
          solidDisabledColor: undefined,
          solidDisabledBg: undefined,

          test: "red",
        },
      },
    },
  },

  fontFamily: {
    body: "'Plus Jakarta Sans Variable', var(--fontFamily-fallback)",
    display: "'Plus Jakarta Sans Variable', var(--fontFamily-fallback)",
  },

  fontWeight: {
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined,

    "500": 500,
    "700": 700,
    medium: 500,
    bold: 700,
  },

  typography: {
    h1: {
      fontSize: pxToRem(44),
      fontWeight: "var(--fontWeight-bold)",
    },
    h2: {
      fontSize: pxToRem(32),
      fontWeight: "var(--fontWeight-bold)",
    },
    h3: {
      fontSize: pxToRem(20),
      fontWeight: "var(--fontWeight-bold)",
    },
    h4: {
      fontSize: pxToRem(20),
      fontWeight: "var(--fontWeight-bold)",
    },
    h5: {
      fontSize: pxToRem(18),
      fontWeight: "var(--fontWeight-bold)",
    },
    h6: {
      fontSize: pxToRem(16),
      fontWeight: "var(--fontWeight-bold)",
    },
    "body-lg": {
      fontSize: pxToRem(18),
      fontWeight: "var(--fontWeight-medium)",
    },
    "body-md": {
      fontSize: pxToRem(16),
      fontWeight: "var(--fontWeight-medium)",
    },
    body: {
      fontSize: pxToRem(16),
      fontWeight: "var(--fontWeight-medium)",
    },
    "body-sm": {
      fontSize: pxToRem(14),
      fontWeight: "var(--fontWeight-medium)",
    },
    "body-xs": {
      fontSize: pxToRem(12),
      fontWeight: "var(--fontWeight-medium)",
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: "var(--fontWeight-bold)",
    },
  },
  components: {
    JoyTypography: {
      defaultProps: {
        level: "body",
        levelMapping: {
          h5: "h5",
          h6: "h6",
        },
      },
    },
  },
});
