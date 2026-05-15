"use client";

import { Box, Typography } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import Image from "next/image";

/* ================= DATA ================= */
type CardItem = {
  image: string;
  cardTitle: string;
  cardDescription: string;
};

type Props = {
  cards: CardItem[];
  gridTemplateColumns?: ResponsiveStyleValue<string | number>;
};

/* ================= COMPONENT ================= */

export default function ImageBoxes({
  cards,
  gridTemplateColumns = {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  },
}: Props) {
  return (
      <Box display="grid" gridTemplateColumns={gridTemplateColumns} columnGap={{ xs: 2, md: 3, lg: 3.5, xl: 4 }} rowGap={{ xs: 2, md: 3, lg: 3.5, xl: 10 }} mt={11.5}>
        {cards.map((Card, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "16px",
              backgroundColor: 'common.white',
              boxShadow: "0px 13px 19px 0px rgb(0 0 0 / 7%)",
              px: 3,
              pt: 2,
              pb: 3,
              textAlign: 'center'
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100px',
                height: '100px',
                m: '-42px auto 0'
              }}
            >
              <Image src={Card.image} fill style={{objectFit: "contain"}} alt={Card.cardTitle}/>
            </Box>

            <Typography variant="heading11" component="h5" mb={3} sx={{lineHeight: '120%'}} mt={7}>
              {Card.cardTitle}
            </Typography>

            <Typography
              variant="body05"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              {Card.cardDescription}
            </Typography>
          </Box>
        ))}
      </Box>
  );
}
