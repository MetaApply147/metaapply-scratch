'use client';

import { useEffect, useState } from "react";
import { getServices } from "@/services/httpServices";
import CustomSlider from "@/components/common/CustomSlider";
import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Link from "next/link";

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

    //  VIDEO CARD
    if (comp.__component === "success-story.video-story") {
      const image =
        process.env.NEXT_PUBLIC_STRAPI_URL +
        comp.thumbnail?.url;

      return (
        <Box sx={{borderRadius: 4}}>
          <Box position="relative">
            <Box position="relative" sx={{ width: "100%", height: 250 }}>
              <Image
                src={image}
                alt={item.title}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "16px 16px 0 0",
                }}
              />
            </Box>

            <Link href={item.content?.[0]?.videoUrl || "#"} target="_blank" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",}}>
              <Box sx={{bgcolor: "common.white", borderRadius: "50%", p: 2, boxShadow: 3, cursor: "pointer", height: 20, width: 20, display: "flex", alignItems: "center", justifyContent: "center"}}>
                ▶
              </Box>
            </Link>
          </Box>

          <Box p={3.5} sx={{borderRadius: 4, boxShadow: `0px 8.19px 18.43px 0px #A1A1A11A, 0px 137.23px 55.3px 0px #A1A1A103` }}>
            <Typography variant="body05" component="p" color="#4B4B4B">
              {item.description}
            </Typography>

            <Typography variant="heading12" component="p" sx={{color: "primary.main"}} mt={2}>
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
        <Box className="testimonial-card" borderRadius={3} sx={{display: "flex", flexDirection: 'column', height: '100%'}}>
          <Box p={4} pt={6} sx={{ background: comp.backgroundColor, display: "flex", flexDirection: "column", justifyContent: "space-between", height: '100%' }}> 
            <Box>
              <Typography variant="body05" component="p">
                {item.description}
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography variant="heading13" component="p" sx={{color: '#FF3185'}}>
                {item.title}
              </Typography>

              <Typography variant="body05" sx={{color: '#FF3185'}}>
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
            background: 'linear-gradient(149.75deg, #FFF3F8 8.52%, #FFFFFF 104.28%)',
            color: '#202020',
          },
          '& .swiper-slide:nth-of-type(even) .testimonial-card': {
            background: 'linear-gradient(149.75deg, #FFF3F8 8.52%, #FFFFFF 104.28%)',
            color: '#202020',
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
    </Section>
  );
}