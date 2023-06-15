import React from 'react';
import { typography } from './typography';
import { colors } from '../colors';

interface CaptionProps {
  color?: keyof typeof colors;
  children: React.ReactNode;
}

export const Caption = ({ children, color }: CaptionProps) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.small,
        fontWeight: typography.weight.regular,
        color: color ? colors[color] : colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};
