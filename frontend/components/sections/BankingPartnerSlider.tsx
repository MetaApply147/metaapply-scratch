"use client";

import { Box } from "@mui/material";
import CustomSlider from "@/components/common/CustomSlider";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import Section from "../common/Section";

/* ================= TYPES ================= */

type PartnerItem = {
  id: number;
  name: string;
  logo: string;
};

type Props = {
  title: string;
  highlightText: string;
  data: PartnerItem[];
};

/* ================= COMPONENT ================= */

export default function BankingPartnerSlider({
  title,
  highlightText,
  data,
}: Props) {
  return (
    <Section spacing="lg">
      <Box sx={{ position: "relative" }}>
        {/* HEADER */}
        <SectionHeader
          title={title}
          highlight={highlightText}
          
        />

        {/* SLIDER */}
        <CustomSlider
          data={data}
          slidesPerView={4}   
          spaceBetween={16}
          renderItem={(item) => <PartnerCard item={item} />}
        />
      </Box>
    </Section>
  );
}

/* ================= CARD ================= */

const PartnerCard = ({ item }: { item: PartnerItem }) => {
  return (
    <Box
      sx={{ 
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "16px",
        boxShadow: "0px 6px 18px rgba(0,0,0,0.06)",     
      }}
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={300}
        height={112}
        style={{
          width: "auto",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};