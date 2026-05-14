
"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import CallIcon from "@mui/icons-material/CallOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StudyCenter } from "./Pages/about-us/studyCentresData";


type Props = {
  item: StudyCenter;
  buttonText?: string;
};

export default function StudyCentreCard({
  item,
  buttonText = "Know More",
}: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: 190,
            sm: 200,
          },
        }}
      >
        <Image
          src={item.image}
          alt={item.city}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          p: "20px",
          flexGrow: 1,
        }}
      >
        {/* TITLE */}
        <Box>
          <Typography
            variant="heading12"
            component='h6'
          >
            {item.city}
          </Typography>

          <Typography
            variant="body07"
            component='p'
            sx={{
              color: "text.secondary",
            }}
          >
            {item.state}
          </Typography>
        </Box>

        {/* PHONE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CallIcon
            sx={{
              fontSize: 16,
              color: "#FF2E83",
            }}
          />

          <Typography
            variant="body07"
            component='p'
            sx={{
              color: "text.secondary",
            }}
          >
            {item.phone}
          </Typography>
        </Box>

        {/* ADDRESS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <LocationOnIcon
            sx={{
              fontSize: 16,
              color: "#FF2E83",
              mt: "2px",
            }}
          />

          <Typography
            variant="body07"
            component='p'
            sx={{
              color: "text.secondary",
            }}
          >
            {item.address}
          </Typography>
        </Box>

        {/* BUTTON */}
        <Button
          fullWidth
          variant="outlined"
          size="medium"
          sx={{mt: 1.5, fontWeight: 500}}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}