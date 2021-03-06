import { FC, PropsWithChildren } from 'react';

import { Container } from '@mui/material';

export const MaxWidthContainer: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Container maxWidth="xs" disableGutters>
    {children}
  </Container>
);
