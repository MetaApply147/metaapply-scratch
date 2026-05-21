"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import CustomSlider from "@/components/common/CustomSlider";
import { Box } from "@mui/material";
import Image from "next/image";

/* ================= TYPES ================= */

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

/* ================= BASE URL ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!BASE_URL) {
  throw new Error("Missing API URL");
}

const getImageUrl = (url?: string): string | null => {
  if (!url) return null;

  if (url.startsWith("http")) return url;

  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

/* ================= COMPONENT ================= */

export default function CentreGallery({ gallery }: Props) {
  const images = [
    gallery?.image1?.url,
    gallery?.image2?.url,
    gallery?.image3?.url,
    gallery?.image4?.url,
    gallery?.image5?.url,
    gallery?.image6?.url,
  ];

  const slides = [
    {
      type: "two-images",
      images: [images[0], images[1]],
    },
    {
      type: "single-image",
      images: [images[2]],
    },
    {
      type: "three-images",
      images: [images[3], images[4], images[5]],
    },
  ];

  return (
    <Section spacing="lg">
      <Box>
        <SectionHeader title="Our" highlight="Gallery" />

        <Box sx={{minHeight: 577}}>
          <CustomSlider
            data={slides}
            slidesPerView={3}
            showPagination
            showArrows
            disablePadding
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            renderItem={(item) => (
              <GallerySlide item={item} />
            )}
          />
        </Box>
      </Box>
    </Section>
  );
}

/* ================= SLIDE ================= */

function GallerySlide({
  item,
}: {
  item: {
    type: string;
    images: (string | undefined)[];
  };
}) {
  // FIRST COLUMN → 2 IMAGES
  if (item.type === "two-images") {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gap: 2,
          // height: {
          //   xs: 420,
          //   md: 580,
          // },
          height: '100%',
        }}
      >
        {item.images[0] && (
          <GalleryImage src={item.images[0]} />
        )}

        {item.images[1] && (
          <GalleryImage src={item.images[1]} />
        )}
      </Box>
    );
  }

  // SECOND COLUMN → 1 IMAGE
  if (item.type === "single-image") {
    return (
      <Box
        sx={{
          // height: {
          //   xs: 420,
          //   md: 580,
          // },
          height: '100%',
        }}
      >
        {item.images[0] && (
          <GalleryImage
            src={item.images[0]}
            fullHeight
          />
        )}
      </Box>
    );
  }

  // THIRD COLUMN → 1 TOP + 2 BOTTOM
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gap: 2,
       height: '100%',
      }}
    >
      <Box>
        {item.images[0] && (
          <GalleryImage src={item.images[0]} />
        )}
      </Box>

      <Box
        sx={{
           // height: {
        //   xs: 420,
        //   md: 580,
        // },display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        {item.images[1] && (
          <GalleryImage src={item.images[1]} />
        )}

        {item.images[2] && (
          <GalleryImage src={item.images[2]} />
        )}
      </Box>
    </Box>
  );
}

/* ================= IMAGE ================= */

function GalleryImage({
  src,
  fullHeight = false,
}: {
  src: string;
  fullHeight?: boolean;
}) {
  const imageUrl = getImageUrl(src);

  if (!imageUrl) return null;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: '100%',
        overflow: "hidden",
        borderRadius: "0px",
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