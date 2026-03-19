"use client";

import { Box, Typography, Divider } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";
import { Tab } from "@/types/megamenu";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";
import EastIcon from '@mui/icons-material/East';
import Image from "next/image";

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
        lg: "minmax(0,1fr) minmax(220px, 404px)",
      }}
      gap={{ xs: 2, md: 4 }}
    >
      {/* LEFT CONTENT */}
      <Box minWidth={0}>
        {/* Heading */}
        <Box mb={2}>
          <Link href={`/study-in-${country.toLowerCase().replace(/\s+/g, "-")}`}>
            <Typography
              variant="heading15"
              sx={{
                color: "primary.main",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 1
              }}
            >
              Explore Studying in {country} <ChevronRight fontSize="small" sx={{marginLeft: 3}} />
            </Typography>
          </Link>
        </Box>

        <Divider sx={{ mb: 2.5 }} />

        {/* Sections */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
          }}
          gap={3}
          px= {2}
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
        gradient="linear-gradient(321.08deg, #ACFFE1 8.47%, #C8F2FF 72.68%)"
        imageUrl="/Header/doctor_m.svg"
      />
      <SidebarCard
        title="Premium Counselling"
        gradient="linear-gradient(312.85deg, #CD8BFF 7.95%, #FFEEBB 69.45%)"
        imageUrl="/Header/premium_counselling_girl.svg"
      />
    </Box>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  const services = [
    { name: "MetaFinance", image: "/Header/metafinance_icon.svg" },
    { name: "MetaFly", image: "/Header/metafly_icon.svg" },
    { name: "MetaStay", image: "/Header/metastay_icon.svg" },
    { name: "MetaInsure", image: "/Header/metainsure_icon.svg" },
  ];

  return (
    <>
      <Typography fontWeight={600} mb={2}>
        Services
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        {services.map((service) => (
          <SidebarItem key={service.name} label={service.name} imageUrl={service.image}/>
        ))}
      </Box>
    </>
  );
}

/* ---------------- REUSABLE CARDS ---------------- */

function SidebarCard({
  title,
  gradient,
  imageUrl
}: {
  title: string;
  gradient: string;
  imageUrl: string;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px 12px 0 20px",
        gap: 1,
        borderRadius: 3,
        background: gradient,
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
        },
        color: "text.primary"
      }}
    >
      <Typography fontWeight={600} variant="heading15" component="h6">{title}</Typography>
      <Typography variant="body07">Know More <EastIcon sx={{fontSize: 12}}/></Typography>
      <Image src={imageUrl} alt={title} width={130} height={131} />
    </Box>
  );
}

function SidebarItem({ label, imageUrl, }: { label: string, imageUrl: string; }) {
  return (
    <Box
      sx={{
        padding: "16px 12px 8px 20px",
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
      <Typography variant="body2">Know More <EastIcon sx={{fontSize: 12}}/></Typography>
      <Image src={imageUrl} alt="Cards Images" width={124} height={137}/>
    </Box>
  );
}