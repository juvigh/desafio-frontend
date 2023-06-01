import React from 'react';
import { commonStyles } from '../cards-styles';
import './cards.css';

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cardContainer" style={commonStyles}>
      {children}
    </div>
  );
};
