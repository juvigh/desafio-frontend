import { colors } from "../colors";
import { typography } from "./typography";

export const customStyles = {
  caption: {
    size: typography.font.size.small,
    weight: typography.font.weight.regular,
    color: colors.NeutralXdark,
  },
  prices: {
    bigPrice: {
      size: typography.font.size.xxxLarge,
      weight: typography.font.weight.bold,
      color: colors.NeutralXdark,
    },
    mediumPrice: {
      size: typography.font.size.xLarge,
      weight: typography.font.weight.bold,
      color: colors.NeutralXdark,
    },
    smallPrice: {
      size: typography.font.size.medium,
      weight: typography.font.weight.regular,
      color: colors.NeutralXdark,
    },
  },
};
