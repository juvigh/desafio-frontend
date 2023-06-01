import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

export const BigPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxxLarge,
        fontWeight: typography.weight.bold,
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};

export const MediumPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xLarge,
        fontWeight: typography.weight.bold,
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};

export const SmallPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.medium,
        fontWeight: typography.weight.regular,
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </p>
  );
};
