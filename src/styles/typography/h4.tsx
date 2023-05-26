import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface H4Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const H4 = ({ children, style }: H4Props) => {
  return (
    <h4
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.large,
        fontWeight: typography.weight.extraBold,
        color: colors.PrimaryDark,
        lineHeight: typography.lineHeight.medium,
        ...style,
      }}
    >
      {children}
    </h4>
  );
};
