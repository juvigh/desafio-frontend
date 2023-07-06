import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface LargeLabelProps {
  children: React.ReactNode;
  weight?: 'regular' | 'bold' | 'semiBold';
  color?: keyof typeof colors;
}

export const LargeLabel = ({ children, weight, color }: LargeLabelProps) => {
  let fontWeight;
  if (weight === 'regular') {
    fontWeight = typography.weight.regular;
  } else if (weight === 'bold') {
    fontWeight = typography.weight.bold;
  } else {
    fontWeight = typography.weight.semiBold;
  }
  return (
    <label
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.large,
        fontWeight: fontWeight,
        color: color ? colors[color] : colors.PrimaryXdark,
      }}
    >
      {children}
    </label>
  );
};

export const MediumLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <label
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.medium,
        fontWeight: typography.weight.regular,
        color: colors.NeutralWhite,
      }}
    >
      {children}
    </label>
  );
};
