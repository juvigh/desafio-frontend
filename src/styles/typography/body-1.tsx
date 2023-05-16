import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

export const Body1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xLarge,
        fontWeight: typography.weight.regular,
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};
