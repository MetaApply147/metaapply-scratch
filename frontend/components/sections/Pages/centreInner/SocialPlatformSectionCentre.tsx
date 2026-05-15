"use client";

import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Section from "@/components/common/Section";
import Image from "next/image";
import Link from "next/link";

type Props = {
  facebookUrl?: string;
  instagramUrl?: string;
};

export default function SocialPlatformSectionCentre({
  facebookUrl,
  instagramUrl,
}: Props) {
  return (
    <Section spacing="lg" sx={{pt: '0 !important'}}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          border: "1px solid #FF3185",
          borderRadius: "24px",
          px: { xs: 3, md: 8 },
          py: { xs: 3, md: 7 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          backgroundColor: "common.white",
          boxShadow: "0px 8px 40px #FFD2E4",
        }}
      >
        {/* Left Content */}
        <Typography
          variant="heading08"
          component='h2'
        >
          Explore more on our{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
            }}
          >
            Social Platform
          </Box>
        </Typography>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3.5,
          }}
        >
          {facebookUrl && (
            <Link href={facebookUrl} target="_blank">
              <Box sx={{height: 48, width: 48, position: 'relative'}}>
                <Image fill src='/centres/facebook-img.svg' alt="Facebook" style={{objectFit: 'contain'}}/>
              </Box>
            </Link>
          )}

          {instagramUrl && (
            <Link href={instagramUrl} target="_blank">
              <Box sx={{height: 48, width: 48, position: 'relative'}}>
                <Image fill src='/centres/insta-img.svg' alt="Facebook" style={{objectFit: 'contain'}}/>
              </Box>
            </Link>
          )}
        </Box>
      </Box>
    </Section>
  );
}