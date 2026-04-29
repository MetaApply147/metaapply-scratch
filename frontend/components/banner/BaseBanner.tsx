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
              md: reverse ? "row-reverse" : "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            height: "100%",
          }}
        >
          <Box
            flex={width ? "none" : 1}
            sx={{
              width: width || "auto",
            }}
          >
            {left}
          </Box>

          {right && (
            <Box
              sx={{
                alignSelf: alignSelf,
                textAlign: "right",
                maxWidth: rightMaxWidth || "100%",
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
