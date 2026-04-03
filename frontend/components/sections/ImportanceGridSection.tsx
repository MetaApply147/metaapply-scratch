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
  data,
}: Props) {
  const colCount = Math.min(data.length, 6);

  return (
    <Section spacing="lg" sx={{backgroundColor: '#F7FBFF'}}>
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
            // mt: { xs: 4, md: 5 },
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
        display: 'flex',
        flexDirection: 'column',
        textAlign: "center",
      }}
    >
    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          backgroundColor: "common.white",
          boxShadow: "0px 6.89px 14.64px 0px #ABABAB1A, 0px 26.7px 26.7px 0px #ABABAB17",
          position: 'relative',
          mt: '-20px',
          zIndex: 0,
          height: '100%'
        }}
      >
        <Typography variant="heading13"        
          color="text.primary"
          component= "h6"
          sx={{lineHeight: '22px'}}
        >
          {item.title}
        </Typography>

        {item.description && (
          <Typography
            variant="body05"
            color="text.secondary"
            mt={2} 
            component="p"          
          >
            {item.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
