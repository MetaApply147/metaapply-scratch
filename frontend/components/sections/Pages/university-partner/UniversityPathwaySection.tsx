'use client';

import {
    Box,
    Container,
    Typography,
    useMediaQuery,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import Image from 'next/image';

import SectionHeader from '@/components/common/SectionHeader';
import CustomSlider from '@/components/common/CustomSlider';

type PathwayItem = {
    icon: string;
    title: string;
};

type Props = {
    items?: PathwayItem[];
};

const defaultItems: PathwayItem[] = [
    {
        icon: '/university-partner/students.svg',
        title: 'Thousands of active,\nenrolled-intent students',
    },
    {
        icon: '/university-partner/countries.svg',
        title: 'Students from 50+\ncountries',
    },
    {
        icon: '/university-partner/applications.svg',
        title: 'Applications reviewed\nbefore they reach you',
    },
    {
        icon: '/university-partner/recruitment.svg',
        title: 'Streamlined recruitment,\nstart to finish',
    },
];

export default function UniversityPathwaySection({
    items = defaultItems,
}: Props) {
    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down('md')
    );

    const PathwayCard = ({
        item,
    }: {
        item: PathwayItem;
    }) => {
        return (
            <Box
                sx={{
                    display: 'flex',

                    flexDirection: 'column',

                    alignItems: 'center',

                    textAlign: 'center',

                    minWidth: 0,
                }}
            >
                {/* CIRCLE */}
                <Box
                    sx={{
                        width: {
                            xs: '120px',
                            sm: '150px',
                            md: '160px',
                            lg: '200px',
                        },

                        height: {
                            xs: '120px',
                            sm: '150px',
                            md: '160px',
                            lg: '200px',
                        },

                        borderRadius: '50%',

                        background: '#FFFFFF',

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'center',

                        boxShadow:
                            '0px 2px 32px rgba(178, 178, 178, 0.20)',

                        mb: {
                            xs: 2,
                            md: 3,
                        },

                        mx: 'auto',

                        position: 'relative',

                        zIndex: 2,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',

                            width: {
                                xs: '55px',
                                sm: '70px',
                                md: '75px',
                                lg: '100px',
                            },

                            height: {
                                xs: '55px',
                                sm: '70px',
                                md: '75px',
                                lg: '100px',
                            },
                        }}
                    >
                        <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                </Box>

                {/* TEXT */}
                <Typography
                    sx={{
                        fontFamily:
                            'Plus Jakarta Sans',

                        maxWidth: {
                            xs: '180px',
                            sm: '220px',
                            md: '200px',
                            lg: '242px',
                        },

                        fontSize: {
                            xs: '14px',
                            sm: '16px',
                            md: '17px',
                            lg: '20px',
                        },

                        lineHeight: {
                            xs: '20px',
                            sm: '22px',
                            md: '24px',
                        },

                        fontWeight: 500,

                        color: '#202020',

                        whiteSpace: 'pre-line',
                    }}
                >
                    {item.title}
                </Typography>
            </Box>
        );
    };

    return (
        <Box
            component="section"
            sx={{
                px: {
                    xs: 2,
                    sm: 3,
                    md: 5,
                },

                mb: {
                    xs: 5,
                    md: 8,
                },

                '.swiper-pagination': {
                    mt: 2,
                },
            }}
        >
            {/* BG WRAPPER */}
            <Box
                sx={{
                    width: '100%',

                    maxWidth: '1838px',

                    mx: 'auto',

                    position: 'relative',

                    overflow: 'hidden',

                    borderRadius: {
                        xs: '20px',
                        md: '24px',
                    },

                    background: '#fff',

                    py: {
                        xs: 5,
                        md: '40px',
                    },

                    '&::before': {
                        content: '""',

                        position: 'absolute',

                        inset: 0,

                        backgroundImage:
                            'url("/university-partner/bg-img.svg")',

                        backgroundSize: 'cover',

                        backgroundPosition: 'center',

                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="xl">
                    {/* HEADER */}
                    <Box
                        sx={{
                            position: 'relative',

                            zIndex: 2,

                            mb: {
                                xs: 5,
                                md: '52px',
                            },
                        }}
                    >
                        <SectionHeader
                            title="University"
                            highlight="Pathway"
                        />
                    </Box>

                    {/* MAIN */}
                    <Box
                        sx={{
                            position: 'relative',

                            zIndex: 2,

                            width: '100%',

                            maxWidth: '1323px',

                            mx: 'auto',
                        }}
                    >
                        {!isMobile && (
                            <>
                                <Box
                                    sx={{
                                        position:
                                            'absolute',

                                        top: '100px',

                                        left: '11%',

                                        width: '78%',

                                        borderTop:
                                            '1px dashed #15186C',

                                        zIndex: 1,
                                    }}
                                />

                                {[1, 2, 3].map(
                                    (item) => (
                                        <Box
                                            key={item}
                                            sx={{
                                                position:
                                                    'absolute',

                                                top: '95px',

                                                left:
                                                    item ===
                                                        1
                                                        ? '24%'
                                                        : item ===
                                                            2
                                                            ? '49.5%'
                                                            : '75%',

                                                width:
                                                    '12px',

                                                height:
                                                    '12px',

                                                borderTop:
                                                    '2px solid #15186C',

                                                borderRight:
                                                    '2px solid #15186C',

                                                transform:
                                                    'rotate(45deg)',

                                                zIndex: 2,
                                            }}
                                        />
                                    )
                                )}
                            </>
                        )}
                        {isMobile ? (
                            <Box mt={2}>
                                <CustomSlider
                                    data={items}
                                    slidesPerView={
                                        1
                                    }
                                    spaceBetween={
                                        16
                                    }
                                    showArrows={
                                        false
                                    }
                                    showPagination
                                    loop={false}
                                    disablePadding
                                    breakpoints={{
                                        0: {
                                            slidesPerView:
                                                1,

                                            spaceBetween: 14,
                                        },

                                        480: {
                                            slidesPerView:
                                                2,

                                            spaceBetween: 16,
                                        },

                                        600: {
                                            slidesPerView:
                                                2,

                                            spaceBetween: 18,
                                        },
                                    }}
                                    renderItem={(
                                        item: PathwayItem
                                    ) => (
                                        <PathwayCard
                                            item={
                                                item
                                            }
                                        />
                                    )}
                                />
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display:
                                        'grid',

                                    gridTemplateColumns:
                                        'repeat(4,1fr)',

                                    gap: {
                                        md: 3,
                                        lg: 4,
                                    },

                                    alignItems:
                                        'start',

                                    position:
                                        'relative',

                                    zIndex: 2,
                                }}
                            >
                                {items.map(
                                    (item) => (
                                        <PathwayCard
                                            key={
                                                item.title
                                            }
                                            item={
                                                item
                                            }
                                        />
                                    )
                                )}
                            </Box>
                        )}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}