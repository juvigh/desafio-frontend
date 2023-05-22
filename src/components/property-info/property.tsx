import React from 'react';
import { propertyStyles } from './property-info';
// import { Separator } from '../separator/separator';

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
      {/* <Separator className="spacing"></Separator> */}
      <h4>{title}</h4>
    </div>
  );
};
