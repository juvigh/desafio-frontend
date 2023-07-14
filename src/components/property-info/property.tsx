import React from 'react';
import { iconStyle, propertyStyles } from './property-info';
import { H4 } from '../../styles/typography/h4';
import './property-info.css';

interface PropertyInfoProps {
  icon: React.ReactNode;
  title: string;
}

export const PropertyInfo = ({ icon, title }: PropertyInfoProps) => {
  return (
    <div className={'propertyConteiner'} style={propertyStyles}>
      <div style={iconStyle}>{icon}</div>
      <H4 weight="semiBold" color="NeutralXdark">
    </div>
  );
};
