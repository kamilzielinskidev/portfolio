import { FC } from 'react';
import { FaHamburger } from 'react-icons/fa';

import { Grid, IconButton, Typography } from '@mui/material';

export const AppNavigation: FC = () => (
  <Grid
    container
    sx={{
      p: "1rem",
      alignItems: "center",
      justifyContent: "space-between",
      bgcolor: "background.default",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      border: "1px solid",
      borderColor: "divider",
    }}
  >
    <Typography color="primary.main" sx={{ fontSize: "1.25rem" }}>
      kamil zieliński
    </Typography>
    <IconButton>
      <FaHamburger color="hsl(322 95% 57%)" />
    </IconButton>
  </Grid>
);
