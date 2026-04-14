'use client';

import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import OffersSlider from "./OffersSlider";
import EventsSlider from "./EventsSlider";
import { getServices } from "@/services/httpServices";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

export default function EventsOffers() {
  const [tab, setTab] = useState<'events' | 'offers'>('events');
  const [events, setEvents] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventsRes = await getServices("/events", {
        filters: { category: "upcoming" },
        sort: ["order:asc"],
        populate: ["featuredImage"],
      });

      const offersRes = await getServices("/home-offers-sections", {
        filters: { isActive: true },
        sort: ["order:asc"],
        populate: ["image"],
      });

      if (eventsRes.isSuccess) {
        setEvents(eventsRes.data.data);
      }

      if (offersRes.isSuccess) {
        setOffers(offersRes.data.data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (events.length === 0 && offers.length > 0) {
      setTab("offers");
    }
  }, [events, offers]);

  return (
    <Section spacing="lg" sx={{background: "#F7FAFF" }} >        
        {/* Heading */}
        <SectionHeader title="What’s Happening at" highlight="MetaApply IE"/>

        {/* Tabs */}
        <Stack direction="row" spacing={2} mb={6.5}>
          <Box
            sx={{
              display: "inline-flex",
              border: "1px solid #FF3185",
              borderRadius: "30px",
              background: "#fff",
              width: "fit-content",
            }}
          >
            {/* EVENTS TAB (only if exists) */}
            {events.length > 0 && (
              <Box
                onClick={() => setTab("events")}
                sx={{
                  px: {xs: 4,sm: 6.2},
                  py: {xs: 1,sm: 1.3},
                  borderRadius: "30px",
                  cursor: "pointer",
                  background:
                    tab === "events"
                      ? "linear-gradient(3.52deg, #FF3185 2.88%, #FF7CB1 97.51%)"
                      : "transparent",
                  color: tab === "events" ? "#fff" : "text.primary",
                }}
              >
                <Typography variant="heading14">Events</Typography>
              </Box>
            )}

            {/* OFFERS TAB (only if exists) */}
            {offers.length > 0 && (
              <Box
                onClick={() => setTab("offers")}
                sx={{
                  px: {xs: 4,sm: 6.2},
                  py: {xs: 1,sm: 1.3},
                  borderRadius: "30px",
                  cursor: "pointer",
                  background:
                    tab === "offers"
                      ? "linear-gradient(3.52deg, #FF3185 2.88%, #FF7CB1 97.51%)"
                      : "transparent",
                  color: tab === "offers" ? "#fff" : "text.primary",
                }}
              >
                <Typography variant="heading14">Offers</Typography>
              </Box>
            )}
          </Box>
        </Stack>

        {/* Sliders */}
        {tab === "events" && events.length > 0 && (
          <EventsSlider data={events} />
        )}

        {tab === "offers" && offers.length > 0 && (
          <OffersSlider data={offers} />
        )}
    </Section>
    
  );
}