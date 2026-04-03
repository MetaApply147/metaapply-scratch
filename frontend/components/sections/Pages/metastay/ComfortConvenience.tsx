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
            gridTemplateColumns: "repeat(5, 1fr)",
            rowGap: 5,
            columnGap: 3,
          }}
        >
          {amenities.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                py: 1,
              }}
            >
              <Box sx={{
                height: '100px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                variant="body03"
                component='h6'
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  pt: 1,
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
