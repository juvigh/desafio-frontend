import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

export const Display = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxxxLarge,
        fontWeight: typography.weight.bold,
        color: colors.PrimaryDark,
      }}
    >
      {children}
    </p>
  );
};
