import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function FranchisePartnership() {
    return (
        <Section
            sx={{
                overflow: "hidden",

                pt: {
                    xs: 5,
                    sm: 6,
                    md: 8,
                    lg: 10,
                },

                pb: {
                    xs: 2,
                    md: 4,
                    lg: 6,
                },
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "minmax(420px,580px) minmax(0,1fr)",
                        },

                        alignItems: "center",

                        gap: {
                            xs: 2,
                            sm: 4,
                            md: 6,
                            lg: "78px",
                        },
                    }}
                >
                    {/* IMAGE */}
                    <Box
                        sx={{
                            position: "relative",

                            width: "100%",

                            maxWidth: {
                                xs: "260px",
                                sm: "340px",
                                md: "440px",
                                lg: "580px",
                            },

                            mx: "auto",

                            order: {
                                xs: 1,
                                lg: 1,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",

                                aspectRatio: "594/433",
                            }}
                        >
                            <Image
                                src="/franchise-partner/map.gif"
                                alt="Franchise Partnership"
                                fill
                                priority
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Box>

                    {/* CONTENT */}
                    <Box
                        sx={{
                            width: "100%",

                            maxWidth: {
                                xs: "100%",
                                sm: "560px",
                                md: "700px",
                                lg: "777px",
                            },

                            mx: "auto",

                            textAlign: {
                                xs: "center",
                                lg: "left",
                            },

                            order: {
                                xs: 2,
                                lg: 2,
                            },
                        }}
                    >
                        <SectionHeader
                            title="Establishing a Global Education Platform with"
                            highlight="Strategic Franchise Partnerships"
                            maxWidth="777px"
                            mb="24px"
                        />

                        <Typography
                            variant="body05"
                            sx={{
                                color: "text.body",

                                fontSize: {
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                },

                                fontWeight: 400,

                                lineHeight: {
                                    xs: "28px",
                                    md: "30px",
                                },

                                letterSpacing: "0%",

                                maxWidth: {
                                    xs: "100%",
                                    sm: "90%",
                                    lg: "777px",
                                },

                                mx: {
                                    xs: "auto",
                                    lg: 0,
                                },
                            }}
                        >
                            Get ready to skyrocket your business with MetaApply. We invite
                            you to embark on a journey to shape the future of the study-abroad
                            industry worldwide. Being one of the most technologically advanced
                            names in study abroad education, our success story knows no
                            bounds. So now we stand out extending an exclusive invitation to
                            passionate individuals and entrepreneurs to join us as
                            franchisees. This is your chance to become a driving force behind
                            academic excellence, cultural enrichment, and global aspirations.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Section>
    );
}