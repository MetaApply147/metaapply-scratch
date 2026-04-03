"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";

export default function ContentSection() {
  return (
    <Section spacing="lg">
      <Box sx={{ textAlign: "center" }}>
        {/* <Typography
          variant="heading07"

          sx={{
            display: "block",
            mb: 3,
          }}
        >
          What is{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            International Insurance Policy?
          </Box>
        </Typography> */}
        <SectionHeader title="What is" highlight="International Insurance Policy?"/>

        <Typography
          variant="body02"
          component='p'
          sx={{
            color: "text.secondary",
            lineHeight: '160%',
          }}
        >
          When you're planning to study abroad, you never know what the journey
          may hold. To stay on the safer side and have everything in place, it
          is crucial for every study abroad aspirant to have international
          insurance.
          <br></br>
          This policy is a specially designed coverage plan that protects
          students studying abroad from unexpected medical emergencies, travel
          disruptions, or other health-related issues.
          <br></br>
          To ensure access to quality healthcare when needed, having health
          insurance is necessary. Additionally, in the case of unpredictable
          travel scenarios, it is wise to have travel insurance as well.
        </Typography>
      </Box>
    </Section>
  );
}
