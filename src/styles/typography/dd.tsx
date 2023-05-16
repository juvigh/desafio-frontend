import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface DTDDProps {
  children: React.ReactNode;
  weight: 'regular' | 'bold';
}

export const DD = ({ children, weight }: DTDDProps) => {
  return (
    <dd
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.medium,
        fontWeight: typography.weight[weight === 'regular' ? 'regular' : 'bold'],
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </dd>
  );
};
