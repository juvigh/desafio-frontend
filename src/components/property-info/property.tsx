import React from 'react';
import { iconStyle, propertyStyles } from './property-info';
import { H4 } from '../../styles/typography/h4';
import './property-info.css';
import { Separator } from '../separator/separator';

interface PropertyInfoProps {
  icon: React.ReactNode;
  title: string;
  number?: number;
}

export const PropertyInfo = ({ icon, title, number }: PropertyInfoProps) => {
  return (
    <div className={'propertyConteiner'} style={propertyStyles}>
      <div style={iconStyle}>{icon}</div>
      <Separator vertical size={20} />
      <H4 weight="semiBold" color="NeutralXdark">
        {number} {title}
      </H4>
    </div>
  );
};
