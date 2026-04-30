import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  title: string;
  highlight?: string;
  image: string;
  borderColor: string;
  shadowColor: string;
  innerBg: string;
  children: React.ReactNode;
  highlightPosition?: "start";
  topContent?: React.ReactNode;
  Imagewidth?: string;
};

export default function InfoSectionCard({
  title,
  highlight,
  image,
  borderColor,
  shadowColor,
  innerBg,
  children,
  highlightPosition,
  topContent,
  Imagewidth= "79px"
}: Props) {
  const isStart = highlightPosition === "start";
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        border: `1px solid ${borderColor}`,
        borderRadius: "20px",
        boxShadow: `0px 4px 20px 0px ${shadowColor}`,
        px: 4.5,
        pt: 2,
        pb: 3.5,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="heading09" component="h3">
          {highlight && isStart && (
            <Box component="span" sx={{ color: "primary.main" }}>
              {highlight}{" "}
            </Box>
          )}
          {title} {" "}
          {highlight && !isStart && (
            <Box component="span" sx={{ color: "primary.main" }}>
              {highlight}{" "}
            </Box>
          )}
        </Typography>

        <Box sx={{ height: 100, width: Imagewidth, position: "relative" }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>

      {topContent && <Box>{topContent}</Box>}

      <Box
        sx={{
          background: innerBg,
          borderRadius: "16px",
          pt: 4,
          pb: 2,
          pl: 3.75,
          pr: 6.5,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
