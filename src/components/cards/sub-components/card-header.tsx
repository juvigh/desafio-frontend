import React from 'react';
import { commonStyles } from '../cards-styles';

interface CardHeaderProps {
  title: string;
}

export const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <div className="header">
      <p style={commonStyles.bigPrice}>R${title}</p>
    </div>
  );
};
