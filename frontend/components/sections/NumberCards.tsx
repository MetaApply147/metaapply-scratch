"use client";

import { Box, Typography } from "@mui/material";
import SectionHeader from "../common/SectionHeader";
import Section from "../common/Section";
import { ResponsiveStyleValue } from "@mui/system";

/* ================= DATA ================= */
type CardItem = {
  number: string;
  cardTitle: string;
  cardDescription: string;
};

type Props = {
  sectionTitle?: string;
  sectionHighlight?: string;
  cards: CardItem[];
  gridTemplateColumns?: ResponsiveStyleValue<string | number>;
  gap?: ResponsiveStyleValue<string | number>;
  disableSectionPadding?: boolean;
  numberFontSize?: ResponsiveStyleValue<string | number>;
  disabledGutters?: boolean;
};

/* ================= COMPONENT ================= */

export default function NumberCards({
  sectionTitle,
  sectionHighlight,
  cards,
  disableSectionPadding = false,
  gridTemplateColumns = {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  },
  gap = { xs: 2, md: 3, lg: 3.5, xl: 5 },
  numberFontSize = { xs: "40px", md: "60px" },
}: Props) {
  return (
    <Section spacing={disableSectionPadding ? "none" : "lg"}>
      {sectionTitle && (
        <SectionHeader title={sectionTitle} highlight={sectionHighlight} />
      )}
      {/* Cards */}
      <Box display="grid" gridTemplateColumns={gridTemplateColumns} gap={gap}>
        {cards.map((Card, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "16px",
              backgroundColor: 'common.white',
              boxShadow: "0px 8px 40px 0px #B4B4B433",
              px: 3,
              pt: 2,
              pb: 3,
            }}
          >
            <Typography
              variant="heading04"
              component="h3"
              fontWeight={500}
              sx={{
                lineHeight: "normal",
                opacity: 0.15,
                background: "linear-gradient(90deg, #BF0E2E 0%, #EE0081 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: numberFontSize,
              }}
              pb={1.2}
            >
              {Card.number}
            </Typography>

            <Typography variant="heading12" component="h6" pb={1.5} sx={{lineHeight: '120%'}}>
              {Card.cardTitle}
            </Typography>

            <Typography
              variant="body06"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              {Card.cardDescription}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
