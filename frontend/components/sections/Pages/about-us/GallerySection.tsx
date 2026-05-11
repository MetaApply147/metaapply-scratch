"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

/* ================= GALLERY IMAGES ================= */

const galleryImages = [
  {
    id: 1,
    image: "/about-us/gallery-1.svg",
    large: true,
  },
  {
    id: 2,
    image: "/about-us/gallery-2.svg",
  },
  {
    id: 3,
    image: "/about-us/gallery-3.svg",
  },
  {
    id: 4,
    image: "/about-us/gallery-4.svg",
  },
  {
    id: 5,
    image: "/about-us/gallery-5.svg",
  },
];

/* ================= NEWS LOGOS ================= */

const newsLogos = [
  "/about-us/news-img-1.svg",
  "/about-us/news-img-2.svg",
  "/about-us/news-img-3.svg",
  "/about-us/news-img-4.svg",
  "/about-us/news-img-5.svg",
  "/about-us/news-img-6.svg",
  "/about-us/news-img-7.svg",
  "/about-us/news-img-8.svg",
  "/about-us/news-img-9.svg",
  "/about-us/news-img-10.svg",
];

/* ================= COMPONENT ================= */

export default function GallerySection() {
  return (
    <Box>
      <Section spacing="lg">
        {/* ================= HEADING ================= */}

        <SectionHeader title="Our" highlight="Gallery" />

        {/* ================= GALLERY ================= */}

        <Box
          sx={{
            mt: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Grid container spacing={"14px"}>
            {/* LEFT LARGE IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: {
                    xs: "420px",
                    md: "570px",
                  },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={galleryImages[0].image}
                  alt="Gallery"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT GRID */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={"14px"}>
                {galleryImages.slice(1).map((item) => (
                  <Grid key={item.id} size={{ xs: 6 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: {
                          xs: "200px",
                          md: "278px",
                        },
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt="Gallery"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* ================= NEWS SECTION ================= */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 10,
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: {
              xs: "flex-start",
              lg: "center",
            },
            gap: {
              xs: 4,
              lg: 6,
            },
          }}
        >
          {/* LEFT TEXT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              minWidth: {
                lg: "260px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
                fontSize: {
                  xs: "28px",
                  md: "32px",
                },
                lineHeight: {
                  xs: "38px",
                  md: "42px",
                },
                color: "#061C2D",
              }}
            >
              <Box component="span" sx={{ color: "#FF3185" }}>
                MetaApply IE
              </Box>
              <br />
              in the News
            </Typography>

            {/* VERTICAL LINE */}
            <Box
              sx={{
                width: "2px",
                height: "140px",
                background:
                  "linear-gradient(180deg, rgba(255,49,133,0) 0%, #FF3185 50%, rgba(255,49,133,0) 100%)",
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
            />
          </Box>

          {/* LOGOS */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "54px",
            }}
          >
            {/* TOP ROW */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: {
                  xs: "32px",
                  md: "80px",
                },
              }}
            >
              {newsLogos.slice(0, 5).map((logo, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "120px",
                    height: "66px",
                  }}
                >
                  <Image
                    src={logo}
                    alt="News Logo"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* BOTTOM ROW */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: {
                  xs: "32px",
                  md: "72px",
                },
              }}
            >
              {newsLogos.slice(5).map((logo, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "120px",
                    height: "40px",
                  }}
                >
                  <Image
                    src={logo}
                    alt="News Logo"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Section>
    </Box>
  );
}