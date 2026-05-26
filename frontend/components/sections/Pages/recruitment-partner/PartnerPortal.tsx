"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SectionHeader from "@/components/common/SectionHeader";

export default function PartnerPortalSection() {
  const features = [
    "Real-Time Application Tracking",
    "Easy Student Management",
    "Access Anytime, Anywhere",
  ];

  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 12,
        },

        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column",
              lg: "row",
            },

            alignItems: "center",

            justifyContent: "space-between",

            gap: {
              xs: 8,
              lg: "80px",
            },
          }}
        >
          {/* LEFT IMAGE SECTION */}
          <Box
            sx={{
              position: "relative",

              width: {
                xs: "100%",
                md: "450px",
              },

              height: {
                xs: "380px",
                md: "570px",
              },

              flexShrink: 0,
            }}
          >
            <Image
                src="/recruitment-partner/desktop-img.svg"
                alt="Desktop Portal"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
          </Box>

          {/* RIGHT CONTENT */}
          <Box
            sx={{
              flex: 1,

              maxWidth: "690px",
            }}
          >
            <SectionHeader
                      title="Manage Everything with"
                      highlight="MetaApply Partner Portal"
                    />

            {/* DESCRIPTION */}
            <Typography
              sx={{
                mt: 4,

                maxWidth: "689px",

                fontFamily: "Open Sans",

                fontWeight: 400,

                fontSize: "16px",

                lineHeight: "24px",

                color: "#202020",
              }}
            >
              Manage your entire student recruitment journey in one place with
              our Partner Portal. From registering students and submitting
              applications to tracking progress, everything can be handled
              seamlessly through a single platform available on both desktop and
              mobile.
            </Typography>

            {/* FEATURES */}
            <Stack
              spacing={2}
              sx={{
                mt: 4,
              }}
            >
              {features.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#2ECC71",
                      fontSize: 16,
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "Open Sans",

                      fontWeight: 400,

                      fontSize: "16px",

                      lineHeight: "100%",

                      color: "#202020",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* DOWNLOAD BUTTONS */}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                flexWrap: "wrap",

                gap: "18px",

                mt: 6,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans",

                  fontWeight: 600,

                  fontSize: "16px",

                  lineHeight: "48px",

                  color: "#031521",
                }}
              >
                Download Now
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Button
                  sx={{
                    p: 0,
                    minWidth: "unset",
                  }}
                >
                  <Image
                    src="/recruitment-partner/G-Play.svg"
                    alt="Google Play"
                    width={140}
                    height={40}
                  />
                </Button>

                <Button
                  sx={{
                    p: 0,
                    minWidth: "unset",
                  }}
                >
                  <Image
                    src="/recruitment-partner/App-Store.svg"
                    alt="App Store"
                    width={140}
                    height={40}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}