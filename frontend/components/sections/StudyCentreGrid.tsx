"use client";

import Grid from "@mui/material/Grid";

import StudyCentreCard from "./StudyCentreCard";
import { studyCentres } from "./Pages/about-us/studyCentresData";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

type Props = {
  buttonText?: string;
  title? : string;
  highlight? : string;
};

export default function StudyCentreGrid({
  buttonText = "Book a Visit",
  title = "Our",
  highlight = "Study Abroad Centres"
}: Props) {
  return (
    <Section spacing="lg">
      <SectionHeader title={title} highlight={highlight}/>
      <Grid container spacing={3}>
        {studyCentres.map((item) => (
          <Grid
            size={{xs: 12, sm: 6, md: 4, lg: 3}}
            key={item.id}
          >
            <StudyCentreCard
              item={item}
              buttonText={buttonText}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}