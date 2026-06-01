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
                    xs: 6,
                    md: 8,
                    lg: 10,
                },
                pb: {
                    xs: 6,
                    md: 8,
                    lg: 10,
                },
            }}
        >
            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    px: {
                        xs: "16px",
                        sm: "24px",
                        md: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "560px 1fr",
                        },
                        alignItems: "center",
                        columnGap: {
                            xs: 0,
                            lg: "72px",
                        },
                        rowGap: {
                            xs: 5,
                            md: 6,
                        },
                    }}
                >
                    {/* IMAGE */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                lg: "flex-start",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: {
                                    xs: "260px",
                                    sm: "340px",
                                    md: "460px",
                                    lg: "560px",
                                },
                                aspectRatio: "594 / 433",
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
                            display: "flex",
                            flexDirection: "column",
                            alignItems: {
                                xs: "center",
                                lg: "flex-start",
                            },
                            textAlign: {
                                xs: "left",
                                lg: "left",
                            },
                            m: 0,
                            p: 0,
                        }}
                    >
                        <SectionHeader
                            title="Establishing a Global Education Platform with"
                            highlight="Strategic Franchise Partnerships"
                            mb="24px"
                        />

                        <Typography
                            variant="body05"
                            sx={{
                                color: "text.body",
                                fontWeight: 400,
                                lineHeight: {
                                    xs: "28px",
                                    md: "30px",
                                },
                                fontSize: {
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                },
                                width: "100%",
                                maxWidth: {
                                    xs: "100%",
                                    lg: "780px",
                                },
                                textAlign: "left",
                                m: 0,
                            }}
                        >
                            Get ready to skyrocket your business with MetaApply.
                            We invite you to embark on a journey to shape the
                            future of the study-abroad industry worldwide.
                            Being one of the most technologically advanced names
                            in study abroad education, our success story knows
                            no bounds. So now we stand out extending an
                            exclusive invitation to passionate individuals and
                            entrepreneurs to join us as franchisees. This is
                            your chance to become a driving force behind
                            academic excellence, cultural enrichment, and global
                            aspirations.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Section>
    );
}