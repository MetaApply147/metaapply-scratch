"use client";

import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

const eligibilityData = [
  {
    title: "Indian citizenship",
    desc: "Applicant must have a valid Indian passport",
  },
  {
    title: "Confirmed admission",
    desc: "A confirmed admission letter from recognised university",
  },
  {
    title: "Age criteria",
    desc: "Applicant must be 18 at the time of loan application",
  },
  {
    title: "Co-applicant",
    desc: "A co-applicant with stable income and good credit profile",
  },
  {
    title: "Academic performance",
    desc: "Applicant must have 50–60% marks at least",
  },
];

export default function EligibleRequirement() {
  return (
    <Section spacing="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <SectionHeader
            title="Eligibility Requirements for"
            highlight="Education Loan"
          />
          <Box>
            {eligibilityData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Image
                  src="/services-images/blue-star.svg"
                  alt="star"
                  width={40}
                  height={40}
                />

                <Box>
                  <Typography component="h4" variant="heading12">{item.title}</Typography>
                  <Typography component="p" variant="body06" color="text.secondary" sx={{ mt: 0.8}}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>{" "}
        </Box>

        {/* RIGHT IMAGE */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Image
            src="/services-images/loan-man.webp"
            alt="Student"
            width={572}
            height={585}
            
            style={{ borderRadius: "20px",   
                maxWidth: "572px", 
                 }}
          />
        </Box>
      </Box>
    </Section>
  );
}
