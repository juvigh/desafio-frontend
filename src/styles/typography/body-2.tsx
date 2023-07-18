import React from 'react';
import { colors } from '../colors';
import { typography } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight: 'regular' | 'bold';
  color?: keyof typeof colors;
  withLineThrough?: boolean;
}

export const Body2 = ({ children, weight, color, withLineThrough }: Body2Props) => {
  const textDecoration = withLineThrough ? 'line-through' : 'none';
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.medium,
        fontWeight: typography.weight[weight === 'regular' ? 'regular' : 'bold'],
        color: color ? colors[color] : colors.NeutralXdark,
        margin: 0,
        textDecoration,
      }}
    >
      {children}
    </p>
  );
};
