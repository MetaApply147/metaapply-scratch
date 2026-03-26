'use client';

import { Box } from '@mui/material';
import { useId } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
            mb: 2,
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
position: "absolute",
top: 0,
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: `1px solid ${active ? '#ff4081' : '#ccc'}`,
  color: active ? '#ff4081' : '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: active ? '#ff4081' : '#f5f5f5',
    color: active ? '#fff' : '#000',
  },
});