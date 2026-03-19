"use client";

import { Box, Typography, Divider } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";
import { Tab } from "@/types/megamenu";

/* ---------------- COMPONENT ---------------- */

export default function StudyMegaMenu({ tab }: { tab: Tab }) {
  const country = tab?.title?.replace(/^Study in\s+/i, "") || "";

  if (!tab) return null;

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        md: "2fr 1fr",
        lg: "minmax(0,1fr) minmax(280px, 340px)",
      }}
      gap={{ xs: 2, md: 4 }}
    >
      {/* LEFT CONTENT */}
      <Box minWidth={0}>
        {/* Heading */}
        <Box mb={2}>
          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Explore Studying in {country} →
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Sections */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
          }}
          gap={3}
        >
          {tab?.sections?.length ? (
            tab.sections.map((section) => (
              <SectionColumn key={section.id} section={section} />
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No data available
            </Typography>
          )}
        </Box>
      </Box>

      {/* RIGHT SIDEBAR */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <RightSidebar />
      </Box>
    </Box>
  );
}

/* ---------------- SIDEBAR ---------------- */

function RightSidebar() {
  return (
    <Box>
      <TopCards />
      <Services />
    </Box>
  );
}

/* ---------------- TOP CARDS ---------------- */

function TopCards() {
  return (
    <Box display="flex" gap={2} mb={3}>
      <SidebarCard
        title="MBBS Abroad"
        gradient="linear-gradient(135deg,#B2F5EA,#81E6D9)"
      />
      <SidebarCard
        title="Premium Counselling"
        gradient="linear-gradient(135deg,#FBCFE8,#F9A8D4)"
      />
    </Box>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  const services = [
    "MetaFinance",
    "MetaFly",
    "MetaStay",
    "MetaInsure",
  ];

  return (
    <>
      <Typography fontWeight={600} mb={2}>
        Services
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        {services.map((service) => (
          <SidebarItem key={service} label={service} />
        ))}
      </Box>
    </>
  );
}

/* ---------------- REUSABLE CARDS ---------------- */

function SidebarCard({
  title,
  gradient,
}: {
  title: string;
  gradient: string;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 3,
        background: gradient,
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography fontWeight={600}>{title}</Typography>
      <Typography variant="body2">Know More →</Typography>
    </Box>
  );
}

function SidebarItem({ label }: { label: string }) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Typography fontWeight={500}>{label}</Typography>
      <Typography variant="body2">Know More →</Typography>
    </Box>
  );
}