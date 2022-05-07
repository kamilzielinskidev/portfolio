import { FC } from 'react';
import { FaHamburger } from 'react-icons/fa';

import { Grid, IconButton } from '@mui/material';

export const AppNavigation: FC = () => (
  <Grid container>
    <IconButton>
      <FaHamburger color="#607B96" />
    </IconButton>
  </Grid>
);
