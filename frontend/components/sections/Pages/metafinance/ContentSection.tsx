'use client';

import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

export default function ContentSection() {
  return (
    <Box
      sx={{
        mx: "30px",
        borderRadius: "0px 80px 0px 80px",
        overflow: 'hidden', 
        background: "linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)",
      }}
    >
        {/* LEFT CONTENT */}
        <Container maxWidth="xl" 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 3,
            }}>
          <Box
            sx={{
              maxWidth: "600px",
              color: "#fff",
              py: { xs: 5, md: 10 },
            }}
          >
            <Typography
              variant="heading06"
              component="h2"
              fontWeight={400}
              sx={{ lineHeight: 1.2 }}
            >
              Compare Best Deals on{" "}
              <Box component="span" fontWeight={600}>
                Education Loan
              </Box>{" "}
             
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 5 }}
            >
              Loan EMI Calculator
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "0%", md: "45%" },
            textAlign: "right",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            src="/services-images/loan-calculator.webp"
            alt="Loan calculator"
            width={500}  
            height={400}
            style={{
              maxWidth: '450px',
              objectFit: "contain",
            }}
          />
        </Box>
        </Container>

        
    </Box>
  );
}