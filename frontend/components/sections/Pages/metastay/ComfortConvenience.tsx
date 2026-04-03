"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ComfortConvenience() {
  const amenities = [
    { id: 1, title: "Laundry Room", icon: "/Services-images/laundry.svg" },
    { id: 2, title: "Vacuum Cleaner", icon: "/Services-images/Vacuum.svg" },
    { id: 3, title: "Communal TV", icon: "/Services-images/TV.svg" },
    { id: 4, title: "Tumble Dryer", icon: "/Services-images/Dryer.svg" },
    { id: 5, title: "Onsite Maintenance", icon: "/Services-images/maintenance.svg",},
    { id: 6, title: "Bicycle Storage", icon: "/Services-images/Bicycle.svg" },
    { id: 7, title: "Cinema", icon: "/Services-images/Cinema.svg" },
    { id: 8, title: "Games Room", icon: "/Services-images/Games.svg" },
    { id: 9, title: "Furnished Common Area", icon: "/Services-images/Furnished.svg"},
    { id: 10, title: "Oven", icon: "/Services-images/oven.svg" },
  ];

  return (
    <Section spacing="lg">
      <Box>
        {/* ================= HEADING ================= */}
        <SectionHeader
          title="Comfort Meets Convenience in"
          highlight="Every Stay"
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",   
              sm: "repeat(3, 1fr)",   
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",   
            },
            rowGap: { xs: 3, sm: 4, md: 5 },
            columnGap: { xs: 2, sm: 3, md: 3 },
          }}
        >
          {amenities.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 0.8, sm: 1, md: 0.5 },
                py: { xs: 1.5, sm: 2, md: 1 },
              }}
            >
            <Box
              sx={{
                height: { xs: "70px", sm: "85px", md: "100px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "100%", 
                }}
              />
            </Box>
              <Typography
                variant="body03"
                component="h6"
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  pt: { xs: 0.5, sm: 1 },

                  fontSize: {
                    xs: "12px",
                    sm: "16px",
                    md: "inherit", 
                  },

                  lineHeight: {
                    xs: "16px",
                    sm: "20px",
                    md: "inherit",
                  },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
