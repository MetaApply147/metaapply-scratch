"use client";

import { Box, Typography } from "@mui/material";
import CustomSlider from "@/components/common/CustomSlider";
import SectionHeader from "@/components/common/SectionHeader";
import Section from "@/components/common/Section";
import Image from "next/image";

/* ================= TYPES ================= */

type StrapiUniversity = {
  id: number;
  name?: string;
  logo?: {
    url?: string;
  };
};

type Partner = {
  id: number;
  logoUrl: string;
  alt: string;
};

type Props = {
  data?: StrapiUniversity[];
  countryName?: string;
};

/* ================= HELPERS ================= */

// Use env only (no window fallback → avoids SSR mismatch)
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";

// Normalize Strapi data safely
const normalizeData = (data: StrapiUniversity[] = []): Partner[] => {
  return data
    .map((item) => {
      const rawUrl = item?.logo?.url;

      if (!rawUrl) return null;

      const fullUrl = rawUrl.startsWith("http")
        ? rawUrl
        : `${BASE_URL}${rawUrl}`;

      return {
        id: item.id,
        logoUrl: fullUrl,
        alt: item.name || "university logo",
      };
    })
    .filter((item): item is Partner => Boolean(item));
};

// Safe grouping (no crash edge cases)
const groupPartnersForRows = (arr: Partner[], rows = 3) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const cols = Math.ceil(arr.length / rows);

  const matrix: (Partner | null)[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(null)
  );

  arr.forEach((item, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    matrix[row][col] = item;
  });

  return Array.from({ length: cols }, (_, colIndex) =>
    Array.from({ length: rows }, (_, rowIndex) => matrix[rowIndex][colIndex])
  );
};

/* ================= COMPONENT ================= */

export default function PartneredUniversities({ data, countryName }: Props) {
  const partners = normalizeData(data);

  const groupedPartners = groupPartnersForRows(partners, 3);

  return (
    <Section spacing="lg">
      <SectionHeader
        title="Top"
        highlight={`Universities in ${countryName}`}
      />

      {!partners.length ? (
        <Typography pt={3} variant="body04" component='p'>
          No universities available
        </Typography>
      ) : (
        <CustomSlider
          data={groupedPartners}
          slidesPerView={5}
          spaceBetween={8}
          showPagination={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }}
          renderItem={(group: (Partner | null)[]) => (
            <Box
              sx={{
                display: "grid",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: 2,
                height: "100%",
              }}
            >
              {group.map((item, idx) =>
                item ? (
                  <Box
                    key={item.id}
                    sx={{
                      minHeight: 90,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      boxShadow: "0px 4px 30px 0px #CCCCCC4D",
                      px: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: '100%', // FIXED (important)
                      }}
                    >
                      <Image
                        src={item.logoUrl}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100px, 150px"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box key={idx} />
                )
              )}
            </Box>
          )}
        />
      )}
    </Section>
  );
}