import React from 'react';

interface ProximitiesMapProps {
  latitude: number;
  longitude: number;
}

export const ProximitiesMap = ({ latitude, longitude }: ProximitiesMapProps) => {
  return (
    <iframe
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDFqcjwssTsHGkqm0V2cVmRCNUhfOhxr4I&center=${latitude},${longitude}&zoom=15`}
    ></iframe>
  );
};
