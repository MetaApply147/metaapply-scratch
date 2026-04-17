"use client";

import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import Image from "next/image";

const Row = ({ label, value, icon }: any) => {
    const isHTML = typeof value === "string" && value.includes("<");

    return(
        <>
            <Box sx={{ py: 1.5, display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Box sx={{ height: "32px", width: "32px", position: "relative" }}>
                    <Image src={icon} fill style={{ objectFit: "contain" }} alt={label} />
                </Box>
                <Box>
                    <Typography variant="body07" component='span' sx={{color: 'text.secondary', lineHeight: 'normal'}}>
                        {label}
                    </Typography>

                    {isHTML ? (
                            <Typography
                                variant="body05"
                                component="div" 
                                fontWeight={600}
                                sx={{ color: 'primary.main', lineHeight: 'normal' }}
                                dangerouslySetInnerHTML={{ __html: value }}
                            />
                        ) : (
                            <Typography
                                variant="body05"
                                component='p'
                                fontWeight={600}
                                sx={{ color: 'text.secondary', lineHeight: 'normal' }}
                            >
                                {value}
                            </Typography>
                        )}
                </Box>
            </Box>
            <Divider />
        </>
    )
};

const EventDetailCard = ({ event }: any) => {
    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: "6px 6px 10px 10px",
                overflow: "hidden",
                position: "sticky",
                top: 140,
                border: "1px solid #B9B9B9",
                boxShadow: "0 4px 8.5px 2px #0000001A",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    py: 1.2,
                    textAlign: "center",
                }}
            >
                <Typography variant="heading12" color="common.white">
                    Events Details
                </Typography>
            </Box>

            <Box sx={{ px: 4, pt: 2, pb: 4 }}>
                <Row
                    label="Event Title"
                    value={event.eventTitle}
                    icon="/events/title.png"
                />
                <Row
                    label="Event Date"
                    value={new Date(event.eventDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    icon="/events/date-calendar.png"
                />
                <Row
                    label="Duration"
                    value={event.eventDuration}
                    icon="/events/duration.png"
                />
                <Row
                    label="Event Location"
                    value={event.eventLocation}
                    icon="/events/location.png"
                />
                <Row
                    label="Event Registration Details"
                    value={event.eventRegistrationDetails}
                    icon="/events/reg-details.png"
                />

            </Box>
        </Paper>
    );
};

export default EventDetailCard;
