"use client";

import { Grid } from "@mui/material";
import EventDescription from "./EventDescription";
import EventDetailCard from "./EventDetailCard";
import Section from "@/components/common/Section";

const EventMainSection = ({ event }: any) => {
  return (
    <Section spacing="lg" sx={{background: 'linear-gradient(180deg, transparent, #f1f5f9)'}}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <EventDescription event={event} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <EventDetailCard event={event} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default EventMainSection;