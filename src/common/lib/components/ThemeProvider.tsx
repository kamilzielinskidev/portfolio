import { FC, PropsWithChildren } from 'react';

import { createTheme, ThemeProvider as MaterialThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "hsl(322 95% 57%)" },
    background: { default: "hsl(207, 95%, 8%)" },
    divider: "hsl(211, 34%, 18%)",
  },
  typography: {
    allVariants: { color: "hsl(37 42% 93%)", fontFamily: "Fira Code" },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { minWidth: "unset" } },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid",
          borderBottomColor: "hsl(211, 34%, 18%)",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(211, 34%, 18%)",
          minHeight: "unset",
          padding: "0.5rem 2rem",
        },
        content: {
          margin: 0,
          alignItems: "center",
          gap: "0.5rem",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0.5rem 1.5rem",
          backgroundColor: "hsl(207, 95%, 8%)",
        },
      },
    },
  },
});

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
);
