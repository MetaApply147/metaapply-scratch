"use client";

import SectionHeader from "@/components/common/SectionHeader";
import CustomSlider from "@/components/common/CustomSlider";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  data?: any; // single destination
};

const getImage = (url?: string) =>
  url?.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

export default function ScholarshipProgrammes({ data }: Props) {
  const cards = data?.scholarshipCards || [];

  if (!cards.length) return null;

  return (
    <Box
    id="scholarships"
      component="section"
      sx={{
        background: "url(/study-abroad/Background-2.webp)",
        borderRadius: { xs: "20px", md: "20px" },
        overflow: "hidden",
        mx: { xs: "16px", md: "30px" },
        py: { xs: 8, md: 11.25 },
      }}
    >
      {/* LEFT CONTENT (INSIDE CONTAINER) */}
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        {/* HEADER */}
        <Box sx={{backgroundColor: 'common.white', px: 3, pb: 3, pt: 6}}>
          <SectionHeader title="Scholarship" highlight="Programmes" />

          {/* SLIDER */}
          <CustomSlider
            data={cards}
            slidesPerView={3}
            disablePadding
            spaceBetween={20}
            showArrows={false}
            showPagination={false}
            renderItem={(item: any) => (
              <Box
                sx={{
                  backgroundColor: "#f1f5f9",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* IMAGE */}
                <Box sx={{ position: "relative", height: 279 }}>
                  <Image
                    src={getImage(item.image?.url)}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* CONTENT */}
                <Box p={4}>
                  <Typography variant="heading11" component='h5' sx={{lineHeight: '32px', color: 'secondary.main'}} mb={1}>
                    {item.title}
                  </Typography>

                  <Typography variant="body05" color="text.secondary" component='p'>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            )}
          />
        </Box>
      </Container>
    </Box>
  );
}
