import React from 'react';
import { cardStyles } from '../cards-styles';
import '../cards.css';

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card-container" style={cardStyles}>
      {children}
    </div>
  );
};
