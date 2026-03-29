'use client';

import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

export default function PlanYourJourney() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "navyBlue.600",
        borderRadius: "24px",
        overflow: "hidden",
        mx: "30px",
      }}
    >
      {/* LEFT CONTENT (INSIDE CONTAINER) */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "common.white",
              py: { xs: 5, md: 15 },
              zIndex: 2,
            }}
          >
            <Typography variant="heading06" component="h2" lineHeight={1.1} sx={{maxWidth: "90%"}}>
              Plan Your Complete{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Study Abroad Journey
              </Box>{" "}
               With Us!
            </Typography>

            <Typography
              variant="body05"
              sx={{ maxWidth: "80%" }}
              mt={2.5}
              mb={5}
            >
              Explore the right destinations, programmes, and opportunities aligned
              with your future goals.
            </Typography>

            <Button variant="contained" size="large" sx={{ width: "max-content" }}>
              Start Planning Today
            </Button>
          </Box>
        </Box>
      </Container>

      {/* RIGHT IMAGE (FULL BLEED) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "100%", md: "50%" },
          height: "100%",
        }}
      >
        <Image
          src="/Home/student_with_degree.webp"
          alt="Study Abroad"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "0 24px 24px 0",
          }}
        />
      </Box>
    </Box>
  );
}