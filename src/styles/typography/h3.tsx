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
        fontWeight: weight ? typography.weight[weight] : typography.weight.semiBold,
        color: color ? colors[color] : colors.NeutralDark,
        lineHeight: lineHeight ? lineHeight : typography.lineHeight.medium,
      }}
    >
      {children}
    </h3>
  );
};
