import React from 'react';
import { API_KEY } from '../../config/keys';

interface ProximitiesMapProps {
  latitude: number;
  longitude: number;
}

export const ProximitiesMap = ({ latitude, longitude }: ProximitiesMapProps) => {
  return (
    <iframe
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${latitude},${longitude}&zoom=15`}
    ></iframe>
  );
};
