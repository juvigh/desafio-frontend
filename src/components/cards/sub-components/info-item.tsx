import React from 'react';
import { Body2 } from '../../styles/typography/body-2';
import { commonStyles } from './cards-styles';

interface InfoItemProps {
  label: string;
  value: string | number;
  bold?: boolean;
  mediumPrice?: boolean;
}

export const InfoItem = ({ label, value, bold, mediumPrice }: InfoItemProps) => {
  const valueStyle = mediumPrice ? commonStyles.mediumPrice : commonStyles.smallPrice;
  const labelStyle = bold ? 'bold' : 'regular';

  return (
    <div className="info">
      <Body2 weight={labelStyle}>{label}</Body2>
      <p style={valueStyle}>R$ {value}</p>
    </div>
  );
};
