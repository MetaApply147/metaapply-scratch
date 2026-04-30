"use client";

import Section from "@/components/common/Section";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    image: string;
    ImageWidth?: string;
}

export default function CTASectionCommon({title, description, buttonText, buttonUrl, image, ImageWidth}: Props) {
  return (
    <Section spacing="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          borderRadius: "0 80px 0 80px",
        }}
      >
        <Box
          sx={{
            mt: 11,
            position: "relative",
            overflow: 'hidden',
            borderRadius: "0 80px 0 80px",
            px: { xs: 4, md: 10 },
            pt: { xs: 5, md: 9 },
            pb: { xs: 5, md: 14.5 },
            display: "flex",
            alignItems: "center",
            background: 'linear-gradient(263.14deg, #8547A1 2.19%, #000052 99.36%)',
            backgroundPosition: "bottom center",
            boxShadow: "20px 25px 75px 0px #00000040",
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 5,
              maxWidth: { xs: "100%", md: 470 },
            }}
          >
            <Typography
              variant="heading07"
              component="h2"
              sx={{ color: "common.white" }}
              mb={2.5}
            >
              {title}
            </Typography>

            <Typography
              variant="body05"
              component="p"
              sx={{ color: "common.white" }}
              mb={5}
            >
              {description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#fff",
                color: "primary.main",
                fontWeight: 600,
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>

          {/* Decorative Circle */}
          <Box
            sx={{
              position: "absolute",
              width: 839,
              height: 778,
              borderRadius: "50%",
              right: -224,
              top: 86,
              background: "rgba(255,255,255,0.2)",
              zIndex: 0,
            }}
          />
        </Box>
        {/* Student Image */}
        <Box
          sx={{
            position: "absolute",
            right: 50,
            bottom: 0,
            width: ImageWidth ? ImageWidth : '400px',
            height: { xs: 360, md: 535 },
            zIndex: 4,
          }}
        >
          <Image
            src={image}
            alt="Graduate Student"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom right",
            }}
            priority
          />
        </Box>
      </Box>
    </Section>
  );
}