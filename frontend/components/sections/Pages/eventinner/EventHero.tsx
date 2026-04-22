"use client";

import Section from "@/components/common/Section";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const EventHero = ({ event }: any) => {
  return (
    <Section spacing="lg" 
        sx={{
            backgroundImage: 'url(/events/Event-Internal-BG-Banner.webp)',
            p: '0 !important',
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "space-between",
            }}
            >
            <Typography
                variant="heading05"
                component="h1"
                sx={{color: 'common.white', width: '55%', lineHeight: 'normal'}}
            >
                {event.pageTitle}
            </Typography>

            <Box sx={{ position: 'relative', height: "422px", width: '480px'}}>
                <Image
                src="/events/Events-Internal-Banner-Girl.webp"
                alt="Banner Image"
                fill
                style={{objectFit: 'contain', objectPosition: 'bottom'}}
                />
            </Box>
        </Box>
    </Section>
    
  );
};

export default EventHero;