"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

/* ================= TYPES ================= */

export type GridItem = {
  id: number;
  title: string;
  description?: string;
  icon: string;
  // NOTE: bgColor removed — your images already have their own background built in.
  // Do NOT add a bg wrapper around the icon. Just render the image directly.
};

type Props = {
  title: string;
  highlightText: string;
  highlightPosition?: "start" | "end";
  data: GridItem[];
};

/* ================= COMPONENT ================= */

export default function ImportanceGridSection({
  title,
  highlightText,
  highlightPosition = "end",
  data,
}: Props) {
  // Cap at 6 columns max; if you have 5 items → 5 equal columns on desktop
  const colCount = Math.min(data.length, 6);

  return (
    <Section spacing="lg">
      <Box>
        {/* ── Heading ── */}
        <SectionHeader
          title={title}
          highlight={highlightText}
          
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: `repeat(${colCount}, 1fr)`,
            },
            gap: { xs: 2, md: 3 },
            mt: { xs: 4, md: 5 },
          }}
        >
          {data.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </Section>
  );
}

/* ================= CARD ================= */

const GridCard = ({ item }: { item: GridItem }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
    
      <Box
        sx={{
          my: 2,
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={150}
          height={150}
          style={{         
            maxWidth: '150px',
            objectFit: "contain",
          }}
        />
      </Box>

      {/* ── Card body ── */}
      <Box
        sx={{
          width: "100%",
          px: 2.5,
          py: 2.5,
          borderRadius: "12px",
          background: "#fff",
          boxShadow: "0px 26.7px 26.7px 0px #ABABAB17",
          flexGrow: 1,
          mt: '-15px',
        }}
      >
        <Typography variant="heading13"        
          color="text.primary"
          component= "h3"
        >
          {item.title}
        </Typography>

        {item.description && (
          <Typography
            variant="body06"
            color="text.secondary"
            mt={1} 
            component="p"          
          >
            {item.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
