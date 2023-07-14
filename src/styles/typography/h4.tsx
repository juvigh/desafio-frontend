import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface H4Props {
  children: React.ReactNode;
  color?: keyof typeof colors;
  weight: 'semiBold' | 'extraBold';
}

export const H4 = ({ children, color, weight }: H4Props) => {
  return (
    <h4
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.large,
        fontWeight: typography.weight[weight === 'semiBold' ? 'semiBold' : 'extraBold'],
        color: color ? colors[color] : colors.PrimaryDark,
        margin: 0,
      }}
    >
      {children}
    </h4>
  );
};
