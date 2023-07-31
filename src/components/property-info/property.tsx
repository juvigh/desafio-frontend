import React from 'react';
import { iconStyle, propertyStyles } from './property-info';
import { H4 } from '../../styles/typography/h4';
import './property-info.css';
import { Separator } from '../separator/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface PropertyInfoProps {
  icon: IconDefinition;
  title?: string;
  number?: number;
}

export const PropertyInfo = ({ icon, title, number }: PropertyInfoProps) => {
  return (
    <div className={'propertyConteiner'} style={propertyStyles}>
      <div style={iconStyle}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <Separator vertical size={20} />
      <H4 weight="semiBold" color="NeutralXdark">
        {number} {title}
      </H4>
    </div>
  );
};
