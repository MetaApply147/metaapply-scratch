"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";


type Props = {
  logo: string;
  showLogo?: boolean;
  title: string;
  highlight?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  ctaTarget?: "_self" | "_blank";
  textColor?: "light" | "dark";
  size?: "default" | "medium" | "large";
  slug? : string;
};

export default function BannerContent({
  logo,
  showLogo,
  title,
  highlight,
  description,
  ctaText,
  ctaUrl,
  ctaTarget = "_self",
  textColor = "dark",
  size = "default",
  slug
}: Props) {
  const color = textColor === "light" ? "common.white" : "navyBlue.700";

  const sizeStyles = {
    default: {
      lineHeight: { xs: 1.3, lg: 1.2 },
      fontSize: { xs: 36, sm: 46, md: 48, lg: 62 },
    },
    large: {
      lineHeight: { xs: 1.3, lg: 1.3 },
      fontSize: { xs: 36, sm: 46, md: 48, lg: 68 },
    },
    medium: {
      fontSize: "52px",
      lineHeight: "120%",
    },
  };
  return (
    <Box>
      {showLogo && logo && (
        <Box mb={2.5}>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={65}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "auto",
            }}
          />
        </Box>
      )}
      <Typography
        variant="heading03"
        component="h1"
        sx={{
          color,
          ...sizeStyles[size],
        }}
      >
        {title}{" "}
        {highlight && (
          <span
            style={{
              background:
                "linear-gradient(97.87deg, #EF3EFF -4.59%, #C83535 101.21%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block",
            }}
          >
            {highlight}
          </span>
        )}
      </Typography>

      {description &&
        (slug === "study-abroad" ? (
          <Box mt={4} mb={7}>
            {description.split("\n").map((line: string, i: number) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                  mb: 1.5,
                }}
              >
                <Box sx={{height: {xs: 18, sm: 20}, width: {xs: 18, sm: 20}, position: 'relative', mt: '5px'}}>
                    <Image src='../green-circle-check.svg' fill alt="Check" style={{objectFit: 'contain'}}/>
                </Box>
                <Typography
                  color={
                    textColor === "light" ? "common.white" : "text.secondary"
                  }
                  variant="heading12"
                  component="p"
                  fontWeight={400}
                  sx={{ fontSize: { xs: 18, sm: 20 } }}
                >
                  {line}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography
            mt={2}
            mb={7}
            color={textColor === "light" ? "common.white" : "text.secondary"}
            variant="heading12"
            component="p"
            fontWeight={400}
            sx={{ fontSize: { xs: 18, sm: 20 } }}
          >
            {description}
          </Typography>
      ))}

      {ctaText && ctaUrl && (
        <Button
          href={ctaUrl}
          target={ctaTarget}
          variant="contained"
          size="large"
        >
          {ctaText}
        </Button>
      )}
    </Box>
  );
}
