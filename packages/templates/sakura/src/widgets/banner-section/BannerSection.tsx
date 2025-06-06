'use client';

import { BannerCarousel } from '@triple-win/ui';
import React, { useMemo } from 'react';
import type { BannerSectionItem } from './types';
import { BannerContent } from './BannerContent';

interface BannerSectionProps {
  slides: BannerSectionItem[];
}

export const BannerSection = ({ slides }: BannerSectionProps) => {
  const frames = useMemo(() => {
    return slides.map((slide) => ({
      ...slide,
      desktop: {
        ...slide.desktop,
        content: slide.desktop.content && <BannerContent content={slide.desktop.content} />,
      },
      mobile: {
        ...slide.mobile,
        content: slide.mobile.content && <BannerContent content={slide.mobile.content} isMobile />,
      },
    }));
  }, [slides]);

  return (
    <BannerCarousel
      frames={frames}
      heights={{ desktop: 320, mobile: 440 }}
      breakpoint={'lg'}
      noBlur={true}
      classNames={{
        imageClassnames: 'rounded-3xl',
        containerClassnames: 'rounded-3xl',
      }}
    />
  );
};
