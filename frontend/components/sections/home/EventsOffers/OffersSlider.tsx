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

export default function OffersSlider({ data }: any) {
  if (!data?.length) return null;

  return (
    <CustomSlider
      data={data}
      slidesPerView={2}
      spaceBetween={0}
      renderItem={(item: any) => (
        <Link href={item.link || "#"} key={item.id}>
          <Image
            src={getImageUrl(item.image?.url)}
            alt={item.title}
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