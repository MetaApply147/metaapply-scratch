"use client";

import { Box, Typography, Button } from "@mui/material";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import CustomSlider from "@/components/common/CustomSlider";
import Image from "next/image";

type Slide = {
  id: number;
  title: string;
  pointers: string;
  buttonUrl?: string;
  image?: {
    url: string;
  };
};

type Props = {
  examName?: string;
  slides?: Slide[];
};

export default function PrepSlider({ examName, slides = [] }: Props) {
  if (!slides.length) return null;

  return (
    <Section spacing="lg">
      <SectionHeader
        title="MetaApply TestPrep"
        highlight={`- Your Trusted Partner for ${examName} Preparation`}
        maxWidth="92%"
      />

      <CustomSlider
        data={slides}
        slidesPerView={1}
        spaceBetween={20}
        showArrows
        loop
        disablePadding
        renderItem={(item: Slide) => {
          const pointers = item.pointers?.split("\n\n") || [];

          return (
            <Box
              sx={{
                overflow: "hidden",
                display: "flex",
                backgroundColor: "common.white",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {/* LEFT CONTENT */}
              <Box
                sx={{
                  color: "common.white",
                  background:
                    "radial-gradient(circle , #6E1E92 0%, #000039 100%, #511D77 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  borderRadius: "20px",
                  width: "567px",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <Box sx={{ py: { xs: 3, md: 6 }, px: { xs: 3, md: 5.2 } }}>
                  <Typography variant="heading10" component="h4" mb={4}>
                    {item.title}
                  </Typography>

                  <Box component="ul" sx={{ pl: 0, listStyle: "none", mb: 6 }}>
                    {pointers.map((point, i) => (
                      <Box
                        key={i}
                        component="li"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1.2,
                          fontSize: "14px",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            height: { xs: 18, sm: 20 },
                            width: { xs: 18, sm: 20 },
                            position: "relative",
                            mt: "2px",
                          }}
                        >
                          <Image
                            src="../green-circle-check.svg"
                            fill
                            alt="Check"
                            style={{ objectFit: "contain" }}
                          />
                        </Box>
                        <Typography component="p" variant="body05">
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    href={item.buttonUrl || "#"}
                    size="large"
                  >
                    Download Brochure
                  </Button>
                </Box>
              </Box>

              {/* RIGHT IMAGE */}
              <Box
                sx={{
                  width: "763px",
                  position: "relative",
                  minHeight: { xs: 220, md: "auto" },
                  ml: "-26px",
                  zIndex: 0,
                  right: 0,
                }}
              >
                {item.image?.url && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "0 20px 20px 0",
                      objectPosition: "right",
                    }}
                  />
                )}
              </Box>
            </Box>
          );
        }}
      />
    </Section>
  );
}
