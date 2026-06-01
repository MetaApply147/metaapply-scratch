"use client";

import { Box, Container } from "@mui/material";

type Props = {
  left: React.ReactNode;
  right?: React.ReactNode;
  reverse?: boolean;
  backgroundImage?: string;
  minHeight?: number;
  overlay?: boolean;
  disableSectionPadding?: boolean;
  rightMaxWidth?: number | string;
  alignSelf?: string;
  width?: string;
};

export default function BaseBanner({
  left,
  right,
  reverse = false,
  backgroundImage,
  minHeight = 200,
  overlay = false,
  disableSectionPadding = false,
  rightMaxWidth,
  alignSelf,
  width,
}: Props) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: disableSectionPadding ? 0 : 9.5,
        minHeight,
        display: "flex",
        px: { xs: 2, sm: 3, md: 0 },
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      {overlay && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: 'url(/study-abroad/Inner-pages/shadow.webp)',
            zIndex: 0,
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%'
          }}
        />
      )}

      <Container sx={{ position: "relative", zIndex: 2 }}>
       <Box
  sx={{
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: reverse ? "row-reverse" : "row",
    },
    alignItems: "center",
    justifyContent: "space-between",
    gap: { xs: 4, md: 6, lg: 8 },
    height: "100%",
    width: "100%",
    // py: { xs: 4, md: 6, lg: 0 },
  }}
>
          <Box
  flex={width ? "none" : 1}
  sx={{
    width: {
      xs: "100%",
      lg: width || "auto",
    },
    textAlign: {
      xs: "left",
      lg: "left",
    },
  }}
>
            {left}
          </Box>

          {right && (
            <Box
  sx={{
    alignSelf: {
      xs: "center",
      lg: alignSelf,
    },
    textAlign: "center",
    maxWidth: {
      xs: "100%",
      lg: rightMaxWidth || "100%",
    },
    width: {
      xs: "100%",
      lg: rightMaxWidth  || "auto",
    },
    display: "flex",
    justifyContent: "center",
  }}
>
              {right}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
