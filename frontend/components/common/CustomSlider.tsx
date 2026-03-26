'use client';

import { Box, colors } from '@mui/material';
import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

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
};

/* ================= COMPONENT ================= */

export default function CustomSlider<T>({
  data,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 20,
  breakpoints,
  showArrows = true,
}: CustomSliderProps<T>) {
  const id = useId();

  const prevClass = `prev-${id}`;
  const nextClass = `next-${id}`;

  return (
    <Box>
      {/* ARROWS */}
      {showArrows && (
        <Box
          sx={{
            display: 'flex',
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
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={
          showArrows
            ? {
                prevEl: `.${prevClass}`,
                nextEl: `.${nextClass}`,
              }
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
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
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