import { FC, PropsWithChildren } from 'react';

import { createTheme, ThemeProvider as MaterialThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: "hsl(322 95% 57%)" },
    background: { default: "hsl(207, 95%, 8%)" },
    divider: "hsl(211, 34%, 18%)",
  },
  typography: {
    allVariants: { color: "hsl(37 42% 93%)", fontFamily: "Fira Code" },
  },
});

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
);
