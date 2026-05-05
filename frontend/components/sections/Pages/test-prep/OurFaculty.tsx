"use client";

import { Box, Typography } from "@mui/material";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

type FacultyItem = {
  id?: number;
  title: string;
  icon?: { url?: string };
};

type Props = {
  data: FacultyItem[];
};

/* ---------- IMAGE HELPER ---------- */

const getImageUrl = (icon?: { url?: string }) => {
  if (!icon?.url) return "/fallback.svg";

  const url = icon.url;

  if (url.startsWith("http")) return url;

  if (url.startsWith("/uploads")) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  }

  return url;
};

/* ---------- CARD ---------- */

function FeatureCard({
  icon,
  title,
  marginLeft,
  marginRight,
}: {
  icon: string;
  title: string;
  marginLeft?: string;
  marginRight?: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1.5, md: 2 },
        backgroundColor: "common.white",
        px: { xs: 2, md: "20px" },
        py: { xs: 2, md: "15px" },
        borderRadius: "12px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: { xs: "100%", sm: "420px", md: "392px" },
        ml: { xs: 0, md: marginLeft },
        mr: { xs: 0, md: marginRight },
        minHeight: { xs: "90px", md: "114px" },
        mx: "auto",
      }}
    >
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        style={{
          objectFit: "contain",
          width: "clamp(48px, 8vw, 64px)",
          height: "auto",
        }}
      />

      <Typography variant="heading12">{title}</Typography>
    </Box>
  );
}

/* ---------- MAIN ---------- */

export default function OurFaculty({ data }: Props) {
  const leftMargins = ["0%", "8%", "0%"];
  const rightMargins = ["18%", "0%", "8%"];

  if (!data?.length) return null;

  /* ---------- CORRECT SPLIT ---------- */
  const total = data.length;
  const leftCount = Math.floor(total / 2); // ✅ 2 for 5 items
  const rightCount = total - leftCount;    // ✅ 3 for 5 items

  const columns = [
    {
      items: data.slice(0, leftCount).reverse(), // bottom-up
      align: "flex-start",
      mt: { md: "-20px" },
    },
    {
      items: data.slice(leftCount),
      align: "flex-end",
      mt: { md: "35px" },
    },
  ];

  return (
    <Section
      spacing="md"
      sx={{
        background: "url(/nextstep/Key-Program-Bg.webp) no-repeat center/cover",
        position: "relative",
        overflow: "hidden",
        pb: { xs: 4, md: 0 },

        "&::before": {
          content: '""',
          position: "absolute",
          backgroundImage: "url(/test-prep/Faculty.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          width: "100%",
          height: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundSize: {
            xs: "250px auto",
            sm: "320px auto",
            md: "500px auto",
            lg: "513px auto",
          },
          bottom: 0,
          zIndex: 0,
        },
      }}
    >
      <SectionHeader title="Our" highlight="Faculty" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 3, lg: 0 },
          position: "relative",
          zIndex: 0,
          alignItems: "center",
          mx: "auto",
          pb: { xs: 3, md: 15 },
          minHeight: { lg: "443px" },

          "&:before": {
            content: "url(/test-prep/Innerpages/Arrow.svg)",
            position: "absolute",
            top: -70,
            right: "32%",
            zIndex: -1,
          },

          "&:after": {
            content: "url(/test-prep/Innerpages/Arrow-1.svg)",
            position: "absolute",
            bottom: 50,
            left: "24%",
            zIndex: -1,
          },
        }}
      >
        {columns.map((col, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2.5, md: idx === 0 ? 5.2 : 5.5 },
              alignItems: { xs: "center", md: col.align },
              mt: col.mt,
            }}
          >
            {col.items.map((item, i) => {
              const actualIndex =
                idx === 0 ? col.items.length - 1 - i : i;

              return (
                <FeatureCard
                  key={item.id || i}
                  icon={getImageUrl(item.icon)}
                  title={item.title}
                  marginLeft={idx === 0 ? leftMargins[actualIndex] : undefined}
                  marginRight={idx === 1 ? rightMargins[i] : undefined}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </Section>
  );
}