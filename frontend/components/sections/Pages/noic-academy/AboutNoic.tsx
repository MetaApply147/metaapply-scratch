"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

export default function AboutNoic() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: 6, md: 8 },
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ maxWidth: "670px" }}>
          
          {/* HEADING */}
          <SectionHeader
            title="About"
            highlight="NOIC Academy"
            mb="24px"
          />

          {/* PARAGRAPH */}
          <Typography
          component="div"
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#000000",

              display: "flex",
              flexDirection: "column",
              gap: "20px", 
              "& p": {
                margin: 0,
              },
            }}
          >
            <Box component="p">
              Located in the heart of Markham, Ontario, Canada, NOIC Academy is a
              distinguished private boarding school that has established itself as a
              paragon of academic excellence. With a steadfast commitment to delivering
              high-quality education, the school has earned a reputation for its
              rigorous academic standards and exceptional student outcomes.
            </Box>

            <Box component="p">
              As a testament to its unwavering dedication to excellence, NOIC Academy
              was granted the esteemed status of an IB World School in March 2015.
              This prestigious accreditation, awarded by the International Baccalaureate
              Organisation (IBO), authorises the school to offer the highly respected
              International Baccalaureate Diploma Programme (IBDP).
            </Box>

            <Box component="p">
              NOIC Academy’s academic excellence is further underscored by its dual
              inspection and accreditation by both the Ontario Ministry of Education
              and the IBO. This ensures that students receive a world-class education
              that meets the highest standards of academic rigor and excellence.
            </Box>

            <Box component="p">
              By combining academic excellence with a supportive and inclusive learning
              environment, NOIC Academy empowers students to achieve their full
              potential and succeed in an increasingly complex and interconnected world.
            </Box>
          </Typography>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            height: {
              xs: "400px",
              md: "776px",
            },
            mx: "auto",
          }}
        >
          <Image
            src="/noic/OBJECTS.svg"
            alt="NOIC Academy"
            fill
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}