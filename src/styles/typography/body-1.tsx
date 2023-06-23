import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface Body1Props {
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const Body1 = ({ children, color }: Body1Props) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xLarge,
        fontWeight: typography.weight.regular,
        color: color ? colors[color] : colors.NeutralXdark,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
