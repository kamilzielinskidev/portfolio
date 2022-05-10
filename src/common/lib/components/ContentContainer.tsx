import { FC, PropsWithChildren } from 'react';

import { Grid } from '@mui/material';

export const ContentContainer: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Grid
    container
    sx={{
      height: "calc(100vh - 7rem)",
      bgcolor: "background.default",
      borderBottomLeftRadius: "16px",
      borderBottomRightRadius: "16px",
      border: "1px solid",
      borderColor: "divider",
    }}
  >
    {children}
  </Grid>
);
