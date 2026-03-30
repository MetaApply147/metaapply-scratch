'use client';

import Image from 'next/image';

export default function BannerImage({ src }: { src: string }) {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt="banner"
      width={100}
      height={100}
      style={{
        width: 'auto',
        height: '100%',
        objectFit: 'contain',
      }}
      priority
    />
  );
}