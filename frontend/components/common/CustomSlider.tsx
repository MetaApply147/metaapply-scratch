'use client';

import { Box, colors } from '@mui/material';
import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import palette from '@/theme/palette';

/* ================= TYPES ================= */

type CustomSliderProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;

  // optional configs
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: any;
  showArrows?: boolean;
  showPagination?: boolean;
  paginationOnDesktop?: boolean;
};

/* ================= COMPONENT ================= */

export default function CustomSlider<T>({
  data,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 12,
  breakpoints,
  showArrows = true,
  showPagination = false,
  paginationOnDesktop = false,
}: CustomSliderProps<T>) {
  const id = useId();

  const prevClass = `prev-${id}`;
  const nextClass = `next-${id}`;

  const shouldShowArrows = showArrows && data.length > slidesPerView;

  return (
    <Box sx={{ mx: "-10px", my: "-30px" }}>
      {/* ARROWS */}
      {shouldShowArrows && (
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // ← was: display: 'flex'
            justifyContent: 'flex-end',
            gap: 1,
            position: "absolute",
            top: 8,
            right: 16,
          }}
        >
          <Box className={prevClass} sx={arrowStyle(false)}>
            <ArrowBackIosNewIcon fontSize="small" />
          </Box>

          <Box className={nextClass} sx={arrowStyle(true)}>
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        </Box>
      )}

      {/* SLIDER */}
      {/* ↓ added wrapper Box for pagination dot styles on mobile only */}
      <Box
        sx={{
          '.swiper': { pb: { xs: '36px', md: '0px' } },
          '.swiper-pagination': {
            display: showPagination
              ? paginationOnDesktop
                ? 'block'
                : { xs: 'block', md: 'none' }
              : 'none',
          },
          '--swiper-pagination-color': palette.pink[400],
          '--swiper-pagination-bullet-inactive-color': palette.gray[200],
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '8px',
          '--swiper-pagination-bullet-horizontal-gap': '4px',
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]} // ← added Pagination
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation={
            shouldShowArrows
              ? {
                  prevEl: `.${prevClass}`,
                  nextEl: `.${nextClass}`,
                }
              : false
          }
          pagination={
            showPagination
              ? { clickable: true }
              : false
          }
          breakpoints={
            breakpoints || {
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView },
            }
          }
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id} style={{ display: 'flex', height: 'auto' }}>
              <Box sx={{ px: "10px", py: "30px", width: "100%", display: 'flex', flexDirection: 'column',  }}>
                {renderItem(item)}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

/* ================= STYLES ================= */

const arrowStyle = (active: boolean) => ({
  width: 45,
  height: 45,
  borderRadius: '50%',
  border: `1px solid ${palette.pink[400]}`,
  color: `${palette.pink[400]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: `${palette.pink[400]}`,
    color: `${palette.common.white}`,
    border: "1px solid #ff4081"
  },

  // DISABLED STATE
  '&.swiper-button-disabled': {
    border: '1px solid #E0E0E0',
    color: '#BDBDBD',
    cursor: 'not-allowed',
    backgroundColor: '#fff',

    '&:hover': {
      backgroundColor: '#fff',
      color: '#BDBDBD',
    },
  },
});