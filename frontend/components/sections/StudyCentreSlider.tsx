"use client";

import CustomSlider from "@/components/common/CustomSlider";

import { studyCentres } from "./Pages/about-us/studyCentresData";
import StudyCentreCard from "./StudyCentreCard";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

type Props = {
  buttonText?: string;
  title?: string;
  highlight? : string;
  sectionBackground?: string;
  disablePadding? : boolean;
};

export default function StudyCentreSlider({
  buttonText = "Book a Visit",
  title = "Walk-in to your nearest",
  highlight = "Study Abroad Centre",
  sectionBackground,
  disablePadding
}: Props) {
  return (
    <Section spacing="lg" sx={{background: sectionBackground, ...(disablePadding && { py: 0 }) }}>
      <SectionHeader title={title} highlight={highlight}/>

      <CustomSlider
        data={studyCentres}
        slidesPerView={4}
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
          },
          480: {
            slidesPerView: 1.4,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        renderItem={(item) => (
          <StudyCentreCard
            item={item}
            buttonText={buttonText}
          />
        )}
      />
    </Section>
  );
}