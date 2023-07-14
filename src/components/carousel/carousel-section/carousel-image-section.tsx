import React from 'react';
import { ImageCarousel } from '../carousel-image';

interface ImageCarouselSectionProps {
  images: string[];
}

export const ImageCarouselSection = ({ images }: ImageCarouselSectionProps) => {
  return (
    <section>
      <ImageCarousel images={images} />
    </section>
  );
};
