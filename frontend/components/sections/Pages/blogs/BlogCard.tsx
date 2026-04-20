"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const getImage = (url?: string) =>
  url?.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

const truncateChars = (text: string = "", limit: number = 80): string => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const getBlogDescription = (blog: any) => {
  if (blog.excerpt?.trim()) return blog.excerpt;

  if (blog.content) {
    const plainText = blog.content
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const words = plainText.split(" ").slice(0, 25);

    return words.join(" ") + "...";
  }

  return "Read full blog article now.";
};

export default function BlogCard({ blog }: any) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          backgroundColor: "common.white",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          height: "100%",
        }}
      >
        <Box
          sx={{
            minHeight: 240,
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={getImage(blog.featuredImage?.url)}
            alt={blog.title}
            fill
            style={{
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        </Box>

        <Box mt={4} sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <Typography
            component="h5"
            variant="heading12"
            mb={1.5}
            sx={{ lineHeight: "140%" }}
          >
            {truncateChars(blog.title, 55)}
          </Typography>

          <Typography
            component="p"
            variant="body05"
            mb={1}
            sx={{ color: "text.secondary" }}
          >
            {getBlogDescription(blog)}
          </Typography>

          <Box
             pt={3}
            sx={{ display: "flex", alignItems: "center", gap: "12px", mt: 'auto' }}
          >
            <Box sx={{ height: "40px", width: "40px", position: "relative" }}>
              <Image
                src={getImage(blog.author.image?.url)}
                alt={blog.author.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Typography variant="body05" component='p'>{blog.author.name}</Typography>
              <Typography
                variant="body06"
                component="p"
                sx={{
                  color: "gray.700",
                }}
              >
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                | 5 min read
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
