import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface DisplayProps {
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const Display = ({ children, color }: DisplayProps) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxxxLarge,
        fontWeight: typography.weight.bold,
        color: color ? colors[color] : colors.PrimaryDark,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
