'use client';

import { Box, Container } from '@mui/material';
import ReferralContent from './ReferralContent';
import ReferralForm from './ReferralForm';

export default function ReferralSection() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(130.93deg, #FFF2DF 8.63%, #FFE7F0 60.48%)',
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '499px 756px',
                        },
                        justifyContent: 'center',
                        gap: {
                            xs: 5,
                            md: '42px',
                        },
                        alignItems: 'center',
                    }}
                >
                    <ReferralContent />
                    <ReferralForm />
                </Box>
            </Container>
        </Box>
    );
}