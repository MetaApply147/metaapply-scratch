"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

/* ================= TYPES ================= */

type CentreHeadMessageType = {
  show_section?: boolean;
  description?: string;
  centreHeadName?: string;
  centreHeadDesignation?: string;
  centreHeadImage?: {
    url?: string;
  };
};

type Props = {
  centreHeadMessage?: CentreHeadMessageType;
};

/* ================= BASE URL ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const getImageUrl = (url?: string): string | null => {
  if (!url) return null;

  if (url.startsWith("http")) return url;

  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

/* ================= COMPONENT ================= */

export default function CentreHeadMessage({
  centreHeadMessage,
}: Props) {

  // TOGGLE FROM STRAPI
  if (!centreHeadMessage?.show_section) {
    return null;
  }

  const imageUrl = getImageUrl(
    centreHeadMessage?.centreHeadImage?.url
  );

  return (
    <Section spacing="lg" 
      sx={{
          background: "rgb(245 245 245 / 40%)",
          overflow: "hidden",
          position: "relative",
        }}>
      {/* <Box
        sx={{
          background: "rgb(245 245 245 / 40%)",
          overflow: "hidden",
          position: "relative",
        }}
       > */}
        {/* <Container maxWidth="xl"> */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              alignItems: "center",
              minHeight: {
                xs: "auto",
                md: 500,
              },
            }}
          >
            {/* LEFT CONTENT */}

            <Box
              sx={{
                py: {
                  xs: 6,
                  md: 8,
                },
                pr: {
                  md: 6,
                },
              }}
            >
              <SectionHeader
                title="Message From"
                highlight="Centre Head"
                mb="2"
              />

              {centreHeadMessage?.description && (
                <Typography
                  component="div"
                  variant="body05"
                  sx={{
                    mt: 3,
                    color: "text.secondary",
                    whiteSpace: 'pre-line',

                    "& p": {
                      mb: 3,
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: centreHeadMessage.description,
                  }}
                />
              )}

              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="body05"
                  fontWeight={700}
                  component='p'
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {centreHeadMessage?.centreHeadName}
                </Typography>

                <Typography
                  variant="body06"
                  component='p'
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {centreHeadMessage?.centreHeadDesignation}
                </Typography>
              </Box>
            </Box>

            {/* RIGHT IMAGE */}

            <Box
              sx={{
                position: "relative",
                height: {
                  xs: 420,
                  md: 500,
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >

              {/* IMAGE */}

              {imageUrl && (
                <Box
                  sx={{
                    position: "relative",
                    width: {
                      xs: 280,
                      md: 368,
                    },
                    height: "100%",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt="Centre Head"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "bottom center",
                    }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        {/* </Container> */}
      {/* </Box> */}
    </Section>
  );
}