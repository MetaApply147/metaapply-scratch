"use client";

import CustomSlider from "@/components/common/CustomSlider";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Typography } from "@mui/material";

type Props = {
    card: any[];
};

export default function BlogsPodcast({ card }: Props) {

    return (
        <Section spacing="lg"
            sx={{
                backgroundColor: '#F7FAFF'
            }}>
                {/* Heading */}
                <SectionHeader title="Explore" highlight="MetaApply Podcasts"/>

                <CustomSlider
                    data={card}
                    slidesPerView={1}
                    spaceBetween={0}
                    showArrows={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                    }}
                    renderItem={(card) => (
                        <Typography>Test</Typography>
                    )}
                />
        </Section>
    );
}
