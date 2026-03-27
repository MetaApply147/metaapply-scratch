'use client';

import { useEffect, useState } from "react";
import { getServices } from "@/services/httpServices";
import CustomSlider from "@/components/common/CustomSlider";
import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

type Props = {
  page: string;
  type?: string;
  limit?: number;
};

export default function SuccessStories({ page, type, limit }: Props) {
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

    // 🎥 VIDEO CARD
    if (comp.__component === "success-story.video-story") {
      const image =
        process.env.NEXT_PUBLIC_STRAPI_URL +
        comp.thumbnail?.url;

      return (
        <Box sx={{borderRadius: 4, overflow: "hidden", boxShadow: 2}}>
          <Box position="relative">
            <Box position="relative" sx={{ width: "100%", height: 250 }}>
              <Image
                src={image}
                alt={item.title}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "4 4 0 0",
                }}
              />
            </Box>

            <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",}}>
              <Box sx={{bgcolor: "#fff", borderRadius: "50%", p: 2, boxShadow: 3, cursor: "pointer", height: 20, width: 20, display: "flex", alignItems: "center", justifyContent: "center"}}>
                ▶
              </Box>
            </Box>
          </Box>

          <Box p={3.5} sx={{borderRadius: 4}}>
            <Typography variant="body05" component="p" color="#4B4B4B">
              {item.description}
            </Typography>

            <Typography variant="heading12" fontWeight={600} component="p" sx={{color: "primary.main"}} mt={2}>
              {item.title}
            </Typography>

            <Typography variant="body05" sx={{color: "primary.main"}}>
              {item.role}
            </Typography>
          </Box>
        </Box>
      );
    }

    // TESTIMONIAL CARD
    if (comp.__component === "success-story.testimonial-story") {
      return (
        <Box className="testimonial-card" borderRadius={3} sx={{display: "flex"}}>
          <Box>“</Box>
          <Box p={4} pt={6} sx={{ background: comp.backgroundColor, display: "flex", flexDirection: "column", justifyContent: "space-between" }}> 
            <Typography variant="body05" component="p" fontWeight={600}>
              {item.description}
            </Typography>

            <Box mt={2}>
              <Typography variant="heading12" fontWeight={600} component="p">
                {item.title}
              </Typography>

              <Typography variant="body05">
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
    <Section spacing="lg">
      <SectionHeader
        title="Our"
        highlight="Success Stories"
      />
      <Box
        sx={{
          '& .swiper-slide:nth-of-type(odd) .testimonial-card': {
            background: 'linear-gradient(135deg, #FFE5F0, #FFCCE1)',
            color: '#cc276a',
          },
          '& .swiper-slide:nth-of-type(even) .testimonial-card': {
            background: 'linear-gradient(135deg, #E5E6FF, #C0C2FF)',
            color: '#222466',
          },
        }}
      >
        <CustomSlider
          data={stories}
          renderItem={renderItem}
          slidesPerView={3}
          spaceBetween={24}
          showArrows={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }} 
        />
      </Box>
    </Section>
  );
}