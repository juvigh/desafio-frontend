import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface PriceProps {
  size: 'big' | 'medium' | 'small';
  children: React.ReactNode;
}

export const Price = ({ size, children }: PriceProps) => {
  let fontSize, fontWeight;

  if (size === 'big') {
    fontSize = typography.size.xxxLarge;
    fontWeight = typography.weight.bold;
  } else if (size === 'medium') {
    fontSize = typography.size.xLarge;
    fontWeight = typography.weight.bold;
  } else {
    fontSize = typography.size.medium;
    fontWeight = typography.weight.regular;
  }

  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize,
        fontWeight,
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};
