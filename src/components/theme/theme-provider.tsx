import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import { theme } from "./theme";
import { GlobalStyles } from "./global-styles";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </CssVarsProvider>
  );
};
