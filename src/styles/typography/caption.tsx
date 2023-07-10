import React from 'react';
import { typography } from './typography';
import { colors } from '../colors';

interface CaptionProps {
  color?: keyof typeof colors;
  opacity?: number;
  children: React.ReactNode;
}

export const Caption = ({ children, color, opacity }: CaptionProps) => {
  const opacityValue = opacity ? `${opacity * 100}%` : '100%';

  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.small,
        fontWeight: typography.weight.regular,
        color: color ? colors[color] : colors.NeutralXdark,
        opacity: opacityValue,
      }}
    >
      {children}
    </p>
  );
};
