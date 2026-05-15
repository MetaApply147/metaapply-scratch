"use client";

import Section from "@/components/common/Section";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type GalleryImageType = {
  url?: string;
};

type Props = {
  gallery?: {
    image1?: GalleryImageType;
    image2?: GalleryImageType;
    image3?: GalleryImageType;
    image4?: GalleryImageType;
    image5?: GalleryImageType;
    image6?: GalleryImageType;
  };
};



// Base url 

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!BASE_URL) {
  throw new Error("Missing API URL");
}

const getImageUrl = (url?: string): string | null => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

export default function CentreGallery({ gallery }: Props) {
  const images = [
    gallery?.image1?.url,
    gallery?.image2?.url,
    gallery?.image3?.url,
    gallery?.image4?.url,
    gallery?.image5?.url,
    gallery?.image6?.url,
  ];

  return (
    <Section spacing="lg">
      <Box>
        {/* Heading */}
        <Typography
          variant="heading08"
          component="h2"
          sx={{
            mb: 4,
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
            }}
          >
            Gallery
          </Box>
        </Typography>

        {/* Gallery Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 2,
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              display: "grid",
              gap: 2,
            }}
          >
            {images[0] && (
              <GalleryImage src={images[0]} height={220} />
            )}

            {images[1] && (
              <GalleryImage src={images[1]} height={260} />
            )}
          </Box>

          {/* Center Large Image */}
          <Box>
            {images[2] && (
              <GalleryImage
                src={images[2]}
                height={490}
              />
            )}
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              display: "grid",
              gap: 2,
            }}
          >
            {images[3] && (
              <GalleryImage src={images[3]} height={260} />
            )}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              {images[4] && (
                <GalleryImage
                  src={images[4]}
                  height={210}
                />
              )}

              {images[5] && (
                <GalleryImage
                  src={images[5]}
                  height={210}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

/* ================= IMAGE CARD ================= */

function GalleryImage({
  src,
  height,
}: {
  src: string;
  height: number;
}) {
  const imageUrl = getImageUrl(src);

  if (!imageUrl) return null;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Image
        src={imageUrl}
        alt="Gallery Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
}