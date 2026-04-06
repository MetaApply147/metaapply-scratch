"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

/* ================= DATA ================= */

const programs = [
  {
    id: 1,
    title: "Integrated Program",
    description:
      "A long-term model delivered from 1st or 2nd year, blending seamlessly with the curriculum for continuous skill development.",
    features: [
      "Full Curriculum Coverage",
      "Semester-wise Modules",
      "Continuous Skill Growth",
      "Long-term Impact",
    ],
    icon: "/nextstep/Integrated-program.svg",
    bg: "linear-gradient(180deg, #CDCEFF 0%, #FCFCFD 20%)",
    border: "#E2E3FF",
    boxshadow: "0px 10.81px 16.22px -3.24px #C0C0C01A"
  },
  {
    id: 2,
    title: "Fast-track Bootcamp",
    description:
      "An intensive, short-duration format for final-year students focused on immediate placement readiness.",
    features: [
      "40–50 hour high-impact training",
      "Interview Mastery",
      "Communication Focus",
      "Placement Readiness",
    ],
    icon: "/nextstep/Fast-rack-bootcamp.svg",
    bg: "linear-gradient(180deg, #FFEBB0 0%, #FCFCFD 20%)",
    border: "#FFECA1",
    boxshadow: "0px 10.81px 16.22px -3.24px #C0C0C01A"
  },
  {
    id: 3,
    title: "Custom Workshops",
    description:
      "Flexible, tailor-made sessions to address specific skills, themes, or institutional requirements.",
    features: [
      "Resume Clinics",
      "GD/PI Bootcamps",
      "Fully adaptable to institutional timeline",
      "Perfect for batches, departments, or events",
    ],
    icon: "/nextstep/Custom-workshops.svg",
    bg: "linear-gradient(180deg, #B3CFFF 0%, #FCFCFD 20%)",
    border: "#C6DAFF",
    boxshadow: "0px 10.81px 16.22px -3.24px #C0C0C040"
  },
];

/* ================= COMPONENT ================= */

export default function ProgramFormats() {
  return (
    <Section spacing="lg">
        <SectionHeader title="Program" highlight="Formats"/> 

        {/* GRID */}
        <Grid container spacing={4}>
          {programs.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: "20px",
                  p: 3,
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    height: '65px',
                    width: '100%',
                    position: 'relative',
                    mb: 4,
                  }}
                >
                    <Image src={item.icon} alt={item.title} fill style={{objectFit: 'contain', objectPosition: 'left'}}/>
                </Box>

                {/* TITLE */}
                <Typography variant="heading11" component='h5' mb={3}>
                  {item.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography variant="body05" component='p' sx={{color: '#505050'}}>
                  {item.description}
                </Typography>

                {/* KEY FEATURES */}
                <Typography variant="heading14" component='h6' mt={5} mb={2}>
                  Key Features
                </Typography>

                <Box component="ul" sx={{listStyleType: 'unset',  pl: 3, mb: 5}}>
                  {item.features.map((feature, i) => (
                    <Box
                      key={i}
                      mb={1}
                    >
                      <Typography component='li' variant="body05" sx={{color: '#505050',
                        '&::marker': {
                            color: '#16A34A',
                        },}}>{feature}</Typography>
                      
                    </Box>
                  ))}
                </Box>

                {/* BUTTON */}
                <Box sx={{ mt: "auto" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="medium"
                    sx={{p: '15px 40px'}}
                  >
                    Know More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
    </Section>
  );
}
