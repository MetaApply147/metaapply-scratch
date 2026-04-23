"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { Grid } from "@mui/material";
import Section from "@/components/common/Section";
import BlogDetailsHero from "./BlogDetailsHero";
import DOMPurify from "isomorphic-dompurify";

const cleanHTML = (html: string) => {
  if (!html) return "";

  let formatted = html;

  //  Convert markdown images → HTML
  formatted = formatted.replace(/!\[(.*?)\]\((.*?)\)/g, (_, alt, src) => {
    const fullSrc = src.startsWith("http")
      ? src
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`;
    return `<img src="${fullSrc}" alt="${alt}" />`;
  });

  //  Convert paragraphs
  formatted = formatted
    .split(/\n\s*\n/)
    .map((block) => {
      const trimmed = block.trim();

      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<img")
      ) {
        return trimmed;
      }

      return `<p>${trimmed}</p>`;
    })
    .join("");

  //3. Sanitize
  return DOMPurify.sanitize(formatted);
};

const getImage = (url?: string) =>
  url?.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

export default function BlogDetailsContent({ blog, sidebar }: any) {
  return (
    <Section
      spacing="lg"
      sx={{
        position: "relative",
        pb: '0 !important',
        "&:before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "10%",
          top: 0,
          left: 0,
          background: "linear-gradient(180deg, #e2e8f0 , transparent)",
          borderRadius: "20px 20px 0 0",
          zIndex: -1,
        },
      }}
    >
      {/* Title */}
      <BlogDetailsHero blog={blog} />

      <Grid container spacing={6} mt={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              position: "relative",
              height: 450,
              borderRadius: "10px",
              overflow: "hidden",
              mb: 4,
              boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src={getImage(blog.featuredImage?.url)}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Box
            dangerouslySetInnerHTML={{
              __html: cleanHTML(blog.content),
            }}
            sx={{
              "&, & *": {
                fontFamily: "var(--font-body) !important",
              },
              "& p": {
                lineHeight: 1.5,
                mb: 2,
              },
              "& h2": {
                fontSize: 24,
                fontFamily: "var(--font-heading) !important",
                fontWeight: 700,
                pt: 1.8,
                mb: 1.5,
              },
              "& h3": {
                fontSize: 18,
                fontFamily: "var(--font-heading) !important",
                fontWeight: 700,
                mb: 1,
              },
              "& a": {
                color: "#cc276a",
                fontWeight: 500,
              },
              "& ul": {
                listStyleType: "disc",
                paddingLeft: "28px",
                marginBottom: "24px",
              },

              "& ol": {
                listStyleType: "decimal",
                paddingLeft: "28px",
                marginBottom: "24px",
              },
              "& li": {
                lineHeight: "normal",
                paddingBottom: "6px",
              },
              "& p:empty": {
                display: "none",
              },
              "& img": {
                width: "100%",
                maxWidth: "550px",
                margin: "16px 0",
              },
              "& .table-responsive": {
                width: "100%",
                overflowX: "auto",
              },
              "& table": {
                width: "100%",
                minWidth: "500px",
              },
              "& thead": {
                backgroundColor: "#222466",
              },

              "& th": {
                textAlign: "left",
                color: "common.white",
                fontSize: '18px',
                fontWeight: 700,
                padding: "15px",
                border: "1px solid #C0C0C0",
              },

              "& td": {
                padding: "14px 15px",
                border: "1px solid #C0C0C0",
              },

              "& tbody tr:nth-of-type(odd)": {
                backgroundColor: "#f8fafc",
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>{sidebar}</Grid>
      </Grid>
    </Section>
  );
}