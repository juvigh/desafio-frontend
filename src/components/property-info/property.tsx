import React from 'react';
import { propertyStyles } from './property-info';
import { H4 } from '../../styles/typography/h4';
import { colors } from '../../styles/colors';

interface PropertyInfoProps {
  icon: React.ReactNode;
  title: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const PropertyInfo = ({ icon, title, flexDirection }: PropertyInfoProps) => {
  const propertyStyle = {
    ...propertyStyles,
    flexDirection: flexDirection || 'column',
  };
  return (
    <div style={propertyStyle}>
      <div style={propertyStyle.icon}>{icon}</div>
      <H4 style={{ color: colors.NeutralXdark, lineHeight: undefined }}>{title}</H4>
    </div>
  );
};
