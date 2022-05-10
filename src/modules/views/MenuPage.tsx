import { MaxWidthContainer } from 'common/lib/components/MaxWidthContainer';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { ContentContainer } from '../../common/lib/components/ContentContainer';

export const MenuPage: FC = () => {
  const { push } = useRouter();
  return (
    <MaxWidthContainer>
      <ContentContainer>
        <Box component="nav" sx={{ width: "100%" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" onClick={() => push("/")}>
                <ListItemText primary="_hello" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemText
                  primary="_about-me"
                  onClick={() => push("/about-me")}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemText primary="_projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemText primary="_contact-me" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </ContentContainer>
    </MaxWidthContainer>
  );
};
