'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import type { FocalPoint, NRCFrameComponent, NRCImage } from './types';
import { cn } from '../../utils/cn';
import { Button } from '../../components/button';

const DEFAULT_BLUR_WIDTH = 200;
const DEFAULT_BLUR_QUALITY = 30;

export const BCFrame = ({
  image,
  priority,
  onLoad,
  loadingComponent,
  blurQuality,
  noBlur,
  imageClassnames,
  content,
}: NRCFrameComponent & {
  priority?: boolean;
  onLoad?: () => void;
  loadingComponent?: React.ReactNode;
  blurQuality?: number;
  noBlur?: boolean;
  imageClassnames?: string;
}) => {
  const [blurUri, setBlurUri] = useState<undefined | string>(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!image?.src || image.blurDataURL || noBlur) {
      return;
    }
    fetch(image.src + `?w=${image.blurWidth || DEFAULT_BLUR_WIDTH}&q=${blurQuality || DEFAULT_BLUR_QUALITY}`)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const base64 = Buffer.from(buffer).toString('base64');
        setBlurUri(`data:image/jpeg;base64,${base64}`);
      })
      .catch(console.error);
  }, [image]);

  const imageStyles: React.CSSProperties = {
    height: '100%',
    objectPosition: getObjectPosition(image, image?.imageFocalPoint),
    width: '100%',
  };
  return (
    <>
      {!!image?.src && (
        <>
          {!loaded &&
            (loadingComponent ? (
              loadingComponent
            ) : (
              <div className="absolute animate-pulse w-full transform h-full" aria-busy="true" />
            ))}
          <Image
            alt={image?.alt as string}
            src={image?.src}
            width={image.width}
            height={image.height}
            style={imageStyles}
            className={cn(
              'absolute inset-0 object-cover transition duration-200',
              !loaded && 'blur-xs',
              imageClassnames
            )}
            priority={priority}
            blurDataURL={noBlur ? undefined : image.blurDataURL || blurUri}
            placeholder={noBlur || (!image.blurDataURL && !blurUri) ? 'empty' : 'blur'}
            onLoad={() => {
              setLoaded(true);
              if (onLoad) onLoad();
            }}
          />
        </>
      )}

      {!!content && (
        <div
          className={`absolute flex gap-7 flex-col bottom-5 justify-center items-center w-full`}
        >
          <h2 className="">{content.description}</h2>
          {!!content.ctaUrl && (
            <Button size={'lg'} className={'uppercase w-[320px]'} onClick={() => (window.location.href = content.ctaUrl!)}>
              {content.ctaText}
            </Button>
          )}
        </div>
      )}
    </>
  );
};

const getObjectPosition = (image?: Partial<StaticImageData> & NRCImage, focal?: FocalPoint) => {
  return image?.width && image?.height && focal?.x && focal?.y
    ? `${100 * (focal?.x / image?.width)}% ${100 * (focal?.y / image?.height)}%`
    : undefined;
};
