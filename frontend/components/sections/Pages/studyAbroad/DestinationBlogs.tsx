"use client";

import { Box, Typography, Grid, Button } from "@mui/material";
import BlogCard from "../blogs/BlogCard";
import { useEffect, useState } from "react";
import { fetchBlogsByTag } from "@/services/blogs";
import CustomSlider from "@/components/common/CustomSlider";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

type Props = {
  destinationTitle: string;
  countryName?: string;
};

export default function DestinationBlogs({
  destinationTitle,
  countryName,
}: Props) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogsByTag(destinationTitle, 15);
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (destinationTitle) {
      getBlogs();
    }
  }, [destinationTitle]);

  if (loading) return null;
  if (!blogs.length) return null;

  return (
    <Section spacing="lg">
      <SectionHeader
        title="Know Before you Go to"
        highlight={`${countryName}`}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
            gap: "20px",
            width: "100%",
          },
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <CustomSlider
            data={blogs}
            slidesPerView={2}
            spaceBetween={10}
            autoplay={true}
            showArrows={false}
            loop={true}
            showPagination={false}
            renderItem={(blog) => <BlogCard blog={blog} />}
          />
        </Box>
        <Box
          sx={{
            background: "url(/study-abroad/blue-cover.svg) no-repeat center",
            backgroundSize: "cover",
            color: "common.white",
            borderRadius: "16px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            pl: 4.5,
            pr: 3
          }}
        >
          <Typography
            variant="heading09"
            component="h3"
            mb={5}
            sx={{ lineHeight: "41.41px", fontWeight: 500 }}
          >
            Gather more information about your preferred destination in our
            latest blogs. Explore tips, insights, and opportunities before
            making the right decision.
          </Typography>
          <Button variant="contained" size="large">
            Explore Now
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
