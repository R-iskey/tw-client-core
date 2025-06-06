import { Button, cn } from '@triple-win/ui';
import React from 'react';
import type { BannerSectionContent } from './types';

interface BannerContentProps {
  content: BannerSectionContent;
  isMobile?: boolean;
}

export const BannerContent = ({ content, isMobile }: BannerContentProps) => {
  return (
    <div className={cn(`z-[11] absolute flex flex-col bottom-5 w-full`, isMobile ? 'gap-4 left-6 max-w-[75%]' : 'gap-7 justify-center items-center')}>
      <h2>{content.description}</h2>
      {!!content.ctaUrl && (
        <Button size={'lg'} className={cn('uppercase', isMobile ? 'w-[186px]' : 'w-[320px]')} onClick={() => (window.location.href = content.ctaUrl!)}>
          {content.ctaText}
        </Button>
      )}
    </div>
  )
}
