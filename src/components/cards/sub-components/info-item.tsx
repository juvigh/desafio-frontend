import React from 'react';
import { Price } from '../../../styles/typography/prices';
import { Body2 } from '../../../styles/typography/body-2';

interface InfoItemProps {
  label: string;
  value: string | number;
  mediumPrice?: boolean;
}

export const InfoItem = ({ label, value, mediumPrice }: InfoItemProps) => {
  const priceSize = mediumPrice ? 'medium' : 'small';

  return (
    <div className="info">
      <Body2 weight={'bold'}>{label}</Body2>
      <Price size={priceSize}>R$ {value}</Price>
    </div>
  );
};
