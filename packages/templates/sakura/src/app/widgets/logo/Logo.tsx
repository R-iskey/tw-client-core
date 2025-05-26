'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useTheme } from 'next-themes';

interface LogoProps {
  image: string | {
    dark: string; light: string;
  };
  alt: string;
}

export const Logo = ({image, alt}: LogoProps) => {
  const { theme } = useTheme();
  return (
    <Link className="block me-2 md:me-[20px] min-w-14 2xl:min-w-52" href="/">
      <Image
        src={typeof image === 'string' ? image : theme === 'light' ? image.light : image.dark}
        width={207}
        height={50}
        alt={alt}
      />
    </Link>
  );
};
