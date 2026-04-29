"use client";

import { useEffect, useState } from "react";
import BaseBanner from "./BaseBanner";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { getServices } from "@/services/httpServices";

type Props = {
  slug?: string;
  heroData?: any;
  minHeight?: any;
  size?: "default" | "medium" | "large";
  leftExtra?: React.ReactNode;
  disableSectionPadding?: boolean;
  rightMaxWidth?: number | string;
  alignSelf?: string;
  rightComponent?: React.ReactNode;
  width?: string;
};

export default function HeroBanner({
  slug,
  heroData,
  minHeight,
  size,
  leftExtra,
  disableSectionPadding,
  rightMaxWidth,
  alignSelf,
  rightComponent,
  width
}: Props) {
  const [hero, setHero] = useState<any>(null);

  useEffect(() => {
    if (heroData) {
      setHero(heroData);
      return;
    }

    if (!slug) return;

    const fetchData = async () => {
      const res = await getServices("/pages", {
        filters: { slug: { $eq: slug } },
        populate: {
          hero: {
            populate: ["logo", "rightImage", "backgroundImage"],
          },
        },
      });

      if (res.isSuccess) {
        const page = res.data.data[0];
        setHero(page?.hero);
      }
    };

    fetchData();
  }, [slug, heroData]);

  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const getImageUrl = (media: any) => {
    if (!media?.url) return "";
    if (media.url.startsWith("http")) return media.url;
    return `${BASE_URL}${media.url}`;
  };

  if (!hero) return null;

  return (
    <BaseBanner
      backgroundImage={getImageUrl(hero.backgroundImage)}
      overlay={hero.overlay}
      minHeight={minHeight}
      disableSectionPadding={disableSectionPadding}
      rightMaxWidth={rightMaxWidth}
      alignSelf={alignSelf}
      width={width}
      left={
        <>
          <BannerContent
            logo={getImageUrl(hero.logo)}
            showLogo={hero.showLogo}
            title={hero.title}
            highlight={hero.highlight}
            description={hero.description}
            ctaText={hero.ctaText}
            ctaUrl={hero.ctaUrl}
            ctaTarget={hero.ctaTarget}
            textColor={hero.textColor}
            size={size}
            slug={slug}
          />

          {leftExtra}
        </>
      }
      right={
        rightComponent
          ? rightComponent
          : hero.rightImage && (
              <BannerImage src={getImageUrl(hero.rightImage)} />
            )
      }
    />
  );
}
