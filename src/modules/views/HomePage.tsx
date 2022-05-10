import { MaxWidthContainer } from 'common/lib/components/MaxWidthContainer';
import { FC } from 'react';

import { Box, Grid, Link, Typography } from '@mui/material';

import { ContentContainer } from '../../common/lib/components/ContentContainer';
import { GithubUrlCode } from '../home/lib/components/GithubUrl';
import { PulsatingCursor } from '../home/lib/components/PulsatingCursor';

export const HomePage: FC = () => (
  // TODO: container wrapper helper fn
  <MaxWidthContainer>
    <ContentContainer>
      <Grid
        container
        sx={{
          flexDirection: "column",
          justifyContent: "space-around",
          px: "2rem",
        }}
      >
        <Grid item>
          <Typography sx={{ fontSize: "1.5rem" }}>Hi there. I am</Typography>
          <Typography component="h1" sx={{ fontSize: "4rem" }}>
            Kamil Zieliński
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", color: "primary.main" }}>
            &gt; TypeScript developer
          </Typography>
        </Grid>
        <Grid item>
          <Link href="https://github.com/kamilzielinskidev" underline="none">
            <GithubUrlCode />
          </Link>
          <Box
            sx={{
              position: "relative",
              left: "6rem",
              top: "-1.5rem",
              width: 0,
            }}
          >
            <PulsatingCursor />
          </Box>
        </Grid>
      </Grid>
    </ContentContainer>
  </MaxWidthContainer>
);
