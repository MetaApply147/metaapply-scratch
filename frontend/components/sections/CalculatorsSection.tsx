"use client";

import { Box, Button, Typography } from "@mui/material";
import SectionHeader from "../common/SectionHeader";
import { boxSizing, Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

/* ================= DATA ================= */
const cards = [
  {
    title: "Abroad Budget Calculator",
    desc: "Estimate your total cost of studying abroad including tuition, insurance, and local living expenses.",
    image: "/study-abroad/Budget-calculator.svg",
    ctaText: "Calculate My Budget",
    ctaURL: "#",
  },
  {
    title: "Visa Success Calculator",
    desc: "Find out which visa you need and estimated processing time based on your nationality and destination.",
    image: "/study-abroad/Visa-calculator.svg",
    ctaText: "Calculate Visa",
    ctaURL: "#",
  },
  {
    title: "Loan Calculator",
    desc: "Calculate your study abroad loan details with ease- estimate monthly EMI, interest rates, and total repayment in real time.",
    image: "/study-abroad/Loan-Calculator.svg",
    ctaText: "Calculate Loan",
    ctaURL: "#",
  },
];

/* ================= COMPONENT ================= */

export default function CalculatorsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11.25 } }}>
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)",
          borderRadius: {
            xs: "24px",
            sm: "0 40px 0 40px",
            md: "0 40px 0 40px",
            lg: "0 50px 0 50px",
            xl: "0 80px 0 80px",
          },
          overflow: "hidden",
          mx: { xs: "16px", md: "30px" },
        }}
      >
        {/* LEFT CONTENT (INSIDE CONTAINER) */}
        <Container maxWidth="xl" sx={{ py: 10 }}>
          <SectionHeader title="MetaApply Calculators" color="common.white" />
          {/* Cards */}
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {cards.map((Card, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0px 1px 2px 0px #0000000D",
                  border: "1px solid #C3C6D80D",
                  backgroundColor: "common.white",
                  px: 2.5,
                  pt: 4,
                  pb: 3,
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    background:
                      index % 2 === 0
                        ? "linear-gradient(176.69deg, #CDCEFF 1.45%, #FCFCFD 81.02%)"
                        : "linear-gradient(176.69deg, #FEEFC1 1.45%, #FCFCFD 81.02%)",
                    height: "112px",
                    width: "100%",
                    zIndex: 0,
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                      height: "80px",
                      width: "auto",
                      ml: 1,
                    }}
                  >
                    <Image
                      src={Card.image}
                      fill
                      alt={Card.title}
                      style={{ objectFit: "contain", objectPosition: "left" }}
                    />
                  </Box>

                  <Box px={2} pt={3} pb={6}>
                    <Typography
                      variant="heading11"
                      component="h6"
                      pb={3}
                      sx={{ lineHeight: "normal" }}
                    >
                      {Card.title}
                    </Typography>

                    <Typography
                      variant="body05"
                      component="p"
                      sx={{ color: "text.secondary" }}
                    >
                      {Card.desc}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  component={Link}
                  href={Card.ctaURL}
                  variant="outlined"
                  size="large"
                  fullWidth
                >
                  {Card.ctaText}
                </Button>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
