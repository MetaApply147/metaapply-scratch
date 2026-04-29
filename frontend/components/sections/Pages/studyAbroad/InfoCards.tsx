"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

/* ================= DATA ================= */

type Props = {
  data: any;
};

/* ================= COMPONENT ================= */

export default function InfoCards({ data }: Props) {
  const cards = [
    {
      image: "/study-abroad/Inner-pages/Capital.svg",
      cardTitle: data.capital,
      cardDescription: "Capital",
    },
    {
      image: "/study-abroad/Inner-pages/Tuition-fees.svg",
      cardTitle: data.tuitionFees,
      cardDescription: "Tuition Fees",
    },
    {
      image: "/study-abroad/Inner-pages/Intakes.svg",
      cardTitle: data.intakes,
      cardDescription: "Intakes",
    },
    {
      image: "/study-abroad/Inner-pages/Living-expenses.svg",
      cardTitle: data.livingExpenses,
      cardDescription: "Living Expenses",
    },
  ];

  return (
    <>
      {/* Cards */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ xs: 2, md: 2, lg: 2, xl: 2.5}}
      >
        {cards.map((Card, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "16px",
              boxShadow: "0px 8px 40px 0px #B4B4B433",
              px: 2.8,
              py: 2.5,
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ height: 64, width: 64, position: "relative" }}>
              <Image
                alt={Card.cardDescription}
                fill
                src={Card.image}
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Box mt={3}>
              <Typography
                variant="heading12"
                component="h6"
                pb={1.5}
                sx={{ lineHeight: "110%", color: "secondary.main" }}
              >
                {Card.cardTitle}
              </Typography>

              <Typography
                variant="body06"
                component="p"
                sx={{ color: "gray.700" }}
              >
                {Card.cardDescription}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
