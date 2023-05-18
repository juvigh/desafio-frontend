import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

export const H3 = ({ children }: { children: React.ReactNode }) => {
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
