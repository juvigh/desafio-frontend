import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface H2Props {
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const H2 = ({ children, color }: H2Props) => {
  return (
    <h2
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxLarge,
        fontWeight: typography.weight.regular,
        color: color ? colors[color] : colors.PrimaryDark,
        lineHeight: typography.lineHeight.medium,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
};
