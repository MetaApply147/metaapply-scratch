'use client';

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import SectionHeader from '../../common/SectionHeader';

export default function PlanYourJourney() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        borderRadius: "24px",
        overflow: "hidden",
        background: "#0b0f5c",
        margin: 4,
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <SectionHeader title="Plan Your Complete" highlight="Study Abroad Journey" title2="with Us">

        </SectionHeader>
        {/* <Typography component="h4" fontWeight={600} mb={2}>
          Plan Your Complete{" "}
          <span style={{ color: "#ff4081" }}>
            Study Abroad Journey
          </span>{" "}
          With Us!
        </Typography> */}

        <Typography
          variant="body2"
          sx={{ opacity: 0.8, mb: 3, maxWidth: 400 }}
        >
          Explore the right destinations, programmes, and opportunities aligned
          with your future goals.
        </Typography>

        <Button
          sx={{
            width: "fit-content",
            borderRadius: "30px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            background: "linear-gradient(90deg, #ff4081, #ff1a75)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg, #ff1a75, #ff4081)",
            },
          }}
        >
          Start Planning Today
        </Button>
      </Box>

      {/* RIGHT IMAGE */}
      <Box sx={{ position: "relative", minHeight: 300 }}>
        <Image
          src="/images/study-banner.jpg" 
          alt="Study Abroad"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}