import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';
interface H3Props {
  children: React.ReactNode;
  weight?: keyof typeof typography.weight;
  color?: keyof typeof colors;
  lineHeight?: string;
}

export const H3 = ({ children, color, weight, lineHeight }: H3Props) => {
  return (
    <h3
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xLarge,
        fontWeight: typography.weight.semiBold,
        color: colors.NeutralDark,
        lineHeight: typography.lineHeight.medium,
      }}
    >
      {children}
    </h3>
  );
};
