"use client";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function CTABannerSection() {
  return (
    <Section
      spacing="lg"
      sx={{
        background: "url(/k12/k12-CTA-BG.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pb: "0 !important",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: "32px",
        }}
      >
        {/* ── Left ── */}
        <Box sx={{ flex: "0 0 58%" }}>
          <Image src="/k12/CC_Logo.svg" height={54} width={158} alt="career counselling" style={{marginBottom: '30px'}}/>

          <SectionHeader
            title="Your child's future deserves the right direction. Get clarity today!"
            color="common.white"
          />

          <Button variant="contained" size="large">
            Talk to Our Counsellors Today
          </Button>
        </Box>

        {/* ── Right: Illustration ── */}
        <Box
          sx={{ height: '382px', width: 'auto', position: 'relative' }}
        >
          <Image fill src='/k12/k12-Illustration.webp' alt="Career Counselling" style={{objectFit: 'contain'}}/>
        </Box>
      </Box>
    </Section>
  );
}
