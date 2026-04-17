"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const getImageUrl = (url?: string) => {
  if (!url) return "";
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

const EventDescription = ({ event }: any) => {
  return (
    <Box>
      <Box sx={{ height: "440px", width: "100%", position: "relative" }}>
        <Image
          src={getImageUrl(event.featuredImage?.url)}
          alt=""
          fill
          style={{
            borderRadius: "12px",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.15)",
          }}
        />
      </Box>

      <Typography variant="heading09" component='h2' mt={3} mb={2}>
        {event.eventTitle}
      </Typography>

      <Typography
        variant="body05"
        component='div'
        sx={{
            color: 'text.secondary',
            whiteSpace: 'pre-line'
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: event.description }} />
      </Typography>
    </Box>
  );
};

export default EventDescription;
