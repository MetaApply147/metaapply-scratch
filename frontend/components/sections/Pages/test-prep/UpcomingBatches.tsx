'use client';

import { Box, Typography } from '@mui/material';
import Section from '@/components/common/Section';
import CustomSlider from '@/components/common/CustomSlider';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';

type FeatureItem = {
  id: number;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    title: "IELTS",
    description: "Starts in 4 days",
  },
  {
    id: 2,
    title: "SAT",
    description: "Starts in 4 days",
  },
  {
    id: 3,
    title: "PTE",
    description: "Starts in 4 days",
  },
  {
    id: 4,
    title: "DUOLINGO",
    description: "Starts in 4 days",
  },
  {
    id: 5,
    title: "TOEFL",
    description: "Starts in 6 days",
  },
];

function FeatureCard({ item }: { item: FeatureItem }) {
  const details = [
    `Start Date: ${item.description}`,
    "Mode: Online | Offline | Hybrid",
    "Schedule: Weekdays / Weekend",
  ];

  return (
    <Box
      sx={{
        width: "305px",
        height: "333px",
        borderRadius: "20px",
        border: "1.08px solid #D0E0FF",
        background: "linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)",
        boxShadow:
          "0px 4.33px 6.49px -4.33px #C4C4C41A, 0px 10.81px 16.22px -3.24px #C0C0C040",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Top Gradient Header */}
      <Box
        sx={{
          width: "100%",
          height: "105px",
          background:
            "linear-gradient(176.69deg, #EAEBFF 1.45%, #FCFCFD 81.02%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: "24px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "100%",
            color: "#2E3185",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {item.title}
        </Typography>
      </Box>

<Box
  sx={{
    width: "257px",
    height: "83px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    mx: "auto",
    mt: "28px",
    mb: "24px",
  }}
>
  {details.map((text, index) => (
    <Box
      key={index}
      sx={{
        width: "257px",
        height: "17px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Tick Icon */}
      <Box
        sx={{
          width: "12px",
          height: "12px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Image
          src="/test-prep/Tick.svg"
          alt="tick"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Text */}
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20.89px",
          letterSpacing: "0%",
          verticalAlign: "middle",
          color: "#202020",
        }}
      >
        {text}
      </Typography>
    </Box>
  ))}
</Box>

      {/* Button */}
      <Box
        sx={{
          px: "24px",
          pb: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "52px",
            borderRadius: "9.61px",
            border: "1px solid #FF3185",
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "14.42px",
              color: "#FF3185",
            }}
          >
            Enrol Now
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function UpcomingBatches() {
  return (
    <Section spacing="lg">
      <SectionHeader
        title="Upcoming MetaApply"
        highlight="TestPrep Batches"
      />

      <CustomSlider
        data={features}
        slidesPerView={4}
        spaceBetween={8}
        renderItem={(item) => <FeatureCard item={item} />}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      />
    </Section>
  );
}