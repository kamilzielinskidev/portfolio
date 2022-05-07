import { MaxWidthContainer } from 'common/lib/components/MaxWidthContainer';
import { FC } from 'react';

import { Grid, Typography } from '@mui/material';

export const HomePage: FC = () => (
  <MaxWidthContainer>
    <Grid container>
      <Typography>Kamil Zielinski</Typography>
    </Grid>
  </MaxWidthContainer>
);
