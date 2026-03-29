import Image from 'next/image';

export default function BannerImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="banner"
      width={500}
      height={500}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}