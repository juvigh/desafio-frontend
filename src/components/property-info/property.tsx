import React from 'react';
import { iconStyle, propertyStyles } from './property-info';
import { H4 } from '../../styles/typography/h4';
import { colors } from '../../styles/colors';
import './property-info.css';

interface PropertyInfoProps {
  icon: React.ReactNode;
  title: string;
}

export const PropertyInfo = ({ icon, title }: PropertyInfoProps) => {
  return (
    <div className={'propertyConteiner'} style={propertyStyles}>
      <div style={iconStyle}>{icon}</div>
      <H4 style={{ color: colors.NeutralXdark, lineHeight: undefined }}>{title}</H4>
    </div>
  );
};
