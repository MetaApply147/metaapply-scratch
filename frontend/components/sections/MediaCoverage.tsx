"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Typography, Divider, Pagination } from "@mui/material";
import Link from "next/link";
import { getServices } from "@/services/httpServices";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

/* ================= TYPES ================= */

type Coverage = {
  id: number;
  title?: string;
  media_url?: string;
  published_date?: string;
  channel?: string;
};

/* ================= HELPER ================= */

const isValidUrl = (url?: string) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/* ================= COMPONENT ================= */

export default function MediaCoverage() {
  const [data, setData] = useState<Coverage[]>([]);
  const [loading, setLoading] = useState(true);

  // pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const coverageRef = useRef<HTMLDivElement>(null);

  const pageSize = 20;

  /* ================= FETCH ================= */

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await getServices("/media-coverages", {
        sort: "published_date:desc",
        pagination: {
          page: page,
          pageSize: pageSize,
        },
      });

      console.log("MEDIA API:", res);

      if (!res?.isSuccess) {
        setLoading(false);
        return;
      }

      // Strapi v5 structure
      const items = res?.data?.data || [];
      const meta = res?.data?.meta?.pagination;

      setData(items);
      setTotalPages(meta?.pageCount || 1);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= EFFECT ================= */

  useEffect(() => {
    fetchData();
  }, [page]); // page change pe API call

  /* ================= UI ================= */

  return (
    <div ref={coverageRef} style={{ scrollMarginTop: "100px" }}>
      <Section spacing="lg">
        <Box>
          <SectionHeader title="Coverage" />

          <Box>
            {/* LOADING */}
            {loading && (
              <Typography component="p" variant="body05">
                Loading coverage...
              </Typography>
            )}

            {/* EMPTY */}
            {!loading && data.length === 0 && (
              <Typography component="p" variant="body05">
                No media coverage found
              </Typography>
            )}

            {/* LIST */}
            {data.map((item) => {
              const validLink = isValidUrl(item.media_url);

              return (
                <Box key={item.id} pb={2}>
                  {/* TITLE */}
                  {validLink ? (
                    <Link
                      href={item.media_url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography
                        variant="body05"
                        component="p"
                        fontWeight={500}
                        sx={{
                          color: "secondary.main",
                          cursor: "pointer",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      variant="body05"
                      component="p"
                      fontWeight={500}
                      sx={{
                        color: "secondary.main",
                        cursor: "pointer",
                      }}
                    >
                      {item.title}
                    </Typography>
                  )}

                  {/* DATE + CHANNEL */}
                  <Box mt={1} display="flex" gap={3}>
                    <Typography color="#64748b" fontWeight={500} component="p">
                      {item.published_date
                        ? new Date(item.published_date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            },
                          )
                        : ""}
                    </Typography>

                    <Typography color="#64748b" fontWeight={500} component="p">
                      {item.channel || "-"}
                    </Typography>
                  </Box>

                  <Divider sx={{ mt: 2, borderColor: "#ccc" }} />
                </Box>
              );
            })}

            {/* PAGINATION CONTROLS */}
            {!loading && totalPages > 1 && (
              <Box mt={5} display="flex" justifyContent="center">
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, value) => {
                    setPage(value);

                    coverageRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  color="primary"
                  siblingCount={0}
                  boundaryCount={1}
                  shape="rounded"
                  sx={{
                    "& .MuiTouchRipple-root": {
                      display: "none",
                    },

                    "& .MuiPagination-ul": {
                      gap: "8px",
                    },

                    "& .MuiPaginationItem-root": {
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "text.primary",
                      border: "1px solid #F1F0F4",
                      height: 40,
                      width: 40,
                      minWidth: 40,
                      borderRadius: "999px",
                      backgroundColor: "common.white",

                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "1px solid #FF3185",
                      },
                    },

                    "& .MuiPaginationItem-root.Mui-selected": {
                      backgroundColor: "#FF3185",
                      color: "common.white",
                      border: "1px solid #FF3185",

                      "&:hover": {
                        backgroundColor: "#FF3185",
                      },
                    },

                    "& .MuiPaginationItem-ellipsis": {
                      border: "1px solid #F1F0F4",
                    },
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Section>
    </div>
  );
}
