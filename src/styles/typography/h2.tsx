import { colors } from "../colors";
import { typography } from "./typography";

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxLarge,
        fontWeight: typography.weight.regular,
        color: colors.PrimaryDark,
        lineHeight: typography.lineHeight.medium,
      }}
    >
      {children}
    </h2>
  );
};
