"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

/* ================= TYPES ================= */

type MediaType = {
  url?: string;
};

type Props = {
  data: {
    title?: string;
    factItem?: string;
    factsButtonUrl?: string;
    map_embed_url?: string;
    centreAddress?: string;
    centreEmail?: string;
    centreHours?: string;
    gallerySection?: {
      image1?: MediaType;
    };
    centreImage?: {
        url?: string;
    }
  };
};

/* ================= BASE URL ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!BASE_URL) {
  throw new Error("Missing API URL");
}

const getImageUrl = (url?: string): string | null => {
  if (!url) return null;

  if (url.startsWith("http")) return url;

  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

/* ================= COMPONENT ================= */

export default function CentreFactsSection({ data }: Props) {
  const facts = data?.factItem?.split("\n\n")?.filter(Boolean) || [];

//   const imageUrl = getImageUrl(data?.gallerySection?.image1?.url);
  const imageUrl = getImageUrl(data?.centreImage?.url);

  return (
    <Box
      component="section"
      sx={{
        mx: { xs: 2, md: 4, lg: 5 },
        background: "url(/study-abroad/Background-2.webp)",
        borderRadius: "20px",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container>
        <Typography
          variant="heading07"
          component="h2"
          sx={{ lineHeight: "normal", textAlign: "center" }}
        >
          MetaApply Experience Centre{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
              fontFamily: "var(--font-centerHeading)",
            }}
          >
            {data.title?.split(/study abroad centre/i)[0].trim()}
          </Box>
        </Typography>

        {/* CONTENT */}
        <Box
          sx={{
            display: "flex",
            mt: 5,
            gap: 2
          }}
        >
          {/* LEFT IMAGE */}
          <Box sx={{
            display: 'flex',
          }}>
            <Box
              sx={{
                position: "relative",
                minHeight: {
                  xs: 350,
                  md: 588,
                },
                width: '50%',
                borderRadius: "0 16px 16px 0",
                overflow: "hidden",
              }}
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Centre"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>

            {/* FACTS */}
            <Box
              sx={{
                backgroundColor: "common.white",
                borderRadius: "0 16px 16px 0",
                py: {
                  xs: 2,
                  md: 2,
                },
                pl: 5.5,
                pr: 3.5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: 'calc(50% + 20px)',
                marginLeft: '-20px',
                boxShadow: "0px 20px 40px 0px #E7F1FF",
              }}
            >
              <Box>
                <Typography
                  variant="heading10"
                  component='h4'
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Facts
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {facts.map((fact, index) => {
                    const parts = fact.split("**");

                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          alignItems: "flex-start",
                        }}
                      >
                        <Image src="/centres/star-Vector.svg" alt="Star" height={18} width={18} style={{marginTop: '3px', objectFit: 'contain'}}/>

                        <Typography
                          variant="body06"
                          component='p'
                          sx={{
                            lineHeight: '24px',
                            color: "text.secondary",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontWeight: 700,
                              color: "#000",
                            }}
                          >
                            {parts[1]}
                          </Box>

                          {parts[2]}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              <Button
                variant="contained"
                href={data?.factsButtonUrl || "#"}
                size="large"
                sx={{
                  mt: 4,
                  mb: 1
                }}
              >
                Walk in Today
              </Button>
            </Box>
          </Box>

          {/* MAP + INFO */}
          <Box
            sx={{
              backgroundColor: "common.white",
              borderRadius: "16px 0 0 16px",
              p: 2.2,
              maxWidth: '367px',
              boxShadow: "0px 20px 40px 0px #E8F2FF"
            }}
          >
            {/* MAP */}
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                height: 282,
                mb: 3,
              }}
            >
              <iframe
                src={data?.map_embed_url}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                loading="lazy"
              />
            </Box>

            {/* INFO */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* ADDRESS */}
              <Box
                sx={{
                  display: "flex",
                  gap: '10px',
                }}
              >
                <Box sx={{width: '24px'}}>
                    <LocationOnIcon
                    sx={{
                        color: "primary.main",
                        mt: "1px",
                    }}
                    />
                </Box>

                <Typography variant="body06" color="#2E3185" component='p'>{data?.centreAddress}</Typography>
              </Box>

              {/* EMAIL */}
              <Box
                sx={{
                  display: "flex",
                  gap: '10px',
                }}
              >
                <Box sx={{width: '24px'}}>
                    <MailIcon
                    sx={{
                        color: "primary.main",
                        mt: "1px",
                        fontSize: 20
                    }}
                    />
                </Box>

                <Typography variant="body06" color="#2E3185" component='p'>{data?.centreEmail}</Typography>
              </Box>

              {/* HOURS */}
              <Box
                sx={{
                  display: "flex",
                  gap: '10px',
                }}
              >
                <Box sx={{width: '24px'}}>
                    <WatchLaterIcon
                    sx={{
                        color: "primary.main",
                        mt: "1px",
                        fontSize: 18
                    }}
                    />
                </Box>

                <Typography variant="body06" color="#2E3185" component='p'>{data?.centreHours}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
