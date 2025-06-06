export interface BannerSectionItem {
  desktop: BannerSectionSlide;
  mobile: BannerSectionSlide;
}


export interface BannerSectionContent {
  description: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface BannerSectionSlide {
  image: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  content?: BannerSectionContent
}
