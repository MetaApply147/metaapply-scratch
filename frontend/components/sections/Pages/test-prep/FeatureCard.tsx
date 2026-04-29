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
        width: "422px",
        height: "250px",
        borderRadius: "48px",

        background: `linear-gradient(
          135deg,
          ${palette.violet[50]} 0%,
          ${palette.common.white} 100%
        )`,

        boxShadow: "0px 2px 4px -1px rgba(28, 33, 51, 0.10)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            width: "129px",
            height: "146px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
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
            }}
          />
        </Box>

        <Box
          sx={{
            width: "248px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "24px",
              color: palette.navyBlue[400],
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 400,
              color: palette.text.body,
              fontFamily: "Open Sans",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}