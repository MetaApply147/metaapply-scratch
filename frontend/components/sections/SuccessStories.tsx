"use client";

import { useEffect, useState } from "react";
import { getServices } from "@/services/httpServices";
import CustomSlider from "@/components/common/CustomSlider";
import { Box, Button, Typography } from "@mui/material";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  page: string;
  type?: string;
  limit?: number;
  bgColor?: string;

  cta?: {
    label: string;
    link: string;
  };
};

export default function SuccessStories({
  page,
  type,
  limit,
  bgColor,
  cta,
}: Props) {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const params: any = {
        "populate[content][populate]": "*",
        sort: "order:asc",
        "filters[page][$eq]": page,
      };

      if (type) {
        params["filters[type][$eq]"] = type;
      }

      if (limit) {
        params["pagination[limit]"] = limit;
      }

      const res = await getServices("/success-stories", params);

      if (res.isSuccess) {
        setStories(res.data.data || []);
      }
    };

    fetchData();
  }, [page, type, limit]);

  // MOVE YOUR EXISTING UI HERE (NO CHANGE)
  const renderItem = (item: any) => {
    const comp = item.content?.[0];
    if (!comp) return null;

    //  VIDEO CARD
    if (comp.__component === "success-story.video-story") {
      const embedUrl = item.content?.[0]?.videoUrl
        ?.replace("watch?v=", "embed/")
        ?.replace("youtu.be/", "youtube.com/embed/");

      return (
        <Box
          sx={{
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              minHeight: { xs: 180, sm: 150, md: 180, lg: 240 },
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={item.content?.[0]?.videoUrl?.replace("watch?v=", "embed/")}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: 0,
                borderRadius: "16px 16px 0 0",
              }}
            />
          </Box>

          <Box
            sx={{
              borderRadius: 4,
              boxShadow: `0px 8.19px 18.43px 0px #A1A1A11A, 0px 137.23px 55.3px 0px #A1A1A103`,
              p: { xs: 2.5, lg: 3.5 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box display="flex" gap={0}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} sx={{ color: "orange.main" }} />
                ))}
              </Box>

              <Typography mt={1} variant="body05" component="p" color="#4B4B4B" >
                {item.description}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="heading12"
                component="p"
                sx={{ color: "primary.main", fontSize: { xs: 18, sm: 20 } }}
                mt={2}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body05"
                sx={{ color: "primary.main", fontSize: { xs: 14, sm: 16 } }}
              >
                {item.role}
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    }

    // TESTIMONIAL CARD
    if (comp.__component === "success-story.testimonial-story") {
      return (
        <Box
          className="testimonial-card"
          borderRadius={3}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Box
            p={3}
            py={3.5}
            sx={{
              background: comp.backgroundColor,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Typography variant="body05" component="p">
                {item.description}
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography
                variant="heading13"
                component="p"
                sx={{ color: "#FF3185" }}
              >
                {item.title}
              </Typography>

              <Typography variant="body05" sx={{ color: "#FF3185" }}>
                {item.role}
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    }

    return null;
  };

  // ONLY CHANGE IS HERE
  return (
    <Section spacing="lg" sx={{ backgroundColor: bgColor }}>
      <SectionHeader title="Our" highlight="Success Stories" />
      <Box
        sx={{
          "& .swiper-slide:nth-of-type(odd) .testimonial-card": {
            background:
              "linear-gradient(149.75deg, #FFF3F8 8.52%, #FFFFFF 104.28%)",
            color: "#202020",
          },
          "& .swiper-slide:nth-of-type(even) .testimonial-card": {
            background:
              "linear-gradient(149.75deg, #FFF3F8 8.52%, #FFFFFF 104.28%)",
            color: "#202020",
          },
        }}
      >
        <CustomSlider
          data={stories}
          renderItem={renderItem}
          slidesPerView={3}
          spaceBetween={0}
          showArrows={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        />
      </Box>

      {/* optional CTA Button */}
      {cta && (
        <Box textAlign="center" mt={7}>
          <Link href={cta.link}>
            <Button variant="contained" size="large">
              {cta.label}
            </Button>
          </Link>
        </Box>
      )}
    </Section>
  );
}
