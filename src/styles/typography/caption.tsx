import React from 'react';
import { typography } from './typography';
import { colors } from '../colors';

export const Caption = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.small,
        fontWeight: typography.weight.regular,
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};
