'use client';

import { BannerCarousel, Button } from '@triple-win/ui';
import React, { useMemo } from 'react';

interface BannerSectionProps {
  // @TODO: define slides types from the backend data
  slides: any;
}

const DesktopBannerContent = ({ content }: any) => (
  <div className={`z-[11] absolute flex gap-7 flex-col bottom-5 justify-center items-center w-full`}>
    <h2>{content.description}</h2>
    {!!content.ctaUrl && (
      <Button size={'lg'} className={'uppercase w-[320px]'} onClick={() => (window.location.href = content.ctaUrl!)}>
        {content.ctaText}
      </Button>
    )}
  </div>
);

const MobileBannerContent = ({ content }: any) => (
  <div className={`z-[11] absolute flex gap-4 flex-col bottom-5 w-full left-6 max-w-[75%]`}>
    <h2>{content.description}</h2>
    {!!content.ctaUrl && (
      <Button size={'lg'} className={'uppercase w-[186px]'} onClick={() => (window.location.href = content.ctaUrl!)}>
        {content.ctaText}
      </Button>
    )}
  </div>
);

export const BannerSection = ({ slides }: BannerSectionProps) => {
  const frames = useMemo(() => {
    return slides.map((slide: any) => ({
      ...slide,
      desktop: {
        ...slide.desktop,
        content: <DesktopBannerContent content={slide.desktop.content} />,
      },
      mobile: {
        ...slide.mobile,
        content: <MobileBannerContent content={slide.mobile.content} />,
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
