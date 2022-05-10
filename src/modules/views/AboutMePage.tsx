import { FC, useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';

import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography } from '@mui/material';

import { ContentContainer } from '../../common/lib/components/ContentContainer';
import { MaxWidthContainer } from '../../common/lib/components/MaxWidthContainer';

type Panel = "PERSONAL" | "PROFESSIONAL" | "HOBBIES" | "CONTACT";
type Info =
  | "BIO"
  | "INTEREST"
  | "EDUCATION"
  | "COMP1"
  | "COMP2"
  | "COMP3"
  | "GYM"
  | "CODING";

export const AboutMePage: FC = () => {
  const [expanded, setExpanded] = useState<Panel | false>("PERSONAL");
  const [info, setInfo] = useState<Info>("BIO");

  const panelProps = (panel: Panel) => ({
    onChange: (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false),
    expanded: expanded === panel,
  });

  const panelArrow = (panel: Panel) =>
    expanded === panel ? <BiDownArrow /> : <BiRightArrow />;

  return (
    <MaxWidthContainer>
      <ContentContainer>
        <Grid container>
          <Grid container sx={{ flexDirection: "column", gap: "0.25rem" }}>
            <Accordion {...panelProps("PERSONAL")} disableGutters square>
              <AccordionSummary>
                {panelArrow("PERSONAL")}
                <Typography>personal-info</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  sx={{ flexDirection: "column", alignItems: "start" }}
                >
                  <Button variant="text">bio</Button>
                  <Button variant="text">interests</Button>
                  <Button variant="text">education</Button>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion {...panelProps("PROFESSIONAL")} disableGutters square>
              <AccordionSummary>
                {panelArrow("PROFESSIONAL")}
                <Typography>professional-info</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  sx={{ flexDirection: "column", alignItems: "start" }}
                >
                  <Button variant="text">comp1</Button>
                  <Button variant="text">comp2</Button>
                  <Button variant="text">comp3</Button>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion {...panelProps("HOBBIES")} disableGutters square>
              <AccordionSummary>
                {panelArrow("HOBBIES")}
                <Typography>hobbies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  sx={{ flexDirection: "column", alignItems: "start" }}
                >
                  <Button variant="text">gym</Button>
                  <Button variant="text">coding</Button>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion {...panelProps("CONTACT")} disableGutters square>
              <AccordionSummary>
                {panelArrow("CONTACT")}
                <Typography>contact</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Contact details</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </ContentContainer>
    </MaxWidthContainer>
  );
};
