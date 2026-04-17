"use client";

import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Section from "@/components/common/Section";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  upcoming: any[];
  past: any[];
  loading: boolean;
};

const getImageUrl = (url?: string) => {
  if (!url) return "";
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};


const EventsTabs = ({ upcoming, past, loading }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  const router = useRouter();

  return (
    <Section spacing="lg" sx={{backgroundColor: '#f1f5f9'}}>
        <Box>
            {/* Tabs */}
            <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { display: "none" } }} 
                sx={{
                    minHeight: "auto",
                    borderRadius: "30px",
                    overflow: "hidden",
                    display: "inline-flex",
                    border: "1px solid #2e318c",
                    backgroundColor: "common.white",
                    width: "max-content",
                }}
            >
                <Tab
                label="Upcoming Event"
                sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: value === 0 ? "primary.main" : "#2e318c",
                    minHeight: "43px",
                    px: 2,
                    py: 1,
                    width: '250px',
                    borderRight: "1px solid #2E3192",
                    fontFamily: 'var(--font-body)'
                }}
                />

                <Tab
                label="Past Event"
                sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: value === 1 ? "primary.main" : "#2e318c",
                    minHeight: "43px",
                    px: 2,
                    py: 1,
                    width: '250px',
                    fontFamily: 'var(--font-body)'
                }}
                />
            </Tabs>

            {/* Content */}
            <Box sx={{ mt: 6 }}>
                {value === 0 && (
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3}}>
                    {loading ? (
                        <Typography variant="body05">Loading...</Typography>
                    ) : upcoming.length === 0 ? (
                        <Typography variant="body05">No upcoming events</Typography>
                    ) : upcoming.map((event) => (
                            <Link href={`/event/${event.slug}`} key={event.id}  style={{ textDecoration: "none" }}>
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
                        ))
                    }
                </Box>
                )}

                {value === 1 && (
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3}}>
                    {loading ? (
                        <Typography variant="body05">Loading...</Typography>
                    ) : upcoming.length === 0 ? (
                        <Typography variant="body05">No upcoming events</Typography>
                    ) : 
                    past.map((event) => (
                        <Link key={event.id} href={`/event/${event.slug}`} style={{ textDecoration: "none" }}>
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
                        ))
                    }
                </Box>
                )}
            </Box>
        </Box>
    </Section>
    
  );
};

export default EventsTabs;