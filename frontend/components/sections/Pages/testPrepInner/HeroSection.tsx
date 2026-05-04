"use client";

import Section from "@/components/common/Section";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroProps = {
  data: any;
};

export default function HeroSection({ data }: HeroProps) {
    
  if (!data) return null;

  const {
    title,
    tagline,
    pointers,
    enrolURL,
    brochureUrl,
    rightImage,
    offer,
    offerText,
    offerTime,
  } = data;

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!offerTime) return;

    const endTime = new Date(offerTime).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [offerTime]);

   const format = (num: number) => String(num).padStart(2, "0");

  /* ---------------------------------------
     Fix Strapi Image URL
  --------------------------------------- */
  const imageUrl = rightImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${rightImage.url}`
    : null;

  return (
    <Section
      spacing="none"
      sx={{
        background:
          "url(/test-prep/Innerpages/Hero_section.webp) no-repeat center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
          minHeight: '529px'
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography
            variant="heading05"
            component="h1"
            sx={{ lineHeight: "120%" }}
            mb={4}
          >
            {title}
          </Typography>

          <Typography
            variant="heading12"
            component="p"
            sx={{ mb: 2, fontWeight: 500, color: "text.secondary" }}
          >
            {tagline}
          </Typography>

          {/* POINTS */}
          <Box sx={{ mb: 6 }}>
            {typeof pointers === "string" &&
              pointers
                .split("\n")
                .filter(Boolean)
                .map((point: string, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    {/* ICON */}
                    <Box
                      component="img"
                      src="/green-circle-check.svg"
                      alt="check"
                      sx={{ width: 18, height: 18 }}
                    />

                    {/* TEXT */}
                    <Typography
                      variant="body03"
                      component="p"
                      sx={{ color: "text.secondary" }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
          </Box>

          {/* BUTTONS */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {/* Enrol Now */}
            {enrolURL && (
              <Button
                variant="contained"
                href={enrolURL}
                size="large"
                sx={{
                  p: "19px 32px",
                }}
              >
                Enrol Now
              </Button>
            )}

            {/* Download Brochure */}
            {brochureUrl && (
              <Button
                variant="outlined"
                href={brochureUrl}
                size="large"
                sx={{
                  p: "19px 32px",
                }}
              >
                Download Brochure
              </Button>
            )}
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        {imageUrl && (
          <Box
            sx={{
              position: "absolute",
              height: "530px",
              width: "555px",
              right: 0,
              top: 15,
              '&:before': {
                content: "url(/test-prep/Innerpages/overlay-effect.svg)",
                position: 'absolute',
                left: '-100px',
                top: 0,
                height: '100%',
                width: '100%'
              }
            }}
          >
            <Box
                sx={{
                position: "relative",
                height: "529px",
                width: "384px",
                margin: '0 auto',
                
                }}
            >
                <Image
                src={imageUrl}
                alt="hero"
                fill
                style={{ objectFit: "cover" }}
                />
            </Box>
          </Box>
        )}
      </Box>

      {/* ---------------------------------------
           EARLY BIRD OFFER (BOOLEAN CONTROLLED)
        --------------------------------------- */}
      {offer && (
        <Box
          sx={{
            mt: 1.5,
            borderRadius: "12px",
            background:
              "url(/test-prep/Innerpages/earlyBird_bg.webp) no-repeat center",
            backgroundSize: "cover",
            position: "relative",
            height: "142px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "192px",
              width: "544px",
              bottom: -4,
            }}
          >
            <Image
              fill
              src="/test-prep/Innerpages/early_bird_banner.webp"
              alt="Early Bird"
            />
          </Box>
          <Box sx={{width: '54%', ml: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '8px'}}>
            {/* OFFER TEXT */}
            <Typography variant="heading10" sx={{ color: "navyBlue.600" }}>
              {offerText || "Enrol Now & Get Up to 20% off*"}
            </Typography>

            {/* FIXED TIMER */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: '4px',
              }}
            >
            <Box>
              <Typography variant="heading12" component='p' sx={{ color: "navyBlue.600", backgroundColor: 'common.white', px: 1.7, py: 0.6, borderRadius: '6.29px', mr: 0.5}}>
                Ends in
              </Typography>
              </Box>

             <Box sx={timerBox}>{format(timeLeft.hours)}</Box>
              <Typography>:</Typography>

              <Box sx={timerBox}>{format(timeLeft.minutes)}</Box>
              <Typography>:</Typography>

              <Box sx={timerBox}>{format(timeLeft.seconds)}</Box>

              <Typography variant="heading12" component='p' sx={{ background: "#FF0000", color: 'common.white', px: 1.7, py: 0.6, borderRadius: '6.29px'}}>
                Hours
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Section>
  );
}

/* ---------------------------------------
   Timer Box Style
--------------------------------------- */
const timerBox = {
  background: "#FF0000",
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  color: "common.white",
  px: 1,
  fontSize: '18px',
  py: 0.75,
  borderRadius: "6.29px",
};
