import React from 'react';
import { Body2 } from '../../styles/typography/body-2';
import { commonStyles } from './cards-styles';

interface InfoItemProps {
  label: string;
  value: string | number;
  isBold?: boolean;
  isMediumPrice?: boolean;
}

export const InfoItem = ({ label, value, isBold, isMediumPrice }: InfoItemProps) => {
  const valueStyle = isMediumPrice ? commonStyles.mediumPrice : commonStyles.smallPrice;
  const labelStyle = isBold ? 'bold' : 'regular';

  return (
    <div className="info">
      <Body2 weight={labelStyle}>{label}</Body2>
      <p style={valueStyle}>R$ {value}</p>
    </div>
  );
};
