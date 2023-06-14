import React from 'react';
import { Body2 } from '../../styles/typography/body-2';
import { commonStyles } from './cards-styles';

interface InfoItemProps {
  label: string;
  value: string | number;
  mediumPrice?: boolean;
}

  const valueStyle = mediumPrice ? commonStyles.mediumPrice : commonStyles.smallPrice;
export const InfoItem = ({ label, value, mediumPrice }: InfoItemProps) => {

  return (
    <div className="info">
      <Body2 weight={'bold'}>{label}</Body2>
      <p style={valueStyle}>R$ {value}</p>
    </div>
  );
};
