"use client";

import { Box, Typography } from "@mui/material";

/* ================= DATA ================= */

type Props = {
  data: any;
  countryName: string;
};

/* ================= COMPONENT ================= */

export default function StudyDescription({ data, countryName }: Props) {
  return (
    <>
      <Typography
        variant="heading09"
        component="h3"
        pb={1.5}
        //   sx={{ lineHeight: "110%", color: "secondary.main" }}
      >
        Why{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          Study in {countryName}
        </Box>
      </Typography>

      <Typography
        variant="body05"
        component="p"
        sx={{ color: "text.secondary" }}
      >
        {data.whyStudyDescription}
      </Typography>
    </>
  );
}
