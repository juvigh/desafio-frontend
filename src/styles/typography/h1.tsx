import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface H1Props {
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const H1 = ({ children, color }: H1Props) => {
  return (
    <h1
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxxxLarge,
        fontWeight: typography.weight.semiBold,
        color: color ? colors[color] : colors.PrimaryDark,
        lineHeight: typography.lineHeight.large,
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
};
