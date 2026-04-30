"use client";

import { Box, Container, Typography, Skeleton, Alert } from "@mui/material";
import CustomSlider from "@/components/common/CustomSlider";
import SectionHeader from "@/components/common/SectionHeader";
import Section from "@/components/common/Section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getServices } from "@/services/httpServices";

/* ================= TYPES ================= */

type Partner = {
  id: number;
  logoUrl: string;
  alt: string;
};

type Props = {
  bg?: string;
  pt?: object;
  pb?: object;
  isHome?: boolean;
};

/* ================= CONFIG ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!BASE_URL) {
  throw new Error("Missing API URL");
}

/* ================= HELPERS ================= */

const getImageUrl = (url?: string): string | null => {
  if (!url) return null;

  if (url.startsWith("http")) return url;

  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const groupPartnersForRows = (arr: Partner[], rows = 3) => {
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

export default function PartneredUniversities({
  bg = "#fff",
  pt = { xs: 4, md: 5 },
  pb = { xs: 4, md: 11.25 },
  isHome = false,
}: Props) {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const backgroundValue = bg?.startsWith("/")
  ? `url(${bg}) center/cover no-repeat`
  : bg;

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);

        const res = await getServices("/partnered-universities", {
          populate: "logo",
          sort: ["order:asc"],
          pagination: { pageSize: 100 },
        });

        if (!res.isSuccess) {
          const msg =
            typeof res.message === "string"
              ? res.message
              : res.message?.message || "Failed to fetch";

          throw new Error(msg);
        }

        const data = res.data?.data || [];

        const mapped = data
          .map((item: any) => {
            const logoUrl = getImageUrl(item?.logo?.url);

            if (!logoUrl) return null;

            return {
              id: item.id,
              logoUrl,
              alt:
                item?.logo?.alternativeText?.trim() ||
                "Partner university logo",
            };
          })
          .filter(Boolean) as Partner[];

        setPartners(mapped);
      } catch (err: any) {
        let message = "Something went wrong";
        if (typeof err === "string") {
          message = err;
        } else if (err?.message && typeof err.message === "string") {
          message = err.message;
        } else if (err?.message?.message) {
          message = err.message.message;
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const groupedPartners = groupPartnersForRows(partners, 3);

  const sliderContent = (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      {loading && (
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(5,1fr)",
          }}
          gap={3}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="rounded" height={400} />
          ))}
        </Box>
      )}

      {!loading && !error && partners.length === 0 && (
        <Typography textAlign="center">No partners available</Typography>
      )}

      {!loading && !error && partners.length > 0 && (
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
                        height: "100%",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.logoUrl}
                        alt={item.alt}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
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
    </>
  );

  return isHome ? (
    <Box
      sx={{
        pt,
        pb,
        backgroundColor: bg,
      }}
      component="section"
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            pl: 3,
            pr: 5,
            py: 1.5,
            borderRadius: "16px",
            background:
              "linear-gradient(94.85deg, #FEE9A4 0.85%, #FAFAFA 112.11%)",
            mb: 6,
          }}
        >
          <Typography variant="heading07" component="h2" fontWeight={600}>
            Our Exclusive{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Partnered Universities
            </Box>
          </Typography>
        </Box>

        {sliderContent}
      </Container>
    </Box>
  ) : (
    <Section spacing="lg" sx={{ background: backgroundValue }}>
      <SectionHeader
        title="Our Exclusive"
        highlight="Partnered Universities"
      />
      {sliderContent}
    </Section>
  );
}