"use client";

import { useEffect, useState } from "react";
import BaseBanner from "./BaseBanner";
import { getServices } from "@/services/httpServices";
import { Box, Container, Typography } from "@mui/material";

type Props = {
  slug?: string;
  heroData?: any;
  minHeight?: any;
  disableSectionPadding?: boolean;
};

export default function CentreTextHeroSection({
  slug,
  heroData,
  minHeight,
  disableSectionPadding,
}: Props) {
  const [hero, setHero] = useState<any>(null);

  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  useEffect(() => {
    if (heroData) {
      setHero(heroData);
      return;
    }

    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await getServices("/pages", {
          filters: {
            slug: {
              $eq: slug,
            },
          },
          populate: {
            hero: {
              populate: "*",
            },
          },
        });

        if (res?.isSuccess) {
          const page = res?.data?.data?.[0];
          setHero(page?.hero);
        }
      } catch (error) {
        console.error("Hero fetch error:", error);
      }
    };

    fetchData();
  }, [slug, heroData]);

  const getImageUrl = (media: any) => {
    if (!media?.url) return "";
    if (media.url.startsWith("http")) return media.url;
    return `${BASE_URL}${media.url}`;
  };

  if (!hero) return null;

  const title = hero?.title || "";
  const highlight = hero?.highlight || "";
  const description = hero?.description || "";
  const textColor = hero?.textColor || "dark";

  const backgroundImage = getImageUrl(hero?.backgroundImage);

  const color = textColor === "light" ? "common.white" : "navyBlue.700";

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
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <Typography
            variant="heading04"
            component="h1"
            sx={{
              color,
              textTransform: 'uppercase',
              fontWeight: 800,
              lineHeight: '72px',
              pb: 2
            }}
          >
            {title}{" "}
            {highlight && (
              <span
                style={{
                  background:
                    "linear-gradient(97.87deg, #EF3EFF -4.59%, #C83535 101.21%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                {highlight}
              </span>
            )}
          </Typography>

          {description && (
            <Typography
              color={textColor === "light" ? "common.white" : "text.secondary"}
              variant="body03"
              component="p"
              sx={{
                fontStyle: 'italic',
                fontWeight: 600
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
