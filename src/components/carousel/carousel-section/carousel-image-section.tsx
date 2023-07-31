import React from 'react';
import { ImageCarousel } from '../carousel-image';
import { fetchPropertyDetails } from '../../../api/fetch-property-details';
import { LoadingError } from '../../loading/loading-error';

interface ImageCarouselSectionProps {
  propertyDetailsId?: string;
}

export const ImageCarouselSection = ({ propertyDetailsId }: ImageCarouselSectionProps) => {
  const { data, loading, error } = fetchPropertyDetails(propertyDetailsId);

  const images = data?.imageUrls ?? [];

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há imagens" data={!!data}>
      <ImageCarousel images={images} />
    </LoadingError>
  );
};
