"use client";

import {
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CustomSlider from "@/components/common/CustomSlider";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

type Props = {
  events: any[];
};

const getImageUrl = (url?: string) => {
  if (!url) return "";
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

const PastEvents = ({ events }: Props) => {
  if (!events?.length) return null;

  return (
    <Section spacing="lg">
        {/* Heading */}
        <SectionHeader title="Past" highlight="Events" />

        {/* Slider */}
        <CustomSlider
          data={events.slice(0, 8)}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1.15 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          renderItem={(item: any) => <EventCard event={item} />}
        />
    </Section>
  );
};

export default PastEvents;

/* ================= CARD ================= */

const EventCard = ({ event }: any) => {
  return (
    <Link href={`/event/${event.slug}`} key={event.id}  style={{ textDecoration: "none", height: '100%' }}>
        <Box
            sx={{backgroundColor: 'common.white',
                height: '100%',
                boxShadow: '0px 12px 16px -4px #10182812',
                borderRadius: 3,
                cursor: "pointer",
                transition: "0.3s ease",
                overflow: "hidden",

                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                },
            }}
            >
            <Box sx={{height: '151px', width: '100%', position: 'relative'}}>
                <Image src={getImageUrl(event.featuredImage?.url)} fill alt={event.pageTitle} style={{objectFit: 'cover', borderRadius: '12px'}}/>
            </Box>
            <Box sx={{p: 3}}>
                <Typography variant="heading12" component='h5' sx={{lineHeight: 'normal'}} pb={1.5}>
                    {event.pageTitle}
                </Typography>
                <Typography variant="body06" component='p' sx={{lineHeight: 'normal', color: '#64748b'}}>
                    {new Date(event.eventDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </Typography>
            </Box>
        </Box>
    </Link>
  );
};