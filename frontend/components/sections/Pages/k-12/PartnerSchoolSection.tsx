"use client";
import Section from "@/components/common/Section";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function PartnerSchoolSection() {
  return (
    <Section sx={{ background: 'linear-gradient(130deg,#e7f4ff 7%,#fff2df 74%)' }}>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: '28px'
        }}
      >
            <Box sx={{backgroundColor: '#FEEDE0', border: '1px solid #FFC8A3', borderRadius: '16px', px: 4, py: 8, display: 'flex', flexDirection: 'column'}}>
                <Typography
                    variant="heading06"
                    component='h2'
                    mb={7}
                    sx={{
                        textAlign: "center",
                        background:
                        'linear-gradient(45deg, #FF3185 13%, #2E318C 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Our Partner School
                </Typography>

                <Box
                sx={{
                    width: "auto",
                    height: "199px",
                    position: 'relative'
                }}
                >
                    <Image src="/k12/partner-logo.webp" fill alt="Partner Logo" style={{objectFit: 'contain'}}/>
                </Box>
            </Box>

        {/* ── Right: image overlay ── */}
        <Box
            sx={{
                backgroundImage:
                    "url('/k12/students.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                borderRadius: '16px',
                minHeight: '613px',
                py: 6
            }}
        >

            <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px" }}>
                <Typography
                    variant="heading07"
                    component='h3'
                    mb={4}
                    sx={{
                        color: "common.white",
                        lineHeight: '42px'
                    }}
                >
                    Explore Opportunities to Elevate Your Child's Education at Premier Schools
                </Typography>
                <Button
                    variant="contained" 
                    size="large"
                >
                    Get In Touch With Us
                </Button>
            </Box>
        </Box>
      </Box>

      
    </Section>
  );
}