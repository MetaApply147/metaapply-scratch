"use client";

import Section from "@/components/common/Section";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  image: string;
};

export default function FranchisePartnerCTA({
  title,
  description,
  buttonText,
  image,
}: Props) {
  return (
    <Section spacing="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          borderRadius: {
            xs: "0 40px 0 40px",
            md: "0 80px 0 80px",
          },
        }}
      >
        {/* MAIN BOX */}
        <Box
          sx={{
            mt: {
              xs: 0,
              md: 7.5,
            },

            position: "relative",

            overflow: "hidden",

            borderRadius: {
              xs: "0 40px 0 40px",
              md: "0 80px 0 80px",
            },

            px: {
              xs: 3,
              sm: 5,
              md: 8,
              lg: 10,
            },

            pt: {
              xs: 5,
              md: 9,
            },

            pb: {
              xs: "340px",
              sm: "360px",
              md: 14.5,
            },

            display: "flex",

            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            background:
              "linear-gradient(263.14deg, #8547A1 2.19%, #000052 99.36%)",

            backgroundPosition: "bottom center",

            boxShadow: "20px 25px 75px 0px #00000040",

            minHeight: {
              xs: "720px",
              sm: "760px",
              md: "475px",
            },
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              position: "relative",

              zIndex: 5,

              maxWidth: {
                xs: "100%",
                md: "48%",
              },

              width: "100%",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "common.white",

                fontFamily: "Plus Jakarta Sans",

                fontWeight: 600,

                letterSpacing: "0%",

                fontSize: {
                  xs: "34px",
                  sm: "38px",
                  md: "40px",
                },

                lineHeight: {
                  xs: "46px",
                  sm: "50px",
                  md: "52px",
                },

                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              {title}
            </Typography>

            {description && (
              <Typography
                component="p"
                sx={{
                  color: "common.white",

                  mt: 2,

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                {description}
              </Typography>
            )}

            <Box
              sx={{
                display: "flex",

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mt: {
                    xs: 4,
                    md: 5,
                  },

                  width: {
                    xs: "100%",
                    sm: "315px",
                  },

                  maxWidth: "315px",

                  minHeight: "62px",

                  borderRadius: "16px",

                  px: "28px",

                  py: "21px",

                  textTransform: "none",

                  background: "#fff",

                  color: "#FF3185",

                  fontWeight: 600,

                  fontSize: "20px",

                  lineHeight: "100%",

                  boxShadow: "none",

                  "&:hover": {
                    background: "#fff",
                    boxShadow: "none",
                  },
                }}
              >
                {buttonText}
              </Button>
            </Box>
          </Box>

          {/* DECORATIVE CIRCLE */}
          <Box
            sx={{
              position: "absolute",

              width: {
                xs: 420,
                sm: 520,
                md: 700,
                lg: 839,
              },

              height: {
                xs: 420,
                sm: 520,
                md: 650,
                lg: 778,
              },

              borderRadius: "50%",

              right: {
                xs: -160,
                sm: -120,
                md: -120,
                lg: -175,
              },

              bottom: {
                xs: -120,
                sm: -150,
                md: -180,
                lg: -230,
              },

              background: "rgba(255,255,255,0.2)",

              zIndex: 0,

              "&::before": {
                content: '""',

                position: "absolute",

                inset: {
                  xs: "35px",
                  md: "58px",
                },

                background:
                  "linear-gradient(104.81deg, #FFC058 10.22%, #FF5EA0 89.54%)",

                borderRadius: "50%",
              },
            }}
          />
        </Box>

        {/* IMAGE */}
        <Box
          sx={{
            position: "absolute",

            right: {
              xs: "50%",
              md: 10,
              lg: -5,
            },

            transform: {
              xs: "translateX(50%)",
              md: "none",
            },

            bottom: 0,

            width: {
              xs: "300px",
              sm: "380px",
              md: "520px",
              lg: "598px",
            },

            height: {
              xs: "320px",
              sm: "420px",
              md: "500px",
              lg: "539px",
            },

            zIndex: 4,
          }}
        >
          <Image
            src={image}
            alt="Franchise Partner"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "bottom center",
            }}
          />
        </Box>
      </Box>
    </Section>
  );
}