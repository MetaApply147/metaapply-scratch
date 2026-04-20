"use client";

import {
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const getImage = (url?: string) =>
  url?.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

export default function BlogCard({
  blog,
}: any) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      style={{
        textDecoration:
          "none",
      }}
    >
      <Box
        sx={{
          background:
            "#fff",
          borderRadius:
            "18px",
          overflow:
            "hidden",
          boxShadow:
            "0 8px 20px rgba(0,0,0,.06)",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: 220,
            position:
              "relative",
          }}
        >
          <Image
            src={getImage(
              blog
                .featuredImage
                ?.url
            )}
            alt={
              blog.title
            }
            fill
            style={{
              objectFit:
                "cover",
            }}
          />
        </Box>

        <Box p={3}>
          <Typography
            fontWeight={700}
            fontSize={20}
            mb={1}
          >
            {blog.title}
          </Typography>

          <Typography
            fontSize={14}
            color="#666"
          >
            {new Date(
              blog.publishedAt
            ).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}