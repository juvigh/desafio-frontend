import React from 'react';
import { Price } from '../../../styles/typography/prices';

interface CardHeaderProps {
  title?: string;
}

export const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <div className="header">
      <Price size="big">R${title}</Price>
    </div>
  );
};
