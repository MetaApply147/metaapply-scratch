import Section from "@/components/common/Section";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function BaseBanner() {
  return (
    <Section
      sx={{
        backgroundImage: "url(/nextstep/Banner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pb: '0 !important'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box flex={1} pt={4}>
          <Typography variant="display01" fontWeight={600} component="h1" sx={{
                background: '-webkit-linear-gradient(180deg, #EE0081, #BF0E2E)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '125%',
                whiteSpace: 'nowrap'
          }}>From Campus to Career</Typography>

          <Typography
            mt={3}
            mb={6}
            variant="heading06"
            component="h3"
            sx={{color: 'secondary.main', lineHeight: '130%', maxWidth: '90%'}}
          >
            Empowering Students with Placement & Internship Support
          </Typography>

          <Button href="#" variant="contained" size="large">Connect With Us</Button>
        </Box>

        <Box>
            <Box sx={{height: '100%', width: '510px', position: 'relative', left: '-21%'}}>
                <Image
                    src="/nextstep/Banner-girl.webp"
                    alt="banner"
                    width={100}
                    height={100}
                    style={{
                        width: "auto",
                        height: "100%",
                        objectFit: "contain",
                    }}
                    priority
                />
            </Box>
          
        </Box>
      </Box>
    </Section>
  );
}
