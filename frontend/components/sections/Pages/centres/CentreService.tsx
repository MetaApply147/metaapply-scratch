import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const services = [
  {
    title: "Personalised\nGuidance",
    image: "/centres/NEP-Aligned.webp",
  },
  {
    title: "Hassle-free\nProcess",
    image: "/centres/NEP-Aligned.webp",
  },
  {
    title: "Hands-on Application\nSupport",
    image: "/centres/NEP-Aligned.webp",
  },
  {
    title: "Access to\n450+ Universities",
    image: "/centres/NEP-Aligned.webp",
  },
];

export default function CentreService() {
  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          background:
            "url('/study-abroad/Background-2.webp') center/cover no-repeat",
          borderRadius: "20px",
          overflow: "hidden",
          mx: { xs: "16px", md: 5 },
          py: { xs: 8, md: 11.25 },
        }}
      >
        <Container>
          <SectionHeader
            title="What do our"
            highlight="Study Abroad Centres"
            title2="provide"
            mb="2"
          />

          <Typography
            variant="body05"
            component="p"
            sx={{ color: "text.secondary" }}
          >
            The study abroad journey is not an easy one. To help you get through
            each step hassle-free, our team of professionals at MetaApply Study
            Abroad Centres are always there to guide you. MetaApply is your
            one-stop solution for all things related to studying abroad. Whether
            you are a student struggling with your English proficiency exam or
            seeking an education loan, we have everything covered for you.
          </Typography>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              },

              gap: {
                xs: 2,
                md: 3,
              },

              mt: 7.5,
            }}
          >
            {services.map((item) => (
              <Box
                key={item.title}
                sx={{
                  backgroundColor: "common.white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: {
                      xs: 200,
                      md: 180,
                    },
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    p: "25px 20px 30px",
                  }}
                >
                  <Typography
                    variant="heading12"
                    component="h3"
                    sx={{
                      lineHeight: '120%',
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
