"use client";

import { Box, Typography, Divider } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";
import { Tab } from "@/types/megamenu";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";
import EastIcon from '@mui/icons-material/East';
import Image from "next/image";
import palette from "@/theme/palette";

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
        lg: "minmax(0,1fr) minmax(220px, 436px)",
      }}
      sx={{ height: "100%" }}
    >
      {/* LEFT CONTENT */}
      <Box minWidth={0} sx={{ padding: "25px 0 25px 32px" }}>
        {/* Heading */}
        <Box mb={2}>
          <Link href={`/study-abroad-destination/study-in-${country.toLowerCase().replace(/\s+/g, "-")}`}>
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
              Explore Studying in {country} <ChevronRight fontSize="small" sx={{ marginLeft: 3 }} />
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
          px={2}
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
            background: "linear-gradient(336.23deg, rgba(255, 242, 247, 0.8) 12.41%, rgba(240, 247, 255, 0.8) 92.4%)",
          },
          px: 4,
          py: 8
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
    <Box display="flex" gap={2} mb={4.5}>
      <SidebarCard
        title="MBBS Abroad"
        gradient="linear-gradient(321.08deg, #ACFFE1 8.47%, #C8F2FF 72.68%)"
        imageUrl="/Header/doctor_m.svg"
        textGradient="linear-gradient(90deg, #00A279, #0085EC)"
        href="/mbbs-abroad"
      />
      <SidebarCard
        title="Premium Counselling"
        gradient="linear-gradient(312.85deg, #CD8BFF 7.95%, #FFEEBB 69.45%)"
        imageUrl="/Header/premium_counselling_girl.svg"
        textGradient="linear-gradient(90deg, #8E2DE2, #FF6FD8)"
        href="/premium-counselling"
      />
    </Box>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  const services = [
    { name: "MetaFinance", image: "/Header/metafinance_icon.svg", href: "/metafinance" },
    { name: "MetaFly", image: "/Header/metafly_icon.svg", href: "/metafly" },
    { name: "MetaStay", image: "/Header/metastay_icon.svg", href: "/metastay" },
    { name: "MetaInsure", image: "/Header/metainsure_icon.svg", href: "/metainsure" },
  ];

  return (
    <>
      <Typography fontWeight={600} mb={2} color="text.primary" variant="heading14" component="h6">
        Services
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        {services.map((service) => (
          <SidebarItem key={service.name} label={service.name} imageUrl={service.image} href={service.href} />
        ))}
      </Box>
    </>
  );
}

/* ---------------- REUSABLE CARDS ---------------- */

function SidebarCard({
  title,
  gradient,
  imageUrl,
  textGradient,
  href
}: {
  title: string;
  gradient: string;
  imageUrl: string;
  textGradient: string;
  href: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "16px 12px 0 20px",
          gap: 1.8,
          borderRadius: 3,
          background: gradient,
          cursor: "pointer",
          transition: "0.2s",
          boxShadow: "0px 16px 32px -8px rgba(192, 192, 192, 0.4)",
          "&:hover": {
            transform: "translateY(-2px)",
          },
          color: "text.primary"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.2 }}>
          <Typography fontWeight={600} variant="heading15" component="h6"
            sx={{
              background: textGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            {title}
          </Typography>
          <Typography variant="body07">Know More <EastIcon sx={{ fontSize: 12 }} /></Typography>
        </Box>
        <Image src={imageUrl} alt={title} width={137} height={137} style={{ objectFit: "fill", width: "auto", height: "137px" }} />
      </Box>
    </Link>

  );
}

function SidebarItem({ label, imageUrl, href }: { label: string, imageUrl: string, href: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          padding: "12px 14px 16px",
          alignItems: "center",
          borderRadius: "12px",
          boxShadow: "0px 6px 25px 0px #ABABAB40",
          cursor: "pointer",
          gap: "10px",
          transition: "0.2s",
          "&:hover": {
            transform: "translateY(-2px)",
          },
          backgroundColor: "background.default"
        }}
      >
        <Image src={imageUrl} alt="Cards Images" width={52} height={52} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <Typography fontWeight={600} color="text.primary" component="h6" variant="heading15">{label}</Typography>
          <Typography variant="body07" sx={{ color: palette.neutralBlue[800] }}>Know More <EastIcon sx={{ fontSize: 12 }} /></Typography>
        </Box>
      </Box>
    </Link>

  );
}