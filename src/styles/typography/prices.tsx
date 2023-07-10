import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface PriceProps {
  size: 'big' | 'medium' | 'small';
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const Price = ({ size, children, color }: PriceProps) => {
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
        color: color ? colors[color] : colors.NeutralXdark,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
