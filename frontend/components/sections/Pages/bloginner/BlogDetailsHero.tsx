"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const getImage = (url?: string) =>
  url?.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

export default function BlogDetailsHero({ blog }: any) {
  return (
    <Box>
      <Typography variant="heading08" component="h1">
        {blog.title}
      </Typography>
      <Box
        pt={2}
        sx={{ display: "flex", alignItems: "center", gap: "12px", mt: "auto" }}
      >
        <Box sx={{ height: "48px", width: "48px", position: "relative" }}>
          <Image
            src={getImage(blog.author.image?.url)}
            alt={blog.author.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography variant="body06" component="p" fontWeight={600}>
            {blog.author.name}
          </Typography>
          <Typography
            variant="body07"
            component="p"
          > Published on
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}