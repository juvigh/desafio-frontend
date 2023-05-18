import { colors } from '../colors';
import { typography } from './typography';

export const customStyles = {
  caption: {
    size: typography.size.small,
    weight: typography.weight.regular,
    color: colors.NeutralXdark,
  },
  prices: {
    bigPrice: {
      size: typography.size.xxxLarge,
      weight: typography.weight.bold,
      color: colors.NeutralXdark,
    },
    mediumPrice: {
      size: typography.size.xLarge,
      weight: typography.weight.bold,
      color: colors.NeutralXdark,
    },
    smallPrice: {
      size: typography.size.medium,
      weight: typography.weight.regular,
      color: colors.NeutralXdark,
    },
  },
};
