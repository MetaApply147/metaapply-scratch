'use client';

import CustomSlider from "@/components/common/CustomSlider";
import Image from "next/image";
import Link from "next/link";

const getImageUrl = (url?: string) => {
  if (!url) return "";
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

export default function EventsSlider({ data }: any) {
  if (!data?.length) return null;

  return (
    <CustomSlider
      data={data}
      slidesPerView={2}
      spaceBetween={0}
      renderItem={(event: any) => (
        <Link href={`/events/${event.slug}`} key={event.id}>
          <Image
            src={getImageUrl(event.featuredImage?.url)}
            alt={event.eventTitle}
            width={600}
            height={320}
            style={{
              borderRadius: 20,
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </Link>
      )}
    />
  );
}