import { Box, Typography } from "@mui/material";
import Image from "next/image";
import palette from "@/theme/palette";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function FeatureCard({
  title,
  description,
  image,
}: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "520px",
          md: "100%",
          lg: "422px",
        },

        minHeight: {
          xs: "auto",
          md: "250px",
        },

        borderRadius: {
          xs: "32px",
          md: "48px",
        },

        background: `linear-gradient(
          135deg,
          ${palette.violet[50]} 0%,
          ${palette.common.white} 100%
        )`,

        boxShadow: "0px 2px 4px -1px rgba(28, 33, 51, 0.10)",

        overflow: "hidden",

        display: "flex",
        alignItems: "center",

        px: {
          xs: 3,
          sm: 4,
          md: 0,
        },

        py: {
          xs: 3,
          md: 0,
        },

        mx: "auto",

        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          alignItems: {
            xs: "center",
            sm: "center",
          },

          width: "100%",

          gap: {
            xs: "20px",
            sm: "24px",
          },

          textAlign: {
            xs: "center",
            sm: "left",
          },

          p: {
            md: "0 32px",
          },
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            width: {
              xs: "110px",
              md: "129px",
            },

            height: {
              xs: "120px",
              md: "146px",
            },

            flexShrink: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={image}
            alt={title}
            width={129}
            height={146}
            style={{
              objectFit: "contain",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            flex: 1,

            display: "flex",
            flexDirection: "column",

            gap: {
              xs: "10px",
              md: "12px",
            },

            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                md: "18px",
              },

              fontWeight: 600,

              lineHeight: {
                xs: "30px",
                md: "24px",
              },

              color: palette.navyBlue[400],
              fontFamily: "Plus Jakarta Sans",

              wordBreak: "break-word",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: {
                xs: "26px",
                md: "20px",
              },

              fontWeight: 400,

              color: palette.text.body,
              fontFamily: "Open Sans",

              wordBreak: "break-word",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}