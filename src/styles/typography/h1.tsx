import { colors } from "../colors";
import { typography } from "./typography";

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.size.xxxxLarge,
        fontWeight: typography.weight.semiBold,
        color: colors.PrimaryDark,
        lineHeight: typography.lineHeight.large,
      }}
    >
      {children}
    </h1>
  );
};
