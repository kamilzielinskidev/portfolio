import { FC, PropsWithChildren } from 'react';

import { createTheme, ThemeProvider as MaterialThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: { allVariants: { color: "#E5E9F0", fontFamily: "Fira Code" } },
});

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
);
