import SectionHeader from "@/components/common/SectionHeader";
import { Box, Container, Typography } from "@mui/material";

export function MakeYourMark() {
    return (
        <Box
            sx={{
                py: {
                    xs: 6,
                    md: 10,
                },

                background: '#F8F8F8',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',

                        maxWidth: '1116px',

                        mx: 'auto',

                        display: 'flex',
                        flexDirection: 'column',

                        gap: {
                            xs: 2,
                            md: 4,
                        },
                    }}
                >
                    {/* HEADING */}
                    <Box>
                        <SectionHeader
                            title="Make Your Mark -"
                            highlight="On Campus & Beyond"
                            mb="16px"
                            tagline={"Curious? Ambitious? Ready to level up outside the classroom?"}
                            taglineColor="pink.400"
                        />
                    </Box>

                    {/* DESCRIPTION */}
                    <Typography
                        sx={{
                            typography: 'body03',
                            color: 'text.body',
                            maxWidth: '1116px',
                            mx: 'auto',
                            fontSize: {
                                xs: '16px',
                                sm: '18px',
                                md: '24px',
                            },
                            lineHeight: '160%',
                        }}
                    >
                        Join the MetaApply Global Student Ambassador Program
                        – a space for students who want real-world skills,
                        resume-worthy experience, and rewards that go beyond
                        just “exposure.”
                    </Typography>

                    {/* BOTTOM TEXT */}
                    <Typography
                        sx={{
                            typography: 'body03',

                            color: 'text.body',

                            fontSize: {
                                xs: '16px',
                                sm: '18px',
                                md: '24px',
                            },

                            lineHeight: '160%',
                        }}
                    >
                        From{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'pink.400',
                            }}
                        >
                            passion
                        </Box>{' '}
                        to{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'pink.400',
                            }}
                        >
                            profit
                        </Box>
                        . From{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'pink.400',
                            }}
                        >
                            presence
                        </Box>{' '}
                        to{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'pink.400',
                            }}
                        >
                            purpose
                        </Box>
                        . From{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'pink.400',
                            }}
                        >
                            initiative
                        </Box>{' '}
                        to{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'pink.400',
                            }}
                        >
                            impact
                        </Box>
                        .
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}